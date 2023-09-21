import { sizeValues } from '@nectary/components/utils/size'
import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, getBB, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/select?width=200'
const withInvalid = '/select?width=200&placeholder=Placeholder&invalid=true'
const withDisabled = '/select?width=200&placeholder=Placeholder&disabled=true'
const withPlaceholder = '/select?width=200&placeholder=Placeholder'
const withMaxItems = '/select?width=200&value=3&rows=2'
const checkSelectWithEverything = makeAccessibilityTests('/select?width=200&placeholder=Placeholder%20value&value=1', 'sinch-popover')

const menuRect = (page: Page) => getBB(page.locator('sinch-select-menu'))

test('accessibility', checkSelectWithEverything({
  async *fn({ $ }) {
    yield
    await $.click()
    yield
  },
}))

test('select screenshots', runScreenshotTests('sinch-popover', [
  {
    name: 'size',
    url: shot,
    async *fn({ page }) {
      for (const value of sizeValues) {
        await page
          .locator('sinch-select-button')
          .evaluate((el, value) => el.setAttribute('size', value), value)
        yield { name: value }
      }
    },
  },
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
    url: withPlaceholder,
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
      yield { name: '4-select', includeRects: [await menuRect(page)] }
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
    name: 'keyboard',
    url: withPlaceholder,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      yield {
        name: '1-open',
        includeRects: [await menuRect(page)],
      }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield {
        name: '2-down-down',
        includeRects: [await menuRect(page)],
      }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield {
        name: '3-down-down',
        includeRects: [await menuRect(page)],
      }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      yield {
        name: '4-up-up',
        includeRects: [await menuRect(page)],
      }
    },
  },
  {
    name: 'rows scroll',
    url: withMaxItems,
    async *fn({ $, page }) {
      const ct = await centerBB($)

      await page.mouse.click(ct.x, ct.y)
      yield { name: 'open to 3', includeRects: [await menuRect(page)] }
    },
  },
  {
    name: 'invalid',
    url: withInvalid,
    async *fn({ page }) {
      yield { name: 'shot', includeRects: [await menuRect(page)] }
    },
  },
  {
    name: 'disabled',
    url: withDisabled,
    async *fn({ page }) {
      yield { name: 'shot', includeRects: [await menuRect(page)] }
    },
  },
]))

test('select events', runScreenshotTests('sinch-popover', [
  {
    name: 'select menu custom events',
    url: shot,
    async *fn({ page }) {
      const menu = page.locator('sinch-select-menu')
      const testMenu = testCustomEvent(page, menu)

      await testMenu('-change', 'sinch-select-change', 'X')
    },
  },
  {
    name: 'select button custom events',
    url: shot,
    async *fn({ page }) {
      const btn = page.locator('sinch-select-button')
      const testMenu = testCustomEvent(page, btn)

      await testMenu('-click', 'sinch-select-click')
      await testMenu('-focus', 'sinch-select-focus')
      await testMenu('-blur', 'sinch-select-blur')
    },
  },
  {
    name: 'keyboard native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-focus', 'sinch-select-blur', 'sinch-select-change')

      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-blur', detail: null },
        { type: 'sinch-select-focus', detail: null },
        /* We suppress blur event on target when modal open to unify with Firefox */
        // { type: 'sinch-select-blur', detail: null },
        /* We suppress focus event on target when focusing back after modal close */
        // { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-change', detail: '1' },
        /* We suppress blur event on target when modal open to unify with Firefox */
        // { type: 'sinch-select-blur', detail: null },
        /* We suppress focus event on target when focusing back after modal close */
        // { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-change', detail: '3' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-change')

      const btnCt = await centerBB(page.locator('sinch-select-button'))

      await page.mouse.click(btnCt.x, btnCt.y)

      const optCt = await centerBB(page.locator('sinch-select-menu-option').nth(0))

      await page.mouse.click(optCt.x, optCt.y)

      await page.mouse.click(btnCt.x, btnCt.y)
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-change', detail: '1' },
        { type: 'sinch-select-change', detail: '3' },
      ])
    },
  },
]))

