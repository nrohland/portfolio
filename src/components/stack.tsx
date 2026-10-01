import { siPython, siDbt, siDuckdb, siGooglebigquery, siNextdotjs, siReact, siTableau } from "simple-icons";
import Image from "next/image";
import type { Technology } from "@/data/site";
const icons = { Python: siPython, dbt: siDbt, DuckDB: siDuckdb, BigQuery: siGooglebigquery, "Next.js": siNextdotjs, React: siReact, Tableau: siTableau };
export function Stack({ items }: { items: Technology[] }) {
  return <ul className="tech-stack" aria-label="Technologies">{items.map(name => <li key={name} title={name}>
    {name in icons ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[name as keyof typeof icons].path} /></svg> : name === "SQL" ? <span aria-hidden="true" className="sql-icon">SQL</span> : <Image src="/logos/meltano.svg" width={16} height={16} alt="" className="brand-logo" />}
    <span>{name}</span></li>)}</ul>;
}
