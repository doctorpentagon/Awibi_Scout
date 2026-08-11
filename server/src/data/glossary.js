import { ABBREVIATIONS, CASE_SENSITIVE } from '../../content/_abbreviations.mjs';

/**
 * Derive the abbreviation glossary for an entry from its own text.
 *
 * Shared by the content build and by the repository, so the 158 base-release
 * entries get exactly the same treatment as the extension entries. An
 * abbreviation is only listed if the entry does NOT already spell it out, so
 * entries written properly gain nothing and stay uncluttered.
 */
const flat = (v, out = []) => {
  if (v == null) return out;
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => flat(x, out));
  else if (typeof v === 'object') Object.values(v).forEach((x) => flat(x, out));
  return out;
};

export function deriveGlossary(entry) {
  const haystack = [
    entry.title,
    entry.short_title,
    entry.summary,
    ...flat(entry.body),
    ...(entry.warnings || []),
    ...(entry.limitations || []),
    ...(entry.flashcards || []).map((c) => `${c.q || ''} ${c.a || ''}`),
  ]
    .filter(Boolean)
    .join(' ');

  const normalised = haystack.toLowerCase().replace(/[^a-z0-9]+/g, ' ');
  const out = [];

  for (const [abbr, def] of Object.entries(ABBREVIATIONS)) {
    const escaped = abbr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = `\\b${escaped}\\b`;
    const used = CASE_SENSITIVE.has(abbr)
      ? new RegExp(pattern).test(haystack)
      : new RegExp(pattern, 'i').test(haystack);
    if (!used) continue;

    const fullNorm = def.full.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (normalised.includes(fullNorm)) continue;

    out.push({ abbr, full: def.full, ...(def.gloss ? { gloss: def.gloss } : {}) });
  }

  return out.sort((a, b) => a.abbr.localeCompare(b.abbr));
}
