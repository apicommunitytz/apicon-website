import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { participationLead } from "@/content/participation";
import { sponsorTiersLead } from "@/content/partners";
import { ParticipationModels } from "./participation-models";
import { SponsorTiers } from "./sponsor-tiers";

export function Partners() {
  return (
    <Section id="partners" labelledBy="partners-title" tone="surface">
      <SectionHeader
        id="partners-title"
        eyebrow="Partners & exhibitors"
        title="Partner with APICon"
        lead={participationLead}
        action={
          <ButtonLink href={mailto(emails.partnerships)} icon="mail">
            Discuss a partnership
          </ButtonLink>
        }
      />

      <h3 className="text-sm font-medium tracking-[0.08em] text-muted uppercase">Participation models</h3>
      <div className="mt-4">
        <ParticipationModels />
      </div>

      <div className="mt-16">
        <h3 className="text-2xl">Premium sponsorship tiers</h3>
        <p className="mt-2 max-w-2xl text-muted">{sponsorTiersLead}</p>
        <div className="mt-8">
          <SponsorTiers />
        </div>
        <p className="mt-6 text-sm text-muted">
          Sponsorship enquiries:{" "}
          <a href={mailto(emails.sponsorships)} className="font-semibold text-primary hover:underline">
            {emails.sponsorships}
          </a>
        </p>
      </div>
    </Section>
  );
}
