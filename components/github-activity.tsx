'use client'

import { useState, useRef, useEffect } from "react"
import { Github, ExternalLink } from "lucide-react"
import { useInView, animate } from "framer-motion"

const stats = [
  { value: 15, display: "15", label: "Public Repos" },
  { value: 200, display: "200+", label: "Commits 2026" },
  { value: 4, display: "4", label: "Projekte deployed" },
]

function AnimatedCounter({ value, display, label }: { value: number; display: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState("0")
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const suffix = display.endsWith("+") ? "+" : ""
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.round(latest).toString() + suffix)
        },
        onComplete() {
          setCount(display)
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value, display])

  return (
    <div ref={ref} className="rounded-xl border border-border/20 bg-card/30 px-6 py-8 text-center">
      <p className="font-mono text-3xl font-bold sm:text-4xl md:text-5xl text-primary">
        {count}
      </p>
      <p
        className="mt-2 font-mono text-xs tracking-wider"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {label}
      </p>
    </div>
  )
}

export function GitHubActivity() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="github" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Open Source
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            GitHub Aktivität
          </h2>
        </div>

        {/* Animated Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} display={stat.display} label={stat.label} />
          ))}
        </div>

        {/* Divider */}
        <div className="mb-10 h-px bg-primary/10" />

        {/* Contribution Graph */}
        <div>
          {imgError ? (
            <div className="flex items-center justify-center rounded-xl py-12 font-mono text-sm border border-primary/20 text-white/25">
              GitHub Aktivität laden...
            </div>
          ) : (
            <img // eslint-disable-line @next/next/no-img-element
              src="https://ghchart.rshah.org/f97316/celtechstarter"
              alt="GitHub Contribution Graph von celtechstarter"
              className="w-full rounded-xl opacity-85"
              style={{ maxWidth: "100%" }}
              onError={() => setImgError(true)}
            />
          )}

          {/* Link */}
          <div className="mt-4 text-center">
            <a
              href="https://github.com/celtechstarter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-primary/50 hover:text-primary transition-colors duration-200"
            >
              <Github size={13} />
              Auf GitHub ansehen
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
