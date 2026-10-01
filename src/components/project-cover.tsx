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
    {project.image ? <div className="cover-screen"><Image src={project.image} alt={project.imageAlt || project.title} width={1440} height={1000} sizes="(max-width: 700px) 90vw, 320px" /></div> : <EnergyIllustration />}
    <span className="cover-caption">{project.slug === "barrilito" ? "Vaca Muerta · Open-data pipeline" : "Synthetic data · Live product capture"}</span>
  </div>;
}

function EnergyIllustration() {
  return <svg className="energy-illustration" viewBox="0 0 340 170" role="img" aria-label="Illustration of oil extraction above layered underground rock, representing Vaca Muerta.">
    <path d="M0 90 35 84 70 87 101 78 135 82 168 72 199 80 234 75 277 87 308 78 340 83V170H0Z" fill="#d0aa83" />
    <path d="M0 116Q85 101 169 115T340 111V170H0Z" fill="#bb855e" />
    <path d="M0 142Q82 124 170 141T340 137V170H0Z" fill="#995b3e" />
    <g fill="none" stroke="#5e3525" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M36 88h91M58 87l21-53 21 53M68 62h23M47 35l63-10M84 25v-9M102 30l11 22-8 6-12-25" />
      <path d="M51 34v54M113 59v30M124 79h17v10M132 89v44q0 12 13 12h111" />
      <path d="m174 145 7-8m22 8 7-8m22 8 7-8" stroke="#f2d7b8" strokeWidth="2" />
    </g>
    <circle cx="79" cy="33" r="4" fill="#5e3525" />
    <path d="m221 72 24-19 19 8 22-16 29 28" fill="none" stroke="#b78863" strokeWidth="2" />
    <g fill="#5e3525"><circle cx="265" cy="17" r="3" /><circle cx="286" cy="17" r="3" /><circle cx="307" cy="17" r="3" /></g>
    <path d="M268 17h15m6 0h15" stroke="#5e3525" strokeWidth="1.5" />
  </svg>;
}
