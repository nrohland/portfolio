# Restore approved visuals within PR 9's editorial structure

PR 9 was already merged when this follow-up began. Its hero, alternating project composition, full-width energy chapter, section order, contact close, and expanded case-study sections are preserved.

Restored the approved revenue composition, curved fintech funnel, and monthly oil production covers using the existing chart data and renderers. Portrait covers fit the alternating columns; the wide energy chapter and desktop case openings use the same titles, subtitles, graphs and disclosure in two columns. Mobile returns to one column. No chart data, outcome, or project description was changed.

Reconnected the existing Stack component in home project metadata, technology groups, and case-study metadata. Official Python, Airflow, BigQuery, Looker and Meltano SVGs remain unchanged, including the approved multicolor Airflow and Looker assets. Other logos retain Simple Icons and brand colors. Small SVG logos load eagerly and reuse cached assets. Labels remain visible.

BuildProcess is restored from PR 7's merge commit 31945e4, including aligned SVG connections, mobile geometry, screen-reader description, one-time motion and reduced-motion support. Its stylesheet adapts to the editorial palette. Removed CSS for the replaced numbered process list.

Validation: lint, typecheck, production Webpack build and git diff checks passed. Reviewed desktop 1440, mobile 390, and an ecommerce desktop case opening plus fintech mobile case. Home and all three case routes have no horizontal overflow at 320px. All ten official-logo instances were loaded in the browser. No console warnings/errors. Internal case links remain same-tab and external demo/repository links retain new-tab targets.

Design read: preserve the owner's selected editorial structure while restoring the established chart and logo vocabulary. ENERGY 1 / RHYTHM 2 / MOTION 2 limited to the approved workflow.

- Hard Gate PASS: requested asset reuse, no invented data, no new navigation or controls, all routes checked at 320px, visible text labels and existing focus styles preserved; build and browser checks passed.
- Purpose Gate PASS: chart covers identify project domains; wide variants preserve the editorial proportions; logos identify contextual tools; the approved flow shows the working process.
- Liveliness PASS: alternating chapters and the wide energy section preserve rhythm; established typography and green connect restored visuals to the new layout.
- Craftsmanship PASS: responsive review and loaded-logo checks passed, existing case-study sections retained, source data unchanged, reduced-motion and accessible descriptions preserved.

Proof is saved in the task outputs: restored-editorial-desktop.png, restored-editorial-mobile.png, restored-project-desktop.png, restored-case-desktop.png, and restored-case-mobile.png.
