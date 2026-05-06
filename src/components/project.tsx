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
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
      <div className="relative h-44 w-full sm:h-52">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 640px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <Link
            href={project.href}
            className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 hover:bg-white/10 hover:text-green-300 transition-colors"
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
    </article>
  )
}

