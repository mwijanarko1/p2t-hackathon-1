/**
 * Judging component
 * Displays the judging criteria
 */
export function Judging() {
  const criteria = [
    {
      title: "First Impression",
      description: "Does it grab attention in the first 3 seconds?",
      weight: "High",
    },
    {
      title: "Clarity of Idea",
      description: "Can anyone understand what the startup does?",
      weight: "High",
    },
    {
      title: "Visual Quality",
      description: "Is the design polished and professional?",
      weight: "Medium",
    },
    {
      title: "Persuasiveness",
      description: "Does it make you want to invest?",
      weight: "High",
    },
    {
      title: "Credibility",
      description: "Does it feel like a real, trustworthy company?",
      weight: "Medium",
    },
    {
      title: "Originality",
      description: "Is the idea unique or presented in a fresh way?",
      weight: "Medium",
    },
    {
      title: "Completeness",
      description: "Are all essential sections present and functional?",
      weight: "High",
    },
    {
      title: "Overall Fundability",
      description: "Would this pass a real VC's initial screen?",
      weight: "Highest",
    },
  ];

  const getWeightColor = (weight: string) => {
    switch (weight) {
      case "Highest":
        return "text-emerald-400 bg-emerald-400/20";
      case "High":
        return "text-cyan-400 bg-cyan-400/20";
      case "Medium":
        return "text-blue-400 bg-blue-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-purple-400 font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
            The Scorecard
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            How the AI VC Judges
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            The exact prompt is private, but these are the criteria the AI will evaluate.
          </p>
        </div>

        {/* Criteria grid - 2 columns on mobile, 4 on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {criteria.map((criterion) => (
            <div
              key={criterion.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {criterion.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 line-clamp-2">
                {criterion.description}
              </p>
              <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${getWeightColor(criterion.weight)}`}>
                {criterion.weight}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm px-4">
            The AI uses a sophisticated evaluation model similar to how real VCs screen investments.
          </p>
        </div>
      </div>
    </section>
  );
}