import { about } from "@/content/about";
import "./about.css";

const experiences = [
  { title: "Learn from practice", description: "Real-world API engineering, security insights, and technical conversations." },
  { title: "Discover what’s possible", description: "Explore APIs, developer platforms, and the people building them." },
  { title: "Build connections", description: "Meet developers, founders, and technology teams across Tanzania’s API ecosystem." },
];

export function About() {
  return (
    <div className="reference-design">
      <section id="about" aria-labelledby="about-title" className="sec sec-white about-editorial">
        <div className="content-wrap">
          <div className="about-editorial__intro">
            <div>
              <p className="about-editorial__eyebrow">The conference. The community. The possibilities.</p>
              <h2 id="about-title" className="sec-title dark">About APICon <span>Tanzania 2026</span></h2>
            </div>
            <div className="about-editorial__copy">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="about-editorial__experience" aria-label="The APICon experience">
            <p className="about-editorial__band-label">One conference. A connected ecosystem.</p>
            <ol className="about-editorial__journey">
              {experiences.map((experience, index) => (
                <li key={experience.title}>
                  <span className="about-editorial__number" aria-hidden="true">0{index + 1}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="about-editorial__purpose">
            <article>
              <span className="about-editorial__eyebrow">Where we’re going</span>
              <h3>Our vision</h3>
              <p>{about.vision}</p>
            </article>
            <article>
              <span className="about-editorial__eyebrow">How we get there</span>
              <h3>Our mission</h3>
              <p>{about.mission}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
