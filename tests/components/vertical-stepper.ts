import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const withItems = `/vertical-stepper?width=300`
const checkItems = makeAccessibilityTests(`/vertical-stepper`, 'sinch-vertical-stepper')

test('accessibility', checkItems({
  async *fn() {
    yield
  },
}))

test('vertical-stepper screenshots', runScreenshotTests('sinch-vertical-stepper', [
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
