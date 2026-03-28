/**
 * Rules — cream blueprint section
 */
export function Rules() {
  const rules = [
    {
      category: "What You Build",
      items: [
        "A single landing page (can be multi-section, but one URL)",
        "For a startup idea (real or fictional)",
        "Any framework, language, or tool allowed",
        "Must be accessible via a public URL",
      ],
    },
    {
      category: "Content Rules",
      items: [
        "Startup can be completely fictional",
        "AI tools are fully allowed (Copilot, ChatGPT, etc.)",
        "Content must be safe and appropriate",
        "No malicious code or unsafe practices",
      ],
    },
    {
      category: "Submission",
      items: [
        "Submit your landing page URL",
        "Page must work without errors",
        "All links must be functional",
        "No redirects to required content",
      ],
    },
    {
      category: "Fair Play",
      items: [
        "Manipulation is part of the game",
        "But the page must function as a real landing page",
        "Don't exploit or hack the judging system",
        "Have fun and be creative",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute left-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:left-8">
        Constraints
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">Fine print</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Rules & guidelines</h2>
          <p className="mt-4 text-neutral-600">Simple rules to keep things fair and fun.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {rules.map((section) => (
            <div key={section.category} className="neo-card-light rounded-sm p-6 sm:p-8">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold sm:text-lg">
                <svg className="h-5 w-5 text-[#8a7220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-600 sm:text-base">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#b8982e]/70" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
