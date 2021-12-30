import { test } from '@playwright/test'
import { makeScreenshotTests } from '../utils'

const shot = makeScreenshotTests(
  '/alert?width=300&text=Alert%20text',
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
    el.actionText = 'Action'
    el.multiline = false
  })
  yield { name: 'action-no-multiline' }

  await $eval((el) => {
    el.title = 'Alert Title'
    el.actionText = ''
    el.multiline = false
  })
  yield { name: 'title-no-multiline' }

  await $eval((el) => {
    el.title = 'Alert Title'
    el.actionText = 'Action'
    el.multiline = true
  })
  yield { name: 'title-action-multiline' }

  await $eval((el) => {
    el.title = ''
    el.actionText = 'Action'
    el.multiline = true
  })
  yield { name: 'action-multiline' }
  await $eval((el) => {
    el.title = 'Alert Title'
    el.actionText = ''
    el.multiline = true
  })
  yield { name: 'title-multiline' }
  await $eval((el) => {
    el.title = 'Alert Title'
    el.actionText = 'Action'
    el.dismissable = true
    el.multiline = true
  })
  yield { name: 'title-action-dismissable-multiline' }
}))

test('multiline attribute', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.setAttribute('title', '')
    el.setAttribute('actiontext', 'Action')
  })
  yield { name: 'action-no-multiline' }

  await $eval((el) => {
    el.setAttribute('actiontext', '')
    el.setAttribute('title', 'Alert Title')
  })
  yield { name: 'title-no-multiline' }

  await $eval((el) => {
    el.setAttribute('multiline', '')
    el.setAttribute('title', 'Alert Title')
    el.setAttribute('actiontext', 'Action')
  })
  yield { name: 'title-action-multiline' }

  await $eval((el) => {
    el.removeAttribute('title')
    el.setAttribute('actiontext', 'Action')
    el.setAttribute('multiline', '')
  })
  yield { name: 'action-multiline' }

  await $eval((el) => {
    el.removeAttribute('actiontext')
    el.setAttribute('title', 'Alert Title')
    el.setAttribute('multiline', '')
  })
  yield { name: 'title-multiline' }

  await $eval((el) => {
    el.setAttribute('title', 'Alert Title')
    el.setAttribute('actiontext', 'Action')
    el.setAttribute('dismissable', '')
    el.setAttribute('multiline', '')
  })
  yield { name: 'title-action-dismissable-multiline' }
}))
