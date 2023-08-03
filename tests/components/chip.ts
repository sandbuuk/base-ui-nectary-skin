import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const colorValues = ['', 'light-blue']

const shot = '/chip?text=Label%20text&color=Gray%2010'
const withSmall = '/chip?text=Label%20text&color=Gray%2010&small=true'
const withWide = '/chip?width=150&icon=true&text=Label%20text&color=Gray%2010'
const withNarrow = '/chip?width=80&icon=true&text=Label%20text%20text%20text%20text&color=Gray%2010'
const withIcon = '/chip?text=Label%20text&color=Gray%2010&icon=true'
const withIcons = '/chip?text=Label%20text&color=Gray%2010&icon=true&right-icon=true'
const withIconSmall = '/chip?text=Label%20text&color=Gray%2010&small=true&icon=true'
const withIconsSmall = '/chip?text=Label%20text&color=Gray%2010&small=true&icon=true&right-icon=true'
const checkTagWithDismiss = makeAccessibilityTests('/chip?text=Label%20text&color=Gray%2010&icon=true', 'sinch-chip')

test('accessibility', checkTagWithDismiss({
  async *fn() {
    yield
  },
}))

test('chip screenshots', runScreenshotTests('sinch-chip', [
  {
    name: 'color',
    url: withIcon,
    async *fn({ $eval }) {
      for (const colorName of colorValues) {
        await $eval((el, val) => {
          el.setAttribute('color', val)
        }, colorName)

        yield { name: colorName === '' ? 'no-color' : colorName }
      }
    },
  },
  {
    name: 'text',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('text', 'Updated text')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'small',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'right icon',
    url: withIcons,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'small icon',
    url: withIconSmall,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'small right icon',
    url: withIconsSmall,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'wide',
    url: withWide,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'narrow',
    url: withNarrow,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'keyboard focus',
    url: shot,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }
    },
  },
  {
    name: 'small keyboard focus',
    url: withSmall,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }
    },
  },
]))

test('chip events', runScreenshotTests('sinch-chip', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      const testButton = testCustomEvent(page, $)

      await testButton('-click', 'sinch-chip-click')
      await testButton('-focus', 'sinch-chip-focus')
      await testButton('-blur', 'sinch-chip-blur')
    },
  },
  {
    name: 'native events',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-chip-focus', 'sinch-chip-blur', 'sinch-chip-click')

      const ct = await centerBB($)

      await page.keyboard.press('Tab')
      await page.mouse.click(ct.x, ct.y)
      await page.mouse.click(1, 1)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-chip-focus', detail: null },
        { type: 'sinch-chip-click', detail: null },
        { type: 'sinch-chip-blur', detail: null },
      ])
    },
  },
]))
