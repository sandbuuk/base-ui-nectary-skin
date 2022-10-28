import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerRect, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const getSkinTone = (url: string): number => {
  if (url.includes('-1f3fb')) {
    return 1
  }

  if (url.includes('-1f3fc')) {
    return 2
  }

  if (url.includes('-1f3fd')) {
    return 3
  }

  if (url.includes('-1f3fe')) {
    return 4
  }

  if (url.includes('-1f3ff')) {
    return 5
  }

  return 0
}

const mockEmojiUrl = (page: Page) => {
  return page.route('**/*.{svg}', (route) => {
    const url = route.request().url()
    const tone = getSkinTone(url)

    let body = ''

    switch (tone) {
      case 0: {
        body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFDC5D" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#FFDC5D" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#EF9645" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

        break
      }
      case 1: {
        body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#F7DECE" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#F7DECE" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#D89882" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

        break
      }
      case 2: {
        body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#F3D2A2" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#F3D2A2" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#C68F6A" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

        break
      }
      case 3: {
        body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#D5AB88" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#D5AB88" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#AA8052" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

        break
      }
      case 4: {
        body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#AF7E57" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#AF7E57" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#845636" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

        break
      }
      case 5: {
        body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#7C533E" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#7C533E" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#543226" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>'

        break
      }
    }

    return route.fulfill({
      contentType: 'image/svg+xml',
      status: 200,
      body,
    })
  })
}

const shot = '/emoji-picker'
const checkWithEverything = makeAccessibilityTests('/emoji-picker', 'sinch-emoji-picker')

test('accessibility', checkWithEverything(async function* ({ $ }) {
  yield
  await $.click()
  yield
}))

test('emoji picker screenshots', runScreenshotTests('sinch-emoji-picker', [
  {
    name: 'emoji tooltip',
    url: shot,
    async *before({ page }) {
      await mockEmojiUrl(page)
    },
    async *fn({ page, $eval }) {
      const pt = centerRect(await $eval((el) => el.nthEmojiRect(4)))

      await page.mouse.move(pt.x, pt.y)
      await page.waitForTimeout(1200)

      yield { name: 'shot' }
    },
  },
  {
    name: 'skin menu',
    url: shot,
    async *before({ page }) {
      await mockEmojiUrl(page)
    },
    async *fn({ page, $eval }) {
      const tabPt = centerRect(await $eval((el) => el.nthTabRect(1)))

      await page.mouse.click(tabPt.x, tabPt.y)

      const pt = centerRect(await $eval((el) => el.skinToneButtonRect))

      await page.mouse.click(pt.x, pt.y)

      yield { name: '1-open' }

      const tonePt = centerRect(await $eval((el) => el.nthSkinToneRect(3)))

      await page.mouse.click(tonePt.x, tonePt.y)
      await page.mouse.move(0, 0)

      yield { name: '2-selected' }

      await page.mouse.click(pt.x, pt.y)

      yield { name: '3-open-again' }
    },
  },
  {
    name: 'search',
    url: shot,
    async *before({ page }) {
      await mockEmojiUrl(page)
    },
    async *fn({ page, $eval }) {
      const pt = centerRect(await $eval((el) => el.searchInputRect))

      await page.mouse.click(pt.x, pt.y)
      await page.keyboard.type('kiss')

      yield { name: '1-default' }

      const skinBtnPt = centerRect(await $eval((el) => el.skinToneButtonRect))

      await page.mouse.click(skinBtnPt.x, skinBtnPt.y)

      const tonePt = centerRect(await $eval((el) => el.nthSkinToneRect(3)))

      await page.mouse.click(tonePt.x, tonePt.y)
      await page.mouse.move(0, 0)

      yield { name: '2-skin-selected' }
    },
  },
  {
    name: 'tabs',
    url: shot,
    async *before({ page }) {
      await mockEmojiUrl(page)
    },
    async *fn({ page, $eval }) {
      const pt = centerRect(await $eval((el) => el.nthTabRect(1)))

      await page.mouse.click(pt.x, pt.y)

      yield { name: 'shot' }
    },
  },
]))

test('emoji picker events', runScreenshotTests('sinch-emoji-picker', [
  {
    name: 'custom events',
    url: shot,
    async *fn({ page }) {
      const picker = page.locator('sinch-emoji-picker')
      const testPicker = testCustomEvent(page, picker)

      await testPicker('-change', 'sinch-emoji-picker-change', 'X')
    },
  },
  {
    name: 'native events',
    url: shot,
    async *fn({ page, $eval }) {
      await subscribeToEvents(page, 'sinch-emoji-picker-change')

      const btnCt = centerRect(await $eval((el) => el.nthEmojiRect(0)))

      await page.mouse.click(btnCt.x, btnCt.y)

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-emoji-picker-change', detail: '😀' },
      ])
    },
  },
]))

