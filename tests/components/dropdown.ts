import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = makeScreenshotTests('/dropdown', 'sinch-dropdown')
const withWideContent = makeScreenshotTests('/dropdown?width=400', 'sinch-dropdown')
const withMaxItems = makeScreenshotTests('/dropdown?maxvisibleitems=2', 'sinch-dropdown')
const check = makeAccessibilityTests('/dropdown?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1', 'sinch-dropdown')

test('accessibility', check(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('orientation attribute', shot(async function* ({ $, $eval }) {
  await $.click()

  await $eval((el) => el.setAttribute('orientation', 'top-left'))
  yield { name: 'top-left', includeRects: [await $eval((el) => el.dropdownRect)] }
  await $eval((el) => el.setAttribute('orientation', 'top-right'))
  yield { name: 'top-right', includeRects: [await $eval((el) => el.dropdownRect)] }
  await $eval((el) => el.setAttribute('orientation', 'bottom-left'))
  yield { name: 'bottom-left', includeRects: [await $eval((el) => el.dropdownRect)] }
  await $eval((el) => el.setAttribute('orientation', 'bottom-right'))
  yield { name: 'bottom-right', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('orientation property', shot(async function* ({ $, $eval }) {
  await $.click()

  await $eval((el) => {
    el.orientation = 'top-left'
  })
  yield { name: 'top-left', includeRects: [await $eval((el) => el.dropdownRect)] }
  await $eval((el) => {
    el.orientation = 'top-right'
  })
  yield { name: 'top-right', includeRects: [await $eval((el) => el.dropdownRect)] }
  await $eval((el) => {
    el.orientation = 'bottom-left'
  })
  yield { name: 'bottom-left', includeRects: [await $eval((el) => el.dropdownRect)] }
  await $eval((el) => {
    el.orientation = 'bottom-right'
  })
  yield { name: 'bottom-right', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('maxvisibleitems attribute', shot(async function* ({ $, $eval }) {
  await $.click()

  await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
  yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('maxvisibleitems property', shot(async function* ({ $, $eval }) {
  await $.click()

  await $eval((el) => {
    el.maxVisibleItems = 2
  })
  yield { name: 'items 2', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('maxvisibleitems scroll', withMaxItems(async function* ({ $, $eval }) {
  await $eval((el) => el.setAttribute('value', '3'))
  await $.click()
  yield { name: 'scroll to 3', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('disabled attribute', shot(async function* ({ $, $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  await $.click()
  yield { name: 'click disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.removeAttribute('disabled'))
  await $.click()
  yield { name: 'click enabled', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('disabled property', shot(async function* ({ $, $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  await $.click()
  yield { name: 'click disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => {
    el.disabled = false
  })
  await $.click()
  yield { name: 'click enabled', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('value attribute', shot(async function* ({ $, $eval }) {
  // Open dropdown once
  await $.click()

  await $eval((el) => el.setAttribute('value', ''))
  yield { name: 'option-empty', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.setAttribute('value', '4'))
  yield { name: 'option-4', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.setAttribute('value', '3'))
  yield { name: 'option-3', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.setAttribute('value', '2'))
  yield { name: 'option-disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.setAttribute('value', '1'))
  yield { name: 'option-1', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => el.setAttribute('value', 'missing'))
  yield { name: 'option-missing', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('value property', shot(async function* ({ $, $eval }) {
  // Open dropdown once
  await $.click()

  await $eval((el) => {
    el.value = ''
  })
  yield { name: 'option-empty', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => {
    el.value = '4'
  })
  yield { name: 'option-4', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => {
    el.value = '3'
  })
  yield { name: 'option-3', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => {
    el.value = '2'
  })
  yield { name: 'option-disabled', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => {
    el.value = '1'
  })
  yield { name: 'option-1', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $eval((el) => {
    el.value = 'missing'
  })
  yield { name: 'option-missing', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('wide target', withWideContent(async function* ({ $, $eval }) {
  await $.click()

  yield { name: 'shot', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('focus press-space', shot(async function* ({ $eval, page }) {
  await page.keyboard.press('Tab')
  await page.keyboard.press('Space')

  yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

  await page.keyboard.press('Space')
  yield { name: 'close', includeRects: [await $eval((el) => el.dropdownRect)] }

  await page.keyboard.press('Space')
  yield { name: 'open-again', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('focus press-enter', shot(async function* ({ $eval, page }) {
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')

  yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

  await page.keyboard.press('Enter')
  yield { name: 'close', includeRects: [await $eval((el) => el.dropdownRect)] }

  await page.keyboard.press('Enter')
  yield { name: 'open-again', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('keyboard', shot(async function* ({ $, $eval }) {
  await $.click()

  yield { name: 'open', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $.press('ArrowDown')
  yield { name: 'down', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $.press('ArrowDown')
  await $.press('ArrowRight')
  yield { name: 'down-right', includeRects: [await $eval((el) => el.dropdownRect)] }

  await $.press('ArrowUp')
  await $.press('ArrowLeft')
  yield { name: 'up-left', includeRects: [await $eval((el) => el.dropdownRect)] }
}))

test('custom events', shot(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-dropdown-change', 'X')
  await testInput('focusin', 'sinch-dropdown-focus')
  await testInput('focusout', 'sinch-dropdown-blur')
}))

test('native events', shot(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-dropdown-focus', 'sinch-dropdown-blur', 'sinch-dropdown-change')

  await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-dropdown-focus', detail: null },
    { type: 'sinch-dropdown-blur', detail: null },
  ])

  await $.click()
  await page.keyboard.press('Enter')

  expect(
    await getAllEvents(page)
  ).toEqual([
    // button focus
    { type: 'sinch-dropdown-focus', detail: null },
    // button blur
    { type: 'sinch-dropdown-blur', detail: null },
    // listbox focus
    { type: 'sinch-dropdown-focus', detail: null },
    { type: 'sinch-dropdown-change', detail: '1' },
    // listbox blur
    { type: 'sinch-dropdown-blur', detail: null },
    // button focus
    { type: 'sinch-dropdown-focus', detail: null },
  ])
}))
