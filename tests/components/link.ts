import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/link?text=Anchor%20text&href=url'
const withNarrowWidth = '/link?width=110&text=Anchor%20text%20text%20long%20long%20long&href=url'
const withExternalDisabled = '/link?text=Anchor%20text&href=url&disabled=true&external=true'
const withExternal = '/link?text=Anchor%20text&href=url&external=true'
const checkLink = makeAccessibilityTests('/link?text=Anchor%20text&href=url', 'sinch-link')

test('accessibility', checkLink(async function* () {
  yield
}))

test('link screenshots', runScreenshotTests('sinch-link', [
  {
    name: 'external property',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.external = true
      })
      yield { name: 'on', include: [page.locator('#link-wrapper')] }
      await $eval((el) => {
        el.external = false
      })
      yield { name: 'off', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'external attribute',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('external', ''))
      yield { name: 'on', include: [page.locator('#link-wrapper')] }
      await $eval((el) => el.removeAttribute('external'))
      yield { name: 'off', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'disabled property',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.disabled = true
      })
      yield { name: 'on', include: [page.locator('#link-wrapper')] }
      await $eval((el) => {
        el.disabled = false
      })
      yield { name: 'off', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'disabled attribute',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'on', include: [page.locator('#link-wrapper')] }
      await $eval((el) => el.removeAttribute('disabled'))
      yield { name: 'off', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'external disabled',
    url: withExternalDisabled,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'text attribute',
    url: withExternal,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('text', 'Updated Anchor'))
      yield { name: 'updated', include: [page.locator('#link-wrapper')] }

      await $eval((el) => el.setAttribute('text', ''))
      yield { name: 'empty', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'text property',
    url: withExternal,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.text = 'Updated Anchor'
      })
      yield { name: 'updated', include: [page.locator('#link-wrapper')] }

      await $eval((el) => {
        el.text = ''
      })
      yield { name: 'empty', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'narrow',
    url: withNarrowWidth,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'hover disabled',
    url: withExternalDisabled,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'hover',
    url: withExternal,
    async *fn({ $, page }) {
      const rect = (await $.boundingBox())!

      await page.mouse.move(rect.x + 5, rect.y + 15)
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'custom events',
    url: shot,
    async *fn({ $, page }) {
      const testAnchor = testCustomEvent(page, $)

      await testAnchor('-click', 'sinch-link-click')
      await testAnchor('-focus', 'sinch-link-focus')
      await testAnchor('-blur', 'sinch-link-blur')
    },
  },
  {
    name: 'native events',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-link-focus', 'sinch-link-blur', 'sinch-link-click')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-link-focus', detail: null },
        { type: 'sinch-link-blur', detail: null },
      ])

      await $.click()

      expect(
        await getAllEvents(page)
      ).toEqual(
        expect.arrayContaining([
          // Webkit does not focus anchor on click
          // { type: 'sinch-link-focus', detail: null },
          { type: 'sinch-link-click', detail: null },
        ])
      )
    },
  },
]))
