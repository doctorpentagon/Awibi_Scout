import { useMemo, useState } from 'react';
import { api } from '../lib/api.js';
import { useApi } from '../hooks/useApi.js';
import { AnnotationOverlay } from './AnnotationOverlay.jsx';

/**
 * Tier 3 and Tier 4 assets — photographs and radiographs.
 *
 * No base image ships today: every licence row in the plan reads TO BE
 * CONFIRMED, and the two sources a developer reaches for first (MedPix,
 * Radiopaedia) are both unusable in a commercial product. So this renders the
 * commissioning specification and the annotation scaffold, and says plainly
 * that the image is not sourced.
 *
 * The moment a licence-cleared, de-identified base is registered, `base` comes
 * back non-null from the API and the same component renders the real thing with
 * the overlay already authored — nothing here needs rewriting.
 */
export function AnnotatedImage({ asset, entry }) {
  const { data } = useApi((signal) => api.annotations(asset.asset_id, signal), [asset.asset_id]);
  const [quiz, setQuiz] = useState(false);
  const [revealed, setRevealed] = useState(() => new Set());
  const [selected, setSelected] = useState(null);

  const labels = useMemo(
    () =>
      String(asset.labels || '')
        .split('·')
        .map((s) => s.trim())
        .filter(Boolean),
    [asset.labels],
  );

  const annotations = data?.overlay || [];
  const hidden = useMemo(
    () => (quiz ? new Set(annotations.map((a) => a.id)) : new Set()),
    [quiz, annotations],
  );

  const base = data?.base;

  return (
    <div className="annotated">
      {base ? (
        <figure className="annotated-figure">
          <div className="annotated-stage" style={{ aspectRatio: `${base.w} / ${base.h}` }}>
            <picture>
              <source srcSet={base.src} type="image/avif" />
              <source srcSet={base.fallback} type="image/webp" />
              <img
                src={base.fallback}
                alt={data.a11y?.aria_label || asset.must_show}
                width={base.w}
                height={base.h}
                loading="lazy"
                decoding="async"
                style={base.lqip ? { backgroundImage: `url(${base.lqip})`, backgroundSize: 'cover' } : undefined}
              />
            </picture>
            <AnnotationOverlay
              annotations={annotations}
              width={base.w}
              height={base.h}
              hidden={hidden}
              revealed={revealed}
              activeId={selected?.id}
              onSelect={(a) => {
                setSelected(a);
                setRevealed((prev) => new Set(prev).add(a.id));
              }}
            />
          </div>
          <figcaption className="annotated-caption">
            {base.attribution} · {base.licence}
          </figcaption>
        </figure>
      ) : (
        <NotSourcedYet asset={asset} labels={labels} />
      )}

      {/* Quiz mode: hide the labels and the same asset is a teaching case.
          Same asset, two products — this is where the engagement lives. */}
      {base && annotations.length > 0 && (
        <div className="annotated-controls">
          <button
            type="button"
            className={`btn${quiz ? ' btn-primary' : ''}`}
            onClick={() => {
              setQuiz((v) => !v);
              setRevealed(new Set());
              setSelected(null);
            }}
            aria-pressed={quiz}
          >
            {quiz ? 'Show the labels' : 'Quiz me'}
          </button>
          {quiz && <span className="muted annotated-prompt">{data.quiz_mode?.prompt}</span>}
        </div>
      )}

      {selected && (
        <div className="annotated-teaching" role="status">
          <strong>{selected.label?.en}</strong>
          {selected.teaching_point && <p>{selected.teaching_point}</p>}
        </div>
      )}
    </div>
  );
}

/**
 * The specification card. This is a brief, not a library — and it says so.
 */
function NotSourcedYet({ asset, labels }) {
  const isRadiograph = asset.tier === 4;

  return (
    <div className="spec-card">
      <div className="spec-slot" role="img" aria-label={`Not yet sourced: ${asset.must_show}`}>
        <svg viewBox="0 0 48 48" className="spec-slot-icon" aria-hidden="true">
          <rect x="6" y="10" width="36" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="20" r="3.4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 9 33 L 20 24 L 28 31 L 34 27 L 39 33" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <div className="spec-slot-label">
          <span className="mono">
            {asset.tier_name?.toLowerCase() || 'asset'} · {asset.asset_id}
          </span>
          <span className="spec-slot-status">Specified, not yet sourced</span>
        </div>
      </div>

      <dl className="spec-grid">
        <div>
          <dt>Must show</dt>
          <dd>{asset.must_show}</dd>
        </div>
        {labels.length > 0 && (
          <div>
            <dt>Required labels</dt>
            <dd className="spec-labels">
              {labels.map((l) => (
                <span className="mono spec-label" key={l}>
                  {l}
                </span>
              ))}
            </dd>
          </div>
        )}
        <div>
          <dt>Licence</dt>
          <dd className="spec-pending">{asset.licence || 'TO BE CONFIRMED'}</dd>
        </div>
        <div>
          <dt>Reviewer</dt>
          <dd className="spec-pending">{asset.reviewer || 'UNASSIGNED'}</dd>
        </div>
      </dl>

      {asset.needs_skin_tone_range && (
        <p className="spec-flag spec-flag-skin">
          <strong>Must be shot across a range of skin tones.</strong> For a Nigerian product this is a
          clinical accuracy failure, not a diversity checkbox — a clinician who has only seen this sign on
          white skin will miss it on black skin.
        </p>
      )}

      {isRadiograph && (
        <p className="spec-flag spec-flag-danger">
          <strong>Real, licence-cleared, de-identified films only.</strong> No AI-generated radiological
          image ships in Awibi Scout, ever. A generated film contains plausible-looking, anatomically
          impossible findings, and a student who learns from it carries that error to a real patient.
        </p>
      )}

      {asset.annotation_overlay && (
        <p className="spec-flag">
          Annotations are authored as data, not baked into the pixels — so they translate, they are read by a
          screen reader, they feed search, and a wrong label is a one-line edit rather than a re-export.
        </p>
      )}
    </div>
  );
}
