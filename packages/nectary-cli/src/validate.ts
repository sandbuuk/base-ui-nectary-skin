import fs from 'fs'
import path from 'path'

const REQUIRED_DEPS = ['react', '@nectary/components'] as const

export function readPackageJson(cwd: string): { dependencies?: Record<string, string>, devDependencies?: Record<string, string> } | null {
  const pkgPath = path.join(cwd, 'package.json')

  if (!fs.existsSync(pkgPath)) {
    return null
  }

  try {
    const raw = fs.readFileSync(pkgPath, 'utf8')

    return JSON.parse(raw) as { dependencies?: Record<string, string>, devDependencies?: Record<string, string> }
  } catch {
    return null
  }
}

function getDependencyNames(pkg: { dependencies?: Record<string, string>, devDependencies?: Record<string, string> }): Set<string> {
  const names = new Set<string>()

  for (const key of Object.keys(pkg.dependencies ?? {})) {
    names.add(key)
  }

  for (const key of Object.keys(pkg.devDependencies ?? {})) {
    names.add(key)
  }

  return names
}

export function validateProjectDependencies(cwd: string): void {
  const pkg = readPackageJson(cwd)

  if (pkg == null) {
    console.error('Error: No package.json found in this directory. Run nectary add from your project root.')
    process.exit(1)
  }

  const names = getDependencyNames(pkg)
  const missing = REQUIRED_DEPS.filter((dep) => !names.has(dep))

  if (missing.length > 0) {
    console.error(
      `Error: This project must have 'react' and '@nectary/components' in package.json. Missing: ${missing.join(', ')}. Add them first, then run nectary add again.`
    )
    process.exit(1)
  }
}
