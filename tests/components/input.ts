import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { TSinchHelpTooltipElement } from '@sinch-engage/nectary/help-tooltip'

const shot = makeScreenshotTests('/input?width=200&label=Label', 'sinch-input')
const withValue = makeScreenshotTests('/input?width=200&label=Label&value=Input%20value', 'sinch-input')
const withPlaceholder = makeScreenshotTests('/input?width=200&label=Label&placeholder=Placeholder%20value', 'sinch-input')
const withTooltip = makeScreenshotTests('/input?width=200&label=Label&tooltip=Tooltip%20text', 'sinch-input')
const withEverything = makeScreenshotTests('/input?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value', 'sinch-input')
const checkValue = makeAccessibilityTests('/input?width=200&label=Label&value=Input%20value', 'sinch-input')

test('accessibility', checkValue(async function* () {
  yield
}))

test('value attribute', withPlaceholder(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('value', 'Input Value'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('value', ''))
  yield { name: 'empty' }
}))

test('value property', withPlaceholder(async function* ({ $eval }) {
  await $eval((el) => {
    el.value = 'Input Value'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.value = ''
  })
  yield { name: 'empty' }
}))

test('placeholder attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('placeholder', ''))
  yield { name: 'empty' }
}))

test('placeholder property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.placeholder = 'Placeholder Value'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.placeholder = ''
  })
  yield { name: 'empty' }
}))

test('tooltip', withTooltip(async function* ({ $ }) {
  await $.locator('sinch-help-tooltip').hover()

  const tooltipRect = await $.locator('sinch-help-tooltip')
    .evaluate((el) => (el as TSinchHelpTooltipElement).tooltipRect)

  yield {
    name: 'show',
    includeRects: [tooltipRect],
  }
}))

test('invalid property', withValue(async function* ({ $eval }) {
  await $eval((el) => {
    el.invalidText = 'Please fix invalid value'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.invalidText = ''
  })
  yield { name: 'empty' }
}))

test('invalid attribute', withValue(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('invalidtext', 'Please fix invalid value')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('invalidtext')
  })
  yield { name: 'empty' }
}))

test('optional property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.optionalText = 'Optional text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.optionalText = ''
  })
  yield { name: 'empty' }
}))

test('optional attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('optionaltext', 'Optional text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('optionaltext')
  })
  yield { name: 'empty' }
}))

test('additional property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.additionalText = 'Additional text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.additionalText = ''
  })
  yield { name: 'empty' }
}))

test('additional attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('additionaltext', 'Additional text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('additionaltext')
  })
  yield { name: 'empty' }
}))

test('label property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.label = 'Label text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.label = ''
  })
  yield { name: 'empty' }
}))

test('label attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('label', 'Label text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('label')
  })
  yield { name: 'empty' }
}))

test('fill', withPlaceholder(async function* ({ $, $eval }) {
  await $.focus()
  yield { name: 'focus' }

  await expect($eval((el) => el === document.activeElement)).resolves.toBe(true)

  await $.type('Filled text')
  yield { name: 'filled' }

  await expect($eval((el) => el.value)).resolves.toBe('Filled text')
}))

test('disabled property', withEverything(async function* ({ $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
}))

test('disabled attribute', withEverything(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('disabled', '')
  })
  yield { name: 'disabled' }

  await $eval((el) => {
    el.removeAttribute('disabled')
  })
  yield { name: 'enabled' }
}))

test('custom events', withValue(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-input-change', 'X')
  await testInput('focusin', 'sinch-input-focus')
  await testInput('focusout', 'sinch-input-blur')
}))

test('native events', withValue(async function* ({ $, page }) {
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
}))
