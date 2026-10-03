import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/site";
import { Stack } from "@/components/stack";
import { BasinChart } from "@/components/project-cover";
import { ProjectLinks } from "@/components/project-links";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.outcome, alternates: { canonical: `/projects/${slug}/` }, openGraph: { title: `${project.title} | Nicolás Rohland`, description: project.outcome, url: `/projects/${slug}/`, images: ["/og.png"] } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug); if (!project) notFound();
  return <><Header /><main id="content" className="wrap case-page"><Link className="text-link" href="/#work">← Selected work</Link>
    <header className="case-heading"><p className="project-category">{project.category}</p><h1>{project.title}</h1><p className="case-thesis">{project.thesis}</p><Stack items={project.stack} /><ProjectLinks project={project} detail /></header>
    <figure className={`case-visual ${project.slug === "barrilito" ? "cover-barrilito" : ""}`}>
      {project.image ? <Image src={project.image} alt={project.imageAlt || project.title} width={1440} height={1000} sizes="(max-width: 1000px) 100vw, 1000px" priority /> : <BasinChart />}
      <figcaption>{project.disclosure}</figcaption>
    </figure>
    <div className="case-body"><section><h2>The Friction</h2><p>{project.problem}</p></section><section><h2>The Solution</h2><p>{project.solution}</p></section><section><h2>The Output</h2><p>{project.outcome}</p></section>
      <section><h2>Architecture</h2><ol className="data-flow">{project.flow.map(step => <li key={step}>{step}</li>)}</ol></section>
      <section><h2>Technical decisions</h2><ul className="decisions">{project.decisions.map(d => <li key={d}>{d}</li>)}</ul></section>
      <section><h2>Scope & limitations</h2><p>{project.limitations}</p><a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Read the source documentation</a></section>
    </div><footer className="case-footer"><Link className="text-link" href="/#work">Back to selected work</Link><Link className="text-link" href="/#contact">Get in touch</Link></footer>
  </main></>;
}
