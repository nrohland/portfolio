import { siDbt, siDuckdb, siNextdotjs, siClickhouse, siMetabase } from "simple-icons";
import Image from "next/image";
import type { Technology } from "@/data/site";

const icons = { dbt: siDbt, DuckDB: siDuckdb, "Next.js": siNextdotjs, ClickHouse: siClickhouse, Metabase: siMetabase };
const officialLogos = { Python: "/logos/python.svg", Airflow: "/logos/airflow.svg", BigQuery: "/logos/bigquery.svg", Looker: "/logos/looker.svg", Meltano: "/logos/meltano.svg" };

export function Stack({ items }: { items: Technology[] }) {
  return <ul className="tech-stack" aria-label="Technologies">{items.map(name => <li key={name} title={name}>
    {name in officialLogos ? <Image src={officialLogos[name as keyof typeof officialLogos]} width={20} height={20} loading="eager" alt="" className="brand-logo" /> : <svg viewBox="0 0 24 24" aria-hidden="true" className={(name === "DuckDB" || name === "ClickHouse") ? "duckdb-logo" : undefined} style={{ backgroundColor: name === "ClickHouse" ? "#ffcc01" : undefined, fill: (name === "DuckDB" || name === "ClickHouse") ? "#1a1a1a" : `#${icons[name as keyof typeof icons].hex}` }}><path d={icons[name as keyof typeof icons].path} /></svg>}
    <span>{name}</span></li>)}</ul>;
}
