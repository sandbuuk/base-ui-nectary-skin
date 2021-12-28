import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests('/input?width=200&label=Label', 'sinch-input')
const withValue = makeScreenshotTests('/input?width=200&label=Label&value=Input%20value', 'sinch-input')
const withPlaceholder = makeScreenshotTests('/input?width=200&label=Label&placeholder=Placeholder%20value', 'sinch-input')
const withTooltip = makeScreenshotTests('/input?width=200&label=Label&tooltip=Tooltip%20text', 'sinch-input')

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

test('fill', shot(async function* ({ $ }) {
  const $input = $.locator('input')

  await $input.focus()
  yield { name: 'focus' }

  await $input.fill('Filled text')
  yield { name: 'filled' }
}))
