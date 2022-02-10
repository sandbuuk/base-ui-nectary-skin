import { expect, test } from '@playwright/test'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../utils'

const withWideWidth = makeScreenshotTests('/button?width=200&type=primary&text=Button&icon=true', 'sinch-button')
const withFitWidth = makeScreenshotTests('/button?type=primary&text=Button&icon=true', 'sinch-button')
const withNarrowWidth = makeScreenshotTests('/button?width=110&type=primary&icon=true&text=Button%text%20long%20long%20long', 'sinch-button')
const withDisabled = makeScreenshotTests('/button?type=primary&text=Button&disabled=true&icon=true', 'sinch-button')
const withSmall = makeScreenshotTests('/button?type=primary&text=Button&small=true&icon=true', 'sinch-button')
const withSpinner = makeScreenshotTests('/button?type=primary&text=Button&spinner=true', 'sinch-button')
const withSpinnerDisabled = makeScreenshotTests('/button?type=primary&text=Button&spinner=true&disabled=true', 'sinch-button')
const withSpinnerSmall = makeScreenshotTests('/button?type=primary&text=Button&spinner=true&small=true', 'sinch-button')

test('type attribute', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive' }
}))

test('type property', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.type = 'primary'
  })
  yield { name: 'primary' }

  await $eval((el) => {
    el.type = 'secondary'
  })
  yield { name: 'secondary' }

  await $eval((el) => {
    el.type = 'cta'
  })
  yield { name: 'cta' }

  await $eval((el) => {
    el.type = 'destructive'
  })
  yield { name: 'destructive' }
}))

test('small type', withSmall(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive' }
}))

test('disabled type', withDisabled(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive' }
}))

test('focus', withFitWidth(async function* ({ $, $eval }) {
  await $.focus()
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive' }
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary' }
}))

test('text attribute', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('text', 'Updated Button'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('text', ''))
  yield { name: 'empty' }
}))

test('text property', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.text = 'Updated Button'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.text = ''
  })
  yield { name: 'empty' }
}))

test('disabled property', withFitWidth(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }
  await expect($.locator('button').isDisabled()).resolves.toBe(true)

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
  await expect($.locator('button').isDisabled()).resolves.toBe(false)
}))

test('disabled attribute', withFitWidth(async function* ({ $, $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }
  await expect($.locator('button').isDisabled()).resolves.toBe(true)

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
  await expect($.locator('button').isDisabled()).resolves.toBe(false)
}))

test('small property', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.small = true
  })
  yield { name: 'on' }

  await $eval((el) => {
    el.small = false
  })
  yield { name: 'off' }
}))

test('small attribute', withFitWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('small', ''))
  yield { name: 'on' }

  await $eval((el) => el.removeAttribute('small'))
  yield { name: 'off' }
}))

test('narrow', withNarrowWidth(async function* ({ $eval }) {
  yield { name: 'normal' }
  await $eval((el) => el.setAttribute('small', ''))
  yield { name: 'small' }
}))

test('wide', withWideWidth(async function* () {
  yield { name: 'shot' }
}))

test('mouse interaction', withFitWidth(async function* ({ $, $eval, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary-hover' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary-hover' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta-hover' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive-hover' }

  await page.mouse.down()
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary-active' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary-active' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta-active' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive-active' }
}))

test('spinner', withSpinner(async function* ({ $, $eval, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary-hover' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary-hover' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta-hover' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive-hover' }

  await page.mouse.down()
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary-active' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary-active' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta-active' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive-active' }
}))

test('spinner disabled', withSpinnerDisabled(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'primary'))
  yield { name: 'primary' }
  await $eval((el) => el.setAttribute('type', 'secondary'))
  yield { name: 'secondary' }
  await $eval((el) => el.setAttribute('type', 'cta'))
  yield { name: 'cta' }
  await $eval((el) => el.setAttribute('type', 'destructive'))
  yield { name: 'destructive' }
}))

test('spinner small', withSpinnerSmall(async function* () {
  yield { name: 'shot' }
}))

test('custom events', withFitWidth(async function* ({ $, page }) {
  const testButton = testCustomEvent(page, $)

  await testButton('click', 'sinch-button-click')
  await testButton('focusin', 'sinch-button-focus')
  await testButton('focusout', 'sinch-button-blur')
}))

test('native events', withFitWidth(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-button-focus', 'sinch-button-blur', 'sinch-button-click')
  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-button-focus', detail: null },
    { type: 'sinch-button-blur', detail: null },
  ])

  await $.click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-button-focus', detail: null },
    { type: 'sinch-button-click', detail: null },
  ])
}))
