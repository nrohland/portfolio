# Verification, 2026-10-01

Verified against the exported production files served by Python on localhost, not only the Next.js development server.

## Build and code

- `npm run build`: pass, static homepage plus four project routes, favicon, robots and sitemap.
- `npm run lint`: pass.
- `npm run typecheck`: pass. Script regenerates route types before TypeScript.
- `npm audit`: zero vulnerabilities.
- `git diff --check`: pass.
- Existing tests: none in the original branch. Added CI for lint, typecheck and build; no artificial unit-test claims.

## Browser checks

| Element | Action and observed result |
| --- | --- |
| Hero project CTA | Click navigates to `/#work`. |
| Work / About / Contact navigation | Click navigates to the matching real anchor. |
| Back to top | Click navigates to `#content`. |
| Each project cover | Click opens its source-backed case-study page. Four routes checked. |
| Case study return links | Click returns to `/#work` for all four cases. |
| Author wordmark | Click returns to `/`. |
| Project title / Case study text links | Same validated routes as the cover. Exported href and destination checked. |
| Project demos | Both Northstar and LendFlow opened and rendered in the browser; captures used in covers. |
| Repository, source documentation, Tableau, LinkedIn links | All unique external hrefs probed: HTTP 200. No 404. |
| Email | Correct `mailto:nicolas.rohland@gmail.com` verified in markup. OS email composer was not invoked. |
| Keyboard | Tab reaches links; focused project CTA has a visible 2px olive outline. |

No browser console warnings or errors observed on the portfolio. Content images loaded on all four project detail pages at 390px.

## Responsive and accessibility

- Desktop: 1440px, inspected full page and project case.
- Mobile: 390px, inspected full homepage and all four project detail routes.
- Additional homepage breakpoints: 320px and 768px.
- `document.documentElement.scrollWidth === innerWidth` at tested widths. No horizontal overflow.
- Final homepage: no links with a target smaller than 44×44px at 1440 and 390px.
- All content images have descriptive alt text; decorative logos have adjacent names and are excluded from redundant screen-reader output.
- Document language, section headings, navigation label and skip link present.
- Body contrast 14.37:1; secondary text 5.25:1; olive accent 7.46:1 on paper. WCAG AA text contrast satisfied for these page tokens.
- No entrance or scroll-triggered animations. `prefers-reduced-motion` disables smooth scrolling by CSS, verified in source. Emulated reduced-motion browser state was not available.
- One light theme shipped and inspected. No unverified dark theme.

## Links and metadata

A parser inspected all five exported content pages: no broken internal routes, anchors or image paths; titles, descriptions, canonicals and OpenGraph images present. Robots and sitemap exist. Thirteen unique external links returned HTTP 200 on the audit date. External availability can change independently of this site.

## Performance scope

Lighthouse was installed and attempted against the static export. Chrome could not start its debugging endpoint in this macOS execution environment; a separate headless Chrome attempt aborted as well. No Lighthouse score or field Core Web Vitals are claimed.

Fallback checks: all production pages are statically generated, no API/database needed at runtime, no third-party trackers, self-hosted Latin font subsets, WebP screenshots with lazy loading below the fold, local SVG technology icons. Homepage HTML is about 92KB uncompressed; linked Next assets (including fonts) are about 186KB with gzip; all three screenshot files total about 129KB. These are asset inventory measurements, not network-throttled performance results. Re-run Lighthouse on the deployed HTTPS preview before release.

## Delivery gate

Design direction and the compact-cover refinement were applied. Real source repositories back the content, stacks and scope. Synthetic demos and unfinished Barrilito UI are disclosed. No invented metrics, testimonials, provider integrations or CV downloads. Cover identity, typographic hierarchy and spacing follow the individual project content. All navigation has a destination. No actionable high-severity UI-polish finding remains in inspected states.

Remaining release work: choose/confirm the public canonical domain through `NEXT_PUBLIC_SITE_URL`, merge the PR and deploy, then run hosted Lighthouse. No merge or production deployment performed. Barrilito's frontend and a PDF CV are outside this portfolio implementation.

## Browser-comment revision

The final selection now has three projects. Ad Analytics is absent from the homepage, static routes and sitemap. SQL and React are absent from all technology lists; the frontend group contains only Next.js. Existing technical SQL explanations remain. Brand colors and footer GitHub/LinkedIn icons were checked in the rendered DOM. Barrilito's new cover is an explicitly illustrative extraction/strata SVG; its real chart remains on the case page.

Fresh checks: lint, typecheck and static build pass. This local build used `npm run build -- --webpack` because Turbopack was denied a localhost IPC port by the execution sandbox. The existing CI continues to exercise the normal build. Updated desktop/mobile screenshots were captured. Homepage at 1440px and 390px has no overflow or unloaded content images, and no browser console errors were observed. The link/metadata parser now checks four content pages.

## Owner-supplied cover images

Replaced all three homepage covers with the illustrations supplied by the owner, preserving the full 16:9 composition and existing real screenshots on case-study pages. WebP files total approximately 329 KiB. Lint, typecheck and production Webpack build passed. Desktop 1440px and mobile 390px reviewed; mobile image intrinsic-width overflow corrected and document width verified at 390px. Local route/image validation passed.

## Reference-led hero update

Removed the separate monogram header on the homepage. Name and contacts lead the page, followed by one short description, a labeled technology row, and minimal section navigation. Airflow, ClickHouse, Looker and Metabase were confirmed by the owner and added to the general stack; project stacks stay source-backed. All ten hero technologies have their matching logos. Lint, typecheck and static Webpack build passed. Visual review at 1440px and 390px; no horizontal overflow at 1440/390/320px.

## Approved chart covers, 2026-10-02

Replaced the illustrated homepage covers with uniform SVG compositions: Ecommerce Analytics (product contribution margins), Fintech Product Analytics (application-to-funding funnel), and Energy Sector Analytics (monthly oil production · Vaca Muerta). Shared font, colors, dimensions and title/subtitle/chart positions; only chart type differs. Public project titles and OpenGraph are updated, while route slugs and real case-study screenshots stay stable.

Ecommerce and fintech values come from their synthetic datasets, with only rounded percentages displayed. Energy uses the official committed Jan–Dec 2025 extract; its accessible description and case-study limitations disclose that 2026 is unavailable. No conversion-rate metric was invented.

Fresh checks: full lint, typecheck, production Webpack build, and `git diff --check` pass. All four exported content pages have valid internal routes, anchors, image paths and metadata. Desktop 1440px and mobile 390px visually reviewed; no horizontal overflow at 1440/768/390/320px. All three covers have identical heights at each tested primary viewport. All non-anchor/non-email homepage links retain `_blank`; no browser warning/error logged. No existing test suite. Lighthouse limitation and hosted release checks above remain applicable.

External links: all ten returned HTTP 200 on the final retry; the three initial GitHub 503 responses were transient.

## Interactive card refinement

Ecommerce now uses a customer-retention cohort heatmap, so its visual describes repeat customer behavior rather than a lending funnel. Fintech uses proportional vertical stage columns connected by smooth curves, following the requested Vercel funnel direction. The energy chart is unchanged. Source values and synthetic-data disclosures are retained.

The cover is a link-shaped card with an 8px radius and one quiet border. Its always-visible “View case study” label makes the destination clear on touch devices; the external-link arrow signals a new tab. A 2% scale and soft elevation on precise-pointer hover reinforce clickability without changing layout. Keyboard focus remains visible, and reduced-motion disables scale and transitions. Repository links remain directly beside each project’s case/demo links.

Design read: personal technical portfolio for hiring teams, in a restrained editorial style. ENERGY 1 / RHYTHM 2 / MOTION 1. The shared green palette and IBM Plex Sans preserve the approved identity; only the project’s analytical question changes the chart type. Equal chart slots keep titles and subtitles aligned.

Fresh validation: lint, typecheck, production Webpack build and diff check pass after regenerating cloud-conflicted dependency/type caches. Fixed SVG tooltip titles to use one text child, resolving the observed hydration mismatch. The final production document loads without browser warnings/errors. Desktop 1440px, mobile 390px and minimum 320px have no overflow, including the new card footer. Keyboard focus on the cover link is visible; clicking the fintech cover opens the correct case in a separate tab. Local routes/assets and ten external links passed the renewed link check.

Antislop delivery gate:
- Hard gate PASS: charts use repository values with source/disclosure; unchanged navigation has valid hrefs; new cover action opens the case in a new tab; focus is visible and tested widths have no overflow. No fabricated metrics, testimonials, dead controls or runtime errors in final inspected state.
- Purpose gate PASS: card radius/border identify a clickable preview; hover scale/elevation signal interaction, with reduced-motion support; arrow identifies new-tab navigation; green/IBM Plex Sans retain the owner-approved visual identity.
- Liveliness PASS: ENERGY 1 / RHYTHM 2 / MOTION 1; shared cover structure is explicitly requested, while heatmap/funnel/line reflect three different analytical questions. The unchanged name-led hero and typography-led About preserve section rhythm.
- Craftsmanship/quality PASS: titles and subtitle slots stay aligned; layout works at desktop/mobile; hover is restricted to precise pointers and never required for navigation; all chart values remain source-backed. A working build and browser click-through back the final state.


## Revenue composition selection, 2026-10-02

The owner selected revenue composition for Ecommerce. Horizontal bars show product gross revenue grouped by category from the synthetic dashboard export. Nutrition, Hydration and Wellness retain their categories; Other combines Vitamins, Energy and Accessories. Bar widths use exact shares of the product-export total; largest-remainder rounding gives labels 62%, 13%, 8% and 17%, summing to 100%. Fintech and Energy are unchanged.

Fresh lint, typecheck, production Webpack build and diff check pass. Final desktop 1440px and mobile 390px screenshots reviewed; mobile document width equals viewport width and no browser warnings/errors were logged. Source-backed accessible chart description and existing new-tab case-study action remain present.

Antislop delivery gate: hard gate PASS (source-backed shares and synthetic disclosure); purpose PASS (horizontal category comparison differs from fintech stage columns); liveliness PASS (approved common typography/palette with distinct chart forms); craftsmanship PASS (aligned slots, responsive SVG and readable labels). Earlier hosted Lighthouse/canonical-domain release limitations remain.


## Production publication and logo correction, 2026-10-03

PR #2 was merged at a2cbb89 and deployed from main to https://nicolas-rohland.vercel.app on Vercel Hobby, connected to the existing GitHub repository. NEXT_PUBLIC_SITE_URL is set to that origin for production and preview. The public homepage renders all three final charts and its canonical URL points to the new domain; all non-anchor/non-email links retain new-tab targets. Desktop 1440px and mobile 390px have no overflow or browser warnings/errors.

The shared stack now uses official multicolor SVG assets for Airflow and Python, plus official Google Cloud color SVGs for BigQuery and Looker. Existing Simple Icons brand colors for dbt, DuckDB, ClickHouse, Metabase, Next.js, GitHub and LinkedIn remain. Meltano already uses the official asset. Labels, dimensions and original artwork are preserved. Fresh lint, typecheck, static Webpack build and diff check pass; all official logo images loaded at 20px in the desktop hero and desktop/mobile visual review passed. Favicon and project covers are unchanged.

## Approved project copy and process diagram, 2026-10-03

The owner-approved project headlines and Friction / Solution / Output copy now appear on the homepage and case pages. Ecommerce and Fintech show Completed; Energy shows In Development. Completed describes the portfolio scope, not production usage. The synthetic-data and scope disclosures remain. My role has been removed from all four content pages. The short cover titles and their charts stay as approved.

How I build is a five-stage, labeled ordered list: Find the sources, Explore & clean, Model, Test, Visualize. Static connecting lines and arrows express sequence; they are hidden from assistive technologies. The diagram is horizontal on desktop and vertical below 700px. Its descriptions are the owner's approved copy. No library, animation or new runtime JavaScript was added.

Validation: lint, typecheck, production Webpack build and diff check passed. All four content pages passed local route, anchor and canonical-metadata checks. Desktop 1440px and mobile 390px screenshots reviewed; browser measurements show no overflow at 1440/390/320px. The process has five stages, aligned in one row on desktop and one column on mobile. No browser warnings/errors were observed. No existing test suite. The hosted PageSpeed attempt returned HTTP 429, so no Lighthouse score is claimed.

Antislop delivery gate:
- Hard Gate PASS: owner-approved copy adds no invented metrics or integrations; existing chart disclosures remain; the diagram is semantic HTML; all local destinations exist; tested widths have no overflow and the production build succeeds.
- Purpose Gate PASS: dots, lines and arrows express process order rather than decoration; labels and descriptions provide the equivalent text; bold definition labels help scan the three project questions. No new shadows, gradients, badges or motion.
- Liveliness PASS: ENERGY 1 / RHYTHM 2 / MOTION 1 retained from the approved editorial direction. Shared IBM Plex Sans and green palette remain; the wide process diagram contrasts with the project rows and compact hero.
- Craftsmanship PASS: inspected desktop/mobile screenshots show readable labels, aligned stages and contained text; the existing visible focus and reduced-motion rules remain; static ordered content needs no loading/empty/error state.
- Copywriting PASS: headlines and descriptions match the owner's approved text, with no fabricated performance or impact claims; completion labels retain synthetic/scope context; technical case details remain source-backed.
