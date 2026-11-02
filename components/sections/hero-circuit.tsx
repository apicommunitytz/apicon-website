import type { CSSProperties } from "react";
import { GearRing, Node, Pad, Trace } from "@/components/ui/circuit";
import type { IconName } from "@/components/ui/icon";

type Point = [number, number];
type Branch = { tile: Point; icon: IconName; from: Point; extra?: Point[] };

const TILE = 56;
const HALF = TILE / 2;

// Board drawn on a 1600×900 grid. The headline block sits in x 240–1360, y 300–790; buses run in the gutters.
const LEFT_BUS: Point[] = [[90, 110], [90, 400], [130, 440], [130, 800]];
const LEFT: Branch[] = [
  { tile: [180, 150], icon: "layers", from: [90, 150] },
  { tile: [220, 320], icon: "shield", from: [90, 320] },
  { tile: [260, 560], icon: "key", from: [130, 560], extra: [[288, 560], [330, 560], [380, 610], [400, 610]] },
  { tile: [200, 760], icon: "lock", from: [130, 760] },
];

const mirror = ([x, y]: Point): Point => [1600 - x, y];
const RIGHT_BUS = LEFT_BUS.map(mirror);
const RIGHT_ICONS: IconName[] = ["code", "server", "card", "bot"];
const RIGHT: Branch[] = LEFT.map((branch, index) => ({
  tile: mirror(branch.tile),
  icon: RIGHT_ICONS[index],
  from: mirror(branch.from),
  extra: branch.extra?.map(mirror),
}));

function Side({ bus, branches, leftSide }: { bus: Point[]; branches: Branch[]; leftSide: boolean }) {
  const edge = leftSide ? -HALF : HALF;
  return (
    <g>
      <Trace points={bus} className="stroke-hero-accent/35" />
      <Pad at={bus[0]} hollow r={7} className="stroke-hero-accent/60" />
      <Pad at={bus[bus.length - 1]} hollow r={7} className="stroke-hero-accent/60" />
      {branches.map((branch) => (
        <g key={branch.icon}>
          <Trace points={[branch.from, [branch.tile[0] + edge, branch.tile[1]]]} className="stroke-hero-accent/35" />
          <Pad at={branch.from} r={5} className="fill-hero-accent/70" />
          {branch.extra && (
            <>
              <Trace points={branch.extra} className="stroke-hero-accent/35" />
              <Pad at={branch.extra[branch.extra.length - 1]} hollow r={6} className="stroke-hero-accent/60" />
            </>
          )}
          <Node at={branch.tile} size={TILE} icon={branch.icon} tone="navy" />
        </g>
      ))}
    </g>
  );
}

/** The hero's circuit board: the logo's gear ring behind the headline, topic tiles on buses in the gutters. */
export function HeroCircuit() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] w-full"
      style={{ "--pad-fill": "var(--hero-background)" } as CSSProperties}
    >
      {/* Turns slowly around its own centre; still for reduced motion. */}
      <g className="origin-center [transform-box:fill-box] motion-safe:animate-[spin_80s_linear_infinite]">
        <GearRing cx={800} cy={460} r={340} className="stroke-hero-accent/12 text-hero-accent/12" />
      </g>
      <g className="hidden lg:inline">
        <Side bus={LEFT_BUS} branches={LEFT} leftSide />
        <Side bus={RIGHT_BUS} branches={RIGHT} leftSide={false} />
      </g>
    </svg>
  );
}
