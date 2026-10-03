import Link from "next/link";
export function Header() {
  return <header className="site-header wrap">
    <Link href="/" className="wordmark" aria-label="Nicolás Rohland, home">nr<span aria-hidden="true">.</span></Link>
    <nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
  </header>;
}
