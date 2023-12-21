import { expect, test } from '@playwright/test'
import { getAllEvents, getBB, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withOptions = `/segmented-icon-control`
const withMultiple = `/segmented-icon-control?multiple=true`
const withSingleOption = `/segmented-icon-control?single-option=true`

test('segmented-icon-control screenshots', runScreenshotTests('sinch-segmented-icon-control', [
  {
    name: 'mouse interaction',
    url: withSingleOption,
    async *fn({ $, page }) {
      const rect = await getBB($)

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover_checked' }

      await page.mouse.down()
      yield { name: 'active_checked' }
    },
  },
  {
    name: 'value',
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
    name: 'multiple values',
    url: withMultiple,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty' }

      await $eval((el) => el.setAttribute('value', '3,4'))
      yield { name: 'option-3-4' }

      await $eval((el) => el.setAttribute('value', '1,3'))
      yield { name: 'option-1-3' }

      await $eval((el) => el.setAttribute('value', '1,2'))
      yield { name: 'option-1-disabled' }

      await $eval((el) => el.setAttribute('value', '1,missing'))
      yield { name: 'option-1-missing' }
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
      await $.locator('sinch-segmented-icon-control-option').nth(0).click()
      yield { name: 'option-0' }

      await $.locator('sinch-segmented-icon-control-option').nth(1).click()
      yield { name: 'option-1' }

      await $.locator('sinch-segmented-icon-control-option').nth(2).click()
      yield { name: 'option-2' }

      await $.locator('sinch-segmented-icon-control-option').nth(3).click()
      yield { name: 'option-3' }

      await $.locator('sinch-segmented-icon-control-option').nth(3).click()
      yield { name: 'option-3x' }
    },
  },
  {
    name: 'click multiple',
    url: withMultiple,
    async *fn({ $ }) {
      await $.locator('sinch-segmented-icon-control-option').nth(0).click()
      yield { name: 'option-0' }

      await $.locator('sinch-segmented-icon-control-option').nth(1).click()
      yield { name: 'option-0-1' }

      await $.locator('sinch-segmented-icon-control-option').nth(2).click()
      yield { name: 'option-0-1-2' }

      await $.locator('sinch-segmented-icon-control-option').nth(3).click()
      yield { name: 'option-0-1-2-3' }

      await $.locator('sinch-segmented-icon-control-option').nth(2).click()
      yield { name: 'option-0-1-2x-3' }
    },
  },
  {
    name: 'custom events',
    url: withOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-segmented-icon-control-change', '2')
    },
  },
  {
    name: 'native events',
    url: withOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-segmented-icon-control-change')

      // Click first item
      await $.locator('sinch-segmented-icon-control-option').nth(0).click()
      // Click second item
      await $.locator('sinch-segmented-icon-control-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-segmented-icon-control-change', detail: '1' },
        { type: 'sinch-segmented-icon-control-change', detail: '3' },
      ])
    },
  },
]))
