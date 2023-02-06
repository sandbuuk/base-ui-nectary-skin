import { expect, test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/alert/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withText = '/alert?type=info'
const withTextAndClose = '/alert?type=info&close=true'
const withTextAndButton = '/alert?type=info&action=true'
const withTextAndButtonAndClose = '/alert?type=info&action=true&close=true'
const withTextAndButtonAndCloseExpanded = '/alert?width=500&type=info&action=true&close=true'
const withMarkdownAndButtonAndCloseExpanded = '/alert?width=500&example=md&type=info&action=true&close=true'
const withTextAndButtonAndCloseNarrow = '/alert?width=300&type=info&action=true&close=true'
const checkMultilineTextTitleButtonClose = makeAccessibilityTests(`/alert?width=400&type=info&close=true&action=true&multiline=true`, 'sinch-alert')

test('alert accessibility', checkMultilineTextTitleButtonClose({
  async *fn() {
    yield
  },
}))

test('alert screenshots', runScreenshotTests('sinch-alert', [
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
    name: 'text attribute',
    url: withText,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('text', 'Updated text')
      })
      yield { name: 'updated' }

      /* Property */
      const attrValues = await $eval((el) => {
        el.text = 'Updated text'

        return el.getAttribute('text')
      })

      expect(attrValues).toBe('Updated text')
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

test('alert events', runScreenshotTests('sinch-alert', [
  {
    name: 'custom events',
    url: withTextAndButtonAndClose,
    async *fn({ $, page }) {
      const testButton = testCustomEvent(page, $.locator('sinch-button'))

      await testButton('-click', 'sinch-alert-button-click')
      await testButton('-focus', 'sinch-alert-button-focus')
      await testButton('-blur', 'sinch-alert-button-blur')

      const testClose = testCustomEvent(page, $.locator('sinch-icon-button'))

      await testClose('-click', 'sinch-alert-close-click')
      await testClose('-focus', 'sinch-alert-close-focus')
      await testClose('-blur', 'sinch-alert-close-blur')
    },
  },
  {
    name: 'native events',
    url: withTextAndButtonAndClose,
    async *fn({ page }) {
      await subscribeToEvents(
        page,
        'sinch-alert-button-focus',
        'sinch-alert-button-blur',
        'sinch-alert-button-click',
        'sinch-alert-close-focus',
        'sinch-alert-close-blur',
        'sinch-alert-close-click'
      )

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-alert-button-focus', detail: null },
        { type: 'sinch-alert-button-click', detail: null },
        { type: 'sinch-alert-button-blur', detail: null },
        { type: 'sinch-alert-close-focus', detail: null },
        { type: 'sinch-alert-close-click', detail: null },
        { type: 'sinch-alert-close-blur', detail: null },
      ])
    },
  },
]))

