import clsx from "clsx";

const FILES = {
  // Full artwork with its circuit lines.
  full: { light: "/brand/logo.svg", dark: "/brand/logo-white.svg", width: 752, height: 387 },
  // Cropped to the letters so the wordmark reads at navigation size.
  nav: { light: "/brand/logo-nav.svg", dark: "/brand/logo-nav-white.svg", width: 752, height: 191 },
};

type LogoProps = { variant?: keyof typeof FILES; inverse?: boolean; className?: string };

/** APICon logo; swaps to the light artwork in dark theme or on dark panels. */
export function Logo({ variant = "full", inverse = false, className }: LogoProps) {
  const file = FILES[variant];
  const size = { width: file.width, height: file.height };
  return (
    <span className={clsx("inline-flex", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
      <img src={file.light} alt="APICon Tanzania" {...size} className={clsx("h-full w-auto", inverse ? "hidden" : "dark:hidden")} />
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
      <img src={file.dark} alt="APICon Tanzania" {...size} className={clsx("h-full w-auto", inverse ? "block" : "hidden dark:block")} />
    </span>
  );
}
