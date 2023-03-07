import { expect, test } from '@playwright/test'
import { lightColorNames, vibrantColorNames } from '@sinch-engage/nectary/theme/colors'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const lightVibrantColors = encodeURIComponent(`${lightColorNames},${vibrantColorNames}`)

const shot = '/color-menu'
const withLightVibrant = `/color-menu?colors=${lightVibrantColors}`
const checkSelectWithEverything = makeAccessibilityTests('/color-menu', 'sinch-color-menu')

test('accessibility', checkSelectWithEverything({
  async *fn() {
    yield
  },
}))

test('color-menu screenshots', runScreenshotTests('sinch-color-menu', [
  {
    name: 'value',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }

      await $eval((el) => el.setAttribute('value', 'light-blue'))
      yield { name: 'light-blue' }
    },
  },
  {
    name: 'colors',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('colors', 'light-orange,light-blue'))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('colors'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'rows',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '2'))
      yield { name: 'shot' }
    },
  },
  {
    name: 'cols',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('cols', '7'))
      yield { name: 'set' }
      await $eval((el) => el.removeAttribute('cols'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'keyboard',
    url: withLightVibrant,
    async *fn({ page }) {
      await page.keyboard.press('Tab')

      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '1-rrrrdd' }

      await page.keyboard.press('ArrowDown')
      yield { name: '2-d' }

      await page.keyboard.press('ArrowDown')
      yield { name: '3-d' }

      await page.keyboard.press('ArrowUp')
      yield { name: '4-u' }
    },
  },
  {
    name: 'tooltip',
    url: shot,
    async *fn({ page, $eval }) {
      const pt = centerRect(await $eval((el) => el.nthItemRect(7)))

      await page.mouse.move(pt.x, pt.y)
      await page.waitForTimeout(1200)

      yield { name: 'shot' }
    },
  },
]))

test('color-menu events', runScreenshotTests('sinch-color-menu', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ page, $ }) {
      const testMenu = testCustomEvent(page, $)

      await testMenu('-change', 'sinch-color-menu-change', 'X')
    },
  },
  {
    name: 'keyboard native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-color-menu-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowLeft')
      await page.keyboard.press('Space')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-color-menu-change', detail: 'light-blue' },
        { type: 'sinch-color-menu-change', detail: 'dark-brown' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    async *fn({ page, $eval }) {
      await subscribeToEvents(page, 'sinch-color-menu-change')

      const ct = centerRect(await $eval((el) => el.nthItemRect(0)))

      await page.mouse.click(ct.x, ct.y)
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-color-menu-change', detail: 'light-violet' },
        { type: 'sinch-color-menu-change', detail: 'light-pink' },
      ])
    },
  },
]))

