import Image from "next/image";
import type { CSSProperties } from "react";
import { GearRing, Pad, Signal, Trace } from "@/components/ui/circuit";
import { partners, type Partner } from "@/content/partners";

type Point = [number, number];

// 640×440 grid. Hub at (320,220) inside a gear ring of r=64; tiles are 128×76, wired from the ring at 45°.
const SPOTS: { at: Point; trace: Point[] }[] = [
  { at: [110, 90], trace: [[275, 175], [190, 90], [174, 90]] },
  { at: [530, 90], trace: [[365, 175], [450, 90], [466, 90]] },
  { at: [70, 220], trace: [[256, 220], [134, 220]] },
  { at: [570, 220], trace: [[384, 220], [506, 220]] },
  { at: [110, 350], trace: [[275, 265], [190, 350], [174, 350]] },
  { at: [530, 350], trace: [[365, 265], [450, 350], [466, 350]] },
];

export function PartnerLogo({ partner, sizes }: { partner: Partner; sizes: string }) {
  return (
    <Image
      src={partner.logo.src}
      alt={partner.logo.alt}
      width={partner.logo.width}
      height={partner.logo.height}
      sizes={sizes}
      unoptimized
      className="h-full w-full object-contain"
    />
  );
}

/** Partners wired to the APICon hub, with signals flowing out along each trace. */
export function PartnerNetworkDiagram() {
  return (
    <div className="relative hidden aspect-[640/440] w-full md:block">
      <svg viewBox="0 0 640 440" aria-hidden="true" className="absolute inset-0 size-full" style={{ "--pad-fill": "var(--brand)" } as CSSProperties}>
        <GearRing cx={320} cy={220} r={64} className="stroke-on-dark/50 text-on-dark/50" />
        {SPOTS.map((spot, index) => (
          <g key={index}>
            <Trace points={spot.trace} className="stroke-on-dark/45" />
            <Signal points={spot.trace} delay={index * 0.45} duration={2.8} className="stroke-on-dark" />
            <Pad at={spot.trace[0]} r={4} className="fill-on-dark" />
            <Pad at={spot.trace[spot.trace.length - 1]} hollow r={5} className="stroke-on-dark" />
          </g>
        ))}
      </svg>
      <span className="absolute top-1/2 left-1/2 flex aspect-square w-[13.75%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-canvas p-3 shadow-lg shadow-ink/20">
        {/* eslint-disable-next-line @next/next/no-img-element -- static SVG */}
        <img src="/brand/logo-nav.svg" alt="" width={752} height={191} className="w-full" />
      </span>
      <ul>
        {partners.slice(0, SPOTS.length).map((partner, index) => {
          const [x, y] = SPOTS[index].at;
          return (
            <li key={partner.name} className="absolute w-[20%] -translate-x-1/2 -translate-y-1/2" style={{ left: `${(x / 640) * 100}%`, top: `${(y / 440) * 100}%` }}>
              <div className="aspect-[128/76] rounded-lg bg-canvas p-3 shadow-lg shadow-ink/20">
                <PartnerLogo partner={partner} sizes="140px" />
              </div>
              <p className="absolute inset-x-0 top-full mt-2 text-center text-xs font-medium text-on-dark">{partner.role}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
