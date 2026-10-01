import Image from "next/image";
import type { Project } from "@/data/site";
// Capítulo IV monthly mart snapshot, apps/spike/data/monthly_pulse.csv, 2025.
const monthlyOil = [2179998.802, 1972456.521, 2199084.281, 2105994.158, 2207064.169, 2270949.525, 2506760.804, 2595176.457, 2607802.413, 2800987.739, 2750778.883, 2909815.325];
export function BasinChart() {
  const points = monthlyOil.map((value, index) => `${28 + index * 26},${135 - (value - 1900000) / 1000000 * 95}`).join(" ");
  return <svg className="basin-chart" viewBox="0 0 340 170" role="img" aria-label="Vaca Muerta monthly oil production in 2025, rising from 2.18 million cubic metres in January to 2.91 million in December, with monthly fluctuations.">
    <text x="28" y="15">Oil production · million m³</text>
    <line x1="28" y1="142" x2="316" y2="142" /><polyline points={points} />
    <text x="28" y="162">Jan 2025</text><text x="262" y="162">Dec 2025</text>
    <text x="272" y="28">2.91</text>
  </svg>;
}
export function ProjectCover({ project }: { project: Project }) {
  return <div className={`project-cover cover-${project.slug}`}>
    <div className="cover-heading"><span className="cover-name">{project.title}</span><span className="cover-subtitle">{project.slug === "northstar" ? "Profitability, in focus." : project.slug === "lendflow" ? "Follow the funding." : project.slug === "barrilito" ? "Vaca Muerta, in perspective." : "From events to insight."}</span></div>
    {project.image ? <div className="cover-screen"><Image src={project.image} alt={project.imageAlt || project.title} width={1440} height={1000} sizes="(max-width: 700px) 90vw, 320px" /></div> : <BasinChart />}
    <span className="cover-caption">{project.slug === "barrilito" ? "2025 mart snapshot · Public data" : "Synthetic data · Live product capture"}</span>
  </div>;
}
