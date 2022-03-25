import { expect, test } from '@playwright/test'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withTitleContentButtons = makeScreenshotTests('/dialog?title=Title&buttons=Ok|Cancel&content=Content', 'sinch-dialog')
const withTitleButtons = makeScreenshotTests('/dialog?title=Title&buttons=Ok|Cancel', 'sinch-dialog')
const withTitleLargeContent = makeScreenshotTests('/dialog?title=Title&content=Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'sinch-dialog')
const withTitle = makeScreenshotTests('/dialog?title=Title', 'sinch-dialog')

test('title attribute', withTitle(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('title', 'Updated title'))
  yield { name: 'updated', includeRects: [await $eval((el) => el.dialogRect)] }
}))

test('title prop', withTitle(async function* ({ $eval }) {
  await $eval((el) => {
    el.title = 'Updated title'
  })
  yield { name: 'updated', includeRects: [await $eval((el) => el.dialogRect)] }
}))

test('title content', withTitleLargeContent(async function* ({ $eval }) {
  yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
}))

test('title buttons', withTitleButtons(async function* ({ $eval }) {
  yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
}))

test('title content buttons', withTitleContentButtons(async function* ({ $eval }) {
  yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
}))

test('custom events', withTitle(async function* ({ page, $ }) {
  const testDialog = testCustomEvent(page, $)

  await testDialog('close', 'sinch-dialog-close')
}))

test('native events', withTitle(async function* ({ page, $eval }) {
  await subscribeToEvents(page, 'sinch-dialog-close')

  const { x, y } = await $eval((el) => el.closeButtonRect)

  await page.mouse.click(0, 0)
  await page.mouse.click(x + 1, y + 1)

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-dialog-close', detail: null },
    { type: 'sinch-dialog-close', detail: null },
  ])
}))
