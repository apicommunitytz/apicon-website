import { Fragment } from "react";
import { event } from "@/content/event";
import { partners } from "@/content/partners";
import { speakers } from "@/content/speakers";

const stats = [
  { value: event.recap.attendees, label: "Attendees" },
  { value: `${speakers.length}`, label: "Speakers" },
  { value: `${partners.length}`, label: "Partners" },
  { value: "1", label: "Day" },
];

/** Replaces the countdown once the conference is over; reuses the countdown's reference styling. */
export function ConferenceRecap() {
  return (
    <div className="reference-design reference-countdown">
      <div className="hero-countdown" role="group" aria-label={`${event.name} in numbers`}>
        <span className="hero-countdown__label">APICon 2026 in numbers</span>
        <dl className="hero-countdown__units">
          {stats.map((stat, index) => (
            <Fragment key={stat.label}>
              {index > 0 && <i aria-hidden="true">·</i>}
              <div className="hero-countdown__unit">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="contents">
                  <strong>{stat.value}</strong>
                  <small aria-hidden="true">{stat.label}</small>
                </dd>
              </div>
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}
