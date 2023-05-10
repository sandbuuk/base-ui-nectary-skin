import { expect, test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/button/utils'
import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withFitWidth = '/button?type=primary&text=Button&icon-left=true'
const withNarrowWidth = '/button?width=150&type=primary&icon-left=true&icon-right=true&text=Button%20text%20long%20long%20long'
const withWideWidth = '/button?width=250&type=primary&icon-left=true&icon-right=true&text=Button'
const withDisabled = '/button?type=primary&text=Button&disabled=true&spinner=true&icon-right=true'
const withSpinner = '/button?type=primary&text=Button&spinner=true&icon-right=true'
const checkFitWidth = makeAccessibilityTests('/button?type=primary&text=Button&icon-left=true', 'sinch-button')

test('accessibility', checkFitWidth({
  async *fn() {
    yield
  },
}))

test('button screenshots', runScreenshotTests('sinch-button', [
  {
    name: 'type',
    url: withFitWidth,
    async *fn({ $eval }) {
      for (const type of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), type)
        yield { name: type }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.type = 'destructive'

        return el.getAttribute('type')
      })

      expect(attrValue).toBe('destructive')
    },
  },
  {
    name: 'size',
    url: withSpinner,
    async *fn({ $eval }) {
      for (const size of sizeValues) {
        await $eval((el, value) => el.setAttribute('size', value), size)
        yield { name: size }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.size = 'l'

        return el.getAttribute('size')
      })

      expect(attrValue).toBe('l')
    },
  },
  {
    name: 'disabled',
    url: withDisabled,
    async *fn({ $eval }) {
      for (const type of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), type)
        yield { name: type }
      }
    },
  },
  {
    name: 'keyboard focus',
    url: withFitWidth,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }
    },
  },
  {
    name: 'text',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated'))
      yield { name: 'updated' }

      /* Property */
      const attrValue = await $eval((el) => {
        el.text = 'Text'

        return el.getAttribute('text')
      })

      expect(attrValue).toBe('Text')
    },
  },
  {
    name: 'narrow',
    url: withNarrowWidth,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'wide',
    url: withWideWidth,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'mouse interaction',
    url: withSpinner,
    async *fn({ $, $eval, page }) {
      const ct = await centerBB($)

      await page.mouse.move(ct.x, ct.y)

      for (const type of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), type)

        await page.mouse.up()
        yield { name: `${type} hover` }

        await page.mouse.down()
        yield { name: `${type} active` }
      }
    },
  },
  {
    name: 'color background',
    url: withSpinner,
    async *fn({ $eval, $, page }) {
      await $eval((el) => {
        document.body.style.backgroundColor = 'beige'
        el.setAttribute('type', 'tertiary')
      })

      const ct = await centerBB($)

      yield { name: 'idle' }

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
]))

test('button events', runScreenshotTests('sinch-button', [
  {
    name: 'custom events',
    url: withFitWidth,
    async *fn({ page, $ }) {
      const testButton = testCustomEvent(page, $)

      await testButton('-click', 'sinch-button-click')
      await testButton('-focus', 'sinch-button-focus')
      await testButton('-blur', 'sinch-button-blur')
    },
  },
  {
    name: 'native events',
    url: withFitWidth,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-button-focus', 'sinch-button-blur', 'sinch-button-click')
      // Focus by keyboard
      await page.keyboard.press('Tab')
      // Click while focused
      await page.keyboard.press('Enter')
      await page.keyboard.press('Space')
      // Defocus
      await page.mouse.click(0, 0)

      await $.click()
      await $.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-button-focus', detail: null },
        { type: 'sinch-button-click', detail: null },
        { type: 'sinch-button-click', detail: null },
        { type: 'sinch-button-blur', detail: null },
        // Click focuses element back
        { type: 'sinch-button-focus', detail: null },
        { type: 'sinch-button-click', detail: null },
        { type: 'sinch-button-click', detail: null },
      ])
    },
  },
]))
