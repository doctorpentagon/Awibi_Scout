import { Router } from 'express';
import { getRepository } from '../data/repository.js';
import { notFound } from '../lib/errors.js';

const router = Router();

const TIER_NAMES = {
  1: 'Inline SVG diagram',
  2: 'Animated SVG / CSS',
  3: 'Photograph',
  4: 'Radiograph / CT / MRI',
  5: '3D glTF',
};

const JOB_NAMES = {
  R: 'Recognise — tell one thing from another at the bedside',
  L: 'Locate — where to put the needle, drain, stethoscope',
  U: 'Understand — a mechanism words handle badly',
};

function decorate(asset, repo) {
  const entry = asset.serves_entry_id ? repo.byId.get(asset.serves_entry_id) : null;
  return {
    ...asset,
    tier_name: TIER_NAMES[asset.tier] || 'Unknown',
    job_name: JOB_NAMES[asset.job] || null,
    needs_skin_tone_range: repo.visualSummary.needing_skin_tone_range.includes(asset.asset_id),
    serves_entry_slug: entry?.slug || null,
    // A visual with no answer to "what does a clinician do differently?" is
    // decoration. The plan makes this an explicit build gate.
    passes_philosophy_gate: Boolean(asset.changes_what_a_clinician_does),
    // approved_for_release stays false until a named human ticks every box.
    // The pipeline cannot set it — nor can this API.
    approved_for_release: false,
  };
}

/** GET /api/visuals — the 96-asset plan, filterable by tier, wave, job, entry. */
router.get('/visuals', (req, res) => {
  const repo = getRepository();
  const { tier, wave, job, entry_id: entryId, needs_overlay: needsOverlay, skin_tone: skinTone } = req.query;

  let rows = repo.visuals;
  if (tier) rows = rows.filter((v) => String(v.tier) === String(tier));
  if (wave) rows = rows.filter((v) => String(v.build_wave) === String(wave));
  if (job) rows = rows.filter((v) => v.job === job);
  if (entryId) rows = rows.filter((v) => v.serves_entry_id === entryId);
  if (needsOverlay === 'true') rows = rows.filter((v) => v.annotation_overlay);
  if (skinTone === 'true') {
    rows = rows.filter((v) => repo.visualSummary.needing_skin_tone_range.includes(v.asset_id));
  }

  res.json({
    total: rows.length,
    summary: repo.visualSummary,
    tier_names: TIER_NAMES,
    assets: rows
      .sort((a, b) => a.build_wave - b.build_wave || a.tier - b.tier || a.asset_id.localeCompare(b.asset_id))
      .map((v) => decorate(v, repo)),
  });
});

/** GET /api/visuals/spec — corrections, source registry, tiers, pipelines, budgets. */
router.get('/visuals/spec', (req, res) => {
  const repo = getRepository();
  res.json({
    release: repo.imagingSpec.release,
    corrections: repo.imagingSpec.corrections_to_imaging_document,
    source_registry: repo.imagingSpec.source_registry,
    annotation_model: repo.imagingSpec.annotation_model,
    tier_matrix: repo.imagingSpec.tier_matrix,
    pipelines: {
      svg: repo.imagingSpec.pipeline_svg,
      raster: repo.imagingSpec.pipeline_raster,
      three_d: repo.imagingSpec.pipeline_3d,
    },
    device_budgets: repo.imagingSpec.device_budgets,
    dicom_module: repo.imagingSpec.dicom_module,
    qa_gate: repo.imagingSpec.visual_qa_gate,
    philosophy: repo.imagingSpec.visual_philosophy,
  });
});

/** GET /api/visuals/gaps — 107 entries with no visual, ranked by hazard. */
router.get('/visuals/gaps', (req, res) => {
  const repo = getRepository();
  res.json({ total: repo.visualGaps.length, gaps: repo.visualGaps });
});

/**
 * GET /api/visuals/:assetId/annotations — the SVG-overlay annotation document.
 *
 * The image is pixels. Everything a human reads is data rendered on top: all
 * coordinates normalised 0-1, so the overlay survives any resize, device, zoom
 * level or future re-export at a different resolution.
 */
router.get('/visuals/:assetId/annotations', (req, res) => {
  const repo = getRepository();
  const asset = repo.visualById.get(req.params.assetId);
  if (!asset) throw notFound(`No visual asset “${req.params.assetId}”`);

  const labels = String(asset.labels || '')
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);

  res.json({
    asset_id: asset.asset_id,
    // Base is null until a licence-cleared, de-identified image is registered.
    // 96 specifications, 0 assets built — the manifest is a brief, not a library.
    base: null,
    status: asset.status,
    overlay: labels.map((label, i) => ({
      id: `a${i + 1}`,
      kind: 'note',
      // Placeholder geometry: real coordinates are authored against the real
      // base image once it exists. Never invent them against a missing image.
      x: null,
      y: null,
      label: { en: label, ha: '', yo: '', ig: '' },
      reveal: 'always',
    })),
    quiz_mode: {
      enabled: Boolean(asset.annotation_overlay),
      prompt: asset.job === 'R' ? 'What is this, and how do you tell it apart?' : 'What is being shown here?',
      hide: [],
      reveal_on: 'tap_or_after_10s',
      answer_entry: asset.serves_entry,
    },
    a11y: {
      role: 'img',
      aria_label: asset.must_show,
      annotations_focusable: true,
      reading_order: labels.map((_, i) => `a${i + 1}`),
    },
    reference_implementation: repo.annotationExample,
  });
});

/** GET /api/visuals/:assetId */
router.get('/visuals/:assetId', (req, res) => {
  const repo = getRepository();
  const asset = repo.visualById.get(req.params.assetId);
  if (!asset) throw notFound(`No visual asset “${req.params.assetId}”`);
  res.json(decorate(asset, repo));
});

export default router;
