// The APICon circuit language, drawn from the logo: traces with 45° bends, round pads, and the segmented gear ring.
// Every piece is plain SVG meant to sit inside a parent <svg> with a fixed viewBox, so geometry stays exact at any size.
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";

type Point = [number, number];

/** A trace through the given points. Callers keep every segment horizontal, vertical or at 45°. */
export function Trace({ points, className = "stroke-current", width = 2 }: { points: Point[]; className?: string; width?: number }) {
  return (
    <polyline
      points={points.map((p) => p.join(",")).join(" ")}
      fill="none"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    />
  );
}

/** Round pad at the end of a trace: filled like a solder point, or hollow like a terminal. */
export function Pad({ at, hollow = false, r = 5, className = "fill-current stroke-current" }: { at: Point; hollow?: boolean; r?: number; className?: string }) {
  return (
    <circle
      cx={at[0]}
      cy={at[1]}
      r={r}
      strokeWidth={hollow ? 2 : 0}
      className={className}
      style={hollow ? { fill: "var(--pad-fill, transparent)" } : undefined}
    />
  );
}

/** The logo's segmented gear ring: dashed outer ticks, a thin ring and a thick ring broken into segments. */
export function GearRing({ cx, cy, r, className = "stroke-current" }: { cx: number; cy: number; r: number; className?: string }) {
  const inner = r * 0.72;
  const circumference = 2 * Math.PI * inner;
  const gap = circumference * 0.03;
  return (
    <g className={className} fill="none">
      <circle cx={cx} cy={cy} r={r} strokeWidth={r * 0.06} strokeDasharray={`${r * 0.035} ${r * 0.075}`} />
      <circle cx={cx} cy={cy} r={r * 0.86} strokeWidth={Math.max(1.5, r * 0.012)} />
      <circle
        cx={cx}
        cy={cy}
        r={inner}
        strokeWidth={r * 0.13}
        strokeDasharray={`${circumference / 4 - gap} ${gap}`}
        transform={`rotate(-45 ${cx} ${cy})`}
      />
      {[0, 90, 180, 270].map((angle) => (
        <rect
          key={angle}
          x={cx - r * 0.045}
          y={cy - r * 1.06}
          width={r * 0.09}
          height={r * 0.14}
          className="fill-current"
          stroke="none"
          transform={`rotate(${angle} ${cx} ${cy})`}
        />
      ))}
    </g>
  );
}

type NodeProps = { at: Point; size: number; icon: IconName; shape?: "square" | "circle"; tone?: "light" | "brand" | "navy"; children?: ReactNode };

const NODE_TONES = {
  light: { box: "fill-canvas", icon: "text-ink" },
  brand: { box: "fill-brand", icon: "text-on-dark" },
  navy: { box: "fill-navy-raised", icon: "text-on-dark" },
};

/** An icon node centred on a point: a rounded tile or a circle with an icon inside. */
export function Node({ at, size, icon, shape = "square", tone = "light", children }: NodeProps) {
  const [cx, cy] = at;
  const half = size / 2;
  const glyph = Math.round(size * 0.44);
  const style = NODE_TONES[tone];
  return (
    <g>
      {shape === "circle" ? (
        <circle cx={cx} cy={cy} r={half} className={style.box} />
      ) : (
        <rect x={cx - half} y={cy - half} width={size} height={size} rx={size * 0.2} className={style.box} />
      )}
      <Icon name={icon} size={glyph} x={cx - glyph / 2} y={cy - glyph / 2} className={style.icon} />
      {children}
    </g>
  );
}
