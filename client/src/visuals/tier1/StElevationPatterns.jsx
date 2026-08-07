import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-ECG-003 · Tier 1 · Recognise
 * ST elevation: STEMI vs pericarditis vs early repolarisation.
 *
 * Changes what a clinician does: avoids thrombolysing pericarditis, and avoids
 * dismissing a STEMI.
 */

const PATTERNS = [
  {
    name: 'STEMI',
    shape: 'Convex — "tombstone"',
    tell: 'Convex upward, territorial',
    distribution: 'Follows one artery',
    reciprocal: 'Reciprocal depression present',
    tone: 'danger',
    // Convex (dome bulging upward) ST take-off from a sharp R
    trace: 'M 4 62 L 20 62 L 26 68 L 34 16 L 42 34 Q 60 18 78 30 Q 92 38 104 58 L 116 62',
  },
  {
    name: 'Pericarditis',
    shape: 'Concave — "saddle"',
    tell: 'Concave, widespread, PR depression',
    distribution: 'Almost every lead',
    reciprocal: 'PR depression, no reciprocal ST',
    tone: 'warn',
    // Concave (saddle dipping) ST
    trace: 'M 4 62 L 18 62 L 22 66 L 30 24 L 38 44 Q 58 60 78 44 Q 92 34 104 58 L 116 62',
  },
  {
    name: 'Early repolarisation',
    shape: 'Concave with a J notch',
    tell: 'Notched J point, young, stable',
    distribution: 'Precordial, stable over time',
    reciprocal: 'None. Unchanged on old ECGs',
    tone: 'good',
    trace: 'M 4 62 L 18 62 L 22 66 L 30 22 L 36 42 L 41 38 L 46 44 Q 62 56 78 46 Q 94 38 104 58 L 116 62',
  },
];

export function StElevationPatterns() {
  return (
    <Diagram
      title="ST elevation: STEMI versus pericarditis versus early repolarisation"
      desc="Three ST segment morphologies drawn side by side at the same scale. STEMI elevation is convex upward and confined to one arterial territory with reciprocal depression elsewhere. Pericarditis elevation is concave, saddle shaped, widespread across almost every lead, and accompanied by PR depression. Early repolarisation is concave with a notched J point, is stable over time and has no reciprocal change."
      viewBox="0 0 460 258"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Same elevation, three different diseases — the shape and the spread separate them
      </Label>

      {PATTERNS.map((p, i) => {
        const x = i * 154;
        return (
          <g key={p.name} transform={`translate(${x}, 24)`}>
            <Part label={`${p.name}: ${p.tell}`}>
              <rect
                x="0"
                y="0"
                width="142"
                height="88"
                rx="6"
                fill="var(--scout-fill)"
                stroke={`var(--scout-${p.tone})`}
                strokeWidth="1.4"
              />
              {/* Baseline for honest comparison of take-off height. */}
              <line x1="6" y1="70" x2="136" y2="70" stroke="var(--scout-stroke-soft)" strokeWidth="0.5" strokeDasharray="2 3" />
              <path
                d={p.trace}
                transform="translate(10, 8)"
                fill="none"
                stroke={`var(--scout-${p.tone})`}
                strokeWidth="2.1"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </Part>

            <text x="71" y="106" fill="var(--scout-label)" fontSize="12.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
              {p.name}
            </text>
            <text x="71" y="121" fill={`var(--scout-${p.tone})`} fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">
              {p.shape}
            </text>

            <g transform="translate(0, 134)">
              <Row y={0} k="Spread" v={p.distribution} />
              <Row y={22} k="Other clue" v={p.reciprocal} />
            </g>
          </g>
        );
      })}

      <Part label="The deciding question">
        <rect x="0" y="212" width="460" height="42" rx="6" fill="var(--scout-accent-soft)" />
        <Label x={12} y={230} size={11} weight={700} tone="accent">
          The question that decides it: does the elevation follow ONE artery, or is it everywhere?
        </Label>
        <Label x={12} y={246} size={10.5} tone="stroke">
          Territorial with reciprocal depression is a STEMI until proven otherwise. Compare with an old ECG if one exists.
        </Label>
      </Part>
    </Diagram>
  );
}

function Row({ y, k, v }) {
  return (
    <g>
      <text x="0" y={y} fill="var(--scout-stroke-soft)" fontSize="9" fontWeight="600" fontFamily="var(--font-ui)" letterSpacing="0.05em">
        {k.toUpperCase()}
      </text>
      <text x="0" y={y + 13} fill="var(--scout-stroke)" fontSize="10.5" fontFamily="var(--font-ui)">
        {v}
      </text>
    </g>
  );
}
