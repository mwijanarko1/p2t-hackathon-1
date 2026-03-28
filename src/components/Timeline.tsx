/**
 * Timeline component
 * Shows event dates and milestones
 */
export function Timeline() {
  const events = [
    {
      date: "Now Open",
      title: "Registrations Open",
      description: "Sign up and get access to resources and starter templates.",
      status: "active" as const,
    },
    {
      date: "Coming Soon",
      title: "Kickoff Event",
      description: "Join us for the official launch. Get tips, meet your cohort, and ask questions.",
      status: "upcoming" as const,
    },
    {
      date: "7 Days",
      title: "Build Week",
      description: "Create your landing page. Collaborate, iterate, and polish your submission.",
      status: "upcoming" as const,
    },
    {
      date: "Deadline TBA",
      title: "Submission Deadline",
      description: "Submit your landing page URL before the cutoff. Late submissions won't be judged.",
      status: "upcoming" as const,
    },
    {
      date: "TBA",
      title: "AI Judging",
      description: "The AI VC evaluates all submissions and assigns investment scores.",
      status: "upcoming" as const,
    },
    {
      date: "TBA",
      title: "Winners Announced",
      description: "Results revealed. Prizes awarded. Glory achieved.",
      status: "upcoming" as const,
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4">
            The Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Timeline
          </h2>
          <p className="text-lg text-gray-400">
            Key dates you need to know.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-white/20 to-white/5"></div>

          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${
                  event.status === "active"
                    ? "bg-emerald-400 ring-4 ring-emerald-400/20"
                    : "bg-white/30"
                }`}></div>

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                }`}>
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/10 ${
                    event.status === "active" ? "border-emerald-500/50" : ""
                  }`}>
                    <span className="inline-block text-sm font-medium text-emerald-400 mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
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