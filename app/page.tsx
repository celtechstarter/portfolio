import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { WorkflowSteps } from "@/components/workflow"
import { Contact } from "@/components/contact"
import { GitHubActivity } from "@/components/github-activity"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <WorkflowSteps />
        <GitHubActivity />
        <Contact />
      </main>
    </>
  )
}
