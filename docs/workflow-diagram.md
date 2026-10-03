# Workflow diagram verification

2026-10-03. Replaces the five-step timeline with the connected architecture figure requested by the owner, inspired by Blueprintdata's “One governed metrics layer”. All wording describes the owner's workflow, not the Takenos engagement.

Design read: personal analytics engineering portfolio, editorial language. ENERGY 1 / RHYTHM 2 / MOTION 2 localized to this explicitly requested figure.

- Layout: sources converge into exploration, cleaning, modeling, and tests; tested data branches into metrics, dashboards, and visualizations. A separate vertical SVG keeps mobile text readable.
- Typography and color: existing IBM Plex Sans, ink, muted text, and green preserve the portfolio identity.
- Grid: a faint technical drawing background is confined to the requested architecture figure.
- Motion: dots travel along connections once when the figure enters the viewport. Animation ends within 4.6 seconds and does not obscure content. Reduced-motion preferences skip initialization and hide moving dots. SVG remains complete without JavaScript.
- Accessibility: one figure caption and a complete screen-reader description; decorative SVGs are hidden from assistive technology.
- Dependencies: native SVG animation and IntersectionObserver; no additional package.

Checks: ESLint, Next type generation, TypeScript, production Webpack build, and git diff whitespace validation passed. Desktop 1440 and mobile 390 screenshots reviewed; 390 and 320 viewport widths equal document width. Desktop longest detail text measures 164px inside a 192px node with 16px left padding. Browser warnings/errors: none. Moving dot visible in desktop screenshot. Existing navigation and project links are untouched.

Antislop delivery gate:

- Hard Gate PASS: authorized diagram, no invented metrics or claims, no new controls or links, no overflow at 390/320, text uses existing AA palette; build and browser checks passed. Existing focus and link behavior preserved.
- Purpose Gate PASS: block grouping exposes transformation boundaries; grid evokes the requested technical figure; connectors show data direction; brief motion demonstrates flow. No gratuitous icons, glows, or shadows.
- Liveliness PASS: explicit dials above; central preparation layer is the focal point, spacing separates inputs/process/outputs, green matches the site's identity.
- Craftsmanship PASS: English content follows the approved workflow, responsive composition is verified, static content works without client animation, and reduced motion is respected.

Proof: workflow-desktop.png and workflow-mobile.png in this task's outputs directory.
