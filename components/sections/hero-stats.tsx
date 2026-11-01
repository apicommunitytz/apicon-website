import { Container } from "@/components/ui/section";
import { event } from "@/content/event";
import { topics } from "@/content/program";
import { speakers } from "@/content/speakers";

const stats = [
  { value: String(speakers.length), label: "Featured speakers", tag: "More announced soon" },
  { value: event.seats.replace("+", ""), plus: event.seats.endsWith("+"), label: "Available seats", tag: "Registration open" },
  { value: String(topics.length), label: "Key topics", tag: "One full day" },
];

/** Big numbers on white cards with a folder-tab notch and a pill tag, inside the hero panel. */
export function HeroStats() {
  return (
    <Container className="relative pb-20 md:pb-24">
      <h2 className="mx-auto max-w-4xl text-center text-3xl font-normal tracking-[-0.025em] text-on-dark md:text-[3.25rem] md:leading-[1.15]">
        For Tanzania&apos;s <span className="text-ink">full API and digital technology ecosystem</span>
      </h2>
      <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {stats.map((stat) => (
          <li key={stat.label} className="relative">
            <span className="absolute -top-5 right-0 z-10 rounded-full border border-line bg-pill px-4 py-2 text-[0.9375rem] text-ink ring-[6px] ring-brand md:-right-3">
              {stat.tag}
            </span>
            <div className="rounded-md bg-canvas px-6 pt-10 pb-6 [clip-path:polygon(0_0,100%_0,100%_78%,72%_78%,67%_100%,0_100%)]">
              <p className="text-7xl leading-none font-bold tracking-[-0.04em] text-ink md:text-[6.5rem]">
                {stat.value}
                {stat.plus && <span className="text-brand">+</span>}
              </p>
              <p className="mt-4 text-2xl text-text">{stat.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
