/**
 * Hero — cream blueprint grid (matches How It Works)
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#f0ebe3] text-neutral-900">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between px-3 py-3 sm:px-6 sm:py-5">
        <span className="neo-perimeter text-[#1e3a5f]">Beginners OK</span>
        <span className="neo-perimeter text-neutral-600">Community build</span>
        <span className="neo-perimeter hidden text-[#1e3a5f] sm:inline">One URL</span>
      </div>
      <div className="pointer-events-none absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 sm:block sm:left-4">
        <span className="neo-perimeter text-neutral-600 [writing-mode:vertical-rl] rotate-180">Build</span>
      </div>
      <div className="pointer-events-none absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 sm:block sm:right-4">
        <span className="neo-perimeter text-neutral-600 [writing-mode:vertical-rl]">Judge: AI</span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-3 py-3 text-center sm:px-6 sm:py-5">
        <span className="neo-perimeter text-neutral-600">
          March 29 – April 5, 2026 · NYC-adjacent dev community
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-28 pt-16 text-center sm:px-8 sm:pb-24 sm:pt-12">
        <p className="neo-eyebrow mb-4 sm:mb-5">Hackathon</p>

        <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-neutral-900">Build a startup.</span>
          <span className="mt-1 block text-neutral-800">Convince an AI VC.</span>
        </h1>

        <p className="mx-auto mb-2 max-w-2xl text-base text-neutral-600 sm:text-lg">
          A one-week challenge: one landing page. One job — make the model invest.
        </p>
        <p className="mx-auto mb-10 max-w-xl font-mono text-xs uppercase tracking-[0.2em] text-[#8a7220] sm:text-sm">
          Landing only · No backend required · Public URL
        </p>

        <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="https://forms.gle/B2TWXBt3zaWcEVEG8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 border border-neutral-900/15 bg-neutral-900 px-6 py-3.5 font-semibold text-[#f0ebe3] transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e] sm:px-8 sm:py-4"
          >
            <span>Submit your project</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border border-neutral-900/20 bg-transparent px-6 py-3.5 font-medium text-neutral-900 transition hover:border-neutral-900/40 hover:bg-neutral-900/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e] sm:px-8 sm:py-4"
          >
            <span>How it works</span>
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
