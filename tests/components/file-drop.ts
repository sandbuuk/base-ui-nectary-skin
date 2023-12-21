import { expect, test } from '@playwright/test'
import { centerBB, getFileChooser, runScreenshotTests, subscribeToEvents } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/file-drop?width=300'
const withWide = '/file-drop?width=600'
const withDisabled = '/file-drop?width=300&disabled=true'
const withInvalid = '/file-drop?width=300&invalid=true'
const withMultiple = '/file-drop?width=200&multiple=true'
const withAcceptPngMime = '/file-drop?width=200&accept=image%2Fpng'
const withAcceptPngExt = '/file-drop?width=200&accept=.png,.gif'
const withMultipleAcceptImage = '/file-drop?width=200&multiple=true&accept=image%2F*'

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

test('file-drop screenshots', runScreenshotTests('sinch-file-drop', [
  {
    name: 'narrow',
    url: shot,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'wide',
    url: withWide,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'drag valid',
    url: shot,
    async *fn({ page }) {
      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image.png', { type: 'image/png' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'dragenter', { dataTransfer })
      yield { name: 'enter' }
      await page.dispatchEvent('sinch-file-drop', 'dragleave', { dataTransfer })
      yield { name: 'leave' }
    },
  },
  {
    name: 'drag over invalid',
    url: withInvalid,
    async *fn({ page }) {
      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image.png', { type: 'image/png' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'dragenter', { dataTransfer })
      yield { name: 'enter' }
      await page.dispatchEvent('sinch-file-drop', 'dragleave', { dataTransfer })
      yield { name: 'leave' }
    },
  },
  {
    name: 'drag invalid files',
    url: shot,
    async *fn({ page }) {
      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'dragenter', { dataTransfer })
      yield { name: 'enter' }
      await page.dispatchEvent('sinch-file-drop', 'dragleave', { dataTransfer })
      yield { name: 'leave' }
    },
  },
  {
    name: 'drag disabled',
    url: withDisabled,
    async *fn({ page }) {
      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image.png', { type: 'image/png' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'dragenter', { dataTransfer })
      yield { name: 'enter' }
      await page.dispatchEvent('sinch-file-drop', 'dragleave', { dataTransfer })
      yield { name: 'leave' }
    },
  },
  {
    name: 'pick single file',
    url: shot,
    async *fn({ $, page }) {
      const buttonCenter = await centerBB($.locator('sinch-button'))

      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const fileChooser = await getFileChooser(page, () => page.mouse.click(buttonCenter.x, buttonCenter.y))

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
          type: 'sinch-file-drop-change',
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
      const buttonCenter = await centerBB($.locator('sinch-button'))

      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const fileChooser = await getFileChooser(page, () => page.mouse.click(buttonCenter.x, buttonCenter.y))

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
          type: 'sinch-file-drop-change',
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
    name: 'pick when disabled',
    url: withDisabled,
    async *fn({ $, page }) {
      const buttonCenter = await centerBB($.locator('sinch-button'))

      try {
        await Promise.all([
          page.waitForEvent('filechooser', { timeout: 1000 }),
          page.mouse.click(buttonCenter.x, buttonCenter.y),
        ])
      } catch {
        return
      }

      throw new Error('Should not get here')
    },
  },
  {
    name: 'pick invalid size',
    url: shot,
    async *fn({ $, $eval, page }) {
      const buttonCenter = await centerBB($.locator('sinch-button'))

      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')
      await $eval((el) => {
        el.size = 3
      })

      const fileChooser = await getFileChooser(page, () => page.mouse.click(buttonCenter.x, buttonCenter.y))

      await fileChooser.setFiles([
        {
          name: 'image.png',
          mimeType: 'image/png',
          buffer: Buffer.from('12345'),
        },
      ])

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-invalid',
          detail: 'size',
        },
      ])
    },
  },
  {
    name: 'pick valid size',
    url: shot,
    async *fn({ $, $eval, page }) {
      const buttonCenter = await centerBB($.locator('sinch-button'))

      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')
      await $eval((el) => {
        el.size = 10
      })

      const fileChooser = await getFileChooser(page, () => page.mouse.click(buttonCenter.x, buttonCenter.y))

      await fileChooser.setFiles([
        {
          name: 'image.png',
          mimeType: 'image/png',
          buffer: Buffer.from('12345'),
        },
      ])

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-change',
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
    name: 'drop when disabled',
    url: withDisabled,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image.png', { type: 'image/png' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', { dataTransfer })

      expect(
        await getAllEvents(page)
      ).toEqual([])
    },
  },
  {
    name: 'drop single file',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image.png', { type: 'image/png' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', { dataTransfer })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-change',
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
    name: 'drop multiple files',
    url: withMultipleAcceptImage,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image1.png', { type: 'image/png' }))
        dt.items.add(new File([''], 'image2.gif', { type: 'image/gif' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', { dataTransfer })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-change',
          detail: [
            {
              name: 'image1.png',
              type: 'image/png',
            },
            {
              name: 'image2.gif',
              type: 'image/gif',
            },
          ],
        },
      ])
    },
  },
  {
    name: 'drop invalid multiple event',
    url: shot,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'image1.png', { type: 'image/png' }))
        dt.items.add(new File([''], 'image2.png', { type: 'image/png' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', { dataTransfer })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-invalid',
          detail: 'multiple',
        },
      ])
    },
  },
  {
    name: 'drop invalid accept mime event',
    url: withAcceptPngMime,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'text.txt', { type: 'text/plain' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', { dataTransfer })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-invalid',
          detail: 'accept',
        },
      ])
    },
  },
  {
    name: 'drop invalid accept extension event',
    url: withAcceptPngExt,
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      const dataTransfer = await page.evaluateHandle(() => {
        const dt = new DataTransfer()

        dt.items.add(new File([''], 'text.txt', { type: 'text/plain' }))

        return dt
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', { dataTransfer })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-invalid',
          detail: 'accept',
        },
      ])
    },
  },
  {
    name: 'drop invalid size event',
    url: shot,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')

      await $eval((el) => {
        el.size = 3
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', {
        dataTransfer: await page.evaluateHandle(() => {
          const dt = new DataTransfer()

          dt.items.add(new File(['1234'], 'text.txt', { type: 'text/plain' }))

          return dt
        }),
      })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-invalid',
          detail: 'size',
        },
      ])
    },
  },
  {
    name: 'drop valid size',
    url: shot,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')
      await $eval((el) => {
        el.size = 10
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', {
        dataTransfer: await page.evaluateHandle(() => {
          const dt = new DataTransfer()

          dt.items.add(new File(['12345'], 'text.txt', { type: 'text/plain' }))

          return dt
        }),
      })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-change',
          detail: [
            {
              name: 'text.txt',
              type: 'text/plain',
            },
          ],
        },
      ])
    },
  },
  {
    name: 'drop valid size set to 0',
    url: shot,
    async *fn({ $eval, page }) {
      await subscribeToEvents(page, 'sinch-file-drop-change', 'sinch-file-drop-invalid')
      await $eval((el) => {
        el.size = 0
      })

      await page.dispatchEvent('sinch-file-drop', 'drop', {
        dataTransfer: await page.evaluateHandle(() => {
          const dt = new DataTransfer()

          dt.items.add(new File(['12345'], 'text.txt', { type: 'text/plain' }))

          return dt
        }),
      })

      expect(
        await getAllEvents(page)
      ).toEqual([
        {
          type: 'sinch-file-drop-change',
          detail: [
            {
              name: 'text.txt',
              type: 'text/plain',
            },
          ],
        },
      ])
    },
  },
]))
