"use client"

import React, { useRef, useEffect, useState } from "react"
import { ShieldAlert, Eye } from "lucide-react"

type ContactData = {
  name: string
  address: string
  phoneFormatted: string
}

export function ScratchImpressum() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const textCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratched, setIsScratched] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [contact, setContact] = useState<ContactData | null>(null)
  const [screenReaderData, setScreenReaderData] = useState<ContactData | null>(null)

  useEffect(() => {
    fetch('/api/contact')
      .then(r => r.json())
      .then((data: ContactData) => setContact(data))
  }, [])

  useEffect(() => {
    if (!contact) return

    // Use requestAnimationFrame to ensure the canvas has been laid out
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

          ctx.fillStyle = "#f97316"
          ctx.font = `bold ${Math.round(rect.width * 0.03)}px monospace`
          ctx.fillText("Name:", 20, 40)
          ctx.fillStyle = "#ffffff"
          ctx.fillText(contact.name, 90, 40)

          ctx.fillStyle = "#f97316"
          ctx.font = `bold ${Math.round(rect.width * 0.028)}px monospace`
          ctx.fillText("Anschrift:", 20, 85)
          ctx.fillStyle = "#a3a3a3"
          ctx.font = `${Math.round(rect.width * 0.028)}px monospace`
          ctx.fillText(contact.address, 140, 85)

          ctx.fillStyle = "#f97316"
          ctx.font = `bold ${Math.round(rect.width * 0.028)}px monospace`
          ctx.fillText("Telefon:", 20, 130)
          ctx.fillStyle = "#ffffff"
          ctx.fillText(contact.phoneFormatted, 115, 130)
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
            ctx.font = "bold 16px sans-serif"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.fillText("Hier rubbeln (Scratch-Off)", rect.width / 2, rect.height / 2)
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
    ctx.arc(x, y, 25, 0, Math.PI * 2)
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
    if (contact) setScreenReaderData(contact)
  }

  return (
    <div className="max-w-2xl mx-auto w-full p-6 sm:p-8 rounded-2xl border border-white/10 bg-black/40 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      <div className="mb-6 flex items-center gap-3 text-primary relative z-10">
        <ShieldAlert size={24} />
        <h2 className="font-bold text-2xl text-white">Impressum</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-8 font-mono relative z-10 border-l-2 border-primary/50 pl-4 py-1">
        Anti-Scraping Protection: Bitte mit der Maus oder dem Finger über das graue Feld rubbeln, um die Kontaktdaten anzuzeigen.
      </p>

      <div className="relative w-full h-[180px] rounded-xl overflow-hidden border border-white/10 bg-black/80 select-none shadow-[inset_0_0_20px_rgba(0,0,0,1)] z-10">
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
          className={`absolute inset-0 w-full h-full touch-none cursor-crosshair transition-opacity duration-1000 ${isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ width: '100%', height: '100%' }}
          aria-hidden="true"
        />
      </div>

      {screenReaderData && (
        <div className="sr-only" aria-live="polite">
          <p>Name: {screenReaderData.name}</p>
          <p>Anschrift: {screenReaderData.address}</p>
          <p>Telefon: {screenReaderData.phoneFormatted}</p>
        </div>
      )}

      <div className="mt-8 flex justify-end relative z-10">
        <button
          onClick={revealAll}
          disabled={isScratched}
          className="inline-flex items-center gap-2 text-sm font-mono px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <Eye size={16} className="group-disabled:text-muted-foreground text-primary" />
          Daten für Screenreader anzeigen
        </button>
      </div>
    </div>
  )
}
