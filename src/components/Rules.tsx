/**
 * Rules component
 * Displays the hackathon rules and constraints
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
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-red-400 font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
            The Fine Print
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Rules & Guidelines
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Simple rules to keep things fair and fun.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {rules.map((section) => (
            <div
              key={section.category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {section.category}
              </h3>
              <ul className="space-y-2 sm:space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-400">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 text-gray-500 flex-shrink-0 mt-0.5 sm:mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
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