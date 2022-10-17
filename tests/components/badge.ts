import { expect, test } from '@playwright/test'
import { sizeValues, modeValues } from '@sinch-engage/nectary/badge/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'
import type { Page } from '@playwright/test'
import type { TSinchBadgeElement } from '@sinch-engage/nectary/badge/types'

const colorValues = ['', 'black', 'yellow', 'red', 'green', 'gray']

const shot = '/badge?size=l&text=8'
const check = makeAccessibilityTests('/badge', 'sinch-badge')

const getBadgeRect = (page: Page) => page.locator('sinch-badge').evaluate((el: TSinchBadgeElement) => el.badgeRect)

test('accessibility', check(async function* () {
  yield
}))

test('badge screenshots', runScreenshotTests('sinch-badge', [
  {
    name: 'size attribute',
    url: shot,
    async *fn({ $eval, page }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.setAttribute('size', val)
        }, val)
        yield { name: val, includeRects: [await getBadgeRect(page)] }
      }
    },
  },
  {
    name: 'size property',
    url: shot,
    async *fn({ $eval, $ }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.size = val
        }, val)
        expect(await $.getAttribute('size')).toBe(val)
      }
    },
  },
  {
    name: 'color attribute',
    url: shot,
    async *fn({ $eval, page }) {
      for (const val of colorValues) {
        await $eval((el, val) => {
          el.setAttribute('color', val)
        }, val)
        yield { name: val === '' ? 'default' : val, includeRects: [await getBadgeRect(page)] }
      }
    },
  },
  {
    name: 'color property',
    url: shot,
    async *fn({ $eval, $ }) {
      for (const val of colorValues) {
        await $eval((el, val) => {
          el.color = val
        }, val)

        expect(await $.getAttribute('color')).toBe(val)
      }
    },
  },
  {
    name: 'mode attribute',
    url: shot,
    async *fn({ $eval, page }) {
      for (const val of modeValues) {
        await $eval((el, val) => {
          el.setAttribute('mode', val)
        }, val)
        yield { name: val, includeRects: [await getBadgeRect(page)] }
      }
    },
  },
  {
    name: 'mode property',
    url: shot,
    async *fn({ $eval, $ }) {
      for (const val of modeValues) {
        await $eval((el, val) => {
          el.mode = val
        }, val)
        expect(await $.getAttribute('mode')).toBe(val)
      }
    },
  },
  {
    name: 'text attribute',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.setAttribute('text', '0')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.setAttribute('text', '444+')
      })
      yield { name: 'long', includeRects: [await getBadgeRect(page)] }
    },
  },
  {
    name: 'text property',
    url: shot,
    async *fn({ $eval, $ }) {
      await $eval((el) => {
        el.text = '4'
      })
      expect(await $.getAttribute('text')).toBe('4')
    },
  },
  {
    name: 'hidden attribute',
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
  {
    name: 'hidden property',
    url: shot,
    async *fn({ $eval, $ }) {
      await $eval((el) => {
        el.hidden = true
      })
      expect(await $.getAttribute('hidden')).toBe('')
      await $eval((el) => {
        el.hidden = false
      })
      expect(await $.getAttribute('hidden')).toBe(null)
    },
  },
]))
