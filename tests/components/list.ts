import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const withItems = `/list?width=300`
const checkItems = makeAccessibilityTests(`/list?width=200`, 'sinch-list')

test('accessibility', checkItems({
  async *fn() {
    yield
  },
}))

test('list screenshots', runScreenshotTests('sinch-list', [
  {
    name: 'items',
    url: withItems,
    async *fn({ $ }) {
      await $.locator('sinch-list-item').nth(1).hover()

      yield { name: 'shot' }
    },
  },
]))
