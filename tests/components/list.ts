import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const withItems = `/list?width=300`

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
