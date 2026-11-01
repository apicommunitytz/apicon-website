import clsx from "clsx";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";

/** Uppercase status line with a live dot, above a catalogue grid. */
export function StatusLine({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.06em] text-ink uppercase md:text-base">
      <span aria-hidden="true" className="size-3 rounded-full bg-accent ring-4 ring-accent/25" />
      {children}
    </p>
  );
}

/** Centred label between two hairlines, separating groups in a catalogue. */
export function DividerLabel({ children }: { children: ReactNode }) {
  return (
    <p className="my-12 flex items-center gap-6 text-sm font-semibold tracking-[0.08em] text-ink uppercase md:text-base">
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </p>
  );
}

type CatalogueCardProps = {
  icon: IconName;
  title: string;
  label?: string;
  children?: ReactNode;
  /** `brand` for the main set, `pale` for a secondary set. */
  tone?: "brand" | "pale";
  footer?: ReactNode;
};

/** Catalogue tile: icon square, title, small caps label, body pinned to the bottom. */
export function CatalogueCard({ icon, title, label, children, tone = "brand", footer }: CatalogueCardProps) {
  const brand = tone === "brand";
  return (
    <article className={clsx("flex h-full flex-col rounded-md p-5", brand ? "bg-brand text-on-dark" : "bg-brand-pale text-ink")}>
      <div className="flex items-start gap-3">
        <span className={clsx("inline-flex size-9 shrink-0 items-center justify-center rounded", brand ? "bg-canvas text-ink" : "bg-canvas text-brand")}>
          <Icon name={icon} size={19} />
        </span>
        <div>
          <h3 className={clsx("text-xl leading-tight font-normal", brand ? "text-on-dark" : "text-ink")}>{title}</h3>
          {label && <p className={clsx("mt-1 text-[0.6875rem] tracking-[0.04em] uppercase", brand ? "text-on-dark/80" : "text-muted")}>{label}</p>}
        </div>
      </div>
      {children && <div className={clsx("mt-auto pt-8 text-[0.9375rem]", brand ? "text-on-dark" : "text-text")}>{children}</div>}
      {footer}
    </article>
  );
}
