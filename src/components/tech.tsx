export type Tech = {
  id: string
  name: string
}

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

