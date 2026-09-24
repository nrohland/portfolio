import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, SITE_URL } from "@/data/site";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const description = `${profile.name}, ${profile.role}. Data products and case studies on profitability, lending analytics, ad analytics, and an open-data pipeline.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: profile.name,
    description,
    url: SITE_URL,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
