import { test } from '@playwright/test'
import { colorValues } from '@sinch-engage/nectary/avatar-status/utils'
import { backgroundValues, sizeValues } from '@sinch-engage/nectary/avatar/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'
import type { TSinchAvatarBadgeElement } from '@sinch-engage/nectary/avatar-badge/types'
import type { TSinchAvatarStatusElement } from '@sinch-engage/nectary/avatar-status/types'

const imageData = 'data:image/png;base64,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'

const withAlt = '/avatar?alt=NS'
const withStatus = '/avatar?size=l&bg=blue&alt=NS&status=green'
const withBadge = '/avatar?size=l&bg=blue&alt=NS&badge=0'
const withLongBadge = '/avatar?size=l&bg=blue&alt=NS&badge=444%2b'
const withBadgeStatus = '/avatar?size=l&bg=blue&alt=NS&badge=4&status=green'
const check = makeAccessibilityTests('/avatar?alt=NS', 'sinch-avatar')

test('accessibility', check(async function* () {
  yield
}))

test('avatar screenshots', runScreenshotTests('sinch-avatar', [
  {
    name: 'size property',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.size = val
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'size attribute',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.setAttribute('size', val)
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'background property',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of backgroundValues) {
        await $eval((el, val) => {
          el.background = val
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'background attribute',
    url: withAlt,
    async *fn({ $eval }) {
      for (const val of backgroundValues) {
        await $eval((el, val) => {
          el.setAttribute('background', val)
        }, val)
        yield { name: val }
      }
    },
  },
  {
    name: 'alt property',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.alt = 'XX'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'alt attribute',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('alt', 'XX')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'src attribute',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el, imageData) => {
        el.setAttribute('src', imageData)
      }, imageData)
      yield { name: 'set' }
    },
  },
  {
    name: 'src property',
    url: withAlt,
    async *fn({ $eval }) {
      await $eval((el, imageData) => {
        el.src = imageData
      }, imageData)
      yield { name: 'set' }
    },
  },
  {
    name: 'status color attribute',
    url: withStatus,
    async *fn({ $ }) {
      const status = $.locator('sinch-avatar-status')

      for (const val of colorValues) {
        await status.evaluate((el, val) => {
          el.setAttribute('color', val)
        }, val)
        yield { name: val, include: [status] }
      }
    },
  },
  {
    name: 'status color property',
    url: withStatus,
    async *fn({ $ }) {
      const status = $.locator('sinch-avatar-status')

      for (const val of colorValues) {
        await status.evaluate((el, val) => {
          (el as TSinchAvatarStatusElement).color = val
        }, val)
        yield { name: val, include: [status] }
      }
    },
  },
  {
    name: 'badge text attribute',
    url: withBadge,
    async *fn({ $ }) {
      const badge = $.locator('sinch-avatar-badge')

      await badge.evaluate((el) => {
        el.setAttribute('text', '4')
      })
      yield { name: 'updated', include: [badge] }
    },
  },
  {
    name: 'badge text property',
    url: withBadge,
    async *fn({ $ }) {
      const badge = $.locator('sinch-avatar-badge')

      await badge.evaluate((el) => {
        (el as TSinchAvatarBadgeElement).text = '4'
      })
      yield { name: 'updated', include: [badge] }
    },
  },
  {
    name: 'size badge status',
    url: withBadgeStatus,
    async *fn({ $eval, $ }) {
      const badge = $.locator('sinch-avatar-badge')
      const status = $.locator('sinch-avatar-status')

      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.setAttribute('size', val)
        }, val)
        yield { name: val, include: [badge, status] }
      }
    },
  },
  {
    name: 'size badge long',
    url: withLongBadge,
    async *fn({ $, $eval }) {
      const badge = $.locator('sinch-avatar-badge')

      for (const val of sizeValues) {
        await $eval((el, val) => {
          el.setAttribute('size', val)
        }, val)
        yield { name: val, include: [badge] }
      }
    },
  },
]))
