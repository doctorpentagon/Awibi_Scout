import { useId } from 'react';

/**
 * The annotation overlay.
 *
 * "The image is pixels. Everything a human reads is data rendered on top."
 *
 * An SVG absolutely positioned over the raster, sharing a viewBox derived from
 * the base dimensions. All coordinates are normalised 0–1, so the overlay
 * survives any resize, device, zoom level, or future re-export of the base at a
 * different resolution.
 *
 * Pointer events are enabled on annotation groups ONLY, so pan and zoom still
 * work on the image beneath.
 *
 * Each annotation is a focusable element with an accessible name — which is
 * what lets a blind clinician read the findings on a chest film.
 */
export function AnnotationOverlay({
  annotations = [],
  width = 1024,
  height = 1024,
  lang = 'en',
  hidden = new Set(),
  revealed = new Set(),
  onSelect,
  activeId,
}) {
  const uid = useId();

  // Normalised 0–1 → viewBox units.
  const X = (v) => v * width;
  const Y = (v) => v * height;

  return (
    <svg
      className="annotation-overlay"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-label="Findings marked on the image"
    >
      <defs>
        <marker id={`${uid}-tip`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--scout-accent)" />
        </marker>
      </defs>

      {annotations.map((a) => {
        const isHidden = hidden.has(a.id) && !revealed.has(a.id);
        if (isHidden) return null;

        const text = a.label?.[lang] || a.label?.en || '';
        const teaching = a.teaching_point;
        const name = teaching ? `${text}. ${teaching}` : text;
        const active = activeId === a.id;

        return (
          <g
            key={a.id}
            className={`annotation${active ? ' is-active' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={name}
            onClick={() => onSelect?.(a)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect?.(a);
              }
            }}
          >
            <title>{name}</title>

            {a.kind === 'arrow' && a.to_x != null && (
              <>
                <line
                  x1={X(a.x)}
                  y1={Y(a.y)}
                  x2={X(a.to_x)}
                  y2={Y(a.to_y)}
                  stroke="var(--scout-accent)"
                  strokeWidth={width * 0.005}
                  markerEnd={`url(#${uid}-tip)`}
                />
                <AnnotationLabel x={X(a.x)} y={Y(a.y)} text={text} scale={width} anchorBelow />
              </>
            )}

            {a.kind === 'region' && a.shape === 'ellipse' && (
              <>
                <ellipse
                  cx={X(a.cx)}
                  cy={Y(a.cy)}
                  rx={X(a.rx)}
                  ry={Y(a.ry)}
                  fill="none"
                  stroke="var(--scout-accent)"
                  strokeWidth={width * 0.005}
                  strokeDasharray={`${width * 0.014} ${width * 0.01}`}
                />
                <AnnotationLabel x={X(a.cx)} y={Y(a.cy) - Y(a.ry)} text={text} scale={width} middle />
              </>
            )}

            {a.kind === 'region' && a.shape !== 'ellipse' && a.x != null && (
              <>
                <rect
                  x={X(a.x)}
                  y={Y(a.y)}
                  width={X(a.w || 0.1)}
                  height={Y(a.h || 0.1)}
                  fill="none"
                  stroke="var(--scout-accent)"
                  strokeWidth={width * 0.005}
                />
                <AnnotationLabel x={X(a.x)} y={Y(a.y)} text={text} scale={width} anchorBelow />
              </>
            )}

            {a.kind === 'measure' && a.from && (
              <>
                <line
                  x1={X(a.from[0])}
                  y1={Y(a.from[1])}
                  x2={X(a.to[0])}
                  y2={Y(a.to[1])}
                  stroke="var(--scout-good)"
                  strokeWidth={width * 0.005}
                />
                <line x1={X(a.from[0])} y1={Y(a.from[1]) - width * 0.012} x2={X(a.from[0])} y2={Y(a.from[1]) + width * 0.012} stroke="var(--scout-good)" strokeWidth={width * 0.004} />
                <line x1={X(a.to[0])} y1={Y(a.to[1]) - width * 0.012} x2={X(a.to[0])} y2={Y(a.to[1]) + width * 0.012} stroke="var(--scout-good)" strokeWidth={width * 0.004} />
                <AnnotationLabel x={(X(a.from[0]) + X(a.to[0])) / 2} y={Y(a.from[1])} text={text} scale={width} middle tone="good" />
              </>
            )}

            {a.kind === 'note' && a.x != null && (
              <AnnotationLabel x={X(a.x)} y={Y(a.y)} text={text} scale={width} tone="warn" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

/**
 * A label chip. Sized relative to the base width so it stays proportionate
 * whatever the image dimensions, and drawn with a backing plate so it stays
 * legible over both bright and dark regions of a radiograph.
 */
function AnnotationLabel({ x, y, text, scale, middle, anchorBelow, tone = 'accent' }) {
  if (!text) return null;
  const fontSize = scale * 0.028;
  const padX = fontSize * 0.5;
  const w = text.length * fontSize * 0.53 + padX * 2;
  const h = fontSize * 1.7;
  const bx = middle ? x - w / 2 : x;
  const by = anchorBelow ? y + fontSize * 0.6 : y - h - fontSize * 0.3;

  return (
    <g>
      <rect x={bx} y={by} width={w} height={h} rx={h * 0.25} fill="var(--scout-fill)" opacity="0.92" />
      <rect x={bx} y={by} width={w} height={h} rx={h * 0.25} fill="none" stroke={`var(--scout-${tone})`} strokeWidth={scale * 0.002} />
      <text
        x={bx + padX}
        y={by + h * 0.7}
        fill={`var(--scout-${tone})`}
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="var(--font-ui)"
      >
        {text}
      </text>
    </g>
  );
}
