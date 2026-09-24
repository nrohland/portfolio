import { ModeToggle } from "@/components/mode-toggle";
import { cvUrl, email, profile } from "@/data/site";

const headerLink =
  "text-sm text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-hover hover:decoration-accent-hover";

export function Header() {
  return (
    <header className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 pt-8 sm:pt-10">
      <a href="#top" className="text-sm font-medium tracking-tight text-foreground">
        {profile.name}
      </a>
      <nav aria-label="Header" className="flex items-center gap-3 sm:gap-4">
        {cvUrl ? (
          <a
            href={cvUrl}
            className={headerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
            <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
          </a>
        ) : null}
        <a href={`mailto:${email}`} className={headerLink} aria-label={`Email ${email}`}>
          Email
        </a>
        <ModeToggle />
      </nav>
    </header>
  );
}
