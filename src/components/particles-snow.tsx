'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

type ParticlesSnowProps = {
  className?: string
}

export default function ParticlesSnow({ className }: ParticlesSnowProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 160,
            links: {
              opacity: 0.12,
              color: ['#5eead4', '#fb7185', '#ffffff'],
            },
          },
        },
      },
      particles: {
        number: {
          value: 85,
          density: { enable: true, width: 800, height: 800 },
        },
        color: { value: ['#5eead4', '#fb7185', '#ffffff'] }, // neon teal, neon pink, white
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.25, max: 0.75 },
          animation: { enable: false },
        },
        size: {
          value: { min: 1, max: 4.5 },
          animation: { enable: false },
        },
        links: { enable: false },
        move: {
          enable: true,
          direction: 'bottom',
          outModes: { default: 'out' },
          speed: { min: 0.18, max: 0.6 },
          random: true,
          straight: false,
        },
      },
    }),
    []
  )

  if (!ready) return null

  return <Particles className={className} options={options} />
}

