const steps = [
  { title: "Find the sources", description: "Identify relevant data and its limitations." },
  { title: "Explore & clean", description: "Use Python to understand patterns and resolve inconsistencies." },
  { title: "Model", description: "Define grains, relationships, and shared metrics." },
  { title: "Test", description: "Validate data quality and business logic." },
  { title: "Visualize", description: "Build interfaces that make the findings useful." },
];

export function BuildProcess() {
  return <ol className="build-process" role="list" aria-label="From data sources to visualization">
    {steps.map((step, index) => <li key={step.title}>
      {index < steps.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </li>)}
  </ol>;
}
