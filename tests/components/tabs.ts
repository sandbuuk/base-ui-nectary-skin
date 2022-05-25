import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const options = encodeURI(JSON.stringify([{
  value: 1,
  text: 'Option value 1',
  icon: true,
}, {
  value: 2,
  text: 'Option value 2',
  disabled: true,
  icon: true,
}, {
  value: 3,
  text: 'Option value 3',
}, {
  value: 4,
  text: 'Option value 4',
}]))
const singleOption = encodeURI(JSON.stringify([{
  value: 1,
  text: 'Option value 1',
  icon: true,
}]))
const withOptions = `/tabs?width=300&options=${options}`
const withSingleOption = `/tabs?options=${singleOption}`
const narrowLabel = `/tabs?width=100&options=${singleOption}`
const checkTabsWithOptions = makeAccessibilityTests(`/tabs?options=${options}`, 'sinch-tabs')

test('accessibility', checkTabsWithOptions(async function* () {
  yield
}))

test('tabs screenshots', runScreenshotTests('sinch-tabs', [
  {
    name: 'narrow',
    url: narrowLabel,
    async *fn() {
      yield { name: 'clip' }
    },
  },
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
      yield { name: 'hover_checked' }

      await page.mouse.down()
      yield { name: 'active_checked' }
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
    name: 'keyboard',
    url: withOptions,
    async *fn({ $, page }) {
      await $.focus()
      yield { name: '1-focus' }

      await $.press('ArrowDown')
      await $.press('ArrowDown')
      await page.waitForTimeout(100)
      yield { name: '2-down-down' }

      await $.press('ArrowRight')
      await $.press('ArrowRight')
      await page.waitForTimeout(100)
      yield { name: '3-right-right' }

      await $.press('ArrowUp')
      await $.press('ArrowLeft')
      await page.waitForTimeout(100)
      yield { name: '4-up-left' }
    },
  },
  {
    name: 'custom events',
    url: withOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('change', 'sinch-tabs-change', '2')
    },
  },
  {
    name: 'native events',
    url: withOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-tabs-change')

      // Click first item
      await $.locator('sinch-tabs-option').nth(0).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tabs-change', detail: '1' },
      ])

      // Click second item
      await $.locator('sinch-tabs-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-tabs-change', detail: '3' },
      ])
    },
  },
]))
