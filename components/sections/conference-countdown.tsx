import { Fragment } from "react";
import { event } from "@/content/event";

/** Uses the reference site's styling and its shared live-countdown interaction. */
export function ConferenceCountdown() {
  return (
    <div className="reference-design reference-countdown">
      <div
        aria-label={`Countdown to ${event.name}`}
        className="hero-countdown"
        data-event-countdown={event.startsAt}
      >
        <span className="hero-countdown__label">Conference starts in</span>
        <div aria-live="off" className="hero-countdown__units">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <Fragment key={unit}>
              {index > 0 && <i aria-hidden="true">:</i>}
              <span className="hero-countdown__unit">
                <strong {...{ [`data-countdown-${unit}`]: "" }}>00</strong>
                <small>{unit}</small>
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
