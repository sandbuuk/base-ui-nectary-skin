import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import { listRegistryItems } from './registry.js'

export function listCommand(): Command {
  return new Command('list')
    .description('List available compositions (name and description)')
    .action(() => {
      const cliDir = path.dirname(fileURLToPath(import.meta.url))
      const items = listRegistryItems(cliDir)

      if (items.length === 0) {
        console.log('No compositions found.')

        return
      }

      for (const { name, description } of items) {
        console.log(`${name} - ${description}`)
      }
    })
}
