import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"; // 
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ParticlesSnow from "@/src/components/particles-snow";

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend', 
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amiel.waddleph.com'),
  title: {
    default: "Amiel Abadilla | Full-Stack Developer & Systems Architect",
    template: "%s | Amiel Abadilla",
  },
  description: "Portfolio of Amiel Abadilla, Full-Stack Developer and Founder/Systems Architect at WaddleIT, specializing in enterprise-grade web applications and scalable workflow automation.",
  keywords: [
    "Amiel Abadilla",
    "WaddleIT",
    "Full-Stack Developer",
    "Systems Architect",
    "React Developer",
    "Next.js Portfolio",
    "Django",
    "Web Development Agency Philippines",
  ],
  authors: [{ name: "Amiel Abadilla", url: "https://amiel.waddleph.com" }],
  creator: "Amiel Abadilla",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amiel.waddleph.com',
    title: 'Amiel Abadilla | Full-Stack Developer & Systems Architect',
    description: 'Explore the portfolio of Amiel Abadilla - empowering businesses through IT solutions, website applications and enterprise systems with WaddlePH.',
    siteName: 'Amiel Abadilla Portfolio',
    // Uncomment and add an actual preview image URL in your public folder later:
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Amiel Abadilla Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amiel Abadilla | Full-Stack Developer & Systems Architect',
    description: 'Portfolio of Amiel Abadilla, Founder and Systems Architect at WaddleIT.',
    // images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-dvh bg-zinc-950 text-zinc-50">
        <ParticlesSnow className="pointer-events-none fixed inset-0 -z-10" />
        <Header />
        
        <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          {/* Offset for fixed header */}
          <div className="h-16" />
          <div className="relative flex-1">
            <div className="relative z-10">{children}</div>
          </div>
        </div>
        
        <Footer/>
        
        {/* VERCEL ANALYTICS COMPONENT */}
        <Analytics />
        
      </body>
    </html>
  );
}