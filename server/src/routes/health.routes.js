import { Router } from 'express';
import { getRepository } from '../data/repository.js';
import { config } from '../config/index.js';

const router = Router();

router.get('/health', (req, res) => {
  const repo = getRepository();
  res.json({
    ok: true,
    uptime_s: Math.round(process.uptime()),
    entries: repo.entries.length,
    visuals: repo.visuals.length,
    release: config.release,
  });
});

/** Everything the client needs to boot: releases, facets, vocabulary. */
router.get('/meta', (req, res) => {
  const repo = getRepository();
  const counts = {};
  for (const e of repo.entries) counts[e.type] = (counts[e.type] || 0) + 1;

  res.json({
    ...repo.meta,
    facets: {
      types: repo.types.map((t) => ({ key: t, label: labelFor(t), n: counts[t] || 0 })),
      hazards: repo.hazards,
      domains: repo.domains,
    },
    search: {
      placeholders: repo.searchSpec.search_placeholders,
      chips: repo.searchSpec.empty_state_chips,
      banned_ui_words: repo.searchSpec.banned_ui_words,
      ui_word_swaps: repo.searchSpec.ui_word_swaps,
    },
    visual_summary: repo.visualSummary,
  });
});

function labelFor(type) {
  return type
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default router;
