import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-header";
import { emails, mailto } from "@/content/contacts";
import { faq } from "@/content/faq";
import type { RichPart } from "@/content/types";

function RichText({ parts }: { parts: RichPart[] }) {
  return parts.map((part, index) =>
    typeof part === "string" ? (
      part
    ) : (
      <a
        key={index}
        href={part.href}
        className="font-semibold text-primary underline underline-offset-2"
        {...(part.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {part.text}
        {part.external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    ),
  );
}

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className="mt-4 text-3xl md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted">
            Still have a question? Write to{" "}
            <a href={mailto(emails.support)} className="font-semibold text-primary hover:underline">
              {emails.support}
            </a>
          </p>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {faq.map((item, index) => (
            <li key={item.question}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 pt-0.5 font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-lg font-medium text-ink">{item.question}</span>
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-control border border-line text-ink transition-transform group-open:rotate-45">
                    <Icon name="plus" size={16} />
                  </span>
                </summary>
                <p className="pr-12 pb-6 pl-12 text-muted">
                  <RichText parts={item.answer} />
                </p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
