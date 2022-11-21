import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const withItems = `/horizontal-stepper`
const checkItems = makeAccessibilityTests(`/horizontal-stepper`, 'sinch-horizontal-stepper')

test('accessibility', checkItems({
  async *fn() {
    yield
  },
}))

test('horizontal-stepper screenshots', runScreenshotTests('sinch-horizontal-stepper', [
  {
    name: 'index',
    url: withItems,
    async *fn({ $eval }) {
      for (let i = 0; i < 6; i++) {
        await $eval((el, value) => el.setAttribute('index', String(value)), i)
        yield { name: `${i}` }
      }
    },
  },
]))
