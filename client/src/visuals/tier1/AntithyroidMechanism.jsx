import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-THY-003 · Tier 1 · Understand
 * Where carbimazole and PTU act — and the one extra step PTU blocks.
 *
 * Changes what a clinician does: explains the 2–6 week delay (stored colloid is
 * untouched, so a beta-blocker is needed for immediate control) and why PTU is
 * the storm drug (it also blocks peripheral T4→T3 conversion).
 */
export function AntithyroidMechanism() {
  return (
    <Diagram
      title="Antithyroid drugs — where they act, and why PTU is different"
      desc="Iodide is trapped by the thyroid follicular cell and oxidised by thyroid peroxidase, which iodinates tyrosine residues on thyroglobulin and couples them to form T3 and T4. These are stored in the colloid, then released into the blood. In the periphery, deiodinase converts T4 into the more active T3. Carbimazole, methimazole and propylthiouracil all inhibit thyroid peroxidase, blocking new hormone synthesis. Propylthiouracil additionally inhibits peripheral deiodinase, blocking the conversion of T4 to T3 — which is why it is preferred in thyroid storm. Critically, no antithyroid drug touches the hormone already stored in the colloid, and the gland holds several weeks of supply. That is why clinical improvement takes two to six weeks and why a beta-blocker is added for immediate symptom control."
      viewBox="0 0 470 372"
    >
      <Label x={0} y={13} size={12} weight={700}>
        Both drugs block synthesis. Only PTU blocks conversion.
      </Label>

      {/* ---- follicular cell ---- */}
      <Part label="Thyroid follicular cell">
        <rect x="0" y="26" width="292" height="188" rx="8" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="1.2" />
        <text x="10" y="42" fill="var(--scout-stroke-soft)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">
          THYROID FOLLICULAR CELL
        </text>
      </Part>

      <Step x={14} y={52} w={110} label="Iodide (I⁻) trapped" sub="from the blood" />
      <Down x={69} y1={82} y2={98} />

      <Part label="Thyroid peroxidase, the enzyme both drugs inhibit">
        <rect x="14" y="98" width="110" height="42" rx="6" fill="var(--scout-accent-soft)" stroke="var(--scout-accent)" strokeWidth="1.6" />
        <text x="69" y="114" fill="var(--scout-accent)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">THYROID</text>
        <text x="69" y="126" fill="var(--scout-accent)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">PEROXIDASE</text>
        <text x="69" y="136" fill="var(--scout-accent)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">oxidise · iodinate · couple</text>
      </Part>

      {/* block 1 */}
      <Part label="Carbimazole, methimazole and PTU all inhibit thyroid peroxidase">
        <line x1="140" y1="119" x2="128" y2="119" stroke="var(--scout-danger)" strokeWidth="2.4" />
        <line x1="128" y1="110" x2="128" y2="128" stroke="var(--scout-danger)" strokeWidth="3" strokeLinecap="round" />
        <rect x="140" y="100" width="140" height="38" rx="6" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.3" />
        <text x="210" y="115" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          CARBIMAZOLE · METHIMAZOLE
        </text>
        <text x="210" y="128" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          and PTU — block here ①
        </text>
      </Part>

      <Down x={69} y1={140} y2={156} />
      <Step x={14} y={156} w={110} label="T3 and T4 made" tone="good" />
      <Down x={69} y1={186} y2={200} />

      {/* colloid store */}
      <Part label="Colloid store — several weeks of hormone, untouched by any antithyroid drug">
        <rect x="150" y="152" width="130" height="52" rx="6" fill="var(--scout-warn-soft)" stroke="var(--scout-warn)" strokeWidth="1.4" strokeDasharray="4 3" />
        <text x="215" y="169" fill="var(--scout-warn)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">COLLOID STORE</text>
        <text x="215" y="182" fill="var(--scout-warn)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)">weeks of hormone already made</text>
        <text x="215" y="194" fill="var(--scout-warn)" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">NO DRUG TOUCHES THIS</text>
        <line x1="124" y1="178" x2="146" y2="178" stroke="var(--scout-warn)" strokeWidth="1.4" />
      </Part>

      {/* ---- circulation ---- */}
      <Part label="T4 released into the circulation">
        <rect x="14" y="222" width="110" height="30" rx="6" fill="var(--scout-fill)" stroke="var(--scout-stroke)" strokeWidth="1.2" />
        <text x="69" y="241" fill="var(--scout-stroke)" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">T4 in blood</text>
      </Part>
      <Arrow x1={124} y1={237} x2={172} y2={237} />

      <Part label="Peripheral deiodinase converts T4 to the more active T3">
        <rect x="172" y="220" width="106" height="34" rx="6" fill="var(--scout-accent-soft)" stroke="var(--scout-accent)" strokeWidth="1.6" />
        <text x="225" y="236" fill="var(--scout-accent)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">DEIODINASE</text>
        <text x="225" y="248" fill="var(--scout-accent)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">peripheral tissues</text>
      </Part>
      <Arrow x1={278} y1={237} x2={318} y2={237} />

      <Part label="T3, the active hormone">
        <rect x="318" y="222" width="82" height="30" rx="6" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.3" />
        <text x="359" y="235" fill="var(--scout-danger)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">T3</text>
        <text x="359" y="246" fill="var(--scout-danger)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">the active one</text>
      </Part>

      {/* block 2 — PTU only */}
      <Part label="PTU alone additionally inhibits peripheral deiodinase">
        <line x1="225" y1="272" x2="225" y2="262" stroke="var(--scout-danger)" strokeWidth="2.4" />
        <line x1="214" y1="262" x2="236" y2="262" stroke="var(--scout-danger)" strokeWidth="3" strokeLinecap="round" />
        <rect x="150" y="272" width="150" height="34" rx="6" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.6" />
        <text x="225" y="288" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          PTU ONLY — blocks here ②
        </text>
        <text x="225" y="300" fill="var(--scout-danger)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)">
          carbimazole does NOT do this
        </text>
      </Part>

      {/* consequences */}
      <Part label="What each block means in practice">
        <rect x="308" y="26" width="160" height="178" rx="6" fill="var(--scout-fill-soft)" />
        <text x="318" y="44" fill="var(--scout-stroke)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">So, in practice</text>

        <text x="318" y="64" fill="var(--scout-accent)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">① Block synthesis</text>
        <text x="318" y="77" fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">New hormone stops.</text>
        <text x="318" y="88" fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">Stored hormone does not.</text>
        <text x="318" y="99" fill="var(--scout-warn)" fontSize="8.8" fontWeight="700" fontFamily="var(--font-ui)">→ 2–6 weeks to work</text>

        <text x="318" y="120" fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">② Block conversion</text>
        <text x="318" y="133" fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">Active T3 falls faster.</text>
        <text x="318" y="144" fill="var(--scout-danger)" fontSize="8.8" fontWeight="700" fontFamily="var(--font-ui)">→ PTU in THYROID STORM</text>

        <text x="318" y="165" fill="var(--scout-good)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">Meanwhile</text>
        <text x="318" y="178" fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">BETA-BLOCKER covers the</text>
        <text x="318" y="189" fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">gap — tremor, palpitations</text>
        <text x="318" y="200" fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">and anxiety, within hours.</text>
      </Part>

      {/* the two warnings */}
      <Part label="The two warnings that go to every patient">
        <rect x="0" y="318" width="468" height="48" rx="6" fill="var(--scout-danger-soft)" />
        <rect x="0" y="318" width="4" height="48" rx="2" fill="var(--scout-danger)" />
        <text x="12" y="334" fill="var(--scout-danger)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">
          Two warnings go to EVERY patient on these drugs
        </text>
        <text x="12" y="348" fill="var(--scout-stroke)" fontSize="9.3" fontFamily="var(--font-ui)">
          SORE THROAT / fever / mouth ulcers → stop the drug, urgent full blood count (agranulocytosis).
        </text>
        <text x="12" y="360" fill="var(--scout-stroke)" fontSize="9.3" fontFamily="var(--font-ui)">
          JAUNDICE / dark urine / persistent nausea → stop and seek help (hepatotoxicity, worst with PTU).
        </text>
      </Part>
    </Diagram>
  );
}

function Step({ x, y, w, label, sub, tone = 'stroke' }) {
  return (
    <Part label={label}>
      <rect x={x} y={y} width={w} height={sub ? 30 : 30} rx={6}
        fill={tone === 'good' ? 'var(--scout-good-soft)' : 'var(--scout-fill)'}
        stroke={`var(--scout-${tone})`} strokeWidth="1.2" />
      <text x={x + w / 2} y={sub ? y + 15 : y + 19} fill={`var(--scout-${tone})`} fontSize="9.5" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 26} fill="var(--scout-stroke-soft)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">
          {sub}
        </text>
      )}
    </Part>
  );
}

function Down({ x, y1, y2 }) {
  return <Arrow x1={x} y1={y1} x2={x} y2={y2} />;
}

function Arrow({ x1, y1, x2, y2 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const hx = x2 - ux * 6;
  const hy = y2 - uy * 6;
  const px = -uy * 3.2;
  const py = ux * 3.2;
  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke="var(--scout-stroke)" strokeWidth="1.6" />
      <path d={`M ${x2} ${y2} L ${hx + px} ${hy + py} L ${hx - px} ${hy - py} Z`} fill="var(--scout-stroke)" />
    </g>
  );
}
