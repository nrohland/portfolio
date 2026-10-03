export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://nicolas-rohland.vercel.app").replace(/\/$/, "");
export const profile = { name: "Nicolás Rohland", role: "Analytics Engineer / Data & AI", lead: "I turn business questions into data products people can use." };
export const contact = { email: "nicolas.rohland@gmail.com", linkedin: "https://www.linkedin.com/in/nicolas-rohland", github: "https://github.com/nrohland" };
export type Technology = "Python" | "dbt" | "DuckDB" | "BigQuery" | "Meltano" | "Next.js" | "Airflow" | "ClickHouse" | "Looker" | "Metabase";
export type Project = {
  slug: string; title: string; category: string; thesis: string; problem: string;
  solution: string; outcome: string; stack: Technology[]; image?: string; imageAlt?: string;
  disclosure: string; flow: string[]; decisions: string[]; limitations: string;
  repoUrl: string; liveUrl?: string; sourceUrl: string;
};
export const projects: Project[] = [
  {
    slug: "northstar", title: "Ecommerce Profitability & Unit Economics", category: "Ecommerce Analytics · Completed", thesis: "Revenue vs. Real Profit in an Ecommerce Business",
    problem: "Revenue growth can hide weak margins, expensive acquisition, and differences in customer value.",
    solution: "A shared metric layer connecting product margins, advertising spend, and customer cohorts.",
    outcome: "A profitability dashboard that brings contribution profit, retention, and acquisition costs into one view.",
    stack: ["Python", "DuckDB", "Next.js"],
    image: "/case-studies/northstar.webp", imageAlt: "Northstar live dashboard showing contribution profit and ecommerce revenue",
    disclosure: "Synthetic data · Deterministic analyst demo",
    flow: ["Python generator", "Parquet facts & dimensions", "DuckDB semantic views", "JSON snapshot", "Dashboard & analyst"],
    decisions: ["Generate a reproducible dataset with a fixed seed and explicit commercial patterns.", "Calculate ratios from aggregated numerators and denominators in SQL, rather than averaging row-level ratios.", "Publish a static snapshot shared by the dashboard and the analyst, without a database runtime in deployment."],
    limitations: "The conversational analyst is a deterministic simulation, not a production LLM. Attribution is synthetic and does not measure incrementality.",
    repoUrl: "https://github.com/nrohland/ecommerce-profitability-analytics", liveUrl: "https://ecommerce-profitability-analytics.vercel.app",
    sourceUrl: "https://github.com/nrohland/ecommerce-profitability-analytics/blob/9f89a1bb380cc174330967092dee306cf6b92f96/README.md",
  },
  {
    slug: "lendflow", title: "Fintech Product Analytics", category: "Product & Funnel Analytics · Completed", thesis: "Where Conversion Breaks Down in a Fintech Lending Funnel",
    problem: "Approval rates hide the drop-offs between starting an application and receiving funding.",
    solution: "A tested funnel model with explicit stage definitions and device-level breakdowns.",
    outcome: "Consistent conversion metrics and an analytical interface for exploring where applicants leave the journey.",
    stack: ["Python", "dbt", "DuckDB", "Next.js"],
    image: "/case-studies/lendflow.webp", imageAlt: "LendFlow live dashboard with application, approval and funding metrics",
    disclosure: "Synthetic data · Unofficial lending case study",
    flow: ["Python generator", "Parquet", "dbt on DuckDB", "Mart export", "Next.js & Ask LendFlow"],
    decisions: ["Define the application lifecycle and metric denominators before building the dashboard.", "Use tested staging, intermediate and mart models as the metric governance point.", "Keep Ask LendFlow on curated questions from the same export as the dashboard, with no live model calls."],
    limitations: "Not affiliated with a real lender. SLA thresholds and a formal EDA notebook remain outside the implemented scope. No measured business impact is claimed.",
    repoUrl: "https://github.com/nrohland/lendflow-fintech-analytics", liveUrl: "https://lendflow-fintech-analytics.vercel.app",
    sourceUrl: "https://github.com/nrohland/lendflow-fintech-analytics/blob/ffc1decc2c81b9278c874c43bd50e19f411bfc79/README.md",
  },
  {
    slug: "barrilito", title: "Energy Sector Analytics", category: "Data Engineering · In Development", thesis: "Turning Vaca Muerta’s Public Production Records into Comparable Metrics",
    problem: "Large public files, mixed units, and inconsistent granularity make production comparisons difficult.",
    solution: "Monthly ingestion into BigQuery and a modular dbt transformation layer with automated data tests.",
    outcome: "Curated marts for comparing production across companies, areas, and basins.",
    stack: ["Python", "Meltano", "BigQuery", "dbt"],
    disclosure: "Official monthly data · Pipeline built, public UI pending",
    flow: ["Capítulo IV / CKAN", "Meltano", "BigQuery raw", "dbt staging & marts", "Notebook snapshots"],
    decisions: ["Use monthly ingestion to match the source cadence, with partitioned and clustered BigQuery tables.", "Separate basin production per calendar day from well productivity per effective operating day.", "Keep unit conversions and grains explicit. A planned interpolated counter is a simulation of monthly data, not live telemetry."],
    limitations: "The public frontend is not built. The portfolio chart is a visualization of the committed 2025 mart snapshot, not a product screenshot or real-time feed.",
    repoUrl: "https://github.com/nrohland/vaca-muerta-pulse",
    sourceUrl: "https://github.com/nrohland/vaca-muerta-pulse/blob/1c1c30eb9e29901048cbd812eb14f46c109e4439/apps/spike/data/SOURCE.md",
  },
];
export const technologyGroups: { name: string; items: Technology[] }[] = [
  { name: "Model & transform", items: ["Python", "dbt", "Meltano", "Airflow"] },
  { name: "Store & query", items: ["DuckDB", "BigQuery", "ClickHouse"] },
  { name: "Build & communicate", items: ["Looker", "Metabase", "Next.js"] },
];
