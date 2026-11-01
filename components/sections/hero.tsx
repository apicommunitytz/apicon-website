import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-header";
import { event, venueLabel } from "@/content/event";
import { speakers } from "@/content/speakers";
import { countdownLabel, timeRange } from "@/lib/format";
import { Countdown } from "./countdown";
import { EventCard } from "./event-card";

export function Hero() {
  const facts: { label: string; icon?: IconName; value: string; detail: ReactNode }[] = [
    {
      label: "Date",
      icon: "calendar",
      value: event.dateLabel,
      detail: <Countdown startsAt={event.startsAt} endsAt={event.endsAt} initial={countdownLabel(event.startsAt, event.endsAt)} />,
    },
    { label: "Time", value: timeRange(event.startsAt, event.endsAt), detail: "One-day conference" },
    { label: "Venue", icon: "map-pin", value: event.venue.name, detail: `${event.venue.city}, ${event.venue.country}` },
    { label: "Speakers", value: `${speakers.length} confirmed`, detail: `${event.seats} seats` },
  ];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-canvas">
      {/* Faint blueprint grid behind the content; fades out towards the edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <Container framed className="relative">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>
              {event.shortDateLabel} · {venueLabel}
            </Eyebrow>
            <h1 id="hero-title" className="mt-6 text-4xl md:text-5xl">
              {event.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{event.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={event.registration.url} lumaEventId={event.registration.lumaEventId}>
                Register for {event.shortName}
              </ButtonLink>
              <ButtonLink href="#program" variant="secondary" icon={null}>
                See the program
              </ButtonLink>
            </div>
          </div>
          <EventCard />
        </div>

        <dl className="grid grid-cols-2 gap-px border-t border-line bg-line lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 bg-canvas py-6 pr-5 even:pl-5 lg:pl-8 lg:first:pl-0">
              <dt className="flex items-center gap-2 text-xs font-medium tracking-[0.08em] text-muted uppercase">
                {fact.icon && <Icon name={fact.icon} size={14} />}
                {fact.label}
              </dt>
              <dd className="text-base font-semibold text-ink">{fact.value}</dd>
              <dd className="text-sm text-muted">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
