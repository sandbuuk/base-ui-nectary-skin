import { expect } from '@playwright/test'
import type { PlaywrightTestArgs, TestInfo } from '@playwright/test'
import type { Locator, Page } from 'playwright-core'

const getRects = (locators: Locator[]): Promise<(TRect | null)[]> => {
  return Promise.all(locators.map((l) => l.boundingBox()))
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
}

type UpdateStateProps<T extends keyof HTMLElementTagNameMap> = {
  page: Page,
  $: Locator,
  $eval: EvalFunc<T>,
}

export const makeScreenshotTests = <T extends keyof HTMLElementTagNameMap>(pageUrl: string, elementSelector: T) =>
  (updateState: (props: UpdateStateProps<T>) => AsyncIterable<UpdateStateResult>) =>
    async ({ page }: PlaywrightTestArgs, info: TestInfo) => {
      overrideScreenshotPath(info)

      await page.goto(pageUrl, { waitUntil: 'networkidle' })
      await page.waitForSelector(elementSelector, { state: 'attached' })
      await page.evaluate(() => document.fonts.ready)

      // Optionally subscribe to page console output
      // page.on('console', (msg) => console.log(msg.text()))
      // page.on('pageerror', (e) => console.log(e))

      const locator = page.locator(elementSelector)

      for await (const { name, include = [], includeRects = [] } of updateState({ page, $: locator, $eval: makeEval<T>(locator) })) {
        const rects = await getRects([locator, ...include])
        const clip = mergeBoundingBox(rects.concat(includeRects))
        const screenshotName = `${info.title}-${name}.png`

        if (clip == null) {
          throw new Error('Cannot get locator bounding box')
        }

        const sc = await page.screenshot({ clip, animations: 'disabled' })

        expect(sc).toMatchSnapshot(screenshotName)
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

export const getRandomPointInsideElem = ({ x, y, width, height }: TRect): TPosition => {
  return {
    x: x + Math.random() * width,
    y: y + Math.random() * height,
  }
}

export const offsetRect = (rect: TRect, pos: TPosition): TRect => ({
  x: rect.x + pos.x,
  y: rect.y + pos.y,
  width: rect.width,
  height: rect.height,
})

export const expandRect = (rect: TRect, expandBy: {left?: number, top?: number, right?: number, bottom?: number}): TRect => ({
  x: rect.x - (expandBy.left ?? 0),
  y: rect.y - (expandBy.top ?? 0),
  width: rect.width + (expandBy.right ?? 0),
  height: rect.height + (expandBy.bottom ?? 0),
})
