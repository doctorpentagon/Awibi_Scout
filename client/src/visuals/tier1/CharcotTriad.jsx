import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-GAST-002 · Tier 1 · Act
 * Charcot triad and Reynolds pentad in acute cholangitis.
 *
 * Changes what a clinician does: cholangitis is an obstructed, infected biliary
 * tree. Antibiotics alone do not treat it — the obstruction must be drained, and
 * the pentad means that has to happen today.
 */
export function CharcotTriad() {
  return (
    <Diagram
      title="Charcot triad and Reynolds pentad — acute cholangitis"
      desc="Charcot triad for acute cholangitis has three components: fever with rigors, jaundice, and right upper quadrant pain. Together they indicate an obstructed and infected biliary tree. Reynolds pentad adds two further features — shock, meaning hypotension, and altered mental status, meaning confusion. The pentad indicates suppurative cholangitis with pus under pressure in the biliary tree and carries a high mortality. The critical action point is that antibiotics alone do not treat cholangitis: the obstruction must be drained, usually by ERCP, and the presence of the pentad means drainage is needed urgently rather than electively. The commonest cause is a stone in the common bile duct."
      viewBox="0 0 470 384"
    >
      <Label x={0} y={13} size={12} weight={700}>
        Charcot triad — an obstructed biliary tree that has become infected
      </Label>
      <Label x={0} y={28} size={10} tone="stroke-soft">
        Not all three are present in every case. Do not wait for the full triad before acting.
      </Label>

      {/* ---- the three icons ---- */}
      <Icon x={0} n="1" label="FEVER" sub="often with RIGORS — shaking chills">
        {/* thermometer */}
        <rect x="26" y="4" width="11" height="28" rx="5.5" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.8" />
        <circle cx="31.5" cy="39" r="7.5" fill="var(--scout-danger)" />
        <rect x="28.8" y="15" width="5.4" height="19" rx="2.7" fill="var(--scout-danger)" />
        <path d="M 44 13 L 51 13 M 44 21 L 51 21 M 44 29 L 51 29" stroke="var(--scout-danger)" strokeWidth="1.5" strokeLinecap="round" />
      </Icon>

      <Icon x={157} n="2" label="JAUNDICE" sub="sclerae and skin — obstructive picture">
        {/* eye */}
        <path d="M 6 24 Q 31 4 56 24 Q 31 44 6 24 Z" fill="var(--scout-warn-soft)" stroke="var(--scout-warn)" strokeWidth="1.8" />
        <circle cx="31" cy="24" r="9" fill="var(--scout-fill)" stroke="var(--scout-warn)" strokeWidth="1.4" />
        <circle cx="31" cy="24" r="4.2" fill="var(--scout-stroke)" />
      </Icon>

      <Icon x={314} n="3" label="RUQ PAIN" sub="right upper quadrant, may radiate to the tip of the scapula">
        {/* abdomen quadrants */}
        <rect x="10" y="6" width="42" height="38" rx="8" fill="var(--scout-fill)" stroke="var(--scout-stroke)" strokeWidth="1.5" />
        <line x1="31" y1="6" x2="31" y2="44" stroke="var(--scout-stroke-soft)" strokeWidth="1" />
        <line x1="10" y1="25" x2="52" y2="25" stroke="var(--scout-stroke-soft)" strokeWidth="1" />
        <path d="M 10 14 Q 10 6 18 6 L 31 6 L 31 25 L 10 25 Z" fill="var(--scout-danger)" opacity="0.75" />
        <circle cx="20" cy="15" r="2" fill="var(--scout-fill)" />
      </Icon>

      {/* ---- what it means ---- */}
      <Part label="What the triad means">
        <rect x="0" y={166} width={468} height={40} rx={6} fill="var(--scout-accent-soft)" />
        <text x={12} y={182} fill="var(--scout-accent)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          Put together: BILE THAT CANNOT DRAIN, AND HAS BECOME INFECTED
        </text>
        <text x={12} y={197} fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
          Commonest cause is a stone in the common bile duct. Also stricture, tumour, and post-ERCP.
        </text>
      </Part>

      {/* ---- pentad ---- */}
      <Part label="Reynolds pentad adds shock and altered mental status">
        <rect x="0" y={218} width={468} height={92} rx={7} fill="var(--scout-danger-soft)" />
        <rect x="0" y={218} width={5} height={92} rx={2.5} fill="var(--scout-danger)" />
        <text x={14} y={237} fill="var(--scout-danger)" fontSize="11.5" fontWeight="700" fontFamily="var(--font-ui)">
          REYNOLDS PENTAD = the triad + 2 more
        </text>

        <g transform="translate(14, 246)">
          {/* shock icon */}
          <circle cx="13" cy="20" r="12" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.6" />
          <path d="M 14 12 L 8 21 L 13 21 L 11 28 L 18 18 L 13 18 Z" fill="var(--scout-danger)" />
          <text x="32" y="16" fill="var(--scout-danger)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">④ SHOCK</text>
          <text x="32" y="28" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">hypotension</text>
        </g>

        <g transform="translate(190, 246)">
          {/* confusion icon */}
          <circle cx="13" cy="20" r="12" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.6" />
          <path d="M 9 16 Q 9 11 13.5 11 Q 18 11 18 15 Q 18 19 13.5 20 L 13.5 23" fill="none" stroke="var(--scout-danger)" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="13.5" cy="27" r="1.5" fill="var(--scout-danger)" />
          <text x="32" y="16" fill="var(--scout-danger)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">⑤ ALTERED MENTAL STATUS</text>
          <text x="32" y="28" fill="var(--scout-stroke)" fontSize="9" fontFamily="var(--font-ui)">confusion, drowsiness</text>
        </g>

        <text x={14} y={296} fill="var(--scout-danger)" fontSize="9.5" fontWeight="700" fontFamily="var(--font-ui)">
          The pentad means SUPPURATIVE cholangitis — pus under pressure. High mortality. This is a today problem.
        </text>
      </Part>

      {/* ---- the action ---- */}
      <Part label="The action point — antibiotics alone do not treat cholangitis">
        <rect x="0" y={322} width={468} height={52} rx={7} fill="var(--scout-warn-soft)" />
        <rect x="0" y={322} width={5} height={52} rx={2.5} fill="var(--scout-warn)" />
        <text x={14} y={340} fill="var(--scout-warn)" fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
          ANTIBIOTICS ALONE DO NOT TREAT CHOLANGITIS
        </text>
        <text x={14} y={355} fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
          Source control is the treatment — the obstruction must be DRAINED, usually by ERCP. Resuscitate, take
        </text>
        <text x={14} y={367} fill="var(--scout-stroke)" fontSize="9.5" fontFamily="var(--font-ui)">
          cultures, start antibiotics, and get the drainage arranged. The pentad makes it urgent, not elective.
        </text>
      </Part>
    </Diagram>
  );
}

function Icon({ x, n, label, sub, children }) {
  return (
    <Part label={`${label} — ${sub}`}>
      <rect x={x} y={38} width={154} height={112} rx={7} fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="1.2" />
      <circle cx={x + 15} cy={53} r={9} fill="var(--scout-accent)" />
      <text x={x + 15} y={56.5} fill="var(--scout-fill)" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">{n}</text>
      <g transform={`translate(${x + 46}, 52)`}>{children}</g>
      <text x={x + 77} y={122} fill="var(--scout-stroke)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
        {label}
      </text>
      <Wrapped x={x + 77} y={134} text={sub} max={30} />
    </Part>
  );
}

/** Two-line centred caption without foreignObject. */
function Wrapped({ x, y, text, max }) {
  const lines = [''];
  for (const w of text.split(' ')) {
    const i = lines.length - 1;
    if ((lines[i] + ' ' + w).trim().length > max) lines.push(w);
    else lines[i] = (lines[i] + ' ' + w).trim();
  }
  return (
    <text x={x} y={y} fill="var(--scout-stroke-soft)" fontSize="8.3" textAnchor="middle" fontFamily="var(--font-ui)">
      {lines.slice(0, 2).map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 9.5}>{l}</tspan>
      ))}
    </text>
  );
}
