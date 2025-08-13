import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { BASE_ASSET_NAMES } from '@nectary/assets/utils/asset-names'
import { test, expect } from '@playwright/test'

/**
 * Helper function to remove plural from asset names
 * Examples:
 * - animations -> animation
 * - icons -> icon
 * - icons-branded -> icon-branded
 * - sinch-logo -> sinch-logo (no change)
 */
function _removePlural(name: string): string {
  const parts = name.split('-')
  const firstPart = parts[0]

  // Remove 's' from the first part if it ends with 's'
  const singularFirstPart = firstPart.endsWith('s') ? firstPart.slice(0, -1) : firstPart

  // Reconstruct the name with the singular first part
  return [singularFirstPart, ...parts.slice(1)].join('-')
}

test.describe('Asset Names Validation', () => {
  test('should have all asset directories listed in BASE_ASSET_NAMES', () => {
    const assetsPath = join(__dirname, '..', '..', 'assets')

    // Get all directories in assets folder, excluding files and excluded directories
    const actualAssets = readdirSync(assetsPath)
      .flatMap((item) => {
        const itemPath = join(assetsPath, item)
        const isDirectory = statSync(itemPath).isDirectory()

        if (!isDirectory || item === 'utils' || item === 'node_modules') {
          return []
        }

        const items = readdirSync(join(assetsPath, item)).flatMap((assetName) => {
          const itemPath = join(assetsPath, item, assetName)

          const isDirectory = statSync(itemPath).isDirectory()

          if (!isDirectory) {
            return []
          }

          return `${_removePlural(item)}-${assetName}`
        })

        return items
      })
      .sort()

    // Convert BASE_ASSET_NAMES set to sorted array for comparison
    const expectedAssets = Array.from(BASE_ASSET_NAMES).sort()

    // Check for assets in directories but not in BASE_ASSET_NAMES
    const missingFromAssetNames = actualAssets.filter(
      (asset) => !BASE_ASSET_NAMES.has(asset as any)
    )

    // Check for assets in BASE_ASSET_NAMES but not in directories
    const missingFromDirectories = expectedAssets.filter(
      (asset) => !actualAssets.includes(asset)
    )

    // Create detailed error message if there are mismatches
    let errorMessage = ''

    if (missingFromAssetNames.length > 0) {
      errorMessage += `\nAssets found in directories but missing from BASE_ASSET_NAMES:\n`
      errorMessage += missingFromAssetNames.map((name) => `  - ${name}`).join('\n')
    }

    if (missingFromDirectories.length > 0) {
      errorMessage += `\nAssets listed in BASE_ASSET_NAMES but missing from directories:\n`
      errorMessage += missingFromDirectories.map((name) => `  - ${name}`).join('\n')
    }

    if (errorMessage !== '') {
      errorMessage = `Asset names validation failed:${errorMessage}\n\nPlease update assets/utils/asset-names.ts to match the actual asset directories.`
    }

    // Assert that there are no mismatches
    expect(missingFromAssetNames.length, errorMessage).toBe(0)
    expect(missingFromDirectories.length, errorMessage).toBe(0)

    // Also assert that the arrays are equal for additional safety
    expect(actualAssets).toEqual(expectedAssets)
  })

  test('should have valid asset names (kebab-case format)', () => {
    const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/
    const invalidNames = Array.from(BASE_ASSET_NAMES).filter(
      (name) => !kebabCaseRegex.test(name)
    )

    expect(invalidNames).toEqual([])

    if (invalidNames.length > 0) {
      throw new Error(
        `Invalid asset names found (should be kebab-case):\n${invalidNames.map((name) => `  - ${name}`).join('\n')}`
      )
    }
  })
})
