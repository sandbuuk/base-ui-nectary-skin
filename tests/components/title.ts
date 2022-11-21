import { test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/title/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/title?text=Title%20text&type=m&level=3'
const withNarrowWidth = '/title?width=110&text=Title%20text%20text%20long%20long%20long&type=m&level=3'
const checkTitle = makeAccessibilityTests('/title?text=Title%20text&type=m&level=3', 'sinch-title')

test('accessibility', checkTitle({
  async *fn() {
    yield
  },
}))

test('title screenshots', runScreenshotTests('sinch-title', [
  {
    name: 'ellipsis',
    url: withNarrowWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('ellipsis', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('ellipsis')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'text',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated Title'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'type',
    url: shot,
    async *fn({ $eval }) {
      for (const value of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), value)
        yield { name: value }
      }
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
