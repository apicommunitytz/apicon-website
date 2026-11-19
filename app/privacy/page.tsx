import type { Metadata } from "next";
import { Container, Panel } from "@/components/ui/section";
import { Chip } from "@/components/ui/section-header";
import { emails, mailto, phone } from "@/content/contacts";
import { event } from "@/content/event";

const lastUpdated = "19 November 2026";
const title = "Privacy Policy | APICon Tanzania 2026";
const description =
  "Privacy Policy for the APICon Tanzania 2026 mobile app. The App does not require accounts and does not collect personal information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/privacy",
    siteName: event.name,
    locale: "en_TZ",
  },
  twitter: { card: "summary_large_image", title, description },
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <p>
        This Privacy Policy explains how APICon Tanzania (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information in
        connection with the APICon Tanzania 2026 mobile application (the &ldquo;App&rdquo;), available on iOS and
        Android. It applies to the conference companion app for {event.name}.
      </p>
    ),
  },
  {
    id: "no-accounts",
    title: "No accounts",
    body: <p>The App does not require registration, login, or user accounts.</p>,
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>
          <strong>We do not collect personal information through the App.</strong>
        </p>
        <p>
          The App provides conference information — such as the schedule, speakers, venue, sponsors, contacts, and
          related event details — that is stored with the App on the user&apos;s device. There is no backend login and
          no requirement for you to submit personal data to use the App.
        </p>
        <p>
          We do not use the App to request access to contacts, photos, microphone, camera, or precise location for data
          collection purposes.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third parties, analytics, and advertising",
    body: (
      <>
        <p>The App is not designed to sell personal data.</p>
        <p>
          We do not intentionally collect personal data through analytics, advertising, or tracking SDKs in the App. The
          App does not include ads for the purposes of this policy.
        </p>
        <p>
          This statement is about the mobile App. Separately, visiting our website at{" "}
          <a href={event.siteUrl}>{event.siteUrl}</a> may involve standard website hosting or server logs managed by our
          hosting provider. Those website practices are distinct from the App, which itself does not collect personal
          data.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    title: "Links to external sites",
    body: (
      <p>
        The App may contain links to external websites or social media pages (for example LinkedIn, Instagram, X/Twitter,
        WhatsApp, or sponsor and partner websites). Those services are governed by their own privacy policies. We are
        not responsible for their practices.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <p>
        The App is a professional conference companion and is not directed at children under 13. We do not knowingly
        collect personal information from children.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        Because the App does not collect personal data from users, there is no personal user data retained by us from App
        usage under this policy.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page
        will change when we do. Continued use of the App after an update means the revised policy applies.
      </p>
    ),
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <header className="rounded-b-panel bg-brand text-on-dark">
        <Container className="pt-36 pb-20 md:pt-44 md:pb-24">
          <Chip tone="light">APICon App</Chip>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.03em] text-on-dark md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl">
            How we handle information in the {event.name} mobile app. Short version: no accounts, and no personal data
            collection by the App.
          </p>
          <p className="mt-4 text-sm text-on-dark/80 md:text-base">Last updated: {lastUpdated}</p>
        </Container>
      </header>

      <Panel labelledBy="privacy-policy-title" tone="canvas">
        <h2 id="privacy-policy-title" className="sr-only">
          Privacy Policy details
        </h2>

        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-text md:text-lg md:leading-8">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id} className="scroll-mt-28">
              <h3 id={section.id} className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                {section.title}
              </h3>
              <div className="mt-4 space-y-4 [&_a]:font-medium [&_a]:text-link [&_a]:underline-offset-2 hover:[&_a]:underline [&_strong]:font-semibold [&_strong]:text-ink">
                {section.body}
              </div>
            </section>
          ))}

          <section aria-labelledby="contact" className="scroll-mt-28 rounded-panel border border-line bg-surface p-6 md:p-8">
            <h3 id="contact" className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
              Contact
            </h3>
            <p className="mt-4">For privacy questions about the App, contact:</p>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-sm text-muted">Email</dt>
                <dd>
                  <a className="font-medium text-link underline-offset-2 hover:underline" href={mailto(emails.support)}>
                    {emails.support}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Website</dt>
                <dd>
                  <a className="font-medium text-link underline-offset-2 hover:underline" href={event.siteUrl}>
                    {event.siteUrl}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Phone</dt>
                <dd>
                  <a className="font-medium text-link underline-offset-2 hover:underline" href={phone.href}>
                    {phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </Panel>
    </>
  );
}
