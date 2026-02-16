import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import { loadRegistryItem } from './registry.js'

export function viewCommand(): Command {
  return new Command('view')
    .description('Preview a composition (description, dependencies, files) without adding it')
    .argument('<name>', 'Registry item name or URL to a registry item JSON')
    .action(async (name: string) => {
      const cliDir = path.dirname(fileURLToPath(import.meta.url))
      const item = await loadRegistryItem(name, cliDir)

      if (item == null) {
        console.error(`Error: composition "${name}" not found.`)
        process.exit(1)
      }

      console.log(item.name)
      console.log(item.description)
      console.log(
        item.dependencies.length === 0
          ? 'Dependencies: none'
          : `Dependencies: ${item.dependencies.join(', ')}`
      )
      console.log('Files:')

      for (const file of item.files) {
        console.log(`  - ${file.path}`)
      }
    })
}
