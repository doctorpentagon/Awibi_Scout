import { Suspense, useState } from 'react';
import { TIER1_REGISTRY, isBuilt } from './tier1/index.js';
import { AnnotatedImage } from './AnnotatedImage.jsx';
import { Model3DViewer } from './Model3DViewer.jsx';
import './visuals.css';

const TIER_LABEL = {
  1: 'SVG diagram',
  2: 'Animated SVG',
  3: 'Photograph',
  4: 'Radiograph',
  5: '3D model',
};

const JOB_LABEL = {
  R: 'Recognise',
  U: 'Understand',
  L: 'Locate',
};

/**
 * The tier router.
 *
 * Tier 1 and 2 assets that have been drawn render inline and instantly. Tier 3,
 * 4 and 5 assets have no licence-cleared base image in the library yet, so they
 * render as an honest specification card carrying everything a commissioned
 * illustrator or photographer needs — not a fake placeholder that implies the
 * asset exists.
 */
export function VisualPanel({ assets, entry }) {
  if (!assets?.length) return null;

  return (
    <section className="visual-panel" aria-labelledby="visuals-h">
      <div className="visual-panel-head">
        <h2 id="visuals-h" className="entry-h2">
          Pictures
        </h2>
        <p className="muted entry-section-note">
          {assets.length} specified for this entry. Every one states what a clinician does differently
          after seeing it — if that is blank, it is decoration and it is not commissioned.
        </p>
      </div>

      {assets.map((asset) => (
        <VisualAsset key={asset.asset_id} asset={asset} entry={entry} />
      ))}
    </section>
  );
}

function VisualAsset({ asset, entry }) {
  const built = (asset.tier === 1 || asset.tier === 2) && isBuilt(asset.asset_id);
  const Drawing = built ? TIER1_REGISTRY[asset.asset_id] : null;

  return (
    <article className="visual-asset">
      <header className="visual-asset-head">
        <div className="visual-asset-titles">
          <h3 className="visual-asset-title">{asset.title}</h3>
          <p className="visual-asset-does">{asset.changes_what_a_clinician_does}</p>
        </div>
        <div className="visual-asset-meta">
          <span className="mono visual-id">{asset.asset_id}</span>
          <span className={`visual-tier tier-${asset.tier}`}>
            Tier {asset.tier} · {TIER_LABEL[asset.tier]}
          </span>
          {asset.job && <span className="tag">{JOB_LABEL[asset.job]}</span>}
        </div>
      </header>

      {built && (
        <div className="visual-stage">
          <Suspense fallback={<div className="visual-loading">Drawing…</div>}>
            <Drawing />
          </Suspense>
        </div>
      )}

      {!built && asset.tier === 5 && <Model3DViewer asset={asset} />}

      {!built && asset.tier !== 5 && <AnnotatedImage asset={asset} entry={entry} />}
    </article>
  );
}
