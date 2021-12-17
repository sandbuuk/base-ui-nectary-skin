import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests(
  '/radio',
  'sinch-radio'
)

test('value attribute', shot(async function* ({ $ }) {
  await $.evaluate((el) => el.setAttribute('value', ''))
  yield { name: 'option-empty' }

  await $.evaluate((el) => el.setAttribute('value', '4'))
  yield { name: 'option-4' }

  await $.evaluate((el) => el.setAttribute('value', '3'))
  yield { name: 'option-3' }

  await $.evaluate((el) => el.setAttribute('value', '2'))
  yield { name: 'option-disabled' }

  await $.evaluate((el) => el.setAttribute('value', '1'))
  yield { name: 'option-1' }

  await $.evaluate((el) => el.setAttribute('value', 'missing'))
  yield { name: 'option-missing' }
}))

// test('click label', shot(async function* ({ $ }) {
//   await $.locator('label').click()

//   yield {
//     name: 'open',
//     include: [$.locator('#listbox')],
//   }
// }))

// test('focus press-space', shot(async function* ({ $ }) {
//   await $.focus()
//   await $.press('Space')

//   yield {
//     name: 'open',
//     include: [$.locator('#listbox')],
//   }

//   await $.press('Space')

//   yield { name: 'close' }
// }))

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

