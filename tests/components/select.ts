import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4000/iframe.html?id=components-select--select&viewMode=story')

  const select = page.locator('sinch-select')

  await expect(select).toBeVisible()
})
