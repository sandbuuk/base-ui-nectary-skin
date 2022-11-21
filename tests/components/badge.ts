import { expect, test } from '@playwright/test'
import { modeValues } from '@sinch-engage/nectary/badge/utils'
import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'
import type { Page } from '@playwright/test'
import type { TSinchBadgeElement } from '@sinch-engage/nectary/badge/types'

const colorValues = ['', 'black', 'yellow', 'red', 'green', 'gray']

const shot = '/badge?size=l&text=8'
const check = makeAccessibilityTests('/badge', 'sinch-badge')

const getBadgeRect = (page: Page) => page.locator('sinch-badge').evaluate((el: TSinchBadgeElement) => el.badgeRect)

test('accessibility', check({
  async *fn() {
    yield
  },
}))

test('badge screenshots', runScreenshotTests('sinch-badge', [
  {
    name: 'size',
    url: shot,
    async *fn({ $eval, page }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.setAttribute('size', val)
        }, val)
        yield { name: val, includeRects: [await getBadgeRect(page)] }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.size = 'l'

        return el.getAttribute('size')
      })

      expect(attrValue).toBe('l')
    },
  },
  {
    name: 'color',
    url: shot,
    async *fn({ $eval, page }) {
      for (const val of colorValues) {
        await $eval((el, val) => {
          el.setAttribute('color', val)
        }, val)
        yield { name: val === '' ? 'default' : val, includeRects: [await getBadgeRect(page)] }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.color = 'yellow'

        return el.getAttribute('color')
      })

      expect(attrValue).toBe('yellow')
    },
  },
  {
    name: 'mode',
    url: shot,
    async *fn({ $eval, page }) {
      for (const val of modeValues) {
        await $eval((el, val) => {
          el.setAttribute('mode', val)
        }, val)
        yield { name: val, includeRects: [await getBadgeRect(page)] }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.mode = 'square'

        return el.getAttribute('mode')
      })

      expect(attrValue).toBe('square')
    },
  },
  {
    name: 'text',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.setAttribute('text', '0')
      })
      yield { name: 'short' }

      await $eval((el) => {
        el.setAttribute('text', '444+')
      })
      yield { name: 'long', includeRects: [await getBadgeRect(page)] }
    },
  },
  {
    name: 'hidden',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.setAttribute('hidden', '')
      })
      yield { name: 'set', includeRects: [await getBadgeRect(page)] }

      await $eval((el) => {
        el.removeAttribute('hidden')
      })
      yield { name: 'unset', includeRects: [await getBadgeRect(page)] }
    },
  },
]))
