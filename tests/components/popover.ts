import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/popover'
const check = makeAccessibilityTests('/popover', 'sinch-popover')

test('accessibility', check(async function* () {
  yield
}))

test('popover screenshots', runScreenshotTests('sinch-popover', [
  {
    name: 'open attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'orientation attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('orientation', 'top-left'))
      yield { name: 'top-left', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => el.setAttribute('orientation', 'top-right'))
      yield { name: 'top-right', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => el.setAttribute('orientation', 'bottom-left'))
      yield { name: 'bottom-left', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => el.setAttribute('orientation', 'bottom-right'))
      yield { name: 'bottom-right', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'orientation property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.orientation = 'top-left'
      })
      yield { name: 'top-left', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.orientation = 'top-right'
      })
      yield { name: 'top-right', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.orientation = 'bottom-left'
      })
      yield { name: 'bottom-left', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => {
        el.orientation = 'bottom-right'
      })
      yield { name: 'bottom-right', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      const testPopover = testCustomEvent(page, $)

      await testPopover('close', 'sinch-popover-close')
    },
  },
  {
    name: 'custom events',
    url: shot,
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
