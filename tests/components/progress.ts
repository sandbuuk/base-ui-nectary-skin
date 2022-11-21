import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/progress?width=300&detailed=true'
const checkValue = makeAccessibilityTests('/progress?width=300', 'sinch-progress')

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

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
