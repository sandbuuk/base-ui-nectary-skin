import { expect, test } from '@playwright/test'
import { sizeValues } from '@sinch-engage/nectary/rich-text/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const withText = '/rich-text'
const withMarkdown = '/rich-text?width=500&example=md'
const checkMultilineTextTitleButtonClose = makeAccessibilityTests(`/rich-text?width=400&example=md`, 'sinch-rich-text')

test('accessibility', checkMultilineTextTitleButtonClose({
  async *fn() {
    yield
  },
}))

test('rich-text screenshots', runScreenshotTests('sinch-rich-text', [
  {
    name: 'size',
    url: withText,
    async *fn({ $eval }) {
      for (const s of sizeValues) {
        await $eval((el, value) => el.setAttribute('size', value), s)
        yield { name: s }
      }

      /* Property */
      const attrValues = await $eval((el) => {
        el.size = 'xs'

        return el.getAttribute('size')
      })

      expect(attrValues).toBe('xs')
    },
  },
  {
    name: 'text attribute',
    url: withText,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('text', 'Updated text')
      })
      yield { name: 'updated' }

      /* Property */
      const attrValues = await $eval((el) => {
        el.text = 'Updated text'

        return el.getAttribute('text')
      })

      expect(attrValues).toBe('Updated text')
    },
  },
  {
    name: 'markdown',
    url: withMarkdown,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))

