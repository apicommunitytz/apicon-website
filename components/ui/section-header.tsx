import clsx from "clsx";
import type { ReactNode } from "react";

type ChipProps = { children: ReactNode; tone?: "brand" | "light"; filled?: boolean; className?: string };

/** Small uppercase label in a thin rectangle; `filled` for chips that sit on a panel edge. */
export function Chip({ children, tone = "brand", filled = false, className }: ChipProps) {
  return (
    <p
      className={clsx(
        "inline-block rounded-[3px] border px-3 py-1 text-xs leading-5 font-medium tracking-[0.06em] uppercase",
        filled
          ? "border-brand-deep bg-brand-deep text-on-dark"
          : tone === "light"
            ? "border-on-dark/70 text-on-dark"
            : "border-brand/50 bg-canvas/40 text-link",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** The second colour in a two-tone heading. */
export function Accent({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return <span className={onDark ? "text-accent" : "text-brand dark:text-link"}>{children}</span>;
}

type SectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** One call to action, aligned right on wide screens. */
  action?: ReactNode;
  onDark?: boolean;
  weight?: "regular" | "bold";
  className?: string;
};

/** Chip, large heading, lead and an optional single action on the same row. */
export function SectionHeader({ id, eyebrow, title, lead, action, onDark = false, weight = "regular", className }: SectionHeaderProps) {
  return (
    <div className={clsx("mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow && <Chip tone={onDark ? "light" : "brand"}>{eyebrow}</Chip>}
        <h2
          id={id}
          className={clsx(
            "mt-5 text-4xl md:text-5xl",
            weight === "bold" ? "font-bold" : "font-normal tracking-[-0.025em]",
            onDark && "text-on-dark",
          )}
        >
          {title}
        </h2>
        {lead && <p className={clsx("mt-5 text-lg", onDark ? "text-on-dark-muted" : "text-muted")}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
