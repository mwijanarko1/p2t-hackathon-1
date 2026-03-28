/**
 * WhatToBuild component
 * Concrete requirements for participants
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
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
            The Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            What You Need to Build
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Keep it simple. Make it impressive.
          </p>
        </div>

        {/* Requirements card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10">
          <ul className="space-y-3 sm:space-y-4">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base lg:text-lg text-gray-300">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro tip */}
        <div className="mt-6 sm:mt-8 flex items-start gap-3 sm:gap-4 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6">
          <svg className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-amber-400 mb-1">Pro Tip</h4>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">
              The AI VC will judge your page like a real investor. Think about what makes a landing page convincing: clear value proposition, social proof, compelling copy, and professional design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}