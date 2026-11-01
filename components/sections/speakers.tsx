import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { speakers, speakersNote } from "@/content/speakers";
import { PersonCard } from "./person-card";

export function Speakers() {
  return (
    <Section id="speakers" labelledBy="speakers-title">
      <SectionHeader
        id="speakers-title"
        eyebrow={`${speakers.length} confirmed speakers`}
        title="Featured speakers"
        lead={speakersNote}
        action={
          <ButtonLink href={mailto(emails.speakers)} variant="secondary" icon="mail">
            Submit a session
          </ButtonLink>
        }
      />

      {/* Scroll-snap row on phones, grid from tablet up. No carousel script. */}
      <ul className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
        {speakers.map((speaker) => (
          <li key={speaker.name} className="w-[72%] shrink-0 snap-start sm:w-auto">
            <PersonCard person={speaker} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
