import { test } from '@playwright/test'
import { makeScreenshotTests } from '../screenshot-tests'

const shot = makeScreenshotTests('/spinner', 'sinch-spinner')

test('type attribute', shot(async function* ({ $eval }) {
  await $eval((el) => el.setAttribute('type', 'large'))
  yield { name: 'large' }
  await $eval((el) => el.setAttribute('type', 'medium'))
  yield { name: 'medium' }
  await $eval((el) => el.setAttribute('type', 'small'))
  yield { name: 'small' }
}))

test('type property', shot(async function* ({ $eval }) {
  await $eval((el) => {
    el.type = 'large'
  })
  yield { name: 'large' }

  await $eval((el) => {
    el.type = 'medium'
  })
  yield { name: 'medium' }

  await $eval((el) => {
    el.type = 'small'
  })
  yield { name: 'small' }
}))

test('css color variables', shot(async function* ({ page }) {
  await page.evaluate(() => {
    const style = document.createElement('style')

    style.innerHTML = ':root { --sinch-color-spinner-bg: green; --sinch-color-spinner-fg: red; }'

    document.body.prepend(style)
  })
  yield { name: 'external' }
}))
