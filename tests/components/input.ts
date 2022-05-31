import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { TSinchHelpTooltipElement } from '@sinch-engage/nectary/help-tooltip'

const shot = '/input?width=200&label=Label'
const withValue = '/input?width=200&label=Label&value=Input%20value'
const withPlaceholder = '/input?width=200&label=Label&placeholder=Placeholder%20value'
const withTooltip = '/input?width=200&label=Label&tooltip=Tooltip%20text'
const withEverything = '/input?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value'
const checkValue = makeAccessibilityTests('/input?width=200&label=Label&value=Input%20value', 'sinch-input')

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
    name: 'invalid property',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.invalidText = 'Please fix invalid value'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.invalidText = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'invalid attribute',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('invalidtext', 'Please fix invalid value')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('invalidtext')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'optional property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.optionalText = 'Optional text'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.optionalText = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'optional attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('optionaltext', 'Optional text')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('optionaltext')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'additional property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.additionalText = 'Additional text'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.additionalText = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'additional attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('additionaltext', 'Additional text')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.removeAttribute('additionaltext')
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
    async *fn({ $, $eval }) {
      await $.focus()
      yield { name: 'focus' }

      await expect($eval((el) => el === document.activeElement)).resolves.toBe(true)

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
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-input-change', 'X')
      await testInput('focusin', 'sinch-input-focus')
      await testInput('focusout', 'sinch-input-blur')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-input-focus', 'sinch-input-blur', 'sinch-input-change')
      await $.focus()
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-input-focus', detail: null },
        { type: 'sinch-input-blur', detail: null },
      ])

      // Necessary to normalize "type" behaviour
      await $.click()
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
