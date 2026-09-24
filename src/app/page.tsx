import {
  about,
  caseStudies,
  contact,
  cvUrl,
  profile,
  roles,
} from "@/data/site";
import Image from "next/image";

const textLink =
  "text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-hover hover:decoration-accent-hover";

function SectionLabel({
  index,
  children,
  id,
}: {
  index: string;
  children: string;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-accent"
    >
      <span className="tabular-nums">{index}</span>
      <span aria-hidden className="h-px w-8 bg-accent" />
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main id="content" className="mx-auto max-w-3xl px-6 pb-12">
      <div id="top" className="scroll-mt-8">
        <section id="hero" className="fade-in-up scroll-mt-8 pb-2 pt-8 sm:pt-10">
          <p className="text-sm text-muted-foreground">{profile.role}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-accent sm:text-5xl sm:leading-none">
            {profile.name}
          </h1>
          <span aria-hidden className="mt-3 block h-px w-12 bg-accent" />
          <p className="mt-3 max-w-xl text-[17px] leading-snug">{profile.lead}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[17px]">
            <a className={textLink} href="#case-studies">
              Case studies
            </a>
            <a className={textLink} href={`mailto:${contact.email}`}>
              Email me
            </a>
          </div>
        </section>

        <section
          aria-labelledby="case-studies"
          className="fade-in-up scroll-mt-8 pt-10"
          style={{ animationDelay: "40ms" }}
        >
          <SectionLabel index="01" id="case-studies">
            Case studies
          </SectionLabel>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-card hover:border-accent"
              >
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  width={720}
                  height={360}
                  className="aspect-[2/1] w-full object-cover object-top"
                />
                <div className="flex flex-1 flex-col p-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium tracking-tight">{study.title}</h3>
                    {study.status ? (
                      <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        {study.status}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-2 text-[17px] leading-snug">{study.summary}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {study.stack.map((item) => (
                      <li key={item}>
                        <span className="inline-block rounded-full border border-accent px-2 py-0.5 text-xs text-accent">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {study.liveUrl ? (
                      <a
                        className={textLink}
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                    {study.repoUrl ? (
                      <a
                        className={textLink}
                        href={study.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{study.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="about"
          className="fade-in-up scroll-mt-8 pt-10"
          style={{ animationDelay: "80ms" }}
        >
          <SectionLabel index="02" id="about">
            About
          </SectionLabel>
          <p className="mt-3 max-w-2xl text-[17px] leading-relaxed">
            {about.join(" ")}
          </p>
        </section>

        <section
          aria-labelledby="experience"
          className="fade-in-up scroll-mt-8 pt-10"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <SectionLabel index="03" id="experience">
              Experience
            </SectionLabel>
            {cvUrl ? (
              <a
                href={cvUrl}
                className={`${textLink} text-sm`}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
                <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
          <ol className="mt-4 space-y-4">
            {roles.map((role) => (
              <li
                key={`${role.years}-${role.title}`}
                className="grid grid-cols-[4.75rem_1fr] gap-x-4 sm:grid-cols-[5.5rem_1fr]"
              >
                <p className="pt-0.5 text-sm tabular-nums text-accent">{role.years}</p>
                <div>
                  <h3 className="font-medium leading-snug tracking-tight">
                    {role.title}
                    {role.org ? (
                      <span className="font-normal text-muted-foreground"> · {role.org}</span>
                    ) : null}
                  </h3>
                  {role.line ? <p className="mt-0.5 max-w-xl leading-snug">{role.line}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer
          aria-labelledby="contact"
          className="fade-in-up mt-10 scroll-mt-8 border-t border-border pt-6"
          style={{ animationDelay: "160ms" }}
        >
          <SectionLabel index="04" id="contact">
            Contact
          </SectionLabel>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[17px]">
            <li>
              <a className={textLink} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a
                className={textLink}
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={textLink}
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                GitHub
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}
