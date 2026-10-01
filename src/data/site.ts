export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://nicolasrohland.vercel.app").replace(/\/$/, "");
export const profile = { name: "Nicolás Rohland", role: "Analytics Engineer / Data & AI", lead: "I turn business questions into data products people can use." };
export const contact = { email: "nicolas.rohland@gmail.com", linkedin: "https://www.linkedin.com/in/nicolas-rohland", github: "https://github.com/nrohland" };
export type Technology = "Python" | "SQL" | "dbt" | "DuckDB" | "BigQuery" | "Meltano" | "Next.js" | "React" | "Tableau";
export type Project = {
  slug: string; title: string; category: string; thesis: string; problem: string;
  outcome: string; role: string; stack: Technology[]; image?: string; imageAlt?: string;
  disclosure: string; flow: string[]; decisions: string[]; limitations: string;
  repoUrl: string; liveUrl?: string; sourceUrl: string;
};
export const projects: Project[] = [
  {
    slug: "northstar", title: "Northstar", category: "Ecommerce profitability", thesis: "Sales are only half the story.",
    problem: "Revenue growth can hide weak margins, expensive acquisition and low-value customers.",
    outcome: "A shared metric layer connects product margins, customer cohorts and advertising efficiency in one dashboard.",
    role: "Data modeling & product implementation", stack: ["Python", "SQL", "DuckDB", "Next.js", "React"],
    image: "/case-studies/northstar.webp", imageAlt: "Northstar live dashboard showing contribution profit and ecommerce revenue",
    disclosure: "Synthetic data · Deterministic analyst demo",
    flow: ["Python generator", "Parquet facts & dimensions", "DuckDB semantic views", "JSON snapshot", "Dashboard & analyst"],
    decisions: ["Generate a reproducible dataset with a fixed seed and explicit commercial patterns.", "Calculate ratios from aggregated numerators and denominators in SQL, rather than averaging row-level ratios.", "Publish a static snapshot shared by the dashboard and the analyst, without a database runtime in deployment."],
    limitations: "The conversational analyst is a deterministic simulation, not a production LLM. Attribution is synthetic and does not measure incrementality.",
    repoUrl: "https://github.com/nrohland/ecommerce-profitability-analytics", liveUrl: "https://ecommerce-profitability-analytics.vercel.app",
    sourceUrl: "https://github.com/nrohland/ecommerce-profitability-analytics/blob/9f89a1bb380cc174330967092dee306cf6b92f96/README.md",
  },
  {
    slug: "lendflow", title: "LendFlow", category: "Product & funnel analytics", thesis: "An approval is not a funded loan.",
    problem: "An approval rate alone does not explain where applicants leave the lending journey.",
    outcome: "A governed funnel separates application, approval and funding, with device-level friction and a curated SQL question interface.",
    role: "Analytical modeling & dashboard implementation", stack: ["Python", "SQL", "dbt", "DuckDB", "Next.js"],
    image: "/case-studies/lendflow.webp", imageAlt: "LendFlow live dashboard with application, approval and funding metrics",
    disclosure: "Synthetic data · Unofficial lending case study",
    flow: ["Python generator", "Parquet", "dbt on DuckDB", "Mart export", "Next.js & Ask LendFlow"],
    decisions: ["Define the application lifecycle and metric denominators before building the dashboard.", "Use tested staging, intermediate and mart models as the metric governance point.", "Keep Ask LendFlow on curated questions from the same export as the dashboard, with no live model calls."],
    limitations: "Not affiliated with a real lender. SLA thresholds and a formal EDA notebook remain outside the implemented scope. No measured business impact is claimed.",
    repoUrl: "https://github.com/nrohland/lendflow-fintech-analytics", liveUrl: "https://lendflow-fintech-analytics.vercel.app",
    sourceUrl: "https://github.com/nrohland/lendflow-fintech-analytics/blob/ffc1decc2c81b9278c874c43bd50e19f411bfc79/README.md",
  },
  {
    slug: "barrilito", title: "Barrilito", category: "Open-data engineering · In development", thesis: "A clearer view of Vaca Muerta.",
    problem: "Large public files, mixed units and unclear grains make basin-level production difficult to interpret.",
    outcome: "Monthly ingestion and tested dbt marts turn official production records into comparable company, area and basin metrics.",
    role: "Pipeline & analytical modeling", stack: ["Python", "Meltano", "BigQuery", "dbt", "SQL"],
    disclosure: "Official monthly data · Pipeline built, public UI pending",
    flow: ["Capítulo IV / CKAN", "Meltano", "BigQuery raw", "dbt staging & marts", "Notebook snapshots"],
    decisions: ["Use monthly ingestion to match the source cadence, with partitioned and clustered BigQuery tables.", "Separate basin production per calendar day from well productivity per effective operating day.", "Keep unit conversions and grains explicit. A planned interpolated counter is a simulation of monthly data, not live telemetry."],
    limitations: "The public frontend is not built. The portfolio chart is a visualization of the committed 2025 mart snapshot, not a product screenshot or real-time feed.",
    repoUrl: "https://github.com/nrohland/vaca-muerta-pulse",
    sourceUrl: "https://github.com/nrohland/vaca-muerta-pulse/blob/1c1c30eb9e29901048cbd812eb14f46c109e4439/apps/spike/data/SOURCE.md",
  },
  {
    slug: "ad-analytics", title: "Ad Analytics", category: "Campaign measurement", thesis: "Campaign data, ready for analysis.",
    problem: "Raw advertising events need consistent definitions before campaign and conversion metrics can be compared.",
    outcome: "Tested dbt marts power a Tableau dashboard for campaign performance, conversion funnels and user behavior.",
    role: "Ingestion, dbt modeling & BI", stack: ["Python", "SQL", "dbt", "DuckDB", "Tableau"],
    image: "/case-studies/ad-analytics.webp", imageAlt: "Tableau advertising dashboard with campaign performance and conversion charts",
    disclosure: "Synthetic advertising dataset",
    flow: ["Kaggle CSVs", "Python ingestion", "DuckDB raw", "dbt staging & marts", "Tableau"],
    decisions: ["Model users, campaigns, ads and events separately before publishing analytical marts.", "Flag campaigns without events explicitly instead of treating them as healthy zero-activity campaigns.", "Document duplicate user identifiers as a dataset limitation rather than hiding the warning."],
    limitations: "A learning-scale synthetic dataset. Duplicate user identifiers are a documented quality warning; the dashboard does not demonstrate measured advertising impact.",
    repoUrl: "https://github.com/nrohland/01_dbt_ad_analytics",
    liveUrl: "https://public.tableau.com/app/profile/nicolas.rohland/viz/ADANALYTICSPERFORMANCE/ADANALYTICSPERFORMANCE",
    sourceUrl: "https://github.com/nrohland/01_dbt_ad_analytics/blob/main/README.md",
  },
];
export const technologyGroups: { name: string; items: Technology[] }[] = [
  { name: "Model & transform", items: ["Python", "SQL", "dbt", "Meltano"] },
  { name: "Store & query", items: ["DuckDB", "BigQuery"] },
  { name: "Build & communicate", items: ["Next.js", "React", "Tableau"] },
];
