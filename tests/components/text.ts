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

test('accessibility', checkText(async function* () {
  yield
}))

test('text screenshots', runScreenshotTests('sinch-text', [
  {
    name: 'text attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated Text'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'text property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.text = 'Updated Text'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'type attriute',
    url: withInline,
    async *fn({ $eval, page }) {
      for (const value of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), value)
        yield { name: value, include: [page.locator('#wrapper')] }
      }
    },
  },
  {
    name: 'type property',
    url: withInline,
    async *fn({ $eval, page }) {
      for (const value of typeValues) {
        await $eval((el, value) => {
          el.type = value
        }, value)
        yield { name: value, include: [page.locator('#wrapper')] }
      }
    },
  },
  {
    name: 'emphasized type',
    url: withInlineEmphasized,
    async *fn({ $eval, page }) {
      for (const value of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), value)
        yield { name: value, include: [page.locator('#wrapper')] }
      }
    },
  },
  {
    name: 'inline attribute',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('inline', ''))
      yield { name: 'set', include: [page.locator('#wrapper')] }
      await $eval((el) => el.removeAttribute('inline'))
      yield { name: 'unset', include: [page.locator('#wrapper')] }
    },
  },
  {
    name: 'inline property',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.inline = true
      })
      yield { name: 'set', include: [page.locator('#wrapper')] }
      await $eval((el) => {
        el.inline = false
      })
      yield { name: 'unset', include: [page.locator('#wrapper')] }
    },
  },
  {
    name: 'emphasized attribute',
    url: withEmphasized,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('emphasized', ''))
      yield { name: 'set' }
      await $eval((el) => el.removeAttribute('emphasized'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'emphasized property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.emphasized = true
      })
      yield { name: 'set' }
      await $eval((el) => {
        el.emphasized = false
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'narrow',
    url: withNarrowWidth,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#wrapper')] }
    },
  },
]))
