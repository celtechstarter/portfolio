"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { 
  Terminal, Sparkles, Bot, Rocket, Paintbrush, 
  Image as ImageIcon, Server, Workflow, Brain, Code2, 
  Swords, Search, Eye, Speaker, Zap, Flame, Globe
} from "lucide-react"

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249,115,22,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

const bentoSlots = [
  { 
    category: "Strategie", 
    tools: "Gemini / Antigravity vs. Claude", 
    badgeColor: "bg-orange-500/20 text-orange-400", 
    desc: "Welcher Mentor führt mich besser? Ich pitche Architekturen gegen beide Modelle.", 
    colSpan: "md:col-span-1 lg:col-span-1", 
    icon: <Brain size={24} className="text-orange-400" /> 
  },
  { 
    category: "Coding-Duelle", 
    tools: "VS Code + Claude vs. Antigravity", 
    badgeColor: "bg-amber-500/20 text-amber-400", 
    desc: "Nahtlose Google-Integration vs. Classic Stack. (Nahezu Null API-Kosten bei Google vs. maximale Präzision bei Anthropic).", 
    colSpan: "md:col-span-2 lg:col-span-2", 
    icon: <Terminal size={24} className="text-amber-400" /> 
  },
  { 
    category: "Visual Asset Engine", 
    tools: "Grok, Nano Banana, Firefly, Stitch", 
    badgeColor: "bg-rose-500/20 text-rose-400", 
    desc: "Multimodales Battle-Testing: Ich nehme das Modell, das am Ende das absolut beste Bild oder Video liefert.", 
    colSpan: "md:col-span-2 lg:col-span-2", 
    icon: <Paintbrush size={24} className="text-rose-400" /> 
  },
  { 
    category: "Vision & Audio", 
    tools: "Llama/Kimi + Suno/ElevenLabs", 
    badgeColor: "bg-yellow-500/20 text-yellow-400", 
    desc: "Poke-Scan Rückgrat und High-End Voiceovers. Damit meine Projekte sehen, hören und sprechen können.", 
    colSpan: "md:col-span-1 lg:col-span-1", 
    icon: <Speaker size={24} className="text-yellow-400" /> 
  },
  { 
    category: "Research", 
    tools: "Perplexity", 
    badgeColor: "bg-orange-600/20 text-orange-500", 
    desc: "Der absolute Google-Killer. Keine SEO-Spam-Ergebnisse, nur fokussiertes Wissen.", 
    colSpan: "md:col-span-1 lg:col-span-1", 
    icon: <Search size={24} className="text-orange-500" /> 
  },
  { 
    category: "Infrastructure & Lab", 
    tools: "Hostinger VPS & OpenClaw", 
    badgeColor: "bg-white/10 text-gray-300", 
    desc: "Selbstgehostete Agenten via Telegram-Bot. Zeigt: Ich verstehe auch Server, SSH und Linux, nicht nur bunte Oberflächen.", 
    colSpan: "md:col-span-1 lg:col-span-1", 
    icon: <Server size={24} className="text-gray-300" /> 
  },
  { 
    category: "Roadmap (The Learning Zone)", 
    tools: "n8n / Make", 
    badgeColor: "bg-amber-600/20 text-amber-500", 
    desc: "Der nächste Schritt: KI-Agenten, die für mich arbeiten, während ich schlafe.", 
    colSpan: "md:col-span-1 lg:col-span-1", 
    icon: <Workflow size={24} className="text-amber-500" /> 
  },
]

const pipelineBattles = [
  { step: "Planung", tool: "Strategie", focus: "Architektur-Entscheidungen", icon: <Brain className="text-orange-400" size={20} /> },
  { step: "Engineering", tool: "Coding", focus: "Stabile Implementierung", icon: <Code2 className="text-amber-400" size={20} /> },
  { step: "Asset-Finish", tool: "Multimodal", focus: "Bilder & Videos generieren", icon: <Paintbrush className="text-rose-400" size={20} /> },
  { step: "Infra Check", tool: "Linux/SSH", focus: "Server-Deployment validieren", icon: <Server className="text-gray-300" size={20} /> },
  { step: "Live Deployment", tool: "Vercel", focus: "Ship to production", icon: <Rocket className="text-white" size={20} /> },
]

export default function KIWorkflowPage() {
  return (
    <div className="min-h-screen bg-black text-foreground relative selection:bg-primary/30">
      {/* Background Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 aurora-bg opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 space-y-32">
        {/* Section 1: Hero & Story */}
        <section className="max-w-4xl pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-sm font-mono backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Kein Marketing-Bullshit. Nur Realität.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
              Der <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-rose-400">Orchestrator</span>
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl text-foreground font-medium flex items-start gap-4">
                <Flame className="text-primary shrink-0 mt-1" />
                <span>
                  Hauptschulabschluss, keine Ausbildung, vor 5 Jahren die Kurve bekommen. 
                  ADHS ist meine Superkraft (Hyperfokus) und KI – wie Claude und Gemini – ist mein Navigator.
                </span>
              </p>
              <p>
                Ich sage absolut ehrlich, wenn ich etwas nicht weiß. Und dann nutze ich die KI, um es mir beizubringen. 
                Ich bin kein Fan von 'einem Tool für alles'. Ich orchestriere meine Tech-Umgebung wie einen Werkzeugkasten und entscheide jeden Tag neu, welcher Schraubendreher besser passt.
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                  <Zap className="text-primary" size={20} /> Battle-Testing bei Null Token-Kosten:
                </h3>
                <p className="m-0 relative z-10 text-sm leading-relaxed">
                  Aktuell ist meine Kern-Infrastruktur die Kombination aus VS Code mit Antigravity Agent und Claude. 
                  Warum? Weil mir das die größte Freiheit bei nahezu null API-Kosten bietet. Ich baue lokal, teste Server-Umgebungen und deploye live.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Interactive Pipeline */}
        <section className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">KI-Pipeline</h2>
            <p className="text-muted-foreground font-mono text-sm">Der Workflow vom Brainstorming bis zum Live-Gang.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {pipelineBattles.map((battle, i) => (
              <div key={battle.step} className="flex-1 flex flex-col lg:flex-row items-center gap-4">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full lg:w-auto"
                >
                  <SpotlightCard className={`flex flex-col items-center justify-center p-6 w-full lg:w-48 aspect-square text-center relative overflow-hidden group border-white/10`}>
                    
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 shrink-0 mb-3 relative z-10">
                      {battle.icon}
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="font-bold text-sm text-foreground mb-2">{battle.step}</h3>
                      <div className="inline-block bg-black/50 px-3 py-1 rounded-full border border-white/5 font-mono text-[10px] text-muted-foreground">
                        {battle.tool}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>

                {/* Animated Data Stream connecting the boxes */}
                {i < pipelineBattles.length - 1 && (
                  <div className="h-10 w-1 lg:h-1 lg:flex-1 bg-white/5 relative overflow-hidden rounded-full shrink-0">
                    <div className="hidden lg:block absolute inset-0 w-[200%] h-full">
                      <motion.div
                        className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                        animate={{ x: ["-100%", "50%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                      />
                    </div>
                    <div className="block lg:hidden absolute inset-0 w-full h-[200%]">
                      <motion.div
                        className="w-full h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"
                        animate={{ y: ["-100%", "50%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Bento Grid 2.0 (Tool-Slots) */}
        <section className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Mein Werkzeugkasten</h2>
            <p className="text-muted-foreground font-mono text-sm">Gnadenlos ehrlich. Auf Resultate getrimmt.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoSlots.map((slot, i) => (
              <motion.div
                key={slot.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${slot.colSpan} h-full`}
              >
                <SpotlightCard className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        {slot.icon}
                      </div>
                      <h3 className="text-xl font-bold">{slot.category}</h3>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold backdrop-blur-sm border border-white/5 ${slot.badgeColor}`}>
                      {slot.tools}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {slot.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
