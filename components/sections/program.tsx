import { CatalogueCard, DividerLabel, StatusLine } from "@/components/ui/catalogue";
import type { IconName } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { outcomes, topics } from "@/content/program";

/** One icon per topic, in content order. */
const TOPIC_ICONS: IconName[] = ["layers", "shield", "key", "branch", "terminal", "card", "bot", "scale", "alert"];
const OUTCOME_ICONS: IconName[] = ["code", "search", "users", "lock"];

/** The program as a catalogue: topic cards, then what participants leave with. */
export function Program() {
  return (
    <section id="program" aria-labelledby="program-title" className="mt-6 px-2 sm:px-2.5">
      <div className="rounded-panel bg-canvas">
        <div className="border-b border-line">
          <Container className="py-10 md:py-12">
            <h2 id="program-title" className="text-4xl font-normal tracking-[-0.025em] md:text-[2.75rem]">
              Key topics
            </h2>
          </Container>
        </div>
        <Container className="py-12 md:py-16">
          <StatusLine>{topics.length} topics · Technical sessions, workshops and demonstrations</StatusLine>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {topics.map((topic, index) => (
              <li key={topic.title}>
                <CatalogueCard icon={TOPIC_ICONS[index]} title={topic.title} label={`Topic ${String(index + 1).padStart(2, "0")}`}>
                  {topic.description}
                </CatalogueCard>
              </li>
            ))}
          </ol>

          <DividerLabel>What you leave with</DividerLabel>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <li key={outcome.title}>
                <CatalogueCard icon={OUTCOME_ICONS[index]} title={outcome.title} tone="pale">
                  {outcome.description}
                </CatalogueCard>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
