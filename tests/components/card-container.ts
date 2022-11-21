import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = `/card-container?width=300`
const withExpandedHeight = `/card-container?width=300&height=250`

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
