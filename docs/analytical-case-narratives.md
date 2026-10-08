# Case study narrative revision

Scope is the three case routes. Home content, cover components, technology logos and the workflow are unchanged. Existing charts and diagrams remain, with a transition table and bank-connection comparison added to the lending case. Ecommerce opens with its monthly analysis and shows the finished dashboard after the model explanation.

## Writing rules

Applied https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md to case-only text. Removed promotional headings, repeated synthetic disclosures and generic claims. Headings use sentence case. The new copy names measures, source grains, model behavior and limits.

First-person descriptions explain implemented work and a reading sequence. They do not assert undocumented initial beliefs or a historical order of discovery. Ecommerce and lending generators deliberately seed patterns. The copy identifies those as planned checks. Vaca Muerta has an actual documented correction, so its narrative describes the original and replacement calculations.

## Source audit

Source heads are unchanged from the previous iteration. See visual-case-studies.md for commit IDs and the existing export provenance.

Ecommerce:
- README.md identifies the US Amazon/DTC simulation, 12 SKUs and 24 months.
- scripts/validate_data.py defines checks for high-revenue product margins, subscriber value and acquisition economics.
- sql/metrics/semantic_views.sql defines pre-join item aggregation, product-day advertising, customer windows and ratio aggregation.
- public/data/dashboard.json supports the annual totals, Daily Nutrition Pro margin, Sleep Support Berry contribution ranking and customer/channel comparisons.
- docs/metrics.md documents attribution and observation-window limits. There is no recorded personal change-of-mind story.

Lending:
- specs/analytical-spec.md fixes the product question, stage populations, Mobile Safari pattern and bank-connection experiment.
- docs/data-generation.md identifies the patterns as generator inputs, six table grains and repeated applicants.
- docs/dashboard.md records supported slices, missing intersections, unshipped SLA measures and null product decision.
- web/src/data/dashboard.json supports the eight lifecycle transitions, three bank-connection browser cuts and primary experiment comparison. Rows copied without estimates or interpolation.
- transform/models and transform/tests implement the facts and reconciliation tests. No completed EDA notebook exists in the inspected repository.

Vaca Muerta:
- extraction/docs/hito-1-full-year-2025-load.md records count reconciliation, duplicate-key check, schema-cache correction, measured duration and sandbox restrictions.
- transform/models/staging/stg_produccion_pozo_mes.sql fixes types, filters and duplicate priority.
- docs/adrs/0002-ui-spike-notebook.md explicitly records the wrong effective-day headline in the first notebook and the corrected calendar-day rate.
- apps/spike/data/headline.csv contains both December rates. Its full-file hash is added to case-evidence.json.
- fct_well_month.sql documents why production-date partitioning removed historical rows in the sandbox. Existing reconciliation tests compare company, area and headline totals to well-month facts.
- SOURCE.md and apps/web/README.md identify extract coverage and the pending public interface.

## Validation

Lint, typecheck and production build. New exported rows reconciled with committed project data. Checked lifecycle differences, experiment populations and confidence interval, SKU contribution ranking and headline formulas. Internal paths and pinned source links checked. Desktop and mobile review, including 320px overflow checks for all three cases. No test suite exists in the portfolio package.
