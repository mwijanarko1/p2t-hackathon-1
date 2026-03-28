/**
 * Footer component
 * Final CTA and footer content
 */
export function Footer() {
  return (
    <>
      {/* Final CTA Section */}
      <section id="register" className="py-24 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-emerald-300 font-medium">Registrations Open</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Funded?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Build a landing page. Convince an AI VC. Compete for the highest investment score.
          </p>

          {/* CTA Button */}
          <a
            href="https://forms.gle/example"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
          >
            <span>Register Now</span>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Secondary info */}
          <p className="mt-6 text-gray-500 text-sm">
            Free to participate • Beginner-friendly • 1 week commitment
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-semibold text-white">Fund Me If You Can</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#register" className="hover:text-white transition-colors">Register</a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              A hackathon for curious minds.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}