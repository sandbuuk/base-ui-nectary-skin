import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getBB, runScreenshotTests } from '../screenshot-tests'
import type { TSinchTooltipElement } from '@sinch-engage/nectary/tooltip/types'

const shot = '/field?width=200&label=Label'
const withValue = '/field?width=200&label=Label&value=Input%20value'
const withTooltip = '/field?width=200&label=Label&tooltip=Tooltip%20text'
const withEverything = '/field?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value'
const checkValue = makeAccessibilityTests('/field?width=200&label=Label&value=Input%20value', 'sinch-field')

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

test('field screenshots', runScreenshotTests('sinch-field', [
  {
    name: 'tooltip',
    url: withTooltip,
    async *fn({ page }) {
      const hoverRect = await centerBB(page.locator('sinch-help-tooltip'))

      await page.mouse.move(hoverRect.x, hoverRect.y)
      await page.waitForTimeout(1200)

      const tooltipRect = await page.locator('sinch-help-tooltip').evaluate((el: TSinchTooltipElement) => el.tooltipRect)

      yield {
        name: 'show',
        includeRects: [tooltipRect],
      }
    },
  },
  {
    name: 'invalid',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('invalidtext', 'Please fix invalid value')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('invalidtext')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'optional',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('optionaltext', 'Optional text')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('optionaltext')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'additional',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('additionaltext', 'Additional text')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('additionaltext')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'label',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('label', 'Label text')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('label')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'disabled',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('disabled', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('disabled')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'label click',
    url: withEverything,
    async *fn({ $, page }) {
      const rect = await getBB($)

      await page.mouse.click(rect.x + 10, rect.y + 10)
      yield { name: 'shot' }
    },
  },
]))
