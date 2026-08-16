/**
 * Which entry ids are free?
 *
 * Three modules in a row were written with ids already in use, and each time
 * the build correctly refused to emit — but only AFTER the content was written,
 * and once the failure was missed until verification showed stale results.
 * Checking first is faster than renumbering afterwards.
 *
 * Run: node scripts/next-id.mjs [PREFIX] [COUNT]
 *   node scripts/next-id.mjs              -> every prefix in use, and its next free id
 *   node scripts/next-id.mjs AS-ORTH 4    -> the next four free AS-ORTH ids
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const serverRoot = path.resolve(here, '..');

const taken = new Set();

for (const f of fs.readdirSync(path.join(serverRoot, 'content'))) {
  if (!f.endsWith('.mjs') || f.startsWith('_')) continue;
  const s = fs.readFileSync(path.join(serverRoot, 'content', f), 'utf8');
  for (const m of s.matchAll(/id:\s*'([A-Z][A-Z-]*-\d+)'/g)) taken.add(m[1]);
}

// The base release counts too — the build rejects collisions with it.
const base = JSON.parse(fs.readFileSync(path.join(serverRoot, 'data', 'entries.v4.json'), 'utf8'));
for (const e of base.entries) taken.add(e.id);

const split = (id) => {
  const i = id.lastIndexOf('-');
  return [id.slice(0, i), Number(id.slice(i + 1))];
};

function nextFree(prefix, count = 1) {
  const out = [];
  for (let i = 1; out.length < count; i += 1) {
    const id = `${prefix}-${String(i).padStart(4, '0')}`;
    if (!taken.has(id)) out.push(id);
  }
  return out;
}

const [, , argPrefix, argCount] = process.argv;

if (argPrefix) {
  const prefix = argPrefix.replace(/-\d+$/, '').replace(/-$/, '');
  console.log(nextFree(prefix, Number(argCount) || 1).join('\n'));
} else {
  const byPrefix = new Map();
  for (const id of taken) {
    const [p, n] = split(id);
    byPrefix.set(p, Math.max(byPrefix.get(p) ?? 0, n));
  }
  console.log('PREFIX          IN USE  HIGHEST  NEXT FREE');
  for (const [p, highest] of [...byPrefix].sort()) {
    const used = [...taken].filter((t) => t.startsWith(`${p}-`)).length;
    console.log(
      `${p.padEnd(15)} ${String(used).padStart(5)}  ${String(highest).padStart(7)}  ${nextFree(p)[0]}`,
    );
  }
  console.log(`\n${taken.size} ids in use. Pass a prefix and a count for a specific block.`);
}
