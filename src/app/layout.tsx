import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ParticlesSnow from "@/src/components/particles-snow";

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend', // Define a CSS variable name
  display: 'swap',
});

// Configure Montserrat (Optional)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Amiel Abadilla",
  description: "WaddleIT, Founder",
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
        
        
      </body>
    </html>
  );
}
