import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { makeScreenshotTests } from '../screenshot-tests'

const cardLabel = 'Report'
const cardLabelLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const cardHeader = 'Customer Experience'
const cardHeaderLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const cardLongText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
const cardLinkText = 'This is link'
const cardLinkTextLong = 'This is very long link title'
const cardButtonText = 'This is button'
const cardButtonTextLong = 'This is very long button title'

const withWideWidth = makeScreenshotTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}`, 'sinch-card')
const withNarrowWidthButton = makeScreenshotTests(`/card?width=200&label=${cardLabelLong}&header=${cardHeaderLong}&text=${cardLongText}&icon=true&illustration=true&button=${cardButtonTextLong}`, 'sinch-card')
const withNarrowWidthLink = makeScreenshotTests(`/card?width=200&label=${cardLabelLong}&header=${cardHeaderLong}&text=${cardLongText}&icon=true&illustration=true&link=${cardLinkTextLong}`, 'sinch-card')
const withIllustrationButton = makeScreenshotTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&icon=true&illustration=true&button=${cardButtonText}`, 'sinch-card')
const withIllustrationLink = makeScreenshotTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&icon=true&illustration=true&link=${cardLinkText}`, 'sinch-card')
const withDisabledButton = makeScreenshotTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&button=${cardButtonText}`, 'sinch-card')
const withDisabledLink = makeScreenshotTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&link=${cardLinkText}`, 'sinch-card')
const checkWithButton = makeAccessibilityTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&illustration=true&button=${cardButtonText}`, 'sinch-card')
const checkWithLink = makeAccessibilityTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&illustration=true&link=${cardLinkText}`, 'sinch-card')

test('accessibility button', checkWithButton(async function* () {
  yield
}))

test('accessibility link', checkWithLink(async function* () {
  yield
}))

test('text attribute', withWideWidth(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('text', 'Updated text'))
  yield { name: 'updated' }
}))

test('text property', withWideWidth(async function* ({ $eval }) {
  await $eval((el) => {
    el.text = 'Updated text'
  })
  yield { name: 'updated' }
}))

test('disabled property', withIllustrationButton(async function* ({ $eval }) {
  await $eval((el) => {
    el.disabled = true
  })
  yield { name: 'disabled' }
}))

test('disabled attribute', withIllustrationButton(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('disabled', ''))
  yield { name: 'disabled' }
}))

test('illustration button', withIllustrationButton(async function* () {
  yield { name: 'shot' }
}))

test('illustration link', withIllustrationLink(async function* () {
  yield { name: 'shot' }
}))

test('disabled button', withDisabledButton(async function* () {
  yield { name: 'shot' }
}))

test('disabled link', withDisabledLink(async function* () {
  yield { name: 'shot' }
}))

test('narrow button', withNarrowWidthButton(async function* () {
  yield { name: 'shot' }
}))

test('narrow link', withNarrowWidthLink(async function* () {
  yield { name: 'shot' }
}))
