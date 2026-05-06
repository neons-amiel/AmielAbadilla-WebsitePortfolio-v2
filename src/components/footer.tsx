import Link from 'next/link';

export default function Footer() {
  // Dynamically get the current year so you never have to update it manually
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-white/5 py-10 mt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-8">
        
        {/* Left Side: Branding & Copy */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-1">
          <h2 className="text-base font-semibold tracking-tight text-white/90">
            © {currentYear} Robert Amiel Abadilla. All Rights Reserved.
          </h2>
          <p className="text-sm text-white/60">
            Bridging Business and IT with Strategic Acumen.
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <h2 className="text-sm font-medium text-white/70 tracking-wide uppercase">
            Connect with me
          </h2>
          
          <ul className="flex flex-row items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amiel-abadilla/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:robertamiel.abadilla@gmail.com"
              aria-label="Email"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/neons-amiel"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.287-.01-1.044-.015-2.049-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.805 5.624-5.478 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.903-.014 3.299 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/neons.amiel"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}