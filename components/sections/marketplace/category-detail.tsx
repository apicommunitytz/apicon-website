import type { ReactNode } from "react";
import type { MarketplaceCategory } from "@/content/marketplace";

type Props = { category: MarketplaceCategory; position: number; total: number; action: ReactNode };

/** The selected category: position, title, description, what it covers and an action. */
export function CategoryDetail({ category, position, total, action }: Props) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return (
    <div className="rounded-lg border border-navy-line bg-navy-raised/50 p-7 md:p-8">
      <p className="text-xs font-semibold tracking-[0.08em] text-accent uppercase">
        Category {pad(position)} of {pad(total)}
      </p>
      <h3 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-on-dark md:text-4xl">{category.title}</h3>
      <p className="mt-4 text-lg">{category.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Covers">
        {category.covers.map((item) => (
          <li key={item} className="rounded-full border border-navy-line px-3 py-1 text-sm text-on-dark">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">{action}</div>
    </div>
  );
}
