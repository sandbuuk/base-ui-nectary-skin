import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, getBB, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withFitWidth = '/checkbox?text=Label'
const withNarrowLabel = '/checkbox?width=150&text=Label%20long%20long%20long%20long'
const check = makeAccessibilityTests('/checkbox?width=100&text=Label&checked=true', 'sinch-checkbox')

test('accessibility', check({
  async *fn() {
    yield
  },
}))

test('checkbox screenshots', runScreenshotTests('sinch-checkbox', [
  {
    name: 'checked',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('checked', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'unset' }

      await $eval((el) => {
        el.setAttribute('checked', '')
        el.setAttribute('indeterminate', '')
      })
      yield { name: 'indeterminate' }

      await $eval((el) => {
        el.setAttribute('invalid', '')
        el.removeAttribute('checked')
        el.removeAttribute('indeterminate')
      })
      yield { name: 'invalid unset' }

      await $eval((el) => {
        el.setAttribute('invalid', '')
        el.setAttribute('checked', '')
        el.removeAttribute('indeterminate')
      })
      yield { name: 'invalid' }

      await $eval((el) => {
        el.setAttribute('invalid', '')
        el.setAttribute('checked', '')
        el.setAttribute('indeterminate', '')
      })
      yield { name: 'invalid indeterminate' }
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
      await $eval((el) => el.setAttribute('text', 'Updated label'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('text', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'disabled',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'unset' }

      await $eval((el) => {
        el.setAttribute('disabled', '')
        el.setAttribute('checked', '')
      })
      yield { name: 'checked' }

      await $eval((el) => {
        el.setAttribute('disabled', '')
        el.setAttribute('checked', '')
        el.setAttribute('indeterminate', '')
      })
      yield { name: 'indeterminate' }

      await $eval((el) => {
        el.setAttribute('disabled', '')
        el.setAttribute('invalid', '')
        el.removeAttribute('checked')
        el.removeAttribute('indeterminate')
      })
      yield { name: 'invalid' }

      await $eval((el) => {
        el.setAttribute('disabled', '')
        el.setAttribute('invalid', '')
        el.setAttribute('checked', '')
        el.removeAttribute('indeterminate')
      })
      yield { name: 'invalid checked' }

      await $eval((el) => {
        el.setAttribute('disabled', '')
        el.setAttribute('invalid', '')
        el.setAttribute('checked', '')
        el.setAttribute('indeterminate', '')
      })
      yield { name: 'invalid indeterminate' }
    },
  },
  {
    name: 'narrow',
    url: withNarrowLabel,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'mouse interaction',
    url: withFitWidth,
    async *fn({ $eval, $, page }) {
      const rect = await getBB($)

      await page.mouse.move(rect.x, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover checked' }

      await page.mouse.down()
      yield { name: 'active checked' }

      await page.mouse.up()
      await $eval((el) => {
        el.setAttribute('invalid', '')
        el.removeAttribute('checked')
      })

      yield { name: 'invalid hover' }

      await page.mouse.down()
      yield { name: 'invalid active' }

      await page.mouse.up()
      yield { name: 'invalid hover checked' }

      await page.mouse.down()
      yield { name: 'invalid active checked' }
    },
  },
  {
    name: 'custom events',
    url: withFitWidth,
    async *fn({ $, page }) {
      const testCheckbox = testCustomEvent(page, $)

      await testCheckbox('-change', 'sinch-checkbox-change', true)
      await testCheckbox('-focus', 'sinch-checkbox-focus')
      await testCheckbox('-blur', 'sinch-checkbox-blur')
    },
  },
  {
    name: 'native events',
    url: withFitWidth,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-checkbox-change', 'sinch-checkbox-focus', 'sinch-checkbox-blur')

      const ct = await getBB($)

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.mouse.click(ct.x + 5, ct.y + 5)
      await page.mouse.click(ct.x + 5, ct.y + 5)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-checkbox-focus', detail: null },
        { type: 'sinch-checkbox-blur', detail: null },
        { type: 'sinch-checkbox-focus', detail: null },
        { type: 'sinch-checkbox-change', detail: true },
        { type: 'sinch-checkbox-change', detail: false },
      ])
    },
  },
]))
