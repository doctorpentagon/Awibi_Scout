import fs from 'node:fs';
import path from 'node:path';
import { config } from '../config/index.js';
import { logger } from '../lib/logger.js';
import { deriveGlossary } from './glossary.js';

function readJson(file) {
  const full = path.join(config.dataDir, file);
  return JSON.parse(fs.readFileSync(full, 'utf8'));
}

function readCsv(file) {
  const full = path.join(config.dataDir, file);
  const text = fs.readFileSync(full, 'utf8').replace(/^﻿/, '');
  const rows = [];
  let field = '';
  let row = [];
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 1; } else { quoted = false; }
      } else field += ch;
      continue;
    }
    if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (ch !== '\r') field += ch;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  const [header, ...body] = rows.filter((r) => r.some((c) => c !== ''));
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

/**
 * The library. Loaded once at boot, held in memory, never mutated.
 *
 * "Nothing already released is quietly edited — it is replaced." Entries are
 * frozen so no request handler can drift the shipped content.
 */
class Repository {
  constructor() {
    const t0 = performance.now();

    const entriesFile = readJson('entries.v4.json');
    const visualPlan = readJson('visual-plan.v5.json');

    // The v6 content extension. It ADDS areas and supersedes nothing — the
    // build refuses to emit an entry whose id or slug collides with v4, so a
    // released entry can never be silently replaced by an extension.
    let extension = { entries: [], release: null };
    try {
      extension = readJson('entries.v6.json');
    } catch {
      logger.warn('no content extension found — running on the base release only');
    }

    // The v6 build attaches a glossary to its own entries. The v4 base release
    // predates that, so derive one here for anything still missing it — every
    // entry gets the same treatment regardless of which release it came from.
    const allEntries = [...entriesFile.entries, ...extension.entries].map((e) =>
      e.glossary ? e : { ...e, glossary: deriveGlossary(e) },
    );

    this.meta = {
      contentRelease: entriesFile.release,
      extensionRelease: extension.release,
      imagingRelease: config.release.imaging,
      schemaVersion: entriesFile.schema_version,
      buildDate: entriesFile.build_date,
      entryCount: allEntries.length,
      baseEntryCount: entriesFile.entries.length,
      extensionEntryCount: extension.entries.length,
      visualCount: visualPlan.assets.length,
      types: entriesFile.types,
      intendedUse: config.intendedUse,
    };

    this.searchSpec = readJson('search.v4.json');
    this.plainLanguage = readJson('plain-language.v4.json');
    this.unitConversions = readJson('unit-conversions.v4.json');
    this.engagement = readJson('engagement.v4.json');
    this.imagingSpec = readJson('imaging-spec.v5.json');
    this.annotationExample = readJson('annotation-example.v5.json');
    this.governance = readJson('governance.json');
    this.lexicon = readJson('lexicon.json');
    this.visualGaps = readCsv('visual-gaps.v5.csv');
    this.visualSummary = visualPlan.summary;

    // ---- visual assets, keyed and reverse-indexed to the entries they serve ----
    this.visuals = visualPlan.assets.map((a) => Object.freeze({ ...a }));
    this.visualById = new Map(this.visuals.map((v) => [v.asset_id, v]));
    this.visualsByEntryId = new Map();
    for (const v of this.visuals) {
      if (!v.serves_entry_id) continue;
      const list = this.visualsByEntryId.get(v.serves_entry_id) || [];
      list.push(v);
      this.visualsByEntryId.set(v.serves_entry_id, list);
    }

    // ---- entries ----
    this.entries = allEntries.map((e) => Object.freeze(e));
    this.byId = new Map(this.entries.map((e) => [e.id, e]));
    this.bySlug = new Map(this.entries.map((e) => [e.slug, e]));

    this.types = [...new Set(this.entries.map((e) => e.type))].sort();
    this.domains = [...new Set(this.entries.flatMap((e) => e.domains || []))].sort();
    this.hazards = ['critical', 'high', 'moderate', 'low'];

    logger.info('library loaded', {
      entries: this.entries.length,
      base: entriesFile.entries.length,
      extension: extension.entries.length,
      visuals: this.visuals.length,
      ms: Math.round(performance.now() - t0),
    });
  }

  /** Entry plus the v5 visual assets specified for it. */
  entryWithVisuals(entry) {
    if (!entry) return null;
    return { ...entry, visual_assets: this.visualsByEntryId.get(entry.id) || [] };
  }

  get(idOrSlug) {
    return this.byId.get(idOrSlug) || this.bySlug.get(idOrSlug) || null;
  }

  /** Compact shape for lists — keeps the results payload small on a weak link. */
  summarise(entry) {
    const visuals = this.visualsByEntryId.get(entry.id) || [];
    return {
      id: entry.id,
      type: entry.type,
      title: entry.title,
      short_title: entry.short_title,
      slug: entry.slug,
      summary: entry.summary,
      hazard: entry.hazard,
      urgency: entry.urgency,
      domains: entry.domains || [],
      jurisdiction: entry.jurisdiction,
      counts: {
        checkboxes: entry.checkboxes?.length || 0,
        flashcards: entry.flashcards?.length || 0,
        warnings: entry.warnings?.length || 0,
        visuals: visuals.length,
      },
      flags: {
        timeCritical: entry.urgency === 'immediate' || entry.hazard === 'critical',
        confirmLocally: Boolean(entry.governance?.local_confirmation_required),
        nigeriaNote: entry.jurisdiction === 'nigeria',
        hasCalculator: Boolean(entry.logic && Object.keys(entry.logic).length),
        hasVisual: visuals.length > 0,
      },
    };
  }
}

let instance = null;
export function getRepository() {
  if (!instance) instance = new Repository();
  return instance;
}
