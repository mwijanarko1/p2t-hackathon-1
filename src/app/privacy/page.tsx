import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";
import {
  GOOGLE_FORM_SUBMIT_URL,
  GOOGLE_PRIVACY_POLICY_URL,
  OPENS_NEW_TAB_A11Y,
} from "@/lib/submit-form";

export const metadata: Metadata = {
  title: "Privacy — Fund Me If You Can",
  description: "How this site and hackathon submissions handle personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy notice"
      description="Last updated March 2026. This page describes this marketing site and how submissions work."
    >
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Who we are</h2>
        <p>
          The <strong className="font-medium text-neutral-800">Fund Me If You Can</strong> hackathon and this website
          are organised by <strong className="font-medium text-neutral-800">Pivot2Tech</strong> as a community
          challenge. This notice supplements (not replaces) the rules published on the homepage.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">What this site collects</h2>
        <p>
          The site you are viewing is a static marketing page. As shipped in this repository, it does not embed
          first-party analytics, advertising tags, or account login. Your host (for example Vercel) may process
          technical logs (such as IP address and request metadata) according to the host&apos;s own policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Hackathon submissions (Google Forms)</h2>
        <p>
          When you choose to enter, you are sent to a{" "}
          <a
            href={GOOGLE_FORM_SUBMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a5f] underline decoration-[#1e3a5f]/40 underline-offset-2 transition hover:text-[#8a7220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e]"
            aria-label={`Google Form for submissions${OPENS_NEW_TAB_A11Y}`}
          >
            Google Form
          </a>
          . Google processes the information you submit there under{" "}
          <a
            href={GOOGLE_PRIVACY_POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a5f] underline decoration-[#1e3a5f]/40 underline-offset-2 transition hover:text-[#8a7220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e]"
            aria-label={`Google Privacy Policy${OPENS_NEW_TAB_A11Y}`}
          >
            Google&apos;s privacy policy
          </a>{" "}
          and its own terms. Share only what you are comfortable providing for this event.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Cookies and similar technologies</h2>
        <p>
          This codebase does not set marketing or analytics cookies. If the organiser adds tools such as analytics or
          embedded media later, this page should be updated and, where required by law, a consent mechanism should be
          provided before non-essential tracking runs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
        <p>
          For questions about this website or the event, contact Pivot2Tech through your usual Pivot2Tech community
          channel.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
