import type { CSSProperties } from "react";
import { GearRing, Node, Pad, Trace } from "@/components/ui/circuit";
import type { IconName } from "@/components/ui/icon";

type Point = [number, number];
type Satellite = { icon: IconName; at: Point; trace: Point[] };
const boardStyle = { "--pad-fill": "var(--navy)" } as CSSProperties;

/** Board on a 320×200 grid: a brand node in the middle, two satellites wired with 45° traces. */
function Board({ icon, satellites, gear = false }: { icon: IconName; satellites: Satellite[]; gear?: boolean }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="w-full rounded-lg bg-ink/35" style={boardStyle}>
      {gear ? (
        <GearRing cx={160} cy={250} r={150} className="stroke-navy-line text-navy-line" />
      ) : (
        <g className="stroke-navy-line" strokeWidth={1}>
          {[40, 80, 120, 160].map((y) => <line key={`h${y}`} x1={0} x2={320} y1={y} y2={y} />)}
          {[64, 128, 192, 256].map((x) => <line key={`v${x}`} x1={x} x2={x} y1={0} y2={200} />)}
        </g>
      )}
      {satellites.map((satellite) => (
        <g key={satellite.icon}>
          <Trace points={satellite.trace} className="stroke-accent/70" />
          <Pad at={satellite.trace[1]} r={4} className="fill-accent" />
          <Node at={satellite.at} size={52} icon={satellite.icon} shape="circle" tone="navy" />
        </g>
      ))}
      <Node at={[160, 100]} size={84} icon={icon} tone="brand" />
    </svg>
  );
}

/** Providers put APIs on show: the marketplace node on a grid, wired to code and keys. */
export function ShowcaseBoard() {
  return (
    <Board
      icon="store"
      satellites={[
        { icon: "code", at: [60, 150], trace: [[118, 100], [110, 100], [78, 132]] },
        { icon: "key", at: [260, 50], trace: [[202, 100], [210, 100], [242, 68]] },
      ]}
    />
  );
}

/** People meet: a link node above the gear ring, wired to people and conversations. */
export function ConnectBoard() {
  return (
    <Board
      icon="link"
      gear
      satellites={[
        { icon: "users", at: [60, 60], trace: [[118, 100], [100, 100], [78, 78]] },
        { icon: "message", at: [262, 140], trace: [[202, 100], [222, 100], [244, 122]] },
      ]}
    />
  );
}
