import { Icon, type IconName } from "@/components/ui/icon";
import { contactChannels, mailto, phone, socials } from "@/content/contacts";
import "./contact.css";

const enquiries: { icon: IconName; description: string }[] = [
  { icon: "message", description: "Questions about attending? Start here." },
  { icon: "users", description: "Showcase your work and connect with the ecosystem." },
  { icon: "rocket", description: "Help make the conference possible." },
  { icon: "globe", description: "Share your expertise on the APICon stage." },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-connect">
      <div className="contact-connect__inner">
        <header className="contact-connect__heading">
          <span className="contact-connect__eyebrow">Get in touch</span>
          <h2 id="contact-title">Great connections.<br /><span>Start with a conversation.</span></h2>
          <p>Joining us, sharing an idea, or building a partnership? Connect with the right team at APICon Tanzania.</p>
        </header>

        <div className="contact-connect__layout">
          <div className="contact-connect__cards" aria-label="Email our teams">
            {contactChannels.map((channel, index) => (
              <a className="contact-connect__card" href={mailto(channel.email)} key={channel.email}>
                <div className="contact-connect__card-top">
                  <span className="contact-connect__icon"><Icon name={enquiries[index].icon} size={23} /></span>
                  <Icon name="arrow-up-right" className="contact-connect__arrow" size={20} />
                </div>
                <h3>{channel.label}</h3>
                <p>{enquiries[index].description}</p>
                <span className="contact-connect__email">{channel.email}</span>
              </a>
            ))}
          </div>

          <aside className="contact-connect__visit" aria-labelledby="contact-visit-title">
            <span className="contact-connect__eyebrow">See you in Dar es Salaam</span>
            <h3 id="contact-visit-title">One community.<br />Endless possibilities.</h3>
            <div className="contact-connect__detail">
              <Icon name="map-pin" size={22} />
              <div><span>The venue</span><strong>Confucius UDSM</strong><p>Dar es Salaam, Tanzania</p></div>
            </div>
            <div className="contact-connect__detail">
              <Icon name="calendar" size={22} />
              <div><span>Save the date</span><strong>Saturday, 21 November 2026</strong></div>
            </div>
            <a href={phone.href} className="contact-connect__phone">
              <Icon name="phone" size={21} />
              <span><small>Prefer to call?</small><strong>{phone.display}</strong></span>
              <Icon name="arrow-up-right" size={20} />
            </a>
          </aside>
        </div>

        <div className="contact-connect__socials">
          <div><h3>Keep the conversation going</h3><p>Conference updates, community news, and connections.</p></div>
          <ul aria-label="Official APICon Tanzania channels">
            {socials.map((social) => (
              <li key={social.href}>
                <a className={`contact-connect__social--${social.icon}`} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} (opens in a new tab)`}>
                  <Icon name={social.icon} size={18} />
                  <span>{social.label.replace(" community group", " community")}</span>
                  <Icon name="arrow-up-right" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
