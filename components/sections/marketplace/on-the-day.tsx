import { Icon, type IconName } from "@/components/ui/icon";
import { Chip } from "@/components/ui/section-header";
import type { Titled } from "@/content/types";

const NODES: { icon: IconName; position: string }[] = [
  { icon: "card", position: "left-[12%] top-[12%]" },
  { icon: "shield", position: "right-[12%] top-[12%]" },
  { icon: "bot", position: "left-[12%] bottom-[12%]" },
  { icon: "users", position: "right-[12%] bottom-[12%]" },
];

/** Hub illustration: dotted map texture, rings, a central marketplace tile and four category nodes. */
function HubIllustration() {
  return (
    <div aria-hidden="true" className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-canvas">
      <div className="absolute inset-0 [background-image:radial-gradient(var(--line)_1.5px,transparent_1.5px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="absolute inset-[18%] rounded-full border border-brand/30" />
      <div className="absolute inset-[30%] rounded-full bg-brand/15" />
      <div className="absolute inset-[12%] rounded-lg border border-dashed border-brand/40" />
      <span className="absolute top-1/2 left-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-canvas text-brand shadow-lg shadow-ink/10">
        <Icon name="store" size={36} />
      </span>
      {NODES.map((node) => (
        <span key={node.icon} className={`absolute inline-flex size-16 items-center justify-center rounded-full bg-brand text-on-dark shadow-md shadow-ink/20 ${node.position}`}>
          <Icon name={node.icon} size={26} />
        </span>
      ))}
    </div>
  );
}

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
      <div className="flex items-center rounded-lg bg-page p-8">
        <HubIllustration />
      </div>
    </div>
  );
}
