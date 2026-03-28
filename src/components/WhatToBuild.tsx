/**
 * WhatToBuild — blueprint section
 */
export function WhatToBuild() {
  const requirements = [
    "One landing page for a startup idea",
    "Any framework or technology you want",
    "Must look polished and complete",
    "No backend required (but you can add one if you want)",
    "All content must be original or properly licensed",
    "Page must be functional and accessible",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-neutral-400">
        Spec
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="neo-eyebrow mb-3">The challenge</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What you need to build</h2>
          <p className="mt-4 text-neutral-600">Keep it simple. Make it impressive.</p>
        </div>

        <div className="neo-card-light rounded-sm p-6 sm:p-10">
          <ul className="space-y-4">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1e3a5f]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-neutral-800 sm:text-base">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-start gap-4 border border-[#8a7220]/30 bg-[#fff9e6]/80 p-5 sm:p-6">
          <svg className="h-6 w-6 flex-shrink-0 text-[#8a7220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <div>
            <h4 className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#6b5a18]">Pro tip</h4>
            <p className="text-sm text-neutral-600">
              The AI VC will judge your page like a real investor. Think about what makes a landing page convincing: clear
              value proposition, social proof, compelling copy, and professional design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
