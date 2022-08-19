import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { TSinchHelpTooltipElement } from '@sinch-engage/nectary/help-tooltip/types'

const withEmpty = '/textarea?width=200&label=Label'
const withValue = '/textarea?width=200&label=Label&value=Input%20value'
const withPlaceholder = '/textarea?width=200&label=Label&placeholder=Placeholder%20value'
const withTooltip = '/textarea?width=200&label=Label&tooltip=Tooltip%20text'
const withEverything = '/textarea?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value'
const checkTextareaWithEverything = makeAccessibilityTests('/textarea?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value', 'sinch-textarea')

test('accessibility', checkTextareaWithEverything(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.label = ''
  })
  yield
}))

test('textarea screenshots', runScreenshotTests('sinch-textarea', [
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
    url: withEmpty,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('placeholder', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'placeholder property',
    url: withEmpty,
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
    url: withEmpty,
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
    url: withEmpty,
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
    url: withEmpty,
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
    url: withEmpty,
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
    url: withEmpty,
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
    url: withEmpty,
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
    async *fn({ $, page }) {
      await page.keyboard.press('Tab')
      yield { name: 'focus' }

      await $.type('Filled text')
      yield { name: 'filled' }
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
    name: 'resizable attribute',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('resizable', ''))
      yield { name: 'enabled' }
    },
  },
  {
    name: 'resizable property',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.resizable = true
      })
      yield { name: 'enabled' }
    },
  },
  {
    name: 'rows attribute',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '1'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'rows property',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.rows = 1
      })
      yield { name: 'updated' }
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
      await subscribeToEvents(page, 'sinch-textarea-focus', 'sinch-textarea-blur', 'sinch-textarea-change')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-textarea-focus', detail: null },
        { type: 'sinch-textarea-blur', detail: null },
      ])

      const bb = centerRect(await $.boundingBox())

      await page.mouse.click(bb.x, bb.y)
      await page.keyboard.press('End')
      await $.type('X')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-textarea-focus', detail: null },
        { type: 'sinch-textarea-change', detail: 'Input valueX' },
      ])
    },
  },
]))
