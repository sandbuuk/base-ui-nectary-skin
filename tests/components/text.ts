import { typeValues } from '@nectary/components/text/utils'
import { test } from '@playwright/test'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/text?text=Paragpaph%20text&type=m'
const withInline = '/text?text=Paragpaph%20text&type=m&inline=true'
const withNarrowWidth = '/text?width=110&text=Paragpaph%20text%20text%20long%20long%20long&type=m&inline=true'

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
    name: 'em',
    url: withInline,
    async *fn({ $ }) {
      const text = $.locator('sinch-text')

      for (const emAttr of ['emphasized'/* , 'strong', 'strikethrough' */]) {
        await text.evaluate((el, attr) => {
          el.removeAttribute('emphasized')
          // el.removeAttribute('strong')
          // el.removeAttribute('strikethrough')

          el.setAttribute(attr, '')
        }, emAttr)

        for (const value of typeValues) {
          await text.evaluate((el, value) => el.setAttribute('type', value), value)
          yield { name: `${emAttr}-type-${value}` }
        }
      }

      await text.evaluate((el) => {
        el.setAttribute('emphasized', '')
        // el.setAttribute('strong', '')
        // el.removeAttribute('strikethrough')
      })

      // for (const value of typeValues) {
      //   await text.evaluate((el, value) => el.setAttribute('type', value), value)
      //   yield { name: `emphasized-strong-type-${value}` }
      // }
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
    name: 'narrow',
    url: withNarrowWidth,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
