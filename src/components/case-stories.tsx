import Image from "next/image";
import { FunnelChart } from "@/components/project-cover";
import { CasePipeline } from "@/components/case-pipeline";
import { ProductEconomics, AcquisitionEconomics, CustomerEconomics, DeviceConversion, OperatorProduction, OilProduction, LendingSteps, BankConnection } from "@/components/case-charts";
import { applicationStages } from "@/data/cover-charts";
import data from "@/data/case-evidence.json";

const repos = {
  ecommerce: "https://github.com/nrohland/ecommerce-profitability-analytics/blob/9f89a1bb380cc174330967092dee306cf6b92f96/",
  fintech: "https://github.com/nrohland/lendflow-fintech-analytics/blob/ffc1decc2c81b9278c874c43bd50e19f411bfc79/",
  energy: "https://github.com/nrohland/vaca-muerta-pulse/blob/1c1c30eb9e29901048cbd812eb14f46c109e4439/",
};
function Source({ repo, path, children }: { repo: keyof typeof repos; path: string; children: React.ReactNode }) {
  return <a className="text-link story-source" href={repos[repo]+path} target="_blank" rel="noopener noreferrer">{children} ↗</a>;
}
export function DashboardCapture({ fintech = false }: { fintech?: boolean }) {
  return <figure className="story-capture"><Image src={`/case-studies/${fintech ? "lendflow" : "northstar"}.webp`} alt={fintech ? "Lending dashboard with application completion, approval and funding rates" : "Ecommerce dashboard with revenue, contribution margin, orders and trends"} width={1440} height={1000} sizes="(max-width: 700px) 100vw, 1280px" loading="eager"/><figcaption>{fintech ? "Overview page of the implemented lending dashboard." : "Implemented profitability dashboard. Its overview uses a 2025 snapshot."}</figcaption></figure>;
}
export function LendingFunnel() {
  const labels = ["Started", "Submitted", "Approved", "Contracted", "Funded"];
  return <figure className="lending-hero-visual"><div className="visual-label"><span className="eyebrow">Application counts</span><span>100,000 applications</span></div><FunnelChart/><ol className="funnel-stage-labels">{applicationStages.map((n,i)=><li key={labels[i]} style={{left:`${(18+i*54)/274*100}%`}}><strong>{labels[i]}</strong><span>{n.toLocaleString("en-US")}</span></li>)}</ol><figcaption>Percentages use started applications as the denominator. This summary omits intermediate events. Declined and referred decisions end the funding path.</figcaption></figure>;
}
export function EnergySeries() {
  return <figure className="energy-hero-visual"><div className="visual-label"><span className="eyebrow">Monthly production</span><span>January to December 2025</span></div><OilProduction/><figcaption>Oil volume for the Vaca Muerta formation and unconventional resources. Source is the committed monthly mart extract.</figcaption></figure>;
}
function Chapter({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="story-chapter"><p className="eyebrow">{label}</p><div><h2>{title}</h2>{children}</div></section>;
}
function Finding({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="story-insight"><p className="eyebrow">{label}</p><h2>{title}</h2>{children}</section>;
}
function Metric({ value, label, detail }: { value: string; label: string; detail: string }) {
  return <div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>;
}

export function EcommerceStory() {
  return <>
    <Chapter label="Context and starting checks" title="Compare sales with the costs of those sales.">
      <p>The project models a US Amazon/DTC brand with 12 SKUs. I use orders, refunds, historical product costs, marketplace fees and campaign spend to calculate contribution profit.</p>
      <p>The generator includes a high-revenue product with weak margins and different repeat behavior for subscribers. The validation script checks those patterns. They are planned test cases, not unexpected findings from a client dataset.</p>
      <ul className="story-checks"><li>Does the product with the most revenue also generate the most contribution?</li><li>Do subscribers generate more customer value after product costs and fees?</li></ul>
      <Source repo="ecommerce" path="scripts/validate_data.py">Read the analytical checks</Source>
    </Chapter>
    <Finding label="Annual comparison" title="Revenue rose in 2025. Contribution stayed negative.">
      <div className="story-metrics"><Metric value="$2.39M / $4.22M" label="Gross revenue" detail="2024 / 2025"/><Metric value="−$301k / −$632k" label="Contribution profit" detail="2024 / 2025"/></div>
      <p>I compare yearly totals before moving to products. The loss is larger in 2025, so revenue growth alone cannot answer the profitability question. These totals do not identify which cost caused the change.</p>
    </Finding>
    <Chapter label="Product-level analysis" title="Daily Nutrition Pro leads revenue but loses contribution.">
      <p>I rank SKUs by revenue, then compare their contribution after discounts, refunds, COGS, fees and product-attributed advertising. Daily Nutrition Pro has $3.38M in gross revenue and a contribution margin of −43.2% across the two years.</p>
      <p>The revenue ranking does not work as a profit ranking in this export. Sleep Support Berry generates $420,960 in revenue and $61,961 in contribution, the highest contribution profit among the 12 SKUs.</p>
    </Chapter>
    <ProductEconomics/>
    <section className="story-split"><div><p className="eyebrow">Customer analysis</p><h2>Compare subscribers at a defined observation window.</h2><p>The next cut separates subscribers from one-time customers. Average 90-day net revenue is $114 for subscribers and $53 for one-time customers.</p><p>Revenue LTV still includes money that pays for goods and marketplace fees. I also calculate lifetime profit before acquisition spend. Its observation window differs from the 90-day metric, so I do not subtract one measure from the other.</p></div><CustomerEconomics/></section>
    <Chapter label="Acquisition analysis" title="Check whether customer profit covers acquisition cost.">
      <p>I divide average lifetime profit before acquisition by average CAC at channel grain. Meta and Google are above 1 in the export. Amazon Ads is at 0.15, so its observed customer profit covers only a fraction of its acquisition cost.</p>
      <p>This comparison adds customer economics to the campaign view. Attributed revenue and ROAS alone do not include product costs or fees.</p>
    </Chapter>
    <AcquisitionEconomics/>
    <Chapter label="Building the model" title="Keep order costs and campaign spend at their own grains.">
      <p>I build <code>analytics.order_item_economics</code> at order-line grain. Refunds, fees and COGS aggregate by item before the joins, which prevents multiple cost rows from multiplying revenue.</p>
      <p><code>analytics.product_daily_metrics</code> joins campaign spend by date and target product. I do not assign that spend to individual orders. <code>analytics.customer_value</code> attributes refunds back to the original item and calculates value over 30, 60 and 90 days.</p>
      <Source repo="ecommerce" path="sql/metrics/semantic_views.sql">Read the metric SQL</Source>
    </Chapter>
    <section className="metric-equation"><p className="eyebrow">Contribution definition</p><h2>Net revenue <span>− COGS − fees − ad spend</span></h2><p>Net revenue already subtracts discounts and refunds. The portfolio and product views use this definition at their respective grains.</p></section>
    <Chapter label="Building the dashboard" title="Let the reader move between products, customers and campaigns.">
      <p>The dashboard starts with commercial totals and monthly trends. Product rows expose contribution margins. Customer and cohort views show repeat behavior, while advertising views compare spend with acquisition cost and customer profit.</p>
      <p>The question catalog reads the same export and shows the SQL for each supported answer. It cannot run an arbitrary query.</p>
    </Chapter>
    <DashboardCapture/>
    <CasePipeline steps={[{label:"Generate",detail:"Python with a fixed seed"},{label:"Store",detail:"Parquet facts and dimensions"},{label:"Calculate",detail:"DuckDB metric views"},{label:"Export",detail:"JSON snapshot"},{label:"Explore",detail:"Dashboard and question catalog"}]} caption="The export script queries DuckDB before deployment. The deployed dashboard reads the resulting JSON file."/>
    <Chapter label="Validation" title="Check the financial totals as well as the intended patterns.">
      <p>The checks reconcile order headers with order items and verify foreign keys and unique IDs. Separate checks compare product margins, subscriber value and campaign efficiency against the patterns defined in the generator.</p>
      <p>Order reconciliation checks accounting consistency. It cannot verify whether the campaign attribution matches how customers made a purchase.</p>
    </Chapter>
  </>;
}

export function FintechStory() {
  const experiment = data.fintech.bankExperiment;
  return <>
    <Chapter label="Context and initial hypothesis" title="Follow the application before and after the credit decision.">
      <p>The design brief asks where an auto-loan application loses applicants before funding. It includes bank connection, identity checks, underwriting, vehicle selection and contracting.</p>
      <p>The generator specifies lower bank-connection completion for Mobile Safari and tests a treatment that changes failure and recovery probabilities. This gives the analysis a defined hypothesis to check. It does not document a real lending intervention.</p>
      <Source repo="fintech" path="specs/analytical-spec.md">Read the starting questions and experiment definition</Source>
    </Chapter>
    <section className="story-split"><div><p className="eyebrow">Data and metric definitions</p><h2>Count applications, not events.</h2><p>The six source tables contain applicants, applications, product events, underwriting decisions, funding events and experiment assignments. One application can have several failure and recovery events.</p><p>I count each application once at a stage. A failure followed by success still counts as completion. Approval divides by terminal decisions, while funding conversion divides by starts or approvals, depending on the question.</p></div><div className="definition-stack"><div><span>Completion</span><strong>Submitted / started</strong></div><div><span>Approval</span><strong>Approved / decided</strong></div><div><span>Take-up</span><strong>Funded / approved</strong></div></div></section>
    <Chapter label="First pass through the funnel" title="Separate credit outcomes from lifecycle drop-off.">
      <p>Of 100,000 starts, 45,692 reach submission. Underwriting approves 22,351 applications, and 13,065 eventually fund. I keep declined and referred decisions out of the lifecycle drop-off calculation because they are credit outcomes.</p>
      <p>Before submission, 20,921 applications stop before completing personal information. Another 14,091 start bank connection but do not complete it. After approval, 5,469 do not reach vehicle selection.</p>
    </Chapter>
    <LendingSteps/>
    <section className="story-split"><div><p className="eyebrow">Segment exploration</p><h2>Device completion is only the first cut.</h2><p>Submission is lower on mobile than desktop. That comparison alone does not locate the problem, so the exported metrics also break out device and browser at bank connection.</p></div><div className="story-metrics"><Metric value="48.9%" label="Approved / decided" detail="22,351 / 45,692"/><Metric value="58.5%" label="Funded / approved" detail="13,065 / 22,351"/></div></section>
    <DeviceConversion/>
    <Chapter label="Bank-connection finding" title="Mobile Safari has lower completion than the other Safari cut.">
      <p>Among applications that start bank connection, Mobile Safari completes at 53.4%. Desktop Safari completes at 90.3%, while mobile Chrome completes at 89.4%.</p>
      <p>The device-and-browser cut matches the planned generator pattern. It narrows the investigation to bank connection instead of treating every mobile application as the same experience. The comparison does not prove what caused a failure.</p>
    </Chapter>
    <BankConnection/>
    <Finding label="The defined experiment" title="Compare completion among applications that start bank connection.">
      <div className="story-metrics"><Metric value={`${(experiment.control_value*100).toFixed(1)}%`} label="Control" detail={`${experiment.conversions_control.toLocaleString("en-US")} / ${experiment.n_control.toLocaleString("en-US")}`}/><Metric value={`${(experiment.treatment_value*100).toFixed(1)}%`} label="Treatment" detail={`${experiment.conversions_treatment.toLocaleString("en-US")} / ${experiment.n_treatment.toLocaleString("en-US")}`}/></div>
      <p>The exported difference is {(experiment.absolute_difference_pp).toFixed(1)} percentage points. Its 95% Wald interval runs from {(experiment.ci_low*100).toFixed(1)} to {(experiment.ci_high*100).toFixed(1)} points. The generator encodes the treatment effect, so this is a check of the analytical implementation.</p>
      <p>A product decision still needs guardrail margins. The export leaves the recommendation unset, even though it reports the statistical comparison.</p>
    </Finding>
    <Chapter label="Building the application model" title="Store stage entry and duration before calculating rates.">
      <p><code>int_application_funnel</code> maps events to stage timestamps. <code>fct_application_funnel</code> records applications at each reached stage. The mart separates stage conversion, error rates and durations among completers.</p>
      <p><code>product_metrics</code> publishes those measures with their numerators, denominators and populations. The experiment mart uses applications that start bank connection for its primary metric, not everyone assigned to a variant.</p>
      <Source repo="fintech" path="transform/models/marts/product_metrics.sql">Read the published metric definitions</Source>
    </Chapter>
    <CasePipeline steps={[{label:"Generate",detail:"Python applications and events"},{label:"Store",detail:"Parquet source tables"},{label:"Model and test",detail:"dbt on DuckDB"},{label:"Export",detail:"Mart metrics and SQL"},{label:"Explore",detail:"Next.js dashboard and catalog"}]} caption="dbt builds the models locally. The export script publishes the metrics that the dashboard and question catalog read."/>
    <Chapter label="Building the product" title="Give the funnel, operations and experiment different questions.">
      <p>The funnel page exposes stage counts and segment cuts. Operations compares decision and funding waits. The experiment page reports variant populations, estimates and intervals without filling in a ship decision.</p>
      <p>The question catalog can answer fixed questions about drop-off and manual review. A request combining mobile and paid search returns two available slices and says that their intersection is absent.</p>
    </Chapter>
    <DashboardCapture fintech/>
    <Chapter label="Validation" title="Reconcile the funnel with the application facts.">
      <p>dbt tests stage counts against application facts, timestamp order and the canonical clocks. Other tests reject funding before approval, contracts before submission and a bank-connected event without a bank-connection start.</p>
      <p>The repository has these tests, but no completed EDA notebook assessing the treatment recommendation.</p>
    </Chapter>
  </>;
}

export function EnergyStory() {
  const h = data.energy.headline;
  return <>
    <Chapter label="Context and source inspection" title="Start with the reporting unit and the production month.">
      <p>I wanted to compare oil production across Vaca Muerta operators and concessions using the public Capítulo IV records. The source contains annual files, monthly well records and different units for oil, gas and water.</p>
      <p>Oil and water use cubic metres. Gas uses thousands of cubic metres. Production month and ingestion time are separate fields. Fracture data comes from Adjunto IV, which is a different resource.</p>
    </Chapter>
    <Finding label="Checking the load" title="The 2025 source and raw table both contained 991,844 rows.">
      <p>The recorded full-year load reconciled the CKAN total with BigQuery and found no duplicate well, year and month keys. That check covers ingestion of the full source, before the Vaca Muerta filter.</p>
      <p>The first attempt also exposed a schema lookup on every record. Caching the schema removed those repeated CKAN requests. The subsequent load completed in 13 minutes and 35 seconds.</p>
      <Source repo="energy" path="extraction/docs/hito-1-full-year-2025-load.md">Read the recorded load checks</Source>
    </Finding>
    <section className="story-split energy-grains"><div><p className="eyebrow">Cleaning and grain</p><h2>Keep one record per well and production month.</h2><p>The staging model casts source fields, creates the month date and filters <code>formacion = &apos;vaca muerta&apos;</code> with <code>tipo_de_recurso = &apos;NO CONVENCIONAL&apos;</code>.</p><p>When multiple records share a well, year and month, the model prefers a rectified record, then the latest batch and extraction timestamps. Company and concession IDs remain available for later aggregation.</p><Source repo="energy" path="transform/models/staging/stg_produccion_pozo_mes.sql">Read the staging rules</Source></div><div className="definition-stack"><div><span>Base fact</span><strong>Well × month</strong></div><div><span>Operator totals</span><strong>Company × month</strong></div><div><span>Concession totals</span><strong>Area × month</strong></div></div></section>
    <Chapter label="A correction during the prototype" title="The first counter used the wrong denominator.">
      <p>The first notebook divided basin volume by the sum of effective operating days. That produces a well-productivity measure, not the basin&apos;s daily production rate. ADR 0002 records the mistake and the replacement notebook.</p>
      <p>The corrected headline divides monthly basin volume by calendar days. The mart keeps both calculations under different names to distinguish basin production from well productivity.</p>
    </Chapter>
    <Finding label="December 2025 extract" title="Calendar-day production differs from well-day productivity.">
      <div className="story-metrics"><Metric value={Math.round(Number(h.rate_bbl_dia)).toLocaleString("en-US")} label="Barrels per calendar day" detail="Monthly basin volume / 31 days"/><Metric value={Number(h.productivity_bbl_dia).toFixed(1)} label="Barrels per effective well-day" detail="Monthly basin volume / summed effective days"/></div>
      <p>The source records monthly volume. Dividing by calendar days estimates its average rate for that month. It does not measure production at a particular second.</p>
      <Source repo="energy" path="docs/adrs/0002-ui-spike-notebook.md">Read the prototype correction</Source>
    </Finding>
    <Chapter label="Comparing the modeled data" title="Aggregate operator volume after applying the source filters.">
      <p>The company-month mart sums the filtered well records. In December 2025, YPF reports 1.617 million m³ of oil in this extract, followed by Vista at 0.343 million m³.</p>
      <p>I use these volumes to compare operator output. They do not establish which operator has the most productive wells. The monthly series at the top of this page uses the same filtered production scope.</p>
    </Chapter>
    <OperatorProduction/>
    <Chapter label="Building the data model" title="Reconcile every aggregation with the well-month fact.">
      <p><code>fct_well_month</code> contains the cleaned production records. Company and area marts aggregate that fact, while <code>fct_barrilito_rate</code> selects the latest month and calculates the basin rate.</p>
      <p>dbt tests compare company, area and headline oil totals with the well-month totals. They also check whether each company and area ID maps to one name. Fracture models stay separate because their join to production wells is unconfirmed.</p>
    </Chapter>
    <CasePipeline steps={[{label:"Source",detail:"Capítulo IV on CKAN"},{label:"Ingest",detail:"Meltano"},{label:"Land",detail:"BigQuery raw records"},{label:"Clean",detail:"dbt staging and intermediate"},{label:"Aggregate",detail:"Well, company and area marts"},{label:"Inspect",detail:"Notebook and CSV extracts"}]} caption="The implemented path ends at development marts and notebook extracts. The public interface is the next milestone."/>
    <section className="energy-status"><p className="eyebrow">Current output</p><h2>The marts and notebook extracts are built.</h2><p>The committed extracts contain monthly production and the latest operator and concession totals. A second resource supplies monthly fracture counts. The revised notebook tests how a daily counter would use the basin rate.</p><p>The repository&apos;s public frontend remains unimplemented. These charts display the extracts directly.</p><Source repo="energy" path="apps/spike/data/SOURCE.md">Inspect the extract sources</Source></section>
  </>;
}
