import Link from "next/link";
import type { ReactNode } from "react";

const linkClass =
  "text-[#1e3a5f] underline decoration-[#1e3a5f]/40 underline-offset-2 transition hover:text-[#8a7220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8982e]";

export function LegalDocumentLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-[#f0ebe3] text-neutral-900">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16 lg:px-6">
        <nav className="mb-10 font-mono text-xs uppercase tracking-wider text-neutral-600">
          <Link href="/" className={linkClass}>
            ← Home
          </Link>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {description ? <p className="mt-3 text-sm text-neutral-600">{description}</p> : null}
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-600 sm:text-base">{children}</div>
        <footer className="mt-14 border-t border-neutral-900/10 pt-8 font-mono text-xs uppercase tracking-wider text-neutral-600">
          <Link href="/privacy" className={linkClass}>
            Privacy
          </Link>
          <span className="mx-2 text-neutral-400" aria-hidden>
            ·
          </span>
          <Link href="/terms" className={linkClass}>
            Terms
          </Link>
        </footer>
      </div>
    </main>
  );
}
