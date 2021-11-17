import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4000/iframe.html?id=components-select--select&viewMode=story')

  const select = page.locator('sinch-select')

  await expect(select).toBeVisible()
})

// Open test
// click button -> check listbox open
// click label -> check listbox open
// focus button -> press space -> check listbox open
// focus button -> press enter -> check listbox open

// Close test
// open listbox -> click button -> check listbox close
// open listbox -> click outside -> check listbox close
// open listbox -> defocus -> check listbox close
// open listbox -> click enabled option -> check listbox close
// open listbox -> click disabled option -> check listbox open

// set select value -> check button content
// set select value incorrect -> check button content placeholder
// set select value disabled -> check button content placeholder

// open listbox -> check selected option

// open listbox -> check option values

