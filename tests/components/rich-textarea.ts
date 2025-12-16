import { expect, test } from '@playwright/test'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const withEmpty = '/rich-textarea?width=400'
const withValue = '/rich-textarea?width=400&value=Input%20value'
const withPlaceholder = '/rich-textarea?width=400&placeholder=Enter%20text...'
const withEverything = '/rich-textarea?width=400&top=true&bottom=true&placeholder=Enter%20text...'
const withMd = '/rich-textarea?width=400&example=md'
const withTag = '/rich-textarea?width=400&value=Hello%20%7B%7BJohnDoe%7D%7D%20world'

const mockEmojiUrl = async (page: Page) => {
  const url = '**/*.{svg}'

  await page.route(url, (route) => {
    const body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFDC5D" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#FFDC5D" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#EF9645" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

    return route.fulfill({
      contentType: 'image/svg+xml',
      status: 200,
      body,
    })
  })

  return () => page.unroute(url)
}

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
        await page.keyboard.type('irst line')
        await page.keyboard.press('Enter')
        await $.click()
        await page.keyboard.type('S')
        await $.click()
        await page.keyboard.type('econd line')
      } else {
        await page.keyboard.press('Tab')
        await page.keyboard.type('First line')
        await page.keyboard.press('Enter')
        await page.keyboard.type('Second line')
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
    before({ page }) {
      return mockEmojiUrl(page)
    },
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'tag',
    url: withTag,
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
