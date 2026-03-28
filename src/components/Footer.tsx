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
            href="https://forms.gle/B2TWXBt3zaWcEVEG8"
            target="_blank"
            rel="noopener noreferrer"
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

          <p className="mx-auto mt-6 max-w-xl text-xs text-neutral-500">
            Submitting opens a Google Form in a new tab. Google processes responses under its own terms and privacy
            policy—share only the information needed for this event.
          </p>
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">
            Community members · One week · Landing page challenge
          </p>
        </div>
      </section>

      <footer className="relative border-t border-neutral-900/10 bg-[#f0ebe3] py-10 text-neutral-600 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-10">
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

          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider sm:text-sm">
            <a href="#how-it-works" className="transition hover:text-neutral-900">
              How it works
            </a>
            <a
              href="https://forms.gle/B2TWXBt3zaWcEVEG8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-neutral-900"
            >
              Submit
            </a>
          </div>

          <p className="text-center font-mono text-xs text-neutral-500 sm:text-right">A challenge for our community.</p>
        </div>
      </footer>
    </>
  );
}
