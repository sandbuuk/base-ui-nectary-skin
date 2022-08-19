import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const contentWidth = '/toggle?text=Label'
const narrowWidth = '/toggle?width=150&text=Label%20long%20long%20long%20long'
const checked = '/toggle?text=Label&checked=true'
const disabled = '/toggle?text=Label&disabled=true&checked=true'
const disabledLabeled = '/toggle?text=Label&disabled=true&checked=true&labeled=true'
const disabledSmall = '/toggle?text=Label&disabled=true&checked=true&small=true'
const checkToggle = makeAccessibilityTests('/toggle?text=Label', 'sinch-toggle')

test('accessibility', checkToggle(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.text = null
  })
  yield
}))

test('toggle screenshots', runScreenshotTests('sinch-toggle', [
  {
    name: 'checked attribute',
    url: contentWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('checked', ''))
      yield { name: 'checked' }

      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'checked property',
    url: contentWidth,
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
    name: 'small attribute',
    url: checked,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'true' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'false' }
    },
  },
  {
    name: 'small property',
    url: checked,
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
    name: 'labeled attribute',
    url: checked,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('labeled', ''))
      yield { name: 'on' }

      // Uncheck toggle to show "off" label
      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'off' }

      await $eval((el) => el.removeAttribute('labeled'))
      yield { name: 'no-labels' }
    },
  },
  {
    name: 'labeled property',
    url: checked,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.labeled = true
      })
      yield { name: 'on' }

      // Uncheck toggle to show "off" label
      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'off' }

      await $eval((el) => {
        el.labeled = false
      })
      yield { name: 'no-labels' }
    },
  },
  {
    name: 'text attribute',
    url: contentWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated label'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('text', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'text property',
    url: contentWidth,
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
    url: contentWidth,
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
    url: contentWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'disabled' }

      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'enabled' }
    },
  },
  {
    name: 'disabled small',
    url: disabledSmall,
    async *fn({ $eval }) {
      yield { name: 'checked' }
      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'disabled labeled',
    url: disabledLabeled,
    async *fn({ $eval }) {
      yield { name: 'checked' }
      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'disabled colors',
    url: disabled,
    async *fn({ $eval }) {
      yield { name: 'checked' }
      await $eval((el) => el.removeAttribute('checked'))
      yield { name: 'unchecked' }
    },
  },
  {
    name: 'narrow',
    url: narrowWidth,
    async *fn() {
      yield { name: 'clip' }
    },
  },
  {
    name: 'custom events',
    url: contentWidth,
    async *fn({ $, page }) {
      const testCheckbox = testCustomEvent(page, $)

      await testCheckbox('-change', 'sinch-toggle-change', true)
      await testCheckbox('-focus', 'sinch-toggle-focus')
      await testCheckbox('-blur', 'sinch-toggle-blur')
    },
  },
  {
    name: 'native events',
    url: contentWidth,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-toggle-change', 'sinch-toggle-focus', 'sinch-toggle-blur')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-toggle-focus', detail: null },
        { type: 'sinch-toggle-blur', detail: null },
      ])

      const bb = (await $.boundingBox())!

      await page.mouse.click(bb.x + 5, bb.y + bb.height / 2)
      await page.mouse.click(bb.x + 5, bb.y + bb.height / 2)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-toggle-focus', detail: null },
        { type: 'sinch-toggle-change', detail: true },
        { type: 'sinch-toggle-change', detail: false },
      ])
    },
  },
]))
