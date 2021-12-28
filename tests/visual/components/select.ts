import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests(
  '/select?width=200',
  'sinch-select'
)

test('disabled attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
}))

test('value attribute', shot(async function* ({ $eval }) {
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

test('click button', shot(async function* ({ $ }) {
  await $.locator('[aria-haspopup]').click()

  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }
}))

test('click label', shot(async function* ({ $ }) {
  await $.locator('label').click()

  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }
}))

test('click outside', shot(async function* ({ $, page }) {
  await $.locator('[aria-haspopup]').click()

  await page.click('body', { position: { x: 0, y: 0 } })

  yield { name: 'close' }
}))

test('tooltip', shot(async function* ({ $ }) {
  await $.locator('sinch-input-tooltip').hover()

  yield {
    name: 'show',
    include: [$.locator('sinch-input-tooltip #text')],
  }
}))

test('focus press-space', shot(async function* ({ $ }) {
  await $.focus()
  await $.press('Space')

  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }

  await $.press('Space')

  yield { name: 'close' }
}))

test('focus press-enter', shot(async function* ({ $ }) {
  await $.focus()
  await $.press('Enter')

  yield {
    name: 'open',
    include: [$.locator('#listbox')],
  }

  await $.press('Enter')

  yield { name: 'close' }
}))

// Open test
// click button -> check listbox open
// click label -> check listbox open
// focus button -> press space -> check listbox open
// focus button -> press enter -> check listbox open

// Close test
// open listbox -> click button -> check listbox close
// open listbox -> click outside -> check listbox close
// open listbox -> defocus -> check listbox close
// open listbox -> click enabled option -> check listbox close
// open listbox -> click disabled option -> check listbox open

// set select value -> check button content
// set select value incorrect -> check button content placeholder
// set select value disabled -> check button content placeholder

// open listbox -> check selected option

// open listbox -> check option values

