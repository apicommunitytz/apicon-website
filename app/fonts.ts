import localFont from "next/font/local";

// Inter (variable weight, Latin subset) ships with the repo, so builds never need to reach Google Fonts.
// Licence: SIL Open Font License 1.1, see app/fonts/Inter-OFL.txt.
export const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});
