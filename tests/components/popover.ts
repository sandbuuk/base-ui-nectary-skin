import { expect, test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/popover/utils'
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
      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.popoverRect)] }
      }
    },
  },
  {
    name: 'orientation property',
    url: shot,
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
