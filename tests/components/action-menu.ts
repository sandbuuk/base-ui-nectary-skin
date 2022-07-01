import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { expandRect, getAllEvents, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'

const withSelect = '/action-menu'
const withWideContent = '/action-menu?width=400'
const withMaxItems = '/action-menu?maxvisibleitems=2'
const check = makeAccessibilityTests('/action-menu', 'sinch-action-menu')

test('accessibility', check(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('dropdown screenshots', runScreenshotTests('sinch-action-menu', [
  {
    name: 'open attribute',
    url: withSelect,
    async *fn({ $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await getRect()] }
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await getRect()] }
    },
  },
  {
    name: 'orientation attribute',
    url: withSelect,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $.click()
      await $eval((el) => el.setAttribute('orientation', 'top-left'))
      yield { name: 'top-left', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('orientation', 'top-right'))
      yield { name: 'top-right', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('orientation', 'bottom-left'))
      yield { name: 'bottom-left', includeRects: [await getRect()] }

      await $eval((el) => el.setAttribute('orientation', 'bottom-right'))
      yield { name: 'bottom-right', includeRects: [await getRect()] }
    },
  },
  {
    name: 'orientation property',
    url: withSelect,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $.click()
      await $eval((el) => {
        el.orientation = 'top-left'
      })
      yield { name: 'top-left', includeRects: [await getRect()] }

      await $eval((el) => {
        el.orientation = 'top-right'
      })
      yield { name: 'top-right', includeRects: [await getRect()] }

      await $eval((el) => {
        el.orientation = 'bottom-left'
      })
      yield { name: 'bottom-left', includeRects: [await getRect()] }

      await $eval((el) => {
        el.orientation = 'bottom-right'
      })
      yield { name: 'bottom-right', includeRects: [await getRect()] }
    },
  },
  {
    name: 'maxvisibleitems attribute',
    url: withSelect,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $eval((el) => el.setAttribute('maxvisibleitems', '2'))
      await $.click()
      yield { name: 'items 2', includeRects: [await getRect()] }
    },
  },
  {
    name: 'maxvisibleitems property',
    url: withSelect,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $eval((el) => {
        el.maxVisibleItems = 2
      })
      await $.click()
      yield { name: 'items 2', includeRects: [await getRect()] }
    },
  },
  {
    name: 'maxvisibleitems scroll',
    url: withMaxItems,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $.click()
      await $.press('ArrowDown')
      yield { name: 'scroll to 3', includeRects: [await getRect()] }
    },
  },
  {
    name: 'wide target',
    url: withWideContent,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $.click()

      yield { name: 'shot', includeRects: [await getRect()] }
    },
  },
  {
    name: 'focus press-space',
    url: withSelect,
    async *fn({ $eval, page }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await page.keyboard.press('Tab')
      await page.keyboard.press('Space')

      yield { name: 'open', includeRects: [await getRect()] }

      await page.keyboard.press('Space')
      yield { name: 'close', includeRects: [await getRect()] }

      await page.keyboard.press('Space')
      yield { name: 'open-again', includeRects: [await getRect()] }
    },
  },
  {
    name: 'focus press-enter',
    url: withSelect,
    async *fn({ $eval, page }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await page.keyboard.press('Tab')
      await page.keyboard.press('Enter')

      yield { name: 'open', includeRects: [await getRect()] }

      await page.keyboard.press('Enter')
      yield { name: 'close', includeRects: [await getRect()] }

      await page.keyboard.press('Enter')
      yield { name: 'open-again', includeRects: [await getRect()] }
    },
  },
  {
    name: 'keyboard',
    url: withSelect,
    async *fn({ $, $eval }) {
      const getRect = async () => expandRect(await $eval((el) => el.dropdownRect), 6)

      await $.click()

      yield { name: 'open', includeRects: [await getRect()] }

      await $.press('ArrowDown')
      yield { name: 'down', includeRects: [await getRect()] }

      await $.press('ArrowDown')
      await $.press('ArrowRight')
      yield { name: 'down-right', includeRects: [await getRect()] }

      await $.press('ArrowUp')
      await $.press('ArrowLeft')
      yield { name: 'up-left', includeRects: [await getRect()] }

      await $.press('Escape')
      yield { name: 'escape', includeRects: [await getRect()] }
    },
  },
]))

test('dropdown events', runScreenshotTests('sinch-action-menu', [
  {
    name: 'custom events',
    url: withSelect,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-close')

      await $.locator('sinch-action-menu-option').nth(0).evaluate((el) => {
        el.dispatchEvent(new CustomEvent('click', { bubbles: true }))
      })

      await $.evaluate((el) => {
        el.dispatchEvent(new CustomEvent('close', { bubbles: true }))
      })

      const events = await getAllEvents(page)

      expect(events).toEqual([
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
  {
    name: 'custom events',
    url: withSelect,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-action-menu-click', 'sinch-action-menu-close')

      await $.click()
      await page.keyboard.press('Enter')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Escape')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-action-menu-click', detail: 'Option 1 value long long long' },
        { type: 'sinch-action-menu-close', detail: null },
      ])
    },
  },
]))
