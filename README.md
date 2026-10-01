# Nicolás Rohland, portfolio

A personal, project-led portfolio for Analytics Engineering / Data & AI. Compact editorial covers lead to three source-backed case studies. Next.js App Router, TypeScript, React and Tailwind, with self-hosted IBM Plex Sans and server-rendered SVG technology icons.

## Development

Requires Node.js 20.9 or newer (Node 22 recommended).

```sh
npm ci
npm run dev
```

Checks and static export:

```sh
npm run lint
npm run typecheck
npm run build
```

`npm run build` writes `out/`, including the homepage, project pages, favicon, robots and sitemap. No backend, credentials, analytics or runtime database is needed. GitHub Actions runs these checks on pushes and pull requests. No test suite existed in the original project.

To inspect the exact production files locally:

```sh
python3 -m http.server 3000 --directory out
```

## Publish

Import this repository in Vercel with the Next.js preset, or serve `out/` from a static host. Project paths use trailing slashes and directory indexes. Set `NEXT_PUBLIC_SITE_URL` **before building** to the final public origin; the existing default is `https://nicolasrohland.vercel.app`.

No merge or production deployment is part of this redesign. Configure a new domain and rebuild when the canonical host changes.

## Content

`src/data/site.ts` contains the profile, contact links, project evidence, stack and architecture decisions. `src/components/project-cover.tsx` contains the compact cover composition and Barrilito's source-backed SVG series.

- Northstar: ecommerce profitability and deterministic conversational analytics.
- LendFlow: governed lending-funnel analytics and curated SQL questions.
- Barrilito: implemented open-data pipeline, public frontend still in development.

Synthetic-data and development limitations are explicit. No LLM providers are claimed by the deterministic demos. LinkedIn is labeled as professional background, not as a downloadable CV.

[Audit and design](docs/audit-and-design.md), [asset sources](docs/assets.md), and [verification](docs/verification.md).

## Attribution

The technical base came from the previous MIT-licensed adaptation of the [Magic UI portfolio](https://github.com/magicuidesign/portfolio) by Dillion Verma. Original copyright is preserved in `LICENSE`. The visual design and page composition were replaced. Joachim Hodana's site was a visual reference only; no code, copy or assets were copied.

Brand assets and font licenses are documented in `docs/assets.md`.
