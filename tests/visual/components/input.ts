import { expect, test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests('/input?width=200&label=Label', 'sinch-input')
const withValue = makeScreenshotTests('/input?width=200&label=Label&value=Input%20value', 'sinch-input')
const withPlaceholder = makeScreenshotTests('/input?width=200&label=Label&placeholder=Placeholder%20value', 'sinch-input')
const withTooltip = makeScreenshotTests('/input?width=200&label=Label&tooltip=Tooltip%20text', 'sinch-input')
const withEverything = makeScreenshotTests('/input?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=Input%20value', 'sinch-input')

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

test.only('fill', shot(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.focus();
  })
  // Would be nice to verify focus some how. But document.activeElement
  // won't reach into the shadow dom. For now just verify that the custom
  // element is fucused.
  await expect($eval((el) => {
    return el === document.activeElement
  })).resolves.toBe(true)
  yield { name: 'focus' }

  const text = 'Filled text'
  await $eval((el, t) => {
    el.value = t
  }, text)
  await expect($.locator('input').inputValue()).resolves.toBe(text)
  yield { name: 'filled' }
}))

test('disabled property', withEverything(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }
  await expect($.locator('input').isDisabled()).resolves.toBe(true)

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
  await expect($.locator('input').isDisabled()).resolves.toBe(false)
}))

test('disabled attribute', withEverything(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.setAttribute('disabled', '')
  })
  yield { name: 'disabled' }
  await expect($.locator('input').isDisabled()).resolves.toBe(true)

  await $eval((el) => {
    el.removeAttribute('disabled')
  })
  yield { name: 'enabled' }
  await expect($.locator('input').isDisabled()).resolves.toBe(false)
}))
