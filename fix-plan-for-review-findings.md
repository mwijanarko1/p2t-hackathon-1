# Fix Plan for Review Findings

## Summary

This plan fixes all findings from the review in one pass, with the priority order:

1. Restore production correctness and quality gates.
2. Close SEO, accessibility, and compliance gaps.
3. Clean up maintainer-facing documentation and repository hygiene.
4. Add enough automated coverage to prevent the same regressions.

This remains a low-risk refactor. The app is a small static Next.js marketing site, so the work should stay localized to config, metadata, docs, and a small number of tests.

## Scope

In scope:
- Canonical URL and metadata hardening
- Lint pipeline repair
- Social preview asset and metadata repair
- Reduced-motion accessibility fix
- Privacy/compliance disclosure for Google Form submission flow
- README and prompt-doc cleanup
- Lockfile policy cleanup
- Test coverage expansion around metadata/env/config

Out of scope:
- Visual redesign
- Copy overhaul beyond compliance/clarity edits
- New backend or analytics
- New registration/submission system

## Implementation Plan

### 1. Fix canonical URL and metadata defaults

Goal:
Prevent production from ever emitting localhost metadata.

Changes:
- Update [src/lib/env.ts](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/lib/env.ts) so `NEXT_PUBLIC_APP_URL` is required in production.
- Keep a localhost fallback only for `development` and optionally `test`.
- Normalize the URL before use:
  - trim whitespace
  - remove trailing slash
- Fail fast during build/render in production if `NEXT_PUBLIC_APP_URL` is missing or invalid.
- Keep [src/app/layout.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/app/layout.tsx) as the single consumer of `getSiteUrl()` for metadata.

Chosen behavior:
- `development`: default to `http://localhost:3000`
- `test`: default to `http://localhost:3000`
- `production`: throw if `NEXT_PUBLIC_APP_URL` is absent or invalid

Public interface change:
- Environment contract changes from “optional in all environments” to “required in production”.

### 2. Repair social metadata and crawlability

Goal:
Make social sharing and crawl signals valid by default.

Changes:
- Add a real social preview image asset at `public/og-image.png`.
- Keep metadata in [src/app/layout.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/app/layout.tsx) pointing to that file.
- Add App Router metadata routes if absent:
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`
- `robots.ts` should allow indexing and point to the sitemap using the canonical site URL.
- `sitemap.ts` should emit the root URL only, since this is currently a single-page site.

Chosen behavior:
- One static OG image sized for standard social cards.
- Minimal robots/sitemap implementation tied to the validated canonical URL.

Public interface change:
- New metadata endpoints:
  - `/robots.txt`
  - `/sitemap.xml`

### 3. Repair linting end-to-end

Goal:
Restore a working lint command suitable for local use and CI.

Changes:
- Replace the broken `next lint` usage in [package.json](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/package.json) with direct ESLint CLI usage compatible with Next 16 flat config.
- Adjust [eslint.config.mjs](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/eslint.config.mjs) to use a Next 16-compatible flat config pattern that does not trigger the current circular-config failure.
- Ensure the lint target covers:
  - `src/**/*.{ts,tsx}`
  - root config files such as `next.config.mjs` and `vitest.config.ts`
- If needed, add ignores for `.next`, coverage, and generated files through flat config rather than legacy assumptions.

Chosen command shape:
- `lint`: `eslint .`
- `lint:fix`: optional, only if wanted later; not required for this plan

Acceptance:
- `npm run lint` must pass cleanly.
- Direct ESLint invocation must no longer crash.

### 4. Complete reduced-motion support

Goal:
Respect motion-reduction preferences consistently.

Changes:
- Update [src/app/globals.css](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/app/globals.css) so `prefers-reduced-motion: reduce` also disables pulse animation.
- Review components for any remaining perpetual motion classes and ensure they are disabled under reduced motion.
- Keep layout and content intact; only animation behavior changes.

Chosen behavior:
- Disable `animate-blob`, `animate-bounce`, and `animate-pulse`.
- Preserve static styling and color changes.

### 5. Add privacy/compliance disclosure for submission flow

Goal:
Disclose off-site submission handling clearly enough for a simple event site.

Changes:
- Add a short privacy/data-use notice near the submit CTAs in:
  - [src/components/Hero.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/components/Hero.tsx)
  - [src/components/Footer.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/components/Footer.tsx)
- The notice should state:
  - submission opens a Google Form
  - Google may process submitted data under its own terms
  - users should only submit information required for the event
- Add a simple first-party privacy page only if the project wants stronger compliance posture. Default plan does not require a full legal doc because the site is very small and the main gap is missing disclosure.

Chosen default:
- Implement concise inline disclosure copy, not a full new policy page.
- If the team later wants analytics or more data collection, expand into a dedicated privacy page.

### 6. Clean up maintainer docs

Goal:
Make the repo self-describing and stop future drift.

Changes:
- Rewrite [README.md](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/README.md) so it reflects this actual project.
- Remove references to:
  - template repo cloning instructions
  - missing Clerk/Convex docs
  - missing `for-agent/` structure
  - missing `docs/CURSOR_GUIDE.md`
- Document:
  - purpose of the site
  - actual project structure
  - env requirements
  - local commands
  - deployment expectations
  - lint/build/test workflow
- Update [docs/PROMPT.txt](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/docs/PROMPT.txt) to remove instructions that conflict with tracked docs and current repo hygiene.

Chosen behavior:
- README becomes project-specific, not template-generic.
- Prompt file remains useful but must align with existing repo rules.

### 7. Resolve lockfile policy

Goal:
Eliminate dual-package-manager drift.

Changes:
- Choose one package manager policy for the repo.
- Default choice: Bun-primary, because the repo already has `bun.lock`, Bun-oriented docs, and Bun was the intended workflow.
- Remove `package-lock.json`.
- Update README and any scripts/docs to consistently use Bun commands.
- Ensure CI and local instructions do not mix npm and Bun.

Chosen default:
- Bun is the single source of truth.
- Keep `bun.lock`, remove `package-lock.json`.

### 8. Expand automated coverage around config and metadata

Goal:
Protect the fixed behavior with tests.

Changes:
- Add unit tests for [src/lib/env.ts](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/lib/env.ts):
  - localhost fallback in development
  - throws in production when URL is missing
  - accepts valid production URL
  - strips trailing slash if normalization is implemented
- Add tests for [src/app/layout.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/app/layout.tsx) metadata exports:
  - canonical root path
  - OG image path
  - title/description presence
- Add a test or assertion around reduced-motion CSS behavior if practical. If CSS-level testing is too brittle, cover this with manual verification instead.
- Add a lightweight assertion for `robots` and `sitemap` metadata routes if implemented as App Router files.
- Keep component tests for `Hero` and `FAQ`; extend `Hero` coverage to check disclosure copy once added.

## Files Expected to Change

Likely edits:
- [src/lib/env.ts](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/lib/env.ts)
- [src/app/layout.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/app/layout.tsx)
- [src/app/globals.css](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/app/globals.css)
- [src/components/Hero.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/components/Hero.tsx)
- [src/components/Footer.tsx](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/src/components/Footer.tsx)
- [package.json](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/package.json)
- [eslint.config.mjs](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/eslint.config.mjs)
- [README.md](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/README.md)
- [docs/PROMPT.txt](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/docs/PROMPT.txt)
- [.env.example](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/.env.example)

Likely new files:
- `public/og-image.png`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/lib/env.test.ts`
- possibly `src/app/layout.test.ts` or equivalent metadata-focused test file

Likely removed files:
- [package-lock.json](/Users/mikhail/Documents/CURSOR%20CODES/In%20Progress/p2t-hackathon-1/package-lock.json)

## Test Cases and Verification

Automated checks:
- `bun run lint`
- `bun run test:run`
- `bun run build`

New/updated test scenarios:
- Production env without `NEXT_PUBLIC_APP_URL` throws.
- Development env without `NEXT_PUBLIC_APP_URL` falls back to localhost.
- Metadata uses the normalized site URL.
- OG image reference points to an existing asset.
- `Hero` and footer include off-site form disclosure copy.
- FAQ behavior remains unchanged.
- Robots and sitemap routes generate valid output.

Manual verification:
- Open homepage and confirm no visual regressions.
- Confirm reduced-motion mode stops pulse, blob, and bounce animations.
- Inspect generated page metadata in browser devtools or built output.
- Visit `/robots.txt` and `/sitemap.xml`.
- Share-preview smoke test with a local/preview validator once the OG image exists.

## Acceptance Criteria

The fix is complete when:
- Production builds cannot emit localhost canonical or social URLs.
- `bun run lint`, `bun run test:run`, and `bun run build` all pass.
- Social metadata references a real asset.
- Reduced-motion users no longer see perpetual motion.
- Submission CTAs disclose the Google Form handoff.
- README and prompt docs match the actual repo.
- Only one lockfile strategy remains.
- New tests cover env and metadata regression paths.

## Assumptions and Defaults

- Chosen scope is all findings, not only critical issues.
- Bun is the canonical package manager.
- Inline disclosure is sufficient for the current off-site Google Form flow.
- No redesign is needed; fixes should preserve the current visual direction.
- iOS/Swift/Expo/OpenAI-specific skill concerns remain non-applicable to this codebase unless the repo expands later.
