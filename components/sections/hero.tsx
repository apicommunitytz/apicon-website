import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { event, venueLabel } from "@/content/event";
import { countdownLabel } from "@/lib/format";
import { Countdown } from "./countdown";
import { HeroCircuit } from "./hero-circuit";
import { HeroStats } from "./hero-stats";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-b-panel bg-brand text-on-dark">
      <div className="relative pt-28 md:pt-32">
        <HeroCircuit />

        <Container className="relative flex min-h-[44rem] flex-col items-center justify-center pb-16 text-center md:min-h-[48rem]">
          <h1
            id="hero-title"
            className="max-w-5xl text-5xl font-semibold tracking-[-0.03em] md:text-6xl lg:text-[4.75rem] lg:leading-[1.08]"
          >
            <span className="text-on-dark">Where Tanzania&apos;s </span>
            <span className="text-ink">API Ecosystem Meets</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-on-dark md:text-xl">{event.summary}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href={event.registration.url} lumaEventId={event.registration.lumaEventId} size="lg">
              Register for {event.shortName}
            </ButtonLink>
            <ButtonLink href="#program" variant="light" size="lg">
              Explore the program
            </ButtonLink>
          </div>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base text-on-dark md:text-lg">
            <span className="inline-flex items-center gap-2">
              <Icon name="calendar" size={18} />
              {event.dateLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2">
              <Icon name="map-pin" size={18} />
              {venueLabel}
            </span>
            <span aria-hidden="true">·</span>
            <Countdown startsAt={event.startsAt} endsAt={event.endsAt} initial={countdownLabel(event.startsAt, event.endsAt)} />
          </p>
        </Container>
      </div>

      <HeroStats />
    </section>
  );
}
