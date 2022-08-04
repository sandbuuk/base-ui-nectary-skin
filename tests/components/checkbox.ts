import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withFitWidth = '/checkbox?text=Label'
const withInvalid = '/checkbox?text=Label&invalid=true'
const withNarrowLabel = '/checkbox?width=150&text=Label%20long%20long%20long%20long'
const withChecked = '/checkbox?width=100&text=Label&checked=true'
const withDisabledChecked = '/checkbox?width=100&text=Label&disabled=true&checked=true'
const withDisabledInvalidChecked = '/checkbox?width=100&text=Label&disabled=true&checked=true&invalid=true'
const withDisabledIndeterminate = '/checkbox?width=100&text=Label&disabled=true&checked=true&indeterminate=true'
const withDisabledInvalidIndeterminate = '/checkbox?width=100&text=Label&disabled=true&checked=true&indeterminate=true&invalid=true'
const checkDisabledChecked = makeAccessibilityTests('/checkbox?width=100&text=Label&disabled=true&checked=true', 'sinch-checkbox')

test('accessibility', checkDisabledChecked(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.text = null
  })
  yield
}))

test('checkbox screenshots', runScreenshotTests('sinch-checkbox', [
  {
    name: 'checked attribute',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('checked', ''))
      yield { name: 'checked' }

      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'checked property',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.checked = true
      })
      yield { name: 'checked' }

      await $eval((el) => {
        el.checked = false
      })
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'checked invalid',
    url: withInvalid,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.checked = true
      })
      yield { name: 'checked' }

      await $eval((el) => {
        el.checked = false
      })
      yield { name: 'unchecked' }

      await $eval((el) => {
        el.checked = true
        el.indeterminate = true
      })
      yield { name: 'indeterminate' }
    },
  },
  {
    name: 'focus',
    url: withFitWidth,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')

      await $eval((el) => {
        el.checked = true
      })
      yield { name: 'checked' }

      await $eval((el) => {
        el.checked = false
      })
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'focus invalid',
    url: withInvalid,
    async *fn({ page, $eval }) {
      await page.keyboard.press('Tab')

      await $eval((el) => {
        el.checked = true
      })
      yield { name: 'checked' }

      await $eval((el) => {
        el.checked = false
      })
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'indeterminate attribute',
    url: withChecked,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('indeterminate', ''))
      yield { name: 'line' }

      await $eval((el) => el.removeAttribute('indeterminate'))
      yield { name: 'checkmark' }
    },
  },
  {
    name: 'indeterminate property',
    url: withChecked,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.indeterminate = true
      })
      yield { name: 'line' }

      await $eval((el) => {
        el.indeterminate = false
      })
      yield { name: 'checkmark' }
    },
  },
  {
    name: 'text attribute',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated label'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('text', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'text property',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.text = 'Updated label'
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.text = ''
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'disabled property',
    url: withFitWidth,
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
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'disabled' }

      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'enabled' }
    },
  },
  {
    name: 'disabled checkmark',
    url: withDisabledChecked,
    async *fn() {
      yield { name: 'checked' }
    },
  },
  {
    name: 'disabled invalid checkmark',
    url: withDisabledInvalidChecked,
    async *fn() {
      yield { name: 'checked' }
    },
  },
  {
    name: 'disabled indeterminate',
    url: withDisabledIndeterminate,
    async *fn() {
      yield { name: 'checked' }
    },
  },
  {
    name: 'disabled invalid indeterminate',
    url: withDisabledInvalidIndeterminate,
    async *fn() {
      yield { name: 'checked' }
    },
  },
  {
    name: 'narrow',
    url: withNarrowLabel,
    async *fn() {
      yield { name: 'clip' }
    },
  },
  {
    name: 'mouse interaction',
    url: withFitWidth,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover_checked' }

      await page.mouse.down()
      yield { name: 'active_checked' }
    },
  },
  {
    name: 'invalid mouse interaction',
    url: withInvalid,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover_checked' }

      await page.mouse.down()
      yield { name: 'active_checked' }
    },
  },
  {
    name: 'custom events',
    url: withFitWidth,
    async *fn({ $, page }) {
      const testCheckbox = testCustomEvent(page, $)

      await testCheckbox('change', 'sinch-checkbox-change', true)
      await testCheckbox('focusin', 'sinch-checkbox-focus')
      await testCheckbox('focusout', 'sinch-checkbox-blur')
    },
  },
  {
    name: 'native events',
    url: withFitWidth,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-checkbox-change', 'sinch-checkbox-focus', 'sinch-checkbox-blur')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-checkbox-focus', detail: null },
        { type: 'sinch-checkbox-blur', detail: null },
      ])

      const bb = (await $.boundingBox())!

      await page.mouse.click(bb.x + 5, bb.y + 5)
      await page.mouse.click(bb.x + 5, bb.y + 5)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-checkbox-focus', detail: null },
        { type: 'sinch-checkbox-change', detail: true },
        { type: 'sinch-checkbox-change', detail: false },
      ])
    },
  },
]))
