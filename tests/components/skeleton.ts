import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = `/skeleton?width=300`
const shotCard = `/skeleton?width=300&card=true`

test('skeleton screenshots', runScreenshotTests('sinch-skeleton', [
  {
    name: 'skeleton bare',
    url: shot,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'skeleton card',
    url: shotCard,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
