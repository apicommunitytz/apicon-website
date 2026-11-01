import { Container } from "@/components/ui/section";
import { event } from "@/content/event";
import { marketplaceCategories } from "@/content/marketplace";
import { topics } from "@/content/program";
import { speakers } from "@/content/speakers";

const stats = [
  { value: String(speakers.length), label: "featured speakers,", note: "more announced soon" },
  { value: event.seats, label: "available seats", note: "for the conference day" },
  { value: String(topics.length), label: "key topics", note: "across one full day" },
  { value: String(marketplaceCategories.length), label: "showcase categories", note: "in the marketplace hub" },
];

/** Static figures under a centred heading, closing the hero panel. */
export function HeroStats() {
  return (
    <Container className="relative pb-20 md:pb-24">
      <h2 className="mx-auto max-w-3xl text-center text-3xl leading-tight font-normal tracking-[-0.025em] text-on-dark md:text-5xl">
        For Tanzania&apos;s full API and digital technology ecosystem
      </h2>
      <dl className="mt-14 grid grid-cols-2 gap-y-10 border-t border-on-dark/25 pt-10 md:mt-16 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-5xl leading-none font-light tracking-[-0.04em] text-on-dark md:text-6xl">{stat.value}</dd>
            <dd className="mt-3 text-[0.9375rem] leading-snug text-on-dark">
              {stat.label}
              <br />
              <span className="text-on-dark/75">{stat.note}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
