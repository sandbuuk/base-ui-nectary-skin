import { expect, test } from '@playwright/test'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withEmptyRange = '/pagination?value=1'
const withShortRange = '/pagination?max=3'
const withMidRange = '/pagination?value=5&max=9'
const withHugeRange = '/pagination?value=99999&max=99999'
const withLargeRange = '/pagination?value=50&max=100'
const withUncontrolled = '/pagination?value=10&max=20&uncontrolled=true'

test('pagination screenshots', runScreenshotTests('sinch-pagination', [
  {
    name: 'value attribute',
    url: withShortRange,
    async *fn({ $eval }) {
      yield { name: 'missing' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'value property',
    url: withShortRange,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.value = 2
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.value = 1000
      })
      yield { name: 'over range' }

      await $eval((el) => {
        el.value = -1
      })
      yield { name: 'negative' }
    },
  },
  {
    name: 'max attribute',
    url: withEmptyRange,
    async *fn({ $eval }) {
      yield { name: 'missing' }

      await $eval((el) => el.setAttribute('max', '5'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('max', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'max property',
    url: withEmptyRange,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.max = 3
      })
      yield { name: 'short' }

      await $eval((el) => {
        el.max = 1000
      })
      yield { name: 'large' }

      await $eval((el) => {
        el.max = -1
      })
      yield { name: 'negative' }
    },
  },
  {
    name: 'left click',
    url: withMidRange,
    async *fn({ $ }) {
      const $left = $.locator('#left')

      yield { name: 'begin' }

      await $left.click()
      yield { name: 'left-1' }

      await $left.click()
      yield { name: 'left-2' }

      await $left.click()
      await $left.click()
      yield { name: 'left-4' }
    },
  },
  {
    name: 'right click',
    url: withMidRange,
    async *fn({ $ }) {
      const $right = $.locator('#right')

      yield { name: 'begin' }

      await $right.click()
      yield { name: 'right-1' }

      await $right.click()
      yield { name: 'right-2' }

      await $right.click()
      await $right.click()
      yield { name: 'right-4' }
    },
  },
  {
    name: 'first last click',
    url: withLargeRange,
    async *fn({ $ }) {
      const $left = $.locator('button').nth(1)
      const $right = $.locator('button').nth(7)

      await $left.click()
      yield { name: 'first' }

      await $right.click()
      yield { name: 'last' }
    },
  },
  {
    name: 'middle click',
    url: withLargeRange,
    async *fn({ $ }) {
      const $left = $.locator('button').nth(3)
      const $right = $.locator('button').nth(5)

      await $left.click()
      yield { name: 'left' }

      await $right.click()
      await $right.click()
      yield { name: 'right' }
    },
  },
  {
    name: 'dots click',
    url: withMidRange,
    async *fn({ $ }) {
      const $left = $.locator('button').nth(2)
      const $right = $.locator('button').nth(6)

      await $left.click()
      yield { name: 'left' }

      await $right.click()
      yield { name: 'right' }
    },
  },
  {
    name: 'long text',
    url: withHugeRange,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withUncontrolled,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-pagination-change', 10)
      await testInput('focusin', 'sinch-pagination-focus')
      await testInput('focusout', 'sinch-pagination-blur')
    },
  },
  {
    name: 'native events',
    url: withUncontrolled,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-pagination-focus', 'sinch-pagination-blur', 'sinch-pagination-change')

      await $.focus()
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-pagination-focus', detail: null },
        { type: 'sinch-pagination-blur', detail: null },
      ])

      await $.locator('#left').click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-pagination-focus', detail: null },
        { type: 'sinch-pagination-change', detail: 9 },
      ])

      await $.locator('#right').click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-pagination-change', detail: 11 },
      ])
    },
  },
]))
