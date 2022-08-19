import { expect } from '@playwright/test'
import { piAll } from 'piall'
import type { PlaywrightTestArgs, TestInfo } from '@playwright/test'
import type { Locator, Page } from 'playwright-core'

const getRects = (locators: Locator[]): Promise<(TRect | null)[]> => {
  return Promise.all(locators.map((l) => l.boundingBox()))
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

const mergeBoundingBox = (rects: readonly (TRect | null)[]): TRect | null => {
  return rects.reduce((a, b) => {
    if (a == null) {
      return b
    }

    if (b == null) {
      return a
    }

    if (a.width === 0 && a.height === 0) {
      return b
    }

    if (b.width === 0 && b.height === 0) {
      return a
    }

    const x = Math.min(a.x, b.x)
    const y = Math.min(a.y, b.y)
    const width = Math.max(a.x + a.width, b.x + b.width) - x
    const height = Math.max(a.y + a.height, b.y + b.height) - y

    return { x, y, width, height }
  })
}

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

type EvalFunc<T extends keyof HTMLElementTagNameMap> = {
  <R, Arg>(cb: (el: HTMLElementTagNameMap[T], arg: Arg) => R, arg: Arg): Promise<R>,
  <R>(cb: (el: HTMLElementTagNameMap[T]) => R): Promise<R>,
}

const makeEval = <T extends keyof HTMLElementTagNameMap>($: Locator): EvalFunc<T> =>
  (cb: any, arg?: any) => $.evaluate(cb, arg, { /* timeout: 1000 */ })

type TPosition = {
  x: number,
  y: number,
}

type TRect = TPosition & {
  width: number,
  height: number,
}

type UpdateStateResult = {
  name: string,
  include?: Locator[],
  includeRects?: TRect[],
  expand?: number,
}

type UpdateStateProps<T extends keyof HTMLElementTagNameMap> = {
  page: Page,
  $: Locator,
  $eval: EvalFunc<T>,
  isChromium: boolean,
  isFirefox: boolean,
  isWebkit: boolean,
}

type TScreenshotTest<T extends keyof HTMLElementTagNameMap> = {
  name: string,
  url: string,
  fn (props: UpdateStateProps<T>): AsyncIterable<UpdateStateResult>,
}

export const runScreenshotTests = <T extends keyof HTMLElementTagNameMap>(elementSelector: T, tests: TScreenshotTest<T>[]) =>
  async ({ page, context }: PlaywrightTestArgs, info: TestInfo) => {
    overrideScreenshotPath(info)

    // Firefox multiple tabs has focus issue
    // https://github.com/microsoft/playwright/issues/3476
    const isFirefox = info.project.name.startsWith('firefox-')
    const isWebkit = info.project.name.startsWith('webkit-')
    const isChromium = info.project.name.startsWith('chromium-')
    const pages = [page]

    if (!isFirefox) {
      pages.push(
        await context.newPage(),
        await context.newPage(),
        await context.newPage()
      )
    }

    const it = piAll(tests.map((t) => async () => {
      const page = pages.shift()!

      try {
        await page.goto(t.url)
        await page.waitForSelector(elementSelector, { state: 'attached' })
        await page.evaluate(() => document.fonts.ready)

        // Optionally subscribe to page console output
        // page.on('console', (msg) => console.log(msg.text()))
        // page.on('pageerror', (e) => console.log(e))

        const locator = page.locator(elementSelector).nth(0)

        for await (const { name, include = [], includeRects = [], expand = 12 } of t.fn({ page, $: locator, $eval: makeEval<T>(locator), isChromium, isFirefox, isWebkit })) {
          const rects = await getRects([locator, ...include])
          const clip = expandRect(mergeBoundingBox(rects.concat(includeRects)), expand)
          const screenshotName = `${t.name}-${name}.png`

          if (clip == null) {
            throw new Error('Cannot get locator bounding box')
          }

          const sc = await page.screenshot({ clip, animations: 'disabled', fullPage: true })

          expect(sc, t.name).toMatchSnapshot(screenshotName)
        }
      } finally {
        pages.push(page)
      }
    }), pages.length)

    // eslint-disable-next-line no-empty
    for await (const _ of it) {}
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
    const result = (window as any).__events__;

    (window as any).__events__ = []

    return result
  })
}

export const subscribeToEvents = (page: Page, ...eventNames: string[]) =>
  page.evaluate((eventNames) => {
    (window as any).__events__ ??= []

    for (const eventName of eventNames) {
      window.addEventListener(eventName, (e: any) => {
        (window as any).__events__.push({
          type: e.type,
          detail: e.detail,
          // path: e.path
          //   ?.filter((p: HTMLElement) => p.tagName != null)
          //   .map((p: HTMLElement) => (p.tagName.toLowerCase() + (p.hasAttribute('id') ? `#${p.id}` : ''))),
        })
      })
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
  if (rect === null) {
    throw new Error('Invalid rect value: null')
  }

  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  }
}
