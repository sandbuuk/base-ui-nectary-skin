import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { centerBB, getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'
import type { Page } from '@playwright/test'

const shot = '/phone-code-menu?width=200&rows=5'
const checkSelectWithEverything = makeAccessibilityTests('/phone-code-menu?width=200&rows=5', 'sinch-select-menu')

const mockFlagUrl = async (page: Page) => {
  await page.route('**/*.{svg}', (route) => {
    const url = route.request().url()
    let body: string

    if (url.endsWith('az.svg')) {
      body = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"><path fill="#3f9c35" d="M0 0h1200v600H0z"/><path fill="#ed2939" d="M0 0h1200v400H0z"/><path fill="#00b9e4" d="M0 0h1200v200H0z"/><circle cx="580" cy="300" r="90" fill="#fff"/><circle cx="600" cy="300" r="75" fill="#ed2939"/><path d="M680 250l9.567 26.903 25.788-12.258-12.258 25.788L730 300l-26.903 9.567 12.258 25.788-25.788-12.258L680 350l-9.567-26.903-25.788 12.258 12.258-25.788L630 300l26.903-9.567-12.258-25.788 25.788 12.258L680 250z" fill="#fff"/></svg>'
    } else if (url.endsWith('ru.svg')) {
      body = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="900" height="600"><path fill="#fff" d="M0 0h9v3H0z"/><path fill="#d52b1e" d="M0 3h9v3H0z"/><path fill="#0039a6" d="M0 2h9v2H0z"/></svg>'
    } else if (url.endsWith('by.svg')) {
      body = '<svg width="900" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="#ce1720" width="100%" height="100%"/><path d="M5 0h100v450H5z" fill="#fff"/><g id="b"><path id="a" d="M572 0v163h-44V0zM10 285h79v-65h40v-79h56V72h46V0h139v72h45v69h56v79h40v65h61v101h-61v65h-40v79h-56v69h-45v74h-32v62h-75v-62h-32v-74h-46v-69h-56v-79H89v-65H10m0-352h79v90H10m310 27h-41v61h-39v77h-38v95h38v77h39v60h41v-60h39v-77h39v-95h-39v-77h-39zm4 139v90h-49v-90zM10 526h79v97H10m562-88v137h-44V535zM464 687v68h48v70h60v92h-60v71h-48v68h-56v-68h-48v-71h-40v-92h40v-70h48v-68zM10 825h79v-70h48v-68h55v68h48v70h40v92h-40v71h-48v68h-55v-68H89v-71H10m447-90h-41v87h41zm-271 0h-41v87h41zm16 1441v-47h-34v-71h-45v-43H89v-69H10v-160h79v46h34v67h45v80h64v-72h47v-53h34v-63h45v-67h33v-68h32v-70h43v-94h-57v-85h-62v-51H243v74h60v67h-40v82h-47v72h-59v-72h-49v-82H78v-67H10v-127h79v-82h30v-63h28v-72h40v-71h39v-47h47v-71h57v71h47v47h40v71h39v72h32v62h32v54h52v397h-59v67h-17v70h-44v68h-27v50h-28v53h-48v52h-69v145m292-1213v137h-44v-137zm-562 26h79v97H10m0 486h79v97H10zm560 246v88h-42v-88zm-58 358v-55h-26v-43h-38v-129h38v52h40v76h44v98m-214 0v-64h42v64" fill="#ce1720" transform="scale(.1)"/><use transform="matrix(-1 0 0 1 110 0)" xlink:href="#a"/></g><use transform="matrix(1 0 0 -1 0 450)" xlink:href="#b"/><path d="M105 300h795v150H105z" fill="#007c30"/></svg>'
    } else {
      body = '<svg width="512" height="512" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h32v32H0z" fill="red"/><path d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" fill="#fff"/></svg>'
    }

    return route.fulfill({
      contentType: 'image/svg+xml',
      status: 200,
      body,
    })
  })

  return () => page.unroute('**/*.{svg}')
}

test('accessibility', checkSelectWithEverything({
  before({ page }) {
    return mockFlagUrl(page)
  },
  async *fn({ $ }) {
    yield
    await $.click()
    yield
  },
}))

test('phone-code screenshots', runScreenshotTests('sinch-select-menu', [
  {
    name: 'value',
    url: shot,
    before({ page }) {
      return mockFlagUrl(page)
    },
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('value', ''))
      yield { name: 'option-empty' }

      await $eval((el) => el.setAttribute('value', 'ad'))
      yield { name: 'option-ad' }

      await $eval((el) => el.setAttribute('value', 'ae'))
      yield { name: 'option-ae' }

      await $eval((el) => el.setAttribute('value', 'missing'))
      yield { name: 'option-missing' }

      /* Property */
      const attrValue = await $eval((el) => {
        el.value = 'az'

        return el.getAttribute('value')
      })

      expect(attrValue).toBe('az')
    },
  },
  {
    name: 'keyboard select',
    url: shot,
    before({ page }) {
      return mockFlagUrl(page)
    },
    async *fn({ page }) {
      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')
      yield { name: '1-down-enter' }

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Space')
      yield { name: '2-down-space' }
    },
  },
  {
    name: 'rows',
    url: shot,
    before({ page }) {
      return mockFlagUrl(page)
    },
    async *fn({ $eval }) {
      await $eval((el) => el.setAttribute('rows', '2'))
      yield { name: 'items 2' }

      /* Property */
      const attrValue = await $eval((el) => {
        el.rows = 2

        return el.getAttribute('rows')
      })

      expect(attrValue).toBe('2')
    },
  },
]))

test('phone-code menu events', runScreenshotTests('sinch-select-menu', [
  {
    name: 'custom events',
    url: shot,
    before({ page }) {
      return mockFlagUrl(page)
    },
    async *fn({ page, $ }) {
      const testMenu = testCustomEvent(page, $)

      await testMenu('-change', 'sinch-select-menu-change', 'X')
    },
  },
  {
    name: 'keyboard native events',
    url: shot,
    before({ page }) {
      return mockFlagUrl(page)
    },
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-menu-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-menu-change', detail: 'ae' },
      ])
    },
  },
  {
    name: 'click native events',
    url: shot,
    before({ page }) {
      return mockFlagUrl(page)
    },
    async *fn({ page }) {
      await subscribeToEvents(page, 'sinch-select-menu-change')

      const ct = await centerBB(page.locator('sinch-select-menu-option').nth(0))

      await page.mouse.click(ct.x, ct.y)
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('Enter')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-select-menu-change', detail: 'ad' },
        { type: 'sinch-select-menu-change', detail: 'ae' },
      ])
    },
  },
]))

