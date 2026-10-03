import { contact, profile, projects, technologyGroups } from "@/data/site";
import { ProjectCover } from "@/components/project-cover";
import { Stack } from "@/components/stack";
import { ProjectLinks } from "@/components/project-links";
import { SocialLink } from "@/components/social-link";
import { BuildProcess } from "@/components/build-process";

export default function Page() {
  return <main id="content" className="wrap">
    <section className="hero" aria-labelledby="name">
      <div className="hero-top"><h1 id="name">{profile.name}</h1>
        <div className="hero-contact"><SocialLink name="GitHub" href={contact.github} /><SocialLink name="LinkedIn" href={contact.linkedin} /><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      </div>
      <p className="hero-summary">Analytics Engineer / Data &amp; AI. I build data models, shared metrics and analytical products.</p>
      <Stack items={technologyGroups.flatMap(group => group.items)} />
      <nav className="hero-navigation" aria-label="Main navigation"><a className="primary-link" href="#work">Selected work <span aria-hidden="true">↓</span></a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    </section>
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title">Selected work</h2><p>Business questions, built into products.</p></div>
      <div className="project-list">{projects.map((project, index) => <article key={project.slug} className="project-row" aria-labelledby={`${project.slug}-title`}>
        <a href={`/projects/${project.slug}/`} className="cover-link" aria-label={`Read the ${project.title} case study`} target="_blank" rel="noopener noreferrer"><ProjectCover project={project} /></a>
        <div className="project-info"><p className="project-category"><span className="project-number">0{index + 1}</span>{project.category}</p>
          <h3 id={`${project.slug}-title`}><a href={`/projects/${project.slug}/`} target="_blank" rel="noopener noreferrer">{project.title}</a><span>{project.thesis}</span></h3>
          <dl className="project-summary">
            <div><dt>The Friction</dt><dd>{project.problem}</dd></div>
            <div><dt>The Solution</dt><dd>{project.solution}</dd></div>
            <div><dt>The Output</dt><dd>{project.outcome}</dd></div>
          </dl>
          <Stack items={project.stack} /><ProjectLinks project={project} />
        </div>
      </article>)}</div>
    </section>
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-heading"><h2 id="stack-title">Tools behind the work</h2><p>Selected for the problem at hand.</p></div>
      <div className="technology-groups">{technologyGroups.map(group => <div key={group.name}><h3>{group.name}</h3><Stack items={group.items} /></div>)}</div>
      <p className="stack-note">Conversational analytics appears in the ecommerce and fintech projects as curated, deterministic demos with visible SQL.</p>
    </section>
    <section id="about" className="about-section" aria-labelledby="about-title">
      <h2 id="about-title">How I build</h2>
      <BuildProcess />
      <a className="text-link process-profile" href={contact.linkedin} target="_blank" rel="noopener noreferrer">Professional background on LinkedIn</a>
    </section>
    <footer id="contact" className="contact-section" aria-labelledby="contact-title"><p>Have a data problem in mind?</p><h2 id="contact-title">Let’s talk.</h2>
      <a className="email-link" href={`mailto:${contact.email}`}>{contact.email}</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Nicolás Rohland</span><div><SocialLink name="GitHub" href={contact.github} /><SocialLink name="LinkedIn" href={contact.linkedin} /><a href="#content">Back to top ↑</a></div></div>
    </footer>
  </main>;
}
