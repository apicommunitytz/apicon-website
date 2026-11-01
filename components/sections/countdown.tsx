"use client";

import { useEffect, useState } from "react";
import { countdownLabel } from "@/lib/format";

/**
 * Days until the event. The server renders the label at build time; the client refreshes it
 * on load and every minute. Not a live region, so screen readers are not interrupted.
 */
export function Countdown({ startsAt, endsAt, initial }: { startsAt: string; endsAt: string; initial: string }) {
  const [label, setLabel] = useState(initial);

  useEffect(() => {
    const update = () => setLabel(countdownLabel(startsAt, endsAt));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, [startsAt, endsAt]);

  return <span suppressHydrationWarning>{label}</span>;
}
