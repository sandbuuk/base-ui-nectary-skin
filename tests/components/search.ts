import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/search?width=200'
const withValue = '/search?width=200&label=Label&value=Input%20value'
const withPlaceholder = '/search?width=200&label=Label&placeholder=Placeholder%20value'
const checkValue = makeAccessibilityTests('/search?width=200&label=Label&value=Input%20value', 'sinch-search')

test('accessibility', checkValue(async function* () {
  yield
}))

test('search screenshots', runScreenshotTests('sinch-search', [
  {
    name: 'value attribute',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', 'Input Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'value property',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.value = 'Input Value'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'placeholder attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('placeholder', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'placeholder property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.placeholder = 'Placeholder Value'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.placeholder = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'label property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.label = 'Label text'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.label = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'label attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('label', 'Label text')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('label')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'fill',
    url: withPlaceholder,
    async *fn({ $, $eval, page }) {
      await page.keyboard.press('Tab')
      yield { name: 'focus' }

      await $.type('Fill')
      yield { name: 'filled' }

      await expect($eval((el) => el.value)).resolves.toBe('Fill')
    },
  },
  {
    name: 'clear',
    url: withValue,
    async *fn({ page }) {
      await page.keyboard.press('Tab')

      yield { name: 'initial' }

      await page.keyboard.press('Tab')

      yield { name: 'focused' }

      await page.keyboard.press('Enter')

      yield { name: 'cleared' }
    },
  },
  {
    name: 'maxvisibleitems attribute',
    url: withValue,
    async *fn({ page, $eval }) {
      await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
      await page.keyboard.press('Tab')

      yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }

      await $eval((el) => el.setAttribute('maxvisibleitems', ''))

      yield { name: 'empty', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'dropdown',
    url: withValue,
    async *fn({ $eval, page }) {
      await page.keyboard.press('Tab')

      yield { name: 'input-focus', includeRects: [await $eval((el) => el.dropdownRect)] }

      await page.keyboard.press('Shift+Tab')

      yield { name: 'input-blur', includeRects: [await $eval((el) => el.dropdownRect)] }
    },
  },
  {
    name: 'keyboard',
    url: withValue,
    async *fn({ $eval, page }) {
      await page.keyboard.press('Tab')

      const rect = await $eval((el) => el.dropdownRect)

      yield { name: 'open', includeRects: [rect] }

      await page.keyboard.press('ArrowDown')
      yield { name: 'down', includeRects: [rect] }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      yield { name: 'down-down', includeRects: [rect] }

      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('ArrowUp')
      yield { name: 'up-up', includeRects: [rect] }
    },
  },
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-search-change', 'X')
      await testInput('focusin', 'sinch-search-focus')
      await testInput('focusout', 'sinch-search-blur')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-search-focus', 'sinch-search-blur', 'sinch-search-change')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-search-focus', detail: null },
        { type: 'sinch-search-blur', detail: null },
      ])

      // Necessary to normalize "type" behaviour
      await $.click()
      await page.keyboard.press('End')
      await $.type('X')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-search-focus', detail: null },
        { type: 'sinch-search-change', detail: 'Input valueX' },
      ])
    },
  },
]))
