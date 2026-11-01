"use client";

import clsx from "clsx";
import { useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { Pad, Signal, Trace } from "@/components/ui/circuit";
import { Icon, type IconName } from "@/components/ui/icon";
import type { MarketplaceCategory } from "@/content/marketplace";
import { JsonCard, type Json } from "../json-card";
import { CategoryDetail } from "./category-detail";

type Props = {
  categories: MarketplaceCategory[];
  icons: IconName[];
  facts: Record<string, Json>;
  /** Action shown in the detail card. */
  action: ReactNode;
};

/** Categories as rows on a vertical bus; the selected row sends a signal across to its detail and JSON. */
export function Switchboard({ categories, icons, facts, action }: Props) {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const base = useId();
  const category = categories[active];

  const onKeyDown = (event: KeyboardEvent) => {
    const step = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + categories.length) % categories.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[20rem_4.5rem_1fr] lg:gap-0">
      <div role="tablist" aria-label="Marketplace categories" aria-orientation="vertical" onKeyDown={onKeyDown} className="relative flex flex-col gap-3 self-start pl-10">
        <span aria-hidden="true" className="absolute top-10 bottom-10 left-3 w-0.5 bg-navy-line" />
        {categories.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.title}
              ref={(node) => { tabs.current[index] = node; }}
              id={`${base}-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${base}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={clsx(
                "relative flex h-20 items-center gap-4 rounded-lg border px-4 text-left transition-colors",
                selected ? "border-accent/70 bg-navy-raised" : "border-navy-line hover:border-on-dark-muted",
              )}
            >
              <span aria-hidden="true" className={clsx("absolute top-1/2 -left-[1.69rem] h-0.5 w-[1.69rem]", selected ? "bg-accent" : "bg-navy-line")} />
              <span
                aria-hidden="true"
                className={clsx(
                  "absolute top-1/2 -left-[2.06rem] size-3 -translate-y-1/2 rounded-full",
                  selected ? "bg-accent ring-4 ring-accent/25" : "border-2 border-navy-line bg-navy",
                )}
              />
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-canvas text-ink">
                <Icon name={icons[index]} size={20} />
              </span>
              <span>
                <span className="block text-lg leading-tight text-on-dark">{item.title}</span>
                <span className="block text-sm text-on-dark-muted">{item.covers.slice(0, 2).join(", ")}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative hidden lg:block" aria-hidden="true">
        <svg
          viewBox="0 0 72 24"
          className="absolute left-0 h-6 w-full transition-[top] duration-300"
          style={{ top: `calc(${active} * 5.75rem + 2.5rem - 0.75rem)`, "--pad-fill": "var(--navy)" } as CSSProperties}
        >
          <Trace points={[[6, 12], [66, 12]]} className="stroke-accent/70" />
          <Signal points={[[6, 12], [66, 12]]} duration={1.6} />
          <Pad at={[6, 12]} hollow r={4} className="stroke-accent" />
          <Pad at={[66, 12]} hollow r={4} className="stroke-accent" />
        </svg>
      </div>

      <div id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-tab-${active}`} className="grid items-start gap-6 xl:grid-cols-2">
        <CategoryDetail category={category} position={active + 1} total={categories.length} action={action} />
        <JsonCard data={{ category: category.title, covers: category.covers, ...facts }} label={`/marketplace/categories/${active + 1}`} />
      </div>
    </div>
  );
}
