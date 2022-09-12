import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getFileChooser, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/file-picker?width=300'
const withMultiple = '/file-picker?width=200&multiple=true'
const checkValue = makeAccessibilityTests('/file-picker?width=200', 'sinch-file-picker')

const getAllEvents = (page: Page) => {
  return page.evaluate(() => {
    const result = (window as any).__events__;

    (window as any).__events__ = []

    return result.map((e: any) => {
      if (Array.isArray(e.detail)) {
        e.detail = e.detail.map((item: any) => {
          if (item instanceof File) {
            return {
              name: item.name,
              type: item.type,
            }
          }

          return item
        })
      }

      return e
    })
  })
}

test('accessibility', checkValue(async function* () {
  yield
}))

test('file-picker screenshots', runScreenshotTests('sinch-file-picker', [
  {
    name: 'wide',
    url: shot,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'pick single file',
    url: shot,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-file-picker-change')

      const fileChooser = await getFileChooser(page, () => $.click())

      expect(fileChooser.isMultiple()).toBe(false)

      await fileChooser.setFiles([
        {
          name: 'image.png',
          mimeType: 'image/png',
          buffer: Buffer.from(''),
        },
      ])

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-picker-change',
          detail: [
            {
              name: 'image.png',
              type: 'image/png',
            },
          ],
        },
      ])
    },
  },
  {
    name: 'pick multiple files',
    url: withMultiple,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-file-picker-change')

      const fileChooser = await getFileChooser(page, () => $.click())

      expect(fileChooser.isMultiple()).toBe(true)

      await fileChooser.setFiles([
        {
          name: 'image1.png',
          mimeType: 'image/png',
          buffer: Buffer.from(''),
        },
        {
          name: 'image2.png',
          mimeType: 'image/png',
          buffer: Buffer.from(''),
        },
      ])

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-picker-change',
          detail: [
            {
              name: 'image1.png',
              type: 'image/png',
            },
            {
              name: 'image2.png',
              type: 'image/png',
            },
          ],
        },
      ])
    },
  },
  {
    name: 'pick invalid size',
    url: shot,
    async *fn({ $, $eval, page }) {
      await subscribeToEvents(page, 'sinch-file-picker-change', 'sinch-file-picker-invalid')
      await $eval((el) => {
        el.size = 3
      })

      const fileChooser = await getFileChooser(page, () => $.click())

      await fileChooser.setFiles([
        {
          name: 'image.png',
          mimeType: 'image/png',
          buffer: Buffer.from('12345'),
        },
      ])

      expect(await getAllEvents(page)).toEqual([
        {
          type: 'sinch-file-picker-invalid',
          detail: 'size',
        },
      ])
    },
  },
  {
    name: 'pick valid size',
    url: shot,
    async *fn({ $, $eval, page }) {
      await subscribeToEvents(page, 'sinch-file-picker-change', 'sinch-file-picker-invalid')
      await $eval((el) => {
        el.size = 10
      })

      const fileChooser = await getFileChooser(page, () => $.click())

      await fileChooser.setFiles([
        {
          name: 'image.png',
          mimeType: 'image/png',
          buffer: Buffer.from('12345'),
        },
      ])

      expect(await getAllEvents(page)).toEqual([
        {
          type: 'sinch-file-picker-change',
          detail: [
            {
              name: 'image.png',
              type: 'image/png',
            },
          ],
        },
      ])
    },
  },
  {
    name: 'pick valid size set to 0',
    url: shot,
    async *fn({ $, $eval, page }) {
      await subscribeToEvents(page, 'sinch-file-picker-change', 'sinch-file-picker-invalid')
      await $eval((el) => {
        el.size = 0
      })

      const fileChooser = await getFileChooser(page, () => $.click())

      await fileChooser.setFiles([
        {
          name: 'image.png',
          mimeType: 'image/png',
          buffer: Buffer.from('12345'),
        },
      ])

      expect(await getAllEvents(page)).toEqual([
        {
          type: 'sinch-file-picker-change',
          detail: [
            {
              name: 'image.png',
              type: 'image/png',
            },
          ],
        },
      ])
    },
  },
]))
