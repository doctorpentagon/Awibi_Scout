import { Router } from 'express';
import { getRepository } from '../data/repository.js';

const router = Router();

/**
 * GET /api/governance — the Sources & updates screen.
 *
 * "This is how the content stays trustworthy over the years. Every topic
 * carries its sources, a version stamp, a named review date and a sign-off
 * gate. Nothing already released is quietly edited — it is replaced."
 */
router.get('/governance', (req, res) => {
  const repo = getRepository();

  let signedOff = 0;
  let confirmLocally = 0;
  let pastReview = 0;
  const now = Date.now();

  const registry = repo.entries.map((e) => {
    const g = e.governance || {};
    if (g.clinical_sign_off || g.signed_off_by) signedOff += 1;
    if (g.local_confirmation_required) confirmLocally += 1;
    const due = g.next_review_due || g.review_due;
    const overdue = due ? new Date(due).getTime() < now : false;
    if (overdue) pastReview += 1;

    return {
      id: e.id,
      title: e.title,
      type: e.type,
      hazard: e.hazard,
      slug: e.slug,
      sources: g.sources || [],
      version: e.content_release,
      review_due: due || null,
      overdue,
      signed_off: Boolean(g.clinical_sign_off || g.signed_off_by),
      confirm_locally: Boolean(g.local_confirmation_required),
      evidence: g.evidence_tier || g.source_strength || null,
    };
  });

  res.json({
    stats: {
      topics_tracked: repo.entries.length,
      signed_off_by_a_doctor: signedOff,
      confirm_with_your_lab: confirmLocally,
      past_review_date: pastReview,
      requests_to_add: repo.governance.gaps?.length || 0,
      pictures_to_add: repo.visuals.length,
    },
    registry,
    requests: repo.governance.gaps || [],
    pictures: repo.governance.images || [],
  });
});

/** GET /api/short-forms — abbreviations, ambiguous and unambiguous. */
router.get('/short-forms', (req, res) => {
  const repo = getRepository();
  res.json({
    unambiguous: repo.lexicon.abbreviations_unambiguous,
    ambiguous: repo.lexicon.abbreviations_ambiguous,
    synonyms: repo.lexicon.synonyms,
  });
});

/** GET /api/conversions — the unit conversion table. */
router.get('/conversions', (req, res) => {
  const repo = getRepository();
  res.json(repo.unitConversions);
});

export default router;
