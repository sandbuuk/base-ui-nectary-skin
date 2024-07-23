import { typeValues } from '@nectary/components/button/utils'
import type { } from '@nectary/components/button-group'
import { sizeExValues } from '@nectary/components/utils/size'
import { expect, test } from '@playwright/test'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { TSinchButtonGroupItemElement } from '@nectary/components/button-group-item/types'

const withFitWidth = '/button-group?type=primary&text=Text&icon-right=true'

test('button screenshots', runScreenshotTests('sinch-button-group', [
  {
    name: 'type',
    url: withFitWidth,
    async *fn({ $eval }) {
      for (const type of typeValues) {
        await $eval((el, value) => el.setAttribute('type', value), type)
        yield { name: type }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.type = 'destructive'

        return el.getAttribute('type')
      })

      expect(attrValue).toBe('destructive')
    },
  },
  {
    name: 'size',
    url: withFitWidth,
    async *fn({ $eval }) {
      for (const size of sizeExValues) {
        await $eval((el, value) => el.setAttribute('size', value), size)
        yield { name: size }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.size = 'l'

        return el.getAttribute('size')
      })

      expect(attrValue).toBe('l')
    },
  },
  {
    name: 'keyboard focus',
    url: withFitWidth,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot' }
    },
  },
  {
    name: 'text',
    url: withFitWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated'))
      yield { name: 'updated' }

      /* Property */
      const attrValue = await $eval((el) => {
        const buttonItem = el.querySelector('sinch-button-group-item:nth-child(1)') as TSinchButtonGroupItemElement

        buttonItem.text = 'Text'

        return buttonItem.getAttribute('text')
      })

      expect(attrValue).toBe('Text')
    },
  },
]))

test('button events', runScreenshotTests('sinch-button-group', [
  {
    name: 'custom events',
    url: withFitWidth,
    async *fn({ page, $ }) {
      const testButton = testCustomEvent(page, $.locator('sinch-button-group-item').first())

      await testButton('-click', 'sinch-button-click')
      await testButton('-focus', 'sinch-button-focus')
      await testButton('-blur', 'sinch-button-blur')
    },
  },
  {
    name: 'native events',
    url: withFitWidth,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-button-focus', 'sinch-button-blur', 'sinch-button-click')
      // Focus by keyboard
      await page.keyboard.press('Tab')
      // Click while focused
      await page.keyboard.press('Enter')
      await page.keyboard.press('Space')
      // Defocus
      await page.mouse.click(0, 0)

      await $.locator('sinch-button-group-item').first().click()
      await $.locator('sinch-button-group-item').first().click()

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-button-focus', detail: null },
        { type: 'sinch-button-click', detail: null },
        { type: 'sinch-button-click', detail: null },
        { type: 'sinch-button-blur', detail: null },
        { type: 'sinch-button-focus', detail: null },
        { type: 'sinch-button-click', detail: null },
        { type: 'sinch-button-click', detail: null },
      ])
    },
  },
]))
