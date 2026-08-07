/**
 * Damerau-Levenshtein with an early-exit band. Only ever run over the trie
 * candidate set, never the whole vocabulary — the spec caps it at L4.
 */
export function damerauLevenshtein(a, b, max) {
  const al = a.length;
  const bl = b.length;
  if (Math.abs(al - bl) > max) return max + 1;
  if (a === b) return 0;

  let prev2 = null;
  let prev = new Array(bl + 1);
  let curr = new Array(bl + 1);
  for (let j = 0; j <= bl; j += 1) prev[j] = j;

  for (let i = 1; i <= al; i += 1) {
    curr[0] = i;
    let rowMin = curr[0];
    for (let j = 1; j <= bl; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        v = Math.min(v, prev2[j - 2] + 1);
      }
      curr[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev2 = prev;
    prev = curr;
    curr = new Array(bl + 1);
  }
  return prev[bl];
}

/** Spec: distance 1 for tokens <= 5 chars, 2 for longer. */
export function maxDistanceFor(token) {
  return token.length <= 5 ? 1 : 2;
}
