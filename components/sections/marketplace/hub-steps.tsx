import { Icon, type IconName } from "@/components/ui/icon";
import type { Titled } from "@/content/types";

type Step = Titled & { icon: IconName; link: { label: string; href: string } };

/** How the hub works: three columns, each a small outlined icon, a bold lead with its text, and one link. */
export function HubSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
      {steps.map((step) => (
        <li key={step.title}>
          <span className="inline-flex size-10 items-center justify-center rounded-md border border-navy-line text-accent">
            <Icon name={step.icon} size={20} />
          </span>
          <p className="mt-6 text-[1.0625rem] leading-relaxed">
            <strong className="font-medium text-on-dark">{step.title}.</strong> {step.description}
          </p>
          <a href={step.link.href} className="mt-4 inline-block font-medium text-accent hover:underline">
            {step.link.label} ›
          </a>
        </li>
      ))}
    </ol>
  );
}
