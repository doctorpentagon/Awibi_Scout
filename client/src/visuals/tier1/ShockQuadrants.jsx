import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-SHOCK-001 · Tier 1 · Recognise
 * Shock types by JVP and peripheries.
 *
 * Changes what a clinician does: categorises shock at the bedside in ten
 * seconds and picks the right first move.
 */

const QUADRANTS = [
  {
    // low JVP, cold — bottom-left
    col: 0,
    row: 1,
    name: 'Hypovolaemic',
    also: 'and haemorrhagic',
    feel: 'Empty veins, cold peripheries',
    move: 'Stop the bleeding. Fluid, then blood.',
    tone: 'warn',
  },
  {
    // high JVP, cold — top-left
    col: 0,
    row: 0,
    name: 'Cardiogenic / obstructive',
    also: 'tamponade, tension, PE',
    feel: 'Full veins, cold peripheries',
    move: 'Do NOT flood. Find the obstruction.',
    tone: 'danger',
  },
  {
    // low JVP, warm — bottom-right
    col: 1,
    row: 1,
    name: 'Distributive',
    also: 'septic, anaphylactic',
    feel: 'Warm, wide pulse pressure, bounding',
    move: 'Fluid AND early vasopressor. Treat the cause.',
    tone: 'accent',
  },
  {
    // high-ish JVP, warm — top-right
    col: 1,
    row: 0,
    name: 'Neurogenic',
    also: 'spinal cord injury',
    feel: 'Warm, and bradycardic despite hypotension',
    move: 'Hypotension WITHOUT tachycardia. Think cord.',
    tone: 'good',
  },
];

const CELL_W = 196;
const CELL_H = 96;
const X0 = 96;
const Y0 = 44;

export function ShockQuadrants() {
  return (
    <Diagram
      title="Shock types sorted by JVP and peripheries"
      desc="A four-quadrant grid. The vertical axis is the jugular venous pressure, high at the top and low at the bottom. The horizontal axis is the peripheries, cold on the left and warm on the right. High JVP with cold peripheries is cardiogenic or obstructive shock. Low JVP with cold peripheries is hypovolaemic shock. Warm peripheries with a wide pulse pressure is distributive shock. Warm peripheries with bradycardia despite hypotension suggests neurogenic shock. Each quadrant names what you feel and the first move."
      viewBox="0 0 500 262"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Two bedside findings put shock in a box: the JVP, and the temperature of the hands
      </Label>

      {/* --- Axes --- */}
      <Part label="Axes: JVP vertically, peripheries horizontally">
        <text x="10" y={Y0 + 30} fill="var(--scout-stroke)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">JVP</text>
        <text x="10" y={Y0 + 44} fill="var(--scout-stroke)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">HIGH</text>
        <text x="10" y={Y0 + CELL_H + 30} fill="var(--scout-stroke)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">JVP</text>
        <text x="10" y={Y0 + CELL_H + 44} fill="var(--scout-stroke)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">LOW</text>

        <text x={X0 + CELL_W / 2} y={Y0 - 10} fill="var(--scout-stroke)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          COLD peripheries
        </text>
        <text x={X0 + CELL_W + CELL_W / 2} y={Y0 - 10} fill="var(--scout-stroke)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          WARM peripheries
        </text>
      </Part>

      {QUADRANTS.map((q) => {
        const x = X0 + q.col * CELL_W;
        const y = Y0 + q.row * CELL_H;
        return (
          <g key={q.name} transform={`translate(${x}, ${y})`}>
            <Part label={`${q.name}: ${q.feel}. ${q.move}`}>
              <rect
                x="2"
                y="2"
                width={CELL_W - 4}
                height={CELL_H - 4}
                rx="6"
                fill={`var(--scout-${q.tone}-soft)`}
                stroke={`var(--scout-${q.tone})`}
                strokeWidth="1.4"
              />
              <text x="14" y="22" fill={`var(--scout-${q.tone})`} fontSize="12" fontWeight="800" fontFamily="var(--font-ui)">
                {q.name}
              </text>
              <text x="14" y="35" fill="var(--scout-stroke-soft)" fontSize="9" fontFamily="var(--font-ui)">
                {q.also}
              </text>
              <text x="14" y="55" fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
                {q.feel}
              </text>
              <text x="14" y="76" fill={`var(--scout-${q.tone})`} fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">
                → {q.move}
              </text>
            </Part>
          </g>
        );
      })}

      <Part label="Caveat">
        <rect x="96" y="240" width={CELL_W * 2} height="20" rx="4" fill="var(--scout-fill-soft)" />
        <text x="106" y="254" fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
          Types mix. Septic shock goes cold late. Reassess after every intervention.
        </text>
      </Part>
    </Diagram>
  );
}
