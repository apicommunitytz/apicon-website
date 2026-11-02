import { Icon } from "@/components/ui/icon";
import { partners, sponsorTiers } from "@/content/partners";

/** Silver, Gold and Diamond as pale catalogue cards, with current sponsors in their tier. */
export function SponsorTiers() {
  return (
    <ul className="grid gap-4 lg:grid-cols-3 lg:gap-x-8">
      {sponsorTiers.map((tier) => {
        const sponsors = partners.filter((partner) => tier.sponsors.includes(partner.name));
        return (
          <li key={tier.name} className="flex flex-col rounded-md bg-brand-pale p-6 text-ink">
            <p className="text-[0.6875rem] tracking-[0.06em] text-muted uppercase">Premium sponsorship</p>
            <h4 className="mt-1 text-3xl font-normal">{tier.name}</h4>
            <p className="mt-2 text-text">{tier.summary}</p>
            {tier.inherits && <p className="mt-5 text-sm font-semibold">{tier.inherits}</p>}
            <ul className="mt-3 space-y-2 text-[0.9375rem] text-text">
              {tier.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <Icon name="check" size={16} className="mt-1 shrink-0 text-link" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ink/15 pt-4 font-semibold">{tier.tickets}</p>
            <p className="mt-auto pt-4 text-sm text-muted">
              {sponsors.length > 0 ? `Current sponsor: ${sponsors.map((sponsor) => sponsor.name).join(", ")}` : "Open for sponsors"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
