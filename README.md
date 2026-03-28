# Fund Me If You Can — AI VC Hackathon (landing site)

A small static marketing site for the **Fund Me If You Can** community hackathon: one week to ship a landing page and pitch an AI VC. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Tech stack

- Next.js 16 (Turbopack in dev)
- React 19
- TypeScript
- Tailwind CSS v4
- Vitest + React Testing Library
- ESLint (`eslint-config-next` flat config)
- Bun for installs and scripts (see [Lockfile](#lockfile))

## Project structure

```
├── public/
│   └── og-image.png          # Open Graph / social preview image
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx        # Root layout + metadata (uses getSiteUrl())
│   │   ├── page.tsx
│   │   ├── robots.ts         # /robots.txt
│   │   └── sitemap.ts        # /sitemap.xml
│   ├── components/           # Hero, FAQ, Footer, etc.
│   └── lib/
│       └── env.ts            # Validated env + getSiteUrl()
├── docs/
│   └── PROMPT.txt            # Optional notes for working with an AI assistant
├── eslint.config.mjs
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.mjs
├── vitest.config.ts
└── package.json
```

## Prerequisites

- [Bun](https://bun.sh/) (recommended; this repo uses `bun.lock` only)

## Setup

```bash
bun install
cp .env.example .env.local
```

For local development you can leave `NEXT_PUBLIC_APP_URL` unset; it defaults to `http://localhost:3000`.

## Environment variables

| Variable | Required | Notes |
|----------|----------|--------|
| `NEXT_PUBLIC_APP_URL` | **Yes in production** | Public site origin, no trailing slash (e.g. `https://your-domain.com`). Used for `metadataBase`, Open Graph, `robots.txt`, and `sitemap.xml`. Must not be `localhost` in production. |
| `NODE_ENV` | Set by the platform | `production` enforces the above. |

## Commands

```bash
bun run dev        # Dev server (Turbopack)
bun run build      # Production build
bun run start      # Run production build locally
bun run lint       # ESLint
bun run test       # Vitest watch
bun run test:run   # Vitest single run
```

## Deployment

1. Set `NEXT_PUBLIC_APP_URL` on your host (e.g. Vercel) to the **production** URL of this site.
2. Run `bun run build`; fix any build errors before shipping.
3. After deploy, check `/robots.txt`, `/sitemap.xml`, and a share preview debugger to confirm metadata and `og-image.png`.

## Lockfile

This repository standardizes on **Bun**: use `bun install` / `bun.lock`. Do not commit `package-lock.json`.

## License

See [LICENSE](LICENSE) if present in the repo.
