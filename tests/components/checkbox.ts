import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withFitWidth = makeScreenshotTests('/checkbox?text=Label', 'sinch-checkbox')
const withInvalid = makeScreenshotTests('/checkbox?text=Label&invalid=true', 'sinch-checkbox')
const withNarrowLabel = makeScreenshotTests('/checkbox?width=150&text=Label%20long%20long%20long%20long', 'sinch-checkbox')
const withChecked = makeScreenshotTests('/checkbox?width=100&text=Label&checked=true', 'sinch-checkbox')
const withDisabledChecked = makeScreenshotTests('/checkbox?width=100&text=Label&disabled=true&checked=true', 'sinch-checkbox')
const withDisabledInvalidChecked = makeScreenshotTests('/checkbox?width=100&text=Label&disabled=true&checked=true&invalid=true', 'sinch-checkbox')
const withDisabledIndeterminate = makeScreenshotTests('/checkbox?width=100&text=Label&disabled=true&checked=true&indeterminate=true', 'sinch-checkbox')
const withDisabledInvalidIndeterminate = makeScreenshotTests('/checkbox?width=100&text=Label&disabled=true&checked=true&indeterminate=true&invalid=true', 'sinch-checkbox')
const checkDisabledChecked = makeAccessibilityTests('/checkbox?width=100&text=Label&disabled=true&checked=true', 'sinch-checkbox')

test('accessibility', checkDisabledChecked(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.text = null
  })
  yield
}))

test('checked attribute', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('checked', ''))
  yield { name: 'checked' }

  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'unchecked' }
}))

test('checked property', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.checked = true
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.checked = false
  })
  yield { name: 'unchecked' }
}))

test('checked invalid', withInvalid(async function* ({ $eval }) {
  await $eval((el) => {
    el.checked = true
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.checked = false
  })
  yield { name: 'unchecked' }

  await $eval((el) => {
    el.checked = true
    el.indeterminate = true
  })
  yield { name: 'indeterminate' }
}))

test('focus', withFitWidth(async function* ({ $, $eval }) {
  await $.focus()

  await $eval((el) => {
    el.checked = true
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.checked = false
  })
  yield { name: 'unchecked' }
}))

test('focus invalid', withInvalid(async function* ({ $, $eval }) {
  await $.focus()

  await $eval((el) => {
    el.checked = true
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.checked = false
  })
  yield { name: 'unchecked' }
}))

test('indeterminate attribute', withChecked(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('indeterminate', ''))
  yield { name: 'line' }

  await $eval((el) => el.removeAttribute('indeterminate'))
  yield { name: 'checkmark' }
}))

test('indeterminate property', withChecked(async function* ({ $eval }) {
  await $eval((el) => {
    el.indeterminate = true
  })
  yield { name: 'line' }

  await $eval((el) => {
    el.indeterminate = false
  })
  yield { name: 'checkmark' }
}))

test('text attribute', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('text', 'Updated label'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('text', ''))
  yield { name: 'empty' }
}))

test('text property', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.text = 'Updated label'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.text = ''
  })
  yield { name: 'empty' }
}))

test('disabled property', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
}))

test('disabled attribute', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
}))

test('disabled checkmark', withDisabledChecked(async function* () {
  yield { name: 'checked' }
}))

test('disabled invalid checkmark', withDisabledInvalidChecked(async function* () {
  yield { name: 'checked' }
}))

test('disabled indeterminate', withDisabledIndeterminate(async function* () {
  yield { name: 'checked' }
}))

test('disabled invalid indeterminate', withDisabledInvalidIndeterminate(async function* () {
  yield { name: 'checked' }
}))

test('narrow', withNarrowLabel(async function* () {
  yield { name: 'clip' }
}))

test('mouse interaction', withFitWidth(async function* ({ $, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  yield { name: 'hover' }

  await page.mouse.down()
  yield { name: 'active' }

  await page.mouse.up()
  yield { name: 'hover_checked' }

  await page.mouse.down()
  yield { name: 'active_checked' }
}))

test('invalid mouse interaction', withInvalid(async function* ({ $, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  yield { name: 'hover' }

  await page.mouse.down()
  yield { name: 'active' }

  await page.mouse.up()
  yield { name: 'hover_checked' }

  await page.mouse.down()
  yield { name: 'active_checked' }
}))

test('custom events', withFitWidth(async function* ({ $, page }) {
  const testCheckbox = testCustomEvent(page, $)

  await testCheckbox('change', 'sinch-checkbox-change', true)
  await testCheckbox('focusin', 'sinch-checkbox-focus')
  await testCheckbox('focusout', 'sinch-checkbox-blur')
}))

test('native events', withFitWidth(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-checkbox-change', 'sinch-checkbox-focus', 'sinch-checkbox-blur')

  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-checkbox-focus', detail: null },
    { type: 'sinch-checkbox-blur', detail: null },
  ])

  await $.click()
  await $.click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-checkbox-focus', detail: null },
    { type: 'sinch-checkbox-change', detail: true },
    { type: 'sinch-checkbox-change', detail: false },
  ])
}))
