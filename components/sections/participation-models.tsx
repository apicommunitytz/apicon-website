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
            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 py-6 md:grid-cols-[16rem_1fr_auto_auto] md:items-baseline md:gap-x-8 [&::-webkit-details-marker]:hidden">
              <h4 className="text-lg">{model.name}</h4>
              <span className="order-3 col-span-2 text-muted md:order-none md:col-span-1">{model.description}</span>
              <span className="order-4 col-span-2 text-sm font-semibold whitespace-nowrap text-primary md:order-none md:col-span-1">
                Premium {tzs(model.premiumPriceTzs)}
              </span>
              <span className="inline-flex size-8 items-center justify-center self-start rounded-control border border-line text-ink transition-transform group-open:rotate-45">
                <Icon name="plus" size={16} />
                <span className="sr-only">Show benefits</span>
              </span>
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
