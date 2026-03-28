"use client";

import { useState } from "react";

/**
 * FAQ component
 * Expandable questions and answers
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to build a full product?",
      answer: "No! You only need to build a landing page. No backend, no database, no authentication. Just a single page that makes your startup look fundable.",
    },
    {
      question: "Can my startup be completely fake?",
      answer: "Absolutely. In fact, we encourage creativity. Your startup can be serious, silly, or completely absurd. A dating app for houseplants? Go for it. The AI doesn't know the difference.",
    },
    {
      question: "Can I use AI tools like ChatGPT or GitHub Copilot?",
      answer: "Yes! AI tools are fully allowed. Use them to write copy, generate ideas, or even help with design. The challenge is about persuasion and presentation, not pure coding.",
    },
    {
      question: "Can I work in a team?",
      answer: "Yes, teams are allowed. You can work solo or with others. Just make sure everyone who contributed is registered and listed in your submission.",
    },
    {
      question: "Does my idea have to be serious?",
      answer: "Not at all. Serious ideas are great, but so are funny ones. Some of the best submissions are creative and entertaining. The goal is to convince the AI VC to invest, however you do it.",
    },
    {
      question: "Do I need backend or authentication?",
      answer: "No backend or authentication required. Your landing page just needs to look convincing and work as a static page. If you want to add these features, you can, but they're not required.",
    },
    {
      question: "Will you reveal the AI judging prompt?",
      answer: "The exact prompt is kept private to prevent gaming the system. But we've shared the criteria the AI uses: first impression, clarity, visual quality, persuasiveness, credibility, originality, completeness, and overall fundability.",
    },
    {
      question: "What tech stack can I use?",
      answer: "Anything you want. React, Vue, plain HTML, Figma exports, website builders—it doesn't matter. The only requirement is that your page must be accessible via a public URL.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            FAQ
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Everything you need to know before you start.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm sm:text-base font-medium text-white pr-3 sm:pr-4">{faq.question}</span>
                <svg
                  className={`w-4 sm:w-5 h-4 sm:h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}