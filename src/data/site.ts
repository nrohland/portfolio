/**
 * Site config and copy. One place for public facts.
 * cvUrl: set a URL to show the CV link. Empty string hides it.
 */

export function visibleUrl(value: string | undefined | null): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  siteUrlFromEnv && siteUrlFromEnv.length > 0
    ? siteUrlFromEnv
    : "https://nicolasrohland.vercel.app"
).replace(/\/$/, "");

export const cvUrl = visibleUrl("https://linkedin.com/in/nicolas-rohland");

export const email = "nicolas.rohland@gmail.com";

export const profile = {
  name: "Nicolás Rohland",
  role: "Ecommerce data analyst and analytics engineer",
  title:
    "Analytics engineer who builds data products, and agents that ask for the right metrics.",
  summary:
    "I model data, publish shared metrics, and put them on a screen you can open. The demos run from ecommerce profitability to a synthetic funding funnel, with definitions you can check.",
};

export const contact = {
  email,
  linkedin: "https://linkedin.com/in/nicolas-rohland",
  github: "https://github.com/nrohland",
};

export type CaseStudy = {
  title: string;
  problem: string;
  stack: string;
  shows: string;
  note: string;
  status?: "Ongoing";
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Northstar",
    problem:
      "Revenue hides which products earn. This demo joins product economics, customer quality, subscriptions, and ad efficiency in one place.",
    stack:
      "Python synthetic data, Parquet, DuckDB semantic views, Next.js, and Recharts. A deterministic analyst demo shows the SQL behind each answer.",
    shows:
      "Contribution overview, SKU scorecard, subscribe versus one-time LTV cohorts, and ad saturation against CAC.",
    note: "Synthetic data. A simulated DTC catalog, not the schema of a commercial platform.",
    liveUrl: "https://ecommerce-profitability-analytics.vercel.app",
    liveLabel: "Live demo",
    repoUrl: "https://github.com/nrohland/ecommerce-profitability-analytics",
  },
  {
    title: "LendFlow",
    problem:
      "Approval is not the finish line. Funding is. The demo asks where approved applications drop off before they fund, and what to test first.",
    stack:
      "Python, Parquet, DuckDB, dbt Core, and Next.js. Screens: Overview, Funnel, Operations, Experiment, and Ask.",
    shows:
      "A funnel of 100,000 synthetic applications, approval versus funding, splits by device and browser, and an experiment on bank-connection completion.",
    note: "Synthetic data. An unofficial portfolio case. Not affiliated with any lender.",
    liveUrl: "https://lendflow-fintech-analytics.vercel.app",
    liveLabel: "Live demo",
    repoUrl: "https://github.com/nrohland/lendflow-fintech-analytics",
  },
  {
    title: "Ad Analytics",
    problem:
      "A full analytics path on one dataset: raw files, staging, tested marts, then a chart.",
    stack:
      "Python, dbt Core, dbt-duckdb, DuckDB, and Tableau Public. 36 data tests.",
    shows:
      "Campaign CTR, conversion, and engagement, a conversion funnel, and how people move through it.",
    note: "Synthetic social-ad dataset from Kaggle.",
    liveUrl:
      "https://public.tableau.com/app/profile/nicolas.rohland/viz/ADANALYTICSPERFORMANCE/ADANALYTICSPERFORMANCE",
    liveLabel: "Tableau",
    repoUrl: "https://github.com/nrohland/01_dbt_ad_analytics",
  },
  {
    title: "Vaca Muerta Pulse",
    problem:
      "Argentine open data on the basin is detailed and hard to tell as a story. This is a plain production-rate model. It is not a live field feed.",
    stack:
      "Meltano, BigQuery, and dbt Core (staging, intermediate, marts, barrels per day). A Next.js screen is planned and not built.",
    shows:
      "A pipeline and model for unconventional production and completions in Vaca Muerta. The Barrilito story labels a daily rate simulated from monthly open data.",
    note: "Ongoing. The dbt models are in the repository. There is no public front end yet.",
    status: "Ongoing",
    repoUrl: "https://github.com/nrohland/vaca-muerta-pulse",
  },
];

export type Role = {
  years: string;
  dates: string;
  title: string;
  org?: string;
  note?: string;
  bullets?: string[];
};

export const roles: Role[] = [
  {
    years: "2026–",
    dates: "Jul 2026 – present",
    title: "Business Intelligence",
    org: "Location World",
  },
  {
    years: "2024–26",
    dates: "Jan 2024 – Jul 2026",
    title: "Own DTC ecommerce brand (pets & cleaning, Argentina)",
    bullets: [
      "Grew monthly revenue from about USD 10k to close to USD 100k.",
      "Brought data in through APIs and built profitability dashboards used to reallocate ad budget.",
    ],
  },
  {
    years: "2024",
    dates: "Jan 2024 – Oct 2024",
    title: "Senior Data & Analytics Engineer",
    org: "Mercado Libre",
    bullets: [
      "Built and maintained Tableau and Looker dashboards for marketplace metrics.",
      "Wrote SQL jobs in Google BigQuery over high-volume marketplace datasets.",
    ],
  },
  {
    years: "2023",
    dates: "Jul 2023 – Dec 2023",
    title: "Tableau Course Instructor",
    org: "Coderhouse",
    bullets: [
      "Ran student cohorts for a Tableau course. Answered technical questions and graded final visualization projects.",
    ],
  },
  {
    years: "2021–23",
    dates: "Dec 2021 – Dec 2023",
    title: "Data & Analytics Engineer, Fraud Prevention",
    org: "Mercado Libre",
    bullets: [
      "Joined the Fraud Prevention Metrics team at Mercado Pago. Built extraction jobs and pipelines in Teradata and Google BigQuery.",
      "Built and monitored Tableau dashboards used for fraud and risk metrics.",
    ],
  },
  {
    years: "2020–21",
    dates: "Dec 2020 – Dec 2021",
    title: "Business Intelligence Specialist",
    org: "Lenovo",
    bullets: [
      "Built Qlik Sense dashboards for corporate BI. Gathered requirements and modeled data with business stakeholders.",
    ],
  },
  {
    years: "2020",
    dates: "Mar 2020 – Dec 2020",
    title: "Business Intelligence Consultant",
    org: "Data IQ",
    bullets: [
      "Built QlikView and Qlik Sense applications for multiple enterprise clients.",
    ],
  },
  {
    years: "2019–20",
    dates: "Jun 2019 – Feb 2020",
    title: "Application Development Associate",
    org: "Accenture",
    bullets: [
      "Supported the SAP S/4 HANA implementation and migrated data with ETL tools and PL/SQL.",
    ],
  },
  {
    years: "2018–19",
    dates: "Dec 2018 – Jun 2019",
    title: "Operations Intern",
    org: "John Crane",
    note: "Non-data role",
  },
  {
    years: "2016–18",
    dates: "May 2016 – Nov 2018",
    title: "Industrial Maintenance Service Planning Coordinator",
    org: "Atlas Copco",
    note: "Non-data role",
  },
  {
    years: "2015",
    dates: "May 2015 – Nov 2015",
    title: "Logistics Intern",
    org: "Ford Argentina",
    note: "Non-data role",
  },
];

export const about = [
  "I build data products from raw tables to a screen a team can use: models, shared metrics, and the interface on top. I also try agent workflows that ask a short list of questions over those models and leave the SQL on screen. The demos are deterministic. They are not a language model in production.",
  "From 2024 to 2026 I ran a direct-to-consumer brand in Argentina in pet and cleaning products. The work was contribution, ads, assortment, and retention. Northstar is a synthetic demo of how I would model that kind of business. It does not use that business's data.",
  "I do business intelligence at Location World. Before that I worked on marketplace metrics and fraud metrics at Mercado Libre and Mercado Pago, and earlier in business intelligence and application development.",
];
