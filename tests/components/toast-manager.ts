import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/toast-manager'
const checkValue = makeAccessibilityTests('/toast-manager', 'sinch-toast-manager')
const getRect = (page: Page) => page.locator('sinch-toast-manager').evaluate((el) => (el as any).containerRect)

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

test('toast-manager screenshots', runScreenshotTests('sinch-toast-manager', [
  {
    name: 'items',
    url: shot,
    async *fn({ page, $eval }) {
      await subscribeToEvents(page, 'sinch-toast-action', 'sinch-toast-close', 'sinch-toast-timeout')

      yield { name: '1-initial', includeRects: [await getRect(page)] }

      /* Close */
      const closePt = centerRect(await $eval((el) => el.nthCloseRect(3)))

      await page.mouse.click(closePt.x, closePt.y)

      yield { name: '2-close', includeRects: [await getRect(page)] }
      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-toast-close', detail: null },
      ])

      /* Action */
      const actionPt = centerRect(await $eval((el) => el.nthActionRect(1)))

      await page.mouse.click(actionPt.x, actionPt.y)

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-toast-action', detail: null },
      ])

      await page.waitForSelector('sinch-toast', { state: 'detached', timeout: 10000 })

      await page.evaluate(() => {
        window.dispatchEvent(new Event('sinch-toast-push'))
      })

      await page.waitForSelector('sinch-toast', { state: 'attached', timeout: 1000 })

      yield { name: '3-add-more', includeRects: [await getRect(page)] }
    },
  },
]))
