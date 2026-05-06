'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TreePine } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-100 py-5">
      {/* 1. PROMINENT BACKDROP OVERLAY */}
      <div 
        className={[
          'fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 md:hidden',
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        ].join(' ')}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={[
          'relative mx-auto transition-all duration-300 ease-out',
          scrolled
            ? 'mt-3 w-[min(980px,calc(100%-1.5rem))] px-3'
            : 'mt-0 w-full px-0',
        ].join(' ')}
      >
        <nav
          className={[
            'text-white transition-all duration-300 ease-out',
            scrolled
              ? [
                  'backdrop-blur-2xl backdrop-saturate-200',
                  'bg-linear-to-b from-white/15 to-white/5',
                  'border border-white/18',
                  'shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_-1px_0_rgba(0,0,0,0.30)_inset]',
                  'rounded-2xl shadow-lg shadow-black/20'
                ].join(' ')
              : 'bg-transparent border-transparent shadow-none backdrop-blur-0 rounded-none border-x-0 border-t-0',
          ].join(' ')}
          aria-label="Primary"
        >
          <div className="relative mx-auto grid h-12 grid-cols-2 items-center px-3 sm:px-4 md:grid-cols-3">
            
            {/* LOGO & NAME */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group flex items-center gap-2.5 transition-colors"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 shadow-[0_0_0_1px_rgba(94,234,212,0.15)] group-hover:bg-white/10 transition-colors">
                  <TreePine className="h-5 w-5 text-teal-300" />
                </div>
                <span className="text-sm font-bold tracking-tight text-white/90">
                  amiel
                </span>
              </button>
            </div>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium tracking-tight">
              <li><Link className="text-white/85 hover:text-white transition-colors" href="/about">About</Link></li>
              <li><Link className="text-white/85 hover:text-white transition-colors" href="/#projects">Projects</Link></li>
              <li><Link className="text-white/85 hover:text-white transition-colors" href="/#experiences">Experiences</Link></li>
            </ul>

            {/* ACTION BUTTONS */}
            <div className="flex items-center justify-end gap-2">
              <a
                href="mailto:robertamiel.abadilla@gmail.com"
                className="hidden md:inline-flex items-center justify-center rounded-xl bg-teal-300/15 text-teal-100 px-4 py-2 text-sm font-semibold hover:bg-teal-300/20 transition-colors shadow-[0_0_0_1px_rgba(94,234,212,0.30)]"
              >
                Contact me
              </a>

              {/* 2. ANIMATED BURGER TO X */}
              <button
                type="button"
                className="relative z-50 inline-flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-xl border border-white/15 bg-white/5 md:hidden transition-colors hover:bg-white/10"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className={['h-0.5 w-5 rounded-full bg-white transition-all duration-300', menuOpen ? 'translate-y-1.5 rotate-45' : ''].join(' ')} />
                <span className={['h-0.5 w-5 rounded-full bg-white transition-all duration-300', menuOpen ? 'opacity-0' : ''].join(' ')} />
                <span className={['h-0.5 w-5 rounded-full bg-white transition-all duration-300', menuOpen ? '-translate-y-1.5 -rotate-45' : ''].join(' ')} />
              </button>
            </div>

            {/* 3. MOBILE MENU DROPDOWN */}
            <div className={[
              'absolute left-3 right-3 top-[calc(100%+0.75rem)] md:hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
              menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
            ].join(' ')}>
              <div className="rounded-2xl border border-white/18 bg-black/60 backdrop-blur-3xl shadow-2xl shadow-black/50 overflow-hidden">
                <div className="flex flex-col p-2 text-sm font-medium">
                  <Link className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/10" href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/10" href="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                  <Link className="rounded-xl px-4 py-3 text-white/85 hover:bg-white/10" href="/#experiences" onClick={() => setMenuOpen(false)}>Experiences</Link>
                  <a className="mt-2 rounded-xl px-4 py-3 text-teal-100 bg-teal-300/15 shadow-[0_0_0_1px_rgba(94,234,212,0.22)]" href="mailto:robertamiel.abadilla@gmail.com" onClick={() => setMenuOpen(false)}>Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}