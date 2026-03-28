/**
 * Prizes — single winner cash prize
 */
export function Prizes() {
  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute right-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:right-8">
        Prize
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center sm:mb-12">
          <p className="neo-eyebrow mb-3">Recognition</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">The prize</h2>
          <p className="mt-4 text-neutral-600">One winner. Highest score from the AI VC takes the pot.</p>
        </div>

        <div className="neo-card-light relative rounded-sm p-8 pt-9 text-center sm:p-10 sm:pt-11">
          <div
            className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b8982e] via-[#1e3a5f] to-[#b8982e]"
            aria-hidden
          />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Winner</p>
          <p className="mt-2 text-4xl font-bold tabular-nums tracking-tight text-neutral-900 sm:text-5xl">£50</p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Awarded to the entry with the <strong className="font-semibold text-neutral-800">best investment score</strong> from
            the AI VC. There is <strong className="font-semibold text-neutral-800">no cash prize</strong> for second or third
            place.
          </p>
        </div>
      </div>
    </section>
  );
}
