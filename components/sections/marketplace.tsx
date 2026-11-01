import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Accent, Chip } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { event } from "@/content/event";
import { marketplace, marketplaceCategories, marketplaceSteps } from "@/content/marketplace";
import { CategoryTabs } from "./marketplace/category-tabs";
import { OnTheDay } from "./marketplace/on-the-day";

/** The featured navy panel: categories as tabs, a live-data diagram and how the hub works. */
export function Marketplace() {
  const showcase = (
    <ButtonLink href={mailto(emails.partnerships)} variant="light">
      Showcase your API
    </ButtonLink>
  );

  return (
    <section id="marketplace" aria-labelledby="marketplace-title" className="px-2 pt-14 sm:px-2.5">
      <div className="relative rounded-panel bg-navy text-on-dark-muted">
        <Chip filled className="absolute -top-3.5 left-[max(1.25rem,calc((100%-77.5rem)/2+2rem))]">
          {marketplace.title}
        </Chip>
        <div className="h-20 border-b border-navy-line" />
        <Container className="pt-16 pb-20 md:pt-24 md:pb-28">
          <h2 id="marketplace-title" className="sr-only">{marketplace.title}</h2>
          <CategoryTabs
            categories={marketplaceCategories}
            icons={["card", "shield", "bot"]}
            steps={marketplaceSteps}
            facts={{ date: event.startsAt.slice(0, 10), venue: event.venue.name }}
            trailing={
              <ButtonLink href="#partners" variant="light">
                Become an exhibitor
              </ButtonLink>
            }
            aside={
              <>
                <p className="text-3xl leading-tight font-light text-on-dark md:text-[2.5rem]">
                  Explore APIs. Meet providers. <Accent onDark>Create opportunities.</Accent>
                </p>
                <div className="mt-8">{showcase}</div>
              </>
            }
          />

          <div className="mt-24 md:mt-32">
            <OnTheDay steps={marketplaceSteps} lead={marketplace.invitation} />
          </div>
          <div className="mt-14 flex justify-center">{showcase}</div>
        </Container>
      </div>
    </section>
  );
}
