import { expect, test } from '@playwright/test'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { Page } from 'playwright-core'

const longText = encodeURIComponent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.')

const withLongContent = `/sheet?title=Title&buttons=Ok|Cancel&content=${longText}`
const withTitleContentButtons = '/sheet?title=Title&buttons=Ok|Cancel&content=Content'
const withTitle = '/sheet?title=Title'
const withLongTitle = `/sheet?title=${longText}`
const withIcon = '/sheet?title=Title&icon=true'

/** Wait for sheet opening animation to complete */
const waitForSheetAnimation = (page: Page) => page.waitForTimeout(800)

test('sheet screenshots', runScreenshotTests('sinch-sheet', [
  {
    name: 'caption',
    url: withTitle,
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)
      await $eval((el) => el.querySelector('sinch-sheet-title')?.setAttribute('title', 'Updated title'))
      yield { name: 'updated', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'long caption',
    url: withLongTitle,
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)
      yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'icon caption',
    url: withIcon,
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)
      yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'content and buttons',
    url: withTitleContentButtons,
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)

      const rect = await $eval((el) => el.dialogRect)

      // Screenshot with content and buttons
      yield { name: 'shot', includeRects: [rect] }

      // Keyboard focus - tab through close button and action buttons
      await page.keyboard.press('Tab')
      yield { name: 'focus-1', includeRects: [rect] }

      await page.keyboard.press('Tab')
      yield { name: 'focus-2', includeRects: [rect] }

      await page.keyboard.press('Tab')
      yield { name: 'focus-3', includeRects: [rect] }
    },
  },
  {
    name: 'placements',
    url: '/sheet?title=Title&placement=left',
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)
      yield { name: 'left', includeRects: [await $eval((el) => el.dialogRect)] }

      // Change to top placement
      await $eval((el) => el.setAttribute('placement', 'top'))
      await waitForSheetAnimation(page)
      yield { name: 'top', includeRects: [await $eval((el) => el.dialogRect)] }

      // Change to bottom placement
      await $eval((el) => el.setAttribute('placement', 'bottom'))
      await waitForSheetAnimation(page)
      yield { name: 'bottom', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'overlay push',
    url: '/sheet?title=Title&overlay=push',
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)
      yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'css variables',
    url: withLongContent,
    async *fn({ page, $eval }) {
      await waitForSheetAnimation(page)
      await $eval((el) => {
        el.style.setProperty('--sinch-comp-sheet-size-max-horizontal', '256px')
      })
      yield { name: 'max-width', includeRects: [await $eval((el) => el.dialogRect)] }

      // Reset and test max-height with top placement
      await $eval((el) => {
        el.style.removeProperty('--sinch-comp-sheet-size-max-horizontal')
        el.setAttribute('placement', 'top')
        el.style.setProperty('--sinch-comp-sheet-size-max-vertical', '215px')
      })
      await waitForSheetAnimation(page)
      yield { name: 'max-height', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'custom events',
    url: withTitle,
    async *fn({ $, page }) {
      const testSheet = testCustomEvent(page, $)

      await testSheet('-close', 'sinch-sheet-close')
    },
  },
  {
    name: 'native events',
    url: withTitle,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-sheet-close')

      await $eval((el) => {
        el.querySelector('sinch-sheet-title')?.shadowRoot?.querySelector<HTMLButtonElement>('#close')?.click()
      })
      await page.keyboard.press('Escape')
      await page.mouse.click(0, 0)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-sheet-close', detail: 'close' },
        { type: 'sinch-sheet-close', detail: 'escape' },
        { type: 'sinch-sheet-close', detail: 'backdrop' },
      ])
    },
  },
]))
