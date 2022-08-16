import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const items = encodeURI(JSON.stringify([{
  value: 1,
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}, {
  value: 2,
  label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  status: 'info',
  content: 'Accordion content',
  optional: 'Optional',
}, {
  value: 3,
  label: 'Option value 3',
  disabled: true,
  icon: true,
  optional: 'Disabled',
}, {
  value: 4,
  label: 'Option value 4',
  content: 'Accordion content',
}]))
const singleItem = encodeURI(JSON.stringify([{
  value: 1,
  label: 'Option value 1',
  icon: true,
}]))
const singleItemDisabled = encodeURI(JSON.stringify([{
  value: 1,
  label: 'Option value 1',
  icon: true,
  disabled: true,
}]))
const withItems = `/accordion?width=300&options=${items}`
const withItemsMultiple = `/accordion?width=300&multiple=true&options=${items}`
const withSingleItem = `/accordion?width=200&options=${singleItem}`
const withSingleItemDisabled = `/accordion?width=200&options=${singleItemDisabled}`
const checkItems = makeAccessibilityTests(`/accordion?width=200&options=${items}`, 'sinch-accordion')

test('accessibility', checkItems(async function* () {
  yield
}))

test('accordion screenshots', runScreenshotTests('sinch-accordion', [
  {
    name: 'value attribute',
    url: withItems,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'value-empty' }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: 'value-4' }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: 'value-disabled' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: 'value-2' }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: 'value-1' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'value-missing' }
    },
  },
  {
    name: 'value property',
    url: withItems,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.value = ''
      })
      yield { name: 'value-empty' }

      await $eval((el) => {
        el.value = '4'
      })
      yield { name: 'value-4' }

      await $eval((el) => {
        el.value = '3'
      })
      yield { name: 'value-disabled' }

      await $eval((el) => {
        el.value = '2'
      })
      yield { name: 'value-2' }

      await $eval((el) => {
        el.value = '1'
      })
      yield { name: 'value-1' }

      await $eval((el) => {
        el.value = 'missing'
      })
      yield { name: 'value-missing' }
    },
  },
  {
    name: 'click',
    url: withItems,
    async *fn({ $ }) {
      await $.locator('sinch-accordion-item').nth(0).click()
      yield { name: 'open-0' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: 'open-3' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: 'close-3' }
    },
  },
  {
    name: 'multiple click',
    url: withItemsMultiple,
    async *fn({ $ }) {
      await $.locator('sinch-accordion-item').nth(0).click()
      yield { name: 'open-0' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: 'open-3' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: 'close-3' }
    },
  },
  {
    name: 'disabled click',
    url: withSingleItemDisabled,
    async *fn({ $ }) {
      await $.locator('sinch-accordion-item').nth(0).click()
      yield { name: 'open' }
    },
  },
  {
    name: 'disabled property',
    url: withSingleItem,
    async *fn({ $ }) {
      const $item = $.locator('sinch-accordion-item').first()

      await $item.evaluate((el) => {
        (el as any).disabled = true
      })
      yield { name: 'on' }
    },
  },
  {
    name: 'disabled attribute',
    url: withSingleItem,
    async *fn({ $ }) {
      const $item = $.locator('sinch-accordion-item').first()

      await $item.evaluate((el) => el.setAttribute('disabled', ''))
      yield { name: 'on' }
    },
  },
  {
    name: 'status property',
    url: withSingleItem,
    async *fn({ $ }) {
      const $item = $.locator('sinch-accordion-item').first()

      await $item.evaluate((el) => {
        (el as any).status = 'info'
      })
      yield { name: 'info' }

      await $item.evaluate((el) => {
        (el as any).status = 'success'
      })
      yield { name: 'success' }

      await $item.evaluate((el) => {
        (el as any).status = 'warn'
      })
      yield { name: 'warn' }

      await $item.evaluate((el) => {
        (el as any).status = 'error'
      })
      yield { name: 'error' }
    },
  },
  {
    name: 'status attribute',
    url: withSingleItem,
    async *fn({ $ }) {
      const $item = $.locator('sinch-accordion-item').first()

      await $item.evaluate((el) => el.setAttribute('status', 'info'))
      yield { name: 'info' }

      await $item.evaluate((el) => el.setAttribute('status', 'success'))
      yield { name: 'success' }

      await $item.evaluate((el) => el.setAttribute('status', 'warn'))
      yield { name: 'warn' }

      await $item.evaluate((el) => el.setAttribute('status', 'error'))
      yield { name: 'error' }
    },
  },
  {
    name: 'custom events',
    url: withItems,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-accordion-change', '2')
    },
  },
  {
    name: 'native events',
    url: withItems,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-accordion-change')

      // Click first item
      await $.locator('sinch-accordion-item').nth(0).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-accordion-change', detail: '1' },
      ])

      // Click second item
      await $.locator('sinch-accordion-item').nth(1).click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-accordion-change', detail: '2' },
      ])
    },
  },
]))
