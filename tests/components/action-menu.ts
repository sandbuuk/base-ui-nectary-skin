import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/action-menu?width=200'
const withRows = '/action-menu?width=200&rows=2'
const checkSelectWithEverything = makeAccessibilityTests('/action-menu?width=200&placeholder=Placeholder%20value&value=1', 'sinch-action-menu')

test('accessibility', checkSelectWithEverything(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('action screenshots', runScreenshotTests('sinch-action-menu', [
  {
    name: 'keyboard',
    url: shot,
    async *fn({ page }) {
      await page.keyboard.press('Tab')

      yield { name: '1-initial' }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '2-down-down' }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '3-down-down' }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      yield { name: '4-up-up' }
    },
  },
  {
    name: 'rows keyboard',
    url: withRows,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')

      yield { name: '1-down' }

      await page.keyboard.press('ArrowDown')
      yield { name: '2-down' }

      await page.keyboard.press('ArrowUp')
      yield { name: '3-up' }
    },
  },
  {
    name: 'rows attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '2'))
      yield { name: 'items 2' }
    },
  },
  {
    name: 'rows property',
    url: shot,
    async *fn({ $eval, $ }) {
      await $eval((el) => el.setAttribute('rows', '2'))
      expect(await $.getAttribute('rows')).toBe('2')
    },
  },
]))

test('action menu events', runScreenshotTests('sinch-action-menu', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ page }) {
      const testMenu = testCustomEvent(page, page.locator('sinch-action-menu-option').nth(0))

      await testMenu('-click', 'sinch-action-menu-click', '1')
    },
  },
  {
    name: 'keyboard native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click')

      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-click', detail: '3' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click')

      const ct = centerRect(await page.locator('sinch-action-menu-option').nth(0).boundingBox())

      await page.mouse.click(ct.x, ct.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-click', detail: '1' },
      ])

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-click', detail: '3' },
      ])
    },
  },
]))

