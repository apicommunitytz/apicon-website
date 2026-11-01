import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { emails, mailto } from "@/content/contacts";
import { event } from "@/content/event";
import { marketplace, marketplaceCategories, marketplaceSteps } from "@/content/marketplace";
import { HubSteps } from "./marketplace/hub-steps";
import { MarketDiagram } from "./marketplace/market-diagram";

/** Two-tone statement: the first sentence in white, the rest muted. */
function Statement({ id, lead, rest, as: Tag = "h3" }: { id?: string; lead: string; rest: ReactNode; as?: "h2" | "h3" }) {
  return (
    <Tag id={id} className="max-w-3xl text-[1.75rem] leading-snug font-normal tracking-[-0.02em] md:text-[2rem]">
      <span className="text-on-dark">{lead}</span> <span className="text-on-dark-muted">{rest}</span>
    </Tag>
  );
}

const STEP_LINKS = [
  { icon: "store" as const, link: { label: "Showcase your API", href: mailto(emails.partnerships) } },
  { icon: "search" as const, link: { label: "See the program", href: "#program" } },
  { icon: "users" as const, link: { label: `Register for ${event.shortName}`, href: event.registration.url } },
];

/** The featured navy panel: the hub in one statement, its categories as a labelled diagram, and how it works. */
export function Marketplace() {
  const covers = marketplaceCategories.flatMap((category) => category.covers).join(", ");
  return (
    <section id="marketplace" aria-labelledby="marketplace-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-navy text-on-dark-muted">
        <div className="border-b border-navy-line">
          <Container className="flex h-16 items-center justify-between gap-4">
            <p className="flex items-center gap-3 text-sm font-medium text-on-dark">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              Live at {event.shortName} 2026
            </p>
            <p className="hidden text-sm sm:block">{marketplace.eyebrow}</p>
          </Container>
        </div>

        <Container className="py-16 md:py-24">
          <Statement as="h2" id="marketplace-title" lead={`${marketplace.title}.`} rest={`${marketplace.lead} ${marketplace.experience}`} />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={mailto(emails.partnerships)} variant="brand">
              Showcase your API
            </ButtonLink>
            <ButtonLink href="#partners" variant="light">
              Become an exhibitor
            </ButtonLink>
          </div>

          <div className="mt-20 border-t border-navy-line pt-16 md:mt-24 md:pt-20">
            <Statement lead={`${marketplaceCategories.length} showcase categories.`} rest={`${covers}.`} />
            <div className="mt-12">
              <MarketDiagram categories={marketplaceCategories} />
            </div>
          </div>

          <div className="mt-20 border-t border-navy-line pt-16 md:mt-24 md:pt-20">
            <Statement lead="How the hub works." rest={marketplace.invitation} />
            <div className="mt-12">
              <HubSteps steps={marketplaceSteps.map((step, index) => ({ ...step, ...STEP_LINKS[index] }))} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
