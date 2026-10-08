import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { caseCopy } from "@/data/case-copy";
import { RevenueContribution } from "@/components/case-charts";
import { projects } from "@/data/site";
import { ProjectLinks } from "@/components/project-links";
import { Stack } from "@/components/stack";
import { LendingFunnel, EnergySeries, EcommerceStory, FintechStory, EnergyStory } from "@/components/case-stories";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return { title: caseCopy[slug].title, description: caseCopy[slug].description, alternates: { canonical: `/projects/${slug}/` }, openGraph: { title: `${caseCopy[slug].title} | Nicolás Rohland`, description: caseCopy[slug].description, url: `/projects/${slug}/`, images: ["/og.png"] } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(p => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const copy = caseCopy[slug];
  const next = projects[(index + 1) % projects.length];
  return <><Header/><main id="content" className={`case-page case-editorial case-${slug} wrap`}>
    <Link className="text-link" href="/#work">← Selected work</Link>
    <header className="case-heading">
      <p className="eyebrow">0{index+1} · {copy.category}</p>
      <h1>{copy.title}</h1>
      <p className="case-thesis">{copy.question}</p>
      <p className="case-description">{copy.description}</p>
      <div className="case-meta"><Stack items={project.stack}/><ProjectLinks project={project} detail/></div>
    </header>
    {slug === "northstar" ? <RevenueContribution/> : slug === "lendflow" ? <LendingFunnel/> : <EnergySeries/>}
    {slug === "northstar" ? <EcommerceStory/> : slug === "lendflow" ? <FintechStory/> : <EnergyStory/>}
    <section className="story-decisions"><div className="story-section-heading"><p className="eyebrow">Technical implementation</p><h2>Implementation choices</h2></div><ol>{copy.decisions.map((decision,i)=><li key={decision.title}><p className="eyebrow">0{i+1}</p><h3>{decision.title}</h3><p>{decision.text}</p></li>)}</ol></section>
    <aside className="story-limitations" aria-labelledby="limitations-title"><h2 id="limitations-title" className="eyebrow">Limitations and next steps</h2><div>{copy.next.map(text=><p key={text}>{text}</p>)}<a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Read the source documentation ↗</a></div></aside>
    <footer className="case-footer"><p className="eyebrow">Next project</p><Link href={`/projects/${next.slug}/`}>{caseCopy[next.slug].title}<span aria-hidden="true">→</span></Link><Link className="text-link" href="/#work">Back to selected work</Link></footer>
  </main></>;
}
