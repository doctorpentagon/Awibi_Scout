import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-ECG-001 · Tier 1 · Understand
 * One PQRST complex with every interval measured.
 *
 * Changes what a clinician does: measures a PR or QT interval correctly
 * instead of estimating.
 */

// Standard paper: 1 small square = 1 mm = 0.04 s. Grid pitch below is 14 units
// per large square, 2.8 per small — so the drawing is dimensionally honest.
const SMALL = 2.8;
const LARGE = SMALL * 5;
const BASE = 132; // isoelectric line

export function EcgIntervals() {
  const gridLines = [];
  for (let x = 0; x <= 420; x += SMALL) {
    gridLines.push(
      <line
        key={`v${x}`}
        x1={x}
        y1={28}
        x2={x}
        y2={196}
        stroke="var(--scout-danger-soft)"
        strokeWidth={x % LARGE === 0 ? 0.7 : 0.3}
      />,
    );
  }
  for (let y = 28; y <= 196; y += SMALL) {
    gridLines.push(
      <line
        key={`h${y}`}
        x1={0}
        y1={y}
        x2={420}
        y2={y}
        stroke="var(--scout-danger-soft)"
        strokeWidth={(y - 28) % LARGE === 0 ? 0.7 : 0.3}
      />,
    );
  }

  // The trace, built left to right at real proportions.
  const trace = [
    `M 20 ${BASE}`,
    `L 60 ${BASE}`,
    // P wave — 0.08 s, small and rounded
    `Q 74 ${BASE - 16} 88 ${BASE}`,
    `L 116 ${BASE}`, // PR segment
    // QRS — 0.08 s, sharp
    `L 122 ${BASE + 10}`, // Q
    `L 132 ${BASE - 74}`, // R
    `L 142 ${BASE + 20}`, // S
    `L 150 ${BASE}`,
    `L 172 ${BASE}`, // ST segment
    // T wave — broad, asymmetric
    `Q 196 ${BASE - 34} 220 ${BASE}`,
    `L 244 ${BASE}`,
    // U wave — small, often invisible
    `Q 254 ${BASE - 7} 264 ${BASE}`,
    `L 400 ${BASE}`,
  ].join(' ');

  return (
    <Diagram
      title="One PQRST complex with every interval measured"
      desc="A single ECG complex drawn on standard 25 mm/s grid paper. The P wave, QRS complex, T wave and U wave are labelled, and the PR interval, QRS duration, ST segment and QT interval are each dimensioned along the baseline. One small square is 0.04 seconds; one large square is 0.2 seconds."
      viewBox="0 0 420 246"
    >
      <rect x="0" y="28" width="420" height="168" fill="var(--scout-fill)" />
      <g aria-hidden="true">{gridLines}</g>

      <Label x={0} y={16} size={12} weight={700}>
        One complex, every interval
      </Label>
      <Label x={420} y={16} anchor="end" tone="stroke-soft" mono size={10}>
        25 mm/s · 10 mm/mV
      </Label>

      <Part label="ECG trace">
        <path d={trace} fill="none" stroke="var(--scout-stroke)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      </Part>

      {/* Wave letters sit on the waves themselves. */}
      <Part label="Wave labels">
        <Label x={74} y={BASE - 22} anchor="middle" size={12} weight={700} tone="accent">P</Label>
        <Label x={119} y={BASE + 24} anchor="middle" size={12} weight={700} tone="accent">Q</Label>
        <Label x={132} y={BASE - 62} anchor="middle" size={12} weight={700} tone="accent">R</Label>
        <Label x={147} y={BASE + 34} anchor="middle" size={12} weight={700} tone="accent">S</Label>
        <Label x={196} y={BASE - 40} anchor="middle" size={12} weight={700} tone="accent">T</Label>
        <Label x={254} y={BASE - 13} anchor="middle" size={10} weight={600} tone="stroke-soft">U</Label>
      </Part>

      {/* Interval dimension bars, stacked below so none overlap. */}
      <Part label="PR interval, 120 to 200 milliseconds">
        <Dimension x1={60} x2={122} y={168} label="PR  120–200 ms" />
      </Part>
      <Part label="QRS duration, under 120 milliseconds">
        <Dimension x1={122} x2={150} y={182} label="QRS  <120 ms" tone="warn" />
      </Part>
      <Part label="QT interval, measured to the end of the T wave">
        <Dimension x1={122} x2={220} y={196} label="QT  to end of T" />
      </Part>
      <Part label="ST segment, the isoelectric stretch between S and T">
        <Dimension x1={150} x2={172} y={154} label="ST" tone="good" />
      </Part>

      <Part label="Square timings">
        <rect x="286" y="36" width="128" height="44" rx="4" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="0.8" />
        <Label x={294} y={52} size={10} weight={600}>1 small square = 0.04 s</Label>
        <Label x={294} y={68} size={10} weight={600}>1 large square = 0.2 s</Label>
      </Part>

      <Label x={0} y={224} size={10.5} tone="stroke-soft">
        Count large squares, not eyeballed distance. Five small squares make one large square.
      </Label>
      <Label x={0} y={240} size={10.5} tone="warn" weight={600}>
        A QT is only interpretable once corrected for rate.
      </Label>
    </Diagram>
  );
}

/** A dimension bar with end ticks and a centred caption. */
function Dimension({ x1, x2, y, label, tone = 'accent' }) {
  const mid = (x1 + x2) / 2;
  return (
    <g>
      <line x1={x1} y1={y - 4} x2={x1} y2={y + 4} stroke={`var(--scout-${tone})`} strokeWidth="1.4" />
      <line x1={x2} y1={y - 4} x2={x2} y2={y + 4} stroke={`var(--scout-${tone})`} strokeWidth="1.4" />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={`var(--scout-${tone})`} strokeWidth="1.4" />
      <text
        x={mid}
        y={y - 7}
        fill={`var(--scout-${tone})`}
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        fontFamily="var(--font-ui)"
      >
        {label}
      </text>
    </g>
  );
}
