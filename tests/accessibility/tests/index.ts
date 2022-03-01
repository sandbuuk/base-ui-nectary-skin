import { test } from '@playwright/test'
import type axeCore from 'axe-core'

test.only('accessibility', async ({ page }) => {
  await page.goto('/')

  const { violations, passes } = await page.evaluate(() => {
    return ((window as any).axe as typeof axeCore)
      .run(document.getElementById('root')!, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      })
  })

  console.log(passes)

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
