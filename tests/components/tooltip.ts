import { test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/tooltip/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'
import type { Page } from '@playwright/test'
import type { TSinchTooltipElement } from '@sinch-engage/nectary/tooltip/types'

const withFitWidth = '/tooltip?text=Tooltip%20text'
const withLongText = '/tooltip?text=Tooltip%20text%20long%20long%20long'
const checkTooltip = makeAccessibilityTests('/tooltip?text=Tooltip%20text', 'sinch-tooltip')

const hoverTooltip = async (page: Page) => {
  await page.locator('sinch-tooltip').hover()

  return page.waitForTimeout(1200)
}

const getTooltipRect = (page: Page) => {
  return page.locator('sinch-tooltip').evaluate((el: TSinchTooltipElement) => el.tooltipRect)
}

test('accessibility', checkTooltip({
  async *fn() {
    yield
  },
}))

test('tooltip screenshots', runScreenshotTests('sinch-tooltip', [
  {
    name: 'orientation',
    url: withFitWidth,
    async *fn({ $eval, page }) {
      await hoverTooltip(page)

      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await getTooltipRect(page)] }
      }
    },
  },
  {
    name: 'text',
    url: withFitWidth,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('text', 'Updated tooltip text'))
      await hoverTooltip(page)

      yield { name: 'updated', includeRects: [await getTooltipRect(page)] }
    },
  },
  {
    name: 'long text',
    url: withLongText,
    async *fn({ page }) {
      await hoverTooltip(page)

      yield { name: 'shot', includeRects: [await getTooltipRect(page)] }
    },
  },
  {
    name: 'inverted',
    url: withFitWidth,
    async *fn({ $eval, page }) {
      await hoverTooltip(page)
      await $eval((el) => el.setAttribute('inverted', ''))

      yield { name: 'on', includeRects: [await getTooltipRect(page)] }
    },
  },
]))
