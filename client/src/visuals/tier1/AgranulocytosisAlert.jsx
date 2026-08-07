import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-THY-004 · Tier 1 · Act
 * The agranulocytosis rule for antithyroid drugs.
 *
 * Changes what a clinician does: this is the single highest-value instruction in
 * prescribing thionamides. It is a patient-facing warning, not a monitoring
 * schedule — routine counts miss it because it develops between tests.
 */
export function AgranulocytosisAlert() {
  return (
    <Diagram
      title="Agranulocytosis on antithyroid drugs — the warning, and what to do"
      desc="Warning infographic for agranulocytosis caused by carbimazole, methimazole or propylthiouracil. Three symptoms to watch for: sore throat, fever, and mouth ulcers. The instruction to every patient is to stop the drug immediately and get an urgent full blood count if any of these occur. Routine periodic blood counts do not reliably detect it because it develops between tests, so the patient instruction is the safety net. The action flowchart runs: suspected agranulocytosis on an antithyroid drug, then stop the drug immediately without waiting for a result, then urgent full blood count with differential, then if neutropenic and febrile treat as neutropenic sepsis with broad spectrum antibiotics within one hour, then refer to endocrinology. Do not switch to the other thionamide because cross-reactivity is well described; the patient needs radioiodine or surgery instead. Record it as a drug allergy."
      viewBox="0 0 470 470"
    >
      {/* ---- header band ---- */}
      <Part label="Warning header">
        <rect x="0" y="0" width="468" height="44" rx="7" fill="var(--scout-danger-soft)" />
        <rect x="0" y="0" width="5" height="44" rx="2.5" fill="var(--scout-danger)" />
        <g transform="translate(18, 10)">
          <path d="M 12 0 L 24 22 L 0 22 Z" fill="none" stroke="var(--scout-danger)" strokeWidth="2.2" strokeLinejoin="round" />
          <line x1="12" y1="8" x2="12" y2="15" stroke="var(--scout-danger)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="18.5" r="1.3" fill="var(--scout-danger)" />
        </g>
        <text x="52" y="21" fill="var(--scout-danger)" fontSize="13" fontWeight="700" fontFamily="var(--font-ui)">
          AGRANULOCYTOSIS
        </text>
        <text x="52" y="35" fill="var(--scout-danger)" fontSize="9.5" fontFamily="var(--font-ui)">
          Carbimazole · Methimazole · Propylthiouracil — rare, sudden, and potentially fatal
        </text>
      </Part>

      {/* ---- the three symptoms ---- */}
      <Label x={0} y={64} size={11} weight={700}>
        Tell the patient to watch for these three
      </Label>

      <Symptom x={0} label="SORE THROAT" note="often looks unimpressive — no pus can form">
        {/* throat */}
        <path d="M 22 8 Q 12 20 16 34 Q 22 44 32 44 Q 42 44 48 34 Q 52 20 42 8 Z"
          fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.6" />
        <path d="M 32 16 Q 27 24 32 34 Q 37 24 32 16 Z" fill="var(--scout-danger)" opacity="0.55" />
        <path d="M 20 24 Q 24 30 22 36 M 44 24 Q 40 30 42 36" fill="none" stroke="var(--scout-danger)" strokeWidth="1.3" strokeLinecap="round" />
      </Symptom>

      <Symptom x={157} label="FEVER" note="systemic illness out of proportion">
        {/* thermometer */}
        <rect x="27" y="6" width="10" height="26" rx="5" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.6" />
        <circle cx="32" cy="38" r="7" fill="var(--scout-danger)" />
        <rect x="29.5" y="16" width="5" height="17" rx="2.5" fill="var(--scout-danger)" />
        <path d="M 44 12 L 50 12 M 44 20 L 50 20 M 44 28 L 50 28" stroke="var(--scout-danger)" strokeWidth="1.4" strokeLinecap="round" />
      </Symptom>

      <Symptom x={314} label="MOUTH ULCERS" note="new, painful, and unexplained">
        {/* mouth */}
        <path d="M 10 24 Q 32 6 54 24 Q 32 42 10 24 Z" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.6" />
        <circle cx="24" cy="22" r="3.6" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.3" />
        <circle cx="39" cy="27" r="2.8" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.3" />
      </Symptom>

      {/* ---- the instruction ---- */}
      <Part label="The instruction given to every patient, verbatim">
        <rect x="0" y="152" width="468" height="52" rx="7" fill="var(--scout-danger)" />
        <text x="234" y="172" fill="var(--scout-fill)" fontSize="11.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          “STOP the tablets immediately and get an URGENT blood count
        </text>
        <text x="234" y="187" fill="var(--scout-fill)" fontSize="11.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          if you get a sore throat, fever or mouth ulcers.”
        </text>
        <text x="234" y="199" fill="var(--scout-fill)" fontSize="8.5" textAnchor="middle" fontFamily="var(--font-ui)" opacity="0.9">
          Give it verbally AND in writing. Document that you gave it.
        </text>
      </Part>

      <Part label="Why the patient instruction matters more than the monitoring schedule">
        <rect x="0" y="212" width="468" height="34" rx="6" fill="var(--scout-warn-soft)" />
        <text x="12" y="228" fill="var(--scout-warn)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">
          Routine blood counts do NOT reliably catch it.
        </text>
        <text x="12" y="240" fill="var(--scout-stroke)" fontSize="9.3" fontFamily="var(--font-ui)">
          It is idiosyncratic and develops between tests. Most cases are in the first 3 months — but it can happen any time.
        </text>
      </Part>

      {/* ---- flowchart ---- */}
      <Label x={0} y={268} size={11} weight={700}>
        If it is suspected
      </Label>

      <Flow y={278} n="1" tone="warn"
        head="Suspected agranulocytosis on an antithyroid drug"
        body="Sore throat, fever, mouth ulcers or unexplained infection" />
      <FlowArrow y={314} />

      <Flow y={322} n="2" tone="danger"
        head="STOP the drug immediately"
        body="Do not wait for the blood result before stopping" />
      <FlowArrow y={358} />

      <Flow y={366} n="3" tone="accent"
        head="Urgent FULL BLOOD COUNT with differential"
        body="If neutropenic AND febrile → treat as NEUTROPENIC SEPSIS, antibiotics within 1 hour" />
      <FlowArrow y={402} />

      <Flow y={410} n="4" tone="good"
        head="REFER to endocrinology — and do NOT switch to the other thionamide"
        body="Cross-reactivity is well described. Radioiodine or surgery instead. Record a drug allergy." />

      <Label x={0} y={464} size={9} tone="stroke-soft">
        Neutropenic patients cannot form pus, so the throat can look unremarkable while the patient is dangerously unwell.
      </Label>
    </Diagram>
  );
}

function Symptom({ x, label, note, children }) {
  return (
    <Part label={`${label} — ${note}`}>
      <rect x={x} y={72} width={154} height={72} rx={6} fill="var(--scout-fill-soft)" stroke="var(--scout-danger)" strokeWidth="1.1" />
      <g transform={`translate(${x + 10}, 82)`}>{children}</g>
      <text x={x + 78} y={98} fill="var(--scout-danger)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">
        {label}
      </text>
      <WrapNote x={x + 78} y={112} text={note} />
    </Part>
  );
}

/** Wraps a short note across at most two lines without foreignObject. */
function WrapNote({ x, y, text }) {
  const words = text.split(' ');
  const lines = [''];
  for (const w of words) {
    const i = lines.length - 1;
    if ((lines[i] + ' ' + w).trim().length > 26) lines.push(w);
    else lines[i] = (lines[i] + ' ' + w).trim();
  }
  return (
    <text x={x} y={y} fill="var(--scout-stroke-soft)" fontSize="8.2" fontFamily="var(--font-ui)">
      {lines.slice(0, 3).map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 9.5}>{l}</tspan>
      ))}
    </text>
  );
}

function Flow({ y, n, tone, head, body }) {
  return (
    <Part label={head}>
      <rect x={0} y={y} width={468} height={30} rx={6} fill={`var(--scout-${tone}-soft)`} stroke={`var(--scout-${tone})`} strokeWidth="1.2" />
      <circle cx={18} cy={y + 15} r={9} fill={`var(--scout-${tone})`} />
      <text x={18} y={y + 18.5} fill="var(--scout-fill)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">{n}</text>
      <text x={34} y={y + 13} fill={`var(--scout-${tone})`} fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">{head}</text>
      <text x={34} y={y + 25} fill="var(--scout-stroke)" fontSize="8.8" fontFamily="var(--font-ui)">{body}</text>
    </Part>
  );
}

function FlowArrow({ y }) {
  return (
    <g>
      <line x1={18} y1={y} x2={18} y2={y + 5} stroke="var(--scout-stroke)" strokeWidth="1.8" />
      <path d={`M 18 ${y + 8} L 14.5 ${y + 2} L 21.5 ${y + 2} Z`} fill="var(--scout-stroke)" />
    </g>
  );
}
