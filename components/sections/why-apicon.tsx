import { Logo } from "@/components/layout/logo";
import { GearRing } from "@/components/ui/circuit";
import { Icon, type IconName } from "@/components/ui/icon";
import { gaps } from "@/content/about";
import "./why-apicon.css";

const icons: IconName[] = ["graduation", "search", "users"];

export function WhyApicon() {
  return (
    <div className="reference-design">
      <section id="why-apicon" aria-labelledby="gap-title" className="sec sec-white gap-section why-connected">
        <div className="section-center">
          <h2 id="gap-title" className="sec-title dark">Why APICon Tanzania 2026</h2>
          <p className="sec-sub">One connected ecosystem. Three gaps we bridge together.</p>
        </div>

        <div className="why-orbit">
          <svg className="why-orbit__connections" viewBox="0 0 1120 620" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none">
              <path d="M560 205V140 M450 355 300 420 M670 355 820 420" className="why-orbit__trace" />
              <path d="M560 205V140 M450 355 300 420 M670 355 820 420" className="why-orbit__signal" />
            </g>
            {[[560, 140], [300, 420], [820, 420]].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="5" className="why-orbit__terminal" />
            ))}
          </svg>

          <div className="why-orbit__hub">
            <svg className="why-orbit__ring" viewBox="0 0 300 300" aria-hidden="true">
              <g className="why-orbit__spin">
                <GearRing cx={150} cy={150} r={132} className="why-orbit__gear" />
              </g>
            </svg>
            <div className="why-orbit__brand">
              <Logo variant="nav" inverse className="why-orbit__logo" />
              <span>Connecting the ecosystem</span>
            </div>
          </div>

          <ol className="why-orbit__gaps">
            {gaps.map((gap, index) => (
              <li key={gap.title} className={`why-orbit__card why-orbit__card--${index + 1}`}>
                <span className="why-orbit__icon"><Icon name={icons[index]} size={26} /></span>
                <div>
                  <h3>{gap.title}</h3>
                  <p>{gap.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
