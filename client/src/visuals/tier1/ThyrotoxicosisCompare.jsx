import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-THY-002 · Tier 1 · Decide
 * Graves vs toxic nodular goitre vs thyroiditis.
 *
 * Changes what a clinician does: thyroiditis does not respond to antithyroid
 * drugs. The uptake scan is the discriminator, and it points the opposite way.
 */

const ROWS = [
  {
    k: 'Gland on palpation',
    a: ['DIFFUSE, smooth', 'bruit may be present'],
    b: ['NODULAR or a single', 'palpable nodule'],
    c: ['TENDER if subacute', 'painless if silent'],
  },
  {
    k: 'TSH receptor antibody',
    a: ['POSITIVE'], b: ['negative'], c: ['negative'],
    tone: ['danger', null, null],
  },
  {
    k: 'Radioiodine uptake',
    a: ['HIGH, diffuse'],
    b: ['FOCAL hot nodule,', 'rest suppressed'],
    c: ['LOW or ABSENT'],
    tone: ['danger', 'warn', 'accent'],
    emphasis: true,
  },
  {
    k: 'Eye / skin signs',
    a: ['exophthalmos,', 'dermopathy possible'],
    b: ['none'], c: ['none'],
  },
  {
    k: 'Typical patient',
    a: ['younger, female,', 'other autoimmunity'],
    b: ['older, long-standing', 'goitre, iodine-deficient area'],
    c: ['post-viral, postpartum,', 'or drug-induced'],
  },
  {
    k: 'Natural course',
    a: ['persistent until treated'],
    b: ['persistent, will not remit'],
    c: ['SELF-LIMITING, then a', 'hypothyroid phase'],
    tone: [null, null, 'good'],
  },
  {
    k: 'Antithyroid drug',
    a: ['YES — first line'],
    b: ['yes, but rarely remits;', 'definitive therapy needed'],
    c: ['NO — nothing to block'],
    tone: ['good', 'warn', 'danger'],
    emphasis: true,
  },
];

const COLS = [
  { x: 148, w: 106, name: 'GRAVES', tone: 'danger' },
  { x: 258, w: 106, name: 'TOXIC NODULE', tone: 'warn' },
  { x: 368, w: 100, name: 'THYROIDITIS', tone: 'accent' },
];

export function ThyrotoxicosisCompare() {
  let y = 62;
  const rows = ROWS.map((row) => {
    const lines = Math.max(row.a.length, row.b.length, row.c.length);
    const h = lines === 1 ? 26 : 34;
    const placed = { ...row, y, h };
    y += h;
    return placed;
  });
  const tableBottom = y;

  return (
    <Diagram
      title="Thyrotoxicosis — telling Graves, a toxic nodule and thyroiditis apart"
      desc="A comparison table with three columns. Graves disease: diffuse smooth goitre possibly with a bruit, TSH receptor antibody positive, high diffuse radioiodine uptake, eye and skin signs possible, younger female patients, persistent until treated, antithyroid drugs first line. Toxic nodular goitre or adenoma: nodular gland, antibody negative, focal hot nodule with the rest suppressed, no eye or skin signs, older patients with long-standing goitre, will not remit, needs definitive therapy. Thyroiditis: tender gland if subacute, antibody negative, low or absent uptake, no eye or skin signs, post-viral or postpartum or drug-induced, self-limiting with a subsequent hypothyroid phase, and antithyroid drugs do not work because there is nothing to block. The radioiodine uptake is the discriminating test and it points the opposite way in thyroiditis."
      viewBox={`0 0 470 ${tableBottom + 76}`}
    >
      <Label x={0} y={13} size={12} weight={700}>
        All three are thyrotoxic. Only two are over-producing.
      </Label>
      <Label x={0} y={28} size={10} tone="stroke-soft">
        Thyroiditis LEAKS stored hormone. That single difference changes the treatment.
      </Label>

      {/* column headers */}
      {COLS.map((c) => (
        <Part key={c.name} label={`${c.name} column`}>
          <rect x={c.x} y={38} width={c.w} height={20} rx={4} fill={`var(--scout-${c.tone}-soft)`} />
          <text x={c.x + c.w / 2} y={52} fill={`var(--scout-${c.tone})`} fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
            {c.name}
          </text>
        </Part>
      ))}

      {/* rows */}
      {rows.map((row, i) => (
        <Part key={row.k} label={row.k}>
          {row.emphasis && <rect x={0} y={row.y} width={468} height={row.h} rx={4} fill="var(--scout-fill-soft)" />}
          <line x1={0} y1={row.y} x2={468} y2={row.y} stroke="var(--scout-stroke-soft)" strokeWidth={i === 0 ? 1.2 : 0.6} />
          <text x={2} y={row.y + 15} fill="var(--scout-stroke)" fontSize="9.5" fontWeight={row.emphasis ? 700 : 600} fontFamily="var(--font-ui)">
            {row.k}
          </text>
          {[row.a, row.b, row.c].map((cell, ci) => (
            <Cell key={ci} col={COLS[ci]} lines={cell} y={row.y} tone={row.tone?.[ci] ?? null} />
          ))}
        </Part>
      ))}
      <line x1={0} y1={tableBottom} x2={468} y2={tableBottom} stroke="var(--scout-stroke-soft)" strokeWidth="1.2" />

      {/* the point */}
      <Part label="The clinical consequence of getting this wrong">
        <rect x={0} y={tableBottom + 10} width={468} height={54} rx={6} fill="var(--scout-danger-soft)" />
        <rect x={0} y={tableBottom + 10} width={4} height={54} rx={2} fill="var(--scout-danger)" />
        <text x={12} y={tableBottom + 27} fill="var(--scout-danger)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          Why this matters more than it looks
        </text>
        <text x={12} y={tableBottom + 41} fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
          Carbimazole given for thyroiditis achieves nothing — the gland is not synthesising, it is leaking preformed
        </text>
        <text x={12} y={tableBottom + 54} fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
          hormone. Treat symptoms with a beta-blocker, wait for the hypothyroid phase, and do not miss it.
        </text>
      </Part>
    </Diagram>
  );
}

function Cell({ col, lines, y, tone }) {
  const cx = col.x + col.w / 2;
  const single = lines.length === 1;
  const start = single ? y + 17 : y + 14;
  return (
    <>
      {lines.map((t, i) => (
        <text
          key={i}
          x={cx}
          y={start + i * 11}
          fill={tone ? `var(--scout-${tone})` : 'var(--scout-stroke)'}
          fontSize="9"
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
