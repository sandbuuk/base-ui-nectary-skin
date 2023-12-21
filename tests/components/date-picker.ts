import { expect, test } from '@playwright/test'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const minMaxLocale = `locale=en&min=2021-05-05&max=2023-05-05`
const valueMinMaxLocale = `value=2022-06-06&${minMaxLocale}`

const shot = `/date-picker?${minMaxLocale}`
const withValue = `/date-picker?${valueMinMaxLocale}`
const withRange = `/date-picker?${valueMinMaxLocale}&range=true`

test('date-picker screenshots', runScreenshotTests('sinch-date-picker', [
  {
    name: 'min',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('min', '2022-07-07'))
      yield { name: 'clamp' }
    },
  },
  {
    name: 'max',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('max', '2022-05-05'))
      yield { name: 'clamp' }
    },
  },
  {
    name: 'locale',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('locale', 'ru'))
      yield { name: 'ru' }
    },
  },
  {
    name: 'value summer',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '2022-07-07'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'value winter',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '2022-03-03'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'tab order',
    url: withValue,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'tab-1' }

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      yield { name: 'tab-4' }

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      yield { name: 'tab-6' }

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      yield { name: 'tab-10' }
    },
  },
  {
    name: 'mouse interaction',
    url: withValue,
    async *fn({ $eval, page }) {
      const bb = (await $eval((el) => el.nthButtonRect(0)))!

      await page.mouse.move(bb.x + 1, bb.y + 1)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover checked' }

      await page.mouse.down()
      yield { name: 'active checked' }
    },
  },
  {
    name: 'range mouse interaction',
    url: withRange,
    async *fn({ $eval, page }) {
      let bb = centerRect(await $eval((el) => el.nthButtonRect(6)))

      await page.mouse.click(bb.x, bb.y)
      yield { name: '1-select-first-date' }

      bb = centerRect(await $eval((el) => el.nextMonthButtonRect))
      await page.mouse.click(bb.x, bb.y)

      bb = centerRect(await $eval((el) => el.nthButtonRect(10)))
      await page.mouse.move(bb.x, bb.y)
      yield { name: '2-hover-second-date' }

      bb = centerRect(await $eval((el) => el.nthButtonRect(20)))
      await page.mouse.click(bb.x, bb.y)
      yield { name: '3-select-second-date' }

      bb = centerRect(await $eval((el) => el.prevMonthButtonRect))
      await page.mouse.click(bb.x, bb.y)
      yield { name: '4-switch-prev-month' }

      bb = centerRect(await $eval((el) => el.nthButtonRect(10)))
      await page.mouse.click(bb.x, bb.y)
      yield { name: '5-select-first-date' }

      bb = centerRect(await $eval((el) => el.prevMonthButtonRect))
      await page.mouse.click(bb.x, bb.y)

      bb = centerRect(await $eval((el) => el.nthButtonRect(10)))
      await page.mouse.click(bb.x, bb.y)
      yield { name: '6-select-second-date' }
    },
  },
  {
    name: 'min limit',
    url: shot,
    async *fn({ $eval, page }) {
      const [prevYear, prevMonth] = await $eval((el) => {
        el.setAttribute('value', '2022-06-06')
        el.setAttribute('min', '2021-05-05')

        return [el.prevYearButtonRect, el.prevMonthButtonRect]
      })

      await page.mouse.click(prevYear.x + 1, prevYear.y + 1)
      yield { name: 'prev year' }

      await page.mouse.click(prevMonth.x + 1, prevMonth.y + 1)
      yield { name: 'prev month' }
    },
  },
  {
    name: 'max limit',
    url: shot,
    async *fn({ $eval, page }) {
      const [nextYear, nextMonth] = await $eval((el) => {
        el.setAttribute('value', '2022-04-04')
        el.setAttribute('max', '2023-05-05')

        return [el.nextYearButtonRect, el.nextMonthButtonRect]
      })

      await page.mouse.click(nextYear.x + 1, nextYear.y + 1)
      yield { name: 'next year' }

      await page.mouse.click(nextMonth.x + 1, nextMonth.y + 1)
      yield { name: 'next month' }
    },
  },
  {
    name: 'timezone-edge-case',
    url: '/date-picker?locale=en&min=2022-02-28&max=2022-05-05&value=2022-03-01',
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))

test('date-picker events', runScreenshotTests('sinch-date-picker', [
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-date-picker-change', 'X')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-date-picker-change')

      const bb = centerRect(await $eval((el) => el.nthButtonRect(3)))!

      await page.mouse.click(bb.x, bb.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-date-picker-change', detail: '2022-06-04' },
      ])
    },
  },
  {
    name: 'native events range',
    url: withRange,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-date-picker-change')

      const day1pt = centerRect(await $eval((el) => el.nthButtonRect(3)))!
      const day2pt = centerRect(await $eval((el) => el.nthButtonRect(5)))!

      // Click range
      await page.mouse.click(day1pt.x, day1pt.y)
      await page.mouse.click(day2pt.x, day2pt.y)

      // Click same day twice
      await page.mouse.click(day1pt.x, day1pt.y)
      await page.mouse.click(day1pt.x, day1pt.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-date-picker-change', detail: '2022-06-04,2022-06-06' },
        { type: 'sinch-date-picker-change', detail: '2022-06-04,2022-06-04' },
      ])
    },
  },
  {
    name: 'native events with keyboard',
    url: withValue,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-date-picker-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Space')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-date-picker-change', detail: '2022-06-01' },
      ])
    },
  },
]))
