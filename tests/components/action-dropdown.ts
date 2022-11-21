import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, getBB, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/action-dropdown?width=200'
const checkSelectWithEverything = makeAccessibilityTests('/action-dropdown?width=200&placeholder=Placeholder%20value&value=1', 'sinch-popover')

const menuRect = (page: Page) => getBB(page.locator('sinch-action-menu'))

test('accessibility', checkSelectWithEverything({
  async *fn({ $ }) {
    yield
    await $.click()
    yield
  },
}))

test('action-dropdown screenshots', runScreenshotTests('sinch-popover', [
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
    name: 'focus press-space',
    url: shot,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Space')
      yield { name: '1-open', includeRects: [await menuRect(page)] }

      await page.keyboard.press('Escape')
      yield { name: '2-escape-close', includeRects: [await menuRect(page)] }

      await page.keyboard.press('Space')
      yield { name: '3-open-again', includeRects: [await menuRect(page)] }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Space')
      yield { name: '4-action', includeRects: [await menuRect(page)] }
    },
  },
  {
    name: 'focus press-enter',
    url: shot,
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
      yield { name: '4-action', includeRects: [await menuRect(page)] }
    },
  },
]))

test('action-dropdown events', runScreenshotTests('sinch-popover', [
  {
    name: 'keyboard native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-action-dropdown-click')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-dropdown-click', detail: '1' },
      ])

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-dropdown-click', detail: '3' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-action-dropdown-click')

      const btnCt = await centerBB(page.locator('sinch-button'))

      await page.mouse.click(btnCt.x, btnCt.y)

      const optCt = await centerBB(page.locator('sinch-action-menu-option').nth(2))

      await page.mouse.click(optCt.x, optCt.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-dropdown-click', detail: '3' },
      ])
    },
  },
]))
