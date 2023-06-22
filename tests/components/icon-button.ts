import { expect, test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/icon-button/utils'
import { sizeExValues } from '@sinch-engage/nectary/utils/size'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/icon-button'
const withSpinner = '/icon-button?spinner=true'
const checkShot = makeAccessibilityTests('/icon-button', 'sinch-icon-button')

test('accessibility', checkShot({
  async *fn() {
    yield
  },
}))

test('icon-button screenshots', runScreenshotTests('sinch-icon-button', [
  {
    name: 'type',
    url: shot,
    async *fn({ $eval }) {
      for (const value of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), value)
        yield { name: value }
      }
    },
  },
  {
    name: 'size',
    url: shot,
    async *fn({ $eval }) {
      for (const value of sizeExValues) {
        await $eval((el, value) => {
          el.setAttribute('type', 'primary')
          el.setAttribute('size', value)
        }, value)
        yield { name: value }
      }
    },
  },
  {
    name: 'keyboard focus',
    url: shot,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }
    },
  },
  {
    name: 'disabled',
    url: shot,
    async *fn({ $eval }) {
      for (const type of typeValues) {
        await $eval((el, type) => {
          el.setAttribute('type', type)
          el.setAttribute('disabled', '')
        }, type)
        yield { name: type }
      }
    },
  },
  {
    name: 'mouse interaction',
    url: shot,
    async *fn({ $eval, $, page }) {
      const ct = await centerBB($)

      for (const type of typeValues) {
        await $eval((el, type) => el.setAttribute('type', type), type)

        await page.mouse.move(ct.x, ct.y)
        await page.mouse.down()
        yield { name: `${type} active` }

        await page.mouse.up()
        yield { name: `${type} hover` }
        await page.mouse.move(0, 0)
      }
    },
  },
  {
    name: 'spinner',
    url: withSpinner,
    async *fn({ $eval, $, page }) {
      const ct = await centerBB($)

      yield { name: 'idle' }

      await page.mouse.move(ct.x, ct.y)
      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover' }

      await page.mouse.move(0, 0)
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'disabled' }
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

      await page.mouse.move(0, 0)
    },
  },
  {
    name: 'tooltip',
    url: shot,
    async *fn({ page, $, $eval }) {
      const pt = await centerBB($)

      await page.mouse.move(pt.x, pt.y)
      await page.waitForTimeout(1200)

      yield { name: 'shot', includeRects: [await $eval((el) => el.tooltipRect)] }
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
      await testButton('-tooltip-show', 'sinch-icon-button-tooltip-show')
      await testButton('-tooltip-hide', 'sinch-icon-button-tooltip-hide')
    },
  },
  {
    name: 'native events',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-icon-button-focus', 'sinch-icon-button-blur', 'sinch-icon-button-click')

      // Focus by keyboard
      await page.keyboard.press('Tab')
      // Keyboard clicks while focused
      await page.keyboard.press('Enter')
      await page.keyboard.press('Space')
      // Defocus
      await page.mouse.click(0, 0)

      await $.click()
      await $.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-icon-button-focus', detail: null },
        { type: 'sinch-icon-button-click', detail: null },
        { type: 'sinch-icon-button-click', detail: null },
        { type: 'sinch-icon-button-blur', detail: null },
        { type: 'sinch-icon-button-focus', detail: null },
        { type: 'sinch-icon-button-click', detail: null },
        { type: 'sinch-icon-button-click', detail: null },
      ])
    },
  },
  {
    name: 'tooltip native events',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-icon-button-tooltip-show', 'sinch-icon-button-tooltip-hide')

      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)
      await page.waitForTimeout(1200)
      await page.mouse.move(0, 0)
      await page.waitForTimeout(300)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-icon-button-tooltip-show', detail: null },
        { type: 'sinch-icon-button-tooltip-hide', detail: null },
      ])
    },
  },
]))
