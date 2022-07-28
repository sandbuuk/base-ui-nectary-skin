import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const minMaxLocale = `locale=en&min=2021-05-05&max=2023-05-05`
const valueMinMaxLocale = `value=2022-06-06&${minMaxLocale}`

const shot = `/date-picker?${minMaxLocale}`
const withValue = `/date-picker?${valueMinMaxLocale}`
const checkValue = makeAccessibilityTests(`/date-picker?${valueMinMaxLocale}`, 'sinch-date-picker')

test('accessibility', checkValue(async function* () {
  yield
}))

test('date input screenshots', runScreenshotTests('sinch-date-picker', [
  {
    name: 'min attribute',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('min', '2022-07-07'))
      yield { name: 'clamp' }
    },
  },
  {
    name: 'min property',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.min = '2022-07-07'
      })
      yield { name: 'clamp' }
    },
  },
  {
    name: 'max attribute',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('max', '2022-05-05'))
      yield { name: 'clamp' }
    },
  },
  {
    name: 'max property',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.max = '2022-05-05'
      })
      yield { name: 'clamp' }
    },
  },
  {
    name: 'locale attribute',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('locale', 'ru'))
      yield { name: 'ru' }
    },
  },
  {
    name: 'locale property',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.locale = 'ru'
      })
      yield { name: 'ru' }
    },
  },
  {
    name: 'value attribute summer',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '2022-07-07'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'value attribute winter',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '2022-03-03'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'value property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.value = '2022-07-07'
      })
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
        el.setAttribute('value', '2022-06-06')
        el.setAttribute('max', '2023-07-07')

        return [el.nextYearButtonRect, el.nextMonthButtonRect]
      })

      await page.mouse.click(nextYear.x + 1, nextYear.y + 1)
      yield { name: 'next year' }

      await page.mouse.click(nextMonth.x + 1, nextMonth.y + 1)
      yield { name: 'next month' }
    },
  },
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-date-picker-change', 'X')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-date-picker-change')

      // Necessary to normalize "type" behaviour
      const bb = (await $eval((el) => el.nthButtonRect(3)))!

      await page.mouse.click(bb.x + 1, bb.y + 1)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-date-picker-change', detail: '2022-06-04' },
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
