import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/tag?text=Label%20text'
const withIcon = '/tag?text=Label%20text&icon=true'
const withIconDismiss = '/tag?text=Label%20text&dismissable=true&icon=true'
const withSmallDismiss = '/tag?text=Label%20text&small=true&dismissable=true&icon=true'
const withDismiss = '/tag?text=Label%20text&dismissable=true&icon=true'
const checkTagWithDismiss = makeAccessibilityTests('/tag?text=Label%20text&dismissable=true&icon=true', 'sinch-tag')
const categoryValues = ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt'] as const

test('accessibility', checkTagWithDismiss(async function* () {
  yield
}))

test('tag-screenshots', runScreenshotTests('sinch-tag', [
  {
    name: 'category property',
    url: withIcon,
    async *fn({ $eval }) {
      for (const val of categoryValues) {
        await $eval((el, val) => {
          el.category = val
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'category attribute',
    url: withIcon,
    async *fn({ $eval }) {
      for (const val of categoryValues) {
        await $eval((el, val) => {
          el.setAttribute('category', val)
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'text property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.text = 'Updated text'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'text attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('text', 'Updated text')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'small attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'enabled' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'disabled' }
    },
  },
  {
    name: 'small property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.small = true
      })
      yield { name: 'enabled' }

      await $eval((el) => {
        el.small = false
      })
      yield { name: 'disabled' }
    },
  },
  {
    name: 'inverted attribute',
    url: withIconDismiss,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('inverted', ''))
      yield { name: 'enabled' }

      await $eval((el) => el.removeAttribute('inverted'))
      yield { name: 'disabled' }
    },
  },
  {
    name: 'inverted property',
    url: withIconDismiss,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.inverted = true
      })
      yield { name: 'enabled' }

      await $eval((el) => {
        el.inverted = false
      })
      yield { name: 'disabled' }
    },
  },
  {
    name: 'dismissable',
    url: withDismiss,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'dismissable small',
    url: withSmallDismiss,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withDismiss,
    async *fn({ $, page }) {
      const testClose = testCustomEvent(page, $.locator('sinch-tag-close'))

      await testClose('click', 'sinch-tag-close-click')
      await testClose('focusin', 'sinch-tag-close-focus')
      await testClose('focusout', 'sinch-tag-close-blur')
    },
  },
  {
    name: 'native events',
    url: withDismiss,
    async *fn({ $, page }) {
      const $close = $.locator('sinch-tag-close')

      await subscribeToEvents(
        page,
        'sinch-tag-close-focus',
        'sinch-tag-close-blur',
        'sinch-tag-close-click'
      )

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tag-close-focus', detail: null },
        { type: 'sinch-tag-close-blur', detail: null },
      ])

      await $close.click()
      await $close.click()
      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tag-close-focus', detail: null },
        { type: 'sinch-tag-close-click', detail: null },
        { type: 'sinch-tag-close-click', detail: null },
      ])
    },
  },
]))
