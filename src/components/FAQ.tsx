"use client";

import { useState } from "react";

/**
 * FAQ — cream blueprint section
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to build a full product?",
      answer:
        "No! You only need to build a landing page. No backend, no database, no authentication. Just a single page that makes your startup look fundable.",
    },
    {
      question: "Can my startup be completely fake?",
      answer:
        "Absolutely. In fact, we encourage creativity. Your startup can be serious, silly, or completely absurd. A dating app for houseplants? Go for it. The AI doesn't know the difference.",
    },
    {
      question: "Can I use AI tools like ChatGPT or GitHub Copilot?",
      answer:
        "Yes! AI tools are fully allowed. Use them to write copy, generate ideas, or even help with design. The challenge is about persuasion and presentation, not pure coding.",
    },
    {
      question: "Can I work in a team?",
      answer:
        "No. This hackathon is solo only—one person per submission. Teams are not allowed.",
    },
    {
      question: "Does my idea have to be serious?",
      answer:
        "Not at all. Serious ideas are great, but so are funny ones. Some of the best submissions are creative and entertaining. The goal is to convince the AI VC to invest, however you do it.",
    },
    {
      question: "Do I need backend or authentication?",
      answer:
        "No backend or authentication required. Your landing page just needs to look convincing and work as a static page. If you want to add these features, you can, but they're not required.",
    },
    {
      question: "Will you reveal the AI judging prompt?",
      answer:
        "The exact prompt is kept private to prevent gaming the system. But we've shared the criteria the AI uses: first impression, clarity, visual quality, persuasiveness, credibility, originality, completeness, and overall fundability.",
    },
    {
      question: "What tech stack can I use?",
      answer:
        "Anything you want. React, Vue, plain HTML, Figma exports, website builders—it doesn't matter. The only requirement is that your page must be accessible via a public URL.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f0ebe3] py-14 text-neutral-900 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 neo-grid-ink" aria-hidden />
      <div className="pointer-events-none absolute bottom-6 right-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 sm:right-8">
        FAQ
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="neo-eyebrow mb-3">Support</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Questions</h2>
          <p className="mt-4 text-neutral-600">Everything you need to know before you start.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={faq.question} className="neo-card-light overflow-hidden rounded-sm">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left transition hover:bg-neutral-900/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e] sm:p-5"
                  >
                    <span className="pr-4 text-sm font-medium sm:text-base">{faq.question}</span>
                    <svg
                      className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform duration-300 sm:h-5 sm:w-5 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  <p className="border-t border-neutral-900/10 px-4 pb-4 pt-3 text-sm text-neutral-600 sm:px-5 sm:pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
