"use client";

import clsx from "clsx";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icon";
import type { MarketplaceCategory } from "@/content/marketplace";
import type { Titled } from "@/content/types";
import type { Json } from "../json-card";
import { HubDiagram } from "./hub-diagram";

type Props = {
  categories: MarketplaceCategory[];
  icons: IconName[];
  steps: Titled[];
  facts: Record<string, Json>;
  /** Right-hand headline and action, shared by every category. */
  aside: ReactNode;
  /** Button that ends the tab row. */
  trailing: ReactNode;
};

/** Tab cards that switch the featured category, its description and its diagram (WAI-ARIA tabs). */
export function CategoryTabs({ categories, icons, steps, facts, aside, trailing }: Props) {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const base = useId();
  const category = categories[active];

  const onKeyDown = (event: KeyboardEvent) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + categories.length) % categories.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div role="tablist" aria-label="Marketplace categories" onKeyDown={onKeyDown} className="grid flex-1 gap-4 sm:grid-cols-3">
          {categories.map((item, index) => (
            <button
              key={item.title}
              ref={(node) => { tabs.current[index] = node; }}
              id={`${base}-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={index === active}
              aria-controls={`${base}-panel`}
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
              className={clsx(
                "flex items-center gap-4 rounded-md border px-4 py-3 text-left transition-colors",
                index === active ? "border-accent/70 bg-navy-raised" : "border-navy-line hover:border-on-dark-muted",
              )}
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-canvas text-ink">
                <Icon name={icons[index]} size={18} />
              </span>
              <span>
                <span className="block text-lg leading-tight text-on-dark">{item.title}</span>
                <span className="block text-sm text-on-dark-muted">{item.covers.slice(0, 2).join(", ")}</span>
              </span>
            </button>
          ))}
        </div>
        {trailing}
      </div>

      <div id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-tab-${active}`} className="mt-20 md:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h3 className="text-5xl font-medium tracking-[-0.03em] text-on-dark md:text-[4rem] md:leading-none">{category.title}</h3>
            <p className="mt-6 max-w-xl text-xl text-on-dark">{category.description} {steps[1].description}</p>
          </div>
          <div>{aside}</div>
        </div>

        <div className="mt-20">
          <HubDiagram
            icon={icons[active]}
            label={`/marketplace/categories/${active + 1}`}
            data={{ category: category.title, covers: category.covers, ...facts }}
            left={steps[0]}
            right={steps[2]}
          />
        </div>
      </div>
    </>
  );
}
