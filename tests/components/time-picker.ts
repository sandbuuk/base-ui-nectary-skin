import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const value = `value=17:39:17`

const shot24 = `/time-picker`
const shot12 = `/time-picker?ampm=true`
const withValue = `/time-picker?${value}`
const checkValue = makeAccessibilityTests(`/time-picker?${value}`, 'sinch-time-picker')

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

test('time picker screenshots', runScreenshotTests('sinch-time-picker', [
  {
    name: 'ampm',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('ampm', ''))
      yield { name: 'set' }
      await $eval((el) => el.removeAttribute('ampm'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'value',
    url: shot24,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '08:23:00'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'value 12',
    url: shot12,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '00:00:00'))
      yield { name: 'midnight' }
      await $eval((el) => el.setAttribute('value', '12:00:00'))
      yield { name: 'noon' }
    },
  },
  {
    name: 'value 24',
    url: shot24,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', '00:00:00'))
      yield { name: 'midnight' }
      await $eval((el) => el.setAttribute('value', '12:00:00'))
      yield { name: 'noon' }
    },
  },
  {
    name: 'mouse interaction 24',
    url: shot24,
    async *fn({ $eval, page }) {
      let hh = centerRect(await $eval((el) => el.hourDigitRect(4)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 4' }

      hh = centerRect(await $eval((el) => el.hourDigitRect(22)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 22' }

      hh = centerRect(await $eval((el) => el.hourDigitRect(0)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 0' }

      hh = centerRect(await $eval((el) => el.hourDigitRect(12)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 12' }

      hh = centerRect(await $eval((el) => el.minuteDigitRect(15)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click minute 15' }

      await page.mouse.click(hh.x, hh.y - 20)
      yield { name: 'click minute 13' }
    },
  },
  {
    name: 'mouse interaction 12',
    url: shot12,
    async *fn({ $eval, page }) {
      const am = centerRect(await $eval((el) => el.amButtonRect))
      const pm = centerRect(await $eval((el) => el.pmButtonRect))
      let hh = centerRect(await $eval((el) => el.hourDigitRect(4)))

      await page.mouse.click(am.x, am.y)
      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 4am' }

      hh = centerRect(await $eval((el) => el.hourDigitRect(10)))

      await page.mouse.click(pm.x, pm.y)
      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 10pm' }

      hh = centerRect(await $eval((el) => el.hourDigitRect(0)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 0' }

      hh = centerRect(await $eval((el) => el.hourDigitRect(12)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click hour 12' }

      hh = centerRect(await $eval((el) => el.minuteDigitRect(15)))

      await page.mouse.click(hh.x, hh.y)
      yield { name: 'click minute 15' }

      await page.mouse.click(hh.x, hh.y - 20)
      yield { name: 'click minute 13' }
    },
  },
  {
    name: 'keyboard interaction',
    url: shot12,
    async *fn({ page }) {
      // Focus Submit button
      await page.keyboard.press('Tab')
      yield { name: 'submit focus' }

      // Focus Hour needle
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowDown')
      yield { name: 'hour focus' }

      // Focus minute needle
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowDown')
      yield { name: 'minute focus' }

      await page.keyboard.press('Tab')
      yield { name: 'am focus' }
      await page.keyboard.press('Tab')
      yield { name: 'pm focus' }
    },
  },
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-time-picker-change', '11:11:11')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-time-picker-change')

      const hh = centerRect(await $eval((el) => el.hourDigitRect(9)))
      const mm = centerRect(await $eval((el) => el.minuteDigitRect(45)))
      const sb = centerRect(await $eval((el) => el.submitButtonRect))

      await page.mouse.click(hh.x, hh.y)
      await page.mouse.click(mm.x, mm.y)
      await page.mouse.click(sb.x, sb.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-time-picker-change', detail: '09:45:00' },
      ])
    },
  },
  {
    name: 'native events with keyboard 24',
    url: shot24,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-time-picker-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowDown')

      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowDown')

      await page.keyboard.press('Shift+Tab')
      await page.keyboard.press('Shift+Tab')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-time-picker-change', detail: '02:02:00' },
      ])
    },
  },
  {
    name: 'native events with keyboard 12',
    url: shot12,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-time-picker-change')

      // To Submit
      await page.keyboard.press('Tab')
      // To Hour
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowDown')

      // To Minute
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowDown')

      // To Am
      await page.keyboard.press('Tab')
      // To Pm
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      // To Am
      await page.keyboard.press('Shift+Tab')
      // To Minute
      await page.keyboard.press('Shift+Tab')
      // To Hour
      await page.keyboard.press('Shift+Tab')
      // To Submit
      await page.keyboard.press('Shift+Tab')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-time-picker-change', detail: '14:02:00' },
      ])
    },
  },
]))
