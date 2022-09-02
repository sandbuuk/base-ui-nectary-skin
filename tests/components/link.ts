import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/link?text=Anchor%20text&href=url'
const withNarrow = '/link?width=110&text=Anchor%20text%20text%20long%20long%20long&href=url'
const withNarrowStandalone = '/link?width=110&text=Anchor%20text%20text%20long%20long%20long&href=url&standalone=true'
const withNarrowStandaloneExternal = '/link?width=110&text=Anchor%20text%20text%20long%20long%20long&href=url&standalone=true&external=true'
const withExternal = '/link?text=Anchor%20text&href=url&external=true'
const withExternalDisabled = '/link?text=Anchor%20text&href=url&disabled=true&external=true'
const withStandalone = '/link?text=Anchor%20text&href=url&standalone=true'
const withStandaloneDisabled = '/link?text=Anchor%20text&href=url&standalone=true&disabled=true'
const withStandaloneExternal = '/link?text=Anchor%20text&href=url&standalone=true&external=true'
const withStandaloneExternalDisabled = '/link?text=Anchor%20text&href=url&standalone=true&external=true&disabled=true'
const checkLink = makeAccessibilityTests('/link?text=Anchor%20text&href=url', 'sinch-link')

test('accessibility', checkLink(async function* () {
  yield
}))

test('link screenshots', runScreenshotTests('sinch-link', [
  {
    name: 'standalone property',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.standalone = true
      })
      yield { name: 'set', include: [page.locator('#link-wrapper')] }
      await $eval((el) => {
        el.standalone = false
      })
      yield { name: 'unset', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'standalone attribute',
    url: shot,
    async *fn({ $eval, page }) {
      await $eval((el) => el.setAttribute('standalone', ''))
      yield { name: 'set', include: [page.locator('#link-wrapper')] }
      await $eval((el) => el.removeAttribute('standalone'))
      yield { name: 'unset', include: [page.locator('#link-wrapper')] }
    },
  },
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
    name: 'external disabled',
    url: withExternalDisabled,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'standalone disabled',
    url: withStandaloneDisabled,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'standalone external',
    url: withStandaloneExternal,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'standalone external disabled',
    url: withStandaloneExternalDisabled,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'narrow',
    url: withNarrow,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'narrow standalone',
    url: withNarrowStandalone,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'narrow standalone external',
    url: withNarrowStandaloneExternal,
    async *fn({ page }) {
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'hover disabled',
    url: withExternalDisabled,
    async *fn({ $, page }) {
      const ct = centerRect(await $.boundingBox())

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'hover',
    url: withExternal,
    async *fn({ $, page }) {
      const ct = centerRect(await $.boundingBox())

      await page.mouse.move(ct.x, ct.y)
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'focus',
    url: withExternal,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: 'shot', include: [page.locator('#link-wrapper')] }
    },
  },
  {
    name: 'focus standalone',
    url: withStandalone,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
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
          { type: 'sinch-link-click', detail: null },
        ])
      )
    },
  },
]))
