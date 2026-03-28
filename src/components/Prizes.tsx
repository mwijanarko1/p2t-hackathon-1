/**
 * Prizes component
 * Shows prize categories and recognition
 */
export function Prizes() {
  const categories = [
    {
      title: "Best Investment Score",
      description: "Highest score from the AI VC. The ultimate bragging rights.",
      icon: "🏆",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Best Design",
      description: "Most visually stunning and polished landing page.",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Most Creative Startup",
      description: "Funniest, weirdest, or most original startup idea.",
      icon: "💡",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Most Persuasive Pitch",
      description: "Best copywriting and messaging that sells the dream.",
      icon: "🎯",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm tracking-wider uppercase mb-4">
            The Glory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prize Categories
          </h2>
          <p className="text-lg text-gray-400">
            Compete for recognition across multiple categories.
          </p>
        </div>

        {/* Prize cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>

              {/* Icon */}
              <div className="text-4xl mb-4">{category.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            More prize details to be announced. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
}