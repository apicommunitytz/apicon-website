"use client";

import { Icon } from "@/components/ui/icon";

const STORAGE_KEY = "apicon-theme";

/** Inline script for <head>: applies the saved theme before first paint. */
export const themeBootstrapScript = `try{if(localStorage.getItem('${STORAGE_KEY}')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`;

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const dark = root.getAttribute("data-theme") !== "dark";
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  };

  // Both icons render on the server; CSS shows the right one, so there is no hydration mismatch.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch colour theme"
      className="inline-flex size-10 items-center justify-center rounded-control text-ink transition-colors hover:bg-pill"
    >
      <Icon name="moon" size={18} className="dark:hidden" />
      <Icon name="sun" size={18} className="hidden dark:block" />
    </button>
  );
}
