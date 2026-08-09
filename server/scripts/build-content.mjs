/**
 * Content build.
 *
 * Authored modules under server/content/ are compact on purpose — a clinical
 * author should write clinical content, not schema boilerplate. This expands
 * each one into a full schema-4.0.0 entry: slug, search terms, field weights,
 * governance stamp, review date.
 *
 * Governance rules this enforces and cannot be talked out of:
 *   · approved_for_release is ALWAYS false. A pipeline cannot approve content.
 *   · clinical_reviewer is ALWAYS null until a named human is recorded.
 *   · verification_status defaults to standard_teaching, never "verified".
 *
 * Run: npm run build:content --workspace server
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const serverRoot = path.resolve(here, '..');
const contentDir = path.join(serverRoot, 'content');
const outFile = path.join(serverRoot, 'data', 'entries.v6.json');

const RELEASE = 'AWIBI-SCOUT-CONTENT-2026.08.R3';
const SCHEMA = '4.0.0';
const BUILD_DATE = '2026-08-07';
const REVIEW_DUE = '2027-08-07';

const STOP = new Set(
  'the a an of on in for and to with or is are be was were as at by it its this that not no from any all what why how when where which'.split(' '),
);

function slugify(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/** Every string in the body, so body text is searchable. */
function flatten(value, out = []) {
  if (value == null) return out;
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => flatten(v, out));
  else if (typeof value === 'object') Object.values(value).forEach((v) => flatten(v, out));
  return out;
}

/**
 * Search terms are the union of what the author supplied and what can be
 * derived from the title and alternate names. Being generous here is the whole
 * point — a term that is not in this list cannot be found.
 */
function buildTerms(entry) {
  const terms = new Set();
  const add = (s) => {
    const t = String(s || '').toLowerCase().trim();
    if (t.length > 1) terms.add(t);
  };

  add(entry.title);
  add(entry.short);
  (entry.aka || []).forEach(add);
  (entry.terms || []).forEach(add);

  // Individual significant words from the title, so partial queries land.
  for (const word of String(entry.title).toLowerCase().split(/[^a-z0-9]+/)) {
    if (word.length > 3 && !STOP.has(word)) add(word);
  }

  return [...terms].sort();
}

function expand(entry, index) {
  if (!entry.title) throw new Error(`Entry ${index} has no title`);
  if (!entry.summary) throw new Error(`${entry.title}: no summary`);
  if (!entry.id) throw new Error(`${entry.title}: no id`);

  const slug = entry.slug || slugify(entry.title);
  const bodyText = flatten(entry.body).join(' ');

  const full = {
    id: entry.id,
    schema_version: SCHEMA,
    content_release: RELEASE,
    type: entry.type || 'named_knowledge',
    title: entry.title,
    short_title: entry.short || entry.title,
    slug,
    also_known_as: entry.aka || [],
    summary: entry.summary,
    domains: entry.domains || ['pathology'],
    intents: entry.intents || ['identify'],
    populations: entry.populations || ['all_ages'],
    contexts: entry.contexts || ['routine'],
    hazard: entry.hazard || 'moderate',
    urgency: entry.urgency || 'routine',
    jurisdiction: entry.jurisdiction || 'international',
    search: {
      terms: buildTerms(entry),
      ambiguous_terms: entry.ambiguous || [],
      phrases: entry.phrases || [],
      field_weights: {
        title: 8,
        short_title: 6,
        also_known_as: 5,
        terms: 4,
        summary: 2,
        body: 1,
        flashcards: 0.5,
      },
    },
    body: entry.body || {},
    inputs: entry.inputs || [],
    logic: entry.logic || {},
    outputs: entry.outputs || [],
    warnings: entry.warnings || [],
    limitations: entry.limitations || [],
    flashcards: entry.cards || [],
    checkboxes: entry.checks || [],
    related_slugs: entry.related || [],
    patient_integration: entry.patient_integration || null,
    governance: {
      evidence_tier: entry.evidence_tier || 'T5_textbook_or_standard_teaching',
      verification_status: 'standard_teaching',
      sources: entry.sources || [],
      nigeria_overlay: entry.nigeria || null,
      build_date: BUILD_DATE,
      review_interval_months: 12,
      next_review_due: REVIEW_DUE,
      // These two are not configurable from the authored source. A build
      // cannot sign off clinical content.
      clinical_reviewer: null,
      approved_for_release: false,
      local_confirmation_required: Boolean(entry.confirm_locally),
      supersedes: null,
      content_hash: crypto
        .createHash('sha256')
        .update(entry.title + entry.summary + bodyText)
        .digest('hex')
        .slice(0, 16),
    },
  };

  return full;
}

async function main() {
  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mjs'))
    .sort();

  const all = [];
  const perFile = {};

  // ---- encoding guard ----
  // A UTF-8 module read as latin1 and rewritten produces mojibake ("â€”" for an
  // em-dash) or U+FFFD replacement characters. Both are invisible in a diff of
  // a large file and would ship corrupted clinical text to a reader. This has
  // happened once; it must never happen silently again.
  const encodingErrors = [];
  const MOJIBAKE = /â€|Â·|Ã©|â€™/;
  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    if (raw.charCodeAt(0) === 0xfeff) encodingErrors.push(`${file}: has a UTF-8 BOM — strip it`);
    if (MOJIBAKE.test(raw)) encodingErrors.push(`${file}: mojibake — the file was decoded as latin1 somewhere`);
    if (raw.includes('�')) encodingErrors.push(`${file}: contains U+FFFD replacement characters — text was lost`);
  }
  if (encodingErrors.length) {
    console.error(`ENCODING CHECK FAILED — ${encodingErrors.length} problems`);
    encodingErrors.forEach((e) => console.error('  ' + e));
    process.exit(1);
  }

  for (const file of files) {
    const mod = await import(`file://${path.join(contentDir, file)}`);
    const entries = mod.default || mod.entries || [];
    perFile[file] = entries.length;
    entries.forEach((e, i) => all.push(expand(e, `${file}#${i}`)));
  }

  // ---- validation ----
  const errors = [];
  const seenIds = new Set();
  const seenSlugs = new Set();

  for (const e of all) {
    if (seenIds.has(e.id)) errors.push(`Duplicate id: ${e.id}`);
    seenIds.add(e.id);
    if (seenSlugs.has(e.slug)) errors.push(`Duplicate slug: ${e.slug}`);
    seenSlugs.add(e.slug);
    if (!e.search.terms.length) errors.push(`${e.id}: no search terms`);
    if (!Object.keys(e.body).length) errors.push(`${e.id}: empty body`);
    if (!['critical', 'high', 'moderate', 'low'].includes(e.hazard)) {
      errors.push(`${e.id}: bad hazard "${e.hazard}"`);
    }
  }

  // Cross-check against the base release so we never collide with it.
  const base = JSON.parse(fs.readFileSync(path.join(serverRoot, 'data', 'entries.v4.json'), 'utf8'));
  for (const b of base.entries) {
    if (seenIds.has(b.id)) errors.push(`Collides with v4 id: ${b.id}`);
    if (seenSlugs.has(b.slug)) errors.push(`Collides with v4 slug: ${b.slug}`);
  }

  if (errors.length) {
    console.error(`VALIDATION FAILED — ${errors.length} errors`);
    errors.slice(0, 40).forEach((e) => console.error('  ' + e));
    process.exit(1);
  }

  const byType = {};
  const byDomain = {};
  const byHazard = {};
  for (const e of all) {
    byType[e.type] = (byType[e.type] || 0) + 1;
    byHazard[e.hazard] = (byHazard[e.hazard] || 0) + 1;
    for (const d of e.domains) byDomain[d] = (byDomain[d] || 0) + 1;
  }

  fs.writeFileSync(
    outFile,
    JSON.stringify(
      {
        release: RELEASE,
        schema_version: SCHEMA,
        build_date: BUILD_DATE,
        entry_count: all.length,
        extends: base.release,
        note: 'Content extension. Adds areas; supersedes nothing. Every entry is unreviewed and unapproved.',
        entries: all,
      },
      null,
      1,
    ),
  );

  console.log(`PASS — ${all.length} entries, 0 errors`);
  console.log('\nBy file:');
  Object.entries(perFile).forEach(([f, n]) => console.log(`  ${String(n).padStart(3)}  ${f}`));
  console.log('\nBy type:');
  Object.entries(byType)
    .sort((a, b) => b[1] - a[1])
    .forEach(([t, n]) => console.log(`  ${String(n).padStart(3)}  ${t}`));
  console.log('\nBy risk:', JSON.stringify(byHazard));
  console.log(`\nWritten: ${path.relative(serverRoot, outFile)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
