import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-header";
import { about, gaps } from "@/content/about";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>About the conference</Eyebrow>
          <h2 id="about-title" className="mt-4 text-3xl md:text-4xl">
            Learn, showcase, discover and secure the APIs powering modern digital systems
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg">
              {paragraph}
            </p>
          ))}
          <dl className="mt-8 space-y-4 border-l-2 border-highlight pl-5">
            <div>
              <dt className="text-sm font-semibold text-ink">Vision</dt>
              <dd className="mt-1">{about.vision}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Mission</dt>
              <dd className="mt-1">{about.mission}</dd>
            </div>
          </dl>
          <Link href="/team" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Meet the organising team
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-[0.08em] text-muted uppercase">Why APICon exists</h3>
          <ol className="mt-4 divide-y divide-line border-y border-line">
            {gaps.map((gap, index) => (
              <li key={gap.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6">
                <span className="font-mono text-sm text-muted">0{index + 1}</span>
                <div>
                  <h4 className="text-xl">{gap.title}</h4>
                  <p className="mt-2 text-muted">{gap.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
