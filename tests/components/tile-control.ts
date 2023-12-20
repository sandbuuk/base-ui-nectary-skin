import { expect, test } from '@playwright/test'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withOptions = `/tile-control`
const with3ColOptions = `/tile-control?cols=3`
const with3ColsSmallOptions = `/tile-control?small=true&cols=3`
const with3ColsMultiple = `/tile-control?multiple=true&cols=3`
const withSingleOption = `/tile-control?single=true`
const withToggleSingleOption = `/tile-control?single=true&multiple=true`

test('tile-control screenshots', runScreenshotTests('sinch-tile-control', [
  {
    name: 'cols',
    url: withOptions,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('cols', '3'))
      yield { name: '3' }
      await $eval((el) => el.setAttribute('cols', '8'))
      yield { name: '8' }
      await $eval((el) => el.setAttribute('cols', '0'))
      yield { name: '0' }
      await $eval((el) => el.setAttribute('cols', ''))
      yield { name: 'empty' }
      await $eval((el) => el.setAttribute('cols', 'invalid'))
      yield { name: 'invalid' }
      await $eval((el) => el.removeAttribute('cols'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'mouse interaction',
    url: withSingleOption,
    async *fn({ $, page }) {
      const pos = await centerBB($)

      await page.mouse.move(pos.x, pos.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover checked' }

      await page.mouse.move(0, 0)
      yield { name: 'checked' }

      await page.mouse.move(pos.x, pos.y)
      await page.mouse.down()
      yield { name: 'active checked' }
    },
  },
  {
    name: 'mouse toggle interaction',
    url: withToggleSingleOption,
    async *fn({ $, page }) {
      const pos = await centerBB($)

      await page.mouse.move(pos.x, pos.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }

      await page.mouse.up()
      yield { name: 'hover checked' }

      await page.mouse.move(0, 0)
      yield { name: 'checked' }

      await page.mouse.move(pos.x, pos.y)
      await page.mouse.down()
      yield { name: 'active checked' }
    },
  },
  {
    name: 'value',
    url: with3ColOptions,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty' }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'option-1' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'option-disabled' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing' }

      await $eval((el) => el.setAttribute('value', '0,1,2,missing'))
      yield { name: 'option-0,1,2,missing' }
    },
  },
  {
    name: 'multiple values',
    url: with3ColsMultiple,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty' }

      await $eval((el) => el.setAttribute('value', '1,2,3,missing'))
      yield { name: 'option-1-2-3-missing' }
    },
  },
  {
    name: 'small',
    url: with3ColOptions,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('small', ''))
      yield { name: 'set' }

      await $eval((el) => el.removeAttribute('small'))
      yield { name: 'unset' }
    },
  },
  {
    name: 'keyboard focus',
    url: with3ColOptions,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '0' }

      await page.keyboard.press('Tab')
      yield { name: '1' }

      await page.keyboard.press('Tab')
      yield { name: '2' }
    },
  },
  {
    name: 'small keyboard focus',
    url: with3ColsSmallOptions,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '0' }

      await page.keyboard.press('Tab')
      yield { name: '1' }

      await page.keyboard.press('Tab')
      yield { name: '2' }
    },
  },
  {
    name: 'click',
    url: with3ColOptions,
    async *fn({ $ }) {
      await $.locator('sinch-tile-control-option').nth(0).click()
      yield { name: 'option-0' }

      await $.locator('sinch-tile-control-option').nth(1).click()
      yield { name: 'option-1' }

      await $.locator('sinch-tile-control-option').nth(2).click()
      yield { name: 'option-2' }

      await $.locator('sinch-tile-control-option').nth(3).click()
      yield { name: 'option-3' }

      await $.locator('sinch-tile-control-option').nth(3).click()
      yield { name: 'option-3x' }
    },
  },
  {
    name: 'click multiple',
    url: with3ColsMultiple,
    async *fn({ $ }) {
      await $.locator('sinch-tile-control-option').nth(0).click()
      yield { name: 'option-0' }

      await $.locator('sinch-tile-control-option').nth(1).click()
      yield { name: 'option-0-1' }

      await $.locator('sinch-tile-control-option').nth(2).click()
      yield { name: 'option-0-1-2' }

      await $.locator('sinch-tile-control-option').nth(3).click()
      yield { name: 'option-0-1-2-3' }

      await $.locator('sinch-tile-control-option').nth(1).click()
      yield { name: 'option-0-1x-2-3' }
    },
  },
  {
    name: 'custom events',
    url: with3ColOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-tile-control-change', '1')
    },
  },
  {
    name: 'native events',
    url: with3ColOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-tile-control-change')

      // Click first item
      await $.locator('sinch-tile-control-option').nth(0).click()
      // Click second item
      await $.locator('sinch-tile-control-option').nth(1).click()
      // Click disabled item
      await $.locator('sinch-tile-control-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tile-control-change', detail: '0' },
        { type: 'sinch-tile-control-change', detail: '1' },
      ])
    },
  },
]))
