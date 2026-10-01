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
  const descriptions: Record<string, string> = {
    northstar: "Editorial illustration of ecommerce analytics on a laptop in a warehouse, with packages and a delivery truck.",
    lendflow: "Editorial illustration of a lending funnel dashboard and loan application stages in a fintech office.",
    barrilito: "Editorial illustration of a drilling site in a desert landscape, representing Vaca Muerta.",
  };
  return <div className="project-cover">
    <Image src={`/case-studies/${project.slug}-cover.webp`} alt={descriptions[project.slug]} width={1000} height={563} sizes="(max-width: 700px) 90vw, 310px" />
  </div>;
}
