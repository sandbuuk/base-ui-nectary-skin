import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests(
  '/alert',
  'sinch-alert'
)

test('type property', shot(async function* ({ $eval }) {
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

test('type attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'info'))
  yield { name: 'info' }
  await $eval((el) => el.setAttribute('type', 'success'))
  yield { name: 'success' }
  await $eval((el) => el.setAttribute('type', 'warn'))
  yield { name: 'warn' }
  await $eval((el) => el.setAttribute('type', 'error'))
  yield { name: 'error' }
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

test('dismissable attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('dismissable', ''))
  yield { name: 'enabled' }

  await $eval((el) => el.removeAttribute('dismissable'))
  yield { name: 'disabled' }
}))

test('dismissable property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.dismissable = true
  })
  yield { name: 'enabled' }

  await $eval((el) => {
    el.dismissable = false
  })
  yield { name: 'disabled' }
}))

test('multiline property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.title = ''
    el.text = 'Alert text'
    el.actionText = 'Action'
    el.multiline = false
  })
  yield { name: 'action-no-multiline' }

  await $eval((el) => {
    el.title = 'Alert Title'
    el.text = 'Alert text'
    el.actionText = ''
    el.multiline = false
  })
  yield { name: 'title-no-multiline' }

  await $eval((el) => {
    el.title = 'Alert Title'
    el.text = 'Alert text'
    el.actionText = 'Action'
    el.multiline = true
  })
  yield { name: 'title-action-multiline' }

  await $eval((el) => {
    el.title = ''
    el.text = 'Alert text'
    el.actionText = 'Action'
    el.multiline = true
  })
  yield { name: 'action-multiline' }
  await $eval((el) => {
    el.title = 'Alert Title'
    el.text = 'Alert text'
    el.actionText = ''
    el.multiline = true
  })
  yield { name: 'title-multiline' }
  await $eval((el) => {
    el.title = 'Alert Title'
    el.actionText = 'Action'
    el.text = 'Alert text'
    el.dismissable = true
    el.multiline = true
  })
  yield { name: 'title-action-dismissable-multiline' }
}))

test('multiline attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('title', '')
    el.setAttribute('text', 'Alert text')
    el.setAttribute('action-text', 'Action')
  })
  yield { name: 'action-no-multiline' }

  await $eval((el) => {
    el.setAttribute('action-text', '')
    el.setAttribute('text', 'Alert text')
    el.setAttribute('title', 'Alert Title')
  })
  yield { name: 'title-no-multiline' }

  await $eval((el) => {
    el.setAttribute('multiline', '')
    el.setAttribute('title', 'Alert Title')
    el.setAttribute('text', 'Alert text')
    el.setAttribute('action-text', 'Action')
  })
  yield { name: 'title-action-multiline' }

  await $eval((el) => {
    el.removeAttribute('title')
    el.setAttribute('text', 'Alert text')
    el.setAttribute('action-text', 'Action')
    el.setAttribute('multiline', '')
  })
  yield { name: 'action-multiline' }

  await $eval((el) => {
    el.removeAttribute('action-text')
    el.setAttribute('text', 'Alert text')
    el.setAttribute('title', 'Alert Title')
    el.setAttribute('multiline', '')
  })
  yield { name: 'title-multiline' }

  await $eval((el) => {
    el.setAttribute('title', 'Alert Title')
    el.setAttribute('text', 'Alert text')
    el.setAttribute('action-text', 'Action')
    el.setAttribute('dismissable', '')
    el.setAttribute('multiline', '')
  })
  yield { name: 'title-action-dismissable-multiline' }
}))
