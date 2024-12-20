import { test } from '@playwright/test'
import { getBB, runScreenshotTests } from '../screenshot-tests'

const cardTitle = 'Customer Experience'
const cardTitleLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const cardContentLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
const cardLinkText = 'This is link'
const cardLinkTextLong = 'This is very long link title'
const cardButtonText = 'This is button'
const cardButtonTextLong = 'This is very long button title'

const withNormalWidth = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}`
const withWideWidth = `/card-v2?width=900&title=${cardTitle}&content=${cardContentLong}`
const withTitleIcon = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&icon=true`
const withDisabled = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&disabled=true`
const withSelected = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&selected=true`
const withClickable = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&clickable=true`

const withNarrowWidthButton = `/card-v2?width=200&title=${cardTitleLong}&content=${cardContentLong}&icon=true&illustration=true&button=${cardButtonTextLong}`
const withNarrowWidthLink = `/card-v2?width=200&title=${cardTitleLong}&content=${cardContentLong}&icon=true&illustration=true&link=${cardLinkTextLong}`
const withIllustrationButton = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&icon=true&illustration=true&button=${cardButtonText}`
const withIllustrationLink = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&icon=true&illustration=true&link=${cardLinkText}`
const withIllustrationBg = `/card-v2?width=300&title=${cardTitle}&content=${cardContentLong}&icon=true&illustration=true&bg=blue`

test('card-v2 screenshots', runScreenshotTests('sinch-card-v2', [
  {
    name: 'title',
    url: withWideWidth,
    async *fn({ $eval }) {
      await $eval((el) => {
        const titleElement = el!.querySelector('sinch-card-v2-title')

        return titleElement!.setAttribute('text', 'Updated text')
      })

      yield { name: 'updated' }
    },
  },
  {
    name: 'icon vertical',
    url: withTitleIcon,
    async *fn({ $eval }) {
      await $eval((el) => {
        const titleElement = el!.querySelector('sinch-card-v2-title')

        return titleElement!.setAttribute('orientation', 'vertical')
      })

      yield { name: 'updated' }
    },
  },
  {
    name: 'initial mouse interaction',
    url: withNormalWidth,
    async *fn({ $, page }) {
      const bb = await getBB($)

      await page.mouse.move(bb.x + 1, bb.y + 1)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'clickable mouse interaction',
    url: withClickable,
    async *fn({ $, page }) {
      const bb = await getBB($)

      await page.mouse.move(bb.x + 1, bb.y + 1)
      await page.mouse.down()

      yield { name: 'active' }
    },
  },
  {
    name: 'selected mouse interaction',
    url: withSelected,
    async *fn({ $, page }) {
      const bb = await getBB($)

      await page.mouse.move(bb.x + 1, bb.y + 1)
      yield { name: 'hover' }

      await page.mouse.down()
      yield { name: 'active' }
    },
  },
  {
    name: 'selected',
    url: withSelected,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'disabled',
    url: withDisabled,
    async *fn() {
      yield { name: 'shot' }
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
    name: 'narrow link',
    url: withNarrowWidthLink,
    async *fn() {
      yield { name: 'shot' }
    },
  },
]))
