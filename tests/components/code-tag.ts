import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/code-tag?text=Code%20text%20long%20long'
const withNarrowWidth = '/code-tag?width=200&text=Code%20text%20long%20long'
const withNarrowWidthEllipsis = '/code-tag?width=200&ellipsis=true&text=Code%20text%20long%20long%20long%20long'

test('code-tag screenshots', runScreenshotTests('sinch-code-tag', [
  {
    name: 'inline',
    url: withNarrowWidth,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#code-tag-wrapper')] }
    },
  },
  {
    name: 'ellipsis',
    url: withNarrowWidthEllipsis,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#code-tag-wrapper')] }
    },
  },
  {
    name: 'text',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('text', 'Updated Code'))
      yield { name: 'updated', include: [page.locator('#code-tag-wrapper')] }
    },
  },
]))
