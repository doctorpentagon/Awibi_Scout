import { lazy } from 'react';

/**
 * Registry mapping a v5 asset_id to the component that draws it.
 *
 * Every diagram is lazily imported, so an entry that carries no visual never
 * downloads any of this. Assets not in the registry are still specified in the
 * plan — they render as an honest specification card instead, because
 * "96 specifications, 0 assets built" is the true state of the library and the
 * UI must not imply otherwise.
 */
export const TIER1_REGISTRY = {
  'V-ECG-001': lazy(() => import('./EcgIntervals.jsx').then((m) => ({ default: m.EcgIntervals }))),
  'V-ECG-002': lazy(() =>
    import('./HyperkalaemiaProgression.jsx').then((m) => ({ default: m.HyperkalaemiaProgression })),
  ),
  'V-ECG-003': lazy(() =>
    import('./StElevationPatterns.jsx').then((m) => ({ default: m.StElevationPatterns })),
  ),
  'V-ECG-004': lazy(() => import('./EcgTerritories.jsx').then((m) => ({ default: m.EcgTerritories }))),
  'V-CHEST-001': lazy(() => import('./SafeTriangle.jsx').then((m) => ({ default: m.SafeTriangle }))),
  'V-CHEST-002': lazy(() => import('./RibNeurovascular.jsx').then((m) => ({ default: m.RibNeurovascular }))),
  'V-DRIP-001': lazy(() => import('./DripRateFormula.jsx').then((m) => ({ default: m.DripRateFormula }))),
  'V-SHOCK-001': lazy(() => import('./ShockQuadrants.jsx').then((m) => ({ default: m.ShockQuadrants }))),
  'V-CN-001': lazy(() => import('./FacialPalsy.jsx').then((m) => ({ default: m.FacialPalsy }))),
  'V-NEPH-001': lazy(() => import('./NephronDiuretics.jsx').then((m) => ({ default: m.NephronDiuretics }))),
  'V-CVS-001': lazy(() => import('./AuscultationAreas.jsx').then((m) => ({ default: m.AuscultationAreas }))),
  'V-PPH-001': lazy(() => import('./FourTs.jsx').then((m) => ({ default: m.FourTs }))),
};

export const isBuilt = (assetId) => Object.hasOwn(TIER1_REGISTRY, assetId);
export const builtCount = Object.keys(TIER1_REGISTRY).length;
