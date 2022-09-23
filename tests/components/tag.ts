import { expect, test } from '@playwright/test'
import { colorNameValues, NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/tag?text=Label%20text&color=light-grey'
const withWide = '/tag?width=150&icon=true&text=Label%20text&color=light-grey'
const withNarrow = '/tag?width=80&icon=true&text=Label%20text%20text%20text%20text&color=light-grey'
const withIcon = '/tag?text=Label%20text&color=light-grey&icon=true'
const withIconSmall = '/tag?text=Label%20text&color=light-grey&small=true&icon=true'
const checkTagWithDismiss = makeAccessibilityTests('/tag?text=Label%20text&color=light-grey&icon=true', 'sinch-tag')

test('accessibility', checkTagWithDismiss(async function* () {
  yield
}))

test('tag-screenshots', runScreenshotTests('sinch-tag', [
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
]))
