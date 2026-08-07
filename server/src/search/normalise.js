/**
 * Normalisation shared by index build and query time. Both sides MUST use these
 * exact functions or the postings will not line up.
 *
 * Spec: lowercase; strip accents; collapse whitespace; keep digits; index BOTH
 * British and American spellings rather than folding one into the other.
 */

const STOP = new Set(
  'the a an of of on in for and to with or is are be was were as at by it its this that not no from any all'.split(' '),
);

/** British/American pairs. Both forms are indexed so either query hits. */
const SPELLING_PAIRS = [
  [/ae/g, 'e'],   // anaemia -> anemia
  [/oe/g, 'e'],   // oedema -> edema
  [/ise\b/g, 'ize'],
  [/isation\b/g, 'ization'],
  [/ph/g, 'f'],   // sulphate -> sulfate
  [/our\b/g, 'or'], // colour -> color
];

export function normalise(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s%/+.:-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenise(text) {
  return normalise(text)
    .split(/[\s/,:;()[\]]+/)
    .map((t) => t.replace(/^[-.]+|[-.]+$/g, ''))
    .filter((t) => t.length > 0 && !STOP.has(t));
}

/** Alternate spellings of a token, for indexing only. Never used at query time. */
export function spellingVariants(token) {
  const out = new Set([token]);
  for (const [re, to] of SPELLING_PAIRS) {
    if (re.test(token)) out.add(token.replace(re, to));
    re.lastIndex = 0;
  }
  return [...out];
}

/**
 * Trigrams over a padded token so prefixes are captured:
 * 'tb' -> '  t', ' tb', 'tb '
 */
export function trigrams(token) {
  const padded = `  ${token} `;
  const out = new Set();
  for (let i = 0; i + 3 <= padded.length; i += 1) out.add(padded.slice(i, i + 3));
  return out;
}

export { STOP };
