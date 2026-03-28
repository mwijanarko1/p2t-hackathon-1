/**
 * Footer component
 * Final CTA and footer content
 */
export function Footer() {
  return (
    <>
      {/* Final CTA Section */}
      <section id="submit" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm text-emerald-300 font-medium">March 29 - April 5, 2026</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Get Funded?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Build a landing page. Convince an AI VC. Submit your entry before April 5.
          </p>

          {/* CTA Button */}
          <a
            href="https://forms.gle/B2TWXBt3zaWcEVEG8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
          >
            <span>Submit Your Project</span>
            <svg className="w-5 sm:w-6 h-5 sm:h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Secondary info */}
          <p className="mt-4 sm:mt-6 text-gray-500 text-xs sm:text-sm px-4">
            Community members only • One week to build • Landing page challenge
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold text-white">Fund Me If You Can</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="https://forms.gle/B2TWXBt3zaWcEVEG8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Submit</a>
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-500">
              A challenge for our community.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}