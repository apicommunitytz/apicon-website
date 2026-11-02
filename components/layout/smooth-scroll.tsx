"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

/**
 * Inertial wheel scrolling for the whole page. In-page links glide to their section and stop
 * below the floating header. Off for people who prefer reduced motion; touch scrolling stays native.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -88 }, autoRaf: true });
    return () => lenis.destroy();
  }, []);
  return null;
}
