import { CatalogueCard } from "@/components/ui/catalogue";
import { Icon, type IconName } from "@/components/ui/icon";
import { emails, mailto } from "@/content/contacts";
import { participationModels, type ParticipationModel } from "@/content/participation";
import { tzs } from "@/lib/format";

const MODEL_ICONS: IconName[] = ["bank", "store", "code", "server", "users"];

const LEVELS: { key: "freemium" | "premium" | "addons"; title: string; contact: string }[] = [
  { key: "freemium", title: "Freemium", contact: emails.partnerships },
  { key: "premium", title: "Premium", contact: emails.sponsorships },
  { key: "addons", title: "Optional add-ons", contact: emails.sponsorships },
];

function Benefits({ model }: { model: ParticipationModel }) {
  return (
    <details className="group mt-5 border-t border-on-dark/25 pt-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
        See benefits
        <Icon name="plus" size={16} className="transition-transform group-open:rotate-45" />
      </summary>
      <div className="mt-4 space-y-5">
        {LEVELS.map((level) => (
          <div key={level.key}>
            <h4 className="text-sm font-semibold text-on-dark">{level.title}</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-on-dark/90">
              {model[level.key].map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <Icon name="check" size={14} className="mt-1 shrink-0 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>
            <a href={mailto(level.contact)} className="mt-2 inline-block text-sm font-semibold text-on-dark underline underline-offset-2">
              Discuss {level.title.toLowerCase()}
            </a>
          </div>
        ))}
      </div>
    </details>
  );
}

/** The five ways to take part as catalogue cards; benefits expand inside each card. */
export function ParticipationModels() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
      {participationModels.map((model, index) => (
        <li key={model.name}>
          <CatalogueCard
            icon={MODEL_ICONS[index]}
            title={model.name}
            label={`Premium ${tzs(model.premiumPriceTzs)} · Freemium available`}
            footer={<Benefits model={model} />}
          >
            {model.description}
          </CatalogueCard>
        </li>
      ))}
    </ul>
  );
}
