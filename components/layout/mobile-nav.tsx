"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/icon";
import type { NavLink } from "@/content/navigation";

/** Disclosure menu for small screens. Esc or choosing a link closes it. */
export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center rounded-control text-ink transition-colors hover:bg-pill"
      >
        <Icon name={open ? "close" : "menu"} size={20} />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full mt-2 rounded-[10px] bg-canvas px-5 pb-4 shadow-lg shadow-ink/10"
      >
        <ul className="divide-y divide-line">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setOpen(false)} className="block py-4 text-base font-medium text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
