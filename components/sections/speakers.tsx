import { ButtonLink } from "@/components/ui/button";
import { Panel } from "@/components/ui/section";
import { Accent, Chip } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { event } from "@/content/event";
import { speakers, speakersNote } from "@/content/speakers";
import { PersonCard } from "./person-card";
import { SpeakerOrbit } from "./speaker-orbit";

/** Navy panel: speaker orbit beside the call for sessions, then every speaker as a card. */
export function Speakers() {
  return (
    <Panel id="speakers" labelledBy="speakers-title" tone="navy" className="mt-6">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Chip tone="light">Featured speakers</Chip>
          <h2 id="speakers-title" className="mt-6 text-4xl leading-[1.1] font-normal tracking-[-0.025em] text-on-dark md:text-[3.5rem]">
            Featured speakers at <Accent onDark>{event.name}.</Accent>
          </h2>
          <p className="mt-8 max-w-lg text-lg md:pl-0">{speakersNote}</p>
          <div className="mt-8">
            <ButtonLink href={mailto(emails.speakers)} variant="brand" size="lg">
              Submit a session
            </ButtonLink>
          </div>
        </div>
        <SpeakerOrbit people={speakers} />
      </div>

      <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.map((speaker) => (
          <li key={speaker.name}>
            <PersonCard person={speaker} tone="dark" />
          </li>
        ))}
      </ul>
    </Panel>
  );
}
