/**
 * Judging — cream blueprint section
 */
export function Judging() {
  const criteria = [
    { title: "First Impression", description: "Does it grab attention in the first 3 seconds?", weight: "High" },
    { title: "Clarity of Idea", description: "Can anyone understand what the startup does?", weight: "High" },
    { title: "Visual Quality", description: "Is the design polished and professional?", weight: "Medium" },
    { title: "Persuasiveness", description: "Does it make you want to invest?", weight: "High" },
    { title: "Credibility", description: "Does it feel like a real, trustworthy company?", weight: "Medium" },
    { title: "Originality", description: "Is the idea unique or presented in a fresh way?", weight: "Medium" },
    { title: "Completeness", description: "Are all essential sections present and functional?", weight: "High" },
    { title: "Overall Fundability", description: "Would this pass a real VC's initial screen?", weight: "Highest" },
  ];

  const weightClass = (weight: string) => {
    switch (weight) {
      case "Highest":
        return "border-[#b8982e]/45 bg-[#b8982e]/12 text-[#6b5a18]";
      case "High":
        return "border-[#1e3a5f]/25 bg-[#1e3a5f]/8 text-[#1e3a5f]";
      case "Medium":
        return "border-neutral-900/12 bg-neutral-900/[0.04] text-neutral-600";
      default:
        return "border-neutral-900/10 bg-white/40 text-neutral-500";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute right-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:right-8">
        Scorecard
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">Evaluation</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How the AI VC judges</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            The exact prompt is private, but these are the criteria the AI will evaluate.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {criteria.map((criterion) => (
            <div
              key={criterion.title}
              className="neo-card-light rounded-sm p-4 transition hover:border-neutral-900/18 sm:p-5"
            >
              <h3 className="mb-2 text-sm font-semibold leading-snug sm:text-base">{criterion.title}</h3>
              <p className="mb-3 line-clamp-3 text-xs text-neutral-600 sm:text-sm">{criterion.description}</p>
              <span
                className={`inline-block border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider ${weightClass(criterion.weight)}`}
              >
                {criterion.weight}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs text-neutral-500">
          The AI uses a sophisticated evaluation model similar to how real VCs screen investments.
        </p>
      </div>
    </section>
  );
}
