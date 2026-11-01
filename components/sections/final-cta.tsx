import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { emails, mailto } from "@/content/contacts";
import { event, venueLabel } from "@/content/event";

/** Closing call to action: the event theme, said once. */
export function FinalCta() {
  return (
    <Section labelledBy="final-cta-title" tone="surface">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="final-cta-title" className="text-3xl md:text-5xl">
          {event.theme}
        </h2>
        <p className="mt-5 text-lg text-muted">
          {event.dateLabel} · {venueLabel}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={event.registration.url} lumaEventId={event.registration.lumaEventId}>
            Register for {event.shortName}
          </ButtonLink>
          <ButtonLink href={mailto(emails.support)} variant="secondary" icon="mail">
            Contact the team
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
