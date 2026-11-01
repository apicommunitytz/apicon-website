import type { CSSProperties } from "react";
import { GearRing, Node, Pad, Trace } from "@/components/ui/circuit";
import type { IconName } from "@/components/ui/icon";

type Point = [number, number];

// 480×360 grid. The hub sits at (240,180); each node is wired to the gear ring at 45°.
const NODES: { icon: IconName; label: string; at: Point; trace: Point[] }[] = [
  { icon: "card", label: "FinTech", at: [80, 70], trace: [[114, 70], [130, 70], [190, 130]] },
  { icon: "shield", label: "Security", at: [400, 70], trace: [[366, 70], [350, 70], [290, 130]] },
  { icon: "bot", label: "AI", at: [80, 278], trace: [[114, 278], [138, 278], [190, 226]] },
  { icon: "users", label: "Community", at: [400, 278], trace: [[366, 278], [342, 278], [290, 226]] },
];

/** The innovation hub as a board: gear-ring hub in the middle, four category nodes wired to it. */
export function HubIllustration() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-hidden="true"
      className="w-full rounded-lg bg-canvas"
      style={{ "--pad-fill": "var(--canvas)" } as CSSProperties}
    >
      <defs>
        <pattern id="hub-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" className="fill-line" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#hub-dots)" />
      <GearRing cx={240} cy={180} r={70} className="stroke-brand/40 text-brand/40" />
      {NODES.map((node) => (
        <g key={node.label}>
          <Trace points={node.trace} className="stroke-brand" />
          <Pad at={node.trace[node.trace.length - 1]} hollow r={6} className="stroke-brand" />
          <Node at={node.at} size={68} icon={node.icon} shape="circle" tone="brand" />
          <text x={node.at[0]} y={node.at[1] + 56} textAnchor="middle" className="fill-ink text-[15px] font-semibold">
            {node.label}
          </text>
        </g>
      ))}
      <Node at={[240, 180]} size={72} icon="store" tone="brand" />
    </svg>
  );
}
