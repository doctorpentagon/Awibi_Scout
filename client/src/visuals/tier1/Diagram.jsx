import { useId } from 'react';
import './diagram.css';

/**
 * Shared wrapper for every Tier-1 and Tier-2 diagram.
 *
 * Enforces the v5 SVG pipeline rules in one place:
 *   · role="img" + aria-labelledby pointing at a real <title> and <desc>
 *   · every fill and stroke is a CSS custom property, so dark mode is free and
 *     no diagram is ever re-exported for a second theme
 *   · text is real <text>, never outlined paths, so it stays searchable,
 *     selectable, translatable and sharp at any zoom
 *   · a stated viewBox and preserveAspectRatio, so it scales without layout shift
 */
export function Diagram({ title, desc, viewBox, children, className = '', maxWidth }) {
  const id = useId();
  const titleId = `${id}-t`;
  const descId = `${id}-d`;

  return (
    <figure className={`diagram ${className}`.trim()} style={maxWidth ? { maxWidth } : undefined}>
      <svg
        viewBox={viewBox}
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        preserveAspectRatio="xMidYMid meet"
        className="diagram-svg"
      >
        <title id={titleId}>{title}</title>
        <desc id={descId}>{desc}</desc>
        {children}
      </svg>
    </figure>
  );
}

/** A labelled group. The title is what a screen reader announces for the shape. */
export function Part({ label, children }) {
  return (
    <g>
      <title>{label}</title>
      {children}
    </g>
  );
}

/**
 * Caption text. `tone` picks a semantic colour, but the caption itself always
 * carries the meaning in words — colour is never the only cue.
 */
export function Label({ x, y, children, tone = 'label', size = 11, weight = 500, anchor = 'start', mono = false }) {
  return (
    <text
      x={x}
      y={y}
      fill={`var(--scout-${tone})`}
      fontSize={size}
      fontWeight={weight}
      textAnchor={anchor}
      fontFamily={mono ? 'var(--font-mono)' : 'var(--font-ui)'}
    >
      {children}
    </text>
  );
}

/** Arrow marker definitions. Included once per diagram that needs them. */
export function ArrowDefs({ id }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--scout-accent)" />
      </marker>
      <marker id={`${id}-arrow-danger`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--scout-danger)" />
      </marker>
      <marker id={`${id}-arrow-good`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--scout-good)" />
      </marker>
    </defs>
  );
}
