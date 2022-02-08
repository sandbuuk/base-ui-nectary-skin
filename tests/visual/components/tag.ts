import { expect, test } from '@playwright/test'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../utils'

const shot = makeScreenshotTests('/tag?text=Label%20text', 'sinch-tag')
const withIcon = makeScreenshotTests('/tag?text=Label%20text&icon=true', 'sinch-tag')
const withIconDismiss = makeScreenshotTests('/tag?text=Label%20text&dismissable=true&icon=true', 'sinch-tag')
const withSmallDismiss = makeScreenshotTests('/tag?text=Label%20text&small=true&dismissable=true&icon=true', 'sinch-tag')
const withDismiss = makeScreenshotTests('/tag?text=Label%20text&dismissable=true&icon=true', 'sinch-tag')

const categoryValues = ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt'] as const

test('category property', withIcon(async function* ({ $eval }) {
  for (const val of categoryValues) {
    await $eval((el, val) => {
      el.category = val
    }, val)
    yield { name: val }
  }
}))

test('category attribute', withIcon(async function* ({ $eval }) {
  for (const val of categoryValues) {
    await $eval((el, val) => {
      el.setAttribute('category', val)
    }, val)
    yield { name: val }
  }
}))

test('text property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.text = 'Updated text'
  })
  yield { name: 'updated' }
}))

test('text attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('text', 'Updated text')
  })
  yield { name: 'updated' }
}))

test('small attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('small', ''))
  yield { name: 'enabled' }

  await $eval((el) => el.removeAttribute('small'))
  yield { name: 'disabled' }
}))

test('small property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.small = true
  })
  yield { name: 'enabled' }

  await $eval((el) => {
    el.small = false
  })
  yield { name: 'disabled' }
}))

test('inverted attribute', withIconDismiss(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('inverted', ''))
  yield { name: 'enabled' }

  await $eval((el) => el.removeAttribute('inverted'))
  yield { name: 'disabled' }
}))

test('inverted property', withIconDismiss(async function* ({ $eval }) {
  await $eval((el) => {
    el.inverted = true
  })
  yield { name: 'enabled' }

  await $eval((el) => {
    el.inverted = false
  })
  yield { name: 'disabled' }
}))

test('dismissable', withDismiss(async function* () {
  yield { name: 'shot' }
}))

test('dismissable small', withSmallDismiss(async function* () {
  yield { name: 'shot' }
}))

test('custom events', withDismiss(async function* ({ $, page }) {
  const testClose = testCustomEvent(page, $.locator('sinch-tag-close'))

  await testClose('click', 'sinch-tag-close-click')
  await testClose('focusin', 'sinch-tag-close-focus')
  await testClose('focusout', 'sinch-tag-close-blur')
}))

test('native events', withDismiss(async function* ({ $, page }) {
  const $close = $.locator('sinch-tag-close')

  await subscribeToEvents(
    page,
    'sinch-tag-close-focus',
    'sinch-tag-close-blur',
    'sinch-tag-close-click'
  )

  await $close.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-tag-close-focus', detail: null },
    { type: 'sinch-tag-close-blur', detail: null },
  ])

  await $close.click()
  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-tag-close-focus', detail: null },
    { type: 'sinch-tag-close-click', detail: null },
  ])
}))
