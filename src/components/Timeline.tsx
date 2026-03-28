/**
 * Timeline component
 * Shows event dates and milestones
 */
export function Timeline() {
  const events = [
    {
      date: "March 29, 2026",
      title: "Challenge Kickoff",
      description: "Hackathon begins. Start building your landing page.",
      status: "upcoming" as const,
    },
    {
      date: "March 29 - April 5",
      title: "Build Week",
      description: "7 days to create your landing page. Collaborate, iterate, and polish.",
      status: "upcoming" as const,
    },
    {
      date: "April 5, 2026",
      title: "Submission Deadline",
      description: "Submit via Google Form before midnight. Late entries won't be judged.",
      status: "upcoming" as const,
    },
    {
      date: "April 6-7",
      title: "AI Judging",
      description: "The AI VC evaluates all submissions and assigns investment scores.",
      status: "upcoming" as const,
    },
    {
      date: "April 8, 2026",
      title: "Results Announced",
      description: "Scores revealed. Winners announced. Bragging rights earned.",
      status: "upcoming" as const,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
            The Schedule
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Timeline
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            One week. March 29 to April 5, 2026.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - centered on mobile for better alignment */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-white/20 to-white/5"></div>

          {/* Events */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-start gap-4 sm:gap-6 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white/30"></div>

                {/* Content */}
                <div className={`ml-8 sm:ml-0 sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-8 lg:pr-12 sm:text-right" : "sm:pl-8 lg:pl-12"
                }`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/10">
                    <span className="inline-block text-xs sm:text-sm font-medium text-emerald-400 mb-1 sm:mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {event.description}
                    </p>
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