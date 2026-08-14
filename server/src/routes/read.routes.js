import { Router } from 'express';
import { getRepository } from '../data/repository.js';
import { buildCurriculum } from '../data/curriculum.js';

/**
 * Sequential reading.
 *
 * Search only finds what you can already name. These routes expose the library
 * as an ORDERED BOOK so it can be read straight through, with a position that
 * is stable between builds and a "next" that never dead-ends.
 */
const router = Router();

let cached = null;
function curriculum() {
  if (!cached) cached = buildCurriculum(getRepository().entries);
  return cached;
}

/** The table of contents: parts, chapters and where each begins. */
router.get('/read', (req, res) => {
  const c = curriculum();
  res.json({
    total: c.total,
    parts: c.parts.map((p) => ({
      key: p.key,
      title: p.title,
      blurb: p.blurb,
      count: p.count,
      start: p.chapters[0]?.start ?? null,
      chapters: p.chapters.map((ch) => ({
        key: ch.key,
        title: ch.title,
        start: ch.start,
        count: ch.count,
      })),
    })),
  });
});

/** One chapter, with its entries in reading order. */
router.get('/read/chapter/:partKey/:chapterKey', (req, res, next) => {
  const c = curriculum();
  const part = c.parts.find((p) => p.key === req.params.partKey);
  const chapter = part?.chapters.find((ch) => ch.key === req.params.chapterKey);
  if (!chapter) return next();
  res.json({ part: { key: part.key, title: part.title }, chapter });
});

/**
 * The entry at a given position, with its neighbours.
 *
 * This is what makes continuous reading possible: the reader keeps one number
 * and can always resume, go back, or step forward.
 */
router.get('/read/:position', (req, res, next) => {
  const c = curriculum();
  const n = Number(req.params.position);
  if (!Number.isInteger(n)) return next();

  const hit = c.at(n);
  if (!hit) {
    return res.status(404).json({
      error: 'out_of_range',
      message: `Position ${n} does not exist. The library runs from 1 to ${c.total}.`,
      total: c.total,
    });
  }

  const repo = getRepository();
  const entry = repo.get(hit.id);

  // Where does this sit in the book? A position number alone is not orientation.
  let context = null;
  for (const p of c.parts) {
    for (const ch of p.chapters) {
      if (n >= ch.start && n < ch.start + ch.count) {
        context = {
          part: { key: p.key, title: p.title },
          chapter: { key: ch.key, title: ch.title, start: ch.start, count: ch.count },
          positionInChapter: n - ch.start + 1,
        };
      }
    }
  }

  res.json({
    position: n,
    total: c.total,
    ...context,
    previous: n > 1 ? c.at(n - 1) : null,
    next: n < c.total ? c.at(n + 1) : null,
    entry: repo.entryWithVisuals(entry),
  });
});

/** Where does a known entry sit in the reading order? */
router.get('/read/position-of/:idOrSlug', (req, res) => {
  const c = curriculum();
  const position = c.positionOf(req.params.idOrSlug);
  if (!position) return res.status(404).json({ error: 'not_found' });
  res.json({ position, total: c.total });
});

export default router;
