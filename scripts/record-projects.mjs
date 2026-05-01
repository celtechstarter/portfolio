import { chromium } from 'playwright'
import { renameSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = join(__dirname, '../public/projects')

mkdirSync(outputDir, { recursive: true })

const projects = [
  { name: 'pokescan',         url: 'https://poke-scan-v2.vercel.app',        waitMs: 10000 },
  { name: 'bewerbungspilot',  url: 'https://bewerbungspilot.vercel.app',     waitMs: 3000 },
  { name: 'coachknobling',    url: 'https://coaching-knobling.vercel.app',   waitMs: 3000 },
  { name: 'hawaiicards',      url: 'https://hawaii-cards.vercel.app',        waitMs: 3000 },
  { name: 'gesunderfuss',     url: 'https://gesunderfuss.vercel.app',        waitMs: 3000 },
]

async function recordProject(project) {
  console.log(`\n▶ Recording: ${project.name} ...`)

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: outputDir,
      size: { width: 1280, height: 720 },
    },
  })

  const page = await context.newPage()

  try {
    await page.goto(project.url, { waitUntil: 'networkidle', timeout: 30000 })
  } catch {
    await page.goto(project.url, { waitUntil: 'domcontentloaded', timeout: 30000 })
  }

  // Wait for page to fully render (per-project wait time)
  await page.waitForTimeout(project.waitMs ?? 3000)

  // Scroll slowly from top to bottom (~8 seconds)
  await page.evaluate(async () => {
    await new Promise(resolve => {
      const total = document.body.scrollHeight - window.innerHeight
      if (total <= 0) { resolve(); return }
      const steps = 160
      const step = total / steps
      let current = 0
      const interval = setInterval(() => {
        current += step
        window.scrollTo({ top: current, behavior: 'instant' })
        if (current >= total) {
          clearInterval(interval)
          setTimeout(resolve, 1200)
        }
      }, 50)
    })
  })

  // Scroll back to top
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(1000)

  const videoPath = await page.video().path()
  await context.close()
  await browser.close()

  const finalPath = join(outputDir, `${project.name}.webm`)
  renameSync(videoPath, finalPath)

  console.log(`✓ Gespeichert: public/projects/${project.name}.webm`)
}

async function main() {
  console.log('🎬 Starte Recording aller Projektseiten...')
  console.log(`📁 Output: ${outputDir}\n`)

  for (const project of projects) {
    await recordProject(project)
  }

  console.log('\n✅ Alle Videos fertig!')
}

main().catch(err => {
  console.error('❌ Fehler:', err.message)
  process.exit(1)
})
