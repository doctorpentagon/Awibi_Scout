import { normalise, tokenise } from './normalise.js';
import { damerauLevenshtein, maxDistanceFor } from './fuzzy.js';

/**
 * The seven-state resolution ladder from the v4 spec. Scout never guesses: it
 * names which state it reached and keeps the user's original word visible.
 *
 *   1 BRIDGE       query matches a concept bridge          -> open target
 *   2 EXACT        BM25F top hit >= 0.62 confidence        -> entry card
 *   3 DISAMBIGUATE ambiguous abbreviation, or top-2 <8%    -> chooser chips
 *   4 NAVIGATE     navigational noun                       -> hub + filter
 *   5 SUBWORD      trigram Jaccard >= 0.30                 -> partial matches
 *   6 FUZZY        edit distance within threshold          -> did you mean
 *   7 GAP          nothing above threshold                 -> chips + LOG IT
 */

const CONFIDENCE_EXACT = 0.62;
const DISAMBIGUATION_DELTA = 0.08;

/** Sub-word hits are real but weaker evidence than an exact token match. */
const SUBWORD_DAMPING = 0.5;
const EXACT_PRIORITY = 2;

export class Resolver {
  constructor(index, repo) {
    this.index = index;
    this.repo = repo;
    /** Zero-result queries, in memory. Never contains patient data. */
    this.gapLog = new Map();
  }

  resolve(rawQuery, options = {}) {
    const { emergencyFirst = false, limit = 20, type = null, hazard = null, domain = null } = options;
    const term = String(rawQuery || '').trim();
    const q = normalise(term);

    if (!q) {
      return this.#empty(term, options);
    }

    // ---- L0 / state 1: concept bridge -------------------------------------
    const bridgeSlug = this.index.bridges.get(q);
    if (bridgeSlug) {
      const entry = this.repo.bySlug.get(bridgeSlug);
      if (entry) {
        return {
          state: 'BRIDGE',
          term,
          message: null,
          target: this.repo.summarise(entry),
          results: [this.repo.summarise(entry)],
          total: 1,
        };
      }
    }

    // Expand unambiguous abbreviations before tokenising: dka -> diabetic ketoacidosis
    const expansion = this.index.unambiguous[q];
    const tokens = tokenise(expansion ? `${q} ${expansion}` : q);

    // ---- state 3a: ambiguous abbreviation ---------------------------------
    const ambiguous = this.index.ambiguous[q];
    if (ambiguous?.length) {
      return {
        state: 'DISAMBIGUATE',
        term,
        message: `“${term}” means more than one thing`,
        note: 'Scout will not guess. Your term stays as you typed it. Choose the meaning you want.',
        options: ambiguous.map((label) => ({ label, query: label })),
        results: [],
        total: 0,
      };
    }

    // ---- L5 / state 4: navigational noun ----------------------------------
    const broad = this.index.broadConcepts[q];
    if (broad) {
      const filtered = this.#applyFacets(this.repo.entries, { type, hazard, domain, broad });
      // Rank inside the facet by actual relevance to the noun, so "shock"
      // leads with the shock entries rather than whatever sorts first.
      const relevance = this.index.bm25f(tokens);
      const pairs = filtered.map((e) => [e.id, relevance.get(e.id) || 0]);
      return {
        state: 'NAVIGATE',
        term,
        message: 'Broad query — open an index',
        hub: { slug: broad.hub, title: this.#hubTitle(broad.hub), facet: broad.facet },
        results: this.#rank(pairs, { emergencyFirst, limit }),
        total: filtered.length,
      };
    }

    // ---- L1 / state 2: BM25F ----------------------------------------------
    const scores = this.index.bm25f(tokens);
    this.#applyBoosts(scores, { q, tokens, emergencyFirst });

    let candidates = [...scores.entries()];
    candidates = this.#facetFilter(candidates, { type, hazard, domain });
    candidates.sort((a, b) => b[1] - a[1]);

    if (candidates.length) {
      const top = candidates[0][1];
      const confidence = this.#confidence(top);
      const second = candidates[1]?.[1] ?? 0;

      // ---- state 3b: top two within 8% -----------------------------------
      if (candidates.length > 1 && top > 0 && (top - second) / top < DISAMBIGUATION_DELTA && confidence >= CONFIDENCE_EXACT) {
        const close = candidates.filter(([, s]) => (top - s) / top < DISAMBIGUATION_DELTA).slice(0, 4);
        return {
          state: 'DISAMBIGUATE',
          term,
          message: `“${term}” could mean more than one entry`,
          note: 'Scout will not guess. Choose the one you want.',
          options: close.map(([id]) => {
            const e = this.repo.byId.get(id);
            return { label: e.title, query: e.title, slug: e.slug };
          }),
          results: this.#rank(candidates, { emergencyFirst, limit }),
          total: candidates.length,
        };
      }

      if (confidence >= CONFIDENCE_EXACT) {
        return {
          state: 'EXACT',
          term,
          confidence: Number(confidence.toFixed(3)),
          results: this.#rank(candidates, { emergencyFirst, limit }),
          total: candidates.length,
        };
      }
    }

    // ---- L3 / state 5: sub-word -------------------------------------------
    // Spec: fires when L1 returns < 3 hits, OR any query token is >= 4 chars.
    if (candidates.length < 3 || tokens.some((t) => t.length >= 4)) {
      const matched = this.index.subwordTokens(tokens);
      if (matched.size) {
        const exact = new Map(candidates);
        const merged = new Map(candidates);

        // Score the matched vocabulary terms through the normal postings,
        // weighted by how close each match was and damped, so that a pile of
        // loose sub-word hits cannot out-score one true match.
        for (const [token, similarity] of matched) {
          const scores2 = this.index.bm25f([token]);
          for (const [id, s] of scores2) {
            merged.set(id, (merged.get(id) || 0) + s * similarity * SUBWORD_DAMPING);
          }
        }

        // An entry that matched the typed word exactly always outranks one that
        // merely contains it inside a longer word. Searching "hyperkalaemia"
        // must surface the entry that carries that term, not the entry that
        // happens to share the most trigrams.
        for (const [id, score] of exact) {
          if (score > 0) merged.set(id, (merged.get(id) || 0) + score * EXACT_PRIORITY);
        }

        const list = this.#facetFilter([...merged.entries()], { type, hazard, domain })
          .sort((a, b) => b[1] - a[1]);

        // Only claim SUBWORD if it actually beat what L1 alone produced.
        if (list.length && list.length > candidates.length) {
          return {
            state: 'SUBWORD',
            term,
            message: `Showing partial matches for “${term}”`,
            matched_terms: [...matched.keys()].slice(0, 8),
            results: this.#rank(list, { emergencyFirst, limit }),
            total: list.length,
          };
        }
      }
    }

    // ---- L4 / state 6: fuzzy ----------------------------------------------
    const suggestions = this.#fuzzySuggestions(tokens);
    if (suggestions.length) {
      return {
        state: 'FUZZY',
        term,
        message: 'Nothing cleared the confidence threshold. Did you mean:',
        suggestions,
        results: this.#rank(candidates, { emergencyFirst, limit }),
        total: candidates.length,
      };
    }

    // ---- below the confidence gate, but NOT empty --------------------------
    // The confidence threshold decides whether Scout is sure enough to present
    // a result as the answer. It must NOT decide whether the result is shown at
    // all. Falling through to GAP here would tell a clinician "we don't carry
    // that" while the entry sits in the library — the exact failure the
    // resolution ladder exists to prevent. A gap means nothing matched, not
    // "matched, but only moderately".
    if (candidates.length) {
      return {
        state: 'PARTIAL',
        term,
        message: `Closest matches for “${term}”`,
        note: 'Scout is not confident these are exactly what you meant, so they are ranked rather than opened.',
        confidence: Number(this.#confidence(candidates[0][1]).toFixed(3)),
        results: this.#rank(candidates, { emergencyFirst, limit }),
        total: candidates.length,
      };
    }

    // ---- state 7: gap ------------------------------------------------------
    this.logGap(term, q);
    return {
      state: 'GAP',
      term,
      message: `We don't carry “${term}” yet`,
      note: 'That is a gap in the library, not a failed search. Your query is logged with a timestamp. Three requests in a week moves it into the build queue. Start from the nearest index below.',
      chips: this.repo.searchSpec.empty_state_chips,
      results: [],
      total: 0,
    };
  }

  #empty(term, { emergencyFirst = false, limit = 20, type = null, hazard = null, domain = null }) {
    const filtered = this.#applyFacets(this.repo.entries, { type, hazard, domain });
    return {
      state: 'BROWSE',
      term,
      results: this.#rank(filtered.map((e) => [e.id, 0]), { emergencyFirst, limit, alphabetical: true }),
      total: filtered.length,
    };
  }

  /** Confidence normalised into 0..1 so the 0.62 gate is meaningful. */
  #confidence(score) {
    return score / (score + 6);
  }

  #applyBoosts(scores, { q, tokens, emergencyFirst }) {
    const b = this.index.boosts;
    const p = this.index.penalties;

    // exact title / also_known_as phrase match
    const phraseHits = this.index.phraseIndex.get(q);
    if (phraseHits) {
      for (const id of phraseHits) {
        const entry = this.repo.byId.get(id);
        const isTitle = normalise(entry.title) === q || normalise(entry.short_title) === q;
        scores.set(id, (scores.get(id) || 0.5) * (isTitle ? b.exact_title_match : b.also_known_as_exact));
      }
    }

    for (const [id, score] of scores) {
      const entry = this.repo.byId.get(id);
      if (!entry) continue;
      let s = score;

      // multi-token phrase adjacency in the title
      if (tokens.length > 1 && normalise(entry.title).includes(tokens.join(' '))) s *= b.phrase_match;

      if (emergencyFirst && (entry.type === 'emergency' || entry.urgency === 'immediate')) {
        s *= b.emergency_entry_in_emergency_context;
      }
      if (entry.jurisdiction === 'nigeria') s *= b.nigeria_jurisdiction_at_nigerian_site;
      if (entry.governance?.review_overdue) s *= p.review_overdue;
      if (entry.governance?.local_confirmation_required) s *= p.needs_local_check;

      scores.set(id, s);
    }
  }

  #fuzzySuggestions(tokens) {
    const out = new Map();
    for (const token of tokens) {
      if (token.length < 3) continue;
      const max = maxDistanceFor(token);
      const candidates = new Set([
        ...this.index.prefixMatches(token.slice(0, Math.max(2, token.length - max)), 60),
      ]);
      for (const cand of candidates) {
        if (cand === token) continue;
        const d = damerauLevenshtein(token, cand, max);
        if (d <= max) {
          const prev = out.get(cand);
          if (prev === undefined || d < prev) out.set(cand, d);
        }
      }
    }
    return [...out.entries()]
      .sort((a, b) => a[1] - b[1])
      .slice(0, 5)
      .map(([label]) => ({ label, query: label }));
  }

  #facetFilter(pairs, { type, hazard, domain }) {
    if (!type && !hazard && !domain) return pairs;
    return pairs.filter(([id]) => {
      const e = this.repo.byId.get(id);
      if (!e) return false;
      if (type && e.type !== type) return false;
      if (hazard && e.hazard !== hazard) return false;
      if (domain && !(e.domains || []).includes(domain)) return false;
      return true;
    });
  }

  #applyFacets(entries, { type, hazard, domain, broad }) {
    return entries.filter((e) => {
      if (type && e.type !== type) return false;
      if (hazard && e.hazard !== hazard) return false;
      if (domain && !(e.domains || []).includes(domain)) return false;
      if (broad?.facet?.family && !broad.facet.family.includes(e.type)) return false;
      return true;
    });
  }

  /** Order by risk, then score, then title — matching "Ordered by risk, then title". */
  #rank(pairs, { emergencyFirst, limit, alphabetical = false }) {
    const hazardRank = { critical: 0, high: 1, moderate: 2, low: 3 };
    const rows = pairs
      .map(([id, score]) => ({ entry: this.repo.byId.get(id), score }))
      .filter((r) => r.entry);

    rows.sort((a, b) => {
      if (emergencyFirst || alphabetical) {
        const ha = hazardRank[a.entry.hazard] ?? 9;
        const hb = hazardRank[b.entry.hazard] ?? 9;
        if (ha !== hb) return ha - hb;
      }
      if (b.score !== a.score) return b.score - a.score;
      return a.entry.title.localeCompare(b.entry.title);
    });

    return rows.slice(0, limit).map((r) => ({
      ...this.repo.summarise(r.entry),
      score: Number(r.score.toFixed(4)),
    }));
  }

  #hubTitle(slug) {
    const entry = this.repo.bySlug.get(slug);
    return entry ? entry.title : slug.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  /** Spec: log the query, never patient data. Three hits in a week promotes it. */
  logGap(term, normalised) {
    const key = normalised;
    const now = Date.now();
    const record = this.gapLog.get(key) || { term, normalised, hits: 0, first_seen: now, last_seen: now };
    record.hits += 1;
    record.last_seen = now;
    record.promoted = record.hits >= (this.repo.searchSpec.zero_result_logging?.auto_promote_to_backlog_after_hits ?? 3);
    this.gapLog.set(key, record);
    return record;
  }

  gaps() {
    return [...this.gapLog.values()].sort((a, b) => b.hits - a.hits || b.last_seen - a.last_seen);
  }

  /** L2 — as-you-type suggestions from keystroke 2. */
  suggest(rawQuery, limit = 8) {
    const q = normalise(rawQuery);
    if (q.length < 2) return [];

    const seen = new Set();
    const out = [];

    for (const [phrase, ids] of this.index.phraseIndex) {
      if (out.length >= limit) break;
      if (!phrase.startsWith(q)) continue;
      for (const id of ids) {
        if (seen.has(id)) continue;
        seen.add(id);
        const e = this.repo.byId.get(id);
        if (e) out.push({ id: e.id, title: e.title, short_title: e.short_title, slug: e.slug, type: e.type, hazard: e.hazard });
        break;
      }
    }

    if (out.length < limit) {
      const tokens = this.index.prefixMatches(q, 30);
      const scores = this.index.bm25f(tokens.slice(0, 8));
      const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1]);
      for (const [id] of ranked) {
        if (out.length >= limit) break;
        if (seen.has(id)) continue;
        seen.add(id);
        const e = this.repo.byId.get(id);
        if (e) out.push({ id: e.id, title: e.title, short_title: e.short_title, slug: e.slug, type: e.type, hazard: e.hazard });
      }
    }

    return out;
  }
}
