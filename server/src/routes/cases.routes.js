import { Router } from 'express';
import { getRepository } from '../data/repository.js';

/**
 * Case scenarios, grouped the way a curriculum is.
 *
 * Cases are ordinary entries with `type: 'case'`, so they already inherit
 * search, the glossary, the reading order and the governance gate. What they
 * need on top is a browse view organised by SPECIALTY and POSTING, because a
 * student rotating through medicine wants "all the cardiology cases", not a
 * search box.
 */
const router = Router();

/** "Medicine — Cardiology" -> { group: "Medicine", area: "Cardiology" } */
function splitSpecialty(specialty) {
  if (!specialty) return { group: 'Unsorted', area: 'Unsorted' };
  const parts = specialty.split(/\s*[—–-]\s*/);
  if (parts.length < 2) return { group: specialty.trim(), area: specialty.trim() };
  return { group: parts[0].trim(), area: parts.slice(1).join(' — ').trim() };
}

let cached = null;
function index() {
  if (cached) return cached;

  const repo = getRepository();
  const cases = repo.entries.filter((e) => e.type === 'case');

  const groups = new Map();
  for (const c of cases) {
    const { group, area } = splitSpecialty(c.specialty);
    if (!groups.has(group)) groups.set(group, new Map());
    const areas = groups.get(group);
    if (!areas.has(area)) areas.set(area, []);
    areas.get(area).push(c);
  }

  // Medicine and Surgery lead because that is how postings are ordered; the
  // rest follow alphabetically so the list is stable between builds.
  const PREFERRED = ['Medicine', 'Surgery'];
  const orderGroup = (a, b) => {
    const ia = PREFERRED.indexOf(a);
    const ib = PREFERRED.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.localeCompare(b);
  };

  const out = [...groups.keys()].sort(orderGroup).map((group) => {
    const areas = [...groups.get(group).keys()].sort().map((area) => ({
      area,
      count: groups.get(group).get(area).length,
      cases: groups
        .get(group)
        .get(area)
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((c) => ({
          id: c.id,
          slug: c.slug,
          title: c.title,
          short_title: c.short_title,
          summary: c.summary,
          hazard: c.hazard,
        })),
    }));
    return {
      group,
      count: areas.reduce((n, a) => n + a.count, 0),
      areas,
    };
  });

  cached = { total: cases.length, groups: out };
  return cached;
}

/** Every case, grouped by posting and specialty. */
router.get('/cases', (req, res) => {
  res.json(index());
});

/** One specialty area, e.g. /cases/Medicine/Cardiology */
router.get('/cases/:group/:area', (req, res, next) => {
  const data = index();
  const group = data.groups.find(
    (g) => g.group.toLowerCase() === req.params.group.toLowerCase(),
  );
  const area = group?.areas.find(
    (a) => a.area.toLowerCase() === req.params.area.toLowerCase(),
  );
  if (!area) return next();
  res.json({ group: group.group, ...area });
});

export default router;
