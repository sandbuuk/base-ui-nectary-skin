import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/color-menu'
const checkSelectWithEverything = makeAccessibilityTests('/color-menu', 'sinch-color-menu')

test('accessibility', checkSelectWithEverything(async function* () {
  yield
}))

test('color-menu screenshots', runScreenshotTests('sinch-color-menu', [
  {
    name: 'value attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }

      await $eval((el) => el.setAttribute('value', 'Pink 10'))
      yield { name: 'pink 10' }
    },
  },
  {
    name: 'value property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.value = ''
      })
      expect(await $.getAttribute('value')).toBe('')

      await $eval((el) => {
        el.value = 'Pink 10'
      })
      expect(await $.getAttribute('value')).toBe('Pink 10')
    },
  },
  {
    name: 'colors attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('colors', 'Pink 10,Blue 10'))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('colors'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'colors property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('colors', 'Pink 10,Blue 10'))

      expect(await $.getAttribute('colors')).toBe('Pink 10,Blue 10')

      await $eval((el) => el.removeAttribute('colors'))

      expect(await $.getAttribute('colors')).toBe(null)
    },
  },
  {
    name: 'rows attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '2'))
      yield { name: 'set' }
      await $eval((el) => el.removeAttribute('rows'))
      yield { name: 'unset' }
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
  {
    name: 'cols attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('cols', '7'))
      yield { name: 'set' }
      await $eval((el) => el.removeAttribute('cols'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'cols property',
    url: shot,
    async *fn({ $eval, $ }) {
      await $eval((el) => el.setAttribute('cols', '7'))
      expect(await $.getAttribute('cols')).toBe('7')
    },
  },
  {
    name: 'keyboard',
    url: shot,
    async *fn({ page }) {
      await page.keyboard.press('Tab')

      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '1-rrrdd' }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: '2-ddd' }

      await page.keyboard.press('ArrowDown')
      yield { name: '3-d' }

      await page.keyboard.press('ArrowUp')
      yield { name: '4-u' }
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
        { type: 'sinch-color-menu-change', detail: 'Blue 20' },
        { type: 'sinch-color-menu-change', detail: 'Skin tone 40' },
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
        { type: 'sinch-color-menu-change', detail: 'Blue 10' },
        { type: 'sinch-color-menu-change', detail: 'Green 20' },
      ])
    },
  },
]))

