import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'
import type { TSinchHelpTooltipElement } from '@sinch-engage/nectary/help-tooltip/types'

const shot = '/field?width=200&label=Label'
const withValue = '/field?width=200&label=Label&value=Input%20value'
const withTooltip = '/field?width=200&label=Label&tooltip=Tooltip%20text'
const withEverything = '/field?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value'
const checkValue = makeAccessibilityTests('/field?width=200&label=Label&value=Input%20value', 'sinch-field')

test('accessibility', checkValue(async function* () {
  yield
}))

test('field screenshots', runScreenshotTests('sinch-field', [
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
]))
