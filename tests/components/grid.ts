import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot400 = `/grid?width=400`
const shot600 = `/grid?width=600`
const shot800 = `/grid?width=800`
const shot1000 = `/grid?width=1000`

test('grid screenshots', runScreenshotTests('sinch-grid', [
  {
    name: 'viewport s',
    url: shot400,
    async *fn({ page }) {
      await page.setViewportSize({ width: 640, height: 480 })
      yield { name: 'shot' }
    },
  },
  {
    name: 'viewport m',
    url: shot600,
    async *fn({ page }) {
      await page.setViewportSize({ width: 800, height: 480 })
      yield { name: 'shot' }
    },
  },
  {
    name: 'viewport l',
    url: shot800,
    async *fn({ page }) {
      await page.setViewportSize({ width: 1280, height: 480 })
      yield { name: 'shot' }
    },
  },
  {
    name: 'viewport xl',
    url: shot1000,
    async *fn({ page }) {
      await page.setViewportSize({ width: 1440, height: 480 })
      yield { name: 'shot' }
    },
  },
]))
