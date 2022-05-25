import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/title?text=Title%20text&type=m&level=3'
const withNarrowWidth = '/title?width=110&text=Title%20text%20text%20long%20long%20long&type=m&level=3'
const checkTitle = makeAccessibilityTests('/title?text=Title%20text&type=m&level=3', 'sinch-title')

test('accessibility', checkTitle(async function* () {
  yield
}))

test('title screenshots', runScreenshotTests('sinch-title', [
  {
    name: 'text attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated Title'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'text property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.text = 'Updated Title'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'type attriute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'xl'))
      yield { name: 'xl' }
      await $eval((el) => el.setAttribute('type', 'l'))
      yield { name: 'l' }
      await $eval((el) => el.setAttribute('type', 'm'))
      yield { name: 'm' }
      await $eval((el) => el.setAttribute('type', 's'))
      yield { name: 's' }
      await $eval((el) => el.setAttribute('type', 'xs'))
      yield { name: 'xs' }
    },
  },
  {
    name: 'type property',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.type = 'xl'
      })
      yield { name: 'xl' }
      await $eval((el) => {
        el.type = 'l'
      })
      yield { name: 'l' }
      await $eval((el) => {
        el.type = 'm'
      })
      yield { name: 'm' }
      await $eval((el) => {
        el.type = 's'
      })
      yield { name: 's' }
      await $eval((el) => {
        el.type = 'xs'
      })
      yield { name: 'xs' }
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
