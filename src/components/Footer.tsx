import { GoogleFormNotice } from "@/components/GoogleFormNotice";
import { GOOGLE_FORM_SUBMIT_URL, OPENS_NEW_TAB_A11Y } from "@/lib/submit-form";

const footerLinkClass =
  "transition hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e] focus-visible:rounded-sm";

/**
 * Footer — cream CTA + cream bar
 */
export function Footer() {
  return (
    <>
      <section
        id="submit"
        className="relative overflow-hidden bg-[#f0ebe3] py-16 text-neutral-900 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
        <div className="pointer-events-none absolute left-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:left-8">
          CTA
        </div>
        <div className="pointer-events-none absolute right-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:right-8">
          Submit
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <p className="neo-eyebrow mb-4 sm:mb-6">March 29 – April 5, 2026</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl lg:text-5xl">Ready to get funded?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-neutral-600 sm:text-lg">
            Build a landing page. Convince an AI VC. Submit your entry before April 5.
          </p>

          <a
            href={GOOGLE_FORM_SUBMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Submit your project${OPENS_NEW_TAB_A11Y}`}
            className="group inline-flex items-center justify-center gap-2 border border-neutral-900/15 bg-neutral-900 px-8 py-4 font-semibold text-[#f0ebe3] transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e] sm:px-10 sm:py-5 sm:text-lg"
          >
            <span>Submit your project</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <GoogleFormNotice className="mx-auto mt-6 max-w-xl text-xs text-neutral-500 sm:text-sm" />
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">
            Community members · One week · Landing page challenge
          </p>
        </div>
      </section>

      <footer className="relative border-t border-neutral-900/10 bg-[#f0ebe3] py-10 text-neutral-600 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-10">
          <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center border border-[#b8982e]/45 bg-[#b8982e]/12"
                aria-hidden
              >
                <svg className="h-5 w-5 text-[#6b5a18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-900 sm:text-base">Fund Me If You Can</span>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider sm:justify-end sm:text-sm"
            >
              <a href="#how-it-works" className={footerLinkClass}>
                How it works
              </a>
              <a
                href={GOOGLE_FORM_SUBMIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Submit${OPENS_NEW_TAB_A11Y}`}
                className={footerLinkClass}
              >
                Submit
              </a>
              <a href="/privacy" className={footerLinkClass}>
                Privacy
              </a>
              <a href="/terms" className={footerLinkClass}>
                Terms
              </a>
            </nav>
          </div>

          <div className="w-full border-t border-neutral-900/10 pt-6 text-center sm:text-left">
            <p className="text-xs text-neutral-600 sm:text-sm">
              <span className="font-medium text-neutral-900">Organiser:</span> Pivot2Tech.{" "}
              <span className="font-medium text-neutral-900">Event questions:</span> use your Pivot2Tech community
              channel.
            </p>
            <p className="mt-3 text-xs text-neutral-500 sm:text-sm">
              Made by{" "}
              <a
                href="https://mikhailwijanarko.xyz"
                className="font-medium text-[#1e3a5f] underline decoration-[#1e3a5f]/35 underline-offset-2 transition hover:text-[#8a7220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e] focus-visible:rounded-sm"
              >
                @mikhailbuilds
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
