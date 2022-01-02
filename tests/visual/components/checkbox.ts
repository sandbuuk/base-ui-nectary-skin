import { expect, test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests('/checkbox?width=100&text=Label', 'sinch-checkbox')
const contentWidth = makeScreenshotTests('/checkbox?text=Label', 'sinch-checkbox')
const narrowLabel = makeScreenshotTests('/checkbox?width=150&text=Label%20long%20long%20long%20long', 'sinch-checkbox')
const checked = makeScreenshotTests('/checkbox?width=100&text=Label&checked=true', 'sinch-checkbox')
const disabedChecked = makeScreenshotTests('/checkbox?width=100&text=Label&disabled=true&checked=true', 'sinch-checkbox')
const disabedIndeterminate = makeScreenshotTests('/checkbox?width=100&text=Label&disabled=true&checked=true&indeterminate=true', 'sinch-checkbox')

test('checked attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('checked', ''))
  yield { name: 'checked' }

  await $eval((el) => el.removeAttribute('checked'))
  yield { name: 'unchecked' }
}))

test('checked property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.checked = true
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.checked = false
  })
  yield { name: 'unchecked' }
}))

test('focus', shot(async function* ({ $, $eval }) {
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

test('indeterminate attribute', checked(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('indeterminate', ''))
  yield { name: 'line' }

  await $eval((el) => el.removeAttribute('indeterminate'))
  yield { name: 'checkmark' }
}))

test('indeterminate property', checked(async function* ({ $eval }) {
  await $eval((el) => {
    el.indeterminate = true
  })
  yield { name: 'line' }

  await $eval((el) => {
    el.indeterminate = false
  })
  yield { name: 'checkmark' }
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

test('disabled property', shot(async function* ({ $, $eval }) {
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

test('disabled attribute', shot(async function* ({ $, $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }
  await expect($.locator('input').isDisabled()).resolves.toBe(true)

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
  await expect($.locator('input').isDisabled()).resolves.toBe(false)
}))

test('disabled checkmark', disabedChecked(async function* () {
  yield { name: 'checked' }
}))

test('disabled indeterminate', disabedIndeterminate(async function* () {
  yield { name: 'checked' }
}))

test('narrow', narrowLabel(async function* () {
  yield { name: 'clip' }
}))

test('mouse interaction', shot(async function* ({ $, page }) {
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

