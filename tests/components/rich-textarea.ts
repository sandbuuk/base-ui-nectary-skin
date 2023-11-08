import { expect, test } from '@playwright/test'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withEmpty = '/rich-textarea?width=400'
const withValue = '/rich-textarea?width=400&value=Input%20value'
const withPlaceholder = '/rich-textarea?width=400&placeholder=Enter%20text...'
const withEverything = '/rich-textarea?width=400&top=true&bottom=true&placeholder=Enter%20text...'
const withMd = '/rich-textarea?width=400&example=md'

test('rich-textarea screenshots', runScreenshotTests('sinch-rich-textarea', [
  {
    name: 'value',
    url: withPlaceholder,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', 'Input Value'))
      yield { name: 'updated' }
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'placeholder',
    url: withEmpty,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('placeholder', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'type',
    url: withPlaceholder,
    async *fn({ $, page, isWebkit }) {
      if (isWebkit) {
        // Webkit for some reason cannot type into rich-textarea
        // It loses typing ability after typing first letter
        // Clicking on the element helps
        // The reason can be "preventDefault" being called after first letter
        await page.keyboard.press('Tab')
        await page.keyboard.type('F')
        await $.click()
        await page.keyboard.type('irst line', { delay: 300 })
        await page.keyboard.press('Enter')
        await $.click()
        await page.keyboard.type('S')
        await $.click()
        await page.keyboard.type('econd line', { delay: 300 })
      } else {
        await page.keyboard.press('Tab')
        await page.keyboard.type('First line', { delay: 300 })
        await page.keyboard.press('Enter')
        await page.keyboard.type('Second line', { delay: 300 })
      }

      yield { name: 'shot' }
    },
  },
  {
    name: 'slots',
    url: withEverything,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'markdown',
    url: withMd,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))

test('rich-textarea events', runScreenshotTests('sinch-rich-textarea', [
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-rich-textarea-change', 'X')
      await testInput('-focus', 'sinch-rich-textarea-focus')
      await testInput('-blur', 'sinch-rich-textarea-blur')
    },
  },
  {
    name: 'native events',
    url: withValue,
    async *fn({ $, page }) {
      const bb = await centerBB($)

      await subscribeToEvents(page, 'sinch-rich-textarea-focus', 'sinch-rich-textarea-blur', 'sinch-rich-textarea-change')
      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      await page.mouse.click(bb.x, bb.y)
      await page.keyboard.press('End')
      await $.type('X')
      // Blur textarea to receive change event
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-rich-textarea-focus', detail: null },
        { type: 'sinch-rich-textarea-blur', detail: null },
        { type: 'sinch-rich-textarea-focus', detail: null },
        // receive blur event before change
        { type: 'sinch-rich-textarea-blur', detail: null },
        { type: 'sinch-rich-textarea-change', detail: 'Input valueX' },
      ])
    },
  },
]))
