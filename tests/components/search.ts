import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = makeScreenshotTests('/search?width=200', 'sinch-search')
const withValue = makeScreenshotTests('/search?width=200&label=Label&value=Input%20value', 'sinch-search')
const withPlaceholder = makeScreenshotTests('/search?width=200&label=Label&placeholder=Placeholder%20value', 'sinch-search')
const checkValue = makeAccessibilityTests('/search?width=200&label=Label&value=Input%20value', 'sinch-search')

test('accessibility', checkValue(async function* () {
  yield
}))

test('value attribute', withPlaceholder(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('value', 'Input Value'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('value', ''))
  yield { name: 'empty' }
}))

test('value property', withPlaceholder(async function* ({ $eval }) {
  await $eval((el) => {
    el.value = 'Input Value'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.value = ''
  })
  yield { name: 'empty' }
}))

test('placeholder attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('placeholder', ''))
  yield { name: 'empty' }
}))

test('placeholder property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.placeholder = 'Placeholder Value'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.placeholder = ''
  })
  yield { name: 'empty' }
}))

test('label property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.label = 'Label text'
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.label = ''
  })
  yield { name: 'empty' }
}))

test('label attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('label', 'Label text')
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.removeAttribute('label')
  })
  yield { name: 'empty' }
}))

test('fill', withPlaceholder(async function* ({ $, $eval }) {
  await $.focus()
  yield { name: 'focus' }

  await expect($eval((el) => el === document.activeElement)).resolves.toBe(true)

  await $.type('Fill')
  yield { name: 'filled' }

  await expect($eval((el) => el.value)).resolves.toBe('Fill')
}))

test('clear', withValue(async function* ({ $, page }) {
  await $.focus()

  yield { name: 'initial' }

  await page.keyboard.press('Tab')

  yield { name: 'focused' }

  await page.keyboard.press('Enter')

  yield { name: 'cleared' }
}))

test('maxvisibleitems attribute', withValue(async function* ({ $, $eval }) {
  await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
  await $.focus()

  yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.setAttribute('maxvisibleitems', ''))

  yield { name: 'empty', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('dropdown', withValue(async function* ({ $, $eval, page }) {
  await $.focus()

  yield { name: 'input-focus', includeRects: [await $eval((el) => el.dropdownRect)] }

  await page.keyboard.press('Tab')

  yield { name: 'input-blur', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('keyboard', withValue(async function* ({ $, $eval }) {
  await $.focus()

  yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $.press('ArrowDown')
  yield { name: 'down', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $.press('ArrowDown')
  await $.press('ArrowDown')
  await $.press('ArrowDown')
  yield { name: 'down-down', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $.press('ArrowUp')
  await $.press('ArrowUp')
  yield { name: 'up-up', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('custom events', withValue(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-search-change', 'X')
  await testInput('focusin', 'sinch-search-focus')
  await testInput('focusout', 'sinch-search-blur')
}))

test('native events', withValue(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-search-focus', 'sinch-search-blur', 'sinch-search-change')
  await $.focus()
  await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-search-focus', detail: null },
    { type: 'sinch-search-blur', detail: null },
  ])

  // Necessary to normalize "type" behaviour
  await $.click()
  await page.keyboard.press('End')
  await $.type('X')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-search-focus', detail: null },
    { type: 'sinch-search-change', detail: 'Input valueX' },
  ])
}))
