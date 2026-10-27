import { homeMarkup as legacyHomeMarkup } from "./legacy-content";

const erickAlexSpeaker = '<article class="team-card speaker-card"><div class="team-card-img-wrap"><img alt="Erick Alex" class="team-card-img speaker-card-img" decoding="async" loading="lazy" src="/assets/images/speakers/Erick-Alex.jpeg"/><div class="team-card-spec"><span>Security Researcher</span></div></div><div class="team-card-body"><span class="speaker-card-kicker">Featured Speaker</span><h3 class="team-card-name">ERICK ALEX</h3><div class="team-card-role">Security Researcher</div><p class="team-card-bio speaker-card-company"><span aria-hidden="true" class="material-symbols-outlined">apartment</span>CTF Zone</p></div></article>';

const ctfZonePartner = '<article aria-label="CTF Zone, Technical Partner" class="partner-brand-card"><span class="partner-brand-card__tier">Technical Partner</span><div class="partner-brand-card__logo"><img alt="CTF Zone" loading="lazy" src="/assets/images/partners/ctfzone.png"/></div></article>';

export const homeMarkup = legacyHomeMarkup
  .replace('</div><div class="team-mobile-controls speaker-mobile-controls">', `${erickAlexSpeaker}</div><div class="team-mobile-controls speaker-mobile-controls">`)
  .replace('<div aria-label="APICon Tanzania partner brands" class="partner-brand-list">', `<div aria-label="APICon Tanzania partner brands" class="partner-brand-list">${ctfZonePartner}`);
