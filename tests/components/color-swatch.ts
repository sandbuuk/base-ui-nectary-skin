import { expect, test } from '@playwright/test'
import { colorNameValues, NO_COLOR } from '@sinch-engage/nectary/utils/colors'
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
      for (const colorName of colorNameValues) {
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
    async *fn({ $eval }) {
      for (const colorName of colorNameValues) {
        const result = await $eval((el, val) => {
          el.name = val

          return el.getAttribute('name')
        }, colorName)

        expect(result).toBe(colorName)
      }
    },
  },
]))
