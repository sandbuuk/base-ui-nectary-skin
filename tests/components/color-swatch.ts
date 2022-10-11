import { expect, test } from '@playwright/test'
import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/color-swatch'
const check = makeAccessibilityTests('/color-swatch', 'sinch-color-swatch')

test('accessibility', check(async function* () {
  yield
}))

test('color-swatch screenshots', runScreenshotTests('sinch-color-swatch', [
  {
    name: 'name attribute',
    url: shot,
    async *fn({ $eval }) {
      for (const colorName of [NO_COLOR, 'light-blue']) {
        await $eval((el, val) => {
          el.setAttribute('name', val)
        }, colorName)
        yield { name: colorName === NO_COLOR ? 'no-color' : colorName }
      }
    },
  },
  {
    name: 'name property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.name = ''
      })

      expect(await $.getAttribute('name')).toBe(NO_COLOR)

      await $eval((el) => {
        el.name = 'light-blue'
      })

      expect(await $.getAttribute('name')).toBe('light-blue')
    },
  },
]))
