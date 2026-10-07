import type { Project } from "@/data/site";
import {
  applicationStages,
  monthlyOil,
  categoryRevenue,
} from "@/data/cover-charts";

export function BasinChart() {
  const points = monthlyOil
    .map(
      (value, index) =>
        `${28 + index * 26},${135 - ((value - 1900000) / 1000000) * 95}`,
    )
    .join(" ");
  return (
    <svg
      className="basin-chart"
      viewBox="0 0 340 170"
      role="img"
      aria-label="Vaca Muerta monthly oil production in the available 2025 snapshot: January 2.18 million cubic metres and December 2.91 million. This extract does not include 2026."
    >
      <text x="28" y="15">
        Oil production · million m³
      </text>
      <line x1="28" y1="142" x2="316" y2="142" />
      <polyline points={points} />
      <text x="28" y="162">
        Jan 2025
      </text>
      <text x="262" y="162">
        Dec 2025
      </text>
      <text x="272" y="28">
        2.91
      </text>
    </svg>
  );
}

export function RevenueMixChart() {
  const total = categoryRevenue.reduce((sum, item) => sum + item.revenue, 0);
  const shares = categoryRevenue.map((item) => (item.revenue / total) * 100);
  const percentages = shares.map(Math.floor);
  // Largest-remainder rounding keeps the displayed composition at 100%.
  shares
    .map((share, index) => ({ index, remainder: share % 1 }))
    .sort((a, b) => b.remainder - a.remainder)
    .slice(0, 100 - percentages.reduce((sum, value) => sum + value, 0))
    .forEach(({ index }) => {
      percentages[index] += 1;
    });
  return (
    <svg
      className="cover-chart"
      viewBox="0 0 274 190"
      role="img"
      aria-label="Share of product gross revenue by category: Nutrition approximately 62%, Hydration 13%, Wellness 8%, and other categories 17%. Other combines Vitamins, Energy and Accessories. From the project's synthetic dataset."
    >
      {categoryRevenue.map(({ category, revenue }, index) => {
        const y = 10 + index * 43,
          share = revenue / total;
        return (
          <g key={category}>
            <text x="0" y={y + 2}>
              {category}
            </text>
            <text x="274" y={y + 2} textAnchor="end">
              {percentages[index]}%
            </text>
            <rect
              x="0"
              y={y + 10}
              width="274"
              height="15"
              rx="2"
              fill="currentColor"
              opacity=".07"
            />
            <rect
              x="0"
              y={y + 10}
              width={274 * share}
              height="15"
              rx="2"
              fill="currentColor"
            />
          </g>
        );
      })}
    </svg>
  );
}

export function FunnelChart() {
  const baseline = 163;
  const top = (count: number) =>
    baseline - (126 * count) / applicationStages[0];
  return (
    <svg
      className="cover-chart"
      viewBox="0 0 274 190"
      role="img"
      aria-label="Application-to-funding funnel. Started 100%, submitted 46%, approved 22%, contracted 15%, funded 13%. Percentages use all started applications as the denominator, from the synthetic dataset."
    >
      {applicationStages.map((count, index) => {
        const x = 8 + index * 54,
          y = top(count),
          next = applicationStages[index + 1];
        return (
          <g key={index}>
            {next !== undefined && (
              <path
                d={`M ${x + 20} ${y} C ${x + 37} ${y}, ${x + 37} ${top(next)}, ${x + 54} ${top(next)} L ${x + 54} ${baseline} L ${x + 20} ${baseline} Z`}
                fill="currentColor"
                opacity=".12"
              />
            )}
            <rect
              x={x}
              y={y}
              width="20"
              height={baseline - y}
              rx="2"
              fill="currentColor"
            />
            <text x={x + 10} y={y - 10} textAnchor="middle">
              {Math.round((count / applicationStages[0]) * 100)}%
            </text>
          </g>
        );
      })}
      <line
        x1="8"
        y1={baseline}
        x2="264"
        y2={baseline}
        className="chart-axis"
      />
    </svg>
  );
}

function OilChart() {
  const x = (index: number) => 35 + (index / 11) * 227;
  const y = (value: number) => 149 - ((value - 1.9) / 1.2) * 112;
  return (
    <svg
      className="cover-chart"
      viewBox="0 0 274 190"
      role="img"
      aria-label="Monthly Vaca Muerta oil production in million cubic metres, from the available January–December 2025 official snapshot. The extract does not include 2026."
    >
      {[2, 2.5, 3].map((value) => (
        <g key={value}>
          <text x="28" y={y(value) + 4} textAnchor="end" className="secondary">
            {value.toFixed(1)}
          </text>
          <line
            x1="35"
            y1={y(value)}
            x2="262"
            y2={y(value)}
            className="chart-grid"
          />
        </g>
      ))}
      <text x="35" y="15" className="secondary">
        Million m³
      </text>
      <polyline
        points={monthlyOil
          .map((value, index) => `${x(index)},${y(value / 1000000)}`)
          .join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="35" y="180" className="secondary">
        Jan
      </text>
      <text x="262" y="180" textAnchor="end" className="secondary">
        Dec
      </text>
    </svg>
  );
}

export function ProjectCover({ project }: { project: Project }) {
  return (
    <figure className={`project-cover cover-${project.slug}`}>
      <img
        src={`/case-studies/${project.slug}-cover.webp`}
        alt={
          project.slug === "northstar"
            ? "Illustration of an ecommerce warehouse and an analytics workspace"
            : project.slug === "lendflow"
              ? "Illustration of a fintech analytics workspace"
              : "Illustration of a drilling site in Vaca Muerta"
        }
        width={1000}
        height={563}
      />
      <figcaption>
        Illustration ·{" "}
        {project.slug === "barrilito"
          ? "Vaca Muerta"
          : project.slug === "lendflow"
            ? "Fintech"
            : "Commerce"}
      </figcaption>
    </figure>
  );
}
