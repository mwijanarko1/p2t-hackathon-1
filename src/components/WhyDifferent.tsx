/**
 * WhyDifferent component
 * Highlights what makes this hackathon unique
 */
export function WhyDifferent() {
  const features = [
    {
      title: "Landing Page Only",
      description: "No full app. No backend. No database. Just a single page that makes investors want to throw money at you.",
      highlight: "Beginners welcome.",
    },
    {
      title: "Fake Startups Allowed",
      description: "Your startup can be completely made up. A Uber for cats? An AI that roasts your code? Go wild.",
      highlight: "Creativity wins.",
    },
    {
      title: "AI is the Judge",
      description: "A real AI acts as a venture capitalist. It evaluates your pitch like an investor would. Strategy matters as much as design.",
      highlight: "No human bias.",
    },
    {
      title: "One Week Sprint",
      description: "Short, focused, and intense. Build something impressive without the burnout of a month-long hackathon.",
      highlight: "Ships fast.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
            The Twist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Why This Hackathon Hits Different
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            We stripped away the complexity and added a twist that makes it fun.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/30"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                {feature.description}
              </p>
              <span className="inline-block text-xs sm:text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 sm:px-3 py-1 rounded-full">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}