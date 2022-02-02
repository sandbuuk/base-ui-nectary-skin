import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const longTitle = encodeURIComponent('It has survived not only five centuries, but also the leap into electronic typesetting')
const longText = encodeURIComponent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.')

const withText = makeScreenshotTests('/alert?text=Alert%20text', 'sinch-alert')
const withTextAndClose = makeScreenshotTests('/alert?text=Alert%20text&dismissable=true', 'sinch-alert')
const withTextAndButton = makeScreenshotTests('/alert?text=Alert%20text&action=Button', 'sinch-alert')
const withTextAndButtonAndClose = makeScreenshotTests('/alert?text=Alert%20text&action=Button&dismissable=true', 'sinch-alert')
const withTextAndButtonAndCloseExpanded = makeScreenshotTests('/alert?width=300&text=Alert%20text&action=Button&dismissable=true', 'sinch-alert')
const withTextAndButtonAndCloseNarrow = makeScreenshotTests('/alert?width=300&text=Alert%20text%20longer%20title&action=Button&dismissable=true', 'sinch-alert')
const withTextAndTitle = makeScreenshotTests('/alert?text=Alert%20text&title=Alert%20title', 'sinch-alert')
const withMultilineTextAndTitleAndButton = makeScreenshotTests(`/alert?width=400&text=${longText}&title=${longTitle}&action=Button&multiline=true`, 'sinch-alert')
const withMultilineTextAndTitleAndClose = makeScreenshotTests(`/alert?width=400&text=${longText}&title=${longTitle}&dismissable=true&multiline=true`, 'sinch-alert')
const withMultilineTextAndTitleButtonClose = makeScreenshotTests(`/alert?width=400&text=${longText}&title=${longTitle}&dismissable=true&action=Button&multiline=true`, 'sinch-alert')

test.only('type property', withText(async function* ({ $eval }) {
  await $eval((el) => {
    el.type = 'info'
  })
  yield { name: 'info' }

  await $eval((el) => {
    el.type = 'success'
  })
  yield { name: 'success' }

  await $eval((el) => {
    el.type = 'warn'
  })
  yield { name: 'warn' }

  await $eval((el) => {
    el.type = 'error'
  })
  yield { name: 'error' }
}))

test.only('type attribute', withText(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'info'))
  yield { name: 'info' }
  await $eval((el) => el.setAttribute('type', 'success'))
  yield { name: 'success' }
  await $eval((el) => el.setAttribute('type', 'warn'))
  yield { name: 'warn' }
  await $eval((el) => el.setAttribute('type', 'error'))
  yield { name: 'error' }
}))

test.only('text property', withText(async function* ({ $eval }) {
  await $eval((el) => {
    el.text = 'Updated text'
  })
  yield { name: 'updated' }
}))

test.only('text attribute', withText(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('text', 'Updated text')
  })
  yield { name: 'updated' }
}))

test.only('text close', withTextAndClose(async function* () {
  yield { name: 'shot' }
}))

test.only('text button', withTextAndButton(async function* () {
  yield { name: 'shot' }
}))

test.only('text button close', withTextAndButtonAndClose(async function* () {
  yield { name: 'shot' }
}))

test.only('text button close expanded', withTextAndButtonAndCloseExpanded(async function* () {
  yield { name: 'shot' }
}))

test.only('text button close narrow', withTextAndButtonAndCloseNarrow(async function* () {
  yield { name: 'shot' }
}))

test.only('multiline title text button', withMultilineTextAndTitleAndButton(async function* () {
  yield { name: 'shot' }
}))

test.only('multiline title text close', withMultilineTextAndTitleAndClose(async function* () {
  yield { name: 'shot' }
}))

test.only('multiline title text button close', withMultilineTextAndTitleButtonClose(async function* () {
  yield { name: 'shot' }
}))

test.only('multiline property', withTextAndTitle(async function* ({ $eval }) {
  await $eval((el) => {
    el.multiline = true
  })
  yield { name: 'enabled' }

  await $eval((el) => {
    el.multiline = false
  })
  yield { name: 'disabled' }
}))

test.only('multiline attribute', withTextAndTitle(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('multiline', ''))
  yield { name: 'enabled' }

  await $eval((el) => el.removeAttribute('multiline'))
  yield { name: 'disabled' }
}))
