import { test } from '@playwright/test'
import { orientationValues } from '@sinch-engage/nectary/tooltip/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const withFitWidth = '/tooltip?text=Tooltip%20text'
const withNarrowWidth = '/tooltip?width=100&text=Tooltip%20text%20long%20long%20long'
const checkTooltip = makeAccessibilityTests('/tooltip?text=Tooltip%20text', 'sinch-tooltip')

test('accessibility', checkTooltip(async function* () {
  yield
}))

test('tooltip screenshots', runScreenshotTests('sinch-tooltip', [
  {
    name: 'orientation attribute',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.tooltipRect)] }
      }
    },
  },
  {
    name: 'orientation property',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      for (const value of orientationValues) {
        await $eval((el, value) => {
          el.orientation = value
        }, value)
        yield { name: value, includeRects: [await $eval((el) => el.tooltipRect)] }
      }
    },
  },
  {
    name: 'text attribute',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      await $eval((el) => el.setAttribute('text', 'Updated tooltip text'))
      yield { name: 'updated', includeRects: [await $eval((el) => el.tooltipRect)] }
    },
  },
  {
    name: 'text property',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      await $eval((el) => {
        el.text = 'Updated tooltip text'
      })
      yield { name: 'updated', includeRects: [await $eval((el) => el.tooltipRect)] }
    },
  },
  {
    name: 'narrow',
    url: withNarrowWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      yield { name: 'clip', includeRects: [await $eval((el) => el.tooltipRect)] }
    },
  },
  {
    name: 'inverted property',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      await $eval((el) => {
        el.inverted = true
      })
      yield { name: 'on', includeRects: [await $eval((el) => el.tooltipRect)] }
    },
  },
  {
    name: 'inverted attribute',
    url: withFitWidth,
    async *fn({ $, $eval }) {
      await $.hover()

      await $eval((el) => el.setAttribute('inverted', ''))
      yield { name: 'on', includeRects: [await $eval((el) => el.tooltipRect)] }
    },
  },
]))
