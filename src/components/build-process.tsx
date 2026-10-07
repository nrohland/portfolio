"use client";

import { useEffect, useRef } from "react";

const stages = [["Explore & clean", "Python · EDA"], ["Model", "Grains · metrics"], ["Test", "Quality · logic"]];

function Node({ x, y, width, height, title, detail }: {
  x: number; y: number; width: number; height: number; title: string; detail?: string;
}) {
  return <g className="workflow-node">
    <rect x={x} y={y} width={width} height={height} rx="3" />
    <text x={x + width / 2} y={y + height / 2 + (detail ? -4 : 5)} textAnchor="middle" className="workflow-title">{title}</text>
    {detail && <text x={x + width / 2} y={y + height / 2 + 18} textAnchor="middle" className="workflow-detail">{detail}</text>}
  </g>;
}

function Diagram({ mobile = false }: { mobile?: boolean }) {
  const paths = mobile ? ["M170 96 V148", "M170 254 V280", "M170 340 V366", "M170 426 V510"]
    : ["M204 130 H292", "M424 130 H444", "M576 130 H596", "M728 130 H796"];
  return <svg className={mobile ? "workflow-mobile" : "workflow-desktop"}
    viewBox={mobile ? "0 0 340 610" : "0 0 1000 260"} aria-hidden="true" focusable="false">
    <rect className="workflow-layer" x={mobile ? 28 : 272} y={mobile ? 148 : 55}
      width={mobile ? 284 : 476} height={mobile ? 314 : 150} rx="5" />
    <g className="workflow-connections">
      {paths.map((path, i) => <g key={path}>
        <path d={path} />
        <path d={mobile ? `M166 ${[144, 276, 362, 506][i]} l4 4 4 -4`
          : `M${[288, 440, 592, 792][i]} 126 l4 4 -4 4`} />
      </g>)}
    </g>
    <text className="workflow-labels" x={mobile ? 48 : 292} y={mobile ? 176 : 82}>Prepare &amp; validate</text>
    <Node title="Data sources" detail="APIs · databases · files" x={mobile ? 60 : 24}
      y={mobile ? 24 : 94} width={mobile ? 220 : 180} height={72} />
    {stages.map(([title, detail], i) => <Node key={title} title={title} detail={detail}
      x={mobile ? 60 : 292 + i * 152} y={mobile ? 194 + i * 86 : 100}
      width={mobile ? 220 : 132} height={60} />)}
    <Node title="Analytics" detail="Metrics · visualizations" x={mobile ? 60 : 796}
      y={mobile ? 510 : 94} width={mobile ? 220 : 180} height={72} />
    <g className="workflow-motion">{paths.map((path, i) => <circle key={path} r="3.5" opacity="0">
      <animateMotion path={path} dur=".8s" begin="indefinite" fill="freeze" data-delay={i * 900} />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.05;.9;1"
        dur=".8s" begin="indefinite" fill="freeze" data-delay={i * 900} />
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
