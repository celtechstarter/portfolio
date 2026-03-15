'use client'

import { useEffect, useRef } from 'react'

const WORDS = [
  'sudo fix it','404 Brain','Cloud','AWS','Azure','KI Agent',
  'LLM','Prompt','it works!','git push --yolo','Docker',
  'Kubernetes','Terraform','rm -rf doubts','localhost:3000',
  'AI Sparring','VPS','chmod 777','SSH','ping -t brain',
  'kurz testen...','2AM Tunnel','Deploying...','Vibe Coding',
  'npm run think','React','TypeScript','Vercel','Supabase',
  'Kimi Vision','Claude Code','works on my machine',
  'Problemloesung','shipit','Idee!','Linux',
  'have you tried turning it off','CORS error','undefined',
  'nani?!','Fehler ist Feature','segfault','kill -9 sleep',
  'Neuronales Netz','Token','Inference','GPU goes brrr',
  'yaml hell','env not found','Connection refused',
  'Hello World','mientras tanto...','qui cherche trouve',
  'Loesungsdenker','think different','Halluzination',
  'Raspberry Pi','crontab -e','tail -f ideas.log',
  '200 OK','Endpoint','REST API','Lambda',
  'EC2','S3 Bucket','noch ein Container','Serverless',
  'CI/CD','Pipeline','Build passed','Build failed lol',
  'Stack Overflow','Glurak','Pareto 80/20',
  'es funktioniert keine Ahnung warum',
  'es funktioniert nicht keine Ahnung warum',
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  word: string
  fontSize: number
  baseOpacity: number
  phase: number
  phaseSpeed: number
}

interface Spark {
  x: number
  y: number
  life: number
}

export function FloatingThoughts() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const sparksRef = useRef<Spark[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    function initParticles(w: number, h: number) {
      particlesRef.current = Array.from({ length: 55 }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        word: WORDS[Math.floor(Math.random() * WORDS.length)],
        fontSize: rand(7.5, 10),
        baseOpacity: rand(0.04, 0.26),
        phase: rand(0, Math.PI * 2),
        phaseSpeed: rand(0.005, 0.015),
      }))
    }

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      initParticles(canvas!.width, canvas!.height)
    }

    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const w = canvas!.width
      const h = canvas!.height
      const mouse = mouseRef.current
      const particles = particlesRef.current
      const sparks = sparksRef.current

      ctx!.clearRect(0, 0, w, h)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.phase += p.phaseSpeed

        // Mouse attraction
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        let extra = 0

        if (dist < 160 && dist > 0) {
          const force = (160 - dist) / 160
          p.vx += (dx / dist) * force * 0.04
          p.vy += (dy / dist) * force * 0.04
          extra = force * (0.55 - p.baseOpacity)
        }

        // Damping
        p.vx *= 0.998
        p.vy *= 0.998

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2
          p.vy = (p.vy / speed) * 1.2
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < -150) p.x = w + 150
        if (p.x > w + 150) p.x = -150
        if (p.y < -30) p.y = h + 30
        if (p.y > h + 30) p.y = -30

        const pulse = Math.sin(p.phase) * 0.5 + 0.5
        const opacity = Math.min(0.55, p.baseOpacity + pulse * p.baseOpacity * 0.4 + extra)

        ctx!.font = `${p.fontSize}px 'Courier New', monospace`
        ctx!.fillStyle = `rgba(207, 147, 54, ${opacity})`
        ctx!.fillText(p.word, p.x, p.y)
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 90) {
            const strength = 1 - dist / 90
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.strokeStyle = `rgba(207, 147, 54, ${strength * 0.1})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()

            // Sparks
            if (strength > 0.5 && Math.random() < 0.004) {
              sparks.push({
                x: (a.x + b.x) / 2,
                y: (a.y + b.y) / 2,
                life: 1,
              })
            }
          }
        }
      }

      // Draw + fade sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, 1.5, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(227, 167, 74, ${s.life * 0.6})`
        ctx!.fill()
        s.life -= 0.015
        if (s.life <= 0) sparks.splice(i, 1)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        cursor: 'crosshair',
      }}
    />
  )
}
