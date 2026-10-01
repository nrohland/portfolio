import { siPython, siDbt, siDuckdb, siGooglebigquery, siNextdotjs } from "simple-icons";
import Image from "next/image";
import type { Technology } from "@/data/site";
const icons = { Python: siPython, dbt: siDbt, DuckDB: siDuckdb, BigQuery: siGooglebigquery, "Next.js": siNextdotjs };
export function Stack({ items }: { items: Technology[] }) {
  return <ul className="tech-stack" aria-label="Technologies">{items.map(name => <li key={name} title={name}>
    {name in icons ? <svg viewBox="0 0 24 24" aria-hidden="true" className={name === "DuckDB" ? "duckdb-logo" : undefined} style={{ fill: name === "DuckDB" ? "#1a1a1a" : `#${icons[name as keyof typeof icons].hex}` }}><path d={icons[name as keyof typeof icons].path} /></svg> : <Image src="/logos/meltano.svg" width={16} height={16} alt="" className="brand-logo" />}
    <span>{name}</span></li>)}</ul>;
}
