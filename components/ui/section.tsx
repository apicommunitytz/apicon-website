import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

/** Site column: one width for every section, with hairline frame edges on wide screens. */
export function Container({ className, framed = false, ...props }: ComponentProps<"div"> & { framed?: boolean }) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-site px-5 sm:px-8", framed && "xl:border-x xl:border-line", className)}
      {...props}
    />
  );
}

type Tone = "canvas" | "surface" | "band";

const TONES: Record<Tone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  band: "bg-band text-on-band-muted",
};

type SectionProps = {
  id?: string;
  /** id of the heading that names this section. */
  labelledBy?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

/** A page section: background tone, top hairline and vertical rhythm. */
export function Section({ id, labelledBy, tone = "canvas", className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={clsx("border-t", tone === "band" ? "border-band-line" : "border-line", TONES[tone], className)}
    >
      <Container framed={tone !== "band"} className="py-16 md:py-24">
        {children}
      </Container>
    </section>
  );
}
