import { chromium } from 'playwright'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '../public/lebenslauf.pdf')

const browser = await chromium.launch()
const page = await browser.newPage()

console.log('Navigating to http://localhost:3000/lebenslauf ...')
await page.goto('http://localhost:3000/lebenslauf', { waitUntil: 'networkidle' })

// Wait a bit for fonts/animations to settle
await page.waitForTimeout(2000)

console.log('Generating PDF ...')
const pdf = await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '16mm', bottom: '16mm', left: '12mm', right: '12mm' },
})

await browser.close()

console.log(`PDF saved to: ${outputPath} (${(pdf.length / 1024).toFixed(1)} KB)`)
