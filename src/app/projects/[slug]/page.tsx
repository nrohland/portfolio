import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/site";
import { ProjectLinks } from "@/components/project-links";
import { Stack } from "@/components/stack";
import { DashboardCapture, LendingFunnel, EnergySeries, EcommerceStory, FintechStory, EnergyStory } from "@/components/case-stories";

const caseTitles: Record<string, string> = { northstar: "Ecommerce Profitability", lendflow: "Lending Funnel Analytics", barrilito: "Vaca Muerta" };
const descriptions: Record<string, string> = {
  northstar: "A reproducible data product connecting SKU margins, customer economics and advertising efficiency. Synthetic commerce data; real analytical implementation.",
  lendflow: "A product analytics case study following applicants from their first event to a funded loan. Synthetic applications; tested models and a working dashboard.",
  barrilito: "An open-data engineering project turning public production records into tested analytical marts. Data pipeline built; public interface in development.",
};
const decisionTitles: Record<string, string[]> = {
  northstar: ["Why a fixed seed?", "Why calculate ratios in SQL?", "Why a static export?"],
  lendflow: ["Why define populations first?", "Why dbt on DuckDB?", "Why curated questions?"],
  barrilito: ["Why monthly ingestion?", "Why two denominators?", "Why keep conversions upstream?"],
};
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return { title: caseTitles[slug], description: descriptions[slug], alternates: { canonical: `/projects/${slug}/` }, openGraph: { title: `${caseTitles[slug]} | Nicolás Rohland`, description: descriptions[slug], url: `/projects/${slug}/`, images: ["/og.png"] } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(p => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];
  return <><Header/><main id="content" className={`case-page case-editorial case-${slug} wrap`}>
    <Link className="text-link" href="/#work">← Selected work</Link>
    <header className="case-heading">
      <p className="eyebrow">0{index+1} — {project.category}</p>
      <h1>{caseTitles[slug]}</h1>
      <p className="case-thesis">{slug === "barrilito" ? "Public records. Comparable production." : project.thesis}</p>
      <p className="case-description">{descriptions[slug]}</p>
      <div className="case-meta"><Stack items={project.stack}/><ProjectLinks project={project} detail/></div>
    </header>
    {slug === "northstar" ? <DashboardCapture/> : slug === "lendflow" ? <LendingFunnel/> : <EnergySeries/>}
    {slug === "northstar" ? <EcommerceStory/> : slug === "lendflow" ? <FintechStory/> : <EnergyStory/>}
    <section className="story-decisions"><div className="story-section-heading"><p className="eyebrow">Technical choices</p><h2>Decisions behind the product.</h2></div><ol>{project.decisions.map((decision,i)=><li key={decision}><p className="eyebrow">0{i+1}</p><h3>{decisionTitles[slug][i]}</h3><p>{decision}</p></li>)}</ol></section>
    <aside className="story-limitations" aria-labelledby="limitations-title"><h2 id="limitations-title" className="eyebrow">Scope & limitations</h2><div><p>{project.limitations}</p>{slug === "northstar" && <p>All monetary measures are USD. The dataset spans 2024–2025. This is an analytical simulation, not a client engagement.</p>}{slug === "lendflow" && <p>The source window is January 6–June 29, 2025. Segment differences are descriptive; they do not prove a cause.</p>}<a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Read the source documentation ↗</a></div></aside>
    <footer className="case-footer"><p className="eyebrow">Next project</p><Link href={`/projects/${next.slug}/`}>{caseTitles[next.slug]}<span aria-hidden="true">→</span></Link><Link className="text-link" href="/#work">Back to selected work</Link></footer>
  </main></>;
}
