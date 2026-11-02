"use client";

import clsx from "clsx";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Slides the header away while scrolling down and brings it back on any upward scroll.
 * It stays visible near the top of the page and while anything inside it has focus.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (y < 96) setHidden(false);
        else if (delta > 6) setHidden(true);
        else if (delta < -6) setHidden(false);
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={clsx(
          "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out focus-within:translate-y-0",
          hidden && "-translate-y-[calc(100%+6rem)]",
        )}
      >
        {children}
      </div>
    </header>
  );
}
