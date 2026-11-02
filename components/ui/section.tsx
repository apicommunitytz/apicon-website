import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

/** Site column: one width for every section. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={clsx("mx-auto w-full max-w-site px-5 sm:px-8", className)} {...props} />;
}

export type Tone = "page" | "canvas" | "brand" | "navy";

const TONES: Record<Tone, string> = {
  page: "bg-page",
  canvas: "bg-canvas",
  brand: "bg-brand text-on-dark",
  navy: "bg-navy text-on-dark-muted",
};

type PanelProps = {
  id?: string;
  /** id of the heading that names this section. */
  labelledBy?: string;
  tone?: Tone;
  /** Rounded panel inset from the page edge; set false for a full-bleed band. */
  inset?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

/** A page section drawn as a coloured panel on the grey page. */
export function Panel({ id, labelledBy, tone = "page", inset = true, className, innerClassName, children }: PanelProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={clsx(inset && tone !== "page" && "px-2 sm:px-2.5", className)}>
      <div className={clsx(TONES[tone], inset && tone !== "page" && "rounded-panel")}>
        <Container className={clsx("py-16 md:py-24", innerClassName)}>{children}</Container>
      </div>
    </section>
  );
}
