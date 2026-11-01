import clsx from "clsx";
import type { ReactNode } from "react";

type EyebrowProps = { children: ReactNode; inverse?: boolean; className?: string };

/** Small uppercase label above a heading, with a brand marker. */
export function Eyebrow({ children, inverse = false, className }: EyebrowProps) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.08em] uppercase",
        inverse ? "border-band-line text-on-band-muted" : "border-line text-muted",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight" />
      {children}
    </p>
  );
}

type SectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** One call to action, aligned right on wide screens. */
  action?: ReactNode;
  inverse?: boolean;
  align?: "start" | "center";
};

/** Eyebrow, heading, one-line lead and an optional single action. */
export function SectionHeader({ id, eyebrow, title, lead, action, inverse = false, align = "start" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={clsx("mb-10 flex flex-col gap-6 md:mb-14", !centered && "lg:flex-row lg:items-end lg:justify-between")}>
      <div className={clsx("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
        <h2 id={id} className={clsx("mt-4 text-3xl md:text-4xl", inverse && "text-on-band")}>
          {title}
        </h2>
        {lead && <p className={clsx("mt-4 text-lg", inverse ? "text-on-band-muted" : "text-muted")}>{lead}</p>}
      </div>
      {action && <div className={clsx("shrink-0", centered && "mx-auto")}>{action}</div>}
    </div>
  );
}
