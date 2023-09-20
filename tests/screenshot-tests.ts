/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { expect } from '@playwright/test'
import { piAll } from 'piall'
import type { PlaywrightTestArgs, TestInfo } from '@playwright/test'
import type { FileChooser, Locator, Page } from 'playwright-core'

const wait = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

const NULL_RECT: TRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

export const getBB = async (locator: Locator): Promise<TRect> => {
  // Retry getting bounding box several times
  for (let i = 0; i < 3; i++) {
    let rect = await locator.boundingBox()

    if (rect !== null && rect.width > 0) {
      return rect
    }

    rect = await locator.evaluate((el) => (el as any).footprintRect ?? null)

    if (rect !== null && rect.width > 0) {
      return rect
    }

    await wait(100)
  }

  return NULL_RECT
}

const getRects = (locators: Locator[]): Promise<TRect[]> => {
  return Promise.all(locators.map(getBB))
}

export function expandRect(rect: TRect, offset: number): TRect
export function expandRect(rect: TRect | null, offset: number): TRect | null
export function expandRect(rect: TRect | null, offset: number): TRect | null {
  if (rect === null) {
    return null
  }

  if (rect.width === 0 || rect.height === 0) {
    return rect
  }

  return {
    x: rect.x - offset,
    y: rect.y - offset,
    width: rect.width + offset * 2,
    height: rect.height + offset * 2,
  }
}

const mergeBoundingBox = (rects: readonly TRect[]): TRect => {
  return rects.reduce((a, b) => {
    if (a.width === 0 || a.height === 0) {
      return b
    }

    if (b.width === 0 || b.height === 0) {
      return a
    }

    const x = Math.min(a.x, b.x)
    const y = Math.min(a.y, b.y)
    const width = Math.max(a.x + a.width, b.x + b.width) - x
    const height = Math.max(a.y + a.height, b.y + b.height) - y

    return { x, y, width, height }
  })
}

// const addTestNameToUrl = (url: string, name: string): string => {
//   const testUrl = new URL(url, 'http://localhost')

//   testUrl.searchParams.set('testname', encodeURIComponent(name))

//   return testUrl.pathname + testUrl.search
// }

const overrideScreenshotPath = (testInfo: TestInfo): void => {
  const snapshotPath = testInfo.snapshotPath

  testInfo.snapshotPath = (snapshotName) => {
    const result = snapshotPath.call(testInfo, snapshotName)

    const platform = /(chromium|firefox|webkit)/.exec(result)![0]

    return result
      .replace(/(-linux|-darwin|-react|-vue|-angular|-chromium|-firefox|-webkit)/g, '')
      .replace('.ts-snapshots', `-screenshots/${platform}`)
  }
}

const overridePageKeyboard = (page: Page): void => {
  if ((page.keyboard as any).__modified === true) {
    return
  }

  const originalPress = page.keyboard.press

  page.keyboard.press = (function(...args) {
    return page.waitForTimeout(100)
      .then(() => originalPress.apply(this, args))
      .then(() => page.waitForTimeout(100))
  })
  ;(page.keyboard as any).__modified = true
}

const overridePageMouse = (page: Page): void => {
  if ((page.mouse as any).__modified === true) {
    return
  }

  const originalClick = page.mouse.click

  page.mouse.click = (function(...args) {
    return page.waitForTimeout(100)
      .then(() => originalClick.apply(this, args))
      .then(() => page.waitForTimeout(100))
  })
  ;(page.mouse as any).__modified = true
}

type TEvalFunc<T extends keyof HTMLElementTagNameMap> = {
  <R, Arg>(cb: (el: HTMLElementTagNameMap[T], arg: Arg) => R, arg: Arg): Promise<R>,
  <R>(cb: (el: HTMLElementTagNameMap[T]) => R): Promise<R>,
}

const makeEval = <T extends keyof HTMLElementTagNameMap>($: Locator): TEvalFunc<T> =>
  (cb: any, arg?: any) => $.evaluate(cb, arg)

type TPosition = {
  x: number,
  y: number,
}

type TRect = TPosition & {
  width: number,
  height: number,
}

type TUpdateStateResult = {
  name: string,
  include?: Locator[],
  includeRects?: TRect[],
  expand?: number,
}

type TUpdateStateProps<T extends keyof HTMLElementTagNameMap> = {
  page: Page,
  $: Locator,
  $eval: TEvalFunc<T>,
  isChromium: boolean,
  isFirefox: boolean,
  isWebkit: boolean,
}

type TBeforeProps = {
  page: Page,
}

type TScreenshotTest<T extends keyof HTMLElementTagNameMap> = {
  name: string,
  url: string,
  only?: boolean,
  solo?: boolean,
  before?(props: TBeforeProps): Promise<void | (() => Promise<void>)>,
  fn (props: TUpdateStateProps<T>): AsyncIterable<TUpdateStateResult>,
}

export const runScreenshotTests = <T extends keyof HTMLElementTagNameMap>(elementSelector: T, tests: TScreenshotTest<T>[]) =>
  async ({ page, context }: PlaywrightTestArgs, info: TestInfo) => {
    overrideScreenshotPath(info)

    // Firefox multiple tabs has focus issue
    // https://github.com/microsoft/playwright/issues/3476
    const isFirefox = info.project.name.startsWith('firefox-')
    const isWebkit = info.project.name.startsWith('webkit-')
    const isChromium = info.project.name.startsWith('chromium-')
    const runInPage = async (t: TScreenshotTest<T>, page: Page) => {
      let after: (() => Promise<void>) | null = null

      try {
        if (typeof t.before === 'function') {
          after = await t.before({ page }) ?? null
        }

        // await page.evaluate((url) => {
        //   window.location.hash = url
        // }, addTestNameToUrl(t.url, t.name))
        await page.goto(t.url)
        await page.evaluate(() => document.fonts.ready)
        await page.waitForSelector(elementSelector, { state: 'attached' })
        await page.mouse.move(1, 1)

        const locator = page.locator(elementSelector).nth(0)

        for await (const { name, include = [], includeRects = [], expand = 12 } of t.fn({ page, $: locator, $eval: makeEval<T>(locator), isChromium, isFirefox, isWebkit })) {
          const rects = await getRects([locator, ...include])
          const clip = expandRect(mergeBoundingBox(rects.concat(includeRects)), expand)
          const screenshotName = `${t.name.toLowerCase()}-${name.toLowerCase()}.png`

          if (clip == null) {
            throw new Error('Cannot get locator bounding box')
          }

          await page.waitForTimeout(100)

          const sc = await page.screenshot({
            clip,
            animations: 'disabled',
            fullPage: true,
            caret: 'hide',
          })

          expect(sc, t.name).toMatchSnapshot(screenshotName)
        }
      } finally {
        if (typeof after === 'function') {
          await after()
        }
      }
    }

    // Pages
    const pages = [page]

    if (!isFirefox) {
      pages.push(
        await context.newPage(),
        await context.newPage(),
        await context.newPage()
      )
    }

    pages.forEach(overridePageKeyboard)
    pages.forEach(overridePageMouse)

    // await Promise.all(pages.map(async (page) => {
    //   await page.goto('/')
    //   await page.evaluate(() => document.fonts.ready)
    // }))

    // Optionally subscribe to page console output
    // pages.forEach((page) => {
    //   page.on('console', (msg) => console.log(msg.text()))
    //   page.on('pageerror', (e) => console.log(e))
    // })

    const onlyTests = tests.filter((t) => t.only)
    const parallelTests = onlyTests.length > 0
      ? onlyTests.filter((t) => !t.solo)
      : tests.filter((t) => !t.solo)

    const it = piAll(parallelTests.map((t) => async () => {
      const page = pages.shift()!

      try {
        await runInPage(t, page)
      } finally {
        pages.push(page)
      }
    }), pages.length)

    // eslint-disable-next-line no-empty
    for await (const _ of it) {}

    const soloTests = onlyTests.length > 0
      ? onlyTests.filter((t) => t.solo)
      : tests.filter((t) => t.solo)

    for (const t of soloTests) {
      await runInPage(t, pages[0])
    }
  }

export const moveCursorTo = async (page: Page, position: TPosition) => {
  await page.mouse.move(position.x, position.y)
  await page.evaluate((position) => {
    const cursor = document.getElementById('__cursor__') ?? (() => {
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      el.id = '__cursor__'
      el.setAttribute('viewBox', '0 0 14 24')
      el.setAttribute('width', '8')
      el.style.position = 'fixed'
      el.style.fill = 'black'
      el.style.pointerEvents = 'none'
      el.innerHTML = '<path d="M1 0a1 1 0 0 0-1 1v17a1 1 0 0 0 1.797.602l3.123-3.483 3.463 7.998c.32.738 1.188 1.082 1.916.738.686-.324 1.033-1.41.694-1.895l-3.554-7.921L13 14a1 1 0 0 0 .629-1.777L1.783.379"/>'

      document.body.appendChild(el)

      return el
    })()

    cursor.style.left = `${position.x}px`
    cursor.style.top = `${position.y}px`
  }, position)
}

export const getAllEvents = (page: Page) => {
  return page.evaluate(() => {
    const wnd = (window as any)
    const result = wnd.__events__

    wnd.__abort__()

    return result
  })
}

export const subscribeToEvents = (page: Page, ...eventNames: string[]) =>
  page.evaluate((eventNames) => {
    const wnd = (window as any)

    wnd.__events__ ??= []
    wnd.__abort__ = null

    const handler = (e: any) => {
      wnd.__events__.push({
        type: e.type,
        detail: e.detail,
        // path: e.path
        //   ?.filter((p: HTMLElement) => p.tagName != null)
        //   .map((p: HTMLElement) => (p.tagName.toLowerCase() + (p.hasAttribute('id') ? `#${p.id}` : ''))),
      })
    }

    const controller = new AbortController()
    const options = { signal: controller.signal }

    for (const eventName of eventNames) {
      window.addEventListener(eventName, handler, options)
    }

    wnd.__abort__ = () => {
      wnd.__events__ = []
      controller.abort()
    }
  }, eventNames)

export const testCustomEvent = (page: Page, $element: Locator) => async (sendEventType: string, receiveEventType: string, eventDetail: any = null) => {
  await subscribeToEvents(page, receiveEventType)

  await $element.evaluate((el, { type, detail }) => {
    el.dispatchEvent(new CustomEvent<any>(type, { detail, bubbles: true }))
  }, { type: sendEventType, detail: eventDetail })

  const events = await getAllEvents(page)

  expect(events).toEqual([{ type: receiveEventType, detail: eventDetail }])
}

export const getRandomPointInsideElem = (rect: TRect): TPosition => {
  return {
    x: rect.x + Math.random() * rect.width,
    y: rect.y + Math.random() * rect.height,
  }
}

export const offsetRect = (rect: TRect, pos: TPosition): TRect => ({
  x: rect.x + pos.x,
  y: rect.y + pos.y,
  width: rect.width,
  height: rect.height,
})

export const centerRect = (rect: TRect | null): TPosition => {
  if (rect === null || rect.width === 0 || rect.height === 0) {
    throw new Error('Received NULL rect')
  }

  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  }
}

export const centerBB = async (locator: Locator): Promise<TPosition> => {
  return centerRect(await getBB(locator))
}

export const getFileChooser = async (page: Page, action: () => Promise<void>): Promise<FileChooser> => {
  for (let i = 0; i < 5; i++) {
    try {
      const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser', { timeout: 1000 }),
        action(),
      ])

      return fileChooser
    } catch {}
  }

  throw new Error('Should not get here')
}
