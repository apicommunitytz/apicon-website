import { Inter } from "next/font/google";

// Self-hosted at build time; the browser never calls Google.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
