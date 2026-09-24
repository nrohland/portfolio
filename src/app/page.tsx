import {
  about,
  caseStudies,
  contact,
  cvUrl,
  profile,
  roles,
} from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";

const linkClass =
  "underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground";

function SectionLabel({ children, id }: { children: string; id: string }) {
  return (
    <h2
      id={id}
      className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
    >
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main id="content" className="mx-auto max-w-3xl px-6 pb-24">
      <div id="top" className="scroll-mt-20">
        <section id="hero" className="fade-in-up scroll-mt-20 py-14" style={{ animationDelay: "0ms" }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {profile.role}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-snug tracking-tight">{profile.title}</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a className={linkClass} href="#case-studies">
              Case studies
            </a>
            <a className={linkClass} href={`mailto:${contact.email}`}>
              Email me
            </a>
          </div>
        </section>

        <section
          aria-labelledby="case-studies"
          className="fade-in-up scroll-mt-20 border-t border-border py-14"
          style={{ animationDelay: "40ms" }}
        >
          <SectionLabel id="case-studies">Case studies</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="flex h-full flex-col border border-border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium tracking-tight">{study.title}</h3>
                  {study.status ? (
                    <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {study.status}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{study.problem}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.shows}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.stack}</p>
                <p className="mt-3 text-sm leading-relaxed">{study.note}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {study.liveUrl ? (
                    <a
                      className={linkClass}
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {study.liveLabel ?? "Live"}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                  {study.repoUrl ? (
                    <a
                      className={linkClass}
                      href={study.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about"
          className="fade-in-up scroll-mt-20 border-t border-border py-14"
          style={{ animationDelay: "80ms" }}
        >
          <SectionLabel id="about">About</SectionLabel>
          <div className="mt-6 space-y-4 leading-relaxed">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="experience"
          className="fade-in-up scroll-mt-20 border-t border-border py-14"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <SectionLabel id="experience">Experience</SectionLabel>
            {cvUrl ? (
              <a
                href={cvUrl}
                className={`${linkClass} text-sm`}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
                <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
          <ol className="mt-8 space-y-8">
            {roles.map((role) => (
              <li
                key={`${role.dates}-${role.title}`}
                className="grid grid-cols-[5.5rem_1fr] gap-x-4"
              >
                <p className="pt-0.5 text-sm tabular-nums text-muted-foreground">{role.years}</p>
                <div>
                  <h3 className="font-medium leading-snug tracking-tight">{role.title}</h3>
                  {role.org ? <p className="text-sm text-muted-foreground">{role.org}</p> : null}
                  <p className="text-sm text-muted-foreground">{role.dates}</p>
                  {role.note ? (
                    <p className="mt-1 text-sm text-muted-foreground">{role.note}</p>
                  ) : null}
                  {role.bullets ? (
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="contact"
          className="fade-in-up scroll-mt-20 border-t border-border py-14"
          style={{ animationDelay: "160ms" }}
        >
          <SectionLabel id="contact">Contact</SectionLabel>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a className={`${linkClass} inline-flex items-center gap-2`} href={`mailto:${contact.email}`}>
                <Mail aria-hidden className="size-4" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                className={`${linkClass} inline-flex items-center gap-2`}
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <Linkedin aria-hidden className="size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={`${linkClass} inline-flex items-center gap-2`}
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <Github aria-hidden className="size-4" />
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
