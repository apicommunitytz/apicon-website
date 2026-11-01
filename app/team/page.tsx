import type { Metadata } from "next";
import { PersonCard } from "@/components/sections/person-card";
import { ButtonLink } from "@/components/ui/button";
import { Container, Panel } from "@/components/ui/section";
import { Chip } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { event } from "@/content/event";
import { team, teamIntro } from "@/content/team";

const title = "Organising team | APICon Tanzania 2026";
const description = `${teamIntro.lead} The organisers of ${event.name}, ${event.dateLabel} in ${event.venue.city}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/team" },
  openGraph: { type: "website", title, description, url: "/team", siteName: event.name, locale: "en_TZ" },
  twitter: { card: "summary_large_image", title, description },
};

export default function TeamPage() {
  return (
    <>
      <header className="rounded-b-panel bg-brand text-on-dark">
        <Container className="pt-36 pb-20 md:pt-44 md:pb-24">
          <Chip tone="light">Organising team</Chip>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
            The team <span className="text-ink">behind APICon</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl">{teamIntro.lead}</p>
        </Container>
      </header>

      <Panel labelledBy="team-title">
        <h2 id="team-title" className="sr-only">
          Team members
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name}>
              <PersonCard person={person} showBio />
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-6 rounded-panel bg-navy p-8 text-on-dark md:flex-row md:items-center md:justify-between md:p-10">
          <p className="text-2xl md:text-3xl">Want to help organise or volunteer at {event.shortName}?</p>
          <ButtonLink href={mailto(emails.support)} variant="light" size="lg">
            Get in touch
          </ButtonLink>
        </div>
      </Panel>
    </>
  );
}
