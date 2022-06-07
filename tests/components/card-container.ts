import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = `/card-container?width=400`

test('card-container screenshots', runScreenshotTests('sinch-card-container', [
  {
    name: 'card container',
    url: shot,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
