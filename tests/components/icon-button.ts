import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/icon-button'
const withSpinner = '/icon-button?spinner=true'
const withSpinnerDisabled = '/icon-button?spinner=true&disabled=true'
const checkShot = makeAccessibilityTests('/icon-button', 'sinch-icon-button')

test('accessibility', checkShot(async function* () {
  yield
}))

test('icon-button screenshots', runScreenshotTests('sinch-icon-button', [
  {
    name: 'focus',
    url: shot,
    async *fn({ $ }) {
      await $.focus()
      yield { name: 'shot' }
    },
  },
  {
    name: 'disabled property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.disabled = true
      })
      yield { name: 'disabled' }

      await $eval((el) => {
        el.disabled = false
      })
      yield { name: 'enabled' }
    },
  },
  {
    name: 'disabled attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'disabled' }

      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'enabled' }
    },
  },
  {
    name: 'small property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.small = true
      })
      yield { name: 'true' }

      await $eval((el) => {
        el.small = false
      })
      yield { name: 'false' }
    },
  },
  {
    name: 'small attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'true' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'false' }
    },
  },
  {
    name: 'mouse interaction',
    url: shot,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'spinner',
    url: withSpinner,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      yield { name: 'shot' }

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'spinner disabled',
    url: withSpinnerDisabled,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))

test('icon-button events', runScreenshotTests('sinch-icon-button', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      const testButton = testCustomEvent(page, $)

      await testButton('click', 'sinch-icon-button-click')
      await testButton('focusin', 'sinch-icon-button-focus')
      await testButton('focusout', 'sinch-icon-button-blur')
    },
  },
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-icon-button-focus', 'sinch-icon-button-blur', 'sinch-icon-button-click')
      await $.focus()
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-icon-button-focus', detail: null },
        { type: 'sinch-icon-button-blur', detail: null },
      ])

      await $.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-icon-button-focus', detail: null },
        { type: 'sinch-icon-button-click', detail: null },
      ])
    },
  },
]))
