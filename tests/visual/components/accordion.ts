import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const items = encodeURI(JSON.stringify([{
  value: 1,
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
}, {
  value: 2,
  label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  status: 'info',
  content: 'Accordion content',
}, {
  value: 3,
  label: 'Option value 3',
  disabled: true,
  icon: true,
}, {
  value: 4,
  label: 'Option value 4',
  content: 'Accordion content',
}]))
const singleItem = encodeURI(JSON.stringify([{
  value: 1,
  label: 'Option value 1',
  icon: true,
}]))
const singleItemDisabled = encodeURI(JSON.stringify([{
  value: 1,
  label: 'Option value 1',
  icon: true,
  disabled: true,
}]))
const withItems = makeScreenshotTests(`/accordion?width=200&options=${items}`, 'sinch-accordion')
const withItemsMultiple = makeScreenshotTests(`/accordion?width=200&multiple=true&options=${items}`, 'sinch-accordion')
const withSingleItem = makeScreenshotTests(`/accordion?width=200&options=${singleItem}`, 'sinch-accordion')
const withSingleItemDisabled = makeScreenshotTests(`/accordion?width=200&options=${singleItemDisabled}`, 'sinch-accordion')
const withSingleItemUncontrolled = makeScreenshotTests(`/accordion?width=200&uncontrolled=true&options=${singleItem}`, 'sinch-accordion')
const checkItems = makeAccessibilityTests(`/accordion?width=200&options=${items}`, 'sinch-accordion')

test('accessibility', checkItems(async function* () {
  yield
}))

test('value attribute', withItems(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('value', ''))
  yield { name: 'value-empty' }

  await $eval((el) => el.setAttribute('value', '4'))
  yield { name: 'value-4' }

  await $eval((el) => el.setAttribute('value', '3'))
  yield { name: 'value-disabled' }

  await $eval((el) => el.setAttribute('value', '2'))
  yield { name: 'value-2' }

  await $eval((el) => el.setAttribute('value', '1'))
  yield { name: 'value-1' }

  await $eval((el) => el.setAttribute('value', 'missing'))
  yield { name: 'value-missing' }
}))

test('value property', withItems(async function* ({ $eval }) {
  await $eval((el) => {
    el.value = ''
  })
  yield { name: 'value-empty' }

  await $eval((el) => {
    el.value = '4'
  })
  yield { name: 'value-4' }

  await $eval((el) => {
    el.value = '3'
  })
  yield { name: 'value-disabled' }

  await $eval((el) => {
    el.value = '2'
  })
  yield { name: 'value-2' }

  await $eval((el) => {
    el.value = '1'
  })
  yield { name: 'value-1' }

  await $eval((el) => {
    el.value = 'missing'
  })
  yield { name: 'value-missing' }
}))

test('click', withItems(async function* ({ $ }) {
  await $.locator('sinch-accordion-item').nth(0).click()
  yield { name: 'open-0' }

  await $.locator('sinch-accordion-item').nth(3).click()
  yield { name: 'open-3' }

  await $.locator('sinch-accordion-item').nth(3).click()
  yield { name: 'close-3' }
}))

test('multiple click', withItemsMultiple(async function* ({ $ }) {
  await $.locator('sinch-accordion-item').nth(0).click()
  yield { name: 'open-0' }

  await $.locator('sinch-accordion-item').nth(3).click()
  yield { name: 'open-3' }

  await $.locator('sinch-accordion-item').nth(3).click()
  yield { name: 'close-3' }
}))

test('uncontrolled click', withSingleItemUncontrolled(async function* ({ $ }) {
  await $.locator('sinch-accordion-item').nth(0).click()
  yield { name: 'open' }
}))

test('disabled click', withSingleItemDisabled(async function* ({ $ }) {
  await $.locator('sinch-accordion-item').nth(0).click()
  yield { name: 'open' }
}))

test('disabled property', withSingleItem(async function* ({ $ }) {
  const $item = $.locator('sinch-accordion-item').first()

  await $item.evaluate((el) => {
    (el as any).disabled = true
  })
  yield { name: 'on' }
}))

test('disabled attribute', withSingleItem(async function* ({ $ }) {
  const $item = $.locator('sinch-accordion-item').first()

  await $item.evaluate((el) => el.setAttribute('disabled', ''))
  yield { name: 'on' }
}))

test('status property', withSingleItem(async function* ({ $ }) {
  const $item = $.locator('sinch-accordion-item').first()

  await $item.evaluate((el) => {
    (el as any).status = 'info'
  })
  yield { name: 'info' }

  await $item.evaluate((el) => {
    (el as any).status = 'success'
  })
  yield { name: 'success' }

  await $item.evaluate((el) => {
    (el as any).status = 'warn'
  })
  yield { name: 'warn' }

  await $item.evaluate((el) => {
    (el as any).status = 'error'
  })
  yield { name: 'error' }
}))

test('status attribute', withSingleItem(async function* ({ $ }) {
  const $item = $.locator('sinch-accordion-item').first()

  await $item.evaluate((el) => el.setAttribute('status', 'info'))
  yield { name: 'info' }

  await $item.evaluate((el) => el.setAttribute('status', 'success'))
  yield { name: 'success' }

  await $item.evaluate((el) => el.setAttribute('status', 'warn'))
  yield { name: 'warn' }

  await $item.evaluate((el) => el.setAttribute('status', 'error'))
  yield { name: 'error' }
}))

test('custom events', withItems(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-accordion-change', '2')
}))

test('native events', withItems(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-accordion-change')

  // Click first item
  await $.locator('sinch-accordion-item').nth(0).click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-accordion-change', detail: '1' },
  ])

  // Click second item
  await $.locator('sinch-accordion-item').nth(1).click()

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-accordion-change', detail: '2' },
  ])
}))
