import { expect } from '@playwright/test'
import type { PlaywrightTestArgs, TestInfo } from '@playwright/test'
import type { Locator, Page } from 'playwright-core'

const getRects = (locators: Locator[]): Promise<(TRect | null)[]> => {
  return Promise.all(locators.map((l) => l.boundingBox()))
}

const mergeBoundingBox = (rects: readonly (TRect | null)[]): TRect => {
  return rects.reduce((a, b) => {
    if (a == null) {
      return b
    }

    if (b == null) {
      return a
    }

    const x = Math.min(a.x, b.x)
    const y = Math.min(a.y, b.y)
    const width = Math.max(a.x + a.width, b.x + b.width) - x
    const height = Math.max(a.y + a.height, b.y + b.height) - y

    return { x, y, width, height }
  }) ?? { x: 0, y: 0, width: 0, height: 0 }
}

const overrideScreenshotPath = (snapshotPath: TestInfo['snapshotPath']): TestInfo['snapshotPath'] =>
  (snapshotName) => {
    const result = snapshotPath(snapshotName)
    const platform = /(chromium|firefox|webkit)/.exec(result)![0]

    return result
      .replace(/(-linux|-react|-vue|-angular|-chromium|-firefox|-webkit)/g, '')
      .replace('.ts-snapshots', `-screenshots/${platform}`)
  }

type EvalFunc<T extends keyof HTMLElementTagNameMap> = {
  <R, Arg>(cb: (el: HTMLElementTagNameMap[T], arg: Arg) => R, arg: Arg): Promise<R>;
  <R>(cb: (el: HTMLElementTagNameMap[T]) => R): Promise<R>;
}

const makeEval = <T extends keyof HTMLElementTagNameMap, Arg = unknown, R = unknown>($: Locator): EvalFunc<T> =>
  (cb: any, arg?: any) =>
    $.evaluate(cb, arg, { /* timeout: 1000 */ })

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
      info.snapshotPath = overrideScreenshotPath(info.snapshotPath)

      await page.goto(pageUrl, { waitUntil: 'networkidle' })

      const locator = page.locator(elementSelector)

      for await (const { name, include = [], includeRects = [] } of updateState({ page, $: locator, $eval: makeEval<T>(locator) })) {
        const rects = await getRects([locator, ...include])
        const clip = mergeBoundingBox(rects.concat(includeRects))

        if (clip == null) {
          throw new Error('Cannot get locator bounding box')
        }

        const screenshot = await page.screenshot({ clip })

        expect(screenshot).toMatchSnapshot(`${info.title}-${name}.png`)
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

export const getLastEvent = async (page: Page, eventName: string) => {
  const data = await page.evaluate((eventName) => {
    return JSON.stringify((window as any).__events__[eventName] ?? {})
  }, eventName)

  return JSON.parse(data)
}

export const subscribeToEvent = (page: Page, eventName: string) =>
  page.evaluate((eventName) => {
    (window as any).__events__ = (window as any).__events__ ?? {}
    document.body.addEventListener(eventName, (e: any) => {
      (window as any).__events__[eventName] = {
        type: e.type,
        detail: e.detail ?? null,
        clientX: e.clientX ?? null,
        clientY: e.clientY ?? null,
        isTrusted: e.isTrusted ?? null,
        path: e.path
          .filter((p: HTMLElement) => p.tagName != null)
          .map((p: HTMLElement) => (p.tagName.toLowerCase() + (p.hasAttribute('id') ? `#${p.id}` : ''))),
      }
    })
  }, eventName)

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
