import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = makeScreenshotTests('/link?text=Anchor%20text&href=url', 'sinch-link')
const withNarrowWidth = makeScreenshotTests('/link?width=110&text=Anchor%20text%20text%20long%20long%20long&href=url', 'sinch-link')
const withExternalDisabled = makeScreenshotTests('/link?text=Anchor%20text&href=url&disabled=true&external=true', 'sinch-link')
const withExternal = makeScreenshotTests('/link?text=Anchor%20text&href=url&external=true', 'sinch-link')
const checkLink = makeAccessibilityTests('/link?text=Anchor%20text&href=url', 'sinch-link')

test('accessibility', checkLink(async function* () {
  yield
}))

test('external property', shot(async function* ({ $eval, page }) {
  await $eval((el) => {
    el.external = true
  })
  yield { name: 'on', include: [page.locator('#link-wrapper')] }
  await $eval((el) => {
    el.external = false
  })
  yield { name: 'off', include: [page.locator('#link-wrapper')] }
}))

test('external attribute', shot(async function* ({ $eval, page }) {
  await $eval((el) => el.setAttribute('external', ''))
  yield { name: 'on', include: [page.locator('#link-wrapper')] }
  await $eval((el) => el.removeAttribute('external'))
  yield { name: 'off', include: [page.locator('#link-wrapper')] }
}))

test('disabled property', shot(async function* ({ $eval, page }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'on', include: [page.locator('#link-wrapper')] }
  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'off', include: [page.locator('#link-wrapper')] }
}))

test('disabled attribute', shot(async function* ({ $eval, page }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'on', include: [page.locator('#link-wrapper')] }
  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'off', include: [page.locator('#link-wrapper')] }
}))

test('external disabled', withExternalDisabled(async function* ({ page }) {
  yield { name: 'shot', include: [page.locator('#link-wrapper')] }
}))

test('text attribute', withExternal(async function* ({ $eval, page }) {
  await $eval((el) => el.setAttribute('text', 'Updated Anchor'))
  yield { name: 'updated', include: [page.locator('#link-wrapper')] }

  await $eval((el) => el.setAttribute('text', ''))
  yield { name: 'empty', include: [page.locator('#link-wrapper')] }
}))

test('text property', withExternal(async function* ({ $eval, page }) {
  await $eval((el) => {
    el.text = 'Updated Anchor'
  })
  yield { name: 'updated', include: [page.locator('#link-wrapper')] }

  await $eval((el) => {
    el.text = ''
  })
  yield { name: 'empty', include: [page.locator('#link-wrapper')] }
}))

test('narrow', withNarrowWidth(async function* ({ page }) {
  yield { name: 'shot', include: [page.locator('#link-wrapper')] }
}))

test('hover disabled', withExternalDisabled(async function* ({ $, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  yield { name: 'shot', include: [page.locator('#link-wrapper')] }
}))

test('hover', withExternal(async function* ({ $, page }) {
  const rect = (await $.boundingBox())!

  await page.mouse.move(rect.x + 5, rect.y + 15)
  yield { name: 'shot', include: [page.locator('#link-wrapper')] }
}))

test('custom events', shot(async function* ({ $, page }) {
  const testAnchor = testCustomEvent(page, $)

  await testAnchor('click', 'sinch-link-click')
  await testAnchor('focusin', 'sinch-link-focus')
  await testAnchor('focusout', 'sinch-link-blur')
}))

test('native events', shot(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-link-focus', 'sinch-link-blur', 'sinch-link-click')
  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-link-focus', detail: null },
    { type: 'sinch-link-blur', detail: null },
  ])

  await $.click()

  expect(
    await getAllEvents(page)
  ).toEqual(
    expect.arrayContaining([
      // Webkit does not focus anchor on click
      // { type: 'sinch-link-focus', detail: null },
      { type: 'sinch-link-click', detail: null },
    ])
  )
}))
