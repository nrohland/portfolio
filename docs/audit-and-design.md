# Audit and design direction

Audit date: 2026-10-01.

## Existing base

`main` has only README and LICENSE. The previous implementation is in the open PR #1, branch `feat/portfolio-site-magicui`, based on Magic UI (MIT). This redesign reuses its Next.js App Router, React, TypeScript, Tailwind and static-export configuration. No existing test suite or CI workflow was present.

The old design constrained the entire site to 768px and used four identical small cards. Screenshots were only 720px wide; technologies were text pills. CV pointed to LinkedIn without an actual CV. Experience dominated the page length. Existing case-study assets and contact links were useful. No uncommitted local changes were overwritten.

Dependency installation identified vulnerable Next.js 16.1.1 and transitive packages. Updated Next.js and its ESLint config to 16.3.8; audit is clean. The lockfile is updated. Removed theme and icon runtime dependencies because this design ships one carefully verified light theme and server-rendered brand SVGs.

## Reference and direction

Reference: https://joachimhodana.com/. Visual inspection: compact personal presentation, large whitespace, restrained typography, minimal navigation and clear hierarchy. No source code or assets copied from the reference.

The user's refinement requests a distinct cover for each project, displayed small. Final direction: a 1000px editorial column, a brief split hero, compact 310px covers beside substantial project descriptions, and case-study pages for architecture and scope. Mobile stacks each cover above its text. Project identities come from their subject and actual product: green commerce, ink/cream lending, terracotta public-energy data, muted analytic advertising.

IBM Plex Sans supplies a readable technical voice without terminal styling. Georgia is used sparingly for the personal note and LendFlow's existing editorial identity. Warm paper and dark ink preserve contrast; one subdued olive accent identifies the author. Borders divide content, not box every element. No decorative animation. Reduced motion disables smooth scrolling. SVG logos are monochrome with labels to keep the different projects visually coherent.

## Selection

- Northstar: deployed product, semantic SQL, deterministic generator, reproducible validations and curated conversational demo. Strongest complete product.
- LendFlow: deployed product, layered dbt on DuckDB, governed lifecycle metrics, curated Ask interface. Shows complementary product analytics.
- Barrilito / vaca-muerta-pulse: implemented Meltano/BigQuery/dbt pipeline, explicit grain and unit choices, committed source snapshots. Included as a technical case in development, never presented as a shipped dashboard.
- Ad Analytics: tested advertising marts and Tableau Public dashboard. Smaller scope, included last as supporting BI work.

No provider logos or claims of production LLM integrations: both conversational demos are deterministic. No invented impact, employer claims or project performance metrics. Northstar and LendFlow disclose synthetic data. Barrilito's chart uses committed monthly oil-production values (m³), not live telemetry.

## Reuse and remaining considerations

Retained Next.js export, robots route, data configuration concept, favicon route and MIT attribution. Kept public contact information from the original branch. No PDF CV exists, so the UI links explicitly to professional background on LinkedIn.

Canonical host defaults to the existing configured `nicolasrohland.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` at build time if publishing elsewhere. No deployment or merge is performed by this change.
