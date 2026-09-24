import { ModeToggle } from "@/components/mode-toggle";
import { cvUrl, email, profile } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Header" className="flex items-center gap-1 sm:gap-3">
          {cvUrl ? (
            <a
              href={cvUrl}
              className="px-2 py-2 text-sm underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
              <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
            </a>
          ) : null}
          <a
            href={`mailto:${email}`}
            className="px-2 py-2 text-sm underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
            aria-label={`Email ${email}`}
          >
            Email
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
