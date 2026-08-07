import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-DRIP-001 · Tier 1 · Understand
 * How the drip rate formula works.
 *
 * Changes what a clinician does: understands WHY the number is what it is, so a
 * wrong drop factor becomes obvious rather than invisible.
 */
export function DripRateFormula() {
  return (
    <Diagram
      title="How the drip rate formula works"
      desc="A fluid bag connected to a giving set with a labelled drop chamber, and the three numbers that feed the arithmetic. Volume in millilitres is divided by time in hours to give millilitres per hour. That is multiplied by the drop factor in drops per millilitre, printed on the packet of the set being used. Dividing by sixty converts per hour into per minute, giving the answer in drops per minute."
      viewBox="0 0 460 300"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Where each number in the drip rate comes from
      </Label>

      {/* --- The bag and giving set --- */}
      <g transform="translate(10, 28)">
        <Part label="Fluid bag, volume in millilitres">
          <path d="M 20 6 L 76 6 L 82 24 L 82 94 Q 82 104 72 104 L 24 104 Q 14 104 14 94 L 14 24 Z"
            fill="var(--scout-accent-soft)" stroke="var(--scout-accent)" strokeWidth="1.5" />
          <line x1="48" y1="0" x2="48" y2="6" stroke="var(--scout-stroke)" strokeWidth="1.5" />
          <text x="48" y="48" fill="var(--scout-accent)" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="var(--font-ui)">500</text>
          <text x="48" y="62" fill="var(--scout-accent)" fontSize="10" textAnchor="middle" fontFamily="var(--font-ui)">mL</text>
          <text x="48" y="84" fill="var(--scout-stroke-soft)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)">the VOLUME</text>
        </Part>

        <Part label="Drop chamber — where the drop factor is set by the manufacturer">
          <line x1="48" y1="104" x2="48" y2="124" stroke="var(--scout-stroke)" strokeWidth="1.6" />
          <rect x="36" y="124" width="24" height="42" rx="5" fill="var(--scout-fill)" stroke="var(--scout-stroke)" strokeWidth="1.5" />
          {/* Falling drops */}
          <circle cx="48" cy="136" r="2.6" fill="var(--scout-accent)" />
          <circle cx="48" cy="148" r="2.2" fill="var(--scout-accent)" opacity="0.6" />
          <path d="M 48 158 Q 44 162 48 164 Q 52 162 48 158 Z" fill="var(--scout-accent)" />
          <line x1="48" y1="166" x2="48" y2="196" stroke="var(--scout-stroke)" strokeWidth="1.6" />
          <text x="70" y="140" fill="var(--scout-stroke)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">drop chamber</text>
          <text x="70" y="153" fill="var(--scout-stroke-soft)" fontSize="9" fontFamily="var(--font-ui)">count drops HERE,</text>
          <text x="70" y="164" fill="var(--scout-stroke-soft)" fontSize="9" fontFamily="var(--font-ui)">for a full 60 seconds</text>
        </Part>

        <Part label="Cannula at the patient">
          <path d="M 40 196 L 56 196 L 62 208 L 34 208 Z" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke)" strokeWidth="1.3" />
          <text x="48" y="222" fill="var(--scout-stroke-soft)" fontSize="9" textAnchor="middle" fontFamily="var(--font-ui)">patient</text>
        </Part>
      </g>

      {/* --- The arithmetic --- */}
      <g transform="translate(158, 40)">
        <Term y={0} n="1" value="500 mL" label="Volume — what is in the bag" tone="accent" />
        <Op y={40} sign="÷" />
        <Term y={52} n="2" value="8 hours" label="Time — how long it must run over" tone="accent" />

        <Part label="Intermediate result in millilitres per hour">
          <line x1="0" y1="102" x2="286" y2="102" stroke="var(--scout-stroke-soft)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="0" y="120" fill="var(--scout-stroke)" fontSize="11" fontWeight="700" fontFamily="var(--font-ui)">= 62.5 mL per hour</text>
          <text x="286" y="120" fill="var(--scout-stroke-soft)" fontSize="9" textAnchor="end" fontFamily="var(--font-ui)">what a pump would be set to</text>
        </Part>

        <Op y={136} sign="×" />
        <Term y={148} n="3" value="20 drops/mL" label="Drop factor — READ IT OFF THE PACKET" tone="warn" />
        <Op y={190} sign="÷" />
        <Term y={202} n="4" value="60" label="Converts per hour into per minute" tone="stroke" />
      </g>

      {/* --- The answer --- */}
      <Part label="The answer in drops per minute">
        <rect x="158" y="252" width="290" height="42" rx="6" fill="var(--scout-good-soft)" stroke="var(--scout-good)" strokeWidth="1.5" />
        <text x="170" y="270" fill="var(--scout-good)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)" letterSpacing="0.06em">
          ANSWER
        </text>
        <text x="170" y="287" fill="var(--scout-good)" fontSize="16" fontWeight="800" fontFamily="var(--font-ui)">
          ≈ 21 drops per minute
        </text>
        <text x="438" y="287" fill="var(--scout-stroke-soft)" fontSize="9" textAnchor="end" fontFamily="var(--font-ui)">
          round to a whole drop
        </text>
      </Part>

      <Part label="Why the drop factor matters">
        <rect x="10" y="256" width="138" height="38" rx="5" fill="var(--scout-warn-soft)" />
        <text x="18" y="271" fill="var(--scout-warn)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">
          Change 20 → 60
        </text>
        <text x="18" y="285" fill="var(--scout-warn)" fontSize="9" fontFamily="var(--font-ui)">
          and the answer triples.
        </text>
      </Part>
    </Diagram>
  );
}

function Term({ y, n, value, label, tone }) {
  return (
    <g transform={`translate(0, ${y})`}>
      <title>{`${label}: ${value}`}</title>
      <circle cx="9" cy="12" r="9" fill={`var(--scout-${tone}-soft)`} />
      <text x="9" y="15.5" fill={`var(--scout-${tone})`} fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
        {n}
      </text>
      <text x="26" y="12" fill={`var(--scout-${tone})`} fontSize="13.5" fontWeight="800" fontFamily="var(--font-ui)">
        {value}
      </text>
      <text x="26" y="27" fill="var(--scout-stroke-soft)" fontSize="9.5" fontFamily="var(--font-ui)">
        {label}
      </text>
    </g>
  );
}

function Op({ y, sign }) {
  return (
    <text x="9" y={y} fill="var(--scout-stroke)" fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
      {sign}
    </text>
  );
}
