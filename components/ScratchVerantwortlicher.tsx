"use client"

import React, { useRef, useEffect, useState } from "react"

type ContactData = {
  name: string
  email: string
  address: string
}

export function ScratchVerantwortlicher() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const textCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratched, setIsScratched] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [contact, setContact] = useState<ContactData | null>(null)

  useEffect(() => {
    fetch('/api/contact')
      .then(r => r.json())
      .then((data: ContactData) => setContact(data))
  }, [])

  useEffect(() => {
    if (!contact) return

    requestAnimationFrame(() => {
      const textCanvas = textCanvasRef.current
      if (textCanvas) {
        const ctx = textCanvas.getContext("2d")
        if (ctx) {
          const dpr = window.devicePixelRatio || 1
          const rect = textCanvas.getBoundingClientRect()
          if (rect.width === 0) return

          textCanvas.width = rect.width * dpr
          textCanvas.height = rect.height * dpr
          ctx.scale(dpr, dpr)
          ctx.clearRect(0, 0, rect.width, rect.height)

          const fs = Math.round(rect.width * 0.028)
          ctx.font = `${fs}px monospace`

          ctx.fillStyle = "#a3a3a3"
          ctx.fillText(contact.name, 16, 28)
          ctx.fillText(contact.address, 16, 56)

          ctx.fillStyle = "#f97316"
          ctx.fillText(contact.email, 16, 84)
        }
      }

      if (!isScratched) {
        const canvas = canvasRef.current
        if (canvas) {
          const ctx = canvas.getContext("2d")
          if (ctx) {
            const dpr = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()
            if (rect.width === 0) return

            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            ctx.scale(dpr, dpr)

            ctx.fillStyle = "#2a2a2a"
            ctx.fillRect(0, 0, rect.width, rect.height)

            ctx.fillStyle = "#555555"
            ctx.font = "bold 13px sans-serif"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.fillText("Hier rubbeln", rect.width / 2, rect.height / 2)
          }
        }
      }
    })
  }, [contact, isScratched])

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 22, 0, Math.PI * 2)
    ctx.fill()
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isScratched) return
    setIsDrawing(true)
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) scratch(e.clientX - rect.left, e.clientY - rect.top)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing || isScratched) return
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) scratch(e.clientX - rect.left, e.clientY - rect.top)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDrawing(false)
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  const revealAll = () => {
    setIsScratched(true)
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  return (
    <div className="relative w-full h-[100px] rounded-lg overflow-hidden border border-white/10 bg-black/80 select-none"
      title="Rubbeln zum Anzeigen"
    >
      <canvas
        ref={textCanvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={revealAll}
        className={`absolute inset-0 w-full h-full touch-none cursor-crosshair transition-opacity duration-700 ${isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ width: '100%', height: '100%' }}
        aria-label="Rubbeln zum Anzeigen der Kontaktdaten"
      />
    </div>
  )
}
