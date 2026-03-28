/**
 * Timeline — blueprint section
 */
export function Timeline() {
  const events = [
    {
      date: "March 29, 2026",
      title: "Challenge Kickoff",
      description: "Hackathon begins. Start building your landing page.",
    },
    {
      date: "March 29 - April 5",
      title: "Build Week",
      description: "7 days to create your landing page. Collaborate, iterate, and polish.",
    },
    {
      date: "April 5, 2026",
      title: "Submission Deadline",
      description: "Submit via Google Form before midnight. Late entries won't be judged.",
    },
    {
      date: "April 6-7",
      title: "AI Judging",
      description: "The AI VC evaluates all submissions and assigns investment scores.",
    },
    {
      date: "April 8, 2026",
      title: "Results Announced",
      description: "Scores revealed. Winners announced. Bragging rights earned.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute bottom-4 left-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:left-6">
        Schedule
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">Calendar</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Timeline</h2>
          <p className="mt-4 text-neutral-600">One week. March 29 to April 5, 2026.</p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-neutral-900/15 sm:left-1/2 sm:-translate-x-1/2" aria-hidden />

          <div className="space-y-6 sm:space-y-8">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-start gap-4 sm:gap-6 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                <div
                  className="absolute left-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#8a7220] bg-[#f0ebe3] sm:left-1/2 sm:h-3 sm:w-3"
                  aria-hidden
                />

                <div
                  className={`ml-8 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}
                >
                  <div className="neo-card-light rounded-sm p-5 transition hover:border-neutral-900/25 sm:p-6">
                    <span className="mb-1 inline-block font-mono text-xs font-medium uppercase tracking-wider text-[#8a7220]">
                      {event.date}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight">{event.title}</h3>
                    <p className="text-sm text-neutral-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
