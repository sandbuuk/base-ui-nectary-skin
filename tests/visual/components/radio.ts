import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests(
  '/radio',
  'sinch-radio'
)

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

test('value property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.value = ''
  })
  yield { name: 'option-empty' }

  await $eval((el) => {
    el.value = '4'
  })
  yield { name: 'option-4' }

  await $eval((el) => {
    el.value = '3'
  })
  yield { name: 'option-3' }

  await $eval((el) => {
    el.value = '2'
  })
  yield { name: 'option-disabled' }

  await $eval((el) => {
    el.value = '1'
  })
  yield { name: 'option-1' }

  await $eval((el) => {
    el.value = 'missing'
  })
  yield { name: 'option-missing' }
}))
