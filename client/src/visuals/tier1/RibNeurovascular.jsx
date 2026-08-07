import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-CHEST-002 · Tier 1 · Understand
 * Why the tube goes over the top of the rib.
 *
 * Changes what a clinician does: avoids the intercostal vessels and nerve.
 */
export function RibNeurovascular() {
  return (
    <Diagram
      title="Why the needle goes over the top of the rib"
      desc="Two ribs in cross-section with the intercostal vein, artery and nerve lying in the subcostal groove on the underside of the upper rib. The correct needle path passes just above the lower rib, well away from the bundle. The wrong path passes just below the upper rib and runs straight into the vein, artery and nerve."
      viewBox="0 0 440 268"
    >
      <Label x={0} y={14} size={12} weight={700}>
        The bundle hides under the rib above. Go over the top of the rib below.
      </Label>

      {/* --- Skin and muscle layers --- */}
      <Part label="Chest wall layers">
        <rect x="20" y="30" width="292" height="14" rx="3" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="0.9" />
        <text x="26" y="41" fill="var(--scout-stroke-soft)" fontSize="9" fontFamily="var(--font-ui)">skin and subcutaneous tissue</text>
        <rect x="20" y="46" width="292" height="140" fill="var(--scout-fill)" stroke="var(--scout-stroke-soft)" strokeWidth="0.9" />
        <text x="26" y="182" fill="var(--scout-stroke-soft)" fontSize="9" fontFamily="var(--font-ui)">intercostal muscles</text>
        <rect x="20" y="188" width="292" height="12" fill="var(--scout-accent-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="0.9" />
        <text x="26" y="197" fill="var(--scout-accent)" fontSize="9" fontFamily="var(--font-ui)">parietal pleura → pleural space</text>
      </Part>

      {/* --- Upper rib, with the bundle in its subcostal groove --- */}
      <Part label="Upper rib with the neurovascular bundle in the subcostal groove">
        <path
          d="M 60 58 Q 150 48 250 58 L 250 92 Q 240 100 226 96 Q 150 88 74 96 Q 62 98 60 88 Z"
          fill="var(--scout-fill-soft)"
          stroke="var(--scout-stroke)"
          strokeWidth="1.6"
        />
        <text x="155" y="76" fill="var(--scout-stroke)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          RIB ABOVE
        </text>

        {/* The bundle — VAN, top to bottom */}
        <circle cx="122" cy="94" r="6" fill="var(--scout-accent-soft)" stroke="var(--scout-accent)" strokeWidth="1.3" />
        <circle cx="140" cy="97" r="6" fill="var(--scout-danger-soft)" stroke="var(--scout-danger)" strokeWidth="1.3" />
        <circle cx="158" cy="99" r="6" fill="var(--scout-warn-soft)" stroke="var(--scout-warn)" strokeWidth="1.3" />

        <text x="122" y="97.5" fill="var(--scout-accent)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">V</text>
        <text x="140" y="100.5" fill="var(--scout-danger)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">A</text>
        <text x="158" y="102.5" fill="var(--scout-warn)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">N</text>

        <line x1="176" y1="99" x2="228" y2="118" stroke="var(--scout-stroke-soft)" strokeWidth="0.9" />
        <text x="232" y="121" fill="var(--scout-stroke)" fontSize="10" fontWeight="600" fontFamily="var(--font-ui)">subcostal groove</text>
      </Part>

      {/* --- Lower rib --- */}
      <Part label="Lower rib — the safe landmark">
        <path
          d="M 60 140 Q 150 130 250 140 L 250 174 Q 240 182 226 178 Q 150 170 74 178 Q 62 180 60 170 Z"
          fill="var(--scout-fill-soft)"
          stroke="var(--scout-stroke)"
          strokeWidth="1.6"
        />
        <text x="155" y="158" fill="var(--scout-stroke)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
          RIB BELOW
        </text>
      </Part>

      {/* --- Correct path: skims the top of the lower rib --- */}
      <Part label="Correct path — immediately above the lower rib">
        <line x1="18" y1="128" x2="204" y2="132" stroke="var(--scout-good)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 204 132 L 192 127 L 192 137 Z" fill="var(--scout-good)" />
        <circle cx="212" cy="132" r="9" fill="var(--scout-good-soft)" />
        <text x="212" y="136" fill="var(--scout-good)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">✓</text>
        <text x="330" y="129" fill="var(--scout-good)" fontSize="11" fontWeight="700" fontFamily="var(--font-ui)">CORRECT</text>
        <text x="330" y="143" fill="var(--scout-stroke)" fontSize="10" fontFamily="var(--font-ui)">Over the top of</text>
        <text x="330" y="155" fill="var(--scout-stroke)" fontSize="10" fontFamily="var(--font-ui)">the rib below</text>
      </Part>

      {/* --- Wrong path: straight into the bundle --- */}
      <Part label="Wrong path — below the upper rib, into the bundle">
        <line x1="18" y1="106" x2="112" y2="100" stroke="var(--scout-danger)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="7 4" />
        <path d="M 112 100 L 100 96 L 101 106 Z" fill="var(--scout-danger)" />
        <circle cx="88" cy="118" r="9" fill="var(--scout-danger-soft)" />
        <text x="88" y="122" fill="var(--scout-danger)" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">✕</text>
        <text x="330" y="76" fill="var(--scout-danger)" fontSize="11" fontWeight="700" fontFamily="var(--font-ui)">WRONG</text>
        <text x="330" y="90" fill="var(--scout-stroke)" fontSize="10" fontFamily="var(--font-ui)">Hugging the rib</text>
        <text x="330" y="102" fill="var(--scout-stroke)" fontSize="10" fontFamily="var(--font-ui)">above hits V, A, N</text>
      </Part>

      {/* --- Key --- */}
      <Part label="Key to the bundle">
        <rect x="20" y="216" width="292" height="34" rx="5" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke-soft)" strokeWidth="0.8" />
        <text x="30" y="230" fill="var(--scout-stroke)" fontSize="10" fontWeight="700" fontFamily="var(--font-ui)">
          The bundle runs V–A–N from top to bottom
        </text>
        <text x="30" y="243" fill="var(--scout-stroke-soft)" fontSize="9.5" fontFamily="var(--font-ui)">
          intercostal Vein · Artery · Nerve — all tucked under the rib above
        </text>
      </Part>

      <Label x={0} y={264} size={10.5} tone="warn" weight={600}>
        Collateral vessels can run mid-space in the elderly — hug the upper border of the lower rib, do not aim mid-space.
      </Label>
    </Diagram>
  );
}
