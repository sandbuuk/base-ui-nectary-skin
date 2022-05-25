import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/spinner'

test('spinner screenshots', runScreenshotTests('sinch-spinner', [
  {
    name: 'type attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'large'))
      yield { name: 'large' }
      await $eval((el) => el.setAttribute('type', 'medium'))
      yield { name: 'medium' }
      await $eval((el) => el.setAttribute('type', 'small'))
      yield { name: 'small' }
    },
  },
  {
    name: 'type property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.type = 'large'
      })
      yield { name: 'large' }

      await $eval((el) => {
        el.type = 'medium'
      })
      yield { name: 'medium' }

      await $eval((el) => {
        el.type = 'small'
      })
      yield { name: 'small' }
    },
  },
  {
    name: 'css color variables',
    url: shot,
    async *fn({ page }) {
      await page.evaluate(() => {
        const style = document.createElement('style')

        style.innerHTML = ':root { --sinch-color-spinner-bg: green; --sinch-color-spinner-fg: red; }'

        document.body.prepend(style)
      })
      yield { name: 'external' }
    },
  },
]))
