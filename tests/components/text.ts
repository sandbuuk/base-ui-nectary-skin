import { test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/text/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/text?text=Paragpaph%20text&type=m'
const withInline = '/text?text=Paragpaph%20text&type=m&inline=true'
const withInlineEmphasized = '/text?text=Paragpaph%20text&type=m&inline=true&emphasized=true'
const withEmphasized = '/text?text=Paragpaph%20text&type=m&emphasized=true'
const withNarrowWidth = '/text?width=110&text=Paragpaph%20text%20text%20long%20long%20long&type=m&inline=true'
const checkText = makeAccessibilityTests('/text?text=Paragpaph%20text&type=m', 'sinch-text')

test('accessibility', checkText({
  async *fn() {
    yield
  },
}))

test('text screenshots', runScreenshotTests('sinch-text', [
  {
    name: 'ellipsis',
    url: withNarrowWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('ellipsis', '')
        el.querySelector('sinch-link')?.setAttribute('ellipsis', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('ellipsis')
        el.querySelector('sinch-link')?.removeAttribute('ellipsis')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'type',
    url: withInline,
    async *fn({ $ }) {
      const text = $.locator('sinch-text')

      for (const value of typeValues) {
        await text.evaluate((el, value) => el.setAttribute('type', value), value)
        yield { name: value }
      }
    },
  },
  {
    name: 'emphasized type',
    url: withInlineEmphasized,
    async *fn({ $ }) {
      const text = $.locator('sinch-text')

      for (const value of typeValues) {
        await text.evaluate((el, value) => el.setAttribute('type', value), value)
        yield { name: value }
      }
    },
  },
  {
    name: 'inline',
    url: shot,
    async *fn({ $ }) {
      const text = $.locator('sinch-text')

      await text.evaluate((el) => el.setAttribute('inline', ''))
      yield { name: 'set' }
      await text.evaluate((el) => el.removeAttribute('inline'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'emphasized',
    url: withEmphasized,
    async *fn({ $ }) {
      const text = $.locator('sinch-text')

      await text.evaluate((el) => el.setAttribute('emphasized', ''))
      yield { name: 'set' }
      await text.evaluate((el) => el.removeAttribute('emphasized'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'narrow',
    url: withNarrowWidth,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
