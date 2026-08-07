import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-CVS-001 · Tier 1 · Locate
 * Four auscultation areas on surface anatomy.
 *
 * Changes what a clinician does: puts the stethoscope in the right place, which
 * is the difference between hearing and missing a murmur.
 */

const AREAS = [
  {
    at: [176, 118],
    name: 'Aortic',
    where: '2nd space, RIGHT sternal edge',
    murmur: 'Aortic stenosis → radiates to the carotids',
    tone: 'danger',
  },
  {
    at: [228, 118],
    name: 'Pulmonary',
    where: '2nd space, LEFT sternal edge',
    murmur: 'Pulmonary stenosis, ASD flow murmur',
    tone: 'accent',
  },
  {
    at: [222, 176],
    name: 'Tricuspid',
    where: '4th–5th space, LEFT sternal edge',
    murmur: 'Tricuspid regurgitation → louder on inspiration',
    tone: 'good',
  },
  {
    at: [268, 198],
    name: 'Mitral (apex)',
    where: '5th space, mid-clavicular line',
    murmur: 'Mitral regurgitation → radiates to the axilla',
    tone: 'warn',
  },
];

export function AuscultationAreas() {
  return (
    <Diagram
      title="The four auscultation areas on the anterior chest"
      desc="The anterior chest with ribs numbered from the sternal angle. The aortic area is the second intercostal space at the right sternal edge, where aortic stenosis radiates to the carotids. The pulmonary area is the second space at the left sternal edge. The tricuspid area is the fourth to fifth space at the left sternal edge, where tricuspid regurgitation gets louder on inspiration. The mitral area is the apex, in the fifth space at the mid-clavicular line, where mitral regurgitation radiates to the axilla."
      viewBox="0 0 470 300"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Find the sternal angle first — every other landmark counts down from it
      </Label>

      {/* --- Chest --- */}
      <Part label="Anterior chest wall">
        <path
          d="M 128 56 Q 200 40 288 56 L 306 108 Q 314 180 300 240 Q 288 274 240 278 L 176 278 Q 128 274 116 240 Q 102 180 110 108 Z"
          fill="var(--scout-fill-soft)"
          stroke="var(--scout-stroke)"
          strokeWidth="1.6"
        />
        {/* Clavicles */}
        <path d="M 132 66 Q 168 76 198 74" fill="none" stroke="var(--scout-stroke)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 284 66 Q 248 76 218 74" fill="none" stroke="var(--scout-stroke)" strokeWidth="2" strokeLinecap="round" />
        {/* Sternum */}
        <rect x="200" y="76" width="16" height="122" rx="5" fill="var(--scout-fill)" stroke="var(--scout-stroke)" strokeWidth="1.3" />
      </Part>

      {/* --- Sternal angle: the reference landmark --- */}
      <Part label="Sternal angle, the angle of Louis, opposite the second costal cartilage">
        <line x1="196" y1="100" x2="220" y2="100" stroke="var(--scout-accent)" strokeWidth="2.4" />
        <line x1="196" y1="100" x2="90" y2="86" stroke="var(--scout-accent)" strokeWidth="0.9" strokeDasharray="3 3" />
        <text x="86" y="76" fill="var(--scout-accent)" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="var(--font-ui)">
          sternal angle
        </text>
        <text x="86" y="88" fill="var(--scout-accent)" fontSize="9" textAnchor="end" fontFamily="var(--font-ui)">
          = 2nd rib. Count down.
        </text>
      </Part>

      {/* --- Ribs, numbered --- */}
      <Part label="Ribs two to six, numbered down from the sternal angle">
        {[2, 3, 4, 5, 6].map((n, i) => {
          const y = 100 + i * 26;
          return (
            <g key={n}>
              <path d={`M 200 ${y} Q 160 ${y + 6} 122 ${y + 18}`} fill="none" stroke="var(--scout-stroke-soft)" strokeWidth="1.1" />
              <path d={`M 216 ${y} Q 256 ${y + 6} 296 ${y + 18}`} fill="none" stroke="var(--scout-stroke-soft)" strokeWidth="1.1" />
              <text x="112" y={y + 22} fill="var(--scout-stroke-soft)" fontSize="8.5" textAnchor="end" fontFamily="var(--font-mono)">
                {n}
              </text>
            </g>
          );
        })}
      </Part>

      {/* --- Mid-clavicular line --- */}
      <Part label="Mid-clavicular line, the vertical reference for the apex">
        <line x1="268" y1="70" x2="268" y2="246" stroke="var(--scout-warn)" strokeWidth="0.9" strokeDasharray="4 4" />
        <text x="274" y="240" fill="var(--scout-warn)" fontSize="8.5" fontFamily="var(--font-ui)">
          mid-clavicular line
        </text>
      </Part>

      {/* --- The four areas --- */}
      {AREAS.map((a, i) => (
        <Part key={a.name} label={`${a.name} area: ${a.where}. ${a.murmur}`}>
          <circle cx={a.at[0]} cy={a.at[1]} r="12" fill={`var(--scout-${a.tone}-soft)`} stroke={`var(--scout-${a.tone})`} strokeWidth="1.8" />
          <text
            x={a.at[0]}
            y={a.at[1] + 4}
            fill={`var(--scout-${a.tone})`}
            fontSize="10.5"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
          >
            {i + 1}
          </text>
        </Part>
      ))}

      {/* --- Key --- */}
      <g transform="translate(330, 46)">
        {AREAS.map((a, i) => (
          <g key={`k-${a.name}`} transform={`translate(0, ${i * 58})`}>
            <Part label={`${a.name}: ${a.murmur}`}>
              <circle cx="8" cy="8" r="8" fill={`var(--scout-${a.tone}-soft)`} stroke={`var(--scout-${a.tone})`} strokeWidth="1.2" />
              <text x="8" y="11.5" fill={`var(--scout-${a.tone})`} fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
                {i + 1}
              </text>
              <text x="22" y="7" fill={`var(--scout-${a.tone})`} fontSize="10.5" fontWeight="700" fontFamily="var(--font-ui)">
                {a.name}
              </text>
              <text x="22" y="20" fill="var(--scout-stroke)" fontSize="8.5" fontFamily="var(--font-ui)">
                {a.where}
              </text>
              <text x="22" y="34" fill="var(--scout-stroke-soft)" fontSize="8.5" fontFamily="var(--font-ui)">
                <tspan x="22">{a.murmur.split('→')[0].trim()}</tspan>
                {a.murmur.includes('→') && (
                  <tspan x="22" dy="11">
                    → {a.murmur.split('→')[1].trim()}
                  </tspan>
                )}
              </text>
            </Part>
          </g>
        ))}
      </g>

      <Label x={0} y={294} size={10.5} tone="warn" weight={600}>
        Listening in four spots is a minimum, not the examination — roll the patient left for the mitral murmur, sit them forward for the aortic.
      </Label>
    </Diagram>
  );
}
