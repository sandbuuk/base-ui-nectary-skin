import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import { filterMissingDependencies, resolvePathWithinBase } from './add-helpers.js'
import { getComponentsPath, loadNectaryConfig } from './config.js'
import { installDependencies } from './install.js'
import { loadRegistryItem } from './registry.js'
import { validateProjectDependencies } from './validate.js'

export function addCommand(): Command {
  return new Command('add')
    .description('Add a composition (e.g. select, phone-input, table)')
    .argument('<name>', 'Registry item name or URL to a registry item JSON')
    .option('-p, --path <path>', 'Override components output path')
    .option('-o, --overwrite', 'Overwrite existing files', false)
    .option('-y, --yes', 'Skip any confirmation prompts (non-interactive, for scripting)', false)
    .action(async (name: string, options: { path?: string, overwrite?: boolean }) => {
      const cwd = process.cwd()

      validateProjectDependencies(cwd)

      const config = loadNectaryConfig(cwd)
      const basePath = options.path ?? getComponentsPath(config)

      const cliDir = path.dirname(fileURLToPath(import.meta.url))
      const item = await loadRegistryItem(name, cliDir)

      if (item == null) {
        console.error(`Error: composition "${name}" not found.`)
        process.exit(1)
      }

      const baseDir = path.resolve(cwd, basePath)
      const written: string[] = []

      for (const file of item.files) {
        const targetPath = resolvePathWithinBase(baseDir, file.path)

        if (targetPath === null) {
          console.error(`Error: invalid file path "${file.path}" (path traversal not allowed).`)
          process.exit(1)
        }

        const dir = path.dirname(targetPath)

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        if (fs.existsSync(targetPath) && options.overwrite !== false) {
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
          try {
            await installDependencies(cwd, toInstall)
          } catch (err) {
            const message = err instanceof Error ? err.message : String(err)

            console.error(`Failed to install dependencies: ${message}`)
            process.exit(1)
          }
        } else {
          console.log('All dependencies already present.')
        }
      }

      if (written.length === 0 && options.overwrite !== true) {
        console.log('No files written (use --overwrite to replace existing).')
      }
    })
}
