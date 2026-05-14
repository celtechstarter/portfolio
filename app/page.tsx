import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { WorkflowSteps } from "@/components/workflow"
import { Contact } from "@/components/contact"
import { GitHubActivity } from "@/components/github-activity"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Bewerbungs-Banner */}
        <div className="mt-16 w-full border-b border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
          <p className="mx-auto max-w-6xl px-6 py-2.5 text-center font-mono text-xs text-blue-300/70">
            Dies ist mein Bewerbungsportfolio. Ich suche eine Festanstellung und biete keine bezahlten Dienstleistungen an.
          </p>
        </div>
        <Hero />
        <Projects />
        <Skills />
        <WorkflowSteps />
        <GitHubActivity />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
