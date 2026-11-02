import type { MarketplaceCategory } from "@/content/marketplace";

// 1000-wide grid. Categories sit in a tray at the top, the marketplace node in the middle on the
// centre line (x=500), exhibitors and participants either side, and every covered item on one row
// underneath, grouped by category. Text labels only.
const CX = 500;
const NODE = { w: 168, h: 96, y: 160 };
const CHIP_H = 36;
const GAP = 12;
const BUS_Y = 300;
const ROW_Y = 330;
const ITEM_GAP = 8;
const GROUP_GAP = 28;
const DOTTED = { fill: "none", strokeWidth: 1.5, strokeDasharray: "3 5", className: "stroke-on-dark-muted/60" };

const textWidth = (label: string, size: number) => Math.round(label.length * size * 0.56 + 32);

function Chip({ cx, y, w, label, tone, size = 14 }: { cx: number; y: number; w: number; label: string; tone: "brand" | "raised" | "faded"; size?: number }) {
  const box = { brand: "fill-brand", raised: "fill-navy-raised stroke-navy-line", faded: "fill-navy-raised stroke-navy-line" }[tone];
  const text = tone === "faded" ? "fill-on-dark-muted" : "fill-on-dark";
  return (
    <g>
      <rect x={cx - w / 2} y={y} width={w} height={CHIP_H} rx={6} className={box} strokeWidth={1} />
      <text x={cx} y={y + 23} textAnchor="middle" className={`${text} font-medium`} style={{ fontSize: size }}>{label}</text>
    </g>
  );
}

export function MarketDiagram({ categories }: { categories: MarketplaceCategory[] }) {
  // Equal-width category chips, so the middle one sits exactly on the centre line.
  const chipW = Math.max(...categories.map((c) => textWidth(c.title, 14)));
  const pitch = chipW + GAP;
  const centres = categories.map((_, i) => CX + (i - (categories.length - 1) / 2) * pitch);
  const trayW = categories.length * pitch + GAP;

  // One row of items, centred; small gaps inside a category, wider gaps between categories.
  const items: { label: string; w: number; cx: number }[] = [];
  let x = 0;
  categories.forEach((c, i) => {
    if (i > 0) x += GROUP_GAP - ITEM_GAP;
    c.covers.forEach((label) => {
      const w = Math.round(label.length * 12 * 0.56 + 24);
      items.push({ label, w, cx: x + w / 2 });
      x += w + ITEM_GAP;
    });
  });
  const shift = CX - (x - ITEM_GAP) / 2;
  items.forEach((item) => (item.cx += shift));
  const height = ROW_Y + CHIP_H + 24;
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
      <path d={`M${items[0].cx} ${BUS_Y} H${items[items.length - 1].cx}`} {...DOTTED} />
      {items.map((item) => (
        <g key={item.label}>
          <path d={`M${item.cx} ${BUS_Y} V${ROW_Y}`} {...DOTTED} />
          <Chip cx={item.cx} y={ROW_Y} w={item.w} label={item.label} tone="faded" size={12} />
        </g>
      ))}

      <rect x={nodeX} y={NODE.y} width={NODE.w} height={NODE.h} rx={14} className="fill-brand-deep stroke-accent/50" strokeWidth={1.5} />
      <image href="/brand/logo-nav-white.svg" x={nodeX + 22} y={NODE.y + 18} width={NODE.w - 44} height={32} preserveAspectRatio="xMidYMid meet" />
      <text x={CX} y={NODE.y + 74} textAnchor="middle" className="fill-on-dark-muted text-[13px]">Marketplace</text>
    </svg>
  );
}
