import type { Metadata } from "next";
import { PersonCard } from "@/components/sections/person-card";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-header";
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
      <header className="border-b border-line bg-surface">
        <Container framed className="py-16 md:py-20">
          <Eyebrow>Organising team</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl">{teamIntro.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{teamIntro.lead}</p>
        </Container>
      </header>

      <Section labelledBy="team-title">
        <h2 id="team-title" className="sr-only">
          Team members
        </h2>
        <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name}>
              <PersonCard person={person} showBio />
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-ink">Want to help organise or volunteer at {event.shortName}?</p>
          <ButtonLink href={mailto(emails.support)} variant="secondary" icon="mail">
            Get in touch
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
