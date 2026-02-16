import fs from 'fs'
import path from 'path'

/**
 * Resolves file.path relative to baseDir and ensures the result is inside baseDir.
 * Prevents path traversal (e.g. ../../../etc/passwd) when using remote registry items.
 * Returns null if the path would escape baseDir.
 */
export function resolvePathWithinBase(baseDir: string, filePath: string): string | null {
  const normalizedBase = path.resolve(baseDir)

  if (filePath.includes('\0')) {
    return null
  }

  const resolved = path.resolve(normalizedBase, filePath)
  const relative = path.relative(normalizedBase, resolved)

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    return null
  }

  return resolved
}

/** Extract package name and full spec from a dependency spec (e.g. "zod@^3.20.0" or "@hookform/resolvers"). */
export function parseDepSpec(spec: string): { name: string, spec: string } {
  const lastAt = spec.lastIndexOf('@')

  if (lastAt <= 0) {
    return { name: spec, spec }
  }

  const afterAt = spec.slice(lastAt + 1)

  if (/^[\d^~]/.test(afterAt) || /^\d/.test(afterAt)) {
    return { name: spec.slice(0, lastAt), spec }
  }

  return { name: spec, spec }
}

export function filterMissingDependencies(cwd: string, deps: string[]): string[] {
  const pkgPath = path.join(cwd, 'package.json')

  if (!fs.existsSync(pkgPath)) {
    return deps
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as {
    dependencies?: Record<string, string>,
    devDependencies?: Record<string, string>,
  }
  const all = { ...pkg.dependencies, ...pkg.devDependencies }

  return deps.filter((spec) => {
    const { name } = parseDepSpec(spec)

    return !Object.prototype.hasOwnProperty.call(all, name)
  })
}
