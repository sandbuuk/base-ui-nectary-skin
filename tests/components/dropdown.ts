import { expect, test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/popover/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withDropdown = '/dropdown'
const withMultiple = '/dropdown?multiple=true'
const withCheckbox = '/dropdown?checkbox=true'
const withRadio = '/dropdown?radio=true'
const withWideContent = '/dropdown?width=300'
const withMaxItems = '/dropdown?maxvisibleitems=2'
const check = makeAccessibilityTests('/dropdown', 'sinch-dropdown')

test('accessibility', check(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('dropdown screenshots', runScreenshotTests('sinch-dropdown', [
  {
    name: 'checkbox option',
    url: withCheckbox,
    async *fn({ $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => {
        el.setAttribute('open', '')
        el.setAttribute('value', '1')
      })
      yield { name: 'shot', includeRects: [await getRect()] }
    },
  },
  {
    name: 'radio option',
    url: withRadio,
    async *fn({ $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => {
        el.setAttribute('open', '')
        el.setAttribute('value', '1')
      })
      yield { name: 'shot', includeRects: [await getRect()] }
    },
  },
  {
    name: 'multiple attribute',
    url: withCheckbox,
    async *fn({ $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => {
        el.setAttribute('multiple', '')
        el.setAttribute('open', '')
        el.setAttribute('value', '1,2,3')
      })
      yield { name: 'set', includeRects: [await getRect()] }
      await $eval((el) => {
        el.removeAttribute('multiple')
        el.setAttribute('open', '')
        el.setAttribute('value', '1,2,3')
      })
      yield { name: 'unset', includeRects: [await getRect()] }
    },
  },
  {
    name: 'multiple property',
    url: withCheckbox,
    async *fn({ $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => {
        el.multiple = true
        el.setAttribute('open', '')
        el.setAttribute('value', '1,2,3')
      })
      yield { name: 'set', includeRects: [await getRect()] }
      await $eval((el) => {
        el.multiple = false
        el.setAttribute('open', '')
        el.setAttribute('value', '1,2,3')
      })
      yield { name: 'unset', includeRects: [await getRect()] }
    },
  },
  {
    name: 'multiple clicks',
    url: withMultiple,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $.click()
      await $.locator('sinch-dropdown-text-option').nth(0).click()
      await $.locator('sinch-dropdown-text-option').nth(2).click()

      yield { name: 'check', includeRects: [await getRect()] }

      await $.locator('sinch-dropdown-text-option').nth(2).click()

      yield { name: 'uncheck', includeRects: [await getRect()] }
    },
  },
  {
    name: 'open attribute',
    url: withDropdown,
    async *fn({ $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await getRect()] }
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await getRect()] }
    },
  },
  {
    name: 'orientation attribute',
    url: withWideContent,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $.click()

      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await getRect()] }
      }
    },
  },
  {
    name: 'orientation property',
    url: withWideContent,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $.click()

      for (const value of orientationValues) {
        await $eval((el, value) => {
          el.orientation = value
        }, value)
        yield { name: value, includeRects: [await getRect()] }
      }
    },
  },
  {
    name: 'maxvisibleitems attribute',
    url: withDropdown,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
      await $.click()
      yield { name: 'items 2', includeRects: [await getRect()] }
    },
  },
  {
    name: 'maxvisibleitems property',
    url: withDropdown,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => {
        el.maxVisibleItems = 2
      })
      await $.click()
      yield { name: 'items 2', includeRects: [await getRect()] }
    },
  },
  {
    name: 'maxvisibleitems scroll',
    url: withMaxItems,
    async *fn({ $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $eval((el) => el.setAttribute('value', '3'))
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'scroll to 3', includeRects: [await getRect()] }
    },
  },
  {
    name: 'value attribute',
    url: withDropdown,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      // Open dropdown once
      await $.click()

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'option-4', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'option-3', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'option-disabled', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'option-1', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing', includeRects: [await getRect()] }
    },
  },
  {
    name: 'value property',
    url: withDropdown,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      // Open dropdown once
      await $.click()

      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'option-empty', includeRects: [await getRect()] }

      await $eval((el) => {
        el.value = '4'
      })
      yield { name: 'option-4', includeRects: [await getRect()] }

      await $eval((el) => {
        el.value = '3'
      })
      yield { name: 'option-3', includeRects: [await getRect()] }

      await $eval((el) => {
        el.value = '2'
      })
      yield { name: 'option-disabled', includeRects: [await getRect()] }

      await $eval((el) => {
        el.value = '1'
      })
      yield { name: 'option-1', includeRects: [await getRect()] }

      await $eval((el) => {
        el.value = 'missing'
      })
      yield { name: 'option-missing', includeRects: [await getRect()] }
    },
  },
  {
    name: 'focus press-space',
    url: withDropdown,
    async *fn({ $eval, page }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await page.keyboard.press('Tab')
      await page.keyboard.press('Space')

      yield { name: 'open', includeRects: [await getRect()] }

      await page.keyboard.press('Space')
      yield { name: 'close', includeRects: [await getRect()] }

      await page.keyboard.press('Space')
      yield { name: 'open-again', includeRects: [await getRect()] }
    },
  },
  {
    name: 'focus press-enter',
    url: withDropdown,
    async *fn({ $eval, page }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      yield { name: 'open', includeRects: [await getRect()] }

      await page.keyboard.press('Enter')
      yield { name: 'close', includeRects: [await getRect()] }

      await page.keyboard.press('Enter')
      yield { name: 'open-again', includeRects: [await getRect()] }
    },
  },
  {
    name: 'keyboard',
    url: withDropdown,
    async *fn({ $, $eval }) {
      const getRect = () => $eval((el) => el.dropdownRect)

      await $.click()

      yield { name: 'open', includeRects: [await getRect()] }

      await $.press('ArrowDown')
      yield { name: 'down', includeRects: [await getRect()] }

      await $.press('ArrowDown')
      await $.press('ArrowRight')
      yield { name: 'down-right', includeRects: [await getRect()] }

      await $.press('ArrowUp')
      await $.press('ArrowLeft')
      yield { name: 'up-left', includeRects: [await getRect()] }
    },
  },
  {
    name: 'custom events',
    url: withDropdown,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-dropdown-change', 'X')
      await testInput('-close', 'sinch-dropdown-close')
    },
  },
  {
    name: 'custom events',
    url: withDropdown,
    async *fn({ page, isFirefox }) {
      await subscribeToEvents(page, 'sinch-dropdown-focus', 'sinch-dropdown-blur', 'sinch-dropdown-change', 'sinch-dropdown-close')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Shift+Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-dropdown-focus', detail: null },
        { type: 'sinch-dropdown-blur', detail: null },
      ])

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Enter')

      if (isFirefox) {
        expect(
          await getAllEvents(page)
        ).toEqual([
          { type: 'sinch-dropdown-focus', detail: null },
          { type: 'sinch-dropdown-change', detail: '1' },
          { type: 'sinch-dropdown-focus', detail: null },
        ])
      } else {
        expect(
          await getAllEvents(page)
        ).toEqual([
          { type: 'sinch-dropdown-focus', detail: null },
          { type: 'sinch-dropdown-blur', detail: null },
          { type: 'sinch-dropdown-change', detail: '1' },
          { type: 'sinch-dropdown-focus', detail: null },
        ])
      }
    },
  },
]))
