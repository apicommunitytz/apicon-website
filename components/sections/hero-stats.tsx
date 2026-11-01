import { Container } from "@/components/ui/section";
import { event } from "@/content/event";
import { topics } from "@/content/program";
import { speakers } from "@/content/speakers";

const stats = [
  { value: String(speakers.length), label: "Featured speakers", tag: "More announced soon" },
  { value: event.seats.replace("+", ""), plus: event.seats.endsWith("+"), label: "Available seats", tag: "Registration open" },
  { value: String(topics.length), label: "Key topics", tag: "One full day" },
];

/** Big numbers on white cards with a 45° chamfered corner and a status chip, inside the hero panel. */
export function HeroStats() {
  return (
    <Container className="relative pb-20 md:pb-24">
      <h2 className="mx-auto max-w-4xl text-center text-3xl font-normal tracking-[-0.025em] text-on-dark md:text-[3.25rem] md:leading-[1.15]">
        For Tanzania&apos;s <span className="text-ink">full API and digital technology ecosystem</span>
      </h2>
      <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {stats.map((stat) => (
          <li key={stat.label} className="relative">
            <div className="relative h-full bg-canvas px-7 pt-7 pb-8 [clip-path:polygon(0_0,100%_0,100%_calc(100%-3rem),calc(100%-3rem)_100%,0_100%)]">
              <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-text">
                <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
                {stat.tag}
              </p>
              <p className="mt-8 text-7xl leading-none font-bold tracking-[-0.04em] text-ink md:text-[6.5rem]">
                {stat.value}
                {stat.plus && <span className="text-brand">+</span>}
              </p>
              <p className="mt-4 text-2xl text-text">{stat.label}</p>
            </div>
            {/* Pad on the chamfered corner, echoing the logo's circuit terminals. */}
            <span aria-hidden="true" className="absolute right-[1.125rem] bottom-[1.125rem] size-3 rounded-full bg-accent ring-4 ring-brand" />
          </li>
        ))}
      </ul>
    </Container>
  );
}
