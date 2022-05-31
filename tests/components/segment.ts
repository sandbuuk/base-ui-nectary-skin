import { expect, test } from '@playwright/test'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withEverything = '/segment?width=400&caption=Title&action=true&content=true&icon=true&info=true'
const withCaption = '/segment?width=400&caption=Title&action=true&info=true&icon=true'
const withNarrowCaption = '/segment?width=300&caption=Title%20long%20long%20long&info=true&icon=true'
const withCollapse = '/segment?width=400&caption=Title&collapse=true'
const withEverythingCollapse = '/segment?width=400&caption=Title&action=true&content=true&icon=true&info=true&collapse=true'

test('segment screenshots', runScreenshotTests('sinch-segment', [
  {
    name: 'caption attribute',
    url: withCaption,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('caption', 'Updated title'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'caption prop',
    url: withCaption,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.caption = 'Updated title'
      })
      yield { name: 'updated' }
    },
  },
  {
    name: 'caption narrow',
    url: withNarrowCaption,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'everything',
    url: withEverything,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'collapse',
    url: withEverythingCollapse,
    async *fn({ $ }) {
      await $.click({ position: { x: 10, y: 10 } })
      yield { name: 'collapsed' }
      await $.click({ position: { x: 10, y: 10 } })
      yield { name: 'expanded' }
    },
  },
  {
    name: 'custom events',
    url: withCollapse,
    async *fn({ $, page }) {
      const testSegment = testCustomEvent(page, $.locator('sinch-segment-collapse'))

      await testSegment('change', 'sinch-segment-collapse-change', true)
    },
  },
  {
    name: 'native events',
    url: withCollapse,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-segment-collapse-focus', 'sinch-segment-collapse-blur', 'sinch-segment-collapse-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Space')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-segment-collapse-focus', detail: null },
        { type: 'sinch-segment-collapse-change', detail: true },
        { type: 'sinch-segment-collapse-blur', detail: null },
      ])
    },
  },
]))
