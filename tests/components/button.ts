import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withWideWidth = '/button?width=200&type=primary&text=Button&icon-left=true'
const withFitWidth = '/button?type=primary&text=Button&icon-left=true'
const withFitWidthIconRight = '/button?type=primary&text=Button&icon-right=true'
const withNarrowWidth = '/button?width=110&type=primary&icon-left=true&text=Button%text%20long%20long%20long'
const withDisabled = '/button?type=primary&text=Button&disabled=true&icon-left=true'
const withSmall = '/button?type=primary&text=Button&small=true&icon-left=true'
const withSmallIconRight = '/button?type=primary&text=Button&small=true&icon-right=true'
const withSpinner = '/button?type=primary&text=Button&spinner=true'
const withSpinnerDisabled = '/button?type=primary&text=Button&spinner=true&disabled=true'
const withSpinnerSmall = '/button?type=primary&text=Button&spinner=true&small=true'
const checkFitWidth = makeAccessibilityTests('/button?type=primary&text=Button&icon-left=true', 'sinch-button')

test('accessibility', checkFitWidth(async function* ({ $eval }) {
  yield
  await $eval((el) => {
    el.text = ''
  })
  yield
}))

test('button screenshots', runScreenshotTests('sinch-button', [
  {
    name: 'type attribute',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive' }
    },
  },
  {
    name: 'type property',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.type = 'primary'
      })
      yield { name: 'primary' }

      await $eval((el) => {
        el.type = 'secondary'
      })
      yield { name: 'secondary' }

      await $eval((el) => {
        el.type = 'cta-primary'
      })
      yield { name: 'cta-primary' }

      await $eval((el) => {
        el.type = 'cta-secondary'
      })
      yield { name: 'cta-secondary' }

      await $eval((el) => {
        el.type = 'destructive'
      })
      yield { name: 'destructive' }
    },
  },
  {
    name: 'small type',
    url: withSmall,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive' }
    },
  },
  {
    name: 'disabled type',
    url: withDisabled,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive' }
    },
  },
  {
    name: 'focus',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.focus()
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive' }
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary' }
    },
  },
  {
    name: 'text attribute',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated Button'))
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
        el.text = 'Updated Button'
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
    name: 'small property',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.small = true
      })
      yield { name: 'on' }

      await $eval((el) => {
        el.small = false
      })
      yield { name: 'off' }
    },
  },
  {
    name: 'small attribute',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'on' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'off' }
    },
  },
  {
    name: 'narrow',
    url: withNarrowWidth,
    async *fn({ $eval }) {
      yield { name: 'normal' }
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'small' }
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
    name: 'right icon',
    url: withFitWidthIconRight,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'small right icon',
    url: withSmallIconRight,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'mouse interaction',
    url: withFitWidth,
    async *fn({ $, $eval, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary-hover' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary-hover' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary-hover' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary-hover' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive-hover' }

      await page.mouse.down()
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary-active' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary-active' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary-active' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary-active' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive-active' }
    },
  },
  {
    name: 'spinner',
    url: withSpinner,
    async *fn({ $, $eval, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary-hover' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary-hover' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary-hover' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary-hover' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive-hover' }

      await page.mouse.down()
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary-active' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary-active' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary-active' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary-active' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive-active' }
    },
  },
  {
    name: 'spinner disabled',
    url: withSpinnerDisabled,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'primary'))
      yield { name: 'primary' }
      await $eval((el) => el.setAttribute('type', 'secondary'))
      yield { name: 'secondary' }
      await $eval((el) => el.setAttribute('type', 'cta-primary'))
      yield { name: 'cta-primary' }
      await $eval((el) => el.setAttribute('type', 'cta-secondary'))
      yield { name: 'cta-secondary' }
      await $eval((el) => el.setAttribute('type', 'destructive'))
      yield { name: 'destructive' }
    },
  },
  {
    name: 'spinner small',
    url: withSpinnerSmall,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withFitWidth,
    async *fn({ page, $ }) {
      const testButton = testCustomEvent(page, $)

      await testButton('click', 'sinch-button-click')
      await testButton('focusin', 'sinch-button-focus')
      await testButton('focusout', 'sinch-button-blur')
    },
  },
  {
    name: 'native events',
    url: withFitWidth,
    async *fn({ page, $ }) {
      await subscribeToEvents(page, 'sinch-button-focus', 'sinch-button-blur', 'sinch-button-click')
      await $.focus()
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-button-focus', detail: null },
        { type: 'sinch-button-blur', detail: null },
      ])

      await $.click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-button-focus', detail: null },
        { type: 'sinch-button-click', detail: null },
      ])
    },
  },
]))
