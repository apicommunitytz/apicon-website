import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { outcomes, topics } from "@/content/program";

export function Program() {
  return (
    <Section id="program" labelledBy="program-title" tone="surface">
      <SectionHeader
        id="program-title"
        eyebrow="Program"
        title="Key topics"
        lead={`Technical sessions, workshops and real-world demonstrations across ${topics.length} areas.`}
      />

      <ol className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <li key={topic.title} className="flex flex-col gap-3 bg-canvas p-6 md:p-8">
            <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-xl">{topic.title}</h3>
            <p className="text-muted">{topic.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="text-sm font-medium tracking-[0.08em] text-muted uppercase">What you leave with</h3>
        <dl className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="border-t border-line pt-5">
              <dt className="font-semibold text-ink">{outcome.title}</dt>
              <dd className="mt-2 text-sm text-muted">{outcome.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
