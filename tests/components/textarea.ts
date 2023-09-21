import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withEmpty = '/textarea?width=200'
const withValue = '/textarea?width=200&value=Input%20value'
const withPlaceholder = '/textarea?width=200&placeholder=Placeholder%20value'
const withEverything = '/textarea?width=200&invalid=true&placeholder=Placeholder%20value&value=Input%20value'
const withBottom = '/textarea?width=400&rows=1&bottom=true&placeholder=Placeholder'
const checkTextareaWithEverything = makeAccessibilityTests('/textarea?width=200&invalid=true&placeholder=Placeholder%20value&value=Input%20value', 'sinch-textarea')

test('accessibility', checkTextareaWithEverything({
  async *fn() {
    yield
  },
}))

test('textarea screenshots', runScreenshotTests('sinch-textarea', [
  {
    name: 'value',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', 'Input Value'))
      yield { name: 'updated' }
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'placeholder',
    url: withEmpty,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('placeholder', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'invalid',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('invalid', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('invalid'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'fill',
    url: withPlaceholder,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.type('First line')
      await page.keyboard.press('Enter')
      await page.keyboard.type('Second line')
      yield { name: 'shot' }
    },
  },
  {
    name: 'disabled',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'resizable',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('resizable', ''))
      yield { name: 'enabled' }
    },
  },
  {
    name: 'rows',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '1'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'bottom slot',
    url: withBottom,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-textarea-change', 'X')
      await testInput('-focus', 'sinch-textarea-focus')
      await testInput('-blur', 'sinch-textarea-blur')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $, page }) {
      const bb = await centerBB($)

      await subscribeToEvents(page, 'sinch-textarea-focus', 'sinch-textarea-blur', 'sinch-textarea-change')
      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      await page.mouse.click(bb.x, bb.y)
      await page.keyboard.press('End')
      await $.type('X')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-textarea-focus', detail: null },
        { type: 'sinch-textarea-blur', detail: null },
        { type: 'sinch-textarea-focus', detail: null },
        { type: 'sinch-textarea-change', detail: 'Input valueX' },
      ])
    },
  },
]))
