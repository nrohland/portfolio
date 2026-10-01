import { contact, profile, SITE_URL } from "@/data/site";
import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "./globals.css";
const description = "Nicolás Rohland, Analytics Engineer. Data products for ecommerce profitability, product analytics and open-data engineering. Explore projects, architecture and code.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Nicolás Rohland | Analytics Engineer / Data & AI", template: "%s | Nicolás Rohland" },
  description, alternates: { canonical: "/" },
  openGraph: { title: "Nicolás Rohland | Analytics Engineer", description, url: SITE_URL, siteName: profile.name, locale: "en_US", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nicolás Rohland. Analytics Engineer / Data & AI. Selected work: Northstar, LendFlow and Barrilito." }] },
  twitter: { card: "summary_large_image", title: "Nicolás Rohland | Analytics Engineer", description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Analytics Engineer", url: SITE_URL, sameAs: [contact.github, contact.linkedin] };
  return <html lang="en"><body><a className="skip-link" href="#content">Skip to content</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} /></body></html>;
}
