import { contact, profile, projects, technologyGroups } from "@/data/site";
import { ProjectCover } from "@/components/project-cover";
import { Stack } from "@/components/stack";
import { ProjectLinks } from "@/components/project-links";
import { SocialLink } from "@/components/social-link";

export default function Page() {
  return <main id="content" className="wrap">
    <section className="hero" aria-labelledby="name">
      <div><p className="role">{profile.role}</p><h1 id="name">Nicolás<br />Rohland<span className="name-dot">.</span></h1></div>
      <div className="hero-note"><p>{profile.lead}</p><p className="hero-detail">Models, shared metrics and interfaces.<br />Built to make the next decision clearer.</p>
        <div className="hero-links"><a className="primary-link" href="#work">View selected work <span aria-hidden="true">↓</span></a><SocialLink name="GitHub" href={contact.github} /><SocialLink name="LinkedIn" href={contact.linkedin} /></div>
      </div>
    </section>
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title">Selected work</h2><p>Business questions, built into products.</p></div>
      <div className="project-list">{projects.map((project, index) => <article key={project.slug} className="project-row" aria-labelledby={`${project.slug}-title`}>
        <a href={`/projects/${project.slug}/`} className="cover-link" aria-label={`Read the ${project.title} case study`} target="_blank" rel="noopener noreferrer"><ProjectCover project={project} /></a>
        <div className="project-info"><p className="project-category"><span className="project-number">0{index + 1}</span>{project.category}</p>
          <h3 id={`${project.slug}-title`}><a href={`/projects/${project.slug}/`} target="_blank" rel="noopener noreferrer">{project.title}</a><span>{project.thesis}</span></h3>
          <p className="project-problem">{project.problem}</p><p className="project-outcome">{project.outcome}</p>
          <p className="project-role"><span>My role</span> {project.role}</p><Stack items={project.stack} /><ProjectLinks project={project} />
        </div>
      </article>)}</div>
    </section>
    <section id="stack" className="stack-section" aria-labelledby="stack-title">
      <div className="section-heading"><h2 id="stack-title">Tools behind the work</h2><p>Selected for the problem at hand.</p></div>
      <div className="technology-groups">{technologyGroups.map(group => <div key={group.name}><h3>{group.name}</h3><Stack items={group.items} /></div>)}</div>
      <p className="stack-note">Conversational analytics appears in Northstar and LendFlow as curated, deterministic demos with visible SQL.</p>
    </section>
    <section id="about" className="about-section" aria-labelledby="about-title">
      <h2 id="about-title">How I build</h2><div><p className="about-lead">Start with the question.<br />Make the data hold up.</p>
        <p>I work at the intersection of analytics engineering and product thinking. I care about the grain of a table, the definition of a metric and the screen where someone uses it.</p>
        <p>My projects make those choices inspectable: documented models, tested transformations and interfaces that show where the numbers come from.</p>
        <a className="text-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">Professional background on LinkedIn</a>
      </div>
    </section>
    <footer id="contact" className="contact-section" aria-labelledby="contact-title"><p>Have a data problem in mind?</p><h2 id="contact-title">Let’s talk.</h2>
      <a className="email-link" href={`mailto:${contact.email}`}>{contact.email}</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Nicolás Rohland</span><div><SocialLink name="GitHub" href={contact.github} /><SocialLink name="LinkedIn" href={contact.linkedin} /><a href="#content">Back to top ↑</a></div></div>
    </footer>
  </main>;
}
