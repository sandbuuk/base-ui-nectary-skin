import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withOptions = '/tabs'
const withSingleOption = '/tabs?example=single'
const withIcons = '/tabs?example=icons'
const withSingleIcon = '/tabs?example=single-icon'
const withNarrow = '/tabs?width=100&example=single'
const withWide = '/tabs?width=250&example=icons'
const checkTabsWithOptions = makeAccessibilityTests('/tabs', 'sinch-tabs')

test('accessibility', checkTabsWithOptions({
  async *fn() {
    yield
  },
}))

test('tabs screenshots', runScreenshotTests('sinch-tabs', [
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
    name: 'mouse interaction',
    url: withSingleOption,
    async *fn({ $, page }) {
      const rect = await centerBB($)

      await page.mouse.move(rect.x, rect.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'focus mouse interaction',
    url: withSingleOption,
    async *fn({ $, page }) {
      const rect = await centerBB($)

      await page.keyboard.press('Tab')
      await page.mouse.move(rect.x, rect.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'icon mouse interaction',
    url: withSingleIcon,
    async *fn({ $, page }) {
      const rect = await centerBB($)

      await page.mouse.move(rect.x, rect.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'icon focus mouse interaction',
    url: withSingleIcon,
    async *fn({ $, page }) {
      const rect = await centerBB($)

      await page.keyboard.press('Tab')
      await page.mouse.move(rect.x, rect.y)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'keyboard',
    url: withSingleOption,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1-focus' }

      await page.keyboard.press('Enter')
      yield { name: '2-enter' }
    },
  },
  {
    name: 'icon keyboard',
    url: withSingleIcon,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1-focus' }

      await page.keyboard.press('Enter')
      yield { name: '2-enter' }
    },
  },
  {
    name: 'multiple interactive',
    url: withIcons,
    async *fn({ page, $eval }) {
      const pt = await centerBB(page.locator('sinch-tabs-icon-option').nth(3))

      await $eval((el) => {
        el.value = '1'
      })
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.mouse.move(pt.x, pt.y)
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
  {
    name: 'wide',
    url: withWide,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-tabs-change', '2')
    },
  },
  {
    name: 'native events',
    url: withOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-tabs-change')

      // Click first item
      await $.locator('sinch-tabs-option').nth(0).click()
      // Click second item
      await $.locator('sinch-tabs-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tabs-change', detail: '1' },
        { type: 'sinch-tabs-change', detail: '3' },
      ])
    },
  },
  {
    name: 'icon native events',
    url: withIcons,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-tabs-change')

      // Click first item
      await $.locator('sinch-tabs-icon-option').nth(0).click()
      // Click second item
      await $.locator('sinch-tabs-icon-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tabs-change', detail: '1' },
        { type: 'sinch-tabs-change', detail: '3' },
      ])
    },
  },
]))
