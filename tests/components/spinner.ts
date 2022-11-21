import { test } from '@playwright/test'
import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/spinner'

test('spinner screenshots', runScreenshotTests('sinch-spinner', [
  {
    name: 'size',
    url: shot,
    async *fn({ $eval }) {
      for (const size of sizeValues) {
        await $eval((el, value) => el.setAttribute('size', value), size)
        yield { name: size }
      }
    },
  },
]))
