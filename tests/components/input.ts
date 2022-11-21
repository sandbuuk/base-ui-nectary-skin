import { expect, test } from '@playwright/test'
import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/input?width=200'
const withValue = '/input?width=200&value=Input%20value'
const withPlaceholder = '/input?width=200&placeholder=Placeholder%20value'
const withEverything = '/input?width=300&invalid=true&placeholder=Placeholder%20value&value=Input%20value&left=true&right=true&icon=true'
const withEverythingInvalid = '/input?width=300&invalid=true&placeholder=Placeholder%20value&value=Input%20value&left=true&right=true&icon=true'
const checkValue = makeAccessibilityTests('/input?width=200&value=Input%20value', 'sinch-input')

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

test('input screenshots', runScreenshotTests('sinch-input', [
  {
    name: 'size',
    url: withEverything,
    async *fn({ $eval }) {
      for (const size of sizeValues) {
        await $eval((el, value) => el.setAttribute('size', value), size)
        yield { name: size }
      }
    },
  },
  {
    name: 'type',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'password'))
      yield { name: 'password' }

      await $eval((el) => el.setAttribute('type', 'text'))
      yield { name: 'text' }
    },
  },
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
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('placeholder', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'fill',
    url: withPlaceholder,
    async *fn({ $, $eval, page }) {
      await page.keyboard.press('Tab')
      await $.type('Filled text')

      await expect($eval((el) => el.value)).resolves.toBe('Filled text')
    },
  },
  {
    name: 'focus',
    url: withEverything,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1' }

      await page.keyboard.press('Tab')
      yield { name: '2' }

      await page.keyboard.press('Tab')
      yield { name: '3' }

      await page.keyboard.press('Tab')
      yield { name: '4' }
    },
  },
  {
    name: 'disabled',
    url: withEverythingInvalid,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('disabled', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('disabled')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'invalid',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('invalid', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('invalid')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'slots',
    url: withEverything,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-input-change', 'X')
      await testInput('-focus', 'sinch-input-focus')
      await testInput('-blur', 'sinch-input-blur')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-input-focus', 'sinch-input-blur', 'sinch-input-change')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-input-focus', detail: null },
        { type: 'sinch-input-blur', detail: null },
      ])

      const bb = await centerBB($)

      await page.mouse.click(bb.x, bb.y)
      await page.keyboard.press('End')
      await $.type('X')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-input-focus', detail: null },
        { type: 'sinch-input-change', detail: 'Input valueX' },
      ])
    },
  },
]))
