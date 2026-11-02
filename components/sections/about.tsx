import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Panel } from "@/components/ui/section";
import { about, gaps } from "@/content/about";
import { event, venueLabel } from "@/content/event";
import { topics } from "@/content/program";
import { TopicSlab } from "./about/topic-slab";

const CARD_TONES = {
  surface: { card: "bg-surface", eyebrow: "text-muted", title: "text-brand dark:text-link", body: "text-text" },
  navy: { card: "bg-navy", eyebrow: "text-on-dark-muted", title: "text-on-dark", body: "text-on-dark-muted" },
  brand: { card: "bg-brand", eyebrow: "text-on-dark/80", title: "text-on-dark", body: "text-on-dark" },
};

export function About() {
  const cards = [
    { tone: CARD_TONES.surface, eyebrow: "Our vision", title: "A strong and secure API ecosystem", body: about.vision },
    { tone: CARD_TONES.navy, eyebrow: "Our mission", title: "Advance practical API knowledge", body: about.mission },
  ];

  return (
    <Panel id="about" labelledBy="about-title" tone="canvas" className="mt-6">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="about-title" className="text-5xl leading-[1.08] font-normal tracking-[-0.03em] md:text-6xl">
            From knowledge <span className="text-brand dark:text-link">to impact.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-text">{about.paragraphs[0]}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href={event.registration.url} variant="brand" size="lg" lumaEventId={event.registration.lumaEventId}>
              Register for {event.shortName}
            </ButtonLink>
            <span className="text-sm text-muted">
              {event.shortDateLabel} · {venueLabel}
            </span>
          </div>
          <div className="mt-14">
            <TopicSlab topicCount={topics.length} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {cards.map((card) => (
            <article key={card.eyebrow} className={`rounded-md p-7 md:p-8 ${card.tone.card}`}>
              <p className={`text-sm tracking-[0.04em] uppercase ${card.tone.eyebrow}`}>{card.eyebrow}</p>
              <h3 className={`mt-2 text-2xl font-medium md:text-[1.75rem] ${card.tone.title}`}>{card.title}</h3>
              <p className={`mt-6 text-[1.0625rem] ${card.tone.body}`}>{card.body}</p>
            </article>
          ))}
          <article className={`rounded-md p-7 md:p-8 ${CARD_TONES.brand.card}`}>
            <p className={`text-sm tracking-[0.04em] uppercase ${CARD_TONES.brand.eyebrow}`}>Why APICon</p>
            <h3 className="mt-2 text-2xl font-medium text-on-dark md:text-[1.75rem]">Three connected ecosystem gaps</h3>
            <ul className="mt-6 space-y-4">
              {gaps.map((gap) => (
                <li key={gap.title} className="flex gap-3 text-on-dark">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    <strong className="font-semibold">{gap.title}.</strong> {gap.description}
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <Link href="/team" className="mt-2 inline-flex items-center gap-2 self-start text-base font-semibold text-link hover:underline">
            Meet the organising team
            <Icon name="chevron-right" size={18} />
          </Link>
        </div>
      </div>
    </Panel>
  );
}
