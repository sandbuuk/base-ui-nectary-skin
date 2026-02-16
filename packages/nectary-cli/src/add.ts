import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import { getComponentsPath, loadNectaryConfig } from './config.js'
import { installDependencies } from './install.js'
import { loadRegistryItem } from './registry.js'

export function addCommand(): Command {
  return new Command('add')
    .description('Add a composition (e.g. select, phone-input)')
    .argument('<name>', 'Registry item name or URL to a registry item JSON')
    .option('-p, --path <path>', 'Override components output path')
    .option('-o, --overwrite', 'Overwrite existing files', false)
    .action(async (name: string, options: { path?: string, overwrite?: boolean }) => {
      const cwd = process.cwd()
      const config = loadNectaryConfig(cwd)
      const basePath = options.path ?? getComponentsPath(config, cwd)

      const cliDir = path.dirname(fileURLToPath(import.meta.url))
      const item = await loadRegistryItem(name, cliDir)

      if (item == null) {
        console.error(`Error: composition "${name}" not found.`)
        process.exit(1)
      }

      const written: string[] = []

      for (const file of item.files) {
        const targetPath = path.join(cwd, basePath, file.path)
        const dir = path.dirname(targetPath)

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        if (fs.existsSync(targetPath) && !options.overwrite) {
          console.warn(`Skip (exists): ${path.relative(cwd, targetPath)}`)
          continue
        }

        fs.writeFileSync(targetPath, file.content, 'utf8')
        written.push(path.relative(cwd, targetPath))
        console.log(`Added: ${path.relative(cwd, targetPath)}`)
      }

      if (item.dependencies.length > 0) {
        const toInstall = filterMissingDependencies(cwd, item.dependencies)

        if (toInstall.length > 0) {
          await installDependencies(cwd, toInstall)
        } else {
          console.log('All dependencies already present.')
        }
      }

      if (written.length === 0 && !options.overwrite) {
        console.log('No files written (use --overwrite to replace existing).')
      }
    })
}

/** Extract package name and full spec from a dependency spec (e.g. "zod@^3.20.0" or "@hookform/resolvers"). */
function parseDepSpec(spec: string): { name: string, spec: string } {
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

function filterMissingDependencies(cwd: string, deps: string[]): string[] {
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
