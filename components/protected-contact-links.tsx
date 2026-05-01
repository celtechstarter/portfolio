"use client"

import { useState } from "react"
import { Phone, Mail, Globe, Github, Download, Copy, Check, Eye, MoveLeft } from "lucide-react"

type ContactData = {
  phone: string
  email: string
}

let contactCache: ContactData | null = null

async function fetchContact(): Promise<ContactData> {
  if (!contactCache) {
    const res = await fetch('/api/contact')
    contactCache = await res.json()
  }
  return contactCache!
}

function RevealField({
  icon,
  label,
  getValue,
  isPhone,
}: {
  icon: React.ReactNode
  label: string
  getValue: () => Promise<string>
  isPhone?: boolean
}) {
  const [value, setValue] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleReveal = async () => {
    setLoading(true)
    const v = await getValue()
    setValue(v)
    setLoading(false)
  }

  const handleCopy = async () => {
    if (!value) return
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClick = () => {
    if (isPhone && value) {
      window.location.href = `tel:${value}`
    }
  }

  if (!value) {
    return (
      <button
        onClick={handleReveal}
        disabled={loading}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer"
      >
        {icon}
        <span className="rounded border border-dashed border-muted-foreground/30 px-2 py-0.5 font-mono text-xs">
          {loading ? "..." : label}
        </span>
        <Eye size={11} className="text-muted-foreground/40" />
      </button>
    )
  }

  return (
    <div className="inline-flex items-center gap-1.5">
      <span className="text-muted-foreground">{icon}</span>
      <button
        onClick={handleClick}
        className={`font-mono text-sm text-foreground ${isPhone ? "hover:text-primary transition-colors cursor-pointer" : ""}`}
      >
        {value}
      </button>
      <button
        onClick={handleCopy}
        title="Kopieren"
        className="ml-0.5 text-muted-foreground transition-colors hover:text-primary"
      >
        {copied ? (
          <Check size={13} className="text-green-400" />
        ) : (
          <Copy size={13} />
        )}
      </button>
    </div>
  )
}

export function ProtectedContactLinks() {
  return (
    <>
      {/* Contact row */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 md:justify-start">
        <RevealField
          icon={<Phone size={13} />}
          label="Handynummer anzeigen"
          getValue={async () => (await fetchContact()).phone}
          isPhone
        />
        <RevealField
          icon={<Mail size={13} />}
          label="E-Mail anzeigen"
          getValue={async () => (await fetchContact()).email}
        />
        <a
          href="https://www.marcelwelk.de"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Globe size={13} />
          www.marcelwelk.de
        </a>
        <a
          href="https://github.com/celtechstarter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Github size={13} />
          github.com/celtechstarter
        </a>
      </div>

      {/* PDF download */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
        <button
          onClick={() => {
            const link = document.createElement("a")
            link.href = "/lebenslauf.pdf"
            link.download = "Lebenslauf_Marcel_Welk.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
        >
          <Download size={15} />
          PDF herunterladen
        </button>
        <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <MoveLeft size={14} className="text-primary" />
          Hier kannst du meinen Lebenslauf direkt runterladen
        </span>
      </div>
    </>
  )
}
