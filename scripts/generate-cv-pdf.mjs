import { chromium } from 'playwright'
import { mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outputPath = join(root, 'public/lebenslauf.pdf')
const baseUrl = process.env.PORTFOLIO_BASE_URL || 'http://localhost:3000'
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' })
try {
  const page = await browser.newPage()
  await page.goto(baseUrl + '/lebenslauf', { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  // Reuse online CV content instead of maintaining a second biography.
  const content = await page.locator('main main').evaluate(main => {
    const copy = main.cloneNode(true)
    copy.querySelectorAll('details').forEach(el => el.setAttribute('open', ''))
    copy.querySelectorAll('button, svg').forEach(el => el.remove())
    copy.querySelectorAll('*').forEach(el => {
      if (el.textContent.trim() === 'Hier kannst du meinen Lebenslauf direkt runterladen') el.remove()
    })
    const portrait = copy.querySelector('img')
    if (portrait) {
      portrait.src = location.origin + '/marcel-welk-portrait.png'
      portrait.removeAttribute('srcset')
      portrait.removeAttribute('style')
    }
    copy.querySelectorAll('*').forEach(el => {
      el.removeAttribute('class')
      el.removeAttribute('style')
    })
    return copy.innerHTML
  })
  await page.setContent('<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Marcel Welk - Profil und Projektpraxis</title><style>' +
    'body{font:9.5pt/1.35 Arial,sans-serif;color:#222;margin:0}' +
    'h1{font-size:25pt;margin:0 0 5pt}h2{font-size:15pt;color:#95400a;border-bottom:1px solid #ddd;padding-bottom:5pt;margin:12pt 0 6pt;break-after:avoid}' +
    'h3{font-size:11pt;margin:10pt 0 4pt;break-after:avoid}p{margin:5pt 0}ul{margin:5pt 0;padding-left:16pt}' +
    'a{color:#754018;text-decoration:none;display:inline-block;margin-right:8pt}span{display:inline-block;margin-right:6pt}img{width:85pt;height:85pt;object-fit:cover;float:right;margin:0 0 10pt 15pt}' +
    'section{margin-bottom:8pt}section:first-child{min-height:90pt}details{display:block;break-inside:avoid;border-bottom:1px solid #ddd;padding:7pt 0}' +
    'summary{display:block}summary span,details span{display:inline-block;margin-right:7pt;font-size:9pt;color:#555}' +
    'details p,details ul{margin-top:5pt}section:nth-child(n+4){break-inside:avoid}section>div:has(h2){break-after:avoid}' +
    '</style></head><body>' + content + '</body></html>', { waitUntil: 'networkidle' })
  mkdirSync(join(root, 'output/pdf'), { recursive: true })
  const backupPath = join(root, 'output/pdf/lebenslauf-vor-profilabgleich.pdf')
  if (existsSync(outputPath) && !existsSync(backupPath)) copyFileSync(outputPath, backupPath)
  await page.pdf({
    path: outputPath, format: 'A4', printBackground: true,
    margin: { top: '16mm', bottom: '18mm', left: '17mm', right: '17mm' },
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#777">Marcel Welk · Profil und Projektpraxis · <span class="pageNumber"></span> / <span class="totalPages"></span></div>'
  })
  console.log('Updated ' + outputPath)
} finally { await browser.close() }
