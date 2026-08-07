import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-NEPH-001 · Tier 1 · Understand
 * Nephron with every diuretic at its site.
 *
 * Changes what a clinician does: predicts the electrolyte consequence of a
 * diuretic from where it acts.
 */

const SITES = [
  {
    at: [96, 96],
    label: 'Proximal tubule',
    transporter: 'Carbonic anhydrase',
    drug: 'Acetazolamide',
    consequence: 'Loses bicarbonate → metabolic acidosis',
    tone: 'stroke',
  },
  {
    at: [96, 148],
    label: 'Proximal tubule',
    transporter: 'SGLT2',
    drug: 'Dapagliflozin, empagliflozin',
    consequence: 'Loses glucose and sodium; watch for euglycaemic DKA',
    tone: 'good',
  },
  {
    at: [186, 232],
    label: 'Thick ascending limb',
    transporter: 'NKCC2',
    drug: 'Furosemide (loop)',
    consequence: 'Most powerful. Loses K⁺, Ca²⁺, Mg²⁺; can cause deafness fast IV',
    tone: 'danger',
  },
  {
    at: [312, 108],
    label: 'Distal convoluted tubule',
    transporter: 'NCC',
    drug: 'Thiazide',
    consequence: 'Loses K⁺ and Na⁺; RETAINS calcium; classic hyponatraemia',
    tone: 'accent',
  },
  {
    at: [392, 178],
    label: 'Collecting duct',
    transporter: 'ENaC / aldosterone receptor',
    drug: 'Amiloride, spironolactone',
    consequence: 'Potassium SPARING → hyperkalaemia',
    tone: 'warn',
  },
];

export function NephronDiuretics() {
  return (
    <Diagram
      title="The nephron with every diuretic at the site it blocks"
      desc="One nephron drawn end to end from glomerulus to collecting duct. Acetazolamide blocks carbonic anhydrase in the proximal tubule and loses bicarbonate. SGLT2 inhibitors also act proximally. Loop diuretics block NKCC2 in the thick ascending limb and lose potassium, calcium and magnesium. Thiazides block NCC in the distal convoluted tubule, losing potassium and sodium but retaining calcium. Amiloride and spironolactone act at the collecting duct and are potassium sparing, so they cause hyperkalaemia."
      viewBox="0 0 470 462"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Where a diuretic acts tells you which electrolyte it will cost you
      </Label>

      {/* --- The nephron tubule --- */}
      <Part label="Nephron, glomerulus to collecting duct">
        {/* Glomerulus */}
        <circle cx="60" cy="58" r="20" fill="var(--scout-accent-soft)" stroke="var(--scout-accent)" strokeWidth="1.6" />
        <path d="M 50 52 Q 60 46 70 52 M 48 60 Q 60 68 72 60 M 52 66 Q 60 60 68 66" fill="none" stroke="var(--scout-accent)" strokeWidth="1" />
        <text x="60" y="34" fill="var(--scout-accent)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          glomerulus
        </text>

        {/* Tubule path: PCT down, loop, ascend, DCT, collecting duct */}
        <path
          d="M 78 66
             Q 100 72 96 100
             L 96 158
             Q 96 186 130 196
             L 158 204
             Q 186 214 186 240
             Q 186 262 210 258
             Q 240 252 246 220
             L 258 150
             Q 266 112 300 108
             L 340 108
             Q 380 108 388 150
             L 392 300"
          fill="none"
          stroke="var(--scout-stroke)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 78 66
             Q 100 72 96 100
             L 96 158
             Q 96 186 130 196
             L 158 204
             Q 186 214 186 240
             Q 186 262 210 258
             Q 240 252 246 220
             L 258 150
             Q 266 112 300 108
             L 340 108
             Q 380 108 388 150
             L 392 300"
          fill="none"
          stroke="var(--scout-fill-soft)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Segment names along the tube */}
        <text x="112" y="130" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">PCT</text>
        <text x="150" y="252" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">loop of Henle</text>
        <text x="300" y="98" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">DCT</text>
        <text x="400" y="270" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">collecting</text>
        <text x="400" y="281" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">duct</text>
        <text x="392" y="316" fill="var(--scout-stroke-soft)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)">→ urine</text>
      </Part>

      {/* --- Block markers on the tubule --- */}
      {SITES.map((s, i) => (
        <Part key={s.drug} label={`${s.transporter} at the ${s.label}, blocked by ${s.drug}. ${s.consequence}`}>
          <circle cx={s.at[0]} cy={s.at[1]} r="10" fill={`var(--scout-${s.tone}-soft)`} stroke={`var(--scout-${s.tone})`} strokeWidth="1.6" />
          <text
            x={s.at[0]}
            y={s.at[1] + 3.5}
            fill={`var(--scout-${s.tone})`}
            fontSize="9.5"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
          >
            {i + 1}
          </text>
        </Part>
      ))}

      {/* --- Legend, numbered to the markers on the tubule --- */}
      <text x="0" y="330" fill="var(--scout-stroke-soft)" fontSize="9" fontWeight="700" fontFamily="var(--font-ui)" letterSpacing="0.06em">
        WHAT EACH ONE COSTS YOU
      </text>

      {SITES.map((s, i) => (
        <g key={`legend-${s.drug}`} transform={`translate(0, ${344 + i * 22})`}>
          <Part label={`${s.drug}: ${s.consequence}`}>
            <circle cx="7" cy="-3" r="7.5" fill={`var(--scout-${s.tone}-soft)`} stroke={`var(--scout-${s.tone})`} strokeWidth="1.1" />
            <text x="7" y="0.5" fill={`var(--scout-${s.tone})`} fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
              {i + 1}
            </text>
            <text x="22" y="-5" fill={`var(--scout-${s.tone})`} fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">
              {s.drug}
            </text>
            <text x="22" y="6" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">
              {s.transporter} · {s.label}
            </text>
            <text x="228" y="-5" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">
              {s.consequence}
            </text>
          </Part>
        </g>
      ))}
    </Diagram>
  );
}

/** The consequence table, rendered beside the diagram in the panel. */
export const NEPHRON_SITES = SITES;
