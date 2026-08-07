import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-PPH-001 · Tier 1 · Understand
 * The four Ts of postpartum bleeding.
 *
 * Changes what a clinician does: moves from "she is bleeding" to a specific
 * cause and a specific action.
 *
 * The bars are sized by frequency, so the eye goes to Tone first — which is
 * also where the hands should go first.
 */

const TS = [
  {
    t: 'Tone',
    share: 70,
    feel: 'Uterus soft and boggy, above the umbilicus',
    act: 'Rub up a contraction. Oxytocin. Bimanual compression.',
    tone: 'danger',
  },
  {
    t: 'Trauma',
    share: 20,
    feel: 'Uterus firm, but still bleeding',
    act: 'Look. Tear, episiotomy, rupture, inverted uterus.',
    tone: 'warn',
  },
  {
    t: 'Tissue',
    share: 10,
    feel: 'Placenta incomplete, uterus will not stay hard',
    act: 'Check the placenta is complete. Explore and evacuate.',
    tone: 'accent',
  },
  {
    t: 'Thrombin',
    share: 1,
    feel: 'Oozing everywhere, no clot forming',
    act: 'Clotting screen. Blood products. Treat the cause.',
    tone: 'good',
  },
];

const BAR_X = 128;
const BAR_MAX = 168;

export function FourTs() {
  return (
    <Diagram
      title="The four Ts of postpartum bleeding"
      desc="A uterus with the four causes of postpartum haemorrhage, each sized by how often it is the cause. Tone accounts for about seventy per cent: the uterus is soft and boggy, and the action is to rub up a contraction and give oxytocin. Trauma accounts for about twenty per cent: the uterus is firm but bleeding continues, so look for a tear. Tissue accounts for about ten per cent: retained placenta. Thrombin accounts for under one per cent: blood is oozing without clotting. Each row states what you feel and what you do."
      viewBox="0 0 470 296"
    >
      <Label x={0} y={14} size={12} weight={700}>
        She is bleeding. Which T is it? Feel the uterus first.
      </Label>

      {/* --- Uterus --- */}
      <g transform="translate(6, 28)">
        <Part label="Uterus, palpated abdominally after delivery">
          <path
            d="M 54 18 Q 92 18 96 62 Q 100 108 74 132 Q 54 150 34 132 Q 8 108 12 62 Q 16 18 54 18 Z"
            fill="var(--scout-danger-soft)"
            stroke="var(--scout-danger)"
            strokeWidth="1.6"
          />
          {/* Fundus level marker */}
          <line x1="4" y1="30" x2="104" y2="30" stroke="var(--scout-stroke-soft)" strokeWidth="0.9" strokeDasharray="3 3" />
          <text x="54" y="24" fill="var(--scout-stroke-soft)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">
            fundus
          </text>
          <text x="54" y="80" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
            SOFT?
          </text>
          <text x="54" y="94" fill="var(--scout-danger)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)">
            rub it up
          </text>
        </Part>

        <Part label="Umbilicus, the reference for fundal height">
          <circle cx="54" cy="152" r="3.4" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.2" />
          <text x="54" y="168" fill="var(--scout-stroke-soft)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">
            umbilicus
          </text>
        </Part>

        <Part label="First move">
          <rect x="0" y="182" width="110" height="52" rx="5" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="0.8" />
          <text x="8" y="197" fill="var(--scout-stroke)" fontSize="9" fontWeight="700" fontFamily="var(--font-ui)">
            While you decide:
          </text>
          <text x="8" y="210" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">
            call for help · two
          </text>
          <text x="8" y="221" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">
            large cannulae · cross-
          </text>
          <text x="8" y="232" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">
            match · massage
          </text>
        </Part>
      </g>

      {/* --- The four Ts, sized by frequency --- */}
      {TS.map((row, i) => {
        const y = 40 + i * 56;
        const w = Math.max(14, (row.share / 70) * BAR_MAX);
        return (
          <g key={row.t} transform={`translate(0, ${y})`}>
            <Part label={`${row.t}, about ${row.share} per cent. You feel: ${row.feel}. You do: ${row.act}`}>
              {/* Frequency bar — width carries the proportion, the % also reads */}
              <rect x={BAR_X} y="-14" width={w} height="26" rx="4" fill={`var(--scout-${row.tone}-soft)`} stroke={`var(--scout-${row.tone})`} strokeWidth="1.2" />
              <text x={BAR_X + 10} y="4" fill={`var(--scout-${row.tone})`} fontSize="13" fontWeight="800" fontFamily="var(--font-ui)">
                {row.t}
              </text>
              <text x={BAR_X + w + 8} y="4" fill={`var(--scout-${row.tone})`} fontSize="10.5" fontWeight="700" fontFamily="var(--font-mono)">
                {row.share === 1 ? '<1%' : `${row.share}%`}
              </text>

              <text x={BAR_X} y="26" fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
                <tspan fontWeight="700">Feel: </tspan>
                {row.feel}
              </text>
              <text x={BAR_X} y="38" fill={`var(--scout-${row.tone})`} fontSize="9.5" fontWeight="600" fontFamily="var(--font-ui)">
                <tspan fontWeight="700">Do: </tspan>
                {row.act}
              </text>
            </Part>
          </g>
        );
      })}

      <Label x={128} y={286} size={10.5} tone="warn" weight={600}>
        Blood loss is under-estimated by eye. Weigh the swabs, and act on the observations, not the visible volume.
      </Label>
    </Diagram>
  );
}
