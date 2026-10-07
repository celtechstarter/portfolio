import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import { mkdirSync } from 'node:fs'

const base = process.env.PORTFOLIO_BASE_URL || 'http://localhost:3003'
const routes = ['/', '/lebenslauf', '/ki-workflow', '/devlog', '/impressum', '/datenschutz', '/bewerbung/atz-group']
const errors = []
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' })
mkdirSync('output/profile-check', { recursive: true })
try {
  const page = await browser.newPage()
  page.on('pageerror', error => errors.push(error.message))
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 })
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200, route)
      await page.waitForTimeout(1800)
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, 'Overflow: ' + route)
      const text = await page.locator('body').innerText()
      assert.doesNotMatch(text, /PTV Dortmund|Hyperfokus-Motor|Hauptschulabschluss|ONLINE · antwortet sofort/)
      if (route === '/') {
        assert.match(text, /KI-Produktentwicklung/)
        assert.match(text, /Multi-Agent-Workflows/)
        await page.getByText('Über mich', { exact: true }).click()
        assert.equal(await page.locator('details[open]').count(), 1)
        assert.match(await page.locator('details').innerText(), /statt manueller Programmierung/)
        assert.equal(await page.getByAltText('Marcel Welk', { exact: true }).evaluate(img => img.complete && img.naturalWidth > 0), true)
      }
      if (route === '/ki-workflow') assert.match(text, /Refactoring und Dokumentation/)
      if (route === '/lebenslauf') assert.match(text, /Grundlagen & Projekttechnologien/)
      await page.screenshot({ path: 'output/profile-check/' + (route.replaceAll('/', '-') || 'home') + '-' + width + '.png', fullPage: true })
      console.log('PASS', width, route)
    }
  }
  assert.deepEqual(errors, [], 'Browser runtime errors')
  console.log('All 14 page/viewport checks passed. No runtime errors. No coverage percentage claimed.')
} finally { await browser.close() }
