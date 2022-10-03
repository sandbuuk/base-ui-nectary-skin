import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/icon-button'
const withSmall = '/icon-button?small=true'
const withSpinner = '/icon-button?spinner=true'
const withSpinnerDisabled = '/icon-button?spinner=true&disabled=true'
const checkShot = makeAccessibilityTests('/icon-button', 'sinch-icon-button')

test('accessibility', checkShot(async function* () {
  yield
}))

test('icon-button screenshots', runScreenshotTests('sinch-icon-button', [
  {
    name: 'keyboard focus',
    url: shot,
    async *fn({ $, page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }

      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'hover' }
    },
  },
  {
    name: 'small keyboard focus',
    url: withSmall,
    async *fn({ $, page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }

      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'hover' }
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
      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'small mouse interaction',
    url: withSmall,
    async *fn({ $, page }) {
      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'spinner',
    url: withSpinner,
    async *fn({ $, page }) {
      const ct = await centerBB($)

      yield { name: 'shot' }

      await page.mouse.move(ct.x, ct.y)
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
  {
    name: 'css color variables',
    url: shot,
    async *fn({ page }) {
      await page.evaluate(() => {
        const style = document.createElement('style')

        style.innerHTML = ':root { --sinch-icon-button-color: red; }'

        document.body.prepend(style)
      })
      yield { name: 'shot' }
    },
  },
  {
    name: 'color background',
    url: shot,
    async *fn({ $, page }) {
      await page.evaluate(() => {
        document.body.style.backgroundColor = 'beige'
      })

      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
]))

test('icon-button events', runScreenshotTests('sinch-icon-button', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      const testButton = testCustomEvent(page, $)

      await testButton('-click', 'sinch-icon-button-click')
      await testButton('-focus', 'sinch-icon-button-focus')
      await testButton('-blur', 'sinch-icon-button-blur')
    },
  },
  {
    name: 'native events',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-icon-button-focus', 'sinch-icon-button-blur', 'sinch-icon-button-click')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-icon-button-focus', detail: null },
        { type: 'sinch-icon-button-blur', detail: null },
      ])

      const ct = await centerBB($)

      await page.mouse.click(ct.x, ct.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-icon-button-focus', detail: null },
        { type: 'sinch-icon-button-click', detail: null },
      ])
    },
  },
]))
