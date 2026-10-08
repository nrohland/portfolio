export type PipelineStep = { label: string; detail: string };

export function CasePipeline({ steps, caption }: { steps: PipelineStep[]; caption: string }) {
  return <figure className="case-pipeline">
    <ol aria-label="Implemented data pipeline, in processing order">{steps.map((step,i)=><li key={step.label}><span className="pipeline-index">0{i+1}</span><h3>{step.label}</h3><p>{step.detail}</p></li>)}</ol>
    <figcaption>{caption}</figcaption>
  </figure>;
}
