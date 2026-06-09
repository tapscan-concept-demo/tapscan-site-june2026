// ──────────────────────────────────────────────────────────────
// TSTouchpointViz — interactive illustration for the homepage
// "Dynamic Connection" section. Hovering a touchpoint pill on the
// right reveals the matching iconographic illustration here, with a
// crossfade. Idle state shows a scan prompt. Icons are stylized /
// iconographic (not literal imagery), in brand colors.
// ──────────────────────────────────────────────────────────────

// Shared palette
const TP_BLUE = "#2F3886", TP_BLUE2 = "#6976E7", TP_BLUE3 = "#A9B2EE",
      TP_AMBER = "#FFB855", TP_INK = "#1C2250", TP_FAINT = "#CDD3EE", TP_MIST = "#EAECF8";

const TP_ICONS = {
  "Merchandise Displays": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="48" y="26" width="64" height="18" rx="5" fill={TP_AMBER} />
      <rect x="44" y="50" width="72" height="84" rx="8" fill="#fff" stroke={TP_BLUE} strokeWidth="4" />
      <line x1="44" y1="78" x2="116" y2="78" stroke={TP_BLUE} strokeWidth="3" />
      <line x1="44" y1="106" x2="116" y2="106" stroke={TP_BLUE} strokeWidth="3" />
      <rect x="54" y="58" width="14" height="16" rx="2" fill={TP_BLUE2} />
      <rect x="74" y="60" width="12" height="14" rx="2" fill={TP_BLUE3} />
      <rect x="92" y="58" width="14" height="16" rx="2" fill={TP_BLUE2} />
      <rect x="56" y="86" width="12" height="16" rx="2" fill={TP_BLUE3} />
      <rect x="74" y="84" width="14" height="18" rx="2" fill={TP_BLUE2} />
      <rect x="94" y="88" width="12" height="14" rx="2" fill={TP_BLUE3} />
      <rect x="60" y="114" width="14" height="16" rx="2" fill={TP_BLUE2} />
      <rect x="84" y="114" width="14" height="16" rx="2" fill={TP_BLUE3} />
      <line x1="54" y1="134" x2="50" y2="142" stroke={TP_BLUE} strokeWidth="4" strokeLinecap="round" />
      <line x1="106" y1="134" x2="110" y2="142" stroke={TP_BLUE} strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  "In Store Signage": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="36" y="28" width="88" height="7" rx="3" fill={TP_INK} />
      <line x1="60" y1="35" x2="60" y2="58" stroke={TP_BLUE} strokeWidth="3" />
      <line x1="100" y1="35" x2="100" y2="58" stroke={TP_BLUE} strokeWidth="3" />
      <rect x="44" y="58" width="72" height="56" rx="8" fill={TP_BLUE} />
      <circle cx="80" cy="86" r="17" fill="none" stroke={TP_AMBER} strokeWidth="4" />
      <path d="M72 86 h15 M81 79 l7 7 -7 7" fill="none" stroke={TP_AMBER} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Product Packaging": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <path d="M80 32 L122 50 L80 68 L38 50 Z" fill={TP_BLUE2} />
      <path d="M38 50 L80 68 L80 120 L38 102 Z" fill={TP_BLUE} />
      <path d="M122 50 L80 68 L80 120 L122 102 Z" fill="#3C4699" />
      <rect x="49" y="76" width="22" height="22" rx="2" fill={TP_AMBER} />
      <g fill={TP_BLUE}>
        <rect x="52" y="79" width="5" height="5" /><rect x="63" y="79" width="5" height="5" />
        <rect x="52" y="90" width="5" height="5" /><rect x="63" y="90" width="5" height="5" />
        <rect x="57.5" y="84.5" width="4" height="4" />
      </g>
    </svg>
  ),
  "Billboards": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="32" y="32" width="96" height="60" rx="6" fill="#fff" stroke={TP_BLUE} strokeWidth="4" />
      <rect x="42" y="42" width="40" height="40" rx="3" fill={TP_BLUE2} />
      <line x1="90" y1="48" x2="118" y2="48" stroke={TP_BLUE3} strokeWidth="5" strokeLinecap="round" />
      <line x1="90" y1="60" x2="118" y2="60" stroke={TP_BLUE3} strokeWidth="5" strokeLinecap="round" />
      <line x1="90" y1="72" x2="110" y2="72" stroke={TP_AMBER} strokeWidth="5" strokeLinecap="round" />
      <line x1="52" y1="92" x2="52" y2="130" stroke={TP_INK} strokeWidth="5" strokeLinecap="round" />
      <line x1="108" y1="92" x2="108" y2="130" stroke={TP_INK} strokeWidth="5" strokeLinecap="round" />
      <line x1="42" y1="112" x2="118" y2="112" stroke={TP_INK} strokeWidth="4" />
    </svg>
  ),
  "Social Media Advertising": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="52" y="26" width="50" height="92" rx="11" fill={TP_BLUE} />
      <rect x="58" y="37" width="38" height="64" rx="4" fill={TP_MIST} />
      <path d="M77 96 C57 79 62 60 73 60 c5 0 8 3 10 6 c2 -3 5 -6 10 -6 c11 0 16 19 -4 36 Z" fill={TP_AMBER} />
      <circle cx="112" cy="44" r="8" fill={TP_BLUE2} />
      <circle cx="119" cy="66" r="5" fill={TP_BLUE3} />
    </svg>
  ),
  "Broadcast Advertising": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <path d="M102 42 q9 -9 19 0" fill="none" stroke={TP_AMBER} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M97 50 q14 -14 29 0" fill="none" stroke={TP_BLUE3} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="38" y="52" width="84" height="58" rx="8" fill={TP_BLUE} />
      <rect x="46" y="60" width="68" height="42" rx="4" fill={TP_MIST} />
      <path d="M73 70 L92 81 L73 92 Z" fill={TP_AMBER} />
      <line x1="66" y1="110" x2="60" y2="124" stroke={TP_INK} strokeWidth="5" strokeLinecap="round" />
      <line x1="94" y1="110" x2="100" y2="124" stroke={TP_INK} strokeWidth="5" strokeLinecap="round" />
      <line x1="54" y1="124" x2="106" y2="124" stroke={TP_INK} strokeWidth="5" strokeLinecap="round" />
    </svg>
  ),
  "Print Media": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="40" y="34" width="80" height="92" rx="6" fill="#fff" stroke={TP_BLUE} strokeWidth="4" />
      <rect x="50" y="44" width="60" height="14" rx="2" fill={TP_AMBER} />
      <rect x="50" y="66" width="28" height="24" rx="2" fill={TP_BLUE2} />
      <line x1="84" y1="68" x2="110" y2="68" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
      <line x1="84" y1="78" x2="110" y2="78" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
      <line x1="84" y1="88" x2="104" y2="88" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="102" x2="110" y2="102" stroke={TP_FAINT} strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="112" x2="110" y2="112" stroke={TP_FAINT} strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  "Trade Show Booths": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="40" y="40" width="80" height="72" rx="6" fill={TP_MIST} stroke={TP_BLUE} strokeWidth="4" />
      <path d="M40 60 v-14 a6 6 0 0 1 6 -6 h68 a6 6 0 0 1 6 6 v14 Z" fill={TP_AMBER} />
      <circle cx="80" cy="84" r="12" fill={TP_BLUE2} />
      <rect x="54" y="106" width="52" height="28" rx="4" fill={TP_BLUE} />
      <rect x="62" y="114" width="14" height="14" rx="2" fill={TP_AMBER} />
    </svg>
  ),
  "Support Material": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect x="50" y="42" width="56" height="74" rx="6" fill={TP_MIST} transform="rotate(-8 78 79)" />
      <rect x="54" y="44" width="56" height="74" rx="6" fill="#fff" stroke={TP_BLUE} strokeWidth="4" />
      <path d="M95 44 l15 15 h-15 Z" fill={TP_AMBER} />
      <line x1="64" y1="66" x2="90" y2="66" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
      <line x1="64" y1="78" x2="100" y2="78" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
      <line x1="64" y1="90" x2="100" y2="90" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
      <line x1="64" y1="102" x2="86" y2="102" stroke={TP_BLUE3} strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  "& More Custom Solutions": (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="80" r="44" fill="none" stroke={TP_FAINT} strokeWidth="3" strokeDasharray="6 9" />
      <path d="M80 46 C82 66 86 70 106 80 C86 90 82 94 80 114 C78 94 74 90 54 80 C74 70 78 66 80 46 Z" fill={TP_AMBER} />
      <path d="M112 52 C113 58 114 59 120 60 C114 61 113 62 112 68 C111 62 110 61 104 60 C110 59 111 58 112 52 Z" fill={TP_BLUE2} />
      <path d="M50 98 C51 103 52 104 57 105 C52 106 51 107 50 112 C49 107 48 106 43 105 C48 104 49 103 50 98 Z" fill={TP_BLUE2} />
    </svg>
  ),
};

const TP_IDLE = (
  <svg viewBox="0 0 160 160" aria-hidden="true">
    <path d="M50 62 v-12 a6 6 0 0 1 6 -6 h12" fill="none" stroke={TP_BLUE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M110 62 v-12 a6 6 0 0 0 -6 -6 h-12" fill="none" stroke={TP_BLUE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 98 v12 a6 6 0 0 0 6 6 h12" fill="none" stroke={TP_BLUE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M110 98 v12 a6 6 0 0 1 -6 6 h-12" fill="none" stroke={TP_BLUE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <g fill={TP_BLUE3}>
      <rect x="64" y="64" width="10" height="10" rx="1.5" /><rect x="86" y="64" width="10" height="10" rx="1.5" />
      <rect x="64" y="86" width="10" height="10" rx="1.5" />
    </g>
    <rect x="86" y="86" width="10" height="10" rx="1.5" fill={TP_BLUE2} />
    <rect x="52" y="78" width="56" height="5" rx="2.5" fill={TP_AMBER} />
  </svg>
);

function TSTouchpointViz({ active }) {
  React.useEffect(() => {
    if (document.getElementById("ts-tp-css")) return;
    const s = document.createElement("style");
    s.id = "ts-tp-css";
    s.textContent = `
      .ts-tp {
        position: relative; width: 100%; max-width: 460px; margin: 0 auto;
        background: #fff; border: 1px solid #E6E8F7; border-radius: 20px; padding: 22px;
        box-shadow: 0 18px 44px -22px rgba(28,34,80,0.34);
        display: flex; flex-direction: column; gap: 16px; box-sizing: border-box;
      }
      .ts-tp-stage {
        position: relative; width: 100%; aspect-ratio: 1 / 1;
        background: radial-gradient(circle at 50% 42%, #F2F4FF 0%, #FAFBFF 72%);
        border: 1px solid #EEF0FB; border-radius: 14px; overflow: hidden;
      }
      .ts-tp-layer {
        position: absolute; inset: 0; display: grid; place-items: center;
        opacity: 0; transform: scale(0.9) translateY(10px);
        transition: opacity 340ms cubic-bezier(0.2,0.8,0.2,1), transform 340ms cubic-bezier(0.2,0.8,0.2,1);
      }
      .ts-tp-layer.show { opacity: 1; transform: none; }
      .ts-tp-layer svg { width: 64%; height: 64%; display: block; overflow: visible; }
      .ts-tp-cap {
        text-align: center; font-family: Montserrat; font-weight: 800; font-size: 17px;
        color: #1C2250; letter-spacing: -0.01em; min-height: 22px; line-height: 1.2;
      }
      .ts-tp-cap.idle { font-weight: 600; font-size: 13px; color: #7A7D8F; letter-spacing: 0.03em; text-transform: uppercase; }
      .ts-tp-cap .amp { color: #FFB855; }
      @media (prefers-reduced-motion: reduce) {
        .ts-tp-layer { transition: opacity 120ms linear; transform: none; }
      }
    `;
    document.head.appendChild(s);
  }, []);

  const labels = Object.keys(TP_ICONS);
  const isIdle = !active || !TP_ICONS[active];

  return (
    <div className="ts-tp" role="img"
         aria-label={isIdle ? "Touchpoint illustration — hover a tag to preview it." : (active + " illustration.")}>
      <div className="ts-tp-stage">
        <div className={"ts-tp-layer" + (isIdle ? " show" : "")}>{TP_IDLE}</div>
        {labels.map((label) =>
          <div key={label} className={"ts-tp-layer" + (active === label ? " show" : "")}>
            {TP_ICONS[label]}
          </div>
        )}
      </div>
      {isIdle
        ? <div className="ts-tp-cap idle">Hover a touchpoint to see it</div>
        : <div className="ts-tp-cap">{active}<span className="amp">.</span></div>}
    </div>
  );
}

window.TSTouchpointViz = TSTouchpointViz;
