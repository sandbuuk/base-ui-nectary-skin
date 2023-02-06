import { test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getBB, runScreenshotTests } from '../screenshot-tests'
import type { TSinchCardElement } from '@sinch-engage/nectary/card/types'

const cardLabel = 'Report'
const cardLabelLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const cardHeader = 'Customer Experience'
const cardHeaderLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const cardLongText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
const cardLinkText = 'This is link'
const cardLinkTextLong = 'This is very long link title'
const cardButtonText = 'This is button'
const cardButtonTextLong = 'This is very long button title'

const withWideWidth = `/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}`
const withNarrowWidthButton = `/card?width=200&label=${cardLabelLong}&header=${cardHeaderLong}&text=${cardLongText}&icon=true&illustration=true&button=${cardButtonTextLong}`
const withNarrowWidthLink = `/card?width=200&label=${cardLabelLong}&header=${cardHeaderLong}&text=${cardLongText}&icon=true&illustration=true&link=${cardLinkTextLong}`
const withIllustrationButton = `/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&icon=true&illustration=true&button=${cardButtonText}`
const withIllustrationLink = `/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&icon=true&illustration=true&link=${cardLinkText}`
const withIllustrationBg = `/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&icon=true&illustration=true&bg=blue`
const withDisabledButton = `/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&button=${cardButtonText}`
const withDisabledLink = `/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&link=${cardLinkText}`
const withDnD = '/card-dnd'
const checkWithButton = makeAccessibilityTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&illustration=true&button=${cardButtonText}`, 'sinch-card')
const checkWithLink = makeAccessibilityTests(`/card?width=400&label=${cardLabel}&header=${cardHeader}&text=${cardLongText}&disabled=true&icon=true&illustration=true&link=${cardLinkText}`, 'sinch-card')

test('card accessibility with btn', checkWithButton({
  async *fn() {
    yield
  },
}))

test('card accessibility with lnk', checkWithLink({
  async *fn() {
    yield
  },
}))

test('card screenshots', runScreenshotTests('sinch-card', [
  {
    name: 'text',
    url: withWideWidth,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('text', 'Updated text'))
      yield { name: 'updated' }
    },
  },
  {
    name: 'disabled',
    url: withIllustrationButton,
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('disabled', ''))
      yield { name: 'set' }
    },
  },
  {
    name: 'illustration button',
    url: withIllustrationButton,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'illustration link',
    url: withIllustrationLink,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'disabled button',
    url: withDisabledButton,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'disabled link',
    url: withDisabledLink,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'narrow button',
    url: withNarrowWidthButton,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'illustration bg',
    url: withIllustrationBg,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'mouse interaction',
    url: withWideWidth,
    async *fn({ $, page }) {
      const bb = await getBB($)

      await page.mouse.move(bb.x + 1, bb.y + 1)

      yield { name: 'hover' }
    },
  },
  {
    name: 'narrow link',
    url: withNarrowWidthLink,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'drag and drop',
    url: withDnD,
    async *fn({ page }) {
      const wrapper = page.locator('#dnd-wrapper')
      const card1 = page.locator('sinch-card').nth(0)
      const card2 = page.locator('sinch-card').nth(1)

      const dragPt = centerRect(await card1.evaluate((el: TSinchCardElement) => el.dragRect))

      await page.mouse.move(dragPt.x, dragPt.y)
      await page.mouse.down()
      await page.mouse.move(dragPt.x + 5, dragPt.y + 5)
      await page.mouse.move(dragPt.x - 5, dragPt.y - 5)

      yield { name: '1-drag-start', include: [wrapper] }

      const overPt = centerRect(await card2.boundingBox())

      await page.mouse.move(overPt.x, overPt.y)
      await page.mouse.move(overPt.x + 5, overPt.y + 5)
      await page.mouse.move(overPt.x - 5, overPt.y - 5)

      yield { name: '2-over-card', include: [wrapper] }

      await page.mouse.up()
      await page.mouse.move(0, 0)

      yield { name: '3-drag-end', include: [wrapper] }
    },
  },
]))
