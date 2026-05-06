import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import TechPill, { type Tech } from '@/src/components/tech'

export type Project = {
  id: string
  title: string
  description: string
  image: StaticImageData | string
  techStack: Tech[]
  href: string
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_24px_rgba(45,212,191,0.3),inset_0_0_16px_rgba(45,212,191,0.15)]">
      
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 z-10 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-teal-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image container with subtle zoom on hover */}
      <div className="relative h-44 w-full sm:h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 640px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Optional dark overlay to make it blend into the dark theme a bit more, which fades on hover */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          {/* Title with neon text shadow on hover */}
          <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:text-teal-50 group-hover:[text-shadow:0_0_12px_rgba(153,246,228,0.8)]">
            {project.title}
          </h3>
          <Link
            href={project.href}
            className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 hover:bg-white/10 hover:text-teal-300 transition-colors"
          >
            View project
          </Link>
        </div>

        <p className="text-sm leading-relaxed text-white/70">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((t) => (
            <TechPill key={t.id} tech={t} />
          ))}
        </div>
      </div>

      {/* Subtle bottom reflection */}
      <div className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-2 w-1/2 rounded-[100%] bg-teal-400/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  )
}