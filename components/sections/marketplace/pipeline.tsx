import type { ReactNode } from "react";
import { Signal, Trace } from "@/components/ui/circuit";
import { Chip } from "@/components/ui/section-header";
import type { Titled } from "@/content/types";
import { ConnectBoard, ShowcaseBoard } from "./boards";
import { HubIllustration } from "./hub-illustration";

const DRAWINGS: ReactNode[] = [<ShowcaseBoard key="showcase" />, <HubIllustration key="discover" dark />, <ConnectBoard key="connect" />];

/** How the hub works as three stations on one trace, with a signal running from showcase to connect. */
export function Pipeline({ steps, lead }: { steps: Titled[]; lead: string }) {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <div>
          <Chip tone="light">On the day</Chip>
          <h3 className="mt-5 text-4xl font-normal tracking-[-0.025em] text-on-dark md:text-5xl">How the hub works</h3>
        </div>
        <p className="text-lg lg:pb-2">{lead}</p>
      </div>

      <ol className="relative mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
        <li aria-hidden="true" className="absolute top-5 right-[16.67%] left-[16.67%] hidden h-3 -translate-y-1/2 lg:block">
          <svg viewBox="0 0 1000 12" preserveAspectRatio="none" className="h-full w-full">
            <Trace points={[[0, 6], [1000, 6]]} className="stroke-navy-line" />
            <Signal points={[[0, 6], [1000, 6]]} duration={4.5} />
          </svg>
        </li>
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <span className="relative z-10 mx-auto flex size-10 items-center justify-center rounded-full bg-brand font-mono text-sm font-semibold text-on-dark ring-8 ring-navy">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mt-8 aspect-[8/5] overflow-hidden rounded-lg [&>svg]:h-full [&>svg]:w-full">{DRAWINGS[index]}</div>
            <h4 className="mt-6 text-2xl font-normal text-on-dark">{step.title}</h4>
            <p className="mt-2">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
