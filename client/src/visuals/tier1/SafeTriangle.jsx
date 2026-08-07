import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-CHEST-001 · Tier 1 · Locate
 * Safe triangle for chest drain.
 *
 * Changes what a clinician does: inserts inside the triangle instead of into
 * liver, spleen or heart.
 */
export function SafeTriangle() {
  // Triangle vertices on the lateral chest wall.
  const apex = [212, 92];
  const antInf = [150, 196];
  const postInf = [258, 186];

  return (
    <Diagram
      title="The safe triangle for chest drain insertion"
      desc="A torso seen from the left side with the safe triangle outlined on the lateral chest wall. Its anterior border is the lateral edge of pectoralis major, its posterior border is the anterior edge of latissimus dorsi, its inferior border is the fifth intercostal space at the level of the nipple, and its apex sits below the axilla. The liver on the right and the spleen on the left are shaded outside and below the triangle as the structures injured when insertion is too low."
      viewBox="0 0 460 288"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Insert inside the triangle. Below it is liver or spleen.
      </Label>

      {/* --- Torso outline --- */}
      <Part label="Torso, left lateral view">
        <path
          d="M 118 62 Q 150 40 196 40 Q 250 40 276 62 L 292 118 Q 300 168 288 220 Q 276 262 236 268 L 168 268 Q 128 262 118 220 Q 106 168 114 118 Z"
          fill="var(--scout-fill-soft)"
          stroke="var(--scout-stroke)"
          strokeWidth="1.6"
        />
        {/* Axilla notch */}
        <path d="M 196 40 Q 214 56 226 76" fill="none" stroke="var(--scout-stroke-soft)" strokeWidth="1.1" />
      </Part>

      {/* --- Ribs, for the fifth space to mean something --- */}
      <Part label="Ribs, with the fifth intercostal space marked">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M 126 ${96 + i * 22} Q 200 ${86 + i * 22} 286 ${104 + i * 22}`}
            fill="none"
            stroke="var(--scout-stroke-soft)"
            strokeWidth="0.9"
            strokeDasharray={i === 4 ? '0' : '3 3'}
          />
        ))}
      </Part>

      {/* --- Danger structures, shaded OUTSIDE the triangle --- */}
      <Part label="Liver and spleen — the structures injured by inserting too low">
        <path
          d="M 128 216 Q 190 204 262 214 Q 274 250 232 262 L 168 262 Q 132 254 128 216 Z"
          fill="var(--scout-danger-soft)"
          stroke="var(--scout-danger)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <text x="196" y="242" fill="var(--scout-danger)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          Liver / spleen — do not enter
        </text>
      </Part>

      {/* --- The triangle --- */}
      <Part label="The safe triangle">
        <polygon
          points={`${apex} ${antInf} ${postInf}`}
          fill="var(--scout-good-soft)"
          stroke="var(--scout-good)"
          strokeWidth="2"
        />
        {/* Target point — mid-triangle */}
        <circle cx="206" cy="158" r="6" fill="none" stroke="var(--scout-good)" strokeWidth="1.6" />
        <circle cx="206" cy="158" r="2.2" fill="var(--scout-good)" />
        <text x="206" y="178" fill="var(--scout-good)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          insert here
        </text>
      </Part>

      {/* --- Border callouts --- */}
      <Part label="Borders of the triangle">
        <Callout x={318} y={92} to={[228, 96]} n="1" text="Apex — below the axilla" />
        <Callout x={318} y={132} to={[176, 138]} n="2" text="Anterior: lateral border of pectoralis major" />
        <Callout x={318} y={172} to={[252, 148]} n="3" text="Posterior: anterior border of latissimus dorsi" />
        <Callout x={318} y={212} to={[204, 192]} n="4" text="Inferior: 5th intercostal space, nipple level" />
      </Part>

      <Label x={0} y={278} size={10.5} tone="warn" weight={600}>
        Confirm the side against the imaging and the patient before you cut. A drain in the wrong hemithorax is a never event.
      </Label>
    </Diagram>
  );
}

function Callout({ x, y, to, n, text }) {
  return (
    <g>
      <line x1={x - 6} y1={y - 4} x2={to[0]} y2={to[1]} stroke="var(--scout-stroke-soft)" strokeWidth="0.9" />
      <circle cx={to[0]} cy={to[1]} r="2.4" fill="var(--scout-stroke)" />
      <circle cx={x} cy={y - 8} r="8" fill="var(--scout-accent-soft)" />
      <text x={x} y={y - 4.5} fill="var(--scout-accent)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
        {n}
      </text>
      <text x={x + 14} y={y - 4.5} fill="var(--scout-stroke)" fontSize="10.5" fontFamily="var(--font-ui)">
        {text}
      </text>
    </g>
  );
}
