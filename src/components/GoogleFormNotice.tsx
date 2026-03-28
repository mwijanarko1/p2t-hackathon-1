import { GOOGLE_PRIVACY_POLICY_URL, OPENS_NEW_TAB_A11Y } from "@/lib/submit-form";

/**
 * Short disclosure: submissions use Google Forms; Google’s policies apply.
 */
export function GoogleFormNotice({ className }: { className?: string }) {
  return (
    <p className={className}>
      Submitting opens a Google Form in a new tab. Google processes responses under its own terms and{" "}
      <a
        href={GOOGLE_PRIVACY_POLICY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1e3a5f] underline decoration-[#1e3a5f]/40 underline-offset-2 transition hover:text-[#8a7220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e]"
        aria-label={`Google Privacy Policy${OPENS_NEW_TAB_A11Y}`}
      >
        privacy policy
      </a>
      —share only the information needed for this event.
    </p>
  );
}
