import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests('/select?width=200&label=Label', 'sinch-select')
const withPlaceholder = makeScreenshotTests('/select?width=200&label=Label&placeholder=Placeholder', 'sinch-select')
const withTooltip = makeScreenshotTests('/select?width=200&label=Label&placeholder=Placeholder&tooltip=Tooltip%20text%20long%20long', 'sinch-select')
const withEverything = makeScreenshotTests('/select?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1', 'sinch-select')

test('disabled attribute', withEverything(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
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

test('value attribute', withPlaceholder(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('value', ''))
  yield { name: 'option-empty' }

  await $eval((el) => el.setAttribute('value', '4'))
  yield { name: 'option-4' }

  await $eval((el) => el.setAttribute('value', '3'))
  yield { name: 'option-3' }

  await $eval((el) => el.setAttribute('value', '2'))
  yield { name: 'option-disabled' }

  await $eval((el) => el.setAttribute('value', '1'))
  yield { name: 'option-1' }

  await $eval((el) => el.setAttribute('value', 'missing'))
  yield { name: 'option-missing' }
}))

test('click button', shot(async function* ({ $, page }) {
  await $.locator('button').click()
  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }

  await page.click('body', { position: { x: 0, y: 0 } })
  yield { name: 'click-outside' }
}))

test('click label', shot(async function* ({ $ }) {
  await $.locator('label').click()

  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }
}))

test('tooltip', withTooltip(async function* ({ $ }) {
  await $.locator('sinch-input-tooltip').hover()
  yield {
    name: 'show',
    include: [$.locator('sinch-input-tooltip #text')],
  }
}))

test('focus press-space', withPlaceholder(async function* ({ $ }) {
  await $.focus()
  await $.press('Space')
  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }

  await $.press('Space')
  yield { name: 'close' }
}))

test('focus press-enter', withPlaceholder(async function* ({ $ }) {
  await $.focus()
  await $.press('Enter')
  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }

  await $.press('Enter')
  yield { name: 'close' }
}))

test('keyboard', withPlaceholder(async function* ({ $ }) {
  await $.locator('button').click()
  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }

  await $.press('ArrowDown')
  yield {
    name: 'down',
    include: [$.locator('#listbox')],
  }

  await $.press('ArrowDown')
  await $.press('ArrowRight')
  yield {
    name: 'down-right',
    include: [$.locator('#listbox')],
  }

  await $.press('ArrowUp')
  await $.press('ArrowLeft')
  yield {
    name: 'up-left',
    include: [$.locator('#listbox')],
  }
}))
