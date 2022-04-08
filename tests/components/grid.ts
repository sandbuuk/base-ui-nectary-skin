import { test } from '@playwright/test'
import { makeScreenshotTests } from '../screenshot-tests'

const shot400 = makeScreenshotTests(`/grid?width=400`, 'sinch-grid')
const shot600 = makeScreenshotTests(`/grid?width=600`, 'sinch-grid')
const shot800 = makeScreenshotTests(`/grid?width=800`, 'sinch-grid')
const shot1000 = makeScreenshotTests(`/grid?width=1000`, 'sinch-grid')

test('viewport s', shot400(async function* ({ page }) {
  await page.setViewportSize({ width: 640, height: 480 })
  yield { name: 'shot' }
}))

test('viewport m', shot600(async function* ({ page }) {
  await page.setViewportSize({ width: 800, height: 480 })
  yield { name: 'shot' }
}))

test('viewport l', shot800(async function* ({ page }) {
  await page.setViewportSize({ width: 1280, height: 480 })
  yield { name: 'shot' }
}))

test('viewport xl', shot1000(async function* ({ page }) {
  await page.setViewportSize({ width: 1440, height: 480 })
  yield { name: 'shot' }
}))
