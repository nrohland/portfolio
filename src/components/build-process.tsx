const stages = [
  ["Sources", "APIs · databases · files"],
  ["Explore", "Clean types, units & gaps"],
  ["Model", "Grains, relationships & metrics"],
  ["Test", "Data quality & business logic"],
  ["Serve", "Shared metrics & visualizations"],
];
export function BuildProcess() {
  return (
    <ol className="build-process" aria-label="From sources to useful analytics">
      {stages.map(([title, detail], i) => (
        <li key={title}>
          <span className="eyebrow">0{i + 1}</span>
          <div className="stage-title">
            {title}
            {i < stages.length - 1 && <span aria-hidden="true">→</span>}
          </div>
          <p>{detail}</p>
        </li>
      ))}
    </ol>
  );
}
