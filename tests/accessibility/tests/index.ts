import { test } from '@playwright/test'
import axeRules from './axe-rules.json'
import type axeCore from 'axe-core'

test('accessibility', async ({ page }) => {
  await page.goto('/')

  const { violations } = await page.evaluate((axeRules: string[]) => {
    return ((window as any).axe as typeof axeCore)
      .run(document.getElementById('root')!, {
        reporter: 'no-passes',
        runOnly: {
          type: 'rule',
          values: axeRules,
        },
      })
  }, axeRules)

  if (violations.length > 0) {
    for (const v of violations) {
      for (const n of v.nodes) {
        if (Array.isArray(n.target[0])) {
          for (const t of n.target) {
            console.log(`${(t as any as string[]).join(' > ')}: ${v.description}`)
          }
        } else {
          console.log(`${n.target.join(' > ')}: ${v.description}`)
        }
      }
    }

    throw 'Accessibility violations'
  }
})
