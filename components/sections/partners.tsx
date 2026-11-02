import { ButtonLink } from "@/components/ui/button";
import { DividerLabel, StatusLine } from "@/components/ui/catalogue";
import { Container } from "@/components/ui/section";
import { emails, mailto } from "@/content/contacts";
import { participationLead, participationModels } from "@/content/participation";
import { sponsorTiersLead } from "@/content/partners";
import { ParticipationModels } from "./participation-models";
import { SponsorTiers } from "./sponsor-tiers";

/** Partnership catalogue: participation models, then premium sponsorship tiers. */
export function Partners() {
  return (
    <section id="partners" aria-labelledby="partners-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-canvas">
        <div className="border-b border-line">
          <Container className="flex flex-col gap-6 py-10 md:py-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 id="partners-title" className="text-4xl font-normal tracking-[-0.025em] md:text-[2.75rem]">
                Partner with APICon
              </h2>
              <p className="mt-4 text-lg text-muted">{participationLead}</p>
            </div>
            <ButtonLink href={mailto(emails.partnerships)} variant="brand" size="lg" icon="mail">
              Discuss a partnership
            </ButtonLink>
          </Container>
        </div>
        <Container className="py-12 md:py-16">
          <StatusLine>Open now · {participationModels.length} participation models</StatusLine>
          <div className="mt-8">
            <ParticipationModels />
          </div>

          <DividerLabel>Premium sponsorship tiers</DividerLabel>
          <p className="-mt-4 mb-8 text-center text-muted">{sponsorTiersLead}</p>
          <SponsorTiers />
          <p className="mt-8 text-center text-sm text-muted">
            Sponsorship enquiries:{" "}
            <a href={mailto(emails.sponsorships)} className="font-semibold text-link hover:underline">
              {emails.sponsorships}
            </a>
          </p>
        </Container>
      </div>
    </section>
  );
}
