import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/dropdown'
const withWideContent = '/dropdown?width=400'
const withMaxItems = '/dropdown?maxvisibleitems=2'
const check = makeAccessibilityTests('/dropdown?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1', 'sinch-dropdown')

test('accessibility', check(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('dropdown screenshots', runScreenshotTests('sinch-dropdown', [
  {
    name: 'orientation attribute',
    url: shot,
    async *fn({ $, $eval, page }) {
      await $eval((el) => el.setAttribute('orientation', 'top-left'))
      await $.click()
      yield { name: 'top-left', includeRects: [await $eval((el) => el.dropdownRect)] }
      await page.mouse.click(0, 0)

      await $eval((el) => el.setAttribute('orientation', 'top-right'))
      await $.click()
      yield { name: 'top-right', includeRects: [await $eval((el) => el.dropdownRect)] }
      await page.mouse.click(0, 0)

      await $eval((el) => el.setAttribute('orientation', 'bottom-left'))
      await $.click()
      yield { name: 'bottom-left', includeRects: [await $eval((el) => el.dropdownRect)] }
      await page.mouse.click(0, 0)

      await $eval((el) => el.setAttribute('orientation', 'bottom-right'))
      await $.click()
      yield { name: 'bottom-right', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'orientation property',
    url: shot,
    async *fn({ $, $eval, page }) {
      await $eval((el) => {
        el.orientation = 'top-left'
      })
      await $.click()
      yield { name: 'top-left', includeRects: [await $eval((el) => el.dropdownRect)] }
      await page.mouse.click(0, 0)

      await $eval((el) => {
        el.orientation = 'top-right'
      })
      await $.click()
      yield { name: 'top-right', includeRects: [await $eval((el) => el.dropdownRect)] }
      await page.mouse.click(0, 0)

      await $eval((el) => {
        el.orientation = 'bottom-left'
      })
      await $.click()
      yield { name: 'bottom-left', includeRects: [await $eval((el) => el.dropdownRect)] }
      await page.mouse.click(0, 0)

      await $eval((el) => {
        el.orientation = 'bottom-right'
      })
      await $.click()
      yield { name: 'bottom-right', includeRects: [await $eval((el) => el.dropdownRect)] }
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
    name: 'disabled attribute',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      await $.click()
      yield { name: 'click disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.removeAttribute('disabled'))
      await $.click()
      yield { name: 'click enabled', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'disabled property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.disabled = true
      })
      await $.click()
      yield { name: 'click disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.disabled = false
      })
      await $.click()
      yield { name: 'click enabled', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'value attribute',
    url: shot,
    async *fn({ $, $eval }) {
      // Open dropdown once
      await $.click()

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'option-4', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'option-3', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'option-disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'option-1', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'value property',
    url: shot,
    async *fn({ $, $eval }) {
      // Open dropdown once
      await $.click()

      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'option-empty', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.value = '4'
      })
      yield { name: 'option-4', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.value = '3'
      })
      yield { name: 'option-3', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.value = '2'
      })
      yield { name: 'option-disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.value = '1'
      })
      yield { name: 'option-1', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => {
        el.value = 'missing'
      })
      yield { name: 'option-missing', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'wide target',
    url: withWideContent,
    async *fn({ $, $eval }) {
      await $.click()

      yield { name: 'shot', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'focus press-space',
    url: shot,
    async *fn({ $eval, page }) {
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
    url: shot,
    async *fn({ $eval, page }) {
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
    url: shot,
    async *fn({ $, $eval }) {
      await $.click()

      yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $.press('ArrowDown')
      yield { name: 'down', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $.press('ArrowDown')
      await $.press('ArrowRight')
      yield { name: 'down-right', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $.press('ArrowUp')
      await $.press('ArrowLeft')
      yield { name: 'up-left', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
]))

test('dropdown events', runScreenshotTests('sinch-dropdown', [
  {
    name: 'custom evants',
    url: shot,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-dropdown-change', 'X')
      await testInput('focusin', 'sinch-dropdown-focus')
      await testInput('focusout', 'sinch-dropdown-blur')
    },
  },
  {
    name: 'custom evants',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-dropdown-focus', 'sinch-dropdown-blur', 'sinch-dropdown-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-dropdown-focus', detail: null },
        { type: 'sinch-dropdown-blur', detail: null },
      ])

      // await $.click()
      // await page.keyboard.press('Enter')

      // expect(
      //   await getAllEvents(page)
      // ).toEqual([
      //   // button focus
      //   { type: 'sinch-dropdown-focus', detail: null },
      //   // button blur
      //   { type: 'sinch-dropdown-blur', detail: null },
      //   // listbox focus
      //   { type: 'sinch-dropdown-focus', detail: null },
      //   { type: 'sinch-dropdown-change', detail: '1' },
      //   // listbox blur
      //   { type: 'sinch-dropdown-blur', detail: null },
      //   // button focus
      //   { type: 'sinch-dropdown-focus', detail: null },
      // ])
    },
  },
]))
