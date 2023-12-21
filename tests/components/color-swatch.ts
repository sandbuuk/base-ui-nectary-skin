import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/color-swatch'

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
