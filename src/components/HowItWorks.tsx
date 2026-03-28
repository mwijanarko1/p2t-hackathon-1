/**
 * HowItWorks — blueprint grid section
 */
export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Invent a Startup",
      description:
        "Dream up a startup idea. It can be serious, silly, or completely absurd. The AI doesn't know the difference.",
      icon: (
        <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Build a Landing Page",
      description:
        "Create a polished landing page for your startup. No backend required. No full app needed. Just a page that sells.",
      icon: (
        <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Face the AI VC",
      description:
        "Submit your page. An AI acting as a venture capitalist will evaluate it. Get an investment score. Win bragging rights.",
      icon: (
        <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute left-3 top-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:left-6 sm:top-5">
        01 · Flow
      </div>
      <div className="pointer-events-none absolute right-3 top-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:right-6 sm:top-5">
        v2026.03
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">Process</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How it works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Three simple steps. One week. Your creativity is the only limit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="neo-card-light rounded-sm p-6 transition hover:border-neutral-900/25 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-4xl font-bold tabular-nums text-[#8a7220] sm:text-5xl">{step.number}</span>
                <div className="text-[#1e3a5f]" aria-hidden>
                  {step.icon}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
