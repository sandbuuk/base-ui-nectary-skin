import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/progress?width=300&detailed=true'

test('progress screenshots', runScreenshotTests('sinch-progress', [
  {
    name: 'value',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('value', '0')
      })
      yield { name: '0' }

      await $eval((el) => {
        el.setAttribute('value', '73')
      })
      yield { name: '73' }

      await $eval((el) => {
        el.setAttribute('value', '100')
      })
      yield { name: '100' }

      await $eval((el) => {
        el.setAttribute('value', '150')
      })
      yield { name: 'overflow' }

      await $eval((el) => {
        el.setAttribute('value', '-10')
      })
      yield { name: 'negative' }
    },
  },
  {
    name: 'detailed',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.removeAttribute('detailed')
      })
      yield { name: 'unset' }
      await $eval((el) => {
        el.setAttribute('detailed', '')
      })
      yield { name: 'set' }
    },
  },
]))

test.describe('spanish locale', () => {
  test.use({ locale: 'es-ES' })
  test('progress screenshots spanish', runScreenshotTests('sinch-progress', [
    {
      name: 'value-es',
      url: shot,
      async *fn({ $eval }) {
        await $eval((el) => {
          el.setAttribute('value', '0')
        })
        yield { name: '0' }

        await $eval((el) => {
          el.setAttribute('value', '73')
        })
        yield { name: '73' }

        await $eval((el) => {
          el.setAttribute('value', '100')
        })
        yield { name: '100' }

        await $eval((el) => {
          el.setAttribute('value', '150')
        })
        yield { name: 'overflow' }

        await $eval((el) => {
          el.setAttribute('value', '-10')
        })
        yield { name: 'negative' }
      },
    },
  ]))
})
