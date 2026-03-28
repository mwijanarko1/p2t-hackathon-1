/**
 * Prizes — blueprint section
 */
export function Prizes() {
  const categories = [
    {
      title: "Best Investment Score",
      description: "Highest score from the AI VC. The ultimate bragging rights.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.5 18h2.25m6.75-13.764c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.5 18H14.25"
          />
        </svg>
      ),
      accent: "text-[#8a7220]",
    },
    {
      title: "Best Design",
      description: "Most visually stunning and polished landing page.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.53 18.953v.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.001a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.001a3.5 3.5 0 01-1.915 3.034l-.002.001zM7.5 12.75l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001zM12 6.5l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001zM16.5 12.75l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001zM16.5 18.75l-.001-.002a3.5 3.5 0 01-3.53 0l-.002-.001a3.5 3.5 0 01-1.915-3.034v-.002a3.5 3.5 0 011.915-3.034l.002-.001a3.5 3.5 0 013.53 0l.002.001a3.5 3.5 0 011.915 3.034v.002a3.5 3.5 0 01-1.915 3.034l-.002.001z"
          />
        </svg>
      ),
      accent: "text-[#1e3a5f]",
    },
    {
      title: "Most Creative Startup",
      description: "Funniest, weirdest, or most original startup idea.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m1.5-6.061c1.094.169 2.166.434 3.207.726.474.138.923.29 1.343.454M12 12.75a6.01 6.01 0 00-1.5-.189m-1.5-6.061c-1.094.169-2.166.434-3.207.726-.474.138-.923.29-1.343.454M12 12.75a6.01 6.01 0 006.01-6.01M12 12.75a6.01 6.01 0 01-6.01-6.01M12 6.75v5.25m0 0a6.01 6.01 0 001.5-.189m1.5-6.061c.474-.138.923-.29 1.343-.454M12 12.75a6.01 6.01 0 01-6.01-6.01m0 0a6.01 6.01 0 016.01-6.01m6.01 6.01a6.01 6.01 0 01-6.01 6.01"
          />
        </svg>
      ),
      accent: "text-purple-700",
    },
    {
      title: "Most Persuasive Pitch",
      description: "Best copywriting and messaging that sells the dream.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.5m.75 0l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.5M9.75 15l3-3 2.148 2.148A12.061 12.061 0 0116.5 10.5"
          />
        </svg>
      ),
      accent: "text-emerald-800",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute right-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:right-8">
        Glory
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">Recognition</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Prize categories</h2>
          <p className="mt-4 text-neutral-600">Compete for recognition across multiple categories.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="neo-card-light relative rounded-sm p-6 pt-7 transition hover:border-neutral-900/25 sm:p-8 sm:pt-9"
            >
              <div
                className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b8982e] via-[#1e3a5f] to-purple-700"
                aria-hidden
              />
              <div className={`mb-4 ${category.accent}`} aria-hidden>
                {category.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight sm:text-xl">{category.title}</h3>
              <p className="text-sm text-neutral-600 sm:text-base">{category.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-sm text-neutral-500">More prize details to be announced. Stay tuned!</p>
      </div>
    </section>
  );
}
