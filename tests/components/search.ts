import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, getBB, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const withValue = '/search?width=200&label=Label&value=Input%20value'
const checkValue = makeAccessibilityTests('/search?width=200&label=Label&value=Input%20value', 'sinch-input')
const getDropdownRect = (page: Page) => getBB(page.locator('sinch-action-menu'))

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

test('search screenshots', runScreenshotTests('sinch-popover', [
  {
    name: 'clear',
    url: withValue,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('End')
      yield { name: '1-focus-input', includeRects: [await getDropdownRect(page)] }

      await page.keyboard.press('Tab')
      yield { name: '2-focus-button', includeRects: [await getDropdownRect(page)] }

      await page.keyboard.press('Enter')
      yield { name: '3-click', includeRects: [await getDropdownRect(page)] }
    },
  },
  {
    name: 'keyboard',
    url: withValue,
    async *fn({ $, page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('End')
      yield { name: '1-open', includeRects: [await getDropdownRect(page)] }

      await page.keyboard.press('ArrowDown')
      yield { name: '2-down', includeRects: [await getDropdownRect(page)] }

      await page.keyboard.press('End')
      await $.type('X')
      yield { name: '3-type', includeRects: [await getDropdownRect(page)] }

      await page.keyboard.press('Enter')
      yield { name: '4-submit', includeRects: [await getDropdownRect(page)] }
    },
  },
]))

test('search events', runScreenshotTests('sinch-popover', [
  {
    name: 'native events',
    url: withValue,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-search-focus', 'sinch-search-blur', 'sinch-search-change')
      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-search-focus', detail: null },
        { type: 'sinch-search-blur', detail: null },
      ])

      // Necessary to normalize "type" behaviour
      const pt = await centerBB($)

      await page.mouse.click(pt.x, pt.y)
      await page.keyboard.press('End')
      await page.keyboard.press('X')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-search-focus', detail: null },
        { type: 'sinch-search-change', detail: 'Option 2' },
      ])
    },
  },
]))
