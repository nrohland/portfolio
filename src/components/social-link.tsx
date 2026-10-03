import { siGithub, siLinkedin } from "simple-icons";
const icons = { GitHub: siGithub, LinkedIn: siLinkedin };
export function SocialLink({ name, href }: { name: keyof typeof icons; href: string }) {
  const icon = icons[name];
  return <a className="social-link" href={href} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true" fill={`#${icon.hex}`}><path d={icon.path} /></svg><span>{name}</span></a>;
}
