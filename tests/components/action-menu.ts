import { expect, test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/popover/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'

const withModal = '/action-menu?modal=true'
const withWideModal = '/action-menu?width=300&modal=true'
const withWideModalOpen = '/action-menu?width=300&modal=true&open=true'
const withMaxItems = '/action-menu?modal=true&maxvisibleitems=2'
const check = makeAccessibilityTests('/action-menu?modal=true', 'sinch-action-menu')

test('accessibility', check(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('action menu screenshots', runScreenshotTests('sinch-action-menu', [
  {
    name: 'open attribute',
    url: withModal,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'open property',
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
    name: 'orientation attribute',
    url: withWideModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.dropdownRect)] }
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
        yield { name: value, includeRects: [await $eval((el) => el.dropdownRect)] }
      }
    },
  },
  {
    name: 'maxvisibleitems attribute',
    url: withModal,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
      await $.click()
      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'maxvisibleitems property',
    url: withModal,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.maxVisibleItems = 2
      })
      await $.click()
      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'maxvisibleitems scroll',
    url: withMaxItems,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      // Scroll to 3
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: 'scroll to 3', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'wide target',
    url: withWideModal,
    async *fn({ $, $eval }) {
      await $.click()

      yield { name: 'shot', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'keyboard',
    url: withModal,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      yield { name: '1-open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('ArrowDown')
      yield { name: '2-down', includeRects: [await $eval((el) => el.dropdownRect)] }

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
]))

test('action menu events', runScreenshotTests('sinch-action-menu', [
  {
    name: 'custom events',
    url: withModal,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-close')

      await $.locator('sinch-action-menu-option').nth(0).evaluate((el) => {
        el.dispatchEvent(new CustomEvent('click', { bubbles: true }))
      })

      await $.evaluate((el) => {
        el.dispatchEvent(new CustomEvent('close', { bubbles: true }))
      })

      const events = await getAllEvents(page)

      expect(events).toEqual([
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
  {
    name: 'custom events',
    url: withModal,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-close')

      // Focus button
      await page.keyboard.press('Tab')
      // Press button
      await page.keyboard.press('Enter')
      // Select Item
      await page.keyboard.press('ArrowDown')
      // Submit
      await page.keyboard.press('Enter')
      // Open menu again
      await page.keyboard.press('Enter')
      // Close menu
      await page.keyboard.press('Escape')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
]))
