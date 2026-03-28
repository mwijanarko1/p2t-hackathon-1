import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";

const inlineLinkClass =
  "text-[#1e3a5f] underline decoration-[#1e3a5f]/40 underline-offset-2 transition hover:text-[#8a7220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e]";

export const metadata: Metadata = {
  title: "Terms — Fund Me If You Can",
  description: "Participation terms for the Fund Me If You Can community hackathon.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalDocumentLayout
      title="Terms of participation"
      description="Last updated March 2026. Plain-language summary for a community hackathon—not legal advice."
    >
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Agreement</h2>
        <p>
          By taking part in <strong className="font-medium text-neutral-800">Fund Me If You Can</strong>, you agree to
          follow the official rules and timeline shown on the{" "}
          <Link href="/" className={inlineLinkClass}>
            event homepage
          </Link>
          . If anything on this page conflicts with those rules, the homepage rules win.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Nature of the event</h2>
        <p>
          This is a community challenge for learning and creativity. Prizes or recognition (if any) are described on the
          homepage. Nothing on this site is an offer of real investment, securities, or professional financial advice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Submissions</h2>
        <p>
          You are responsible for the accuracy of what you submit and for complying with third-party terms (including
          Google Forms and any hosting or tools you use). Pivot2Tech may disqualify entries that violate the rules or are
          inappropriate.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Site and availability</h2>
        <p>
          This website is provided as-is. Pivot2Tech does not guarantee uninterrupted access or error-free content.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Privacy</h2>
        <p>
          See our{" "}
          <Link href="/privacy" className={inlineLinkClass}>
            privacy notice
          </Link>{" "}
          for how information is handled on this site and via the submission form.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
        <p>
          Questions about these terms or the event: reach Pivot2Tech through your Pivot2Tech community channel.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
