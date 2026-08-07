import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-SUMM-001 · Tier 1 · Decide
 * One-screen summary: Graves · PTU toxicity · Charcot triad · MS.
 *
 * Changes what a clinician does: each column ends in a red flag that is the
 * thing most likely to be missed, and each red flag is actionable on its own.
 */

const TOPICS = [
  {
    name: 'GRAVES DISEASE',
    tone: 'danger',
    key: ['TSH receptor antibody', 'mimics TSH, no feedback', 'DIFFUSE goitre ± bruit', 'exophthalmos, dermopathy'],
    dx: ['TSH ↓↓, free T4/T3 ↑', 'TRAb POSITIVE', 'uptake HIGH and diffuse'],
    rx: ['carbimazole first line', 'beta-blocker for symptoms', 'radioiodine or surgery', 'stop smoking'],
    flag: 'THYROID STORM — fever, tachyarrhythmia, delirium. Antithyroid drug BEFORE iodine.',
  },
  {
    name: 'PTU TOXICITY',
    tone: 'warn',
    key: ['blocks thyroid peroxidase', 'PTU also blocks T4→T3', 'stored hormone untouched', '→ 2–6 weeks to work'],
    dx: ['clinical — do not wait', 'urgent FBC with differential', 'LFTs if jaundiced'],
    rx: ['STOP the drug at once', 'neutropenic sepsis pathway', 'do NOT switch thionamide', 'radioiodine or surgery'],
    flag: 'SORE THROAT, FEVER, MOUTH ULCERS = agranulocytosis until proven otherwise.',
  },
  {
    name: 'CHARCOT TRIAD',
    tone: 'accent',
    key: ['fever with rigors', 'jaundice', 'RUQ pain', '= obstructed, infected bile'],
    dx: ['bloods, cultures, LFTs', 'ultrasound for duct dilatation', 'MRCP or ERCP'],
    rx: ['resuscitate', 'antibiotics', 'DRAIN the obstruction', 'usually ERCP'],
    flag: 'REYNOLDS PENTAD — add shock + confusion. Suppurative. Drain today.',
  },
  {
    name: 'MULTIPLE SCLEROSIS',
    tone: 'good',
    key: ['dissemination in SPACE', 'and in TIME', 'no better explanation', 'Dawson fingers, INO'],
    dx: ['MRI brain + whole spine', 'CSF bands vs PAIRED serum', 'aquaporin-4 antibody', 'B12, HIV, syphilis'],
    rx: ['relapse: steroids', 'disease-modifying therapy', 'only after NMOSD excluded'],
    flag: 'Cord lesion ≥ 3 segments → NMOSD. MS drugs make it WORSE. Test AQP4 first.',
  },
];

const COL_W = 113;
const GAP = 5;

export function FourTopicSummary() {
  return (
    <Diagram
      title="Summary — Graves, PTU toxicity, Charcot triad and multiple sclerosis"
      desc="A four-column summary. Graves disease: caused by a TSH receptor antibody that mimics TSH without feedback, giving a diffuse goitre with possible bruit plus exophthalmos and dermopathy; diagnosed by suppressed TSH with raised free T4 and T3, a positive TRAb and high diffuse uptake; treated with carbimazole first line, a beta-blocker for symptoms, then radioiodine or surgery, with smoking cessation; the red flag is thyroid storm, where the antithyroid drug must be given before iodine. PTU toxicity: thionamides block thyroid peroxidase and PTU also blocks peripheral T4 to T3 conversion, but stored hormone is untouched so improvement takes two to six weeks; agranulocytosis is a clinical diagnosis needing an urgent full blood count with differential; management is to stop the drug at once, follow the neutropenic sepsis pathway, and never switch to the other thionamide because of cross-reactivity; the red flag is sore throat, fever or mouth ulcers. Charcot triad: fever with rigors, jaundice and right upper quadrant pain indicating obstructed infected bile; investigated with bloods, cultures, ultrasound for duct dilatation and MRCP or ERCP; managed by resuscitation, antibiotics and drainage of the obstruction; the red flag is Reynolds pentad, adding shock and confusion, which means suppurative cholangitis needing drainage the same day. Multiple sclerosis: requires dissemination in space and time with no better explanation, with Dawson fingers and internuclear ophthalmoplegia as clues; investigated with MRI of brain and whole spine, CSF oligoclonal bands against a paired serum sample, aquaporin-4 antibody, and exclusion of B12 deficiency, HIV and syphilis; relapses are treated with steroids and disease-modifying therapy started only after NMOSD is excluded; the red flag is a cord lesion of three or more segments, which suggests NMOSD, where MS drugs cause harm."
      viewBox="0 0 470 460"
    >
      <Label x={0} y={13} size={12} weight={700}>
        Four topics, one screen
      </Label>
      <Label x={0} y={28} size={10} tone="stroke-soft">
        Each column ends with the thing most likely to be missed.
      </Label>

      {TOPICS.map((t, i) => {
        const x = i * (COL_W + GAP);
        return (
          <Part key={t.name} label={t.name}>
            {/* header */}
            <rect x={x} y={38} width={COL_W} height={26} rx={5} fill={`var(--scout-${t.tone})`} />
            <TitleText x={x + COL_W / 2} y={54} text={t.name} />

            <Block x={x} y={70} label="KEY FEATURES" items={t.key} tone={t.tone} />
            <Block x={x} y={70 + 12 + t.key.length * 11 + 10} label="DIAGNOSIS" items={t.dx} tone={t.tone} />
            <Block
              x={x}
              y={70 + 12 + t.key.length * 11 + 10 + 12 + t.dx.length * 11 + 10}
              label="TREATMENT"
              items={t.rx}
              tone={t.tone}
            />
          </Part>
        );
      })}

      {/* red flag row */}
      <Label x={0} y={318} size={11} weight={700} tone="danger">
        RED FLAGS
      </Label>

      {TOPICS.map((t, i) => {
        const x = i * (COL_W + GAP);
        return (
          <Part key={`${t.name}-flag`} label={`${t.name} red flag`}>
            <rect x={x} y={326} width={COL_W} height={76} rx={6} fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.2" />
            <g transform={`translate(${x + 6}, 332)`}>
              <path d="M 7 0 L 14 12 L 0 12 Z" fill="none" stroke="var(--scout-danger)" strokeWidth="1.6" strokeLinejoin="round" />
              <line x1="7" y1="4" x2="7" y2="8" stroke="var(--scout-danger)" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="7" cy="10" r="0.9" fill="var(--scout-danger)" />
            </g>
            <Wrapped x={x + 6} y={358} text={t.flag} max={22} size={8.2} tone="danger" weight={600} />
          </Part>
        );
      })}

      <Part label="What ties these four together">
        <rect x={0} y={414} width={468} height={42} rx={6} fill="var(--scout-fill-soft)" />
        <text x={12} y={431} fill="var(--scout-stroke)" fontSize="9.8" fontWeight="700" fontFamily="var(--font-ui)">
          The common thread
        </text>
        <text x={12} y={447} fill="var(--scout-stroke)" fontSize="9.3" fontFamily="var(--font-ui)">
          In all four, the dangerous version looks like the ordinary version until you ask the one extra question.
        </text>
      </Part>
    </Diagram>
  );
}

function TitleText({ x, y, text }) {
  const words = text.split(' ');
  if (words.length === 1 || text.length <= 14) {
    return (
      <text x={x} y={y} fill="var(--scout-fill)" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
        {text}
      </text>
    );
  }
  return (
    <text x={x} y={y - 5} fill="var(--scout-fill)" fontSize="9.3" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
      {words.map((w, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 10}>{w}</tspan>
      ))}
    </text>
  );
}

function Block({ x, y, label, items, tone }) {
  return (
    <g>
      <text x={x + 3} y={y + 8} fill={`var(--scout-${tone})`} fontSize="7.8" fontWeight="700" fontFamily="var(--font-ui)">
        {label}
      </text>
      {items.map((it, i) => (
        <BulletLine key={i} x={x + 3} y={y + 19 + i * 11} text={it} />
      ))}
    </g>
  );
}

function BulletLine({ x, y, text }) {
  return (
    <g>
      <circle cx={x + 2} cy={y - 3} r={1.4} fill="var(--scout-stroke-soft)" />
      <text x={x + 8} y={y} fill="var(--scout-stroke)" fontSize="8" fontFamily="var(--font-ui)">
        {text.length > 25 ? text.slice(0, 24) + '…' : text}
      </text>
    </g>
  );
}

function Wrapped({ x, y, text, max, size = 8.2, tone = 'stroke', weight = 400 }) {
  const lines = [''];
  for (const w of text.split(' ')) {
    const i = lines.length - 1;
    if ((lines[i] + ' ' + w).trim().length > max) lines.push(w);
    else lines[i] = (lines[i] + ' ' + w).trim();
  }
  return (
    <text x={x} y={y} fill={`var(--scout-${tone})`} fontSize={size} fontWeight={weight} fontFamily="var(--font-ui)">
      {lines.slice(0, 5).map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 9.5}>{l}</tspan>
      ))}
    </text>
  );
}
