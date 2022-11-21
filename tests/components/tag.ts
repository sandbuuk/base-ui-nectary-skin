import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const colorValues = ['', 'light-blue']

const shot = '/tag?text=Label%20text&color=Gray%2010'
const withWide = '/tag?width=150&icon=true&text=Label%20text&color=Gray%2010'
const withNarrow = '/tag?width=80&icon=true&text=Label%20text%20text%20text%20text&color=Gray%2010'
const withIcon = '/tag?text=Label%20text&color=Gray%2010&icon=true'
const withIconSmall = '/tag?text=Label%20text&color=Gray%2010&small=true&icon=true'
const checkTagWithDismiss = makeAccessibilityTests('/tag?text=Label%20text&color=Gray%2010&icon=true', 'sinch-tag')

test('accessibility', checkTagWithDismiss({
  async *fn() {
    yield
  },
}))

test('tag-screenshots', runScreenshotTests('sinch-tag', [
  {
    name: 'color',
    url: withIcon,
    async *fn({ $eval }) {
      for (const colorName of colorValues) {
        await $eval((el, val) => {
          el.setAttribute('color', val)
        }, colorName)

        yield { name: colorName === '' ? 'no-color' : colorName }
      }
    },
  },
  {
    name: 'text',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('text', 'Updated text')
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'small',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'small icon',
    url: withIconSmall,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'wide',
    url: withWide,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'narrow',
    url: withNarrow,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
