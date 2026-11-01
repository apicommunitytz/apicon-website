import { Icon } from "@/components/ui/icon";
import { Chip } from "@/components/ui/section-header";
import type { Titled } from "@/content/types";
import { HubIllustration } from "./hub-illustration";

/** Deep brand card with an accordion of how the hub works, beside an illustration panel. */
export function OnTheDay({ steps, lead }: { steps: Titled[]; lead: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <div className="rounded-lg bg-brand-deep p-8 text-on-dark md:p-10">
        <Chip tone="light">On the day</Chip>
        <h3 className="mt-6 text-4xl tracking-[-0.025em] text-on-dark md:text-5xl">How the hub works</h3>
        <p className="mt-5 text-lg">{lead}</p>
        <ul className="mt-10">
          {steps.map((step) => (
            <li key={step.title} className="border-b border-on-dark/30">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-2xl [&::-webkit-details-marker]:hidden">
                  {step.title}
                  <Icon name="chevron-right" size={22} className="transition-transform group-open:rotate-90" />
                </summary>
                <p className="pb-6 text-on-dark/85">{step.description}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center rounded-lg bg-page p-6 md:p-10">
        <HubIllustration />
      </div>
    </div>
  );
}
