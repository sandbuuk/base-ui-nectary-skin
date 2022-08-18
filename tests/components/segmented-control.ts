import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withOptions = `/segmented-control`
const withSingleOption = `/segmented-control?single-option=true`
const check = makeAccessibilityTests(`/segmented-control`, 'sinch-segmented-control')

test('accessibility', check(async function* () {
  yield
}))

test('segmented-control screenshots', runScreenshotTests('sinch-segmented-control', [
  {
    name: 'mouse interaction',
    url: withSingleOption,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover-checked' }

      await page.mouse.down()
      yield { name: 'active-checked' }
    },
  },
  {
    name: 'value attribute',
    url: withOptions,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty' }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'option-4' }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'option-3' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'option-disabled' }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'option-1' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing' }
    },
  },
  {
    name: 'value property',
    url: withOptions,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'option-empty' }

      await $eval((el) => {
        el.value = '4'
      })
      yield { name: 'option-4' }

      await $eval((el) => {
        el.value = '3'
      })
      yield { name: 'option-3' }

      await $eval((el) => {
        el.value = '2'
      })
      yield { name: 'option-disabled' }

      await $eval((el) => {
        el.value = '1'
      })
      yield { name: 'option-1' }

      await $eval((el) => {
        el.value = 'missing'
      })
      yield { name: 'option-missing' }
    },
  },
  {
    name: 'keyboard focus',
    url: withOptions,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1' }

      await page.keyboard.press('Tab')
      yield { name: '2' }

      await page.keyboard.press('Tab')
      yield { name: '4' }
    },
  },
  {
    name: 'click',
    url: withOptions,
    async *fn({ $ }) {
      await $.locator('sinch-segmented-control-option').nth(0).click()
      yield { name: 'option-0' }

      await $.locator('sinch-segmented-control-option').nth(1).click()
      yield { name: 'option-1' }

      await $.locator('sinch-segmented-control-option').nth(2).click()
      yield { name: 'option-2' }

      await $.locator('sinch-segmented-control-option').nth(3).click()
      yield { name: 'option-3' }
    },
  },
  {
    name: 'custom events',
    url: withOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-segmented-control-change', '2')
    },
  },
  {
    name: 'native events',
    url: withOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-segmented-control-change')

      // Click first item
      await $.locator('sinch-segmented-control-option').nth(0).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-segmented-control-change', detail: '1' },
      ])

      // Click second item
      await $.locator('sinch-segmented-control-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-segmented-control-change', detail: '3' },
      ])
    },
  },
]))
