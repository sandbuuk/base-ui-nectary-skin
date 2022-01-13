import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const options = encodeURI(JSON.stringify([{
  value: 1,
  text: 'Option value 1',
}, {
  value: 2,
  text: 'Option value 2',
  disabled: true,
}, {
  value: 3,
  text: 'Option value 3',
}, {
  value: 4,
  text: 'Option value 4',
}]))
const singleOption = encodeURI(JSON.stringify([{
  value: 1,
  text: 'Option value 1',
}]))
const withOptions = makeScreenshotTests(`/radio?width=200&options=${options}`, 'sinch-radio')
const withSingleOption = makeScreenshotTests(`/radio?options=${singleOption}`, 'sinch-radio')
const narrowLabel = makeScreenshotTests(`/radio?width=100&options=${singleOption}`, 'sinch-radio')

test('narrow', narrowLabel(async function* () {
  yield { name: 'clip' }
}))

test('mouse interaction', withSingleOption(async function* ({ $, page }) {
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

test('focus', withSingleOption(async function* ({ $, $eval }) {
  await $.focus()

  await $eval((el) => {
    el.value = '1'
  })
  yield { name: 'checked' }

  await $eval((el) => {
    el.value = ''
  })
  yield { name: 'unchecked' }
}))

test('value attribute', withOptions(async function* ({ $eval }) {
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

test('value property', withOptions(async function* ({ $eval }) {
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

test('keyboard', withOptions(async function* ({ $ }) {
  await $.focus()
  yield { name: '1-focus' }

  await $.press('ArrowDown')
  await $.press('ArrowDown')
  yield { name: '2-down-down' }

  await $.press('ArrowRight')
  await $.press('ArrowRight')
  yield { name: '3-right-right' }

  await $.press('ArrowUp')
  await $.press('ArrowLeft')
  yield { name: '4-up-left' }
}))
