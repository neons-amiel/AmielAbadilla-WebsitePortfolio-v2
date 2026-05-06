import type { StaticImageData } from "next/image";

export type Tech = {
  id: string;
  name: string;
  icon?: StaticImageData | string;
}

export const TECH_STACK: Record<string, Tech> = {
  html: { id: 'html', name: 'HTML', icon: '/techstacks/html.png' },
  css: { id: 'css', name: 'CSS', icon: '/techstacks/css.png' },
  javascript: { id: 'javascript', name: 'JavaScript', icon: '/techstacks/javascript.png' },
  ts: { id: 'ts', name: 'TypeScript', icon: '/techstacks/typescript.svg' }, 
  react: { id: 'react', name: 'React', icon: '/techstacks/react.png' },
  next: { id: 'next', name: 'Next.js', icon: '/techstacks/next.svg' },
  tailwind: { id: 'tailwind', name: 'Tailwind', icon: '/techstacks/tailwind.png' },
  python: { id: 'python', name: 'Python', icon: '/techstacks/python.svg' },
  django: { id: 'django', name: 'Django', icon: '/techstacks/django.svg' },
  git: { id: 'git', name: 'Git', icon: '/techstacks/git.svg' },
};

type TechPillProps = {
  tech: Tech
  onClick?: (tech: Tech) => void
}

export default function TechPill({ tech, onClick }: TechPillProps) {
  const Comp: 'button' | 'span' = onClick ? 'button' : 'span'

  return (
    <Comp
      {...(onClick
        ? {
            type: 'button' as const,
            onClick: () => onClick(tech),
          }
        : {})}
      className={[
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        'border border-white/15 bg-white/5 text-white/80',
        onClick ? 'hover:bg-white/10 hover:text-white transition-colors' : '',
      ].join(' ')}
    >
      {tech.name}
    </Comp>
  )
}