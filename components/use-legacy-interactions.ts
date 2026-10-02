"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const THEME_KEY = "apicon-theme";

type ThemeName = "light" | "dark";


type ParticipationDetails = { freemium: string[]; premium: string[]; addons: string[]; premiumPrice: string };

const PARTICIPATION_DETAILS: Record<string, ParticipationDetails> = {
  "Financial Sponsor": {
    premiumPrice: "300,000/= TZS",
    freemium: ["Official Partner recognition", "Listed on APICon website", "Logo on selected digital materials", "Social media recognition", "Partner certificate / badge", "Access to selected networking opportunities", "Standard post-event recognition"],
    premium: ["Enhanced recognition & featured website visibility", "Prominent event branding", "Featured social media exposure", "Dedicated partner spotlight", "VIP / priority networking access", "Increased conference passes", "Priority consideration for future partnerships"],
    addons: ["Sponsored session", "Networking session sponsorship", "Lunch / refreshment sponsorship", "Swag sponsorship", "Lanyard / badge sponsorship", "Charging station sponsorship", "Wi-Fi / connectivity sponsorship", "Category exclusivity", "Custom activation"],
  },
  "Marketplace Exhibitor": {
    premiumPrice: "250,000/= TZS",
    freemium: ["Official Marketplace Partner recognition", "Listed on APICon marketplace / website", "Basic company / product profile", "Logo on selected digital materials", "Social media recognition", "Limited product showcasing opportunity", "Access to participant networking", "Standard post-event recognition"],
    premium: ["Featured marketplace placement", "Prominent company / product profile", "Enhanced event branding", "Featured social media promotion", "Exhibition / demo space", "Short product / service showcase slot (8–12 min)", "Direct developer engagement opportunity", "Product / API feedback opportunity", "Increased conference passes", "Priority marketplace positioning"],
    addons: ["Dedicated product demonstration", "Technical workshop / lab", "API hands-on challenge", "Developer challenge", "Sponsored technical session", "Product trial / giveaway activation", "Branded booth upgrade", "Dedicated promotional campaign", "Recruitment / talent activation", "Category exclusivity", "Custom marketplace activation"],
  },
  "Technical Partner": {
    premiumPrice: "250,000/= TZS",
    freemium: ["Official Technical Partner recognition", "Listed on APICon website", "Technical Partner badge / certificate", "Social media recognition", "Opportunity to contribute technical content", "Access to technical networking", "Speaker consideration through standard selection", "Standard post-event recognition"],
    premium: ["Featured technical partner placement", "Enhanced event branding", "Featured technical content promotion", "Dedicated technical session opportunity", "Priority consideration for technical sessions", "Developer engagement opportunity", "Technical knowledge-sharing opportunity", "Increased conference passes", "Featured post-event recognition", "Priority access to selected technical activities"],
    addons: ["Dedicated technical workshop", "Hands-on technical lab", "API development challenge", "API security challenge / CTF", "Sponsored technical session", "Developer mentorship session", "Technical clinic / office hours", "Technical demonstration", "Open-source contribution session", "Technical track sponsorship", "Custom technical activation"],
  },
  "Infrastructure Partner": {
    premiumPrice: "200,000/= TZS",
    freemium: ["Official Infrastructure Partner recognition", "Listed on APICon website", "Logo on selected digital materials", "Social media recognition", "Partner badge / certificate", "Access to networking opportunities", "Recognition for contributed resources", "Standard post-event recognition"],
    premium: ["Featured infrastructure partner placement", "Prominent event branding", "Featured partner promotion", "VIP / priority networking", "Increased conference passes", "Dedicated infrastructure recognition", "Featured post-event recognition", "Opportunity to demonstrate supported infrastructure / technology", "Enhanced visibility around supported event activities", "Priority consideration for infrastructure-related opportunities"],
    addons: ["Official Wi-Fi / Connectivity sponsorship", "Cloud credits sponsorship", "Developer tools / software sponsorship", "Hardware / equipment sponsorship", "Charging station sponsorship", "Registration technology sponsorship", "Developer environment / sandbox", "APICon platform / tool sponsorship", "Technical infrastructure demo", "Category exclusivity", "Custom infrastructure activation"],
  },
  "Community / Academic Partner": {
    premiumPrice: "200,000/= TZS",
    freemium: ["Official Community / Academic Partner recognition", "Listed on APICon website", "Logo on selected digital materials", "Social media recognition", "Partner badge / certificate", "Access to community networking", "Opportunity to promote APICon within their community", "Participant referral / outreach opportunity", "Standard post-event recognition"],
    premium: ["Featured community / academic partner placement", "Prominent event branding", "Featured community spotlight", "Priority networking opportunities", "Increased conference passes", "Dedicated community engagement opportunity", "Featured community or university activation", "Opportunity to contribute speakers, researchers or facilitators", "Enhanced post-event recognition", "Greater visibility across APICon community channels", "Priority consideration for community / academic activities"],
    addons: ["Dedicated community session", "University / community workshop", "Student challenge", "Community meetup", "Hackathon / build challenge", "Research presentation", "Academic / industry panel", "Campus activation", "Student ambassador activation", "Scholarship / ticket sponsorship", "Category / sector exclusivity", "Custom community activation"],
  },
};

function prefersReducedMotion(): boolean {
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function applyTheme(theme: ThemeName): void {
  const root = document.documentElement;
  const dark = theme === "dark";
  if (dark) root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");

  document.querySelectorAll<HTMLElement>("#themeIcon, #themeIconMobile").forEach((icon) => {
    icon.className = dark ? "fa-solid fa-sun theme-icon" : "fa-regular fa-moon theme-icon";
  });
}

export function useLegacyInteractions(markup: string): void {
  const router = useRouter();

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const listen = <K extends keyof WindowEventMap>(
      target: Window,
      type: K,
      handler: (event: WindowEventMap[K]) => void,
      options?: AddEventListenerOptions,
    ): void => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    try {
      applyTheme(localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light");
    } catch {
      applyTheme("light");
    }

    const participationDialog = document.getElementById("participationModelDialog");
    const participationTitle = participationDialog?.querySelector<HTMLElement>("[data-participation-title]");
    let participationTrigger: HTMLElement | null = null;

    const closeParticipationDialog = (): void => {
      if (!participationDialog || participationDialog.hidden) return;
      participationDialog.hidden = true;
      participationDialog.classList.remove("is-open");
      document.body.classList.remove("participation-dialog-open");
      participationTrigger?.focus();
      participationTrigger = null;
    };

    const openParticipationDialog = (trigger: HTMLElement): void => {
      if (!participationDialog || !participationTitle) return;
      participationTrigger = trigger;
      const modelName = trigger.dataset.participationModel ?? "Participation Model";
      participationTitle.textContent = modelName;
      const details = PARTICIPATION_DETAILS[modelName];
      if (!details) return;
      const premiumPrice = participationDialog.querySelector<HTMLElement>("[data-participation-premium-price]");
      if (premiumPrice) premiumPrice.textContent = details.premiumPrice;
      (["freemium", "premium", "addons"] as const).forEach((type) => {
        const list = participationDialog.querySelector<HTMLUListElement>(`[data-participation-benefits="${type}"]`);
        if (list) {
          list.replaceChildren(...details[type].map((benefit) => {
            const item = document.createElement("li");
            item.textContent = benefit;
            return item;
          }));
        }
        const link = participationDialog.querySelector<HTMLAnchorElement>(`[data-participation-contact="${type}"]`);
        const label = type === "addons" ? "Optional Add-ons" : type[0].toUpperCase() + type.slice(1);
        const email = type === "freemium" ? "partnerships@apicon.or.tz" : "sponsorships@apicon.or.tz";
        if (link) link.href = `mailto:${email}?subject=${encodeURIComponent(`APICon ${modelName} — ${label}`)}`;
      });
      participationDialog.hidden = false;
      document.body.classList.add("participation-dialog-open");
      requestAnimationFrame(() => {
        participationDialog.classList.add("is-open");
        participationDialog.querySelector<HTMLButtonElement>(".participation-modal__close")?.focus();
      });
    };

    const onDocumentClick = (event: MouseEvent): void => {
      const clicked = event.target instanceof Element ? event.target : null;
      if (!clicked) return;

      const participationClose = clicked.closest<HTMLElement>("[data-participation-close]");
      if (participationClose) {
        closeParticipationDialog();
        return;
      }

      const participationCard = clicked.closest<HTMLElement>("[data-participation-model]");
      if (participationCard) {
        openParticipationDialog(participationCard);
        return;
      }

      const themeToggle = clicked.closest<HTMLElement>("#themeToggle, #themeToggleMobile");
      if (themeToggle) {
        const next: ThemeName = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem(THEME_KEY, next); } catch { /* restricted storage */ }
        return;
      }

      const navToggle = clicked.closest<HTMLButtonElement>(".navbar-toggler");
      if (navToggle) {
        const menu = document.getElementById("mainNavbar");
        const open = menu?.classList.toggle("show") ?? false;
        navToggle.setAttribute("aria-expanded", String(open));
        const icon = navToggle.querySelector<HTMLElement>("i");
        if (icon) icon.className = open ? "fa-solid fa-xmark nav-toggle-icon" : "fa-solid fa-bars nav-toggle-icon";
        return;
      }

      const anchor = clicked.closest<HTMLAnchorElement>("a[href]");
      if (anchor) {
        const internal = internalTarget(anchor, event);
        if (!internal) return;

        if (internal.pathname === location.pathname) {
          const target = internal.hash.length > 1 ? document.querySelector(internal.hash) : null;
          if (!target) return;
          event.preventDefault();
          target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
        } else {
          event.preventDefault();
          router.push(`${internal.pathname}${internal.search}${internal.hash}`);
        }
        document.getElementById("mainNavbar")?.classList.remove("show");
        return;
      }

      const faqButton = clicked.closest<HTMLButtonElement>(".faq-q");
      if (faqButton) {
        const item = faqButton.closest<HTMLElement>(".faq-it");
        if (!item) return;
        const wasOpen = item.dataset.state === "open";
        document.querySelectorAll<HTMLElement>(".faq-it").forEach((entry) => {
          entry.dataset.state = "closed";
          entry.classList.remove("open");
          entry.querySelector<HTMLButtonElement>(".faq-q")?.setAttribute("aria-expanded", "false");
          const answer = entry.querySelector<HTMLElement>(".faq-a");
          if (answer) answer.style.height = "0px";
        });
        if (!wasOpen) {
          item.dataset.state = "open";
          item.classList.add("open");
          faqButton.setAttribute("aria-expanded", "true");
          const answer = item.querySelector<HTMLElement>(".faq-a");
          if (answer) answer.style.height = `${answer.scrollHeight}px`;
        }
        return;
      }

      const partnerTab = clicked.closest<HTMLButtonElement>('[data-partner-tabs] [role="tab"]');
      if (partnerTab) selectPartnerTab(partnerTab);

      const backToTop = clicked.closest("#backToTop");
      if (backToTop) window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    };
    document.addEventListener("click", onDocumentClick);
    cleanups.push(() => document.removeEventListener("click", onDocumentClick));

    const onParticipationKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeParticipationDialog();
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = event.target instanceof HTMLElement ? event.target.closest<HTMLElement>("[data-participation-model]") : null;
      if (!target) return;
      event.preventDefault();
      openParticipationDialog(target);
    };
    document.addEventListener("keydown", onParticipationKeyDown);
    cleanups.push(() => document.removeEventListener("keydown", onParticipationKeyDown));
    cleanups.push(() => document.body.classList.remove("participation-dialog-open"));

    const partnerRoot = document.querySelector<HTMLElement>("[data-partner-tabs]");
    const partnerTabs = partnerRoot ? Array.from(partnerRoot.querySelectorAll<HTMLButtonElement>('[role="tab"]')) : [];
    const selectPartnerTab = (selected: HTMLButtonElement): void => {
      partnerTabs.forEach((tab) => {
        const active = tab === selected;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        tab.classList.toggle("is-selected", active);
        const panelId = tab.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;
        if (panel) panel.hidden = !active;
      });
    };
    if (partnerTabs.length) selectPartnerTab(partnerTabs.find((tab) => tab.getAttribute("aria-selected") === "true") ?? partnerTabs[0]);

    partnerTabs.forEach((tab, index) => {
      const keydown = (event: KeyboardEvent): void => {
        let next = index;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % partnerTabs.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + partnerTabs.length) % partnerTabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = partnerTabs.length - 1;
        else return;
        event.preventDefault();
        selectPartnerTab(partnerTabs[next]);
        partnerTabs[next].focus();
      };
      tab.addEventListener("keydown", keydown);
      cleanups.push(() => tab.removeEventListener("keydown", keydown));
    });

    const nav = document.getElementById("heroNav");
    const progress = document.getElementById("scrollProgressBar");
    const backButton = document.getElementById("backToTop");
    const hero = document.querySelector<HTMLElement>(".hero-bg");
    const onScroll = (): void => {
      nav?.classList.toggle("scrolled", Boolean(document.querySelector(".page-header")) || scrollY > 80);
      if (progress) {
        const height = document.documentElement.scrollHeight - innerHeight;
        progress.style.width = `${height > 0 ? (scrollY / height) * 100 : 0}%`;
      }
      backButton?.classList.toggle("is-visible", scrollY > 560);
      if (hero && scrollY < innerHeight && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        hero.style.transform = `scale(1.04) translateY(${scrollY * 0.08}px)`;
      }
    };
    listen(window, "scroll", onScroll, { passive: true });
    listen(window, "resize", onScroll, { passive: true });
    onScroll();

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .feat-grid .feat, .team-card"));
    if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("active");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
      revealElements.forEach((element) => observer.observe(element));
      cleanups.push(() => observer.disconnect());
    } else revealElements.forEach((element) => element.classList.add("active"));

    const band = document.querySelector<HTMLElement>(".stats-band");
    if (band && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const counters = Array.from(band.querySelectorAll<HTMLElement>("[data-count]"));
      counters.forEach((counter) => { counter.textContent = `${counter.dataset.prefix ?? ""}0${counter.dataset.suffix ?? ""}`; });
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        counters.forEach((counter) => animateCounter(counter));
        observer.disconnect();
      }, { threshold: 0.35 });
      observer.observe(band);
      cleanups.push(() => observer.disconnect());
    }

    setupEventCountdown(cleanups);
    setupTeamCarousel(cleanups);
    setupPointerEffects(cleanups);

    new Set(
      Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
        .map((link) => internalTarget(link)?.pathname)
        .filter((pathname): pathname is string => Boolean(pathname) && pathname !== location.pathname),
    ).forEach((pathname) => router.prefetch(pathname));

    return () => cleanups.reverse().forEach((cleanup) => cleanup());
  }, [markup, router]);
}

/**
 * Resolves an anchor from the injected legacy markup to a same-origin destination
 * the App Router can handle, or null when the browser should own the navigation
 * (external hosts, mailto/tel, downloads, new tabs, modifier-clicks).
 */
function internalTarget(anchor: HTMLAnchorElement, event?: MouseEvent): URL | null {
  if (event && (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) return null;
  if (anchor.hasAttribute("download")) return null;
  if (anchor.target && anchor.target !== "_self") return null;

  let url: URL;
  try {
    url = new URL(anchor.href, location.href);
  } catch {
    return null;
  }
  return url.origin === location.origin ? url : null;
}

function animateCounter(counter: HTMLElement): void {
  const target = Number(counter.dataset.count ?? 0);
  const prefix = counter.dataset.prefix ?? "";
  const suffix = counter.dataset.suffix ?? "";
  const start = performance.now();
  const frame = (now: number): void => {
    const progress = Math.min((now - start) / 1400, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

function setupEventCountdown(cleanups: Array<() => void>): void {
  const countdown = document.querySelector<HTMLElement>("[data-event-countdown]");
  if (!countdown) return;

  const target = new Date(countdown.dataset.eventCountdown ?? "").getTime();
  if (!Number.isFinite(target)) return;

  const days = countdown.querySelector<HTMLElement>("[data-countdown-days]");
  const hours = countdown.querySelector<HTMLElement>("[data-countdown-hours]");
  const minutes = countdown.querySelector<HTMLElement>("[data-countdown-minutes]");
  const seconds = countdown.querySelector<HTMLElement>("[data-countdown-seconds]");
  if (!days || !hours || !minutes || !seconds) return;

  const render = (): void => {
    const remaining = Math.max(0, target - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
    hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
    minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    seconds.textContent = String(totalSeconds % 60).padStart(2, "0");
  };

  render();
  const timer = window.setInterval(render, 1000);
  cleanups.push(() => window.clearInterval(timer));
}

function setupTeamCarousel(cleanups: Array<() => void>): void {
  const setupCarousel = (gridId: string, dotsId: string, previousId: string, nextId: string, itemLabel: string): void => {
    const grid = document.getElementById(gridId);
    const dots = document.getElementById(dotsId);
    const previous = document.getElementById(previousId) as HTMLButtonElement | null;
    const next = document.getElementById(nextId) as HTMLButtonElement | null;
    if (!grid || !dots || !previous || !next) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".team-card"));
    let index = 0;
    const goTo = (nextIndex: number): void => {
      if (innerWidth > 768) return;
      index = Math.max(0, Math.min(cards.length - 1, nextIndex));
      const centeredLeft = cards[index].offsetLeft - grid.offsetLeft - (grid.clientWidth - cards[index].offsetWidth) / 2;
      grid.scrollTo({ left: Math.max(0, centeredLeft), behavior: "smooth" });
      Array.from(dots.children).forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      previous.disabled = index === 0;
      next.disabled = index === cards.length - 1;
    };
    cards.forEach((_, dotIndex) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show ${itemLabel} ${dotIndex + 1}`);
      dot.classList.toggle("active", dotIndex === 0);
      const click = (): void => goTo(dotIndex);
      dot.addEventListener("click", click);
      cleanups.push(() => dot.removeEventListener("click", click));
      dots.appendChild(dot);
    });
    const previousClick = (): void => goTo(index - 1);
    const nextClick = (): void => goTo(index + 1);
    previous.addEventListener("click", previousClick);
    next.addEventListener("click", nextClick);
    cleanups.push(() => previous.removeEventListener("click", previousClick));
    cleanups.push(() => next.removeEventListener("click", nextClick));
    goTo(0);
  };

  setupCarousel("teamGrid", "teamDots", "teamPrev", "teamNext", "team member");
  setupCarousel("speakerGrid", "speakerDots", "speakerPrev", "speakerNext", "speaker");
}

function setupPointerEffects(cleanups: Array<() => void>): void {
  if (!matchMedia("(pointer:fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.body.classList.add("has-pointer");
  const dot = document.createElement("span");
  const ring = document.createElement("span");
  dot.id = "apiCursor";
  ring.id = "apiCursorRing";
  document.body.append(dot, ring);
  let frame = 0;
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  const pointerMove = (event: PointerEvent): void => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  };
  window.addEventListener("pointermove", pointerMove);
  const follow = (): void => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    frame = requestAnimationFrame(follow);
  };
  follow();
  cleanups.push(() => {
    window.removeEventListener("pointermove", pointerMove);
    cancelAnimationFrame(frame);
    dot.remove();
    ring.remove();
    document.body.classList.remove("has-pointer");
  });
}
