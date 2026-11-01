import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { marketplace, marketplaceCategories, marketplaceSteps } from "@/content/marketplace";

/** The featured band: the hub where API providers showcase and developers discover. */
export function Marketplace() {
  return (
    <Section id="marketplace" labelledBy="marketplace-title" tone="band">
      <SectionHeader
        id="marketplace-title"
        inverse
        eyebrow={marketplace.eyebrow}
        title={marketplace.title}
        lead={marketplace.lead}
        action={
          <ButtonLink href={mailto(emails.partnerships)} variant="inverse" icon="arrow-right">
            Showcase your API
          </ButtonLink>
        }
      />

      <ul className="grid gap-px overflow-hidden rounded-panel border border-band-line bg-band-line md:grid-cols-3">
        {marketplaceCategories.map((category) => (
          <li key={category.title} className="flex flex-col gap-3 bg-band-raised p-6 md:p-8">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-highlight" />
            <h3 className="text-xl text-on-band">{category.title}</h3>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <h3 className="text-2xl text-on-band">On the day</h3>
          <p className="mt-3">{marketplace.experience}</p>
          <p className="mt-3">{marketplace.invitation}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="#partners" variant="inverse-outline" icon={null}>
              Become an exhibitor
            </ButtonLink>
            {marketplace.onlineUrl && (
              <ButtonLink href={marketplace.onlineUrl} variant="inverse-outline" icon="arrow-up-right" external>
                Explore the online marketplace
              </ButtonLink>
            )}
          </div>
        </div>
        <ol className="grid gap-8 sm:grid-cols-3">
          {marketplaceSteps.map((step, index) => (
            <li key={step.title} className="border-t border-band-line pt-5">
              <span className="font-mono text-sm text-highlight">{String(index + 1).padStart(2, "0")}</span>
              <h4 className="mt-2 text-lg text-on-band">{step.title}</h4>
              <p className="mt-2 text-sm">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
