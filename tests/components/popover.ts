import { expect, test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/popover/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withModalOpen = '/popover?open=true&modal=true'
const withWideModalOpen = '/popover?width=300&open=true&modal=true'
const withWideModal = '/popover?width=300&modal=true'
const withWide = '/popover?width=300'
const check = makeAccessibilityTests('/popover?open=true&modal=true', 'sinch-popover')

test('popover accessibility', check(async function* () {
  yield
}))

test('popover screenshots', runScreenshotTests('sinch-popover', [
  {
    name: 'open attribute',
    url: withModalOpen,
    async *fn({ $eval }) {
      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'open property',
    url: withModalOpen,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.open = false
      })
      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.open = true
      })
      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }
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
    name: 'modal attribute',
    url: withWide,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')

      await $eval((el) => {
        el.removeAttribute('open')
        el.removeAttribute('modal')
        el.setAttribute('open', '')
      })

      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.removeAttribute('open')
        el.setAttribute('modal', '')
        el.setAttribute('open', '')
      })

      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'modal property',
    url: withWide,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')

      await $eval((el) => {
        el.open = false
        el.modal = false
        el.open = true
      })

      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.open = false
        el.modal = true
        el.open = true
      })

      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'modal interactions',
    url: withWideModal,
    async *fn({ page, $eval }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      // Close by Escape key
      await page.keyboard.press('Escape')
      await expect($eval((el) => el.open)).resolves.toBe(false)

      // Open popover
      await page.keyboard.press('Enter')

      // Close by clicking outside
      await page.mouse.click(0, 0)
      await expect($eval((el) => el.open)).resolves.toBe(false)
    },
  },
  {
    name: 'non modal interactions',
    url: withWide,
    async *fn({ page, $eval }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      // Close by Escape key
      await page.keyboard.press('Escape')
      await expect($eval((el) => el.open)).resolves.toBe(false)

      // Open popover
      await page.keyboard.press('Enter')

      // Can close by clicking outside
      await page.mouse.click(0, 0)
      await expect($eval((el) => el.open)).resolves.toBe(false)
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
