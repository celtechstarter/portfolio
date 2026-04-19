"use client"

import {
  Monitor,
  Code2,
  Bot,
  Cloud,
  Award,
  Terminal,
  Box,
  Layers,
  Globe,
  GitBranch,
  Code,
  FileCode,
  GitFork,
  Key,
  Server,
  Palette,
} from "lucide-react"
import { motion } from "framer-motion"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

interface Certificate {
  title: string
  issuer: string
}

interface SkillIcon {
  name: string
  icon: React.ReactNode
  color: string
}

const skillIcons: SkillIcon[] = [
  { name: "Linux", icon: <Terminal size={22} />, color: "#f97316" }, // updated colors to match orange theme where possible, or keep original if specific tech colors
  { name: "Docker", icon: <Box size={22} />, color: "#378ADD" },
  { name: "AWS", icon: <Layers size={22} />, color: "#f97316" },
  { name: "Azure", icon: <Globe size={22} />, color: "#378ADD" },
  { name: "CI/CD", icon: <GitBranch size={22} />, color: "#1D9E75" },
  { name: "React", icon: <Code size={22} />, color: "#D4537E" },
  { name: "TypeScript", icon: <FileCode size={22} />, color: "#5B8FD8" },
  { name: "Git", icon: <GitFork size={22} />, color: "#f97316" },
  { name: "SSH", icon: <Key size={22} />, color: "#fbbf24" },
  { name: "Node.js", icon: <Server size={22} />, color: "#1D9E75" },
  { name: "Tailwind", icon: <Palette size={22} />, color: "#5B8FD8" },
]

const skillCategories: SkillCategory[] = [
  {
    title: "Systeme",
    icon: <Monitor size={24} />,
    skills: ["Windows", "Linux", "VPS", "Docker", "SSH"],
  },
  {
    title: "Web Dev",
    icon: <Code2 size={24} />,
    skills: ["React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    title: "AI Workflows",
    icon: <Bot size={24} />,
    skills: ["API-Integration", "Agentic Coding", "KI-Vision", "Multimodal"],
  },
  {
    title: "Cloud & Ops",
    icon: <Cloud size={24} />,
    skills: ["AWS", "Azure", "Git", "CI/CD"],
  },
]

const certificates: Certificate[] = [
  { title: "Cloud & Web Expert", issuer: "Techstarter" },
  { title: "LPIC-1", issuer: "Linux" },
  { title: "AWS re/Start", issuer: "Amazon Web Services" },
  { title: "Azure Fundamentals", issuer: "Microsoft" },
]

export function Skills() {
  // We duplicate the icons array a few times to ensure seamless infinite scrolling
  const scrollIcons = [...skillIcons, ...skillIcons, ...skillIcons, ...skillIcons]

  return (
    <section id="skills" className="relative px-6 py-24 md:py-32 overflow-hidden bg-black text-foreground">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Technologien
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Skills & Tools
          </h2>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="mb-24 relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-4 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {scrollIcons.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm p-4 w-28 h-28 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
              >
                <div style={{ color: item.color }} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  {item.icon}
                </div>
                <span className="font-mono text-[11px] leading-tight text-center text-muted-foreground mt-2">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Neural Network Skill Categories */}
        <div className="mb-24">
          <h3 className="text-xl font-semibold text-center mb-12">Neural Network Core</h3>
          
          <div className="relative flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-white/10 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
            </div>

            {skillCategories.map((category, i) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex-1 flex flex-col items-center w-full"
              >
                {/* Node Orb */}
                <div className="w-20 h-20 rounded-full bg-black border-2 border-primary/40 shadow-[0_0_20px_rgba(249,115,22,0.2)] flex items-center justify-center text-primary mb-6 relative group cursor-default">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-md group-hover:bg-primary/30 transition-all duration-500" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  {/* Mobile connecting line */}
                  {i < skillCategories.length - 1 && (
                    <div className="block md:hidden absolute top-[100%] left-1/2 w-[1px] h-12 bg-white/10 z-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent" />
                    </div>
                  )}
                </div>

                <div className="glass-card glow-border p-5 rounded-2xl w-full text-center hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-foreground mb-3">{category.title}</h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs text-muted-foreground font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="mb-8 flex items-center justify-center gap-3">
            <Award size={20} className="text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Zertifikate
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="glass-card glow-border rounded-xl px-5 py-4 text-center group"
              >
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">{cert.title}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
