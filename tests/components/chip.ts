import { expect, test } from '@playwright/test'
import { colorNameValues, NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/chip?text=Label%20text&color=Gray%2010'
const withWide = '/chip?width=150&icon=true&text=Label%20text&color=Gray%2010'
const withNarrow = '/chip?width=80&icon=true&text=Label%20text%20text%20text%20text&color=Gray%2010'
const withIcon = '/chip?text=Label%20text&color=Gray%2010&icon=true'
const withIconSmall = '/chip?text=Label%20text&color=Gray%2010&small=true&icon=true'
const checkTagWithDismiss = makeAccessibilityTests('/chip?text=Label%20text&color=Gray%2010&icon=true', 'sinch-chip')

test('accessibility', checkTagWithDismiss(async function* () {
  yield
}))

test('chip screenshots', runScreenshotTests('sinch-chip', [
  {
    name: 'color attribute',
    url: withIcon,
    async *fn({ $eval }) {
      for (const colorName of colorNameValues) {
        await $eval((el, val) => {
          el.setAttribute('color', val)
        }, colorName)
        yield { name: colorName === NO_COLOR ? 'no-color' : colorName }
      }
    },
  },
  {
    name: 'color property',
    url: withIcon,
    async *fn({ $eval }) {
      for (const colorName of colorNameValues) {
        const result = await $eval((el, val) => {
          el.color = val

          return el.getAttribute('color')
        }, colorName)

        expect(result).toBe(colorName)
      }
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
    name: 'text property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.text = 'Updated text'
      })

      expect(await $.getAttribute('text')).toBe('Updated text')
    },
  },
  {
    name: 'small attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'small property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.small = true
      })
      expect(await $.getAttribute('small')).toBe('')

      await $eval((el) => {
        el.small = false
      })
      expect(await $.getAttribute('small')).toBe(null)
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
    url: withIcon,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }
    },
  },
  {
    name: 'small keyboard focus',
    url: withIconSmall,
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
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-chip-focus', detail: null },
        { type: 'sinch-chip-blur', detail: null },
      ])

      const ct = centerRect(await $.boundingBox())

      await page.mouse.click(ct.x, ct.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-chip-focus', detail: null },
        { type: 'sinch-chip-click', detail: null },
      ])
    },
  },
]))
