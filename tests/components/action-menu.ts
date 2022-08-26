import { expect, test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/popover/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'

const withModal = '/action-menu?modal=true'
const withNonModal = '/action-menu'
const withWideModalOpen = '/action-menu?width=300&modal=true&open=true'
const withWideNonModalOpen = '/action-menu?width=300&open=true'
const withModalMaxItems = '/action-menu?modal=true&maxvisibleitems=2'
const withNonModalMaxItems = '/action-menu?maxvisibleitems=2'
const check = makeAccessibilityTests('/action-menu?modal=true', 'sinch-action-menu')

test('accessibility', check(async function* ({ $ }) {
  yield
  await $.locator('sinch-button').click()
  yield
}))

test('action menu screenshots', runScreenshotTests('sinch-action-menu', [
  {
    name: 'modal open attribute',
    url: withModal,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'modal open property',
    url: withModal,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.open = true
      })
      yield { name: 'set', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.open = false
      })
      yield { name: 'unset', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'non-modal open attribute',
    url: withNonModal,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'modal orientation attribute',
    url: withWideModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.dropdownRect)] }
      }
    },
  },
  {
    name: 'modal orientation property',
    url: withWideModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => {
          el.orientation = value
        }, value)
        yield { name: value, includeRects: [await $eval((el) => el.dropdownRect)] }
      }
    },
  },
  {
    name: 'non-modal orientation attribute',
    url: withWideNonModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.dropdownRect)] }
      }
    },
  },
  {
    name: 'modal maxvisibleitems attribute',
    url: withModal,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
      await $.locator('sinch-button').click()
      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'modal maxvisibleitems property',
    url: withModal,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.maxVisibleItems = 2
      })
      await $.locator('sinch-button').click()
      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'modal maxvisibleitems scroll',
    url: withModalMaxItems,
    async *fn({ $, page, $eval }) {
      await $.locator('sinch-button').click()

      // Scroll to 3
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: 'scroll to 3', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'non-modal maxvisibleitems scroll',
    url: withNonModalMaxItems,
    async *fn({ $, page, $eval }) {
      await $.locator('sinch-button').click()

      // Scroll to 3
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: 'scroll to 3', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'modal keyboard',
    url: withModal,
    async *fn({ page, $eval }) {
      // Focus input
      await page.keyboard.press('Tab')
      // Focus button
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      yield { name: '1-open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('ArrowDown')
      yield { name: '2-down-type', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Enter')
      yield { name: '3-submit', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '4-open-down-around', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      yield { name: '5-up-around', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Escape')
      yield { name: '6-escape', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'non-modal keyboard',
    url: withNonModal,
    async *fn({ page, $eval, isWebkit }) {
      // Focus input
      await page.keyboard.press('Tab')
      // Focus button
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      yield { name: '1-open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Shift+Tab')
      await page.keyboard.press('A')
      yield { name: '2-down-type', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Enter')
      yield { name: '3-submit', includeRects: [await $eval((el) => el.dropdownRect)] }

      // Focus button again on Webkit
      if (isWebkit) {
        await page.keyboard.press('Tab')
      }

      // Press button to open again
      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '4-open-down-around', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      yield { name: '5-up-around', includeRects: [await $eval((el) => el.dropdownRect)] }

      // Focus button again on Webkit
      if (isWebkit) {
        await page.keyboard.press('Tab')
      }

      await page.keyboard.press('Escape')
      yield { name: '6-escape', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
]))

test('action menu events', runScreenshotTests('sinch-action-menu', [
  {
    name: 'modal custom events',
    url: withModal,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-open', 'sinch-action-menu-close')

      await $.locator('sinch-button').evaluate((el) => {
        el.dispatchEvent(new CustomEvent('-click'))
      })

      await $.locator('sinch-action-menu-option').nth(0).evaluate((el) => {
        el.dispatchEvent(new CustomEvent('-click'))
      })

      await $.evaluate((el) => {
        el.dispatchEvent(new CustomEvent('-close'))
      })

      const events = await getAllEvents(page)

      expect(events).toEqual([
        { type: 'sinch-action-menu-open', detail: null },
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
  {
    name: 'modal native events',
    url: withModal,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-open', 'sinch-action-menu-close', 'sinch-input-change')

      // Focus input
      await page.keyboard.press('Tab')
      // Focus button
      await page.keyboard.press('Tab')
      // Press button
      await page.keyboard.press('Enter')
      // Select Item
      await page.keyboard.press('ArrowDown')
      // Not Able to type
      await page.keyboard.press('A')
      // Submit
      await page.keyboard.press('Enter')
      // Open menu again
      await page.keyboard.press('Enter')
      // Close menu
      await page.keyboard.press('Escape')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-open', detail: null },
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-open', detail: null },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
  {
    name: 'non-modal native events',
    url: withNonModal,
    async *fn({ page, isWebkit }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-open', 'sinch-action-menu-close', 'sinch-input-change')

      // Focus input
      await page.keyboard.press('Tab')
      // Focus button
      await page.keyboard.press('Tab')
      // Press button to open
      await page.keyboard.press('Enter')
      // Select Item
      await page.keyboard.press('ArrowDown')
      // Focus input
      await page.keyboard.press('Shift+Tab')
      // Able to type
      await page.keyboard.press('A')
      // Submit
      await page.keyboard.press('Enter')

      // Focus button again on Webkit
      if (isWebkit) {
        await page.keyboard.press('Tab')
      }

      // Open menu again
      await page.keyboard.press('Space')

      // Focus button again on Webkit
      if (isWebkit) {
        await page.keyboard.press('Tab')
      }

      // Close menu
      await page.keyboard.press('Escape')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-open', detail: null },
        { type: 'sinch-input-change', detail: null },
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-open', detail: null },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
]))
