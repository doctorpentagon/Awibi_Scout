import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-NEUR-004 · Tier 1 · Decide
 * The McDonald criteria: dissemination in space and in time.
 *
 * Changes what a clinician does: shows how one MRI can prove dissemination in
 * time, and puts the "no better explanation" gate where it belongs — first.
 * Deliberately describes the PRINCIPLE, not version-specific lesion counts.
 */

const SPACE = [
  { name: 'PERIVENTRICULAR', note: 'Dawson fingers — perpendicular to the ventricles' },
  { name: 'JUXTACORTICAL / CORTICAL', note: 'touching or within the cortex' },
  { name: 'INFRATENTORIAL', note: 'brainstem, cerebellum, peduncles' },
  { name: 'SPINAL CORD', note: 'SHORT segment, eccentric in the cord' },
];

const TIME = [
  { name: 'A second clinical attack', note: 'the historical route — slow' },
  { name: 'A NEW lesion on a later MRI', note: 'compared against a baseline' },
  { name: 'Enhancing AND non-enhancing lesions on ONE scan', note: 'enhancement lasts only weeks, so they arose at different times', star: true },
  { name: 'CSF-specific OLIGOCLONAL BANDS', note: 'may substitute for time in a clinically isolated syndrome (2017)' },
];

export function McDonaldCriteria() {
  return (
    <Diagram
      title="McDonald criteria — dissemination in space and in time"
      desc="Diagnosis of multiple sclerosis begins with a clinical syndrome typical of demyelination and requires that there is no better explanation. Dissemination in space means lesions in at least two of four characteristic locations: periventricular, where Dawson fingers run perpendicular to the ventricles; juxtacortical or cortical; infratentorial, meaning brainstem, cerebellum or peduncles; and spinal cord, where MS lesions are short segment and eccentric within the cord. Dissemination in time can be shown by a second clinical attack, by a new lesion on a later MRI compared against a baseline, by the simultaneous presence of an enhancing and a non-enhancing lesion on a single scan since enhancement lasts only a few weeks, or by CSF-specific oligoclonal bands which since the 2017 revision may substitute for dissemination in time in a clinically isolated syndrome. Both space and time must be satisfied, and mimics must be excluded, before multiple sclerosis is diagnosed."
      viewBox="0 0 470 428"
    >
      <Label x={0} y={13} size={12} weight={700}>
        Lesions separated in SPACE and in TIME — with no better explanation
      </Label>

      {/* gate 0 */}
      <Part label="Entry gate — a clinical syndrome typical of demyelination">
        <rect x="0" y="24" width="468" height="42" rx="7" fill="var(--scout-warn-soft)" stroke="var(--scout-warn)" strokeWidth="1.4" />
        <rect x="0" y="24" width="5" height="42" rx="2.5" fill="var(--scout-warn)" />
        <text x="14" y="41" fill="var(--scout-warn)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          START HERE — a clinical syndrome TYPICAL of demyelination
        </text>
        <text x="14" y="58" fill="var(--scout-stroke)" fontSize="9.3" fontFamily="var(--font-ui)">
          These criteria are not a screening tool for incidental white matter change. Misapplying them is a documented cause of misdiagnosis.
        </text>
      </Part>

      <Split y1={66} y2={84} />

      {/* ---- SPACE ---- */}
      <Part label="Dissemination in space">
        <rect x="0" y="84" width="230" height="152" rx="7" fill="var(--scout-fill-soft)" stroke="var(--scout-accent)" strokeWidth="1.3" />
        <rect x="0" y="84" width="230" height="24" rx="7" fill="var(--scout-accent-soft)" />
        <text x="10" y="100" fill="var(--scout-accent)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          DISSEMINATION IN SPACE
        </text>
        <text x="10" y="120" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">
          Lesions in ≥ 2 of these four locations:
        </text>
        {SPACE.map((s, i) => (
          <g key={s.name} transform={`translate(10, ${130 + i * 26})`}>
            <circle cx="5" cy="6" r="4" fill="var(--scout-accent)" />
            <text x="16" y="9" fill="var(--scout-stroke)" fontSize="9.2" fontWeight="700" fontFamily="var(--font-ui)">{s.name}</text>
            <text x="16" y="19" fill="var(--scout-stroke-soft)" fontSize="8" fontFamily="var(--font-ui)">{s.note}</text>
          </g>
        ))}
      </Part>

      {/* ---- TIME ---- */}
      <Part label="Dissemination in time">
        <rect x="238" y="84" width="230" height="152" rx="7" fill="var(--scout-fill-soft)" stroke="var(--scout-good)" strokeWidth="1.3" />
        <rect x="238" y="84" width="230" height="24" rx="7" fill="var(--scout-good-soft)" />
        <text x="248" y="100" fill="var(--scout-good)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          DISSEMINATION IN TIME
        </text>
        <text x="248" y="120" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">
          Any ONE of these will do:
        </text>
        {TIME.map((t, i) => (
          <g key={t.name} transform={`translate(248, ${130 + i * 26})`}>
            <circle cx="5" cy="6" r="4" fill={t.star ? 'var(--scout-danger)' : 'var(--scout-good)'} />
            <TwoLine x={16} y={9} text={t.name} max={44} bold />
            <text x="16" y={t.name.length > 44 ? 29 : 19} fill="var(--scout-stroke-soft)" fontSize="7.6" fontFamily="var(--font-ui)">
              {t.note.length > 52 ? t.note.slice(0, 52) + '…' : t.note}
            </text>
          </g>
        ))}
      </Part>

      {/* the elegant bit */}
      <Part label="How one scan proves two different times">
        <rect x="0" y="246" width="468" height="66" rx="7" fill="var(--scout-danger-soft)" />
        <text x="12" y="264" fill="var(--scout-danger)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          The elegant part — how a SINGLE scan proves two different times
        </text>
        {/* enhancing lesion */}
        <g transform="translate(14, 272)">
          <circle cx="14" cy="16" r="11" fill="var(--scout-danger)" opacity="0.28" />
          <circle cx="14" cy="16" r="11" fill="none" stroke="var(--scout-danger)" strokeWidth="2.4" />
          <text x="32" y="13" fill="var(--scout-danger)" fontSize="9.2" fontWeight="700" fontFamily="var(--font-ui)">ENHANCING</text>
          <text x="32" y="24" fill="var(--scout-stroke)" fontSize="8.6" fontFamily="var(--font-ui)">blood–brain barrier open → RECENT</text>
        </g>
        <text x="246" y="292" fill="var(--scout-stroke)" fontSize="12" fontWeight="700" fontFamily="var(--font-ui)">+</text>
        <g transform="translate(262, 272)">
          <circle cx="14" cy="16" r="11" fill="none" stroke="var(--scout-stroke-soft)" strokeWidth="1.8" strokeDasharray="3 2" />
          <text x="32" y="13" fill="var(--scout-stroke)" fontSize="9.2" fontWeight="700" fontFamily="var(--font-ui)">NON-ENHANCING</text>
          <text x="32" y="24" fill="var(--scout-stroke)" fontSize="8.6" fontFamily="var(--font-ui)">barrier closed → OLDER</text>
        </g>
      </Part>

      <Split y1={312} y2={326} single />

      {/* verdict */}
      <Part label="Both space and time satisfied, and mimics excluded">
        <rect x="0" y="326" width="468" height="40" rx="7" fill="var(--scout-good-soft)" stroke="var(--scout-good)" strokeWidth="1.4" />
        <text x="14" y="344" fill="var(--scout-good)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          SPACE ✓ + TIME ✓ + no better explanation  →  Multiple sclerosis
        </text>
        <text x="14" y="359" fill="var(--scout-stroke)" fontSize="9.2" fontFamily="var(--font-ui)">
          Exclude B12 deficiency, HIV and syphilis in every case — all are treatable and all mimic MS.
        </text>
      </Part>

      {/* the pre-treatment stop */}
      <Part label="Test aquaporin-4 before starting disease-modifying therapy">
        <rect x="0" y="376" width="468" height="46" rx="7" fill="var(--scout-danger)" />
        <text x="14" y="394" fill="var(--scout-fill)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          BEFORE starting disease-modifying therapy: send AQUAPORIN-4 antibody
        </text>
        <text x="14" y="408" fill="var(--scout-fill)" fontSize="9.2" fontFamily="var(--font-ui)" opacity="0.94">
          Interferon beta, natalizumab and fingolimod can SEVERELY WORSEN NMOSD. A cord lesion over ≥ 3 vertebral
        </text>
        <text x="14" y="418" fill="var(--scout-fill)" fontSize="9.2" fontFamily="var(--font-ui)" opacity="0.94">
          segments points away from MS and toward NMOSD.
        </text>
      </Part>
    </Diagram>
  );
}

function TwoLine({ x, y, text, max, bold }) {
  const lines = [''];
  for (const w of text.split(' ')) {
    const i = lines.length - 1;
    if ((lines[i] + ' ' + w).trim().length > max) lines.push(w);
    else lines[i] = (lines[i] + ' ' + w).trim();
  }
  return (
    <text x={x} y={y} fill="var(--scout-stroke)" fontSize="9.2" fontWeight={bold ? 700 : 400} fontFamily="var(--font-ui)">
      {lines.slice(0, 2).map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 10}>{l}</tspan>
      ))}
    </text>
  );
}

function Split({ y1, y2, single = false }) {
  if (single) {
    return (
      <g>
        <line x1="234" y1={y1} x2="234" y2={y2 - 4} stroke="var(--scout-stroke)" strokeWidth="1.6" />
        <path d={`M 234 ${y2} L 230.5 ${y2 - 5} L 237.5 ${y2 - 5} Z`} fill="var(--scout-stroke)" />
      </g>
    );
  }
  return (
    <g>
      <line x1="234" y1={y1} x2="234" y2={y1 + 8} stroke="var(--scout-stroke)" strokeWidth="1.6" />
      <line x1="115" y1={y1 + 8} x2="353" y2={y1 + 8} stroke="var(--scout-stroke)" strokeWidth="1.6" />
      <line x1="115" y1={y1 + 8} x2="115" y2={y2 - 4} stroke="var(--scout-stroke)" strokeWidth="1.6" />
      <line x1="353" y1={y1 + 8} x2="353" y2={y2 - 4} stroke="var(--scout-stroke)" strokeWidth="1.6" />
      <path d={`M 115 ${y2} L 111.5 ${y2 - 5} L 118.5 ${y2 - 5} Z`} fill="var(--scout-stroke)" />
      <path d={`M 353 ${y2} L 349.5 ${y2 - 5} L 356.5 ${y2 - 5} Z`} fill="var(--scout-stroke)" />
    </g>
  );
}
