// Case-only copy. Home content stays in site.ts.
export const caseCopy: Record<string, {
  title: string; category: string; question: string; description: string;
  decisions: { title: string; text: string }[]; next: string[];
}> = {
  northstar: {
    title: "Ecommerce profitability",
    category: "Ecommerce analytics · Completed",
    question: "Does higher revenue also mean higher contribution profit?",
    description: "I built a commerce dataset and dashboard to compare product margins, customer value and acquisition costs. The records are synthetic, cover 2024 and 2025, and use USD.",
    decisions: [
      { title: "Calculate ratios after aggregation", text: "The SQL views sum profit and net revenue before dividing. Averaging item margins would give a small order the same weight as a large one." },
      { title: "Export the metrics before deployment", text: "Python exports the DuckDB views to JSON. Both the dashboard and the question catalog read that file, so the deployed app needs no database runtime." },
    ],
    next: [
      "Before applying this model to a business, I would replace the generator with source records and check how campaign spend can be assigned to products. The current attribution rules do not measure incremental sales.",
      "I would also make cohort maturity more explicit when comparing 90-day customer value. Customers acquired near the end of the dataset have less time to place repeat orders. The analyst demo answers a fixed question catalog and does not call an LLM.",
    ],
  },
  lendflow: {
    title: "Lending funnel analytics",
    category: "Product analytics · Completed",
    question: "Where do applications stop before a loan is funded?",
    description: "I modeled 100,000 synthetic applications, their product events and lending outcomes. Applications start between January 6 and June 29, 2025. It is an independent portfolio exercise.",
    decisions: [
      { title: "Run dbt on local DuckDB", text: "The accepted architecture uses Parquet sources and local dbt models. A cloud warehouse would add cost without changing the questions this demo can answer." },
      { title: "Publish only supported slices", text: "The export contains device, browser and channel metrics, plus selected combined cuts. The dashboard and question catalog do not estimate a device-by-channel intersection that the marts have not exported." },
    ],
    next: [
      "The experiment still needs numeric guardrail margins before a product recommendation. Decision and funding SLA thresholds are also unset, so the operations page cannot report SLA attainment.",
      "About 4% of applicants have a second application. A later experiment analysis should account for repeated applicants rather than treating every application as independent. The repo has no completed EDA notebook documenting that analysis. The dashboard and fixed question catalog are implemented.",
    ],
  },
  barrilito: {
    title: "Vaca Muerta",
    category: "Analytics engineering · In development",
    question: "How can monthly public records support production comparisons?",
    description: "I loaded Capítulo IV production records into BigQuery and built dbt models at well, operator and concession grain. This page uses the committed 2025 extracts. The public dashboard is still pending.",
    decisions: [
      { title: "Keep ingestion monthly", text: "Capítulo IV reports monthly production. More frequent polling would not turn it into daily production data. The raw table records when Meltano loaded each batch separately from the production month." },
      { title: "Cluster historical well records", text: "The BigQuery sandbox expires partitions after 60 days. Partitioning the well mart by its 2025 production dates emptied the table during the build. The implemented mart clusters by company and well instead." },
      { title: "Convert units in dbt", text: "The marts apply the same 6.28981077 conversion factor for cubic metres to barrels. The future interface can use those columns without recalculating production or mixing gas and oil units." },
    ],
    next: [
      "The next documented milestone is the public interface. It must display the production month and identify any animated counter as a simulation based on monthly records. The current notebooks are prototypes, not a delivered dashboard.",
      "The join between Adjunto IV fracture records and production wells is still unconfirmed. I would resolve that key before combining completions with well production. The sandbox also limits data retention, and the repo does not yet have the production raw dataset.",
    ],
  },
};
