"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";

const KEY = "apicon-announcement-dismissed";

type Props = { message: string; actionLabel: string; href: string; lumaEventId?: string };

/** One message and one action across the top; dismissal lasts for the browser session. */
export function AnnouncementBar({ message, actionLabel, href, lumaEventId }: Props) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    try {
      // Restoring a stored preference on mount is the intended effect here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (sessionStorage.getItem(KEY)) setHidden(true);
    } catch {
      // Storage blocked: keep showing the bar.
    }
  }, []);

  if (hidden) return null;

  const dismiss = () => {
    setHidden(true);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  };

  return (
    <div className="relative bg-brand-deep text-on-dark">
      <div className="mx-auto flex min-h-12 max-w-site items-center justify-center gap-4 px-12 py-2 text-center sm:px-14">
        <p className="text-sm font-semibold sm:text-[0.9375rem]">{message}</p>
        <a
          href={href}
          {...(lumaEventId ? { "data-luma-action": "checkout", "data-luma-event-id": lumaEventId } : {})}
          className="hidden shrink-0 rounded-control bg-canvas px-3 py-1.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-pill sm:inline-block dark:text-ink"
        >
          {actionLabel}
        </a>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="absolute top-1/2 right-3 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-control text-on-dark/80 hover:text-on-dark"
      >
        <Icon name="close" size={18} label="Dismiss announcement" />
      </button>
    </div>
  );
}
