"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronUp, Home } from "lucide-react"

export function FloatingNav() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Zurück zur Startseite — nur auf Unterseiten */}
      {!isHome && (
        <a
          href="/"
          className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 px-5 py-3 font-mono text-sm text-muted-foreground shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_4px_24px_rgba(249,115,22,0.15)]"
        >
          <Home size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          Zur Startseite
        </a>
      )}

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Nach oben scrollen"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-muted-foreground shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_4px_24px_rgba(249,115,22,0.15)]"
      >
        <ChevronUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
