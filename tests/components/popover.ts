import { expect, test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/popover/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withModalOpen = '/popover?open=true&modal=true&orientation=bottom-right'
const withModal = '/popover?modal=true&orientation=bottom-right'
const withWideModalOpen = '/popover?width=300&open=true&modal=true&orientation=bottom-right'
const withWideModal = '/popover?width=300&modal=true&orientation=bottom-right'
const withWide = '/popover?width=300&orientation=bottom-right'
const check = makeAccessibilityTests('/popover?open=true&modal=true', 'sinch-popover')

test('popover accessibility', check(async function* () {
  yield
}))

test('popover screenshots', runScreenshotTests('sinch-popover', [
  {
    name: 'open attribute',
    url: withModal,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }
      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'open property',
    url: withModal,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.open = true
      })
      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.open = false
      })
      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'orientation attribute',
    url: withWideModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.popoverRect)] }
      }
    },
  },
  {
    name: 'orientation property',
    url: withWideModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => {
          el.orientation = value
        }, value)
        yield { name: value, includeRects: [await $eval((el) => el.popoverRect)] }
      }
    },
  },
  {
    name: 'modal property',
    url: withWide,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.modal = false
      })

      expect(await $.getAttribute('modal')).toBe(null)

      await $eval((el) => {
        el.modal = true
      })

      expect(await $.getAttribute('modal')).toBe('')
    },
  },
  {
    name: 'modal interactions',
    url: withWideModal,
    async *fn({ page, $ }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      // Close by Escape key
      await page.keyboard.press('Escape')
      await expect($.getAttribute('open')).resolves.toBe(null)

      // Open popover
      await page.keyboard.press('Enter')

      // Close by clicking outside
      await page.mouse.click(0, 0)
      await expect($.getAttribute('open')).resolves.toBe(null)
    },
  },
  {
    name: 'non modal interactions',
    url: withWide,
    async *fn({ page, $ }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      // Close by Escape key
      await page.keyboard.press('Escape')
      await expect($.getAttribute('open')).resolves.toBe(null)

      // Open popover
      await page.keyboard.press('Enter')

      // Can close by clicking outside
      await page.mouse.click(0, 0)
      await expect($.getAttribute('open')).resolves.toBe(null)
    },
  },
  {
    name: 'custom events',
    url: withModalOpen,
    async *fn({ $, page }) {
      const testPopover = testCustomEvent(page, $)

      await testPopover('-close', 'sinch-popover-close')
    },
  },
  {
    name: 'custom events',
    url: withModalOpen,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-popover-close')

      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-popover-close', detail: null },
      ])
    },
  },
]))
