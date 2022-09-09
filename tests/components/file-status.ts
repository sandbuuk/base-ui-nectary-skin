import { expect, test } from '@playwright/test'
import { typeValues } from '@sinch-engage/nectary/file-status/utils'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/file-status?width=300&type=success&filename=image.png'
const withNarrow = '/file-status?width=200&type=success&filename=name_long_long_long_long.png&description=true'
const withProgress = '/file-status?width=300&type=progress&filename=name.png&progress=true'
const withDescription = '/file-status?width=300&type=error&filename=name.png&description=true'
const checkValue = makeAccessibilityTests('/file-status?width=300&type=success', 'sinch-file-status')

test('accessibility', checkValue(async function* () {
  yield
}))

test('file-status screenshots', runScreenshotTests('sinch-file-status', [
  {
    name: 'type attribute',
    url: shot,
    async *fn({ $eval }) {
      for (const type of typeValues) {
        await $eval((el, type) => el.setAttribute('type', type), type)
        yield { name: type }
      }
    },
  },
  {
    name: 'type property',
    url: shot,
    async *fn({ $, $eval }) {
      for (const type of typeValues) {
        await $eval((el, type) => {
          el.type = type
        }, type)
        expect(await $.getAttribute('type')).toBe(type)
      }
    },
  },
  {
    name: 'filename attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('filename', 'updated_filename.txt')
      })
      yield { name: 'updated' }

      await $eval((el) => {
        el.setAttribute('filename', '')
      })
      yield { name: 'empty' }
    },
  },
  {
    name: 'filename property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.filename = 'updated_filename.txt'
      })
      expect(await $.getAttribute('filename')).toBe('updated_filename.txt')

      await $eval((el) => {
        el.filename = ''
      })
      expect(await $.getAttribute('filename')).toBe('')
    },
  },
  {
    name: 'narrow',
    url: withNarrow,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'progress',
    url: withProgress,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'description',
    url: withDescription,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
