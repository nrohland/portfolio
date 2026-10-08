import data from "@/data/case-evidence.json";
import { monthlyOil } from "@/data/cover-charts";

const money = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

export function RevenueContribution() {
  const rows = data.ecommerce.monthly;
  const x = (i: number) => 65 + i * 30;
  const y = (v: number) => 255 - v / 500000 * 190;
  return <figure className="case-plot commercial-plot">
    <div className="plot-heading"><p className="eyebrow">24 months / USD</p><h3>Growth, with the costs left in.</h3></div>
    <div className="plot-legend"><span>Gross revenue</span><span>Contribution profit</span></div>
    <svg className="case-chart-desktop" viewBox="0 0 800 350" role="img" aria-label="Monthly gross revenue and contribution profit, 2024–2025. Revenue rises while contribution profit stays negative. Synthetic data.">
      {[0,250000,500000,-100000].map(v=><g key={v}><line x1="65" x2="755" y1={y(v)} y2={y(v)} className="case-grid"/><text x="55" y={y(v)+4} textAnchor="end">{v < 0 ? "−" : ""}${Math.abs(v)/1000}k</text></g>)}
      <polyline className="series-revenue" points={rows.map((r,i)=>`${x(i)},${y(r.gross_revenue)}`).join(" ")}/>
      <polyline className="series-profit" points={rows.map((r,i)=>`${x(i)},${y(r.contribution_profit)}`).join(" ")}/>
      {[0,6,12,18,23].map(i=><text key={i} x={x(i)} y="330" textAnchor="middle">{["Jan 24","Jul 24","Jan 25","Jul 25","Dec 25"][[0,6,12,18,23].indexOf(i)]}</text>)}
    </svg>
    <svg className="case-chart-mobile" viewBox="0 0 400 280" role="img" aria-label="Monthly gross revenue and negative contribution profit, 2024–2025. Synthetic data.">
      {[0,250000,500000,-100000].map(v=><g key={v}><line x1="55" x2="377" y1={200-v/500000*145} y2={200-v/500000*145} className="case-grid"/><text x="47" y={204-v/500000*145} textAnchor="end">{v<0?"−":""}${Math.abs(v)/1000}k</text></g>)}
      <polyline className="series-revenue" points={rows.map((r,i)=>`${55+i*14},${200-r.gross_revenue/500000*145}`).join(" ")}/>
      <polyline className="series-profit" points={rows.map((r,i)=>`${55+i*14},${200-r.contribution_profit/500000*145}`).join(" ")}/>
      <text x="55" y="262">Jan 24</text><text x="223" y="262" textAnchor="middle">Jan 25</text><text x="377" y="262" textAnchor="end">Dec 25</text>
    </svg>
    <figcaption>Contribution = net revenue − COGS − marketplace fees − ad spend. Synthetic 2024–2025 export.</figcaption>
    <details className="chart-data"><summary>Read chart data</summary><table><caption>Monthly commercial metrics, USD</caption><thead><tr><th>Month</th><th>Gross revenue</th><th>Contribution</th></tr></thead><tbody>{rows.map(r=><tr key={r.month}><th scope="row">{r.month.slice(0,7)}</th><td>{money(r.gross_revenue)}</td><td>{money(r.contribution_profit)}</td></tr>)}</tbody></table></details>
  </figure>;
}

export function ProductEconomics() {
  const rows = data.ecommerce.products.slice(0,5);
  return <figure className="case-plot"><div className="plot-heading"><p className="eyebrow">Top five SKUs by gross revenue / 2024–2025</p><h3>Volume and margin tell different stories.</h3></div>
    <div className="sku-table"><div className="sku-header"><span>Product</span><span>Gross revenue</span><span>Contribution margin</span></div>{rows.map(r=><div className="sku-row" key={r.product_id}><div><strong>{r.product_name}</strong><small>{r.sku}</small></div><span>{money(r.gross_revenue)}</span><span className={r.contribution_margin<0?"negative":"positive"}>{pct(r.contribution_margin)}</span></div>)}</div>
    <figcaption>Product contribution includes advertising where a campaign targets the product. Synthetic dataset; full 24-month window.</figcaption>
  </figure>;
}

export function AcquisitionEconomics() {
  return <figure className="case-plot"><div className="plot-heading"><p className="eyebrow">Acquisition channels / 2024–2025</p><h3>Revenue value is not profit value.</h3></div><div className="ratio-rows">{data.ecommerce.channels.map(r=><div key={r.channel}><strong>{r.channel}</strong><span className="ratio-track"><span style={{width:`${r.ltp_to_cac/1.5*100}%`}}/></span><b>{r.ltp_to_cac.toFixed(2)}×</b></div>)}</div><figcaption>Lifetime profit before acquisition cost ÷ CAC. A ratio below 1 means lifetime profit does not cover acquisition cost in this synthetic export. Ratios are descriptive, not causal.</figcaption></figure>;
}

export function DeviceConversion() {
  const rows = data.fintech.device.filter(r=>r.metric_name==="application_completion_rate");
  return <figure className="case-plot"><div className="plot-heading"><p className="eyebrow">Device slice / synthetic applications</p><h3>Start with the journey before approval.</h3></div><div className="device-rows">{rows.map(r=><div key={r.slice_value}><strong>{r.slice_value}</strong><span className="ratio-track"><span style={{width:`${r.metric_value*100}%`}}/></span><b>{pct(r.metric_value)}</b><small>{r.numerator.toLocaleString("en-US")} submitted / {r.denominator.toLocaleString("en-US")} started</small></div>)}</div><figcaption>Application completion = submitted ÷ started, within each device. These are separate slices, not device × channel intersections. The difference does not establish a cause.</figcaption></figure>;
}

export function OperatorProduction() {
  const max = data.energy.operators[0].oil;
  return <figure className="case-plot operator-plot"><div className="plot-heading"><p className="eyebrow">December 2025 / million m³</p><h3>One basin. Different operators.</h3></div><div className="operator-rows">{data.energy.operators.map(r=><div key={r.name}><strong>{r.name}</strong><span className="ratio-track"><span style={{width:`${r.oil/max*100}%`}}/></span><b>{(r.oil/1e6).toFixed(3)}</b></div>)}</div><figcaption>Five largest operators in the committed company-month extract. Official reported oil volume; this is not a ranking of well productivity.</figcaption></figure>;
}

export function CustomerEconomics() {
  return <div className="customer-comparison">{data.ecommerce.segments.map(r=><div key={r.customer_type}><p className="eyebrow">{r.customer_type==="subscriber"?"Subscribers":"One-time customers"}</p><strong>{money(r.ltv_90d)}</strong><p>90-day net revenue per customer</p><small>Lifetime profit before acquisition: {money(r.ltp)}</small></div>)}</div>;
}

export function OilProduction() {
  return <div className="oil-production">
    <svg viewBox="0 0 600 290" role="img" aria-label="Official monthly Vaca Muerta oil volume. January 2.18 million cubic metres, December 2.91 million, from the 2025 extract.">
      {[0,1,2,3].map(v=><g key={v}><line x1="45" x2="570" y1={240-v*65} y2={240-v*65} className="case-grid"/><text x="30" y={244-v*65} textAnchor="end">{v}</text></g>)}
      <text x="45" y="22">Oil production · million m³</text>
      <polyline className="series-revenue" points={monthlyOil.map((v,i)=>`${45+i*(525/11)},${240-v/1e6*65}`).join(" ")}/>
      <text x="45" y="270">Jan 2025</text><text x="570" y="270" textAnchor="end">Dec 2025</text>
      <text x="570" y="37" textAnchor="end">2.91</text>
    </svg>
  </div>;
}
