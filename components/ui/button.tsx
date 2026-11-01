import clsx from "clsx";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";

type Variant = "primary" | "secondary" | "inverse" | "inverse-outline";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-hover",
  secondary: "border border-line bg-canvas text-ink hover:border-ink",
  inverse: "bg-on-band text-band hover:bg-on-band-muted",
  "inverse-outline": "border border-band-line text-on-band hover:border-on-band",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Trailing icon; defaults to an arrow. Pass null for none. */
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
  variant = "primary",
  icon = "arrow-right",
  external = false,
  lumaEventId,
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-control px-5 text-sm font-semibold whitespace-nowrap transition-colors duration-150",
        VARIANTS[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(lumaEventId ? { "data-luma-action": "checkout", "data-luma-event-id": lumaEventId } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      {icon && <Icon name={icon} size={16} />}
    </a>
  );
}
