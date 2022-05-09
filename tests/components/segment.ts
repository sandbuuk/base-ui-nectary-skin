import { expect, test } from '@playwright/test'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withEverything = makeScreenshotTests('/segment?width=400&caption=Title&action=true&content=true&icon=true&info=true', 'sinch-segment')
const withCaption = makeScreenshotTests('/segment?width=400&caption=Title&action=true&info=true&icon=true', 'sinch-segment')
const withNarrowCaption = makeScreenshotTests('/segment?width=300&caption=Title%20long%20long%20long&info=true&icon=true', 'sinch-segment')
const withCollapse = makeScreenshotTests('/segment?width=400&caption=Title&collapse=true', 'sinch-segment')
const withEverythingCollapse = makeScreenshotTests('/segment?width=400&caption=Title&action=true&content=true&icon=true&info=true&collapse=true', 'sinch-segment')

test('caption attribute', withCaption(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('caption', 'Updated title'))
  yield { name: 'updated' }
}))

test('caption prop', withCaption(async function* ({ $eval }) {
  await $eval((el) => {
    el.caption = 'Updated title'
  })
  yield { name: 'updated' }
}))

test('caption narrow', withNarrowCaption(async function* () {
  yield { name: 'shot' }
}))

test('everything', withEverything(async function* () {
  yield { name: 'shot' }
}))

test('collapse', withEverythingCollapse(async function* ({ $ }) {
  await $.click({ position: { x: 10, y: 10 } })
  yield { name: 'collapsed' }
  await $.click({ position: { x: 10, y: 10 } })
  yield { name: 'expanded' }
}))

test('custom events', withCollapse(async function* ({ page, $ }) {
  const testSegment = testCustomEvent(page, $.locator('sinch-segment-collapse'))

  await testSegment('change', 'sinch-segment-collapse-change', true)
}))

test('native events', withCollapse(async function* ({ page }) {
  await subscribeToEvents(page, 'sinch-segment-collapse-focus', 'sinch-segment-collapse-blur', 'sinch-segment-collapse-change')

  await page.keyboard.press('Tab')
  await page.keyboard.press('Space')
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-segment-collapse-focus', detail: null },
    { type: 'sinch-segment-collapse-change', detail: true },
    { type: 'sinch-segment-collapse-blur', detail: null },
  ])
}))
