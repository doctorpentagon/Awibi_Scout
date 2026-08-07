import { Router } from 'express';
import { getRepository } from '../data/repository.js';
import { SearchIndex } from '../search/index-builder.js';
import { Resolver } from '../search/resolver.js';

const router = Router();

let resolver = null;

/**
 * Built once at boot (see src/index.js), never on first request. A clinician
 * must not pay the index-build cost mid-search — the budget is 60 ms p95 to
 * suggestions, and building inline blows it by 4x on the first query.
 */
export function getResolver() {
  if (!resolver) {
    const repo = getRepository();
    resolver = new Resolver(new SearchIndex(repo), repo);
  }
  return resolver;
}

/** GET /api/search?q= — runs the seven-state resolution ladder. */
router.get('/search', (req, res) => {
  const t0 = performance.now();
  const { q = '', emergency, limit, type, hazard, domain } = req.query;

  const result = getResolver().resolve(q, {
    emergencyFirst: emergency === 'true' || emergency === '1',
    limit: Math.min(Number(limit) || 20, 100),
    type: type || null,
    hazard: hazard || null,
    domain: domain || null,
  });

  res.json({ ...result, took_ms: Number((performance.now() - t0).toFixed(2)) });
});

/** GET /api/suggest?q= — as-you-type, from keystroke 2. Budget: 60 ms p95. */
router.get('/suggest', (req, res) => {
  const t0 = performance.now();
  const suggestions = getResolver().suggest(req.query.q || '', Math.min(Number(req.query.limit) || 8, 20));
  res.json({ suggestions, took_ms: Number((performance.now() - t0).toFixed(2)) });
});

/** GET /api/search/gaps — queries that found nothing. Three in a week promotes. */
router.get('/search/gaps', (req, res) => {
  res.json({ gaps: getResolver().gaps() });
});

export default router;
