import { Icon } from "@/components/ui/icon";
import { emails, mailto } from "@/content/contacts";
import { participationModels } from "@/content/participation";
import { tzs } from "@/lib/format";

const LEVELS = [
  { key: "freemium", title: "Freemium", contact: emails.partnerships },
  { key: "premium", title: "Premium", contact: emails.sponsorships },
  { key: "addons", title: "Optional add-ons", contact: emails.sponsorships },
] as const;

/** Five ways to take part; each expands to its Freemium, Premium and add-on benefits. */
export function ParticipationModels() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {participationModels.map((model) => (
        <li key={model.name}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span className="grid flex-1 gap-2 md:grid-cols-[16rem_1fr_auto] md:items-baseline md:gap-8">
                <h4 className="text-lg">{model.name}</h4>
                <span className="text-muted">{model.description}</span>
                <span className="text-sm font-semibold whitespace-nowrap text-primary">
                  Premium {tzs(model.premiumPriceTzs)}
                </span>
              </span>
              <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-control border border-line text-ink transition-transform group-open:rotate-45">
                <Icon name="plus" size={16} />
              </span>
              <span className="sr-only">Show benefits</span>
            </summary>

            <div className="grid gap-8 pb-8 md:grid-cols-3 md:pl-[18rem]">
              {LEVELS.map((level) => (
                <div key={level.key}>
                  <h5 className="text-sm font-semibold text-ink">{level.title}</h5>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {model[level.key].map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-highlight" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a href={mailto(level.contact)} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                    Discuss {level.title.toLowerCase()}
                  </a>
                </div>
              ))}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
