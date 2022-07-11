import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = `/card-container?width=400`
const withExpandedHeight = `/card-container?width=400&height=300`

test('card-container screenshots', runScreenshotTests('sinch-card-container', [
  {
    name: 'card container',
    url: shot,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'expanded height',
    url: withExpandedHeight,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
