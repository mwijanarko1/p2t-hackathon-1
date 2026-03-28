/**
 * WhyDifferent — cream blueprint section
 */
export function WhyDifferent() {
  const features = [
    {
      title: "Landing Page Only",
      description:
        "No full app. No backend. No database. Just a single page that makes investors want to throw money at you.",
      highlight: "Beginners welcome.",
    },
    {
      title: "Fake Startups Allowed",
      description:
        "Your startup can be completely made up. A Uber for cats? An AI that roasts your code? Go wild.",
      highlight: "Creativity wins.",
    },
    {
      title: "AI is the Judge",
      description:
        "A real AI acts as a venture capitalist. It evaluates your pitch like an investor would. Strategy matters as much as design.",
      highlight: "No human bias.",
    },
    {
      title: "One Week Sprint",
      description: "Short, focused, and intense. Build something impressive without the burnout of a month-long hackathon.",
      highlight: "Ships fast.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute bottom-4 left-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 [writing-mode:vertical-rl] rotate-180 sm:left-6">
        Twist
      </div>
      <div className="pointer-events-none absolute bottom-4 right-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 [writing-mode:vertical-rl] sm:right-6">
        Different
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">The twist</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Why this hits different</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            We stripped away the complexity and added a twist that makes it fun.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="neo-card-light rounded-sm p-6 transition hover:border-neutral-900/20 sm:p-8"
            >
              <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">{feature.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{feature.description}</p>
              <span className="inline-block border border-[#b8982e]/40 bg-[#b8982e]/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#6b5a18]">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
