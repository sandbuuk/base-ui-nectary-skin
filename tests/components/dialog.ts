import { expect, test } from '@playwright/test'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const withTitleContentButtons = '/dialog?title=Title&buttons=Ok|Cancel&content=Content'
const withTitleButtons = '/dialog?title=Title&buttons=Ok|Cancel'
const withTitleLargeContent = '/dialog?title=Title&content=Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
const withTitle = '/dialog?title=Title'

test('dialog screenshots', runScreenshotTests('sinch-dialog', [
  {
    name: 'caption attribute',
    url: withTitle,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('caption', 'Updated title'))
      yield { name: 'updated', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'caption prop',
    url: withTitle,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.caption = 'Updated title'
      })
      yield { name: 'updated', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'caption content',
    url: withTitleLargeContent,
    async *fn({ $eval }) {
      yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'caption buttons',
    url: withTitleButtons,
    async *fn({ $eval }) {
      yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'caption content buttons',
    url: withTitleContentButtons,
    async *fn({ $eval }) {
      yield { name: 'shot', includeRects: [await $eval((el) => el.dialogRect)] }
    },
  },
  {
    name: 'custom events',
    url: withTitle,
    async *fn({ $, page }) {
      const testDialog = testCustomEvent(page, $)

      await testDialog('close', 'sinch-dialog-close')
    },
  },
  {
    name: 'native events',
    url: withTitle,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-dialog-close')

      const { x, y } = await $eval((el) => el.closeButtonRect)

      await page.keyboard.press('Escape')
      await page.mouse.click(0, 0)
      await page.mouse.click(x + 1, y + 1)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-dialog-close', detail: null },
        { type: 'sinch-dialog-close', detail: null },
        { type: 'sinch-dialog-close', detail: null },
      ])
    },
  },
]))
