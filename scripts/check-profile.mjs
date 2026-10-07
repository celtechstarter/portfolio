import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";

const base = process.env.PORTFOLIO_BASE_URL || "http://localhost:3003";
const routes = [
  "/",
  "/lebenslauf",
  "/ki-workflow",
  "/devlog",
  "/impressum",
  "/datenschutz",
  "/bewerbung/atz-group",
  "/nicht-vorhanden",
];
const errors = [];
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL || "msedge",
});
mkdirSync("output/redesign-check", { recursive: true });
try {
  const page = await browser.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      const response = await page.goto(base + route, {
        waitUntil: "networkidle",
      });
      assert.equal(
        response.status(),
        route === "/nicht-vorhanden" ? 404 : 200,
        route,
      );
      await page.waitForTimeout(1800);
      assert.equal(
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth >
            document.documentElement.clientWidth + 1,
        ),
        false,
        "Overflow: " + route,
      );
      assert.equal(
        await page.locator("h1").count(),
        1,
        "One main heading: " + route,
      );
      assert.equal(
        await page
          .getByRole("navigation", { name: "Hauptnavigation", exact: true })
          .count(),
        1,
      );
      const text = await page.locator("body").innerText();
      assert.doesNotMatch(
        text,
        /PTV Dortmund|Hyperfokus-Motor|Hauptschulabschluss|ONLINE · antwortet sofort/,
      );
      if (route === "/") {
        assert.match(text, /KI-Produktentwicklung/);
        assert.match(text, /Multi-Agent-Workflows/);
        await page.locator(".about-details summary").click();
        assert.equal(await page.locator(".about-details[open]").count(), 1);
        assert.match(
          await page.locator(".about-details").innerText(),
          /statt manueller Programmierung/,
        );
        assert.equal(
          await page
            .getByAltText("Marcel Welk", { exact: true })
            .evaluate((img) => img.complete && img.naturalWidth > 0),
          true,
        );
      }
      if (route === "/ki-workflow")
        assert.match(text, /Refactoring und Dokumentation/);
      if (route === "/lebenslauf")
        assert.match(text, /Grundlagen & Projekttechnologien/);
      await page.screenshot({
        path:
          "output/redesign-check/" +
          (route.replaceAll("/", "-") || "home") +
          "-" +
          width +
          ".png",
        fullPage: true,
      });
      console.log("PASS", width, route);
    }
  }
  assert.deepEqual(errors, [], "Browser runtime errors");
  console.log(
    "All 24 page/viewport checks passed. No runtime errors. No coverage percentage claimed.",
  );
} finally {
  await browser.close();
}
