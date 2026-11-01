import { Signal, Trace } from "@/components/ui/circuit";
import { CountUp } from "@/components/ui/count-up";
import { Container } from "@/components/ui/section";
import { Accent, Chip } from "@/components/ui/section-header";
import { event } from "@/content/event";
import { topics } from "@/content/program";
import { speakers } from "@/content/speakers";

const metrics = [
  { value: speakers.length, plus: false, label: "Featured speakers", status: "More announced soon" },
  { value: Number.parseInt(event.seats, 10), plus: event.seats.endsWith("+"), label: "Available seats", status: "Registration open" },
  { value: topics.length, plus: false, label: "Key topics", status: "One full day" },
];

/** One board overlapping the hero's lower edge: the audience line, then three live metrics on a shared trace. */
export function HeroGlance() {
  return (
    <section aria-labelledby="glance-title" className="relative z-10 -mt-24 px-2 sm:px-2.5 md:-mt-28">
      <Container>
        <div className="relative overflow-hidden rounded-panel bg-canvas shadow-2xl shadow-ink/15">
          <svg aria-hidden="true" viewBox="0 0 1000 12" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-3 w-full">
            <Trace points={[[0, 6], [1000, 6]]} className="stroke-line" />
            <Signal points={[[0, 6], [1000, 6]]} duration={7} className="stroke-brand" />
          </svg>
          <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div className="p-8 md:p-10">
              <Chip>At a glance</Chip>
              <h2 id="glance-title" className="mt-5 text-2xl leading-snug font-normal tracking-[-0.02em] md:text-[1.75rem]">
                For Tanzania&apos;s <Accent>full API and digital technology ecosystem</Accent>
              </h2>
            </div>
            {metrics.map((metric) => (
              <div key={metric.label} className="relative border-t border-line p-8 md:p-10 lg:border-t-0 lg:border-l">
                <span aria-hidden="true" className="absolute top-1 left-0 hidden size-2.5 -translate-x-1/2 rounded-full bg-brand ring-4 ring-canvas lg:block" />
                <p className="flex items-center gap-2 text-sm text-muted">
                  <span aria-hidden="true" className="size-2 rounded-full bg-accent ring-2 ring-accent/30" />
                  {metric.status}
                </p>
                <p className="mt-6 text-6xl leading-none font-bold tracking-[-0.04em] text-ink md:text-7xl">
                  <CountUp value={metric.value} />
                  {metric.plus && <span className="text-brand">+</span>}
                </p>
                <p className="mt-3 text-lg text-text">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
