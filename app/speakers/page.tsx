import type { Metadata } from "next";
import { PersonCard } from "@/components/sections/person-card";
import { SpeakerOrbit } from "@/components/sections/speaker-orbit";
import { ButtonLink } from "@/components/ui/button";
import { Container, Panel } from "@/components/ui/section";
import { Chip } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { event } from "@/content/event";
import { speakers, speakersNote } from "@/content/speakers";

const title = "Featured speakers | APICon Tanzania 2026";
const description = `${speakers.length} featured speakers at ${event.name}, ${event.dateLabel} in ${event.venue.city}. ${speakersNote}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/speakers" },
  openGraph: { type: "website", title, description, url: "/speakers", siteName: event.name, locale: "en_TZ" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SpeakersPage() {
  return (
    <>
      <header className="overflow-hidden rounded-b-panel bg-brand text-on-dark">
        <Container className="grid items-center gap-12 pt-36 pb-16 md:pt-44 md:pb-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Chip tone="light">Featured speakers</Chip>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] text-on-dark md:text-6xl">
              The people on stage at <span className="text-ink">{event.name}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">{speakersNote}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={mailto(emails.speakers)} size="lg">
                Submit a session
              </ButtonLink>
              <ButtonLink href={event.registration.url} variant="light" size="lg" lumaEventId={event.registration.lumaEventId}>
                Register for {event.shortName}
              </ButtonLink>
            </div>
          </div>
          <SpeakerOrbit people={speakers} />
        </Container>
      </header>

      <Panel labelledBy="speakers-list-title">
        <h2 id="speakers-list-title" className="sr-only">
          All speakers
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <li key={speaker.name}>
              <PersonCard person={speaker} />
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
