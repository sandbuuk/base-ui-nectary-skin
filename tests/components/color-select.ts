import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, centerRect, getAllEvents, getBB, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/color-select?width=200'
const withPlaceholder = '/color-select?width=200&placeholder=Select%20color'
const withDisabled = '/color-select?width=200&value=light-blue&placeholder=Placeholder&disabled=true'
const withMaxItems = '/color-select?width=200&value=dark-blue&rows=2'
const checkSelectWithEverything = makeAccessibilityTests('/color-select', 'sinch-popover')

const menuRect = (page: Page) => getBB(page.locator('sinch-color-menu'))

test('accessibility', checkSelectWithEverything({
  async *fn({ $ }) {
    await $.click()
    yield
  },
}))

test('color select screenshots', runScreenshotTests('sinch-popover', [
  {
    name: 'click button',
    url: shot,
    async *fn({ $, page }) {
      const ct = await centerBB($)

      await page.mouse.click(ct.x, ct.y)
      yield { name: '1-open', includeRects: [await menuRect(page)] }

      await page.mouse.click(0, 0)
      yield { name: '2-click-outside', includeRects: [await menuRect(page)] }
    },
  },
  {
    name: 'focus press-enter',
    url: withPlaceholder,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      yield { name: '1-open', includeRects: [await menuRect(page)] }

      await page.keyboard.press('Escape')
      yield { name: '2-escape-close', includeRects: [await menuRect(page)] }

      await page.keyboard.press('Enter')
      yield { name: '3-open-again', includeRects: [await menuRect(page)] }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')
      yield { name: '4-select', includeRects: [await menuRect(page)] }
    },
  },
  {
    name: 'rows scroll',
    url: withMaxItems,
    async *fn({ $, page }) {
      const ct = await centerBB($)

      await page.mouse.click(ct.x, ct.y)
      yield { name: 'open', includeRects: [await menuRect(page)] }
    },
  },
  {
    name: 'disabled',
    url: withDisabled,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))

test('color select events', runScreenshotTests('sinch-color-menu', [
  {
    name: 'keyboard native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-color-menu-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-color-menu-change', detail: 'light-violet' },
      ])

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-color-menu-change', detail: 'light-red' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    async *fn({ page, $eval }) {
      await subscribeToEvents(page, 'sinch-color-menu-change')

      const btnCt = await centerBB(page.locator('sinch-select-button'))

      await page.mouse.click(btnCt.x, btnCt.y)

      const optCt = centerRect(await $eval((el) => el.nthItemRect(0)))

      await page.mouse.click(optCt.x, optCt.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-color-menu-change', detail: 'light-violet' },
      ])
    },
  },
]))

