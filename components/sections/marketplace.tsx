import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Accent, Chip } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { event } from "@/content/event";
import { marketplace, marketplaceCategories, marketplaceSteps } from "@/content/marketplace";
import { Pipeline } from "./marketplace/pipeline";
import { Switchboard } from "./marketplace/switchboard";

/** The featured navy panel: an intro, the category switchboard, then how the hub works. */
export function Marketplace() {
  return (
    <section id="marketplace" aria-labelledby="marketplace-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-navy text-on-dark-muted">
        <div className="border-b border-navy-line">
          <Container className="flex h-16 items-center justify-between gap-4">
            <p className="flex items-center gap-3 text-sm font-medium text-on-dark">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-accent ring-4 ring-accent/20 motion-safe:animate-pulse" />
              Live at {event.shortName} 2026
            </p>
            <p className="hidden text-sm sm:block">{marketplace.eyebrow}</p>
          </Container>
        </div>

        <Container className="py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
            <div>
              <Chip tone="light">{marketplace.title}</Chip>
              <h2 id="marketplace-title" className="mt-6 text-4xl leading-tight font-light tracking-[-0.025em] text-on-dark md:text-[3.25rem]">
                Explore APIs. Meet providers. <Accent onDark>Create opportunities.</Accent>
              </h2>
            </div>
            <div>
              <p className="text-lg">{marketplace.experience}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={mailto(emails.partnerships)} variant="light">
                  Showcase your API
                </ButtonLink>
                <ButtonLink href="#partners" variant="brand">
                  Become an exhibitor
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <Switchboard
              categories={marketplaceCategories}
              icons={["card", "shield", "bot"]}
              facts={{ date: event.startsAt.slice(0, 10), venue: event.venue.name }}
              action={
                <ButtonLink href={mailto(emails.partnerships)} variant="light">
                  Showcase in this category
                </ButtonLink>
              }
            />
          </div>

          <div className="mt-24 border-t border-navy-line pt-16 md:mt-28 md:pt-20">
            <Pipeline steps={marketplaceSteps} lead={marketplace.invitation} />
          </div>
        </Container>
      </div>
    </section>
  );
}
