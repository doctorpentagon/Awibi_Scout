import { Router } from 'express';
import { getRepository } from '../data/repository.js';
import { runCalculation } from '../calc/engine.js';
import { asyncHandler } from '../middleware/index.js';
import { notFound } from '../lib/errors.js';

const router = Router();

/** GET /api/entries — the library, filterable, grouped-ready. */
router.get('/entries', (req, res) => {
  const repo = getRepository();
  const { type, hazard, domain, jurisdiction, q, limit = '500', offset = '0' } = req.query;

  let rows = repo.entries;
  if (type) rows = rows.filter((e) => e.type === type);
  if (hazard) rows = rows.filter((e) => e.hazard === hazard);
  if (domain) rows = rows.filter((e) => (e.domains || []).includes(domain));
  if (jurisdiction) rows = rows.filter((e) => e.jurisdiction === jurisdiction);
  if (q) {
    const needle = String(q).toLowerCase();
    rows = rows.filter((e) => e.title.toLowerCase().includes(needle));
  }

  const hazardRank = { critical: 0, high: 1, moderate: 2, low: 3 };
  const sorted = [...rows].sort(
    (a, b) => (hazardRank[a.hazard] ?? 9) - (hazardRank[b.hazard] ?? 9) || a.title.localeCompare(b.title),
  );

  const start = Number(offset) || 0;
  const end = start + (Number(limit) || 500);

  res.json({
    total: sorted.length,
    offset: start,
    results: sorted.slice(start, end).map((e) => repo.summarise(e)),
  });
});

/** GET /api/entries/grouped — the Library screen, grouped by clinical area. */
router.get('/entries/grouped', (req, res) => {
  const repo = getRepository();
  const groups = new Map();

  for (const entry of repo.entries) {
    const area = (entry.domains && entry.domains[0]) || 'general';
    const list = groups.get(area) || [];
    list.push(repo.summarise(entry));
    groups.set(area, list);
  }

  const hazardRank = { critical: 0, high: 1, moderate: 2, low: 3 };
  const out = [...groups.entries()]
    .map(([area, entries]) => ({
      area,
      label: area.split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      count: entries.length,
      entries: entries.sort(
        (a, b) => (hazardRank[a.hazard] ?? 9) - (hazardRank[b.hazard] ?? 9) || a.title.localeCompare(b.title),
      ),
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));

  res.json({ total: repo.entries.length, groups: out });
});

/** GET /api/entries/:idOrSlug — one entry, with its v5 visual assets attached. */
router.get('/entries/:idOrSlug', (req, res) => {
  const repo = getRepository();
  const entry = repo.get(req.params.idOrSlug);
  if (!entry) throw notFound(`No entry for “${req.params.idOrSlug}”`);

  const related = (entry.related_slugs || [])
    .map((slug) => repo.bySlug.get(slug))
    .filter(Boolean)
    .map((e) => repo.summarise(e));

  res.json({ ...repo.entryWithVisuals(entry), related });
});

/** POST /api/entries/:idOrSlug/calculate — run the entry's logic tree. */
router.post(
  '/entries/:idOrSlug/calculate',
  asyncHandler(async (req, res) => {
    const repo = getRepository();
    const entry = repo.get(req.params.idOrSlug);
    if (!entry) throw notFound(`No entry for “${req.params.idOrSlug}”`);
    res.json(runCalculation(entry, req.body?.inputs || req.body || {}));
  }),
);

/** GET /api/cards — every flashcard, deck-grouped. */
router.get('/cards', (req, res) => {
  const repo = getRepository();
  const { deck } = req.query;

  const cards = [];
  for (const entry of repo.entries) {
    for (const [i, card] of (entry.flashcards || []).entries()) {
      cards.push({
        id: `${entry.id}#c${i}`,
        q: card.q,
        a: card.a,
        entry_id: entry.id,
        entry_slug: entry.slug,
        entry_title: entry.short_title || entry.title,
        hazard: entry.hazard,
        deck: (entry.domains && entry.domains[0]) || 'general',
      });
    }
  }

  const decks = new Map();
  for (const c of cards) decks.set(c.deck, (decks.get(c.deck) || 0) + 1);

  const filtered = deck && deck !== 'full' ? cards.filter((c) => c.deck === deck) : cards;

  res.json({
    total: cards.length,
    deck: deck || 'full',
    decks: [...decks.entries()]
      .map(([key, n]) => ({ key, label: key.split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), n }))
      .sort((a, b) => b.n - a.n),
    cards: filtered,
  });
});

/** GET /api/checklists — every bedside checklist. */
router.get('/checklists', (req, res) => {
  const repo = getRepository();
  const hazardRank = { critical: 0, high: 1, moderate: 2, low: 3 };

  const lists = repo.entries
    .filter((e) => (e.checkboxes || []).length)
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      type: e.type,
      hazard: e.hazard,
      items: e.checkboxes.map((c, i) => ({ id: `${e.id}#k${i}`, text: typeof c === 'string' ? c : c.text || c.label })),
    }))
    .sort((a, b) => (hazardRank[a.hazard] ?? 9) - (hazardRank[b.hazard] ?? 9) || a.title.localeCompare(b.title));

  res.json({
    total: lists.length,
    total_items: lists.reduce((n, l) => n + l.items.length, 0),
    checklists: lists,
  });
});

export default router;
