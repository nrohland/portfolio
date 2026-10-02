import type { Project } from "@/data/site";
import { applicationStages, monthlyOil, retentionCohorts } from "@/data/cover-charts";

export function BasinChart() {
  const points = monthlyOil.map((value, index) => `${28 + index * 26},${135 - (value - 1900000) / 1000000 * 95}`).join(" ");
  return <svg className="basin-chart" viewBox="0 0 340 170" role="img" aria-label="Vaca Muerta monthly oil production in the available 2025 snapshot: January 2.18 million cubic metres and December 2.91 million. This extract does not include 2026.">
    <text x="28" y="15">Oil production · million m³</text>
    <line x1="28" y1="142" x2="316" y2="142" /><polyline points={points} />
    <text x="28" y="162">Jan 2025</text><text x="262" y="162">Dec 2025</text>
    <text x="272" y="28">2.91</text>
  </svg>;
}

function RetentionChart() {
  return <svg className="cover-chart" viewBox="0 0 274 190" role="img" aria-label="Customer retention by cohort. January through June 2024 cohorts, months zero through five. All start at 100%; roughly 14–16% return in month five. From the project's synthetic dataset.">
    {Array.from({length:6}, (_, index) => <text key={index} x={62 + index * 38} y="14" textAnchor="middle" className="secondary">M{index}</text>)}
    {retentionCohorts.map((cohort, row) => <g key={row}>
      <text x="35" y={35 + row * 20} textAnchor="end" className="secondary">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][row]}</text>
      {cohort.map((value, column) => <rect key={column} x={44 + column * 38} y={22 + row * 20} width="35" height="17" rx="2" fill="currentColor" opacity={value}><title>{`${Math.round(value * 100)}% retained`}</title></rect>)}
    </g>)}
    <text x="44" y="180" className="secondary">0%</text>
    {Array.from({length:10}, (_, index) => <rect key={index} x={77 + index * 13} y="169" width="12" height="12" rx="1" fill="currentColor" opacity={index / 9} />)}
    <text x="266" y="180" textAnchor="end" className="secondary">100%</text>
  </svg>;
}

function FunnelChart() {
  const baseline = 163;
  const top = (count: number) => baseline - 126 * count / applicationStages[0];
  return <svg className="cover-chart" viewBox="0 0 274 190" role="img" aria-label="Application-to-funding funnel. Started 100%, submitted 46%, approved 22%, contracted 15%, funded 13%. Percentages use all started applications as the denominator, from the synthetic dataset.">
    {applicationStages.map((count, index) => {
      const x = 8 + index * 54, y = top(count), next = applicationStages[index + 1];
      return <g key={index}>
        {next !== undefined && <path d={`M ${x + 20} ${y} C ${x + 37} ${y}, ${x + 37} ${top(next)}, ${x + 54} ${top(next)} L ${x + 54} ${baseline} L ${x + 20} ${baseline} Z`} fill="currentColor" opacity=".12" />}
        <rect x={x} y={y} width="20" height={baseline - y} rx="2" fill="currentColor" />
        <text x={x + 10} y={y - 10} textAnchor="middle">{Math.round(count / applicationStages[0] * 100)}%</text>
      </g>;
    })}
    <line x1="8" y1={baseline} x2="264" y2={baseline} className="chart-axis" />
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
    <p className="cover-subtitle">{energy ? "Monthly oil production · Vaca Muerta" : fintech ? "Application-to-funding funnel" : "Customer retention by cohort"}</p>
    {energy ? <OilChart /> : fintech ? <FunnelChart /> : <RetentionChart />}
    <div className="cover-footer"><p className="cover-caption">{energy ? "Official production records" : "Synthetic data"}</p><span className="cover-action">View case study <span aria-hidden="true">↗</span></span></div>
  </div>;
}
