import { expect, test } from '@playwright/test'
import { statusValues } from '@sinch-engage/nectary/accordion-item/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withItems = `/accordion?width=300`
const withItemsMultiple = `/accordion?width=300&multiple=true`
const withSingleItem = `/accordion?width=200&example=single`
const checkItems = makeAccessibilityTests(`/accordion?width=200`, 'sinch-accordion')

test('accessibility', checkItems({
  async *fn() {
    yield
  },
}))

test('accordion screenshots', runScreenshotTests('sinch-accordion', [
  {
    name: 'value',
    url: withItems,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }

      await $eval((el) => el.setAttribute('value', '4'))
      yield { name: '4' }

      await $eval((el) => el.setAttribute('value', '3'))
      yield { name: '3' }

      await $eval((el) => el.setAttribute('value', '2'))
      yield { name: '2' }

      await $eval((el) => el.setAttribute('value', '1'))
      yield { name: '1' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'missing' }

      /* Property */
      const attrValue = await $eval((el) => {
        el.value = '4'

        return el.getAttribute('value')
      })

      expect(attrValue).toBe('4')
    },
  },
  {
    name: 'normal mode',
    url: withItems,
    async *fn({ $ }) {
      await $.locator('sinch-accordion-item').nth(0).click()
      yield { name: '1-click-0' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: '2-click-3' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: '3-click-3' }
    },
  },
  {
    name: 'multiple mode',
    url: withItemsMultiple,
    async *fn({ $ }) {
      await $.locator('sinch-accordion-item').nth(0).click()
      yield { name: '1-click-0' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: '2-click-3' }

      await $.locator('sinch-accordion-item').nth(3).click()
      yield { name: '3-click-3' }
    },
  },
  {
    name: 'disabled',
    url: withSingleItem,
    async *fn({ $ }) {
      const $item = $.locator('sinch-accordion-item').first()

      await $item.evaluate((el) => el.setAttribute('disabled', ''))
      await $.locator('sinch-accordion-item').nth(0).click()
      yield { name: 'click' }

      /* Property */
      const attrValue = await $item.evaluate((el) => {
        (el as any).disabled = false

        return el.getAttribute('disabled')
      })

      expect(attrValue).toBe(null)
    },
  },
  {
    name: 'status',
    url: withSingleItem,
    async *fn({ $ }) {
      const $item = $.locator('sinch-accordion-item').first()

      for (const value of statusValues) {
        await $item.evaluate((el, value) => el.setAttribute('status', value), value)
        yield { name: value }
      }

      /* Property */
      const attrValue = await $item.evaluate((el) => {
        (el as any).status = 'info'

        return el.getAttribute('status')
      })

      expect(attrValue).toBe('info')
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
