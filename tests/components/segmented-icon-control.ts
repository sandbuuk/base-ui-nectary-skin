import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { expandRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withOptions = `/segmented-icon-control`
const withMultiple = `/segmented-icon-control?multiple=true`
const withSingleOption = `/segmented-icon-control?single-option=true`
const check = makeAccessibilityTests(`/segmented-icon-control`, 'sinch-segmented-icon-control')

test('accessibility', check(async function* () {
  yield
}))

test('segmented-icon-control screenshots', runScreenshotTests('sinch-segmented-icon-control', [
  {
    name: 'mouse interaction',
    url: withSingleOption,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!
      const shotRect = expandRect(rect, 3)

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover', includeRects: [shotRect] }

      await page.mouse.down()
      yield { name: 'active', includeRects: [shotRect] }

      await page.mouse.up()
      yield { name: 'hover_checked', includeRects: [shotRect] }

      await page.mouse.down()
      yield { name: 'active_checked', includeRects: [shotRect] }
    },
  },
  {
    name: 'value attribute',
    url: withOptions,
    async *fn({ $, $eval }) {
      const rect = (await $.boundingBox())!
      const shotRect = expandRect(rect, 3)

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'option-4', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'option-3', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'option-disabled', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'option-1', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing', includeRects: [shotRect] }
    },
  },
  {
    name: 'value property',
    url: withOptions,
    async *fn({ $, $eval }) {
      const rect = (await $.boundingBox())!
      const shotRect = expandRect(rect, 3)

      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'option-empty', includeRects: [shotRect] }

      await $eval((el) => {
        el.value = '4'
      })
      yield { name: 'option-4', includeRects: [shotRect] }

      await $eval((el) => {
        el.value = '3'
      })
      yield { name: 'option-3', includeRects: [shotRect] }

      await $eval((el) => {
        el.value = '2'
      })
      yield { name: 'option-disabled', includeRects: [shotRect] }

      await $eval((el) => {
        el.value = '1'
      })
      yield { name: 'option-1', includeRects: [shotRect] }

      await $eval((el) => {
        el.value = 'missing'
      })
      yield { name: 'option-missing', includeRects: [shotRect] }
    },
  },
  {
    name: 'multiple values',
    url: withMultiple,
    async *fn({ $, $eval }) {
      const rect = (await $.boundingBox())!
      const shotRect = expandRect(rect, 3)

      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '3,4'))
      yield { name: 'option-3-4', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '1,3'))
      yield { name: 'option-1-3', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '1,2'))
      yield { name: 'option-1-disabled', includeRects: [shotRect] }

      await $eval((el) => el.setAttribute('value', '1,missing'))
      yield { name: 'option-1-missing', includeRects: [shotRect] }
    },
  },
  {
    name: 'click',
    url: withOptions,
    async *fn({ $ }) {
      const rect = (await $.boundingBox())!
      const shotRect = expandRect(rect, 3)

      await $.locator('sinch-segmented-icon-control-option').nth(0).click()
      yield { name: 'option-0', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(1).click()
      yield { name: 'option-1', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(2).click()
      yield { name: 'option-2', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(3).click()
      yield { name: 'option-3', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(3).click()
      yield { name: 'option-3x', includeRects: [shotRect] }
    },
  },
  {
    name: 'click multiple',
    url: withMultiple,
    async *fn({ $ }) {
      const rect = (await $.boundingBox())!
      const shotRect = expandRect(rect, 3)

      await $.locator('sinch-segmented-icon-control-option').nth(0).click()
      yield { name: 'option-0', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(1).click()
      yield { name: 'option-0-1', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(2).click()
      yield { name: 'option-0-1-2', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(3).click()
      yield { name: 'option-0-1-2-3', includeRects: [shotRect] }

      await $.locator('sinch-segmented-icon-control-option').nth(2).click()
      yield { name: 'option-0-1-2x-3', includeRects: [shotRect] }
    },
  },
  {
    name: 'custom events',
    url: withOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-segmented-icon-control-change', '2')
    },
  },
  {
    name: 'native events',
    url: withOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-segmented-icon-control-change')

      // Click first item
      await $.locator('sinch-segmented-icon-control-option').nth(0).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-segmented-icon-control-change', detail: '1' },
      ])

      // Click second item
      await $.locator('sinch-segmented-icon-control-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-segmented-icon-control-change', detail: '3' },
      ])
    },
  },
]))
