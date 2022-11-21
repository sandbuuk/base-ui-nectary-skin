import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/color-swatch'
const check = makeAccessibilityTests('/color-swatch', 'sinch-color-swatch')

test('accessibility', check({
  async *fn() {
    yield
  },
}))

test('color-swatch screenshots', runScreenshotTests('sinch-color-swatch', [
  {
    name: 'name',
    url: shot,
    async *fn({ $eval }) {
      for (const colorName of ['', 'light-blue']) {
        await $eval((el, val) => {
          el.setAttribute('name', val)
        }, colorName)
        yield { name: colorName === '' ? 'no-color' : colorName }
      }
    },
  },
]))
