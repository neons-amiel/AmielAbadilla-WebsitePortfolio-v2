"use client"

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

// IMAGES
import Amiel from '@/public/pgamiel.jpg'; 

// COMPONENTS
import TypingText from "@/src/components/typing-text";
import BubbleText from "@/src/components/bubble-text";
import TechCube from "@/src/components/techstack";
import HighlightCard, { Highlights } from "@/src/components/highlight"; 
import ProjectCard, { PROJECTS_DATA } from "@/src/components/project";
import { TECH_STACK } from "@/src/components/tech"; 

export default function Home() {
  // Replace useRef with useState to track the active card index
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const messages = [
    'I love using technology to make life easier.',
    'I hate bandaid solutions!',
    'I listen to problems to develop solutions',
  ];

  // Infinite loop logic: If at the end, go to 0. If at 0, go to the end.
  const nextHighlight = () => {
    setCurrentHighlight((prev) => (prev + 1) % Highlights.length);
  };

  const prevHighlight = () => {
    setCurrentHighlight((prev) => (prev - 1 + Highlights.length) % Highlights.length);
  };

  return(
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <main className="min-h-[calc(100svh-4rem)] flex items-center pt-12 pb-16 lg:py-0">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-12">
          
          <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:gap-4 lg:pr-8">
            <p className="text-sm font-medium text-white/70">WaddleIT • Founder</p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-6xl xl:text-7xl">
              Hi, I&apos;m{' '}
              <BubbleText
                text="Amiel Abadilla"
                className="bg-linear-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent"
              />
            </h1>
            <p className="max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">
              <TypingText
                messages={messages}
                cycleMs={9000}
                typingMsPerChar={55}
                className="font-medium text-white/80 [text-shadow:0_0_12px_rgba(34,211,238,0.35),0_0_24px_rgba(94,234,212,0.18)]"
                cursorClassName="text-teal-200/80"
              />
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-xl bg-white text-zinc-950 px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                View projects
              </Link>
              <a
                href="/Amiel-Abadilla-Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Download resume
              </a>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-3 pt-4">
              <a href="https://www.linkedin.com/in/amiel-abadilla/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:robertamiel.abadilla@gmail.com" aria-label="Email" className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </a>
              <a href="https://github.com/neons-amiel" target="_blank" rel="noreferrer" aria-label="GitHub" className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.287-.01-1.044-.015-2.049-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.805 5.624-5.478 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.903-.014 3.299 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-[420px] lg:mx-0 lg:justify-self-end shrink-0">
            <div className="relative aspect-square w-full lg:aspect-auto lg:h-[min(56svh,480px)] overflow-hidden rounded-full lg:rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <Image
                src={Amiel}
                alt="Amiel Abadilla"
                priority
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Projects Section */}
      <section id="projects" className="mx-auto w-full max-w-6xl py-16 px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Here are my Projects!</h2>
          <p className="mt-2 text-sm text-white/70">
            These are the projects that I have worked on for my academics, organization and external clients. 
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS_DATA.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Highlights & Experiences Section (SINGLE ITEM INFINITE CAROUSEL) */}
      <section id="experiences" className="w-full py-16">
        <div className="mx-auto w-full max-w-6xl mb-10 px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Highlights & Experiences</h2>
            <p className="mt-2 text-sm text-white/70">
              The following are some of my proudest moments so far!
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prevHighlight}
              aria-label="Previous highlight"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:-translate-x-0.5 hover:border-teal-300/50 hover:bg-teal-900/20 hover:text-teal-300 hover:shadow-[0_0_16px_rgba(45,212,191,0.2)] text-white/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextHighlight}
              aria-label="Next highlight"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:translate-x-0.5 hover:border-teal-300/50 hover:bg-teal-900/20 hover:text-teal-300 hover:shadow-[0_0_16px_rgba(45,212,191,0.2)] text-white/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        {/* CSS Grid Stacking Trick */}
        <div className="relative w-full px-6 lg:px-8 flex flex-col items-center">
          <div className="grid w-full place-items-center">
            {Highlights.map((highlight, index) => {
              const isActive = index === currentHighlight;
              return (
                <div 
                  key={highlight.id} 
                  // col-start-1 row-start-1 places all cards directly on top of each other
                  className={`col-start-1 row-start-1 flex items-stretch transition-all duration-500 ease-in-out ${
                    isActive 
                      ? "opacity-100 z-10 translate-y-0 scale-100" 
                      : "opacity-0 z-0 pointer-events-none translate-y-4 scale-95"
                  }`}
                >
                  <HighlightCard highlight={highlight} />
                </div>
              )
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-8">
            {Highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHighlight(index)}
                aria-label={`Go to highlight ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentHighlight 
                    ? "w-8 bg-teal-300 shadow-[0_0_8px_rgba(45,212,191,0.6)]" 
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="mx-auto w-full max-w-6xl py-16 px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold tracking-tight">My Coding Tech Stack</h2>
          <p className="mt-2 text-sm text-white/70 max-w-xl">
            The tools and technologies that I develop with. 
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {Object.values(TECH_STACK).map((t) => (
            <TechCube key={t.id} tech={t} />
          ))}
        </div>
      </section>

    </div>
  )
}