import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const withItems = '/table?width=1000'
const withLongLine = '/table?width=1000&example=long'
const withNarrow = '/table?width=300'
const checkTableWithItems = makeAccessibilityTests('/table?width=1000', 'sinch-table')

test('accessibility', checkTableWithItems({
  async *fn() {
    yield
  },
}))

test('table screenshots', runScreenshotTests('sinch-table', [
  {
    name: 'items',
    url: withItems,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'items narrow',
    url: withNarrow,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'items long',
    url: withLongLine,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
