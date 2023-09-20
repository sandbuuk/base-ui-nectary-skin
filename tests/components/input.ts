import { sizeValues } from '@nectary/components/utils/size'
import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, centerRect, getAllEvents, getBB, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const shot = '/input?width=200'
const withValue = '/input?width=200&value=Input%20value'
const withPlaceholder = '/input?width=200&placeholder=Placeholder%20value'
const withEverything = '/input?width=300&invalid=true&placeholder=Placeholder%20value&value=Input%20value&left=true&right=true&icon=true'
const withEverythingInvalid = '/input?width=300&invalid=true&placeholder=Placeholder%20value&value=Input%20value&left=true&right=true&icon=true'
const checkValue = makeAccessibilityTests('/input?width=200&value=Input%20value', 'sinch-input')
const withMask = '/input?width=200&mask=-AA-00-'
const withMaskPlaceholder = '/input?width=200&mask=-AA-00-@@.XX.DD.'
const withCopy = '/input?copy=true'
const withCut = '/input?cut=true'
const withPaste = '/input?paste=true'
const withMaskCopy = '/input?copy=true&mask=-AA-'
const withMaskCut = '/input?cut=true&mask=-AA-'
const withMaskPaste = '/input?paste=true&mask=-AA-'

test('accessibility', checkValue({
  async *fn() {
    yield
  },
}))

test('input screenshots', runScreenshotTests('sinch-input', [
  {
    name: 'size',
    url: withEverything,
    async *fn({ $eval }) {
      for (const size of sizeValues) {
        await $eval((el, value) => el.setAttribute('size', value), size)
        yield { name: size }
      }
    },
  },
  {
    name: 'type',
    url: withValue,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('type', 'password'))
      yield { name: 'password' }

      await $eval((el) => el.setAttribute('type', 'text'))
      yield { name: 'text' }
    },
  },
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
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('placeholder', 'Placeholder Value'))
      yield { name: 'updated' }

      await $eval((el) => el.setAttribute('placeholder', ''))
      yield { name: 'empty' }
    },
  },
  {
    name: 'fill',
    url: withPlaceholder,
    async *fn({ $, $eval, page }) {
      await page.keyboard.press('Tab')
      await $.type('Filled text')

      await expect($eval((el) => el.value)).resolves.toBe('Filled text')
    },
  },
  {
    name: 'focus',
    url: withEverything,
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      yield { name: '1' }

      await page.keyboard.press('Tab')
      yield { name: '2' }

      await page.keyboard.press('Tab')
      yield { name: '3' }
    },
  },
  {
    name: 'disabled',
    url: withEverythingInvalid,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('disabled', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('disabled')
      })
      yield { name: 'unset' }
    },
  },
  {
    name: 'invalid',
    url: withEverything,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('invalid', '')
      })
      yield { name: 'set' }

      await $eval((el) => {
        el.removeAttribute('invalid')
      })
      yield { name: 'unset' }
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
    name: 'mask',
    url: withMask,
    async *fn({ $, $eval, page }) {
      const ct = centerRect(await getBB($))

      await page.mouse.click(ct.x, ct.y)
      yield { name: '01-initial' }
      expect(await $eval((el) => el.selectionEnd)).toBe(1)
      await page.keyboard.press('a')
      yield { name: '02-type-a' }
      expect(await $eval((el) => el.selectionEnd)).toBe(2)
      await page.keyboard.press('b')
      yield { name: '03-type-b' }
      expect(await $eval((el) => el.selectionEnd)).toBe(4)
      await page.keyboard.press('c')
      yield { name: '04-type-c' }
      expect(await $eval((el) => el.selectionEnd)).toBe(4)
      await page.keyboard.press('1')
      yield { name: '05-type-1' }
      expect(await $eval((el) => el.selectionEnd)).toBe(5)
      await page.keyboard.press('2')
      yield { name: '06-type-2' }
      expect(await $eval((el) => el.selectionEnd)).toBe(7)
      await page.keyboard.press('3')
      yield { name: '07-type-3' }
      expect(await $eval((el) => el.selectionEnd)).toBe(7)
      await page.keyboard.press('Backspace')
      yield { name: '08-press-bs' }
      expect(await $eval((el) => el.selectionEnd)).toBe(5)
      await page.keyboard.press('ArrowLeft')
      await page.keyboard.press('ArrowLeft')
      await page.keyboard.press('ArrowLeft')
      await page.keyboard.press('Delete')
      yield { name: '09-press-lll-del' }
      expect(await $eval((el) => el.selectionEnd)).toBe(3)
      await page.keyboard.press('Delete')
      yield { name: '10-press-del' }
      expect(await $eval((el) => el.selectionEnd)).toBe(2)
    },
  },
  {
    name: 'mask-placeholder',
    url: withMaskPlaceholder,
    async *fn({ $, $eval, page }) {
      const ct = centerRect(await getBB($))

      await page.mouse.click(ct.x, ct.y)
      yield { name: '01-initial' }
      expect(await $eval((el) => el.selectionEnd)).toBe(1)
      await page.keyboard.type('ab12')
      yield { name: '02-type-ab12' }
    },
  },
  {
    name: 'mask-range',
    url: withMask,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        // causing value overflow
        el.value = 'ab1234'
      })
      yield { name: '1-set-value' }

      await $eval((el) => {
        el.focus()
        el.setSelectionRange(2, 5)
      })
      yield { name: '2-select' }

      await page.keyboard.press('x')
      yield { name: '3-type-x' }
    },
  },
  {
    name: 'mask-range-bs',
    url: withMask,
    async *fn({ $eval, page }) {
      await $eval((el) => {
        el.value = 'ab12'
      })
      yield { name: '1-set-value' }

      await $eval((el) => {
        el.focus()
        el.setSelectionRange(2, 5)
      })
      await page.keyboard.press('Backspace')
      yield { name: '2-bs' }
      expect(await $eval((el) => el.selectionEnd)).toBe(2)
    },
  },
  {
    name: 'mask-range-del',
    url: withMask,
    async *fn({ $eval, page, isWebkit }) {
      await $eval((el) => {
        el.value = 'ab12'
      })
      yield { name: '1-set-value' }

      await $eval((el) => {
        el.focus()
        el.setSelectionRange(2, 5)
      })
      await page.keyboard.press('Delete')
      yield { name: '2-del' }

      if (isWebkit) {
        // Safari generates 'deleteContentBackward' when deleting selected range
        expect(await $eval((el) => el.selectionEnd)).toBe(2)
      } else {
        expect(await $eval((el) => el.selectionEnd)).toBe(5)
      }
    },
  },
  {
    name: 'copy event',
    url: withCopy,
    solo: true,
    async *fn({ $eval, page, isWebkit }) {
      await subscribeToEvents(page, 'sinch-input-copy', 'sinch-input-cut', 'sinch-input-paste')

      await $eval((el) => {
        el.value = '1234'
        el.focus()
        el.setSelectionRange(1, 3)
      })
      await page.keyboard.press('Control+C')

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-input-copy', detail: '23' },
      ])

      // Playwright Webkit has empty e.clipboardData on paste
      if (!isWebkit) {
        await page.keyboard.press('End')
        await page.keyboard.press('Control+V')

        expect(await $eval((el) => el.value)).toBe('1234REPLACED')
      }
    },
  },
  {
    name: 'cut event',
    url: withCut,
    solo: true,
    async *fn({ $eval, page, isWebkit }) {
      await subscribeToEvents(page, 'sinch-input-copy', 'sinch-input-cut', 'sinch-input-paste')

      await $eval((el) => {
        el.value = '1234'
        el.focus()
        el.setSelectionRange(1, 3)
      })
      await page.keyboard.press('Control+X')

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-input-cut', detail: '23' },
      ])

      // Playwright Webkit has empty e.clipboardData on paste
      if (!isWebkit) {
        await page.keyboard.press('End')
        await page.keyboard.press('Control+V')
        expect(await $eval((el) => el.value)).toBe('14REPLACED')
      }
    },
  },
  {
    name: 'paste event',
    url: withPaste,
    solo: true,
    async *fn({ $eval, page, isWebkit }) {
      // Playwright Webkit has empty e.clipboardData on paste
      if (isWebkit) {
        return
      }

      await subscribeToEvents(page, 'sinch-input-copy', 'sinch-input-cut', 'sinch-input-paste')

      await $eval((el) => {
        el.value = 'abcd'
        el.focus()
        el.setSelectionRange(0, 4)
      })
      await page.keyboard.press('Control+C')
      await page.keyboard.press('End')
      await page.keyboard.press('Control+V')

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-input-paste', detail: 'abcd' },
      ])
      expect(await $eval((el) => el.value)).toBe('abcdREPLACED')
    },
  },
  {
    name: 'mask copy event',
    url: withMaskCopy,
    solo: true,
    async *fn({ $eval, page, isWebkit }) {
      await subscribeToEvents(page, 'sinch-input-copy', 'sinch-input-cut', 'sinch-input-paste')

      await $eval((el) => {
        el.value = 'abcd'
        el.focus()
        el.setSelectionRange(0, 4)
      })
      await page.keyboard.press('Control+C')

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-input-copy', detail: '-ab-' },
      ])

      // Playwright Webkit has empty e.clipboardData on paste
      if (isWebkit) {
        return
      }

      await page.keyboard.press('Backspace')
      await page.keyboard.press('Backspace')
      await page.keyboard.press('Control+V')
      expect(await $eval((el) => el.value)).toBe('-RE-')
    },
  },
  {
    name: 'mask cut event',
    url: withMaskCut,
    solo: true,
    async *fn({ $eval, page, isWebkit }) {
      await subscribeToEvents(page, 'sinch-input-copy', 'sinch-input-cut', 'sinch-input-paste')

      await $eval((el) => {
        el.value = 'abcd'
        el.focus()
        el.setSelectionRange(0, 4)
      })
      await page.keyboard.press('Control+X')

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-input-cut', detail: '-ab-' },
      ])

      // Playwright Webkit has empty e.clipboardData on paste
      if (isWebkit) {
        return
      }

      await page.keyboard.press('Control+V')
      expect(await $eval((el) => el.value)).toBe('-RE-')
    },
  },
  {
    name: 'mask paste event',
    url: withMaskPaste,
    solo: true,
    async *fn({ $eval, page, isWebkit }) {
      // Playwright Webkit has empty e.clipboardData on paste
      if (isWebkit) {
        return
      }

      await subscribeToEvents(page, 'sinch-input-copy', 'sinch-input-cut', 'sinch-input-paste')

      await $eval((el) => {
        el.value = 'abcd'
        el.focus()
        el.setSelectionRange(0, 4)
      })
      await page.keyboard.press('Control+C')
      await page.keyboard.press('Backspace')
      await page.keyboard.press('Backspace')
      await page.keyboard.press('Control+V')

      expect(await getAllEvents(page)).toEqual([
        { type: 'sinch-input-paste', detail: '-ab-' },
      ])
      expect(await $eval((el) => el.value)).toBe('-RE-')
    },
  },
  {
    name: 'custom events',
    url: withValue,
    async *fn({ $, page }) {
      const testInput = testCustomEvent(page, $)

      await testInput('-change', 'sinch-input-change', 'X')
      await testInput('-focus', 'sinch-input-focus')
      await testInput('-blur', 'sinch-input-blur')
    },
  },
  {
    name: 'native events',
    url: withValue,
    solo: true,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-input-focus', 'sinch-input-blur', 'sinch-input-change')
      await page.keyboard.press('Tab')
      await page.mouse.click(0, 0)

      const bb = await centerBB($)

      await page.mouse.click(bb.x, bb.y)
      await page.keyboard.press('End')
      await $.type('X')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-input-focus', detail: null },
        { type: 'sinch-input-blur', detail: null },
        { type: 'sinch-input-focus', detail: null },
        { type: 'sinch-input-change', detail: 'Input valueX' },
      ])
    },
  },
  {
    name: 'native mask events',
    url: withMask,
    solo: true,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-input-change')

      const bb = await centerBB($)

      await page.mouse.click(bb.x, bb.y)
      // Type overflow
      await $.type('abc123')
      // Remove one symbol
      await page.keyboard.press('Backspace')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-input-change', detail: '-ab-12-' },
        { type: 'sinch-input-change', detail: '' },
      ])
    },
  },
]))
