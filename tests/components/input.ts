import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/input?width=200'
const withIcon = '/input?width=200&value=Input%20value&icon=true'
const withValue = '/input?width=200&value=Input%20value'
const withPlaceholder = '/input?width=200&placeholder=Placeholder%20value'
const withEverything = '/input?width=200&invalid=true&placeholder=Placeholder%20value&value=Input%20value'
const withRightButton = '/input?width=200&value=Input%20value%20long%20long&right=true'
const checkValue = makeAccessibilityTests('/input?width=200&value=Input%20value', 'sinch-input')

test('accessibility', checkValue(async function* () {
  yield
}))

test('input screenshots', runScreenshotTests('sinch-input', [
  {
    name: 'type attribute',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'password'))
      yield { name: 'password' }

      await $eval((el) => el.setAttribute('type', 'text'))
      yield { name: 'text' }

      await $eval((el) => el.setAttribute('type', ''))
      yield { name: 'empty' }

      await $eval((el) => el.setAttribute('type', 'invalid'))
      yield { name: 'invalid' }
    },
  },
  {
    name: 'type property',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.type = 'password'
      })
      yield { name: 'password' }

      await $eval((el) => {
        el.type = 'text'
      })
      yield { name: 'text' }

      await $eval((el) => {
        el.type = '' as any
      })
      yield { name: 'empty' }

      await $eval((el) => {
        el.type = 'invalid' as any
      })
      yield { name: 'invalid' }
    },
  },
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
    name: 'fill',
    url: withPlaceholder,
    async *fn({ $, $eval, page }) {
      await page.keyboard.press('Tab')
      yield { name: 'focus' }

      await $.type('Filled text')
      yield { name: 'filled' }

      await expect($eval((el) => el.value)).resolves.toBe('Filled text')
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
    name: 'disabled attribute',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('disabled', '')
      })
      yield { name: 'disabled' }

      await $eval((el) => {
        el.removeAttribute('disabled')
      })
      yield { name: 'enabled' }
    },
  },
  {
    name: 'invalid property',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.invalid = true
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.invalid = false
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'invalid attribute',
    url: withValue,
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
    name: 'right slot',
    url: withRightButton,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'icon slot',
    url: withIcon,
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

      const bb = centerRect(await $.boundingBox())

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
