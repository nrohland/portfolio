import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/site";
import {
  BasinChart,
  FunnelChart,
  RevenueMixChart,
  ProjectCover,
} from "@/components/project-cover";
import { ProjectLinks } from "@/components/project-links";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.outcome,
    alternates: { canonical: `/projects/${slug}/` },
    openGraph: {
      title: `${project.title} | Nicolás Rohland`,
      description: project.outcome,
      url: `/projects/${slug}/`,
      images: ["/og.png"],
    },
  };
}
const insights = [
  "Revenue growth can hide weak margins.",
  "Approval rates hide the drop-offs.",
  "Different grains. Different denominators.",
];
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <Header />
      <main id="content" className="case-page wrap">
        <Link className="text-link" href="/#work">
          ← Selected work
        </Link>
        <header className="case-heading">
          <p className="eyebrow">
            0{index + 1} — {project.category}
          </p>
          <h1>{project.title}</h1>
          <p className="case-thesis">{project.thesis}</p>
          <div className="case-meta">
            <p className="metadata">{project.stack.join(" · ")}</p>
            <ProjectLinks project={project} detail />
          </div>
        </header>
        <div className="case-opening">
          <ProjectCover project={project} />
        </div>
        <section className="case-section problem">
          <h2 className="eyebrow">01 — Problem</h2>
          <div>
            <p className="case-lead">{project.problem}</p>
            <p>{project.solution}</p>
          </div>
        </section>
        <section className="insight">
          <p className="eyebrow">Key insight</p>
          <h2>{insights[index]}</h2>
          {slug === "barrilito" && (
            <p>
              Separate basin production per calendar day from well productivity
              per effective operating day.
            </p>
          )}
        </section>
        <figure className={`evidence evidence-${slug}`}>
          <div className="evidence-intro">
            <p className="eyebrow">
              Evidence /{" "}
              {slug === "barrilito"
                ? "Official 2025 snapshot"
                : "Synthetic dataset"}
            </p>
            <h2>
              {slug === "northstar"
                ? "Revenue mix by category"
                : slug === "lendflow"
                  ? "Application to funding"
                  : "Monthly oil production"}
            </h2>
            <p>
              {slug === "northstar"
                ? "Share of product gross revenue. Other combines Vitamins, Energy and Accessories."
                : slug === "lendflow"
                  ? "Every stage uses started applications as the denominator."
                  : "Vaca Muerta · January–December 2025 · million m³"}
            </p>
          </div>
          <div className="evidence-chart">
            {slug === "northstar" ? (
              <RevenueMixChart />
            ) : slug === "lendflow" ? (
              <FunnelChart />
            ) : (
              <BasinChart />
            )}
          </div>
          <figcaption>
            {slug === "barrilito"
              ? "Committed mart snapshot. No 2026 coverage or live telemetry."
              : "Descriptive evidence from the project dataset; no measured business impact is claimed."}
          </figcaption>
        </figure>
        <section className="architecture-section">
          <div className="case-section">
            <h2 className="eyebrow">02 — How I modeled it</h2>
            <p className="case-lead">{project.solution}</p>
          </div>
          <ol
            className="architecture-flow"
            aria-label="Data architecture, in processing order"
          >
            {project.flow.map((step, i) => (
              <li key={step}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{step}</h3>
                {i < project.flow.length - 1 && (
                  <span className="flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </section>
        <section className="case-section result">
          <h2 className="eyebrow">03 — Result</h2>
          <p className="case-lead">{project.outcome}</p>
        </section>
        <figure className="case-visual">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              width={1440}
              height={1000}
              sizes="(max-width: 700px) 100vw, 1280px"
            />
          ) : (
            <div className="energy-output">
              <p className="eyebrow">
                Mart output · Official production records
              </p>
              <BasinChart />
            </div>
          )}
          <figcaption>
            {project.disclosure}
            {slug === "barrilito"
              ? " · Chart of the committed 2025 mart snapshot; not a product screenshot."
              : " · Actual dashboard screenshot."}
          </figcaption>
        </figure>
        <section className="case-section decisions-section">
          <h2 className="eyebrow">04 — Technical decisions</h2>
          <ol className="decisions">
            {project.decisions.map((decision, i) => (
              <li key={decision}>
                <span className="eyebrow">0{i + 1}</span>
                <p>{decision}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="case-section limitations">
          <h2 className="eyebrow">Scope & limitations</h2>
          <div>
            <p>{project.limitations}</p>
            <a
              className="text-link"
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the source documentation ↗
            </a>
          </div>
        </section>
        <footer className="case-footer">
          <p className="eyebrow">Next case study</p>
          <Link href={`/projects/${next.slug}/`}>
            {next.title}
            <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/#work">
            Back to selected work
          </Link>
        </footer>
      </main>
    </>
  );
}
