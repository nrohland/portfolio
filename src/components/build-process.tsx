"use client";

import { useEffect, useRef } from "react";

const sources = ["APIs", "Databases", "Public datasets"];
const stages = [["Explore", "Python · EDA"], ["Clean", "Types · units · missing values"],
  ["Model", "Grains · relationships · metrics"], ["Test", "Data quality · business logic"]];
const outputs = ["Shared metrics", "Dashboards", "Visualizations"];

function Node({ x, y, width, height, title, detail }: {
  x: number; y: number; width: number; height: number; title: string; detail?: string;
}) {
  return <g className="workflow-node">
    <rect x={x} y={y} width={width} height={height} rx="3" />
    <text x={x + 16} y={y + (detail ? 22 : height / 2 + 5)} className="workflow-title">{title}</text>
    {detail && <text x={x + 16} y={y + 41} className="workflow-detail">{detail}</text>}
  </g>;
}

function Diagram({ mobile = false }: { mobile?: boolean }) {
  const paths = mobile ? [
    "M28 82 H12 V240 H170 V290", "M28 138 H12 V240 H170 V290", "M28 194 H12 V240 H170 V290",
    "M170 568 V594 H12 V664 H28", "M170 568 V594 H12 V720 H28", "M170 568 V594 H12 V776 H28",
  ] : [
    "M242 124 H320 V127 H404", "M242 224 H320 V127 H404", "M242 324 H320 V127 H404",
    "M596 301 H686 V124 H758", "M596 301 H710 V224 H758", "M596 301 H686 V324 H758",
  ];
  return <svg className={mobile ? "workflow-mobile" : "workflow-desktop"}
    viewBox={mobile ? "0 0 340 830" : "0 0 1000 420"} aria-hidden="true" focusable="false">
    <g className="workflow-connections">{paths.map(path => <path d={path} key={path} />)}</g>
    <rect className="workflow-layer" x={mobile ? 20 : 380} y={mobile ? 266 : 70}
      width={mobile ? 300 : 240} height={mobile ? 302 : 282} rx="5" />
    <g className="workflow-labels">
      <text x={mobile ? 28 : 32} y={mobile ? 38 : 52}>Sources</text>
      <text x={mobile ? 36 : 404} y={mobile ? 253 : 52}>Prepare &amp; validate</text>
      <text x={mobile ? 28 : 758} y={mobile ? 625 : 52}>Deliver</text>
    </g>
    {sources.map((title, i) => <Node key={title} title={title}
      x={mobile ? 28 : 32} y={mobile ? 60 + i * 56 : 92 + i * 100}
      width={mobile ? 284 : 210} height={mobile ? 44 : 64} />)}
    {stages.map(([title, detail], i) => <Node key={title} title={title} detail={detail}
      x={mobile ? 36 : 404} y={mobile ? 290 + i * 66 : 98 + i * 58}
      width={mobile ? 268 : 192} height={mobile ? 56 : 52} />)}
    {outputs.map((title, i) => <Node key={title} title={title}
      x={mobile ? 28 : 758} y={mobile ? 642 + i * 56 : 92 + i * 100}
      width={mobile ? 284 : 210} height={mobile ? 44 : 64} />)}
    <g className="workflow-stage-links">{[0, 1, 2].map(i => <path key={i} d={mobile
      ? `M170 ${346 + i * 66} v10 m-4 -4 l4 4 4 -4`
      : `M500 ${150 + i * 58} v6 m-3 -3 l3 3 3 -3`} />)}</g>
    <g className="workflow-motion">{paths.map((path, i) => <circle key={path} r="3.5" opacity="0">
      <animateMotion path={path} dur="4s" begin="indefinite" fill="freeze" data-delay={i * 120} />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.05;.9;1"
        dur="4s" begin="indefinite" fill="freeze" data-delay={i * 120} />
    </circle>)}</g>
  </svg>;
}

export function BuildProcess() {
  const figure = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = figure.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      element.querySelectorAll<SVGAnimationElement>("animate, animateMotion").forEach(animation => {
        animation.beginElementAt(Number(animation.dataset.delay) / 1000);
      });
      observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <figure ref={figure} className="build-process" aria-label="From data sources to useful analytics">
    <figcaption>From sources to useful analytics</figcaption>
    <Diagram /><Diagram mobile />
    <p className="sr-only">Find data in APIs, databases, and public datasets. Explore it with Python,
      clean types, units, and missing values, model grains, relationships, and metrics, then test
      data quality and business logic. Deliver shared metrics, dashboards, and visualizations.</p>
  </figure>;
}
