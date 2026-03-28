/**
 * Prizes component
 * Shows prize categories and recognition
 */
export function Prizes() {
  const categories = [
    {
      title: "Best Investment Score",
      description: "Highest score from the AI VC. The ultimate bragging rights.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.5 18h2.25m6.75-13.764c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.5 18H14.25" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Best Design",
      description: "Most visually stunning and polished landing page.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 18.953v.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.001a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.001a3.5 3.5 0 01-1.915 3.034l-.002.001zM7.5 12.75l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001zM12 6.5l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001zM16.5 12.75l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001zM16.5 18.75l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001z" />
        </svg>
      ),
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Most Creative Startup",
      description: "Funniest, weirdest, or most original startup idea.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m1.5-6.061c1.094.169 2.166.434 3.207.726.474.138.923.29 1.343.454M12 12.75a6.01 6.01 0 00-1.5-.189m-1.5-6.061c-1.094.169-2.166.434-3.207.726-.474.138-.923.29-1.343.454M12 12.75a6.01 6.01 0 006.01-6.01M12 12.75a6.01 6.01 0 01-6.01-6.01M12 6.75v5.25m0 0a6.01 6.01 0 001.5-.189m1.5-6.061c.474-.138.923-.29 1.343-.454M12 12.75a6.01 6.01 0 01-6.01-6.01m0 0a6.01 6.01 0 016.01-6.01m6.01 6.01a6.01 6.01 0 01-6.01 6.01" />
        </svg>
      ),
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Most Persuasive Pitch",
      description: "Best copywriting and messaging that sells the dream.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.5m.75 0l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.5M9.75 15l3-3 2.148 2.148A12.061 12.061 0 0116.5 10.5" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm tracking-wider uppercase mb-4">
            The Glory
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Prize Categories
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Compete for recognition across multiple categories.
          </p>
        </div>

        {/* Prize cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>

              {/* Icon */}
              <div className={`mb-3 sm:mb-4 ${
                category.title === "Best Investment Score" ? "text-yellow-400" :
                category.title === "Best Design" ? "text-pink-400" :
                category.title === "Most Creative Startup" ? "text-purple-400" :
                "text-emerald-400"
              }`}>
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-sm">
            More prize details to be announced. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}