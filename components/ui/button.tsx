import clsx from "clsx";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";

type Variant = "dark" | "light" | "brand" | "grey";

const VARIANTS: Record<Variant, { base: string; icon: string }> = {
  dark: { base: "bg-navy text-on-dark hover:bg-navy-raised", icon: "text-accent" },
  light: { base: "bg-canvas text-ink hover:bg-surface", icon: "text-link" },
  brand: { base: "bg-brand-deep text-on-dark hover:bg-navy", icon: "text-accent" },
  grey: { base: "bg-pill text-ink hover:bg-line", icon: "text-link" },
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  /** Trailing icon; a chevron by default. Pass null for none. */
  icon?: IconName | null;
  /** Opens in a new tab with a screen-reader hint. */
  external?: boolean;
  /** Opens the Luma checkout overlay for this event id; the href still works without JavaScript. */
  lumaEventId?: string;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  size = "md",
  icon = "chevron-right",
  external = false,
  lumaEventId,
  className,
}: ButtonLinkProps) {
  const style = VARIANTS[variant];
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex shrink-0 items-center justify-center gap-3 rounded-control font-medium whitespace-nowrap transition-colors duration-150",
        size === "lg" ? "h-13 px-5 text-base" : "h-10 px-4 text-[0.9375rem]",
        style.base,
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(lumaEventId ? { "data-luma-action": "checkout", "data-luma-event-id": lumaEventId } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      {icon && <Icon name={icon} size={16} strokeWidth={2.5} className={style.icon} />}
    </a>
  );
}
