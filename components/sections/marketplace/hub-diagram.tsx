import type { CSSProperties } from "react";
import { GearRing, Node, Pad, Trace } from "@/components/ui/circuit";
import type { IconName } from "@/components/ui/icon";
import { JsonCard, type Json } from "../json-card";

type Point = [number, number];
const boardStyle = { "--pad-fill": "var(--navy)" } as CSSProperties;

/** Board on a 320×200 grid: a brand node in the middle, two satellites wired with 45° traces. */
function Board({ icon, satellites, gear = false }: { icon: IconName; satellites: { icon: IconName; at: Point; trace: Point[] }[]; gear?: boolean }) {
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

/** Fixed-size trace between two columns, with a terminal pad at each end. */
function Connector({ points }: { points: Point[] }) {
  return (
    <svg viewBox="0 0 96 240" width={96} height={240} aria-hidden="true" className="hidden lg:block" style={boardStyle}>
      <Trace points={points} className="stroke-accent/70" />
      <Pad at={points[0]} hollow r={6} className="stroke-accent" />
      <Pad at={points[points.length - 1]} hollow r={6} className="stroke-accent" />
    </svg>
  );
}

function Caption({ lead, text }: { lead: string; text: string }) {
  return (
    <p className="mt-6 text-lg leading-snug">
      <strong className="font-semibold text-on-dark">{lead}:</strong> <span>{text}</span>
    </p>
  );
}

type HubDiagramProps = {
  icon: IconName;
  data: Record<string, Json>;
  label: string;
  left: { title: string; description: string };
  right: { title: string; description: string };
};

/** Showcase board, the category's JSON and the connect board, wired together by traces. */
export function HubDiagram({ icon, data, label, left, right }: HubDiagramProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_6rem_1.3fr_6rem_1fr] lg:items-start lg:gap-0">
      <div>
        <Board
          icon="store"
          satellites={[
            { icon: "code", at: [60, 150], trace: [[118, 100], [110, 100], [78, 132]] },
            { icon: "key", at: [260, 50], trace: [[202, 100], [210, 100], [242, 68]] },
          ]}
        />
        <Caption lead={left.title} text={left.description} />
      </div>
      <Connector points={[[6, 96], [36, 96], [66, 126], [90, 126]]} />
      <JsonCard data={data} label={label} />
      <Connector points={[[6, 206], [42, 206], [60, 188], [90, 188]]} />
      <div className="lg:pt-24">
        <Board
          icon={icon}
          gear
          satellites={[
            { icon: "users", at: [60, 60], trace: [[118, 100], [100, 100], [78, 78]] },
            { icon: "link", at: [262, 140], trace: [[202, 100], [222, 100], [244, 122]] },
          ]}
        />
        <Caption lead={right.title} text={right.description} />
      </div>
    </div>
  );
}
