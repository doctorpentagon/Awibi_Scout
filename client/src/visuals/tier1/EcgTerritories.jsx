import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-ECG-004 · Tier 1 · Locate
 * 12-lead territories and their arteries.
 *
 * Changes what a clinician does: names the territory and predicts the
 * complication — for example inferior MI and heart block.
 */

const TERRITORIES = [
  {
    name: 'Inferior',
    leads: 'II · III · aVF',
    artery: 'RCA (usually)',
    watch: 'Bradycardia and heart block. Ask about right ventricular involvement before giving nitrates.',
    tone: 'warn',
  },
  {
    name: 'Septal',
    leads: 'V1 · V2',
    artery: 'LAD — proximal',
    watch: 'Extends to anterior fast. Watch the blood pressure.',
    tone: 'accent',
  },
  {
    name: 'Anterior',
    leads: 'V3 · V4',
    artery: 'LAD',
    watch: 'Largest territory. Pump failure and cardiogenic shock.',
    tone: 'danger',
  },
  {
    name: 'Lateral',
    leads: 'I · aVL · V5 · V6',
    artery: 'LCx or diagonal',
    watch: 'Often part of a bigger anterolateral infarct.',
    tone: 'good',
  },
  {
    name: 'Posterior',
    leads: 'Mirror in V1–V3',
    artery: 'RCA or LCx',
    watch: 'Tall R and ST depression in V1–V3 is elevation seen backwards. Do posterior leads V7–V9.',
    tone: 'stroke',
  },
];

export function EcgTerritories() {
  return (
    <Diagram
      title="Twelve-lead territories and the arteries that supply them"
      desc="A schematic heart in cross-section with each lead group mapped to the wall it looks at and the coronary artery that supplies it. Leads two, three and aVF view the inferior wall supplied by the right coronary artery. V1 and V2 view the septum and V3 and V4 the anterior wall, both supplied by the left anterior descending artery. Leads one, aVL, V5 and V6 view the lateral wall supplied by the circumflex. The posterior wall is seen as a mirror image in V1 to V3."
      viewBox="0 0 470 300"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Which leads change tells you which artery, and which artery tells you what to expect
      </Label>

      {/* --- Heart schematic, short-axis view --- */}
      <g transform="translate(18, 34)">
        <Part label="Left ventricle in short axis, with the four walls">
          {/* LV free wall ring */}
          <circle cx="92" cy="92" r="74" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke)" strokeWidth="1.6" />
          <circle cx="92" cy="92" r="40" fill="var(--scout-fill)" stroke="var(--scout-stroke-soft)" strokeWidth="1.2" />
          <text x="92" y="96" fill="var(--scout-stroke-soft)" fontSize="9.5" textAnchor="middle" fontFamily="var(--font-ui)">
            LV cavity
          </text>

          {/* Wall wedges — each a labelled quadrant */}
          <Wedge cx={92} cy={92} r={74} from={225} to={315} tone="accent" label="Septal V1 V2" />
          <Wedge cx={92} cy={92} r={74} from={315} to={45} tone="good" label="Lateral I aVL V5 V6" />
          <Wedge cx={92} cy={92} r={74} from={45} to={135} tone="warn" label="Inferior II III aVF" />
          <Wedge cx={92} cy={92} r={74} from={135} to={225} tone="danger" label="Anterior V3 V4" />
        </Part>

        {/* Wall captions placed outside the ring */}
        <text x="92" y="6" fill="var(--scout-danger)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          Anterior · V3 V4
        </text>
        <text x="92" y="188" fill="var(--scout-warn)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          Inferior · II III aVF
        </text>
        <text x="-14" y="96" fill="var(--scout-accent)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          Septal
        </text>
        <text x="-14" y="109" fill="var(--scout-accent)" fontSize="10" textAnchor="middle" fontFamily="var(--font-ui)">
          V1 V2
        </text>
        <text x="198" y="96" fill="var(--scout-good)" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          Lateral
        </text>
        <text x="198" y="109" fill="var(--scout-good)" fontSize="10" textAnchor="middle" fontFamily="var(--font-ui)">
          I aVL V5 V6
        </text>
      </g>

      {/* --- Territory table --- */}
      <g transform="translate(238, 30)">
        {TERRITORIES.map((t, i) => (
          <g key={t.name} transform={`translate(0, ${i * 52})`}>
            <Part label={`${t.name}: leads ${t.leads}, artery ${t.artery}`}>
              <rect x="0" y="0" width="232" height="46" rx="5" fill="var(--scout-fill)" stroke="var(--scout-stroke-soft)" strokeWidth="0.8" />
              {/* Territory stripe — paired with the name, never the only cue */}
              <rect x="0" y="0" width="4" height="46" rx="2" fill={`var(--scout-${t.tone})`} />
              <text x="12" y="15" fill="var(--scout-label)" fontSize="11" fontWeight="700" fontFamily="var(--font-ui)">
                {t.name}
              </text>
              <text x="228" y="15" fill={`var(--scout-${t.tone})`} fontSize="9.5" fontWeight="600" textAnchor="end" fontFamily="var(--font-mono)">
                {t.leads}
              </text>
              <text x="12" y="28" fill="var(--scout-accent)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-ui)">
                {t.artery}
              </text>
              <text x="12" y="40" fill="var(--scout-stroke-soft)" fontSize="9" fontFamily="var(--font-ui)">
                {clamp(t.watch, 52)}
              </text>
            </Part>
          </g>
        ))}
      </g>

      <Label x={0} y={294} size={10.5} tone="warn" weight={600}>
        Inferior MI: check a right-sided lead V4R before nitrates — a right ventricular infarct is preload dependent.
      </Label>
    </Diagram>
  );
}

/** A labelled wall wedge of the ventricle ring. */
function Wedge({ cx, cy, r, from, to, tone, label }) {
  const inner = 40;
  const a0 = (from * Math.PI) / 180;
  const a1 = ((to > from ? to : to + 360) * Math.PI) / 180;
  const large = a1 - a0 > Math.PI ? 1 : 0;

  const p = (radius, angle) => [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
  const [x0, y0] = p(r, a0);
  const [x1, y1] = p(r, a1);
  const [x2, y2] = p(inner, a1);
  const [x3, y3] = p(inner, a0);

  return (
    <g>
      <title>{label}</title>
      <path
        d={`M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${inner} ${inner} 0 ${large} 0 ${x3} ${y3} Z`}
        fill={`var(--scout-${tone}-soft)`}
        stroke={`var(--scout-${tone})`}
        strokeWidth="1.2"
      />
    </g>
  );
}

function clamp(s, n) {
  return s.length > n ? `${s.slice(0, n - 1)}…` : s;
}
