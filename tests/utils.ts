import { expect } from '@playwright/test'
import type { PlaywrightTestArgs, TestInfo } from '@playwright/test'
import type { Locator, Page, PageScreenshotOptions } from 'playwright-core'

export const mergeBoundingBox = async (locators: Locator[]): Promise<BoundingBox | null> => {
  const bbs = await Promise.all(locators.map((l) => l.boundingBox()))

  return bbs.reduce((a, b) => {
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
  })
}

const overrideScreenshotPath = (snapshotPath: TestInfo['snapshotPath']): TestInfo['snapshotPath'] =>
  (snapshotName) => {
    const result = snapshotPath(snapshotName)
    const platform = /(chromium|firefox|webkit)/.exec(result)![0]

    return result
      .replace(/(-linux|-react|-vue|-angular|-chromium|-firefox|-webkit)/g, '')
      .replace('.ts-snapshots', `-screenshots/${platform}`)
  }

type BoundingBox = Exclude<PageScreenshotOptions['clip'], undefined>

type UpdateStateResult = {
  name: string,
  include?: Locator[],
}

type UpdateStateProps = {
  page: Page,
  $: Locator,
}

export const makeScreenshotTests = (pageUrl: string, elementSelector: string) =>
  (updateState: (props: UpdateStateProps) => AsyncIterable<UpdateStateResult>) =>
    async ({ page }: PlaywrightTestArgs, info: TestInfo) => {
      info.snapshotPath = overrideScreenshotPath(info.snapshotPath)

      await page.goto(pageUrl, { waitUntil: 'networkidle' })

      const locator = page.locator(elementSelector)

      for await (const { name, include } of updateState({ page, $: locator })) {
        const clip = Array.isArray(include)
          ? await mergeBoundingBox([locator, ...include])
          : await locator.boundingBox()

        if (clip == null) {
          throw new Error('Cannot get locator bounding box')
        }

        const screenshot = await page.screenshot({ clip })

        expect(screenshot).toMatchSnapshot(`${info.title}-${name}.png`)
      }
    }
