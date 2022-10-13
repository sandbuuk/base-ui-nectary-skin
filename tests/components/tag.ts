import { expect, test } from '@playwright/test'
import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/tag?text=Label%20text&color=Gray%2010'
const withWide = '/tag?width=150&icon=true&text=Label%20text&color=Gray%2010'
const withNarrow = '/tag?width=80&icon=true&text=Label%20text%20text%20text%20text&color=Gray%2010'
const withIcon = '/tag?text=Label%20text&color=Gray%2010&icon=true'
const withIconSmall = '/tag?text=Label%20text&color=Gray%2010&small=true&icon=true'
const checkTagWithDismiss = makeAccessibilityTests('/tag?text=Label%20text&color=Gray%2010&icon=true', 'sinch-tag')

test('accessibility', checkTagWithDismiss(async function* () {
  yield
}))

test('tag-screenshots', runScreenshotTests('sinch-tag', [
  {
    name: 'color attribute',
    url: withIcon,
    async *fn({ $eval }) {
      for (const colorName of [NO_COLOR, 'light-blue']) {
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
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.color = 'light-blue'
      })

      expect(await $.getAttribute('color')).toBe('light-blue')

      await $eval((el, NO_COLOR) => {
        el.color = NO_COLOR
      }, NO_COLOR)

      expect(await $.getAttribute('color')).toBe(NO_COLOR)

      await $eval((el) => {
        el.color = null
      })

      expect(await $.getAttribute('color')).toBe(null)
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
]))
