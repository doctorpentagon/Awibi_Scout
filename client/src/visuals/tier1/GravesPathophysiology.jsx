import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-THY-001 · Tier 1 · Understand
 * Graves disease: why an antibody that mimics TSH cannot be switched off.
 *
 * Changes what a clinician does: explains why TSH is undetectable while the
 * gland over-produces, and why the eyes and shins are involved in Graves alone.
 */
export function GravesPathophysiology() {
  return (
    <Diagram
      title="Graves disease — an antibody that mimics TSH and cannot be switched off"
      desc="The normal axis is shown on the left: the hypothalamus releases TRH, the pituitary releases TSH, the thyroid makes T3 and T4, and rising thyroid hormone feeds back to suppress the pituitary. On the right, Graves disease: a TSH receptor antibody binds and activates the same receptor on the thyroid. Because it is an antibody and not TSH, negative feedback cannot switch it off. Pituitary TSH is fully suppressed while the gland continues to over-produce. The same antibody also stimulates TSH receptors on orbital fibroblasts, causing exophthalmos, and on pretibial fibroblasts, causing thyroid dermopathy."
      viewBox="0 0 470 340"
    >
      <Label x={0} y={14} size={12} weight={700}>
        The antibody does what TSH does — but feedback cannot stop it
      </Label>

      {/* ---------- NORMAL AXIS (left) ---------- */}
      <g transform="translate(0, 26)">
        <Label x={0} y={0} size={10.5} weight={700} tone="good">NORMAL</Label>

        <Part label="Hypothalamus releasing TRH">
          <rect x="18" y="12" width="96" height="26" rx="6" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke)" strokeWidth="1.2" />
          <text x="66" y="29" fill="var(--scout-stroke)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">Hypothalamus</text>
        </Part>
        <Arrow x1={66} y1={38} x2={66} y2={56} tone="stroke" label="TRH" lx={72} ly={50} />

        <Part label="Pituitary releasing TSH">
          <rect x="18" y="56" width="96" height="26" rx="6" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke)" strokeWidth="1.2" />
          <text x="66" y="73" fill="var(--scout-stroke)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">Pituitary</text>
        </Part>
        <Arrow x1={66} y1={82} x2={66} y2={100} tone="accent" label="TSH" lx={72} ly={94} />

        <Part label="Thyroid gland">
          <path d="M 38 100 Q 66 96 94 100 Q 98 118 84 128 Q 66 136 48 128 Q 34 118 38 100 Z"
            fill="var(--scout-good-soft)" stroke="var(--scout-good)" strokeWidth="1.4" />
          <text x="66" y="118" fill="var(--scout-good)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">Thyroid</text>
        </Part>
        <Arrow x1={66} y1={136} x2={66} y2={154} tone="stroke" label="T3 / T4" lx={72} ly={148} />

        <Part label="Normal thyroid hormone level">
          <rect x="24" y="154" width="84" height="24" rx="5" fill="var(--scout-fill)" stroke="var(--scout-stroke-soft)" strokeWidth="1" />
          <text x="66" y="170" fill="var(--scout-stroke)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">T3 / T4 normal</text>
        </Part>

        {/* negative feedback loop */}
        <Part label="Negative feedback suppresses the pituitary">
          <path d="M 24 166 L 8 166 L 8 69 L 18 69" fill="none" stroke="var(--scout-good)" strokeWidth="1.6" strokeDasharray="4 3" />
          <path d="M 18 69 L 11 65.5 L 11 72.5 Z" fill="var(--scout-good)" />
          <text x="4" y="120" fill="var(--scout-good)" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)" transform="rotate(-90 4 120)">
            negative feedback works
          </text>
        </Part>
      </g>

      {/* divider */}
      <line x1="150" y1="30" x2="150" y2="316" stroke="var(--scout-stroke-soft)" strokeWidth="1" strokeDasharray="3 4" />

      {/* ---------- GRAVES (right) ---------- */}
      <g transform="translate(168, 26)">
        <Label x={0} y={0} size={10.5} weight={700} tone="danger">GRAVES DISEASE</Label>

        <Part label="Pituitary TSH is fully suppressed">
          <rect x="10" y="56" width="96" height="26" rx="6" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="58" y="73" fill="var(--scout-stroke-soft)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">Pituitary</text>
          <text x="112" y="66" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">TSH</text>
          <text x="112" y="78" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">undetectable</text>
        </Part>

        {/* B cell producing TRAb */}
        <Part label="B cell producing TSH receptor antibody">
          <circle cx="30" cy="112" r="15" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.4" />
          <text x="30" y="110" fill="var(--scout-danger)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">B cell</text>
          <text x="30" y="119" fill="var(--scout-danger)" fontSize="7.5" textAnchor="middle" fontFamily="var(--font-ui)">clone</text>
        </Part>

        {/* the antibody */}
        <Part label="TRAb, the TSH receptor antibody">
          <path d="M 52 112 L 66 104 M 52 112 L 66 120 M 52 112 L 44 112" stroke="var(--scout-danger)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <text x="56" y="98" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">TRAb</text>
        </Part>
        <Arrow x1={70} y1={112} x2={86} y2={112} tone="danger" />

        <Part label="Thyroid diffusely stimulated and enlarged">
          <path d="M 84 96 Q 118 90 152 96 Q 158 120 140 132 Q 118 142 96 132 Q 78 120 84 96 Z"
            fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.8" />
          <text x="118" y="114" fill="var(--scout-danger)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">Thyroid</text>
          <text x="118" y="125" fill="var(--scout-danger)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)">diffuse goitre</text>
        </Part>
        <Arrow x1={118} y1={142} x2={118} y2={158} tone="danger" label="T3 / T4 ↑↑" lx={124} ly={153} />

        <Part label="Thyroid hormone markedly raised">
          <rect x="76" y="158" width="86" height="24" rx="5" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.2" />
          <text x="119" y="174" fill="var(--scout-danger)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">T3 / T4 HIGH</text>
        </Part>

        {/* broken feedback */}
        <Part label="Negative feedback cannot switch the antibody off">
          <path d="M 76 170 L 62 170 L 62 132" fill="none" stroke="var(--scout-stroke-soft)" strokeWidth="1.4" strokeDasharray="4 3" />
          <g transform="translate(62, 124)">
            <line x1="-7" y1="-7" x2="7" y2="7" stroke="var(--scout-danger)" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="7" y1="-7" x2="-7" y2="7" stroke="var(--scout-danger)" strokeWidth="2.4" strokeLinecap="round" />
          </g>
          <text x="0" y="150" fill="var(--scout-danger)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-ui)">feedback</text>
          <text x="0" y="161" fill="var(--scout-danger)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-ui)">cannot reach</text>
          <text x="0" y="172" fill="var(--scout-danger)" fontSize="8.5" fontWeight="700" fontFamily="var(--font-ui)">the antibody</text>
        </Part>
      </g>

      {/* ---------- THE EXTRA-THYROID TARGETS ---------- */}
      <Part label="The same antibody stimulates orbital and pretibial fibroblasts">
        <rect x="0" y="242" width="470" height="60" rx="6" fill="var(--scout-warn-soft)" />
        <text x="12" y="260" fill="var(--scout-warn)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          The SAME antibody also finds TSH receptors outside the thyroid — which is why only Graves does this:
        </text>
        <g transform="translate(14, 268)">
          <circle cx="8" cy="12" r="8" fill="var(--scout-fill)" stroke="var(--scout-warn)" strokeWidth="1.3" />
          <circle cx="8" cy="12" r="3" fill="var(--scout-warn)" />
          <text x="24" y="10" fill="var(--scout-warn)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">ORBITAL fibroblasts</text>
          <text x="24" y="21" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">→ exophthalmos, thyroid eye disease</text>
        </g>
        <g transform="translate(238, 268)">
          <rect x="0" y="5" width="16" height="14" rx="3" fill="var(--scout-fill)" stroke="var(--scout-warn)" strokeWidth="1.3" />
          <text x="24" y="10" fill="var(--scout-warn)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">PRETIBIAL fibroblasts</text>
          <text x="24" y="21" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">→ thyroid dermopathy on the shins</text>
        </g>
      </Part>

      <Label x={0} y={318} size={10} tone="stroke-soft">
        Eye disease is caused by the ANTIBODY, not by the hormone — so it can appear before, during or after the thyrotoxicosis,
      </Label>
      <Label x={0} y={332} size={10} tone="stroke-soft">
        and can worsen even after the patient is rendered euthyroid. Smoking is the strongest modifiable driver.
      </Label>
    </Diagram>
  );
}

function Arrow({ x1, y1, x2, y2, tone = 'stroke', label, lx, ly }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const hx = x2 - ux * 7;
  const hy = y2 - uy * 7;
  const px = -uy * 3.6;
  const py = ux * 3.6;
  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={`var(--scout-${tone})`} strokeWidth="1.8" />
      <path d={`M ${x2} ${y2} L ${hx + px} ${hy + py} L ${hx - px} ${hy - py} Z`} fill={`var(--scout-${tone})`} />
      {label && (
        <text x={lx} y={ly} fill={`var(--scout-${tone})`} fontSize="9" fontWeight="700" fontFamily="var(--font-ui)">
          {label}
        </text>
      )}
    </g>
  );
}
