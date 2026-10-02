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
