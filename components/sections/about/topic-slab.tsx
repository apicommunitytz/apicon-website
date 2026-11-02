import type { CSSProperties } from "react";
import { Node, Pad, Trace } from "@/components/ui/circuit";
import { Icon, type IconName } from "@/components/ui/icon";

type Point = [number, number];
const CHIP = { w: 152, h: 48 };

// 560×440 grid. Slab top face corners: (280,150) (400,210) (280,270) (160,210); 30 deep.
// Each chip is wired from its inner edge to a point on the slab's edge with a 45° final bend.
const CHIPS: { icon: IconName; title: string; note: string; at: Point; trace: Point[] }[] = [
  { icon: "shield", title: "API Security", note: "OWASP Top 10", at: [20, 70], trace: [[172, 94], [196, 94], [196, 156], [220, 180]] },
  { icon: "bot", title: "AI Agents", note: "MCP and tools", at: [388, 70], trace: [[388, 94], [364, 94], [364, 156], [340, 180]] },
  { icon: "key", title: "Authentication", note: "OAuth, JWT, keys", at: [0, 201], trace: [[152, 225], [162, 225]] },
  { icon: "card", title: "FinTech APIs", note: "Payments, banking", at: [408, 201], trace: [[408, 225], [398, 225]] },
  { icon: "branch", title: "DevSecOps", note: "Secure SDLC", at: [20, 356], trace: [[172, 380], [196, 380], [196, 294], [220, 270]] },
  { icon: "scale", title: "Governance", note: "Lifecycle, policy", at: [388, 356], trace: [[388, 380], [364, 380], [364, 294], [340, 270]] },
];

function Chip({ icon, title, note, at }: { icon: IconName; title: string; note: string; at: Point }) {
  const [x, y] = at;
  return (
    <g>
      <rect x={x} y={y} width={CHIP.w} height={CHIP.h} rx={8} className="fill-canvas stroke-line" strokeWidth={1} />
      <rect x={x + 9} y={y + 9} width={30} height={30} rx={6} className="fill-surface" />
      <Icon name={icon} size={16} x={x + 16} y={y + 16} className="text-ink" />
      <text x={x + 48} y={y + 21} className="fill-ink text-[13px] font-semibold">{title}</text>
      <text x={x + 48} y={y + 37} className="fill-muted text-[11px]">{note}</text>
    </g>
  );
}

function Pill({ at, label, tone }: { at: Point; label: string; tone: "navy" | "brand" }) {
  const w = 132;
  return (
    <g>
      <rect x={at[0] - w / 2} y={at[1] - 16} width={w} height={32} rx={16} className={tone === "navy" ? "fill-navy" : "fill-brand"} />
      <text x={at[0]} y={at[1] + 5} textAnchor="middle" className="fill-on-dark text-[13px] font-semibold">{label}</text>
    </g>
  );
}

/** Isometric brand slab with a key at its centre, wired to six topic chips. Decorative. */
export function TopicSlab({ topicCount }: { topicCount: number }) {
  return (
    <svg viewBox="0 0 560 440" aria-hidden="true" className="w-full" style={{ "--pad-fill": "var(--canvas)" } as CSSProperties}>
      <ellipse cx={280} cy={225} rx={210} ry={105} className="fill-brand/5 stroke-brand/25" strokeWidth={1} />
      <Trace points={[[280, 56], [280, 150]]} className="stroke-brand/60" />
      <Trace points={[[280, 300], [280, 394]]} className="stroke-brand/60" />
      <polygon points="280,150 400,210 280,270 160,210" className="fill-brand" />
      <polygon points="160,210 280,270 280,300 160,240" className="fill-brand-deep" />
      <polygon points="400,210 280,270 280,300 400,240" className="fill-navy" />
      <Node at={[280, 210]} size={44} icon="key" tone="navy" />
      {CHIPS.map((chip) => (
        <g key={chip.title}>
          <Trace points={chip.trace} className="stroke-brand" />
          <Pad at={chip.trace[chip.trace.length - 1]} hollow r={5} className="stroke-brand" />
          <Chip {...chip} />
        </g>
      ))}
      <Pad at={[280, 150]} hollow r={5} className="stroke-on-dark" />
      <Pill at={[280, 40]} label={`${topicCount} key topics`} tone="navy" />
      <Pill at={[280, 410]} label="APICon 2026" tone="brand" />
    </svg>
  );
}
