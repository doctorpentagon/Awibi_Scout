import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-NEUR-005 · Tier 1 · Decide
 * MS vs NMOSD vs ADEM.
 *
 * Changes what a clinician does: several MS disease-modifying therapies make
 * NMOSD markedly worse, so this distinction has to be made BEFORE treatment.
 */

const ROWS = [
  {
    k: 'Antibody',
    a: ['none specific'],
    b: ['AQUAPORIN-4 IgG'],
    c: ['none (MOG may be +ve)'],
    tone: [null, 'danger', null],
  },
  {
    k: 'Course',
    a: ['relapsing, then', 'progressive'],
    b: ['relapsing, severe', 'attacks'],
    c: ['MONOPHASIC', 'usually'],
    tone: [null, null, 'accent'],
  },
  {
    k: 'Typical patient',
    a: ['young adult'],
    b: ['adult, wider', 'age range'],
    c: ['CHILD, after', 'infection or vaccine'],
  },
  {
    k: 'Optic neuritis',
    a: ['unilateral, good', 'recovery'],
    b: ['SEVERE, often bilateral,', 'POOR recovery'],
    c: ['often bilateral'],
    tone: [null, 'danger', null],
  },
  {
    k: 'Cord lesion length',
    a: ['SHORT (< 2 segments),', 'eccentric'],
    b: ['LONGITUDINALLY', 'EXTENSIVE (≥ 3)'],
    c: ['variable, often long'],
    tone: [null, 'danger', null],
    emphasis: true,
  },
  {
    k: 'Encephalopathy',
    a: ['NO'],
    b: ['no'],
    c: ['YES — the key clue'],
    tone: [null, null, 'accent'],
    emphasis: true,
  },
  {
    k: 'Lesion ages on MRI',
    a: ['DIFFERENT ages'],
    b: ['variable'],
    c: ['ALL THE SAME age'],
    tone: [null, null, 'accent'],
  },
  {
    k: 'Oligoclonal bands',
    a: ['positive in most'],
    b: ['usually NEGATIVE'],
    c: ['usually negative'],
  },
  {
    k: 'Distinctive feature',
    a: ['Dawson fingers,', 'INO'],
    b: ['AREA POSTREMA —', 'hiccups and vomiting'],
    c: ['large fluffy', 'poorly defined lesions'],
  },
];

const COLS = [
  { x: 132, w: 108, name: 'MS', tone: 'accent' },
  { x: 244, w: 118, name: 'NMOSD', tone: 'danger' },
  { x: 366, w: 102, name: 'ADEM', tone: 'good' },
];

export function MsNmoAdem() {
  let y = 78;
  const rows = ROWS.map((row) => {
    const lines = Math.max(row.a.length, row.b.length, row.c.length);
    const h = lines === 1 ? 24 : 32;
    const placed = { ...row, y, h };
    y += h;
    return placed;
  });
  const bottom = y;

  return (
    <Diagram
      title="Multiple sclerosis vs NMOSD vs ADEM"
      desc="A comparison of three demyelinating conditions. Multiple sclerosis has no specific antibody, a relapsing then progressive course, affects young adults, causes unilateral optic neuritis with good recovery, produces short eccentric cord lesions under two vertebral segments, does not cause encephalopathy, shows lesions of different ages on MRI, has positive oligoclonal bands in most cases, and is distinguished by Dawson fingers and internuclear ophthalmoplegia. NMOSD is defined by the aquaporin-4 IgG antibody, has severe relapsing attacks, causes severe and often bilateral optic neuritis with poor recovery, produces longitudinally extensive cord lesions over three or more segments, does not cause encephalopathy, usually has negative oligoclonal bands, and is distinguished by the area postrema syndrome of intractable hiccups and vomiting. ADEM has no specific antibody though MOG may be positive, is usually monophasic, typically affects children after an infection or vaccination, often causes bilateral optic neuritis, causes encephalopathy which is the key clue, shows lesions all of the same age, usually has negative oligoclonal bands, and produces large fluffy poorly defined lesions. The critical point is that several MS disease-modifying therapies, including interferon beta, natalizumab and fingolimod, can severely worsen NMOSD, so aquaporin-4 antibody must be tested before treatment is started."
      viewBox={`0 0 470 ${bottom + 82}`}
    >
      <Label x={0} y={13} size={12} weight={700}>
        Three demyelinating diseases that are treated differently
      </Label>
      <Label x={0} y={28} size={10} tone="stroke-soft">
        Getting this wrong is not a labelling error — MS drugs make NMOSD worse.
      </Label>

      {/* subtitle row */}
      <text x={132 + 54} y={48} fill="var(--scout-stroke-soft)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">multiple sclerosis</text>
      <text x={244 + 59} y={48} fill="var(--scout-stroke-soft)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">neuromyelitis optica SD</text>
      <text x={366 + 51} y={48} fill="var(--scout-stroke-soft)" fontSize="8" textAnchor="middle" fontFamily="var(--font-ui)">acute disseminated EM</text>

      {COLS.map((c) => (
        <Part key={c.name} label={`${c.name} column`}>
          <rect x={c.x} y={54} width={c.w} height={20} rx={4} fill={`var(--scout-${c.tone}-soft)`} />
          <text x={c.x + c.w / 2} y={68} fill={`var(--scout-${c.tone})`} fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
            {c.name}
          </text>
        </Part>
      ))}

      {rows.map((row, i) => (
        <Part key={row.k} label={row.k}>
          {row.emphasis && <rect x={0} y={row.y} width={468} height={row.h} rx={4} fill="var(--scout-fill-soft)" />}
          <line x1={0} y1={row.y} x2={468} y2={row.y} stroke="var(--scout-stroke-soft)" strokeWidth={i === 0 ? 1.2 : 0.6} />
          <text x={2} y={row.y + 14} fill="var(--scout-stroke)" fontSize="9.2" fontWeight={row.emphasis ? 700 : 600} fontFamily="var(--font-ui)">
            {row.k}
          </text>
          {[row.a, row.b, row.c].map((cell, ci) => (
            <Cell key={ci} col={COLS[ci]} lines={cell} y={row.y} tone={row.tone?.[ci] ?? null} />
          ))}
        </Part>
      ))}
      <line x1={0} y1={bottom} x2={468} y2={bottom} stroke="var(--scout-stroke-soft)" strokeWidth="1.2" />

      <Part label="Why this distinction must be made before treatment">
        <rect x={0} y={bottom + 10} width={468} height={60} rx={7} fill="var(--scout-danger)" />
        <text x={14} y={bottom + 29} fill="var(--scout-fill)" fontSize="11" fontWeight="700" fontFamily="var(--font-ui)">
          Send AQUAPORIN-4 antibody BEFORE any disease-modifying therapy
        </text>
        <text x={14} y={bottom + 44} fill="var(--scout-fill)" fontSize="9.3" fontFamily="var(--font-ui)" opacity="0.94">
          Interferon beta, natalizumab and fingolimod can severely worsen NMOSD. Add MOG antibody where the picture
        </text>
        <text x={14} y={bottom + 56} fill="var(--scout-fill)" fontSize="9.3" fontFamily="var(--font-ui)" opacity="0.94">
          is atypical — bilateral optic neuritis with disc swelling, or an ADEM-like presentation in a child.
        </text>
      </Part>
    </Diagram>
  );
}

function Cell({ col, lines, y, tone }) {
  const cx = col.x + col.w / 2;
  const single = lines.length === 1;
  const start = single ? y + 16 : y + 13;
  return (
    <>
      {lines.map((t, i) => (
        <text
          key={i}
          x={cx}
          y={start + i * 10.5}
          fill={tone ? `var(--scout-${tone})` : 'var(--scout-stroke)'}
          fontSize="8.7"
          fontWeight={tone ? 700 : 400}
          textAnchor="middle"
          fontFamily="var(--font-ui)"
        >
          {t}
        </text>
      ))}
    </>
  );
}
