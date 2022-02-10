import { expect, test } from '@playwright/test'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../utils'

const withEmpty = makeScreenshotTests('/textarea?width=200&label=Label', 'sinch-textarea')
const withValue = makeScreenshotTests('/textarea?width=200&label=Label&value=Input%20value', 'sinch-textarea')
const withPlaceholder = makeScreenshotTests('/textarea?width=200&label=Label&placeholder=Placeholder%20value', 'sinch-textarea')
const withTooltip = makeScreenshotTests('/textarea?width=200&label=Label&tooltip=Tooltip%20text', 'sinch-textarea')
const withEverything = makeScreenshotTests('/textarea?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value', 'sinch-textarea')

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

test('placeholder attribute', withEmpty(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('placeholder', ''))
  yield { name: 'empty' }
}))

test('placeholder property', withEmpty(async function* ({ $eval }) {
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
  await $.locator('sinch-input-tooltip').hover()

  yield {
    name: 'show',
    include: [$.locator('sinch-input-tooltip #text')],
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

test('optional property', withEmpty(async function* ({ $eval }) {
  await $eval((el) => {
    el.optionalText = 'Optional text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.optionalText = ''
  })
  yield { name: 'empty' }
}))

test('optional attribute', withEmpty(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('optionaltext', 'Optional text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('optionaltext')
  })
  yield { name: 'empty' }
}))

test('additional property', withEmpty(async function* ({ $eval }) {
  await $eval((el) => {
    el.additionalText = 'Additional text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.additionalText = ''
  })
  yield { name: 'empty' }
}))

test('additional attribute', withEmpty(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('additionaltext', 'Additional text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('additionaltext')
  })
  yield { name: 'empty' }
}))

test('label property', withEmpty(async function* ({ $eval }) {
  await $eval((el) => {
    el.label = 'Label text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.label = ''
  })
  yield { name: 'empty' }
}))

test('label attribute', withEmpty(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('label', 'Label text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('label')
  })
  yield { name: 'empty' }
}))

test('fill', withPlaceholder(async function* ({ $ }) {
  await $.focus()
  yield { name: 'focus' }

  await $.type('Filled text')
  yield { name: 'filled' }
}))

test('disabled property', withEverything(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }
  await expect($.locator('textarea').isDisabled()).resolves.toBe(true)

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
  await expect($.locator('textarea').isDisabled()).resolves.toBe(false)
}))

test('disabled attribute', withEverything(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.setAttribute('disabled', '')
  })
  yield { name: 'disabled' }
  await expect($.locator('textarea').isDisabled()).resolves.toBe(true)

  await $eval((el) => {
    el.removeAttribute('disabled')
  })
  yield { name: 'enabled' }
  await expect($.locator('textarea').isDisabled()).resolves.toBe(false)
}))

test('custom events', withValue(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-textarea-change', 'X')
  await testInput('focusin', 'sinch-textarea-focus')
  await testInput('focusout', 'sinch-textarea-blur')
}))

test('native events', withValue(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-textarea-focus', 'sinch-textarea-blur', 'sinch-textarea-change')
  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-textarea-focus', detail: null },
    { type: 'sinch-textarea-blur', detail: null },
  ])

  // Necessary to normalize "type" behaviour
  await $.click()
  await $.type('X')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-textarea-focus', detail: null },
    { type: 'sinch-textarea-change', detail: 'Input valueX' },
  ])
}))
