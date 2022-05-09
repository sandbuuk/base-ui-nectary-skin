import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = makeScreenshotTests('/icon-button', 'sinch-icon-button')
const withSpinner = makeScreenshotTests('/icon-button?spinner=true', 'sinch-icon-button')
const withSpinnerDisabled = makeScreenshotTests('/icon-button?spinner=true&disabled=true', 'sinch-icon-button')
const checkShot = makeAccessibilityTests('/icon-button', 'sinch-icon-button')

test('accessibility', checkShot(async function* () {
  yield
}))

test('focus', shot(async function* ({ $ }) {
  await $.focus()
  yield { name: 'shot' }
}))

test('disabled property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
}))

test('disabled attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
}))

test('small property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.small = true
  })
  yield { name: 'true' }

  await $eval((el) => {
    el.small = false
  })
  yield { name: 'false' }
}))

test('small attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('small', ''))
  yield { name: 'true' }

  await $eval((el) => el.removeAttribute('small'))
  yield { name: 'false' }
}))

test('mouse interaction', shot(async function* ({ $, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  yield { name: 'hover' }

  await page.mouse.down()
  yield { name: 'active' }
}))

test('spinner', withSpinner(async function* ({ $, page }) {
  const rect = (await $.boundingBox())!

  yield { name: 'shot' }

  await page.mouse.move(rect.x + 5, rect.y + 15)
  yield { name: 'hover' }

  await page.mouse.down()
  yield { name: 'active' }
}))

test('spinner disabled', withSpinnerDisabled(async function* () {
  yield { name: 'shot' }
}))

test('custom events', shot(async function* ({ $, page }) {
  const testButton = testCustomEvent(page, $)

  await testButton('click', 'sinch-icon-button-click')
  await testButton('focusin', 'sinch-icon-button-focus')
  await testButton('focusout', 'sinch-icon-button-blur')
}))

test('native events', shot(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-icon-button-focus', 'sinch-icon-button-blur', 'sinch-icon-button-click')
  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-icon-button-focus', detail: null },
    { type: 'sinch-icon-button-blur', detail: null },
  ])

  await $.click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-icon-button-focus', detail: null },
    { type: 'sinch-icon-button-click', detail: null },
  ])
}))
