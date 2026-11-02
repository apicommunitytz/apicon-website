"use client";

import { usePathname } from "next/navigation";
import { useLegacyInteractions } from "./use-reference-interactions";

export function ReferenceInteractions() {
  const pathname = usePathname();
  useLegacyInteractions(pathname);
  return null;
}
