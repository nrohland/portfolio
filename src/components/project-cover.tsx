import type { Project } from "@/data/site";
import { applicationStages, monthlyOil, productMargins } from "@/data/cover-charts";

export function BasinChart() {
  const points = monthlyOil.map((value, index) => `${28 + index * 26},${135 - (value - 1900000) / 1000000 * 95}`).join(" ");
  return <svg className="basin-chart" viewBox="0 0 340 170" role="img" aria-label="Vaca Muerta monthly oil production in the available 2025 snapshot: January 2.18 million cubic metres and December 2.91 million. This extract does not include 2026.">
    <text x="28" y="15">Oil production · million m³</text>
    <line x1="28" y1="142" x2="316" y2="142" /><polyline points={points} />
    <text x="28" y="162">Jan 2025</text><text x="262" y="162">Dec 2025</text>
    <text x="272" y="28">2.91</text>
  </svg>;
}

function MarginChart() {
  const x = (value: number) => 8 + (value + 50) / 65 * 258;
  const zero = x(0);
  return <svg className="cover-chart" viewBox="0 0 274 190" role="img" aria-label="Contribution margins of the top three ecommerce products by revenue: minus 43%, plus 6% and plus 9%. From the project's synthetic dataset.">
    <line x1={zero} y1="25" x2={zero} y2="157" className="chart-axis" />
    {productMargins.map((value, index) => <g key={index}>
      <text x="8" y={18 + index * 49}>{value > 0 ? "+" : ""}{Math.round(value)}%</text>
      <rect x={Math.min(zero, x(value))} y={26 + index * 49} width={Math.abs(x(value) - zero)} height="18" fill="currentColor" opacity={value < 0 ? .5 : 1} />
    </g>)}
    <text x={zero} y="180" textAnchor="middle" className="secondary">0%</text>
  </svg>;
}

function FunnelChart() {
  return <svg className="cover-chart" viewBox="0 0 274 190" role="img" aria-label="Application-to-funding funnel. Started 100%, submitted 46%, approved 22%, contracted 15%, funded 13%. Percentages use all started applications as the denominator, from the synthetic dataset.">
    {applicationStages.map((count, index) => {
      const y = 13 + index * 36, width = 258 * count / applicationStages[0], left = (274 - width) / 2;
      return <g key={index}><text x="266" y={y} textAnchor="end">{Math.round(count / applicationStages[0] * 100)}%</text>
        <polygon points={`${left},${y + 5} ${left + width},${y + 5} ${left + width * .96},${y + 18} ${left + width * .04},${y + 18}`} fill="currentColor" />
      </g>;
    })}
  </svg>;
}

function OilChart() {
  const x = (index: number) => 35 + index / 11 * 227;
  const y = (value: number) => 149 - (value - 1.9) / 1.2 * 112;
  return <svg className="cover-chart" viewBox="0 0 274 190" role="img" aria-label="Monthly Vaca Muerta oil production in million cubic metres, from the available January–December 2025 official snapshot. The extract does not include 2026.">
    {[2, 2.5, 3].map(value => <g key={value}><text x="28" y={y(value) + 4} textAnchor="end" className="secondary">{value.toFixed(1)}</text><line x1="35" y1={y(value)} x2="262" y2={y(value)} className="chart-grid" /></g>)}
    <text x="35" y="15" className="secondary">Million m³</text>
    <polyline points={monthlyOil.map((value, index) => `${x(index)},${y(value / 1000000)}`).join(" ")} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <text x="35" y="180" className="secondary">Jan</text><text x="262" y="180" textAnchor="end" className="secondary">Dec</text>
  </svg>;
}

export function ProjectCover({ project }: { project: Project }) {
  const energy = project.slug === "barrilito", fintech = project.slug === "lendflow";
  const lines = energy ? ["Energy Sector", "Analytics"] : fintech ? ["Fintech Product", "Analytics"] : ["Ecommerce", "Analytics"];
  return <div className="project-cover">
    <span className="cover-title">{lines[0]}<br />{lines[1]}</span>
    <p className="cover-subtitle">{energy ? "Monthly oil production · Vaca Muerta" : fintech ? "Application-to-funding funnel" : "Product contribution margin"}</p>
    {energy ? <OilChart /> : fintech ? <FunnelChart /> : <MarginChart />}
    <p className="cover-caption">{energy ? "Official production records" : "Synthetic data"}</p>
  </div>;
}
