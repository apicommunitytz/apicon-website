import type { MarketplaceCategory } from "@/content/marketplace";

// 1000-wide grid. Categories sit in a tray at the top, the marketplace node in the middle on the
// centre line (x=500), exhibitors and participants either side, and each category's coverage in a
// column under that category. Text labels only.
const CX = 500;
const NODE = { w: 168, h: 96, y: 160 };
const CHIP_H = 36;
const GAP = 12;
const ROW = 46;
const BUS_Y = 300;
const COLUMN_TOP = 330;
const DOTTED = { fill: "none", strokeWidth: 1.5, strokeDasharray: "3 5", className: "stroke-on-dark-muted/60" };

const textWidth = (label: string, size: number) => Math.round(label.length * size * 0.56 + 32);

function Chip({ cx, y, w, label, tone }: { cx: number; y: number; w: number; label: string; tone: "brand" | "raised" | "faded" }) {
  const box = { brand: "fill-brand", raised: "fill-navy-raised stroke-navy-line", faded: "fill-navy-raised stroke-navy-line" }[tone];
  const text = tone === "faded" ? "fill-on-dark-muted" : "fill-on-dark";
  return (
    <g>
      <rect x={cx - w / 2} y={y} width={w} height={CHIP_H} rx={6} className={box} strokeWidth={1} />
      <text x={cx} y={y + 23} textAnchor="middle" className={`${text} text-[14px] font-medium`}>{label}</text>
    </g>
  );
}

export function MarketDiagram({ categories }: { categories: MarketplaceCategory[] }) {
  // Equal-width category chips, so the middle one sits exactly on the centre line.
  const chipW = Math.max(...categories.map((c) => textWidth(c.title, 14)));
  const pitch = chipW + GAP;
  const centres = categories.map((_, i) => CX + (i - (categories.length - 1) / 2) * pitch);
  const trayW = categories.length * pitch + GAP;

  const tallest = Math.max(...categories.map((c) => c.covers.length));
  const height = COLUMN_TOP + (tallest - 1) * ROW + CHIP_H + 24;
  const nodeX = CX - NODE.w / 2;

  return (
    <svg viewBox={`0 0 1000 ${height}`} role="img" aria-label="Categories feed the APICon Marketplace, which connects exhibitors with participants" className="w-full">
      <defs>
        <pattern id="market-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" className="fill-navy-line" />
        </pattern>
      </defs>
      <rect width="1000" height={height} fill="url(#market-dots)" opacity="0.7" />

      <rect x={CX - trayW / 2} y={14} width={trayW} height={60} rx={10} className="fill-navy-raised/70 stroke-navy-line" strokeWidth={1} />
      {centres.map((cx) => <path key={`in-${cx}`} d={`M${cx} 62 V118 H${CX} V${NODE.y}`} {...DOTTED} />)}
      {categories.map((c, i) => <Chip key={c.title} cx={centres[i]} y={26} w={chipW} label={c.title} tone="brand" />)}

      <path d={`M300 ${NODE.y + NODE.h / 2} H${nodeX}`} {...DOTTED} />
      <path d={`M${nodeX + NODE.w} ${NODE.y + NODE.h / 2} H700`} {...DOTTED} />
      <Chip cx={230} y={NODE.y + NODE.h / 2 - CHIP_H / 2} w={140} label="Exhibitors" tone="raised" />
      <Chip cx={770} y={NODE.y + NODE.h / 2 - CHIP_H / 2} w={140} label="Participants" tone="raised" />

      <path d={`M${CX} ${NODE.y + NODE.h} V${BUS_Y}`} {...DOTTED} />
      <path d={`M${centres[0]} ${BUS_Y} H${centres[centres.length - 1]}`} {...DOTTED} />
      {categories.map((c, i) => {
        const w = Math.max(...c.covers.map((label) => textWidth(label, 13)));
        const last = COLUMN_TOP + (c.covers.length - 1) * ROW;
        return (
          <g key={`col-${c.title}`}>
            <path d={`M${centres[i]} ${BUS_Y} V${last}`} {...DOTTED} />
            {c.covers.map((label, row) => (
              <Chip key={label} cx={centres[i]} y={COLUMN_TOP + row * ROW} w={w} label={label} tone="faded" />
            ))}
          </g>
        );
      })}

      <rect x={nodeX} y={NODE.y} width={NODE.w} height={NODE.h} rx={14} className="fill-brand-deep stroke-accent/50" strokeWidth={1.5} />
      <image href="/brand/logo-nav-white.svg" x={nodeX + 22} y={NODE.y + 18} width={NODE.w - 44} height={32} preserveAspectRatio="xMidYMid meet" />
      <text x={CX} y={NODE.y + 74} textAnchor="middle" className="fill-on-dark-muted text-[13px]">Marketplace</text>
    </svg>
  );
}
