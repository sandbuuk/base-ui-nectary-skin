import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const contentWidth = makeScreenshotTests('/toggle?text=Label', 'sinch-toggle')
const narrowWidth = makeScreenshotTests('/toggle?width=150&text=Label%20long%20long%20long%20long', 'sinch-toggle')
const checked = makeScreenshotTests('/toggle?text=Label&checked=true', 'sinch-toggle')
const disabled = makeScreenshotTests('/toggle?text=Label&disabled=true&checked=true', 'sinch-toggle')
const disabledLabeled = makeScreenshotTests('/toggle?text=Label&disabled=true&checked=true&labeled=true', 'sinch-toggle')
const disabledSmall = makeScreenshotTests('/toggle?text=Label&disabled=true&checked=true&small=true', 'sinch-toggle')
const checkToggle = makeAccessibilityTests('/toggle?text=Label', 'sinch-toggle')

test('accessibility', checkToggle(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.text = null
  })
  yield
}))

test('checked attribute', contentWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('checked', ''))
  yield { name: 'checked' }

  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'unchecked' }
}))

test('checked property', contentWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.checked = true
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.checked = false
  })
  yield { name: 'unchecked' }
}))

test('small attribute', checked(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('small', ''))
  yield { name: 'true' }

  await $eval((el) => el.removeAttribute('small'))
  yield { name: 'false' }
}))

test('small property', checked(async function* ({ $eval }) {
  await $eval((el) => {
    el.small = true
  })
  yield { name: 'true' }

  await $eval((el) => {
    el.small = false
  })
  yield { name: 'false' }
}))

test('labeled attribute', checked(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('labeled', ''))
  yield { name: 'on' }

  // Uncheck toggle to show "off" label
  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'off' }

  await $eval((el) => el.removeAttribute('labeled'))
  yield { name: 'no-labels' }
}))

test('labeled property', checked(async function* ({ $eval }) {
  await $eval((el) => {
    el.labeled = true
  })
  yield { name: 'on' }

  // Uncheck toggle to show "off" label
  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'off' }

  await $eval((el) => {
    el.labeled = false
  })
  yield { name: 'no-labels' }
}))

test('text attribute', contentWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('text', 'Updated label'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('text', ''))
  yield { name: 'empty' }
}))

test('text property', contentWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.text = 'Updated label'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.text = ''
  })
  yield { name: 'empty' }
}))

test('disabled property', contentWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
}))

test('disabled attribute', contentWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
}))

test('disabled small', disabledSmall(async function* ({ $eval }) {
  yield { name: 'checked' }
  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'unchecked' }
}))

test('disabled labeled', disabledLabeled(async function* ({ $eval }) {
  yield { name: 'checked' }
  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'unchecked' }
}))

test('disabled colors', disabled(async function* ({ $eval }) {
  yield { name: 'checked' }
  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'unchecked' }
}))

test('narrow', narrowWidth(async function* () {
  yield { name: 'clip' }
}))

test('custom events', contentWidth(async function* ({ $, page }) {
  const testCheckbox = testCustomEvent(page, $)

  await testCheckbox('change', 'sinch-toggle-change', true)
  await testCheckbox('focusin', 'sinch-toggle-focus')
  await testCheckbox('focusout', 'sinch-toggle-blur')
}))

test('native events', contentWidth(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-toggle-change', 'sinch-toggle-focus', 'sinch-toggle-blur')

  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-toggle-focus', detail: null },
    { type: 'sinch-toggle-blur', detail: null },
  ])

  await $.click()
  await $.click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-toggle-focus', detail: null },
    { type: 'sinch-toggle-change', detail: true },
    { type: 'sinch-toggle-change', detail: false },
  ])
}))
