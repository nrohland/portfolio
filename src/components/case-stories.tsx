import Image from "next/image";
import { FunnelChart } from "@/components/project-cover";
import { CasePipeline } from "@/components/case-pipeline";
import { RevenueContribution, ProductEconomics, AcquisitionEconomics, CustomerEconomics, DeviceConversion, OperatorProduction, OilProduction } from "@/components/case-charts";
import { applicationStages } from "@/data/cover-charts";

export function DashboardCapture({ fintech = false }: { fintech?: boolean }) {
  return <figure className="story-capture"><Image src={`/case-studies/${fintech ? "lendflow" : "northstar"}.webp`} alt={fintech ? "Real lending dashboard: completion, approval and funding metrics with their denominators" : "Real ecommerce dashboard: revenue, contribution margin, orders and commercial trends"} width={1440} height={1000} sizes="(max-width: 700px) 100vw, 1280px" loading="eager" priority={!fintech}/><figcaption>Actual demo interface · Synthetic data · {fintech ? "Independent portfolio project, not a lender product." : "2024–2025 analytical snapshot."}</figcaption></figure>;
}

export function LendingFunnel() {
  const labels = ["Started", "Submitted", "Approved", "Contracted", "Funded"];
  return <figure className="lending-hero-visual"><div className="visual-label"><span className="eyebrow">The application journey</span><span>100,000 synthetic applications</span></div><FunnelChart/><ol className="funnel-stage-labels">{applicationStages.map((n,i)=><li key={labels[i]} style={{left:`${(18+i*54)/274*100}%`}}><strong>{labels[i]}</strong><span>{n.toLocaleString("en-US")}</span></li>)}</ol><figcaption>All five percentages use started applications as the denominator. Condensed lifecycle; approvals are a decision outcome, not every applicant’s next stage.</figcaption></figure>;
}

export function EnergySeries() {
  return <figure className="energy-hero-visual"><div className="visual-label"><span className="eyebrow">Official production records</span><span>Available extract / Jan–Dec 2025</span></div><OilProduction/><figcaption>Monthly oil volume, Vaca Muerta formation / unconventional resources. Chart rendered from a committed mart extract; not a dashboard screenshot or live feed.</figcaption></figure>;
}

function Chapter({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="story-chapter"><p className="eyebrow">{label}</p><div><h2>{title}</h2>{children}</div></section>;
}
function Insight({ label = "Key insight", title, children }: { label?: string; title: string; children: React.ReactNode }) {
  return <section className="story-insight"><p className="eyebrow">{label}</p><h2>{title}</h2>{children}</section>;
}
function Metric({ value, label, detail }: { value: string; label: string; detail: string }) {
  return <div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>;
}

export function EcommerceStory() {
  return <>
    <Chapter label="The question" title="What remains after the sale?"><p>Revenue alone cannot show what a brand keeps. Discounts, refunds, product costs, marketplace fees and acquisition spend all change the answer.</p><p>The analytical model follows the order line into product margins, then connects customer cohorts and advertising efficiency.</p></Chapter>
    <RevenueContribution/>
    <Insight title="More revenue. A larger contribution loss."><div className="story-metrics"><Metric value="$2.39M → $4.22M" label="Gross revenue" detail="2024 → 2025"/><Metric value="−$301k → −$632k" label="Contribution profit" detail="2024 → 2025"/></div><p>Observed in the synthetic export, not a result from a real business. Revenue rose while the total contribution loss grew.</p></Insight>
    <Chapter label="Product economics" title="The bestseller is not the best margin."><p>The highest-revenue SKU, Daily Nutrition Pro, has a negative contribution margin in the 24-month export. Product-level economics keep this visible instead of burying it in the portfolio total.</p></Chapter>
    <ProductEconomics/>
    <section className="story-split"><div><p className="eyebrow">Customer economics</p><h2>A customer’s first order is only one view.</h2><p>Separate one-time customers from subscribers. The dashboard exposes 90-day net revenue, lifetime profit before acquisition and repeat behavior.</p><p className="small-note">These segment averages are descriptive. Lifetime profit and 90-day revenue have different observation windows.</p></div><CustomerEconomics/></section>
    <AcquisitionEconomics/>
    <Chapter label="Model & delivery" title="One metric layer. Two ways to explore it."><p>Item-level facts preserve historical costs and refunds. Advertising stays at campaign-day grain; it is not forced onto individual orders. DuckDB views calculate the business metrics before export.</p></Chapter>
    <CasePipeline steps={[{label:"Generate",detail:"Python · fixed seed"},{label:"Store",detail:"Parquet facts & dimensions"},{label:"Define",detail:"DuckDB semantic views"},{label:"Export",detail:"Static JSON snapshot"},{label:"Explore",detail:"Dashboard + curated analyst"}]} caption="Implemented local pipeline. Both interfaces read the same export; deployment needs no database runtime."/>
    <section className="metric-equation"><p className="eyebrow">The contribution contract</p><h2>Net revenue <span>− COGS − fees − ad spend</span></h2><p>Ratios are recalculated from summed numerators and denominators at the requested grain.</p></section>
    <Chapter label="What I built" title="A connected profitability view."><p>The delivered dashboard links product contribution, customer value, retention and acquisition cost. The curated analyst makes the same metrics and read-only SQL inspectable.</p><p>No business lift is claimed. The output is a reproducible analytical product.</p></Chapter>
  </>;
}

export function FintechStory() {
  return <>
    <Insight title="Approval isn’t the finish line."><div className="story-metrics"><Metric value="48.9%" label="Approval rate" detail="Approved / terminal decisions"/><Metric value="58.5%" label="Approved to funded" detail="Funded / approved applications"/><Metric value="13.1%" label="End-to-end funding" detail="Funded / started applications"/></div><p>The same portfolio tells three different stories depending on the denominator. Synthetic case study.</p></Insight>
    <Chapter label="The product question" title="Where do applicants leave the journey?"><p>A headline approval rate skips the work before submission and the steps after decisioning. The model follows application events, bank connection, identity verification, contracting and funding.</p><p>The hypothesis: measure the whole journey before choosing a product intervention.</p></Chapter>
    <DeviceConversion/>
    <section className="story-split"><div><p className="eyebrow">Metric governance</p><h2>Every rate needs a population.</h2><p>Submission uses starts. Approval uses terminal decisions. Take-up uses approved applications. Stage definitions keep declines and referred outcomes separate from lifecycle steps.</p></div><div className="definition-stack"><div><span>Completion</span><strong>Submitted / started</strong></div><div><span>Approval</span><strong>Approved / decided</strong></div><div><span>Take-up</span><strong>Funded / approved</strong></div></div></section>
    <DashboardCapture fintech/>
    <Chapter label="From events to a product" title="Govern the funnel before rendering it."><p>Tested staging, intermediate and mart models define the lifecycle and publish the available slices. The interface reads exported metrics rather than recomputing conversion rates.</p></Chapter>
    <CasePipeline steps={[{label:"Simulate",detail:"Python applications & events"},{label:"Persist",detail:"Parquet source tables"},{label:"Model & test",detail:"dbt on DuckDB"},{label:"Publish",detail:"Governed mart export"},{label:"Investigate",detail:"Next.js + curated Q&A"}]} caption="Implemented local analytical plane. No live warehouse queries or model-provider calls in the deployed demo."/>
    <Chapter label="Delivered" title="A funnel you can interrogate."><p>Overview, funnel, operations and experiment views share one governed export. Device, browser, channel and time slices support exploration; curated questions show the SQL behind the answer.</p><p>The experiment page leaves the product decision unset. A measured conversion lift or a ship recommendation is not claimed.</p></Chapter>
  </>;
}

export function EnergyStory() {
  return <>
    <Chapter label="The public-data problem" title="Published does not mean comparable."><p>Public production files mix reporting units and levels of aggregation. Comparing companies, concessions and wells requires explicit grains, normalized types and traceable transformations.</p><p>This project builds that analytical foundation before a public interface.</p></Chapter>
    <OperatorProduction/>
    <Insight label="Modeling principle" title="Production is not productivity."><p>Basin production per calendar day and well productivity per effective operating day answer different questions. The marts preserve both denominators.</p></Insight>
    <section className="story-split energy-grains"><div><p className="eyebrow">Analytical grains</p><h2>Build once at well-month. Aggregate deliberately.</h2><p>The Vaca Muerta formation and unconventional-resource filters live in the transformation layer. Volume conversions remain in the marts, not the interface.</p></div><div className="definition-stack"><div><span>Foundation</span><strong>Well × month</strong></div><div><span>Comparative views</span><strong>Company × month / area × month</strong></div><div><span>Headline</span><strong>Basin volume / calendar days</strong></div></div></section>
    <Chapter label="Source → analytical output" title="A traceable path through the data."><p>Capítulo IV records land in BigQuery through Meltano. dbt staging normalizes fields, intermediate models handle joins and units, and marts publish the comparison grains.</p></Chapter>
    <CasePipeline steps={[{label:"Source",detail:"Capítulo IV · CKAN / CSV"},{label:"Ingest",detail:"Meltano"},{label:"Land",detail:"BigQuery raw"},{label:"Transform",detail:"dbt staging & intermediate"},{label:"Compare",detail:"Well, company & area marts"},{label:"Inspect",detail:"Notebook / CSV snapshots"}]} caption="Built data path through the development marts. The public frontend is pending and is not represented as a delivered layer."/>
    <section className="energy-status"><p className="eyebrow">Current delivery</p><h2>Data foundation built.<br/>Public interface pending.</h2><p>Committed extracts support monthly production, operator and area comparisons. The portfolio shows those extracts directly, rather than a mock of unfinished features.</p><a className="text-link" href="https://github.com/nrohland/vaca-muerta-pulse/tree/main/apps/spike/data" target="_blank" rel="noopener noreferrer">Inspect the source extracts ↗</a></section>
  </>;
}
