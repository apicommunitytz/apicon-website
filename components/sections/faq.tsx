import { Icon } from "@/components/ui/icon";
import { Panel } from "@/components/ui/section";
import { Chip } from "@/components/ui/section-header";
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
        className="font-semibold text-link underline underline-offset-2"
        {...(part.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {part.text}
        {part.external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    ),
  );
}

/** Narrow label column; numbered questions with square toggles on the right. */
export function Faq() {
  return (
    <Panel id="faq" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_2.6fr] lg:gap-16">
        <div>
          <Chip>FAQs</Chip>
          <h2 id="faq-title" className="mt-5 text-3xl font-normal tracking-[-0.02em] md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted">
            Still have a question?{" "}
            <a href={mailto(emails.support)} className="font-semibold text-link hover:underline">
              {emails.support}
            </a>
          </p>
        </div>

        <ol className="border-t border-line">
          {faq.map((item, index) => (
            <li key={item.question} className="border-b border-line">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 pt-1 text-sm text-link">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-xl text-ink md:text-2xl">{item.question}</span>
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded bg-brand text-on-dark transition-transform group-open:rotate-45">
                    <Icon name="plus" size={18} />
                  </span>
                </summary>
                <p className="pr-14 pb-7 pl-13 text-lg text-text">
                  <RichText parts={item.answer} />
                </p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </Panel>
  );
}
