/**
 * Site config and copy.
 * cvUrl: set a URL to show the CV link. An empty string hides it.
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
  lead: "I model data, publish shared metrics, and put them on a screen you can open.",
};

export const contact = {
  email,
  linkedin: "https://linkedin.com/in/nicolas-rohland",
  github: "https://github.com/nrohland",
};

export type CaseStudy = {
  title: string;
  summary: string;
  caption: string;
  stack: string[];
  image: string;
  imageAlt: string;
  status?: "Ongoing";
  liveUrl?: string;
  repoUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Northstar",
    summary: "Contribution, cohorts, and ad efficiency for a simulated catalog.",
    caption: "Synthetic data.",
    stack: ["Python", "DuckDB", "Next.js"],
    image: "/case-studies/northstar.webp",
    imageAlt: "Northstar dashboard with contribution and cohort charts",
    liveUrl: "https://ecommerce-profitability-analytics.vercel.app",
    repoUrl: "https://github.com/nrohland/ecommerce-profitability-analytics",
  },
  {
    title: "LendFlow",
    summary: "Where approved applications drop off before they fund.",
    caption: "Synthetic data. Not affiliated with any lender.",
    stack: ["Python", "dbt", "DuckDB", "Next.js"],
    image: "/case-studies/lendflow.webp",
    imageAlt: "LendFlow dashboard with a funding funnel",
    liveUrl: "https://lendflow-fintech-analytics.vercel.app",
    repoUrl: "https://github.com/nrohland/lendflow-fintech-analytics",
  },
  {
    title: "Ad Analytics",
    summary: "Campaign performance from tested dbt marts.",
    caption: "Synthetic data.",
    stack: ["dbt", "DuckDB", "Tableau"],
    image: "/case-studies/ad-analytics.webp",
    imageAlt: "Tableau dashboard of ad campaign performance",
    liveUrl:
      "https://public.tableau.com/app/profile/nicolas.rohland/viz/ADANALYTICSPERFORMANCE/ADANALYTICSPERFORMANCE",
    repoUrl: "https://github.com/nrohland/01_dbt_ad_analytics",
  },
  {
    title: "Vaca Muerta Pulse",
    summary: "Open-data model of unconventional production in the basin.",
    caption: "Ongoing. No public front end yet.",
    stack: ["Meltano", "BigQuery", "dbt"],
    image: "/case-studies/vaca-muerta.webp",
    imageAlt: "GitHub repository page for Vaca Muerta Pulse",
    status: "Ongoing",
    repoUrl: "https://github.com/nrohland/vaca-muerta-pulse",
  },
];

export type Role = {
  years: string;
  dates: string;
  title: string;
  org?: string;
  line?: string;
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
    line: "Grew monthly revenue from about USD 10k to close to USD 100k.",
  },
  {
    years: "2024",
    dates: "Jan 2024 – Oct 2024",
    title: "Senior Data & Analytics Engineer",
    org: "Mercado Libre",
    line: "Built Tableau and Looker dashboards and BigQuery jobs for marketplace metrics.",
  },
  {
    years: "2023",
    dates: "Jul 2023 – Dec 2023",
    title: "Tableau Course Instructor",
    org: "Coderhouse",
    line: "Ran a Tableau course and graded final visualization projects.",
  },
  {
    years: "2021–23",
    dates: "Dec 2021 – Dec 2023",
    title: "Data & Analytics Engineer, Fraud Prevention",
    org: "Mercado Libre",
    line: "Built fraud-metrics pipelines and Tableau dashboards at Mercado Pago.",
  },
  {
    years: "2020–21",
    dates: "Dec 2020 – Dec 2021",
    title: "Business Intelligence Specialist",
    org: "Lenovo",
    line: "Built Qlik Sense dashboards and modeled data with business stakeholders.",
  },
  {
    years: "2020",
    dates: "Mar 2020 – Dec 2020",
    title: "Business Intelligence Consultant",
    org: "Data IQ",
    line: "Built QlikView and Qlik Sense applications for enterprise clients.",
  },
];

export const about = [
  "I build data products: models, shared metrics, and a screen a team can open.",
  "The demos keep the SQL visible, and they are not a language model in production.",
  "From 2024 to 2026 I ran a direct-to-consumer brand in Argentina in pet and cleaning products.",
  "I now do business intelligence at Location World, after marketplace and fraud metrics at Mercado Libre and Mercado Pago.",
];
