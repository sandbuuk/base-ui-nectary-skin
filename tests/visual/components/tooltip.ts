import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const withFitWidth = makeScreenshotTests('/tooltip?text=Tooltip%20text', 'sinch-tooltip')
const withNarrowWidth = makeScreenshotTests('/tooltip?width=100&text=Tooltip%20text%20long%20long%20long', 'sinch-tooltip')

test('orientation attribute', withFitWidth(async function* ({ $, $eval }) {
  const textLocator = $.locator('#text')

  await $.hover()

  await $eval((el) => el.setAttribute('orientation', 'left'))
  yield { name: 'left', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'right'))
  yield { name: 'right', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'top'))
  yield { name: 'top', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'bottom'))
  yield { name: 'bottom', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'top-left'))
  yield { name: 'top-left', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'top-right'))
  yield { name: 'top-right', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'bottom-left'))
  yield { name: 'bottom-left', include: [textLocator] }
  await $eval((el) => el.setAttribute('orientation', 'bottom-right'))
  yield { name: 'bottom-right', include: [textLocator] }
}))

test('orientation property', withFitWidth(async function* ({ $, $eval }) {
  const textLocator = $.locator('#text')

  await $.hover()

  await $eval((el) => {
    el.orientation = 'left'
  })
  yield { name: 'left', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'right'
  })
  yield { name: 'right', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'top'
  })
  yield { name: 'top', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'bottom'
  })
  yield { name: 'bottom', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'top-left'
  })
  yield { name: 'top-left', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'top-right'
  })
  yield { name: 'top-right', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'bottom-left'
  })
  yield { name: 'bottom-left', include: [textLocator] }
  await $eval((el) => {
    el.orientation = 'bottom-right'
  })
  yield { name: 'bottom-right', include: [textLocator] }
}))

test('text attribute', withFitWidth(async function* ({ $, $eval }) {
  const textLocator = $.locator('#text')

  await $.hover()

  await $eval((el) => el.setAttribute('text', 'Updated tooltip text'))
  yield { name: 'updated', include: [textLocator] }
}))

test('text property', withFitWidth(async function* ({ $, $eval }) {
  const textLocator = $.locator('#text')

  await $.hover()

  await $eval((el) => {
    el.text = 'Updated tooltip text'
  })
  yield { name: 'updated', include: [textLocator] }
}))

test('narrow', withNarrowWidth(async function* ({ $ }) {
  const textLocator = $.locator('#text')

  await $.hover()

  yield { name: 'clip', include: [textLocator] }
}))

test('inverted property', withFitWidth(async function* ({ $, $eval }) {
  const textLocator = $.locator('#text')

  await $.hover()

  await $eval((el) => {
    el.inverted = true
  })
  yield { name: 'on', include: [textLocator] }
}))

test('inverted attribute', withFitWidth(async function* ({ $, $eval }) {
  const textLocator = $.locator('#text')

  await $.hover()

  await $eval((el) => el.setAttribute('inverted', ''))
  yield { name: 'on', include: [textLocator] }
}))
