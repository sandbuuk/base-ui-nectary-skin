import { expect, test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/inline-alert/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const longTitle = encodeURIComponent('It has survived not only five centuries, but also the leap into electronic typesetting')
const longText = encodeURIComponent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.')

const withText = '/inline-alert?type=info&caption=Title&text=Alert%20text'
const withTextAndClose = '/inline-alert?type=info&caption=Title&text=Alert%20text&close=true'
const withTextAndButton = '/inline-alert?type=info&caption=Title&text=Alert%20text&action=true'
const withTextAndButtonAndClose = '/inline-alert?type=info&caption=Title&text=Alert%20text&action=true&close=true'
const withTextAndButtonAndCloseExpanded = '/inline-alert?width=400&type=info&caption=Title&text=Alert%20text&action=true&close=true'
const withTextAndButtonAndCloseNarrow = '/inline-alert?width=300&type=info&caption=Title&text=Alert%20text%20longer%20title&action=true&close=true'
const checkMultilineTextTitleButtonClose = makeAccessibilityTests(`/inline-alert?width=400&type=info&text=${longText}&caption=${longTitle}&close=true&action=true&multiline=true`, 'sinch-inline-alert')

test('accessibility', checkMultilineTextTitleButtonClose({
  async *fn() {
    yield
  },
}))

test('alert screenshots', runScreenshotTests('sinch-inline-alert', [
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

