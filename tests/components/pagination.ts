import { expect, test } from '@playwright/test'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withEmptyRange = '/pagination?value=1'
const withShortRange = '/pagination?max=3'
const withMidRange = '/pagination?value=5&max=9'
const withHugeRange = '/pagination?value=99999&max=99999'
const withLargeRange = '/pagination?value=50&max=100'

test('pagination screenshots', runScreenshotTests('sinch-pagination', [
  {
    name: 'value',
    url: withShortRange,
    async *fn({ $eval }) {
      yield { name: 'missing' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'max',
    url: withEmptyRange,
    async *fn({ $eval }) {
      yield { name: 'missing' }

      await $eval((el) => el.setAttribute('max', '5'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('max', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'left click',
    url: withMidRange,
    async *fn({ $eval, page }) {
      const { x, y } = centerRect(await $eval((el) => el.prevButtonRect))

      yield { name: 'begin' }

      await page.mouse.click(x, y)
      await page.mouse.move(0, 0)
      yield { name: 'left-1' }

      await page.mouse.click(x, y)
      await page.mouse.move(0, 0)
      yield { name: 'left-2' }

      await page.mouse.click(x, y)
      await page.mouse.click(x, y)
      await page.mouse.move(0, 0)
      yield { name: 'left-4' }
    },
  },
  {
    name: 'right click',
    url: withMidRange,
    async *fn({ $eval, page }) {
      const { x, y } = centerRect(await $eval((el) => el.nextButtonRect))

      yield { name: 'begin' }

      await page.mouse.click(x, y)
      await page.mouse.move(0, 0)
      yield { name: 'right-1' }

      await page.mouse.click(x, y)
      await page.mouse.move(0, 0)
      yield { name: 'right-2' }

      await page.mouse.click(x, y)
      await page.mouse.click(x, y)
      await page.mouse.move(0, 0)
      yield { name: 'right-4' }
    },
  },
  {
    name: 'first last click',
    url: withLargeRange,
    async *fn({ $eval, page }) {
      const [firstRect, lastRect] = await $eval((el) => [el.nthButtonRect(0), el.nthButtonRect(6)])
      const firstCt = centerRect(firstRect)
      const lastCt = centerRect(lastRect)

      await page.mouse.click(firstCt.x, firstCt.y)
      await page.mouse.move(0, 0)
      yield { name: 'first' }

      await page.mouse.click(lastCt.x, lastCt.y)
      await page.mouse.move(0, 0)
      yield { name: 'last' }
    },
  },
  {
    name: 'middle click',
    url: withLargeRange,
    async *fn({ $eval, page }) {
      const [firstRect, lastRect] = await $eval((el) => [el.nthButtonRect(2), el.nthButtonRect(4)])
      const firstCt = centerRect(firstRect)
      const lastCt = centerRect(lastRect)

      await page.mouse.click(firstCt.x, firstCt.y)
      await page.mouse.move(0, 0)
      yield { name: 'left' }

      await page.mouse.click(lastCt.x, lastCt.y)
      await page.mouse.click(lastCt.x, lastCt.y)
      await page.mouse.move(0, 0)
      yield { name: 'right' }
    },
  },
  {
    name: 'dots click',
    url: withMidRange,
    async *fn({ $eval, page }) {
      const [firstRect, lastRect] = await $eval((el) => [el.nthButtonRect(1), el.nthButtonRect(5)])
      const firstCt = centerRect(firstRect)
      const lastCt = centerRect(lastRect)

      await page.mouse.click(firstCt.x, firstCt.y)
      await page.mouse.move(0, 0)
      yield { name: 'left' }

      await page.mouse.click(lastCt.x, lastCt.y)
      await page.mouse.move(0, 0)
      yield { name: 'right' }
    },
  },
  {
    name: 'long text',
    url: withHugeRange,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'keyboard focus',
    url: withHugeRange,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1-tab' }
      await page.keyboard.press('Tab')
      yield { name: '2-tab' }
      await page.keyboard.press('Tab')
      yield { name: '3-tab' }
      await page.keyboard.press('Tab')
      yield { name: '4-tab' }
    },
  },
]))

test('pagination events', runScreenshotTests('sinch-pagination', [
  {
    name: 'custom events',
    url: withMidRange,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-pagination-change', 10)
      await testInput('focusin', 'sinch-pagination-focus')
      await testInput('focusout', 'sinch-pagination-blur')
    },
  },
  {
    name: 'native events',
    url: withMidRange,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-pagination-focus', 'sinch-pagination-blur', 'sinch-pagination-change')

      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      const prevRect = centerRect(await $eval((el) => el.prevButtonRect))

      await page.mouse.click(prevRect.x, prevRect.y)

      const nextRect = centerRect(await $eval((el) => el.nextButtonRect))

      await page.mouse.click(nextRect.x, nextRect.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
      ])

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-pagination-focus', detail: null },
        { type: 'sinch-pagination-blur', detail: null },
        { type: 'sinch-pagination-focus', detail: null },
        { type: 'sinch-pagination-change', detail: 4 },
        { type: 'sinch-pagination-change', detail: 5 },
      ])
    },
  },
]))
