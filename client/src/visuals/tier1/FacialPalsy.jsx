import { Diagram, Label, Part } from './Diagram.jsx';

/**
 * V-CN-001 · Tier 1 · Recognise
 * UMN vs LMN facial palsy.
 *
 * Changes what a clinician does: separates a stroke from a Bell palsy at the
 * bedside — the single highest-yield cranial nerve distinction.
 */
export function FacialPalsy() {
  return (
    <Diagram
      title="Upper versus lower motor neurone facial palsy"
      desc="Two faces both attempting to raise the eyebrows, with the weakness on the patient's left in each. In the upper motor neurone pattern the forehead still wrinkles because the upper face receives fibres from both hemispheres, so only the lower face droops. In the lower motor neurone pattern the forehead is smooth on the weak side and the eye cannot close, because the facial nerve carries the whole half of the face. Forehead spared points to a stroke; forehead involved points to a Bell palsy."
      viewBox="0 0 460 292"
    >
      <Label x={0} y={14} size={12} weight={700}>
        Ask the patient to raise both eyebrows. The forehead answers the question.
      </Label>

      <Face
        x={24}
        title="UPPER motor neurone"
        subtitle="Forehead SPARED"
        foreheadWrinkled
        tone="warn"
        verdict="Think stroke"
        detail="Only the lower face droops. The upper face is innervated from both hemispheres, so one hemisphere can still lift the brow."
        action="Time-critical. Screen for stroke now."
      />

      <Face
        x={248}
        title="LOWER motor neurone"
        subtitle="Forehead INVOLVED"
        foreheadWrinkled={false}
        tone="accent"
        verdict="Think Bell palsy"
        detail="The whole half of the face is weak, including the brow, and the eye will not close fully."
        action="Protect the eye — lubricant and taping at night."
      />
    </Diagram>
  );
}

function Face({ x, title, subtitle, foreheadWrinkled, tone, verdict, detail, action }) {
  // The weak side is the patient's left, drawn on the viewer's right.
  return (
    <g transform={`translate(${x}, 28)`}>
      <Part label={`${title}: ${subtitle}. ${verdict}.`}>
        <rect x="0" y="0" width="188" height="196" rx="8" fill="var(--scout-fill)" stroke={`var(--scout-${tone})`} strokeWidth="1.5" />

        <text x="94" y="20" fill={`var(--scout-${tone})`} fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="var(--font-ui)">
          {title}
        </text>
        <text x="94" y="34" fill={`var(--scout-${tone})`} fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">
          {subtitle}
        </text>

        {/* Head */}
        <ellipse cx="94" cy="118" rx="58" ry="70" fill="var(--scout-fill-soft)" stroke="var(--scout-stroke)" strokeWidth="1.5" />

        {/* Midline — makes "one side" unambiguous */}
        <line x1="94" y1="52" x2="94" y2="184" stroke="var(--scout-stroke-soft)" strokeWidth="0.7" strokeDasharray="3 4" />

        {/* --- Forehead --- */}
        {/* Normal side (viewer's left) always wrinkles */}
        <path d="M 54 82 Q 68 78 82 82" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 54 90 Q 68 86 82 90" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.3" strokeLinecap="round" />

        {/* Weak side forehead: wrinkled if spared, smooth if involved */}
        {foreheadWrinkled ? (
          <>
            <path d="M 106 82 Q 120 78 134 82" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 106 90 Q 120 86 134 90" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.3" strokeLinecap="round" />
            <text x="120" y="70" fill="var(--scout-good)" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
              wrinkles ✓
            </text>
          </>
        ) : (
          <>
            <line x1="106" y1="86" x2="134" y2="86" stroke="var(--scout-danger)" strokeWidth="1.2" strokeDasharray="3 3" />
            <text x="120" y="70" fill="var(--scout-danger)" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="var(--font-ui)">
              smooth ✕
            </text>
          </>
        )}

        {/* --- Eyes --- */}
        <ellipse cx="72" cy="108" rx="11" ry="7" fill="var(--scout-fill)" stroke="var(--scout-stroke)" strokeWidth="1.3" />
        <circle cx="72" cy="108" r="3.4" fill="var(--scout-stroke)" />

        {foreheadWrinkled ? (
          <>
            <ellipse cx="116" cy="108" rx="11" ry="7" fill="var(--scout-fill)" stroke="var(--scout-stroke)" strokeWidth="1.3" />
            <circle cx="116" cy="108" r="3.4" fill="var(--scout-stroke)" />
          </>
        ) : (
          <>
            {/* Eye will not close — drawn wide, with the lower lid sagging */}
            <ellipse cx="116" cy="108" rx="12" ry="9" fill="var(--scout-fill)" stroke="var(--scout-danger)" strokeWidth="1.5" />
            <circle cx="116" cy="108" r="3.4" fill="var(--scout-stroke)" />
            <text x="150" y="106" fill="var(--scout-danger)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-ui)">
              eye
            </text>
            <text x="150" y="116" fill="var(--scout-danger)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-ui)">
              stays
            </text>
            <text x="150" y="126" fill="var(--scout-danger)" fontSize="8.5" fontWeight="600" fontFamily="var(--font-ui)">
              open
            </text>
          </>
        )}

        {/* --- Nasolabial fold: flat on the weak side in BOTH patterns --- */}
        <path d="M 80 128 Q 74 142 76 152" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 108 128 Q 112 140 110 148" fill="none" stroke="var(--scout-danger)" strokeWidth="1" strokeDasharray="2 3" strokeLinecap="round" />

        {/* --- Mouth: droops on the weak side in BOTH patterns --- */}
        <path d="M 70 158 Q 94 170 120 164" fill="none" stroke="var(--scout-stroke)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 120 164 L 126 172" fill="none" stroke="var(--scout-danger)" strokeWidth="1.8" strokeLinecap="round" />

        <text x="94" y="182" fill="var(--scout-danger)" fontSize="8.5" fontWeight="600" textAnchor="middle" fontFamily="var(--font-ui)">
          lower face droops in both
        </text>
      </Part>

      {/* --- Verdict --- */}
      <Part label={`${verdict}. ${action}`}>
        <rect x="0" y="206" width="188" height="72" rx="6" fill={`var(--scout-${tone}-soft)`} />
        <text x="10" y="222" fill={`var(--scout-${tone})`} fontSize="11" fontWeight="800" fontFamily="var(--font-ui)">
          {verdict}
        </text>
        <WrappedText x={10} y={234} width={40} lineHeight={11} text={detail} />
        <text x="10" y="272" fill={`var(--scout-${tone})`} fontSize="9" fontWeight="700" fontFamily="var(--font-ui)">
          {action}
        </text>
      </Part>
    </g>
  );
}

/**
 * Word-wraps into real <text>/<tspan> nodes.
 *
 * foreignObject would be easier but it is HTML inside SVG: it does not export,
 * screen readers treat it inconsistently, and it breaks the pipeline rule that
 * every glyph in a Tier-1 asset is a real SVG text node.
 */
function WrappedText({ x, y, width, lineHeight, text, size = 9, tone = 'stroke' }) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > width && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);

  return (
    <text x={x} y={y} fill={`var(--scout-${tone})`} fontSize={size} fontFamily="var(--font-ui)">
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : lineHeight}>
          {l}
        </tspan>
      ))}
    </text>
  );
}
