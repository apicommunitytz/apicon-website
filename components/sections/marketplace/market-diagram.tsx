import type { MarketplaceCategory } from "@/content/marketplace";

// 1000×420 grid. Category chips sit in a tray at the top, the marketplace node in the middle,
// exhibitors and participants either side, and what the categories cover underneath. Labels only.
const NODE = { x: 430, y: 168, w: 140, h: 84 };
const DOTTED = { fill: "none", strokeWidth: 1.5, strokeDasharray: "3 5", className: "stroke-on-dark-muted/60" };

const chipWidth = (label: string, size: number) => Math.round(label.length * size * 0.56 + 32);

function Chip({ x, y, w, label, tone }: { x: number; y: number; w: number; label: string; tone: "brand" | "raised" | "faded" }) {
  const box = { brand: "fill-brand", raised: "fill-navy-raised stroke-navy-line", faded: "fill-navy-raised/60 stroke-navy-line/60" }[tone];
  const text = tone === "faded" ? "fill-on-dark-muted" : "fill-on-dark";
  return (
    <g>
      <rect x={x} y={y} width={w} height={36} rx={6} className={box} strokeWidth={1} />
      <text x={x + w / 2} y={y + 23} textAnchor="middle" className={`${text} text-[14px] font-medium`}>{label}</text>
    </g>
  );
}

export function MarketDiagram({ categories }: { categories: MarketplaceCategory[] }) {
  // Top tray: categories laid out left to right and centred.
  const widths = categories.map((c) => chipWidth(c.title, 14));
  const trayW = widths.reduce((a, b) => a + b, 0) + 12 * (widths.length + 1);
  const trayX = 500 - trayW / 2;
  let cursor = trayX + 12;
  const top = categories.map((c, i) => { const chip = { x: cursor, w: widths[i], label: c.title }; cursor += widths[i] + 12; return chip; });

  // Bottom row: one chip per category listing what it covers, centred.
  const covers = categories.map((c) => c.covers.join(" · "));
  const coverW = covers.map((c) => chipWidth(c, 13));
  const rowW = coverW.reduce((a, b) => a + b, 0) + 24 * (coverW.length - 1);
  let bx = 500 - rowW / 2;
  const bottom = covers.map((label, i) => { const chip = { x: bx, w: coverW[i], label }; bx += coverW[i] + 24; return chip; });

  return (
    <svg viewBox="0 0 1000 420" role="img" aria-label="Categories feed the APICon Marketplace, which connects exhibitors with participants" className="w-full">
      <defs>
        <pattern id="market-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" className="fill-navy-line" />
        </pattern>
      </defs>
      <rect width="1000" height="420" fill="url(#market-dots)" opacity="0.7" />

      <rect x={trayX} y={14} width={trayW} height={60} rx={10} className="fill-navy-raised/70 stroke-navy-line" strokeWidth={1} />
      {top.map((chip) => (
        <path key={chip.label} d={`M${chip.x + chip.w / 2} 62 V128 H${NODE.x + NODE.w / 2} V${NODE.y}`} {...DOTTED} />
      ))}
      {top.map((chip) => <Chip key={chip.label} x={chip.x} y={26} w={chip.w} label={chip.label} tone="brand" />)}

      <path d={`M300 210 H${NODE.x}`} {...DOTTED} />
      <path d={`M${NODE.x + NODE.w} 210 H700`} {...DOTTED} />
      <Chip x={160} y={192} w={140} label="Exhibitors" tone="raised" />
      <Chip x={700} y={192} w={140} label="Participants" tone="raised" />

      <path d={`M500 ${NODE.y + NODE.h} V300`} {...DOTTED} />
      <path d={`M${bottom[0].x + bottom[0].w / 2} 300 H${bottom[bottom.length - 1].x + bottom[bottom.length - 1].w / 2}`} {...DOTTED} />
      {bottom.map((chip) => (
        <g key={chip.label}>
          <path d={`M${chip.x + chip.w / 2} 300 V330`} {...DOTTED} />
          <Chip x={chip.x} y={330} w={chip.w} label={chip.label} tone="faded" />
        </g>
      ))}

      <rect x={NODE.x} y={NODE.y} width={NODE.w} height={NODE.h} rx={14} className="fill-brand-deep stroke-accent/50" strokeWidth={1.5} />
      <text x={500} y={NODE.y + 38} textAnchor="middle" className="fill-on-dark text-[20px] font-semibold">APICon</text>
      <text x={500} y={NODE.y + 60} textAnchor="middle" className="fill-on-dark-muted text-[13px]">Marketplace</text>
    </svg>
  );
}
