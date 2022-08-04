import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const longTitle = encodeURIComponent('It has survived not only five centuries, but also the leap into electronic typesetting')
const longText = encodeURIComponent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.')

const withText = '/alert?type=info&text=Alert%20text'
const withTextAndClose = '/alert?type=info&text=Alert%20text&dismissable=true'
const withTextAndButton = '/alert?type=info&text=Alert%20text&action=Button'
const withTextAndButtonAndClose = '/alert?type=info&text=Alert%20text&action=Button&dismissable=true'
const withTextAndButtonAndCloseExpanded = '/alert?width=300&type=info&text=Alert%20text&action=Button&dismissable=true'
const withTextAndButtonAndCloseNarrow = '/alert?width=300&type=info&text=Alert%20text%20longer%20title&action=Button&dismissable=true'
const withTextAndTitle = '/alert?type=info&text=Alert%20text&title=Alert%20title'
const withMultilineTextAndTitleAndButton = `/alert?width=400&type=info&text=${longText}&title=${longTitle}&action=Button&multiline=true`
const withMultilineTextAndTitleAndClose = `/alert?width=400&type=info&text=${longText}&title=${longTitle}&dismissable=true&multiline=true`
const withMultilineTextAndTitleButtonClose = `/alert?width=400&type=info&text=${longText}&title=${longTitle}&dismissable=true&action=Button&multiline=true`
const checkMultilineTextTitleButtonClose = makeAccessibilityTests(`/alert?width=400&type=info&text=${longText}&title=${longTitle}&dismissable=true&action=Button&multiline=true`, 'sinch-alert')

test('accessibility', checkMultilineTextTitleButtonClose(async function* () {
  yield
}))

test('alert screenshots', runScreenshotTests('sinch-alert', [
  {
    name: 'type property',
    url: withText,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.type = 'info'
      })
      yield { name: 'info' }

      await $eval((el) => {
        el.type = 'success'
      })
      yield { name: 'success' }

      await $eval((el) => {
        el.type = 'warn'
      })
      yield { name: 'warn' }

      await $eval((el) => {
        el.type = 'error'
      })
      yield { name: 'error' }
    },
  },
  {
    name: 'type attribute',
    url: withText,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'info'))
      yield { name: 'info' }
      await $eval((el) => el.setAttribute('type', 'success'))
      yield { name: 'success' }
      await $eval((el) => el.setAttribute('type', 'warn'))
      yield { name: 'warn' }
      await $eval((el) => el.setAttribute('type', 'error'))
      yield { name: 'error' }
    },
  },
  {
    name: 'text property',
    url: withText,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.text = 'Updated text'
      })
      yield { name: 'updated' }
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
    name: 'multiline title text button',
    url: withMultilineTextAndTitleAndButton,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'multiline title text close',
    url: withMultilineTextAndTitleAndClose,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'multiline title text button close',
    url: withMultilineTextAndTitleButtonClose,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'multiline property',
    url: withTextAndTitle,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.multiline = true
      })
      yield { name: 'enabled' }

      await $eval((el) => {
        el.multiline = false
      })
      yield { name: 'disabled' }
    },
  },
  {
    name: 'multiline attribute',
    url: withTextAndTitle,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('multiline', ''))
      yield { name: 'enabled' }

      await $eval((el) => el.removeAttribute('multiline'))
      yield { name: 'disabled' }
    },
  },
  {
    name: 'custom events',
    url: withTextAndButtonAndClose,
    async *fn({ $, page }) {
      const testButton = testCustomEvent(page, $.locator('sinch-alert-button'))

      await testButton('click', 'sinch-alert-button-click')
      await testButton('focusin', 'sinch-alert-button-focus')
      await testButton('focusout', 'sinch-alert-button-blur')

      const testClose = testCustomEvent(page, $.locator('sinch-alert-close'))

      await testClose('click', 'sinch-alert-close-click')
      await testClose('focusin', 'sinch-alert-close-focus')
      await testClose('focusout', 'sinch-alert-close-blur')
    },
  },
  {
    name: 'native events',
    url: withTextAndButtonAndClose,
    async *fn({ $, page }) {
      const $button = $.locator('sinch-alert-button')
      const $close = $.locator('sinch-alert-close')

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

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-alert-button-focus', detail: null },
      ])

      await $button.click()
      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-alert-button-click', detail: null },
      ])

      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-alert-button-blur', detail: null },
        { type: 'sinch-alert-close-focus', detail: null },
        { type: 'sinch-alert-close-blur', detail: null },
      ])

      await $close.click()
      await page.mouse.click(0, 0)
      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-alert-close-focus', detail: null },
        { type: 'sinch-alert-close-click', detail: null },
        { type: 'sinch-alert-close-blur', detail: null },
      ])
    },
  },
]))

