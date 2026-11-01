import { ButtonLink } from "@/components/ui/button";
import { Icon, type IconName } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { event, venueLabel } from "@/content/event";
import { countdownLabel } from "@/lib/format";
import { Countdown } from "./countdown";
import { HeroStats } from "./hero-stats";

/** Topic icons scattered around the headline: [icon, left %, top %]. Shown on wide screens only. */
const TILES: [IconName, number, number][] = [
  ["layers", 6, 14], ["code", 19.5, 27], ["shield", 9.5, 47], ["key", 22.5, 70], ["lock", 12.5, 87],
  ["branch", 50, 92], ["card", 67, 72], ["bot", 89, 84], ["terminal", 90, 50], ["server", 80, 27],
  ["scale", 92, 15], ["link", 33, 95],
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-b-panel bg-brand text-on-dark">
      <div className="relative pt-28 md:pt-32">
        {/* Concentric rings centred on the headline. */}
        <div aria-hidden="true" className="pointer-events-none absolute top-[28rem] left-1/2">
          {[38, 52, 66, 80].map((size) => (
            <span
              key={size}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-dark/15"
              style={{ width: `${size}rem`, height: `${size}rem` }}
            />
          ))}
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden h-[52rem] lg:block">
          {TILES.map(([icon, left, top]) => (
            <span
              key={icon}
              className="absolute inline-flex size-11 items-center justify-center rounded-md bg-canvas text-ink shadow-md shadow-ink/10"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <Icon name={icon} size={22} strokeWidth={2.25} />
            </span>
          ))}
        </div>

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
