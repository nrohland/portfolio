import type { Project } from "@/data/site";
export function ProjectLinks({ project, detail = false }: { project: Project; detail?: boolean }) {
  return <div className="project-links">
    {!detail && <a href={`/projects/${project.slug}/`}>Case study</a>}
    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.slug === "ad-analytics" ? "Tableau dashboard" : "Live demo"}</a>}
    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>;
}
