import { orientationValues } from '@nectary/components/popover/utils'
import { expect, test } from '@playwright/test'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withModalOpen = '/popover?open=true&modal=true&orientation=bottom-right'
const withModal = '/popover?modal=true&orientation=bottom-right'
const withWideModalOpen = '/popover?width=300&open=true&modal=true&orientation=bottom-right'
const withWideModal = '/popover?width=300&modal=true&orientation=bottom-right'
const withWideNonModal = '/popover?width=300&orientation=bottom-right'
const withNonModalElementOffset = '/popover?width=300&example=offset'
const withSwitchingContent = '/popover?width=300&example=switch-content'

test.fixme('popover screenshots - very flaky', runScreenshotTests('sinch-popover', [
  {
    name: 'open',
    url: withModal,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('open', ''))
      yield { name: 'set', includeRects: [await $eval((el) => el.popoverRect)] }

      await $eval((el) => el.removeAttribute('open'))
      yield { name: 'unset', includeRects: [await $eval((el) => el.popoverRect)] }

      /* Property */
      let attrValue

      attrValue = await $eval((el) => {
        el.open = true

        return el.getAttribute('open')
      })
      expect(attrValue).toBe('')

      attrValue = await $eval((el) => {
        el.open = false

        return el.getAttribute('open')
      })
      expect(attrValue).toBe(null)
    },
  },
  {
    name: 'orientation',
    url: withWideModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => el.setAttribute('orientation', value), value)
        yield { name: value, includeRects: [await $eval((el) => el.popoverRect)] }
      }

      /* Property */
      const attrValue = await $eval((el) => {
        el.orientation = 'top-left'

        return el.getAttribute('orientation')
      })

      expect(attrValue).toBe('top-left')
    },
  },
  {
    name: 'tip orientation',
    url: withModalOpen,
    async *fn({ $eval }) {
      for (const value of orientationValues) {
        await $eval((el, value) => {
          el.setAttribute('tip', '')
          el.setAttribute('orientation', value)
        }, value)
        yield { name: value, includeRects: [await $eval((el) => el.popoverRect)] }
      }
    },
  },
  {
    name: 'modal',
    url: withWideNonModal,
    async *fn({ $eval }) {
      /* Property */
      let attrValue

      attrValue = await $eval((el) => {
        el.modal = false

        return el.getAttribute('modal')
      })
      expect(attrValue).toBe(null)

      attrValue = await $eval((el) => {
        el.modal = true

        return el.getAttribute('modal')
      })
      expect(attrValue).toBe('')
    },
  },
  {
    name: 'modal interactions',
    url: withWideModal,
    async *fn({ page, $ }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      // Close by Escape key
      await page.keyboard.press('Escape')
      await expect($.getAttribute('open')).resolves.toBe(null)

      // Open popover
      await page.keyboard.press('Enter')

      // Close by clicking outside
      await page.mouse.click(0, 0)
      await expect($.getAttribute('open')).resolves.toBe(null)
    },
  },
  {
    name: 'non modal interactions',
    url: withWideNonModal,
    async *fn({ page, $ }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      // Close by Escape key
      await page.keyboard.press('Escape')
      await expect($.getAttribute('open')).resolves.toBe(null)

      // Open popover
      await page.keyboard.press('Enter')

      // Can close by clicking outside
      await page.mouse.click(0, 0)
      await expect($.getAttribute('open')).resolves.toBe(null)
    },
  },
  {
    name: 'positioning',
    url: withNonModalElementOffset,
    async *fn({ page, $eval }) {
      // Focus button on page
      await page.keyboard.press('Tab')
      // Open popover
      await page.keyboard.press('Enter')

      yield { name: '1-open', includeRects: [await $eval((el) => el.popoverRect)] }

      // Can close
      await page.keyboard.press('Escape')

      yield { name: '2-close', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'switch content',
    url: withSwitchingContent,
    async *fn({ page, $eval }) {
      await page.click('#open')
      yield { name: '1-open', includeRects: [await $eval((el) => el.popoverRect)] }

      await page.click('#switch-content')
      yield { name: '2-switch', includeRects: [await $eval((el) => el.popoverRect)] }

      await page.click('#switch-content')
      yield { name: '3-switch', includeRects: [await $eval((el) => el.popoverRect)] }
    },
  },
  {
    name: 'custom events',
    url: withModalOpen,
    async *fn({ $, page }) {
      const testPopover = testCustomEvent(page, $)

      await testPopover('-close', 'sinch-popover-close')
    },
  },
  {
    name: 'native events',
    url: withModalOpen,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-popover-close')

      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-popover-close', detail: null },
      ])
    },
  },
]))
