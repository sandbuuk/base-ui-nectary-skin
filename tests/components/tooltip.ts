import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { makeScreenshotTests } from '../screenshot-tests'

const withFitWidth = makeScreenshotTests('/tooltip?text=Tooltip%20text', 'sinch-tooltip')
const withNarrowWidth = makeScreenshotTests('/tooltip?width=100&text=Tooltip%20text%20long%20long%20long', 'sinch-tooltip')
const checkTooltip = makeAccessibilityTests('/tooltip?text=Tooltip%20text', 'sinch-tooltip')

test('accessibility', checkTooltip(async function* () {
  yield
}))

test('orientation attribute', withFitWidth(async function* ({ $, $eval }) {
  await $.hover()

  await $eval((el) => el.setAttribute('orientation', 'left'))
  yield { name: 'left', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'right'))
  yield { name: 'right', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'top'))
  yield { name: 'top', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'bottom'))
  yield { name: 'bottom', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'top-left'))
  yield { name: 'top-left', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'top-right'))
  yield { name: 'top-right', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'bottom-left'))
  yield { name: 'bottom-left', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => el.setAttribute('orientation', 'bottom-right'))
  yield { name: 'bottom-right', includeRects: [await $eval((el) => el.tooltipRect)] }
}))

test('orientation property', withFitWidth(async function* ({ $, $eval }) {
  await $.hover()

  await $eval((el) => {
    el.orientation = 'left'
  })
  yield { name: 'left', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'right'
  })
  yield { name: 'right', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'top'
  })
  yield { name: 'top', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'bottom'
  })
  yield { name: 'bottom', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'top-left'
  })
  yield { name: 'top-left', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'top-right'
  })
  yield { name: 'top-right', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'bottom-left'
  })
  yield { name: 'bottom-left', includeRects: [await $eval((el) => el.tooltipRect)] }
  await $eval((el) => {
    el.orientation = 'bottom-right'
  })
  yield { name: 'bottom-right', includeRects: [await $eval((el) => el.tooltipRect)] }
}))

test('text attribute', withFitWidth(async function* ({ $, $eval }) {
  await $.hover()

  await $eval((el) => el.setAttribute('text', 'Updated tooltip text'))
  yield { name: 'updated', includeRects: [await $eval((el) => el.tooltipRect)] }
}))

test('text property', withFitWidth(async function* ({ $, $eval }) {
  await $.hover()

  await $eval((el) => {
    el.text = 'Updated tooltip text'
  })
  yield { name: 'updated', includeRects: [await $eval((el) => el.tooltipRect)] }
}))

test('narrow', withNarrowWidth(async function* ({ $, $eval }) {
  await $.hover()

  yield { name: 'clip', includeRects: [await $eval((el) => el.tooltipRect)] }
}))

test('inverted property', withFitWidth(async function* ({ $, $eval }) {
  await $.hover()

  await $eval((el) => {
    el.inverted = true
  })
  yield { name: 'on', includeRects: [await $eval((el) => el.tooltipRect)] }
}))

test('inverted attribute', withFitWidth(async function* ({ $, $eval }) {
  await $.hover()

  await $eval((el) => el.setAttribute('inverted', ''))
  yield { name: 'on', includeRects: [await $eval((el) => el.tooltipRect)] }
}))
