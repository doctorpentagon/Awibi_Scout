import { api } from './api.js';

/**
 * Title -> slug lookup, used to turn the bare names inside a navigational
 * index into working links.
 *
 * Fetched lazily and cached for the session, and only ever requested by pages
 * that actually contain an index list. An ordinary entry pays nothing for it,
 * which matters on a metered connection.
 */
let cache = null;
let inFlight = null;

const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[\u2010-\u2015]/g, '-')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

export async function loadEntryLinks(signal) {
  if (cache) return cache;
  if (inFlight) return inFlight;

  inFlight = api
    .entries({ limit: 2000 }, signal)
    .then((data) => {
      const map = new Map();
      for (const e of data.results || []) {
        // An index writes the bare subject — "Hyponatraemia" — while the entry
        // is titled "Hyponatraemia — Causes, Where It Is Seen, and Why It
        // Misleads". Index the head of the title (everything before the dash)
        // as well as the whole thing, or almost nothing matches.
        const head = String(e.title || '').split(/\s+[—–-]\s+/)[0];
        // Later entries must not silently overwrite earlier ones — first wins,
        // so a specific title beats a generic alias.
        for (const key of [e.title, e.short_title, head]) {
          const k = norm(key);
          if (k && !map.has(k)) map.set(k, e.slug);
        }
      }
      cache = map;
      return map;
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
}

/**
 * Resolve one list item. Index entries write names like
 * "NKCC2 (loop diuretic target)" or "Ca²⁺-ATPase (SERCA and PMCA)", so the
 * parenthetical is stripped before matching. Returns null when there is no
 * entry — a name with no target must stay plain text rather than become a
 * link that 404s.
 */
export function resolveEntryLink(map, text) {
  if (!map || typeof text !== 'string') return null;
  const candidates = [text, text.replace(/\s*\([^)]*\)\s*$/, '')];
  for (const c of candidates) {
    const hit = map.get(norm(c));
    if (hit) return hit;
  }
  return null;
}
