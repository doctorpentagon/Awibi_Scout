import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-ECG-002 · Tier 2 (animated) · Recognise
 * Hyperkalaemia: four-panel progression.
 *
 * Changes what a clinician does: recognises panel one and treats before panel
 * four, which is arrest.
 *
 * Animation is a sequence highlight, not decoration — and it is fully
 * suppressed under prefers-reduced-motion, where all four panels stay legible
 * at once. The teaching survives with no motion at all.
 */

const PANELS = [
  {
    k: 'K⁺ 5.5',
    name: 'Tented T',
    detail: 'Tall, narrow, pointed T waves',
    tone: 'good',
    // Normal P, normal QRS, tall peaked T
    trace: 'M 4 46 Q 12 38 20 46 L 32 46 L 36 52 L 42 14 L 48 56 L 52 46 L 62 46 L 74 8 L 86 46 L 104 46',
  },
  {
    k: 'K⁺ 6.5',
    name: 'Flat P',
    detail: 'P wave flattens, PR lengthens',
    tone: 'accent',
    trace: 'M 4 46 L 22 46 L 38 46 L 42 52 L 48 16 L 54 56 L 58 46 L 68 46 L 80 12 L 92 46 L 104 46',
  },
  {
    k: 'K⁺ 7.5',
    name: 'Wide QRS',
    detail: 'P gone, QRS broadens',
    tone: 'warn',
    trace: 'M 4 46 L 26 46 L 34 54 L 46 16 L 58 58 L 68 46 L 78 46 L 88 14 L 98 46 L 104 46',
  },
  {
    k: 'K⁺ >8',
    name: 'Sine wave',
    detail: 'Pre-arrest. Treat now.',
    tone: 'danger',
    trace: 'M 4 46 Q 16 8 28 46 Q 40 84 52 46 Q 64 8 76 46 Q 88 84 100 46 L 104 46',
  },
];

export function HyperkalaemiaProgression() {
  return (
    <Diagram
      title="Hyperkalaemia: the four-panel ECG progression"
      desc="Four ECG panels showing how hyperkalaemia changes the trace as potassium rises. At 5.5 the T waves become tall and tented. At 6.5 the P wave flattens. At 7.5 the QRS widens. Above 8 the trace becomes a sine wave, which is pre-arrest. Each panel names its approximate potassium so the pattern can be recognised at the first panel rather than the last."
      viewBox="0 0 460 202"
    >
      <Label x={0} y={14} size={12} weight={700}>
        As potassium rises, the trace changes in a fixed order
      </Label>

      {PANELS.map((p, i) => {
        const x = i * 115;
        return (
          <g key={p.name} transform={`translate(${x}, 26)`} className={`seq-panel seq-panel-${i + 1}`}>
            <Part label={`${p.k}: ${p.name} — ${p.detail}`}>
              <rect
                x="0"
                y="0"
                width="108"
                height="98"
                rx="6"
                fill="var(--scout-fill)"
                stroke={`var(--scout-${p.tone})`}
                strokeWidth="1.4"
              />

              {/* Isoelectric reference so each panel is comparable. */}
              <line x1="4" y1="72" x2="104" y2="72" stroke="var(--scout-stroke-soft)" strokeWidth="0.5" strokeDasharray="2 3" />

              <path
                d={p.trace}
                transform="translate(0, 26)"
                fill="none"
                stroke={`var(--scout-${p.tone})`}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              <text x="54" y="16" fill={`var(--scout-${p.tone})`} fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
                {p.k}
              </text>
            </Part>

            <text x="54" y="118" fill="var(--scout-label)" fontSize="11.5" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
              {p.name}
            </text>
            <text x="54" y="133" fill="var(--scout-stroke-soft)" fontSize="9.5" textAnchor="middle" fontFamily="var(--font-ui)">
              {p.detail}
            </text>

            {/* Step number — the sequence reads without relying on colour. */}
            <circle cx="12" cy="12" r="8" fill={`var(--scout-${p.tone}-soft)`} />
            <text x="12" y="15.5" fill={`var(--scout-${p.tone})`} fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
              {i + 1}
            </text>
          </g>
        );
      })}

      {/* Direction of travel */}
      <Part label="Progression arrow, left to right, worsening">
        <line x1="8" y1="168" x2="440" y2="168" stroke="var(--scout-stroke-soft)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 440 168 L 432 164 L 432 172 Z" fill="var(--scout-danger)" />
      </Part>

      <Label x={0} y={186} size={10.5} tone="danger" weight={700}>
        The numbers are a guide, not a threshold — the ECG can be normal at 7.0 and sinusoidal at 6.5.
      </Label>
      <Label x={0} y={200} size={10.5} tone="stroke-soft">
        Treat the ECG, not the number. Calcium first to protect the myocardium, then shift, then remove.
      </Label>
    </Diagram>
  );
}
