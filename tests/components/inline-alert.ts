import { expect, test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/inline-alert/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withText = '/inline-alert?type=info'
const withTextAndClose = '/inline-alert?type=info&close=true'
const withTextAndButton = '/inline-alert?type=info&action=true'
const withTextAndButtonAndClose = '/inline-alert?type=info&action=true&close=true'
const withTextAndButtonAndCloseExpanded = '/inline-alert?width=500&type=info&action=true&close=true'
const withMarkdownAndButtonAndCloseExpanded = '/inline-alert?width=500&example=md&type=info&action=true&close=true'
const withTextAndButtonAndCloseNarrow = '/inline-alert?width=300&type=info&action=true&close=true'
const checkMultilineTextTitleButtonClose = makeAccessibilityTests(`/inline-alert?width=400&type=info&close=true&action=true&multiline=true`, 'sinch-inline-alert')

test('accessibility', checkMultilineTextTitleButtonClose({
  async *fn() {
    yield
  },
}))

test('inline-alert screenshots', runScreenshotTests('sinch-inline-alert', [
  {
    name: 'type',
    url: withText,
    async *fn({ $eval }) {
      for (const type of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), type)
        yield { name: type }
      }

      /* Property */
      const attrValues = await $eval((el) => {
        el.type = 'info'

        return el.getAttribute('type')
      })

      expect(attrValues).toBe('info')
    },
  },
  {
    name: 'text',
    url: withText,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('text', 'Updated text')
      })
      yield { name: 'updated' }

      /* Property */
      const attrValue = await $eval((el) => {
        el.text = null

        return el.getAttribute('text')
      })

      expect(attrValue).toBe(null)
    },
  },
  {
    name: 'text close',
    url: withTextAndClose,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'text button',
    url: withTextAndButton,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'text button close',
    url: withTextAndButtonAndClose,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'text button close expanded',
    url: withTextAndButtonAndCloseExpanded,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'text button close narrow',
    url: withTextAndButtonAndCloseNarrow,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'md button close expanded',
    url: withMarkdownAndButtonAndCloseExpanded,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))

test('inline-alert events', runScreenshotTests('sinch-inline-alert', [
  {
    name: 'custom events',
    url: withTextAndButtonAndClose,
    async *fn({ $, page }) {
      const testButton = testCustomEvent(page, $.locator('sinch-button'))

      await testButton('-click', 'sinch-inline-alert-button-click')
      await testButton('-focus', 'sinch-inline-alert-button-focus')
      await testButton('-blur', 'sinch-inline-alert-button-blur')

      const testClose = testCustomEvent(page, $.locator('sinch-icon-close'))

      await testClose('-click', 'sinch-inline-alert-close-click')
      await testClose('-focus', 'sinch-inline-alert-close-focus')
      await testClose('-blur', 'sinch-inline-alert-close-blur')
    },
  },
  {
    name: 'native events',
    url: withTextAndButtonAndClose,
    async *fn({ page }) {
      await subscribeToEvents(
        page,
        'sinch-inline-alert-button-focus',
        'sinch-inline-alert-button-blur',
        'sinch-inline-alert-button-click',
        'sinch-inline-alert-close-focus',
        'sinch-inline-alert-close-blur',
        'sinch-inline-alert-close-click'
      )

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-inline-alert-button-focus', detail: null },
        { type: 'sinch-inline-alert-button-click', detail: null },
        { type: 'sinch-inline-alert-button-blur', detail: null },
        { type: 'sinch-inline-alert-close-focus', detail: null },
        { type: 'sinch-inline-alert-close-click', detail: null },
        { type: 'sinch-inline-alert-close-blur', detail: null },
      ])
    },
  },
]))

