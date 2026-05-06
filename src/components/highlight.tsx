import Image, { type StaticImageData } from 'next/image'

// 1. TYPE DEFINITION
export type HighlightItem = {
  id: string
  title: string
  description: string
  image: StaticImageData | string
  date?: string 
}

// 2. DUMMY DATA ARRAY
export const Highlights: HighlightItem[] = [
  {
    id: 'waddle-it',
    title: 'Founded WaddleIT Solutions',
    description: 'Growing an IT Consultancy firm; focused on empowering small businesses to utilize technology to succeed.',
    image: '/highlights/amielportrait.jpg', 
    date: 'April 2026 - Present'
  },
  {
    id: 'vp',
    title: 'Vice President for eServices @ MISA',
    description: 'Led 6 AVPS, 55+ Officers and spearheaded all IT related Products, Services and Learning at Ateneo MISA - creating systems for both MISA and external clients; generating over PHP 40,000+ in revenue.  ',
    image: '/highlights/eb.jpg', 
    date: '2025-2026'
  },
  {
    id: 'pgnext',
    title: 'P&G Next 2026 3rd Placer',
    description: "Placed 3rd among 9 teams in P&G's annual flagship IT Case Competition: P&G Next where I acted as my team's Sire Reliability Engineer.",
    image: '/highlights/pgnext.jpg', 
    date: '2025-2026'
  },
  {
    id: 'dost-scholar',
    title: 'DOST Merit Scholar',
    description: 'Recognized as a Department of Science and Technology (DOST) Merit Scholar, maintaining rigorous academic standards within the BS Management Information Systems program at Ateneo de Manila University.',
    image: '/highlights/scholars.jpg',
    date: '2023 - 2027'
  }
]

// 3. COMPONENT DEFINITION
type HighlightCardProps = {
  highlight: HighlightItem
}

export default function HighlightCard({ highlight }: HighlightCardProps) {
  return (
    // ADDED h-full to the classes below!
    <article className="group relative flex h-full w-[85vw] max-w-[700px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_32px_rgba(45,212,191,0.25),inset_0_0_16px_rgba(45,212,191,0.1)] sm:flex-row">
      
      <div className="absolute inset-x-0 top-0 z-10 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-teal-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
        <Image
          src={highlight.image}
          alt={highlight.title}
          fill
          sizes="(max-width: 640px) 85vw, 300px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      <div className="relative z-10 flex flex-col justify-center gap-4 p-6 sm:w-3/5 sm:p-8">
        
        {highlight.date && (
          <span className="inline-flex w-fit items-center rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-200">
            {highlight.date}
          </span>
        )}

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300 group-hover:text-teal-50 group-hover:[text-shadow:0_0_12px_rgba(153,246,228,0.8)]">
          {highlight.title}
        </h3>
        
        <p className="text-sm sm:text-base leading-relaxed text-white/70">
          {highlight.description}
        </p>
      </div>

      <div className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-2 w-1/2 rounded-[100%] bg-teal-400/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  )
}