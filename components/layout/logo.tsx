import clsx from "clsx";

/** Full-colour logo; swaps to the light artwork on dark backgrounds. */
export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  const size = { width: 752, height: 387 };
  return (
    <span className={clsx("inline-flex", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
      <img src="/brand/logo.svg" alt="APICon Tanzania" {...size} className={clsx("h-full w-auto", inverse ? "hidden" : "dark:hidden")} />
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
      <img src="/brand/logo-white.svg" alt="APICon Tanzania" {...size} className={clsx("h-full w-auto", inverse ? "block" : "hidden dark:block")} />
    </span>
  );
}
