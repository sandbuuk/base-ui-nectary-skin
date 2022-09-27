import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/select-menu?width=200'
const withMultiple = '/select-menu?width=200&multiple=true'
const checkSelectWithEverything = makeAccessibilityTests('/select-menu?width=200&placeholder=Placeholder%20value&value=1', 'sinch-select-menu')

test('accessibility', checkSelectWithEverything(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('select screenshots', runScreenshotTests('sinch-select-menu', [
  {
    name: 'value attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty' }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'option-4' }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'option-3' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'option-disabled' }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'option-1' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing' }
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
        el.value = '4'
      })
      expect(await $.getAttribute('value')).toBe('4')

      await $eval((el) => {
        el.value = '3'
      })
      expect(await $.getAttribute('value')).toBe('3')

      await $eval((el) => {
        el.value = '2'
      })
      expect(await $.getAttribute('value')).toBe('2')

      await $eval((el) => {
        el.value = '1'
      })
      expect(await $.getAttribute('value')).toBe('1')

      await $eval((el) => {
        el.value = 'missing'
      })
      expect(await $.getAttribute('value')).toBe('missing')
    },
  },
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
    name: 'keyboard select',
    url: shot,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')
      yield { name: '1-down-enter' }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Space')
      yield { name: '2-down-space' }
    },
  },
  {
    name: 'keyboard select multiple',
    url: withMultiple,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')
      yield { name: '1-down-enter' }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Space')
      yield { name: '2-down-space' }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('Enter')
      yield { name: '5-up-enter' }
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
  {
    name: 'multiple attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('multiple', '')
        el.setAttribute('value', '1,2,3')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('multiple')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'multiple property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.multiple = true
      })
      expect(await $.getAttribute('multiple')).toBe('')
      await $eval((el) => {
        el.multiple = false
      })
      expect(await $.getAttribute('multiple')).toBe(null)
    },
  },
]))

test('select menu events', runScreenshotTests('sinch-select-menu', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ page, $ }) {
      const testMenu = testCustomEvent(page, $)

      await testMenu('-change', 'sinch-select-menu-change', 'X')
    },
  },
  {
    name: 'keyboard native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-menu-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-menu-change', detail: '3' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-menu-change')

      const ct = centerRect(await page.locator('sinch-select-menu-option').nth(0).boundingBox())

      await page.mouse.click(ct.x, ct.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-menu-change', detail: '1' },
      ])

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-menu-change', detail: '3' },
      ])
    },
  },
]))

