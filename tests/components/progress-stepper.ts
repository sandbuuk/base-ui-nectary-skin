import { expect, test } from '@playwright/test'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withItems = '/progress-stepper?width=500'
const withSingleItem = '/progress-stepper?example=single'

test('progress-stepper screenshots', runScreenshotTests('sinch-progress-stepper', [
  {
    name: 'value',
    url: withItems,
    async *fn({ $, $eval }) {
      await $eval((el) => el.setAttribute('progressvalue', 'missing'))
      yield { name: 'progress-missing' }

      await $eval((el) => el.setAttribute('progressvalue', '1'))
      yield { name: 'progress-1' }

      await $eval((el) => el.setAttribute('progressvalue', '3'))
      yield { name: 'progress-3' }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'progress-3-value-1' }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'progress-3-value-3' }

      await $.locator('sinch-progress-stepper-item').nth(2).evaluate((el) => el.setAttribute('invalid', ''))
      yield { name: 'progress-3-value-3-invalid' }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'progress-3-value-4' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'progress-3-value-missing' }
    },
  },
  {
    name: 'mouse interaction',
    url: withSingleItem,
    async *fn({ $, $eval, page }) {
      const rect = await centerBB($)

      await $eval((el) => el.setAttribute('progressvalue', '1'))
      await page.mouse.move(rect.x, rect.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      await $.locator('sinch-progress-stepper-item').nth(0).evaluate((el) => el.setAttribute('invalid', ''))
      yield { name: 'invalid-hover' }

      await page.mouse.down()
      yield { name: 'invalid-active' }
    },
  },
  {
    name: 'focus mouse interaction',
    url: withItems,
    async *fn({ $, $eval, page }) {
      await $eval((el) => el.setAttribute('progressvalue', '3'))
      await $.locator('sinch-progress-stepper-item').nth(0).focus()
      // await page.mouse.click(0, 0)
      // await page.keyboard.press('Tab')
      yield { name: '1-focus' }

      await page.keyboard.press('ArrowRight')
      yield { name: '2-right' }

      await page.keyboard.press('ArrowLeft')
      yield { name: '3-left' }

      await page.keyboard.press('ArrowLeft')
      yield { name: '4-left' }

      await page.keyboard.press('Enter')
      await page.keyboard.press('ArrowLeft')
      yield { name: '5-enter-left' }

      await page.mouse.click(0, 0)
      await page.keyboard.press('Tab')
      yield { name: '6-focus-again' }
    },
  },
  {
    name: 'custom events',
    url: withItems,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-progress-stepper-change', '2')
    },
  },
  {
    name: 'native events',
    url: withItems,
    async *fn({ $, $eval, page }) {
      await subscribeToEvents(page, 'sinch-progress-stepper-change')

      await $eval((el) => el.setAttribute('progressvalue', '3'))

      // Click first item
      await $.locator('sinch-progress-stepper-item').nth(0).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-progress-stepper-change', detail: '1' },
      ])
    },
  },
]))
