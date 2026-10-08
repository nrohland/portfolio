# Visual case studies

This iteration changes only the three project routes and adds case-only styles/components. Home source, project data used by the home, approved covers, logos and How I build are unchanged.

## Narrative

- Ecommerce: real dashboard first; 24-month revenue/contribution chart; source-backed annual insight; top five revenue SKUs and margins; subscriber vs one-time economics; LTP:CAC by acquisition channel; local metric pipeline and contribution contract.
- Lending: approved curved funnel at large scale, with stage names/counts; separate rate populations; device completion; actual dashboard; governed dbt/DuckDB export pipeline. No causal claim or experiment ship decision.
- Vaca Muerta: named explicitly; zero-baseline monthly production chart; December operator volumes; production vs productivity; well/company/area grains; actual source-to-development-marts-to-snapshot path. Public frontend is pending.

## Evidence and provenance

`src/data/case-evidence.json` contains selected committed export fields, not fabricated examples. `sources` records SHA-256 hashes of the full source files. No secrets or personal data are copied.

- Ecommerce repo commit `9f89a1bb380cc174330967092dee306cf6b92f96`, `public/data/dashboard.json`: monthly, products, customerSegments, channels. Sum monthly gross revenue: 2024 $2,393,442; 2025 $4,218,100. Sum contribution: 2024 −$300,772.34; 2025 −$631,661.75. Insight compares these yearly totals. SKU and customer/channel figures use the full 24-month export, not the 2025 hero snapshot. LTP is profit before acquisition; 90-day net revenue has a different window. Source definitions: `docs/metrics.md`, `docs/data_dictionary.md`.
- Lending repo commit `ffc1decc2c81b9278c874c43bd50e19f411bfc79`, `web/src/data/dashboard.json`: device_type completion rows. All device rates verified against numerator/denominator. Hero stage counts remain the approved counts in `cover-charts.ts`. Approval 22,351/45,692 = 48.9%; approved-to-funded 13,065/22,351 = 58.5%; funding 13,065/100,000 = 13.1%. Window ends exclusive June 30, 2025. Source: `docs/dashboard.md`, `docs/architecture.md`, `specs/analytical-spec.md`.
- Vaca Muerta committed `apps/spike/data/monthly_pulse.csv` and `company_latest.csv`, documented in `apps/spike/data/SOURCE.md` at `1c1c30eb9e29901048cbd812eb14f46c109e4439`. Operator chart uses the five largest December 2025 oil volumes, in million m³. These are monthly volumes, not well productivity. Current GitHub `apps/web/README.md` still confirms a placeholder frontend; no future UI is shown as delivered.

All simulated ecommerce/lending evidence is labeled synthetic. Energy extract coverage is explicit. No measured business impact is claimed.

## Verification

Lint, typecheck and webpack production build; source-file hash reconciliation; annual insight arithmetic; device denominators and sorted operator volumes; desktop/mobile visual review; 320px overflow check; internal same-tab navigation and external demo/source/repo links; console and image-loading checks.

The diagrams use actual pipeline stages with connected boxes and switch to readable vertical flows on compact screens. SVGs and HTML charts are server rendered, with visible labels and accessible descriptions. The commercial trend has a separate compact chart and an expandable HTML data table. No new client chart library or motion was introduced.
