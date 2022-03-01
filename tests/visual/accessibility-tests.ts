import type { PlaywrightTestArgs, TestInfo, Locator } from '@playwright/test'
import type axeCore from 'axe-core'
import type { Page } from 'playwright-core'

const printAxeResults = (axeResults: readonly axeCore.Result[]): string => {
  const lines: string[] = []

  for (const v of axeResults) {
    for (const node of v.nodes) {
      lines.push(node.html)

      const targets: string[] = Array.isArray(node.target[0])
        ? node.target[0]
        : node.target

      lines.push(`${targets.join(' > ')}: ${v.description}`)

      if (node.failureSummary != null) {
        lines.push(node.failureSummary)
      }
    }
  }

  return `${lines.join('\n')}\n`
}

const evaluateAccessibilityCheck = (page: Page) =>
  page.evaluate(() => ((window as any).axe as typeof axeCore)
    .run(document.getElementById('app')!, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'],
      },
    }))

type EvalFunc<T extends keyof HTMLElementTagNameMap> = {
  <R, Arg>(cb: (el: HTMLElementTagNameMap[T], arg: Arg) => R, arg: Arg): Promise<R>,
  <R>(cb: (el: HTMLElementTagNameMap[T]) => R): Promise<R>,
}

const makeEval = <T extends keyof HTMLElementTagNameMap>($: Locator): EvalFunc<T> =>
  (cb: any, arg?: any) => $.evaluate(cb, arg, { /* timeout: 1000 */ })

type UpdateStateProps<T extends keyof HTMLElementTagNameMap> = {
  page: Page,
  $: Locator,
  $eval: EvalFunc<T>,
}

export const makeAccessibilityTests = <T extends keyof HTMLElementTagNameMap>(pageUrl: string, elementSelector: T) =>
  (updateState: (props: UpdateStateProps<T>) => AsyncIterable<void>) =>
    async ({ page }: PlaywrightTestArgs, info: TestInfo) => {
      info.skip(info.project.name !== 'chromium-react')

      await page.goto(pageUrl, { waitUntil: 'networkidle' })

      // Optionally subscribe to page console output
      // page.on('console', (msg) => console.log(msg.text()))
      // page.on('pageerror', (e) => console.log(e))

      const locator = page.locator(elementSelector)

      for await (const _ of updateState({ page, $: locator, $eval: makeEval<T>(locator) })) {
        const { violations } = await evaluateAccessibilityCheck(page)

        if (violations.length > 0) {
          console.log(printAxeResults(violations))
          info.fail()

          break
        }
      }
    }
