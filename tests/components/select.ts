import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, makeScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { TSinchHelpTooltipElement } from '@sinch-engage/nectary/help-tooltip'

const shot = makeScreenshotTests('/select?width=200&label=Label', 'sinch-select')
const withPlaceholder = makeScreenshotTests('/select?width=200&label=Label&placeholder=Placeholder', 'sinch-select')
const withTooltip = makeScreenshotTests('/select?width=200&label=Label&placeholder=Placeholder&tooltip=Tooltip%20text%20long%20long', 'sinch-select')
const withEverything = makeScreenshotTests('/select?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1', 'sinch-select')
const checkSelectWithEverything = makeAccessibilityTests('/select?width=200&label=Label&tooltip=Tooltip%20text&optional=Optional%20text&additional=Additional%20text&invalid=Invalid%20text&placeholder=Placeholder%20value&value=1', 'sinch-select')

test('accessibility', checkSelectWithEverything(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.label = ''
  })
  yield
}))

test('disabled attribute', withEverything(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }

  await $eval((el) => el.removeAttribute('disabled'))
  yield { name: 'enabled' }
}))

test('disabled property', withEverything(async function* ({ $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }

  await $eval((el) => {
    el.disabled = false
  })
  yield { name: 'enabled' }
}))

test('value attribute', withPlaceholder(async function* ({ $eval }) {
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

test('click button', shot(async function* ({ $, $eval, page }) {
  await $.click()

  const dropdownRect = await $eval((el) => el.dropdownRect)

  yield {
    name: 'open',
    includeRects: [dropdownRect],
  }

  await page.click('body', { position: { x: 0, y: 0 } })
  yield { name: 'click-outside' }
}))

test('click label', shot(async function* ({ $, $eval }) {
  // Click on label
  await $.click({ position: { x: 10, y: 10 } })

  const dropdownRect = await $eval((el) => el.dropdownRect)

  yield {
    name: 'open',
    includeRects: [dropdownRect],
  }
}))

test('tooltip', withTooltip(async function* ({ $ }) {
  await $.locator('sinch-help-tooltip').hover()

  const tooltipRect = await $.locator('sinch-help-tooltip')
    .evaluate((el) => (el as TSinchHelpTooltipElement).tooltipRect)

  yield {
    name: 'show',
    includeRects: [tooltipRect],
  }
}))

test('focus press-space', withPlaceholder(async function* ({ $, $eval }) {
  await $.press('Space')

  const dropdownRect = await $eval((el) => el.dropdownRect)

  yield {
    name: 'open',
    includeRects: [dropdownRect],
  }

  await $.press('Space')
  yield { name: 'close' }
}))

test('focus press-enter', withPlaceholder(async function* ({ $, $eval }) {
  await $.press('Enter')

  const dropdownRect = await $eval((el) => el.dropdownRect)

  yield {
    name: 'open',
    includeRects: [dropdownRect],
  }

  await $.press('Enter')
  yield { name: 'close' }
}))

test('keyboard', withPlaceholder(async function* ({ $, $eval }) {
  await $.click()

  const dropdownRect = await $eval((el) => el.dropdownRect)

  yield {
    name: 'open',
    includeRects: [dropdownRect],
  }

  await $.press('ArrowDown')
  yield {
    name: 'down',
    includeRects: [dropdownRect],
  }

  await $.press('ArrowDown')
  await $.press('ArrowRight')
  yield {
    name: 'down-right',
    includeRects: [dropdownRect],
  }

  await $.press('ArrowUp')
  await $.press('ArrowLeft')
  yield {
    name: 'up-left',
    includeRects: [dropdownRect],
  }
}))

test('custom events', shot(async function* ({ $, page }) {
  const testInput = testCustomEvent(page, $)

  await testInput('change', 'sinch-select-change', 'X')
  await testInput('focusin', 'sinch-select-focus')
  await testInput('focusout', 'sinch-select-blur')
}))

test('native events', shot(async function* ({ $, page }) {
  await subscribeToEvents(page, 'sinch-select-focus', 'sinch-select-blur', 'sinch-select-change')

  await $.focus()
  await page.keyboard.press('Tab')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-select-focus', detail: null },
    { type: 'sinch-select-blur', detail: null },
  ])

  await $.click()
  await page.keyboard.press('Enter')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-select-focus', detail: null },
    { type: 'sinch-select-change', detail: '1' },
  ])

  await $.click()
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')

  expect(
    await getAllEvents(page)
  ).toEqual([
    { type: 'sinch-select-change', detail: '3' },
  ])
}))
