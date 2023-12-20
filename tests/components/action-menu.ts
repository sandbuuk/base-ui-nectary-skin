import { expect, test } from '@playwright/test'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/action-menu?width=200'
const withRows = '/action-menu?width=200&rows=2'

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
    name: 'keyboard rows',
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
    name: 'rows',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '2'))
      yield { name: 'items 2' }

      /* Property */
      const attrValue = await $eval((el) => {
        el.rows = 2

        return el.getAttribute('rows')
      })

      expect(attrValue).toBe('2')
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

      const ct = await centerBB(page.locator('sinch-action-menu-option').nth(0))

      await page.mouse.click(ct.x, ct.y)

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-click', detail: '1' },
        { type: 'sinch-action-menu-click', detail: '3' },
      ])
    },
  },
]))

