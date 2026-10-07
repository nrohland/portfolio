import { contact, profile, projects, technologyGroups } from "@/data/site";
import { ProjectCover } from "@/components/project-cover";
import { BuildProcess } from "@/components/build-process";
import Link from "next/link";

const introductions = [
  {
    category: "Commerce",
    title: "Ecommerce Profitability",
    line: "Revenue isn’t profit.",
  },
  {
    category: "Fintech",
    title: "Fintech Product Analytics",
    line: "Where conversion breaks down.",
  },
  {
    category: "Energy · In development",
    title: "Energy Sector Analytics",
    line: "Vaca Muerta’s public records, made comparable.",
  },
];
export default function Page() {
  return (
    <main id="content">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-top">
          <span className="name">{profile.name}</span>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">Approach</a>
            <a href="#contact">Contact ↗</a>
          </nav>
        </div>
        <div className="hero-main">
          <p className="eyebrow">
            Data models. Shared metrics. Analytical products.
          </p>
          <h1 id="hero-title">
            Analytics
            <br />
            <span>Engineer.</span>
          </h1>
          <p className="hero-summary">
            I turn messy data into metrics,
            <br className="desktop-break" /> products and decisions.
          </p>
        </div>
        <div className="hero-bottom">
          <a className="arrow-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
          <div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span aria-hidden="true"> · </span>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-label">
          <h2 id="work-title">Selected work</h2>
          <span>01—03</span>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-row project-${index + 1}`}
              aria-labelledby={`${project.slug}-title`}
            >
              <Link
                href={`/projects/${project.slug}/`}
                className="cover-link"
                aria-label={`Explore ${project.title}`}
              >
                <ProjectCover project={project} />
              </Link>
              <div className="project-info">
                <p className="eyebrow">
                  0{index + 1} — {introductions[index].category}
                </p>
                <h3 id={`${project.slug}-title`}>
                  <Link href={`/projects/${project.slug}/`}>
                    {introductions[index].title}
                  </Link>
                </h3>
                <p className="project-line">{introductions[index].line}</p>
                <p className="metadata">{project.stack.join(" · ")}</p>
                <Link
                  className="arrow-link case-cta"
                  href={`/projects/${project.slug}/`}
                >
                  Explore case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="about-section wrap"
        aria-labelledby="about-title"
      >
        <div className="section-label">
          <h2 id="about-title">How I build</h2>
          <span>From sources to useful analytics</span>
        </div>
        <BuildProcess />
        <a
          className="text-link process-profile"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Professional background on LinkedIn ↗
        </a>
      </section>
      <section className="stack-section wrap" aria-labelledby="stack-title">
        <h2 id="stack-title" className="eyebrow">
          Tools behind the work
        </h2>
        <div className="technology-groups">
          {technologyGroups.map((group, index) => (
            <div key={group.name}>
              <h3 className="eyebrow">
                {["Model", "Warehouse", "Product"][index]}
              </h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
      <footer id="contact" className="contact-section">
        <div className="wrap">
          <p>Have a data problem?</p>
          <h2>
            <a href={`mailto:${contact.email}`}>
              Let’s talk<span aria-hidden="true">↗</span>
            </a>
          </h2>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>Email</a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <a href="#content">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
