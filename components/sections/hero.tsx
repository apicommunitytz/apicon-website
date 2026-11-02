import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { event, venueLabel } from "@/content/event";
import { ConferenceCountdown } from "./conference-countdown";
import { HeroCircuit } from "./hero-circuit";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="landing-hero relative overflow-hidden rounded-b-panel bg-hero-background text-on-dark">
      <div className="relative pt-28 md:pt-32">
        <HeroCircuit />

        <Container className="relative flex min-h-[44rem] flex-col items-center justify-center pb-24 text-center md:min-h-[48rem]">
          <h1
            id="hero-title"
            className="max-w-5xl text-5xl font-semibold tracking-[-0.03em] md:text-6xl lg:text-[4.75rem] lg:leading-[1.08]"
          >
            <span className="text-on-dark">Where Tanzania&apos;s </span>
            <span className="text-hero-accent">API Ecosystem Meets</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-on-dark md:text-xl">{event.summary}</p>
          <div className="mt-8 flex w-full justify-center">
            <ConferenceCountdown />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href={event.registration.url} lumaEventId={event.registration.lumaEventId} size="lg" className="hero-register">
              Register for {event.shortName}
            </ButtonLink>
            <ButtonLink href="#topics" variant="light" size="lg" className="hero-program">
              Explore the program
            </ButtonLink>
          </div>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base text-on-dark md:text-lg">
            <span className="inline-flex items-center gap-2">
              <Icon name="calendar" size={18} className="text-hero-accent" />
              {event.dateLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2">
              <Icon name="map-pin" size={18} className="text-hero-accent" />
              {venueLabel}
            </span>
          </p>
        </Container>
      </div>

    </section>
  );
}
