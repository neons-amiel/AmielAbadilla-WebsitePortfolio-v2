import Image from "next/image";
import Link from "next/link";

// Using your existing hero image, plus placeholders for hobbies
import AmielMain from '@/public/pgamiel.jpg'; 
import Baller from '@/public/highlights/baller.jpg'
import Rocker from '@/public/highlights/rocker.jpg'

export default function About() {
  return (
    <div className="w-full overflow-hidden pb-24">
      
      {/* 1. ABOUT HERO SECTION */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-12 pb-16 sm:px-8 lg:px-12 lg:pt-24 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:pr-8">
            <div className="inline-flex items-center rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-sm font-semibold text-teal-200">
              About Me
            </div>
            
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl text-white">
              Bridging business gaps with{' '}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                IT Initiatives.
              </span>
            </h1>
            
            <p className="max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">
              I am a 4th-year student at <strong>Ateneo de Manila University</strong> taking up a Bachelor of Science in <strong>Management Information Systems</strong>, with a specialization in Enterprise Systems. I love it when technology is used for impact, and MIS allows me to do exactly that.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-white/60">
                <svg className="h-5 w-5 text-teal-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                DOST-SEI Merit Scholar
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/60">
                <svg className="h-5 w-5 text-teal-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Dean&apos;s Lister (QPI: 3.40)
              </div>
            </div>
          </div>

          {/* Main Picture */}
          <div className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-[420px] lg:mx-0 lg:justify-self-end shrink-0 group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/30 to-cyan-500/30 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
              <Image
                src={AmielMain}
                alt="Amiel Abadilla"
                priority
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BENTO GRID (EXPERIENCE & AMBITIONS) */}
      <section className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* MISA Card (Takes up 2 columns on desktop for emphasis) */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_24px_rgba(45,212,191,0.2),inset_0_0_16px_rgba(45,212,191,0.1)] md:col-span-2">
            <div className="absolute inset-x-0 top-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-teal-100/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-xl font-semibold tracking-tight text-white mb-1 transition-colors group-hover:text-teal-100">Vice President for eServices</h3>
            <p className="text-sm text-teal-300/80 mb-6 font-medium">Ateneo MISA &apos;25-&apos;26</p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              <strong className="text-white/90">Directed 6 AVPs and 55 officers</strong> to create web-based applications. Oversaw all client projects, generating ₱40K in revenue, and spearheaded development workshops for 30+ developers in UI/UX and Front-End.
            </p>
            <ul className="text-white/60 text-sm list-disc pl-4 space-y-1 mt-auto">
              <li>Designed a standalone registration system for 525 members.</li>
              <li>Maintains the online Merch Store facilitating 100+ transactions.</li>
            </ul>
          </article>

          {/* Avenida Law Office Card */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_24px_rgba(45,212,191,0.2),inset_0_0_16px_rgba(45,212,191,0.1)]">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-1 transition-colors group-hover:text-teal-100">Lead Software Engineer</h3>
            <p className="text-sm text-teal-300/80 mb-6 font-medium">Avenida Law Office</p>
            <p className="text-white/70 text-sm leading-relaxed mt-auto">
              Engineered and Developed a web-based Application Management System to eliminate bottlenecks through digitization. Modeling ERDs and designing UX/UI architecture.
            </p>
          </article>

          {/* P&G / WaddleIT Ambition Card */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_24px_rgba(45,212,191,0.2),inset_0_0_16px_rgba(45,212,191,0.1)]">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-1 transition-colors group-hover:text-teal-100">IT Professional in the Making!</h3>
            <p className="text-sm text-teal-300/80 mb-6 font-medium">IT intern @ P&G | Founder</p>
            <p className="text-white/70 text-sm leading-relaxed mt-auto">
              I am an incoming <strong className="text-white/90">IT Intern @ Procter & Gamble</strong> while simultaneously growing my own IT Consultancy firm: <strong className="text-white/90">WaddleIT</strong>.
            </p>
          </article>

           {/* UXS Card */}
           <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_24px_rgba(45,212,191,0.2),inset_0_0_16px_rgba(45,212,191,0.1)] md:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-1 transition-colors group-hover:text-teal-100">Project Manager</h3>
            <p className="text-sm text-teal-300/80 mb-6 font-medium">User Experience Society (UXS)</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Led a core team of 36 officers across 7 departments to execute UX DEV 2025—a flagship 3-day development workshop within 28 days. Resulted in 37 participants developing their own interactive online whiteboards with stellar ratings.
            </p>
          </article>

        </div>
      </section>

      {/* 3. LIFE BEYOND THE SCREEN (HOBBIES) */}
      <section className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Life Beyond the Screen</h2>
          <p className="mt-3 text-sm text-white/70 max-w-xl">
            When I&apos;m not fighting for my dreams, you can usually find me on the court or on the stage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Guitar Hobby */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:border-teal-300/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]">
            <div className="relative h-64 w-full sm:h-72">
              <Image 
                src={Rocker} // UPDATE THIS PATH
                alt="Amiel playing lead guitar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">Lead Guitarist</h3>
              <p className="text-sm text-white/70">
                Playing lead guitar in 2 bands with just as many gigs throughout the year.
              </p>
            </div>
          </div>

          {/* Basketball Hobby */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:border-teal-300/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]">
            <div className="relative h-64 w-full sm:h-72">
              <Image 
                src={Baller} // UPDATE THIS PATH
                alt="Amiel playing basketball"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">2-Way Point Guard</h3>
              <p className="text-sm text-white/70">
                Your shiftiest 5'4 tech-bro, Kyrie Irving-esque hooper
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}