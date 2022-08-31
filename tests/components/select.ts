import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/select?width=200'
const withPlaceholder = '/select?width=200&placeholder=Placeholder'
const withMaxItems = '/select?width=200&maxvisibleitems=2'
const withEverything = '/select?width=200&invalid=true&placeholder=Placeholder%20value&value=1'
const checkSelectWithEverything = makeAccessibilityTests('/select?width=200&invalid=true&placeholder=Placeholder%20value&value=1', 'sinch-select')

test('accessibility', checkSelectWithEverything(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('select screenshots', runScreenshotTests('sinch-select', [
  {
    name: 'disabled attribute',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'disabled' }

      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'enabled' }
    },
  },
  {
    name: 'disabled property',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.disabled = true
      })
      yield { name: 'disabled' }

      await $eval((el) => {
        el.disabled = false
      })
      yield { name: 'enabled' }
    },
  },
  {
    name: 'value attribute',
    url: withPlaceholder,
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
    name: 'click button',
    url: shot,
    async *fn({ $, $eval, page }) {
      await $.click()
      yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.mouse.click(0, 0)
      yield { name: 'click outside', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'focus press-space',
    url: withPlaceholder,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Space')
      yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Space')
      yield { name: 'close', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Space')
      yield { name: 'open-again', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'focus press-enter',
    url: withPlaceholder,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Enter')
      yield { name: 'close', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Enter')
      yield { name: 'open-again', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'keyboard',
    url: withPlaceholder,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      const dropdownRect = await $eval((el) => el.dropdownRect)

      yield {
        name: 'open',
        includeRects: [dropdownRect],
      }

      await page.keyboard.press('ArrowDown')
      yield {
        name: 'down',
        includeRects: [dropdownRect],
      }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowRight')
      yield {
        name: 'down-right',
        includeRects: [dropdownRect],
      }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowLeft')
      yield {
        name: 'up-left',
        includeRects: [dropdownRect],
      }
    },
  },
  {
    name: 'maxvisibleitems attribute',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
      await $.click()
      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'maxvisibleitems property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.maxVisibleItems = 2
      })
      await $.click()
      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'maxvisibleitems scroll',
    url: withMaxItems,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('value', '3'))
      await $.click()
      yield { name: 'scroll to 3', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
]))

test('select events', runScreenshotTests('sinch-select', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-select-change', 'X')
      await testInput('-focus', 'sinch-select-focus')
      await testInput('-blur', 'sinch-select-blur')
    },
  },
  {
    name: 'native events',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-focus', 'sinch-select-blur', 'sinch-select-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Shift+Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-blur', detail: null },
      ])

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-focus', detail: null },
        /* We suppress blur event on target when modal open to unify with Firefox */
        // { type: 'sinch-select-blur', detail: null },
        /* We suppress focus event on target when focusing back after modal close */
        // { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-change', detail: '1' },
      ])

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        /* We suppress blur event on target when modal open to unify with Firefox */
        // { type: 'sinch-select-blur', detail: null },
        /* We suppress focus event on target when focusing back after modal close */
        // { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-change', detail: '3' },
      ])
    },
  },
]))

