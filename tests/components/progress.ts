import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { runScreenshotTests } from '../screenshot-tests'

const shot = '/progress?width=300&detailed=true'
const checkValue = makeAccessibilityTests('/progress?width=300', 'sinch-progress')

test('accessibility', checkValue(async function* () {
  yield
}))

test('progress screenshots', runScreenshotTests('sinch-progress', [
  {
    name: 'value attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.setAttribute('value', '0')
      })
      yield { name: '0' }

      await $eval((el) => {
        el.setAttribute('value', '73')
      })
      yield { name: '73' }

      await $eval((el) => {
        el.setAttribute('value', '100')
      })
      yield { name: '100' }

      await $eval((el) => {
        el.setAttribute('value', '150')
      })
      yield { name: 'overflow' }

      await $eval((el) => {
        el.setAttribute('value', '-10')
      })
      yield { name: 'negative' }
    },
  },
  {
    name: 'value property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.value = 0
      })
      expect(await $.getAttribute('value')).toBe('0')
      expect(await $.getAttribute('valuenow')).toBe('0')

      await $eval((el) => {
        el.value = 73
      })
      expect(await $.getAttribute('value')).toBe('73')
      expect(await $.getAttribute('valuenow')).toBe('73')

      await $eval((el) => {
        el.value = 100
      })
      expect(await $.getAttribute('value')).toBe('100')
      expect(await $.getAttribute('valuenow')).toBe('100')

      await $eval((el) => {
        el.value = 150
      })
      expect(await $.getAttribute('value')).toBe('150')
      expect(await $.getAttribute('valuenow')).toBe('100')

      await $eval((el) => {
        el.value = -10
      })
      expect(await $.getAttribute('value')).toBe('-10')
      expect(await $.getAttribute('valuenow')).toBe('0')
    },
  },
  {
    name: 'detailed attribute',
    url: shot,
    async *fn({ $eval }) {
      await $eval((el) => {
        el.removeAttribute('detailed')
      })
      yield { name: 'unset' }
      await $eval((el) => {
        el.setAttribute('detailed', '')
      })
      yield { name: 'set' }
    },
  },
  {
    name: 'detailed property',
    url: shot,
    async *fn({ $, $eval }) {
      await $eval((el) => {
        el.setAttribute('detailed', '')
      })
      expect(await $.getAttribute('detailed')).toBe('')
      await $eval((el) => {
        el.removeAttribute('detailed')
      })
      expect(await $.getAttribute('detailed')).toBe(null)
    },
  },
]))
