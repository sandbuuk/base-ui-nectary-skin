import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { TSinchHelpTooltipElement } from '@sinch-engage/nectary/help-tooltip/types'

const shot = '/select?width=200&label=Label'
const withPlaceholder = '/select?width=200&label=Label&placeholder=Placeholder'
const withTooltip = '/select?width=200&label=Label&placeholder=Placeholder&tooltip=Tooltip%20text%20long%20long'
const withMaxItems = '/select?width=200&label=Label&maxvisibleitems=2'
const withEverything = '/select?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1'
const checkSelectWithEverything = makeAccessibilityTests('/select?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1', 'sinch-select')

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
    name: 'click label',
    url: shot,
    async *fn({ $, $eval }) {
      // Click on label
      await $.click({ position: { x: 10, y: 10 } })

      yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'tooltip',
    url: withTooltip,
    async *fn({ $ }) {
      await $.locator('sinch-help-tooltip').hover()

      const tooltipRect = await $.locator('sinch-help-tooltip')
        .evaluate((el) => (el as TSinchHelpTooltipElement).tooltipRect)

      yield {
        name: 'show',
        includeRects: [tooltipRect],
      }
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
    async *fn({ page, isFirefox }) {
      await subscribeToEvents(page, 'sinch-select-focus', 'sinch-select-blur', 'sinch-select-change')

      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-focus', detail: null },
        { type: 'sinch-select-blur', detail: null },
      ])

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Enter')

      if (isFirefox) {
        expect(
          await getAllEvents(page)
        ).toEqual([
          { type: 'sinch-select-focus', detail: null },
          { type: 'sinch-select-focus', detail: null },
          { type: 'sinch-select-change', detail: '1' },
        ])
      } else {
        expect(
          await getAllEvents(page)
        ).toEqual([
          { type: 'sinch-select-focus', detail: null },
          { type: 'sinch-select-blur', detail: null },
          { type: 'sinch-select-focus', detail: null },
          { type: 'sinch-select-change', detail: '1' },
        ])
      }

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      if (isFirefox) {
        expect(
          await getAllEvents(page)
        ).toEqual([
          { type: 'sinch-select-focus', detail: null },
          { type: 'sinch-select-change', detail: '3' },
        ])
      } else {
        expect(
          await getAllEvents(page)
        ).toEqual([
          { type: 'sinch-select-blur', detail: null },
          { type: 'sinch-select-focus', detail: null },
          { type: 'sinch-select-change', detail: '3' },
        ])
      }
    },
  },
]))

