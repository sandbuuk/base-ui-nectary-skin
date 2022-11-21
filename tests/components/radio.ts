import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, getBB, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const options = encodeURI(JSON.stringify([{
  value: 1,
  text: 'Option value 1',
}, {
  value: 2,
  text: 'Option value 2',
  disabled: true,
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
}]))
const withOptions = `/radio?width=200&options=${options}`
const withSingleOption = `/radio?options=${singleOption}`
const narrowLabel = `/radio?width=100&options=${singleOption}`
const checkRadioOptions = makeAccessibilityTests(`/radio?width=200&options=${options}`, 'sinch-radio')

test('accessibility', checkRadioOptions({
  async *fn() {
    yield
  },
}))

test('radio screenshots', runScreenshotTests('sinch-radio', [
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
    name: 'focus',
    url: withSingleOption,
    async *fn({ $eval, page }) {
      await page.keyboard.press('Tab')

      await $eval((el) => {
        el.value = '1'
      })
      yield { name: 'checked' }

      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'unchecked' }
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
    name: 'keyboard',
    url: withOptions,
    async *fn({ $, page }) {
      await page.keyboard.press('Tab')
      yield { name: '1-focus' }

      await $.press('ArrowDown')
      await $.press('ArrowDown')
      yield { name: '2-down-down' }

      await $.press('ArrowRight')
      await $.press('ArrowRight')
      yield { name: '3-right-right' }

      await $.press('ArrowUp')
      await $.press('ArrowLeft')
      yield { name: '4-up-left' }
    },
  },
  {
    name: 'custom events',
    url: withOptions,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-radio-change', '2')
    },
  },
  {
    name: 'native events',
    url: withOptions,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-radio-change')

      // Click first option
      await $.locator('sinch-radio-option').nth(0).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-radio-change', detail: '1' },
      ])

      // Click third option
      await $.locator('sinch-radio-option').nth(2).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-radio-change', detail: '3' },
      ])
    },
  },
]))
