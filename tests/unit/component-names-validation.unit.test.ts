import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { BASE_COMPONENT_NAMES } from '@nectary/components/utils/component-names'
import { test, expect } from '@playwright/test'

test.describe('Component Names Validation', () => {
  test('should have all component directories listed in BASE_COMPONENT_NAMES', () => {
    const componentsPath = join(__dirname, '..', '..', 'components')

    // Get all directories in components folder, excluding files and excluded directories
    const actualComponents = readdirSync(componentsPath)
      .filter((item) => {
        const itemPath = join(componentsPath, item)
        const isDirectory = statSync(itemPath).isDirectory()
        const isExcluded = item === 'utils' || item === 'node_modules'

        return isDirectory && !isExcluded
      })
      .sort()

    // Convert BASE_COMPONENT_NAMES set to sorted array for comparison
    const expectedComponents = Array.from(BASE_COMPONENT_NAMES).sort()

    // Check for components in directories but not in BASE_COMPONENT_NAMES
    const missingFromComponentNames = actualComponents.filter(
      (component) => !BASE_COMPONENT_NAMES.has(component as any)
    )

    // Check for components in BASE_COMPONENT_NAMES but not in directories
    const missingFromDirectories = expectedComponents.filter(
      (component) => !actualComponents.includes(component)
    )

    // Create detailed error message if there are mismatches
    let errorMessage = ''

    if (missingFromComponentNames.length > 0) {
      errorMessage += `\nComponents found in directories but missing from BASE_COMPONENT_NAMES:\n`
      errorMessage += missingFromComponentNames.map((name) => `  - ${name}`).join('\n')
    }

    if (missingFromDirectories.length > 0) {
      errorMessage += `\nComponents listed in BASE_COMPONENT_NAMES but missing from directories:\n`
      errorMessage += missingFromDirectories.map((name) => `  - ${name}`).join('\n')
    }

    if (errorMessage !== '') {
      errorMessage = `Component names validation failed:${errorMessage}\n\nPlease update components/utils/component-names.ts to match the actual component directories.`
    }

    // Assert that there are no mismatches
    expect(missingFromComponentNames.length, errorMessage).toBe(0)
    expect(missingFromDirectories.length, errorMessage).toBe(0)

    // Also assert that the arrays are equal for additional safety
    expect(actualComponents).toEqual(expectedComponents)
  })

  test('should have valid component names (kebab-case format)', () => {
    const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/
    const invalidNames = Array.from(BASE_COMPONENT_NAMES).filter(
      (name) => !kebabCaseRegex.test(name)
    )

    expect(invalidNames).toEqual([])

    if (invalidNames.length > 0) {
      throw new Error(
        `Invalid component names found (should be kebab-case):\n${invalidNames.map((name) => `  - ${name}`).join('\n')}`
      )
    }
  })
})
