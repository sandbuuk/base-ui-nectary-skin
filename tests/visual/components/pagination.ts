import { expect, test } from '@playwright/test'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../utils'

const withEmptyRange = makeScreenshotTests('/pagination?value=1', 'sinch-pagination')
const withShortRange = makeScreenshotTests('/pagination?max=3', 'sinch-pagination')
const withMidRange = makeScreenshotTests('/pagination?value=5&max=9', 'sinch-pagination')
const withHugeRange = makeScreenshotTests('/pagination?value=99999&max=99999', 'sinch-pagination')
const withLargeRange = makeScreenshotTests('/pagination?value=50&max=100', 'sinch-pagination')
const withUncontrolled = makeScreenshotTests('/pagination?value=10&max=20&uncontrolled=true', 'sinch-pagination')

test('value attribute', withShortRange(async function* ({ $eval }) {
  yield { name: 'missing' }

  await $eval((el) => el.setAttribute('value', '2'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('value', ''))
  yield { name: 'empty' }
}))

test('value property', withShortRange(async function* ({ $eval }) {
  await $eval((el) => {
    el.value = 2
  })
  yield { name: 'updated' }

  await $eval((el) => {
    el.value = 1000
  })
  yield { name: 'over range' }

  await $eval((el) => {
    el.value = -1
  })
  yield { name: 'negative' }
}))

test('max attribute', withEmptyRange(async function* ({ $eval }) {
  yield { name: 'missing' }

  await $eval((el) => el.setAttribute('max', '5'))
  yield { name: 'updated' }

  await $eval((el) => el.setAttribute('max', ''))
  yield { name: 'empty' }
}))

test('max property', withEmptyRange(async function* ({ $eval }) {
  await $eval((el) => {
    el.max = 3
  })
  yield { name: 'short' }

  await $eval((el) => {
    el.max = 1000
  })
  yield { name: 'large' }

  await $eval((el) => {
    el.max = -1
  })
  yield { name: 'negative' }
}))

test('left click', withMidRange(async function* ({ $ }) {
  const $left = $.locator('#left')

  yield { name: 'begin' }

  await $left.click()
  yield { name: 'left-1' }

  await $left.click()
  yield { name: 'left-2' }

  await $left.click()
  await $left.click()
  yield { name: 'left-4' }
}))

test('right click', withMidRange(async function* ({ $ }) {
  const $right = $.locator('#right')

  yield { name: 'begin' }

  await $right.click()
  yield { name: 'right-1' }

  await $right.click()
  yield { name: 'right-2' }

  await $right.click()
  await $right.click()
  yield { name: 'right-4' }
}))

test('first last click', withLargeRange(async function* ({ $ }) {
  const $left = $.locator('button').nth(1)
  const $right = $.locator('button').nth(7)

  await $left.click()
  yield { name: 'first' }

  await $right.click()
  yield { name: 'last' }
}))

test('middle click', withLargeRange(async function* ({ $ }) {
  const $left = $.locator('button').nth(3)
  const $right = $.locator('button').nth(5)

  await $left.click()
  yield { name: 'left' }

  await $right.click()
  await $right.click()
  yield { name: 'right' }
}))

test('dots click', withMidRange(async function* ({ $ }) {
  const $left = $.locator('button').nth(2)
  const $right = $.locator('button').nth(6)

  await $left.click()
  yield { name: 'left' }

  await $right.click()
  yield { name: 'right' }
}))

test('long text', withHugeRange(async function* () {
  yield { name: 'shot' }
}))

test('custom events', withUncontrolled(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-pagination-change', 10)
  await testInput('focusin', 'sinch-pagination-focus')
  await testInput('focusout', 'sinch-pagination-blur')
}))

test('native events', withUncontrolled(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-pagination-focus', 'sinch-pagination-blur', 'sinch-pagination-change')

  await $.focus()
  await page.mouse.click(0, 0)

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-pagination-focus', detail: null },
    { type: 'sinch-pagination-blur', detail: null },
  ])

  await $.locator('#left').click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-pagination-focus', detail: null },
    { type: 'sinch-pagination-change', detail: 9 },
  ])

  await $.locator('#right').click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-pagination-change', detail: 11 },
  ])
}))
