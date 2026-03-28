/**
 * Hero component for the hackathon landing page
 * Displays event name, tagline, and primary CTAs
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs - smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 -right-12 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto pt-8 sm:pt-0">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm text-gray-300 font-medium">Community Challenge • March 29 - April 5</span>
        </div>

        {/* Main headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-white">Build a startup. </span>
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Convince an AI VC.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2 sm:mb-4 max-w-3xl mx-auto px-4">
          A one-week hackathon where your landing page has one job:
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 sm:mb-8">
          Make the AI invest.
        </p>

        {/* CTAs - full width on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <a
            href="https://forms.gle/B2TWXBt3zaWcEVEG8"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <span>Submit Your Project</span>
            <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:bg-white/20"
          >
            <span>Learn More</span>
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-500 max-w-xl mx-auto px-4 mb-6 sm:mb-8">
          Submitting opens a Google Form in a new tab. Google processes responses under its own terms and
          privacy policy—share only the information needed for this event.
        </p>

        {/* Key stats */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-center px-2">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">1 Week</div>
            <div className="text-xs sm:text-sm text-gray-400">Build Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Landing Page</div>
            <div className="text-xs sm:text-sm text-gray-400">Only What You Need</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">AI VC</div>
            <div className="text-xs sm:text-sm text-gray-400">Your Only Judge</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}