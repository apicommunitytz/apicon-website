import type { Person } from "./types";

const photo = (file: string, width: number, height: number) => ({ src: `/images/team/${file}`, width, height });

export const teamIntro = {
  title: "The team behind APICon",
  lead: "Meet the people working together to grow Tanzania's API, cybersecurity, and developer ecosystem.",
};

export const team: Person[] = [
  {
    name: "Msambili Ndaga",
    role: "Founder & Community Lead",
    focus: "API Security Specialist",
    bio: "Leads the vision, strategy, and growth of APICon Tanzania while driving community engagement in APIs, DevSecOps and Cybersecurity.",
    photo: photo("msambili-ndaga.webp", 400, 400),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/msambili-ndaga-b55373229/" },
      { kind: "github", href: "https://github.com/msabenda" },
    ],
  },
  {
    name: "Gilbert Munuo",
    role: "Project Manager",
    focus: "Software Developer",
    bio: "Coordinates event planning, operations, timelines, and execution to deliver a successful and well-organized conference experience.",
    photo: photo("gilbert-munuo.webp", 540, 720),
    links: [
      { kind: "github", href: "https://github.com/gilbertmunuotz" },
      { kind: "x", href: "https://x.com/gilbertmunuotz" },
    ],
  },
  {
    name: "Yusra Abdulbastwa",
    role: "Marketing & Branding Lead",
    focus: "Communication Officer",
    bio: "Responsible for event promotions, digital campaigns, visual identity, and strengthening the APICon Tanzania brand presence.",
    photo: photo("yusra-abdulbastwa.webp", 540, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/yusra-abdulbastwa/" },
      { kind: "github", href: "https://github.com/Tech-trooper06" },
    ],
  },
  {
    name: "Tito Mwaisengela",
    role: "Developer (Technical Lead)",
    focus: "Full-Stack Developer",
    bio: "Oversees technical sessions, demonstrations, and developer-focused activities related to APIs, security, and modern technologies.",
    photo: photo("tito-mwaisengela.webp", 657, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/tito-mwaisengela-3990273a9/" },
      { kind: "github", href: "https://github.com/tito-devsec" },
    ],
  },
  {
    name: "Edgar Nyabagaka",
    role: "Community Relationship Lead",
    focus: "DevOps Engineer",
    bio: "Engages with universities, developer communities, and student organizations to strengthen collaboration and participation.",
    photo: photo("edgar-nyabagaka.webp", 720, 720),
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/edgar-jn/" },
      { kind: "github", href: "https://github.com/edgarjn" },
    ],
  },
  {
    name: "Zakia Naswabu",
    role: "Community Relationship",
    focus: "AI & ML Enthusiast",
    bio: "Supports community outreach, participant engagement, and relationship building across academic and technology ecosystems.",
    photo: photo("zakia-naswabu.webp", 575, 720),
    links: [{ kind: "linkedin", href: "https://www.linkedin.com/in/zakia-naswabu-580721375/" }],
  },
  {
    name: "Hilton Simon",
    role: "Graphic Designer & Content Creator",
    focus: "Creative Designer, Blackpentz",
    bio: "Supports creative communication, audience engagement, social media outreach, and community awareness initiatives.",
    photo: photo("hilton-simon.webp", 499, 548),
    links: [{ kind: "linkedin", href: "https://www.linkedin.com/in/hilton-simon-9303183a3/" }],
  },
];
