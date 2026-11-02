import type { Person } from "./types";

const photo = (file: string, width: number, height: number) => ({ src: `/images/speakers/${file}`, width, height });

export const speakersNote = "More speakers will be announced as sessions are confirmed.";

export const speakers: Person[] = [
  {
    name: "Tachera W Sasi",
    role: "Backend & Infra Engineer",
    affiliation: "Akilisoft Limited",
    photo: photo("tachera-w-sasi.webp", 720, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/tachera-w-sasi-506307286/" },
      { kind: "github", href: "https://github.com/tacheraSasi" },
    ],
  },
  {
    name: "Jonas Mwambimbi",
    role: "Software Developer",
    affiliation: "Creator of ChaCC API",
    photo: photo("jonas-mwambimbi.webp", 720, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/jonas-mwambimbi/" },
      { kind: "github", href: "https://github.com/Jonas1015" },
    ],
  },
  {
    name: "Deogratius Diu",
    role: "Cybersecurity GRC Expert",
    affiliation: "Softnet Technologies",
    photo: photo("deogratius-diu.webp", 508, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/deogratius-diu-0254901b0/" },
      { kind: "github", href: "https://github.com/Denis-Kingston" },
    ],
  },
  {
    name: "Justine Mahinyila",
    role: "Solutions Architect",
    affiliation: "Mixx by Yas",
    photo: photo("justine-mahinyila.webp", 655, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/justinecodez/" },
      { kind: "website", href: "https://www.justinecodez.com/" },
    ],
  },
  {
    name: "Peter Lymo",
    role: "Offensive Security Lead",
    affiliation: "Sanifu Organization",
    photo: photo("peter-lymo.webp", 502, 688),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/peterlymo/" },
      { kind: "github", href: "https://github.com/peterlymo" },
    ],
  },
  {
    name: "Joshua Mshana",
    role: "Senior Software Developer",
    affiliation: "Smartstock SuperApp",
    photo: photo("joshua-mshana.webp", 720, 651),
    links: [{ kind: "linkedin", href: "https://www.linkedin.com/in/joshua-mshana-3ba823334/" }],
  },
  {
    name: "Gift Msigwa",
    role: "Assistant Lecturer",
    affiliation: "DIT",
    photo: photo("gift-msigwa.webp", 589, 720),
    links: [],
  },
  {
    name: "Erick Alex",
    role: "Security Researcher",
    affiliation: "CTF Zone",
    photo: photo("erick-alex.webp", 594, 720),
    links: [],
  },
];
