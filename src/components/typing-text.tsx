'use client'

import { useEffect, useMemo, useState } from 'react'

type TypingTextProps = {
  messages: string[]
  className?: string
  cycleMs?: number
  typingMsPerChar?: number
  cursorClassName?: string
}

export default function TypingText({
  messages,
  className,
  cycleMs = 8000,
  typingMsPerChar = 45,
  cursorClassName,
}: TypingTextProps) {
  const safeMessages = useMemo(() => messages.filter(Boolean), [messages])
  const [messageIndex, setMessageIndex] = useState(0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (safeMessages.length === 0) return

    const nextIndexTimeout = window.setTimeout(() => {
      setMessageIndex((i) => (i + 1) % safeMessages.length)
    }, cycleMs)

    return () => window.clearTimeout(nextIndexTimeout)
  }, [cycleMs, safeMessages.length, messageIndex])

  useEffect(() => {
    if (safeMessages.length === 0) return

    const full = safeMessages[messageIndex] ?? ''
    setTyped('')

    let i = 0
    const interval = window.setInterval(() => {
      i += 1
      setTyped(full.slice(0, i))
      if (i >= full.length) window.clearInterval(interval)
    }, typingMsPerChar)

    return () => window.clearInterval(interval)
  }, [messageIndex, safeMessages, typingMsPerChar])

  if (safeMessages.length === 0) return null

  return (
    <span className={className}>
      {typed}
      <span
        className={[
          'inline-block w-[1ch] animate-pulse text-white/60',
          cursorClassName ?? '',
        ].join(' ')}
      >
        |
      </span>
    </span>
  )
}

