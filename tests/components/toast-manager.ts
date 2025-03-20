import { originValues } from '@nectary/components/toast-manager/utils'
import { expect, test } from '@playwright/test'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/toast-manager'
const getRect = (page: Page) =>
  page
    .locator('sinch-toast-manager')
    .evaluate((el) => (el as HTMLElementTagNameMap['sinch-toast-manager']).containerRect)

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

      /* Action */
      const actionPt = centerRect(await $eval((el) => el.nthActionRect(1)))

      await page.mouse.click(actionPt.x, actionPt.y)

      await page.waitForTimeout(5000)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-toast-close', detail: null },
        { type: 'sinch-toast-action', detail: null },
        { type: 'sinch-toast-timeout', detail: null },
      ])

      await page.evaluate(() => {
        window.dispatchEvent(new Event('sinch-toast-pop'))
      })

      yield { name: '2-pop', includeRects: [await getRect(page)] }

      await page.evaluate(() => {
        window.dispatchEvent(new Event('sinch-toast-push'))
      })

      yield { name: '3-push', includeRects: [await getRect(page)] }
    },
  },
  {
    name: 'origin',
    url: shot,
    async *fn({ page, $eval }) {
      for (const value of originValues) {
        await $eval((el, origin) => el.setAttribute('origin', origin), value)
        yield { name: value, includeRects: [await getRect(page)] }
      }
    },
  },
]))
