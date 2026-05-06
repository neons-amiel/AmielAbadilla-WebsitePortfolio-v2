import styles from './bubble-text.module.css'

type BubbleTextProps = {
  text: string
  className?: string
  letterClassName?: string
}

export default function BubbleText({ text, className, letterClassName }: BubbleTextProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((ch, idx) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={[styles.hoverText, letterClassName ?? ''].join(' ')}
          aria-hidden="true"
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  )
}

