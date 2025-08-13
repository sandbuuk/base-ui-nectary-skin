#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs/promises'
import { resolve, dirname, relative } from 'path'
import { globSync } from 'glob'

interface Alias {
  from: string,
  to: string,
}

function parseArgs(): { pattern: string, aliases: Alias[], dryRun: boolean, bundleGenerate: boolean } {
  const args = process.argv.slice(2)
  const options = {
    pattern: '**/*.d.ts',
    aliases: [] as Alias[],
    dryRun: false,
    bundleGenerate: true,
  }

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (arg === '--help' || arg === '-h') {
      console.log(`Usage: node tsc-alias.ts [--alias from=to] [--pattern glob] [--dry-run] [--no-bundle]
Examples:
  node tsc-alias.ts --alias "@nectary/shared=shared"
  node tsc-alias.ts --alias "@utils=src/utils" --pattern "components/**/*.d.ts"
  node tsc-alias.ts --alias "@utils=src/utils" --no-bundle`)
      process.exit(0)
    } else if (arg === '--dry-run') {
      options.dryRun = true
    } else if (arg === '--no-bundle') {
      options.bundleGenerate = false
    } else if (arg === '--pattern' && i + 1 < args.length) {
      options.pattern = args[++i]
    } else if (arg === '--alias' && i + 1 < args.length) {
      const [from, to] = args[++i].split('=')

      if (from !== '' && to !== '') {
        options.aliases.push({ from, to })
      }
    }
  }

  return options
}

function createRegex(alias: string): RegExp {
  const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(`(['"])${escaped}(\\/[^'"]*)?\\1`, 'g')
}

function runDtsBundleGenerator(filePath: string): void {
  try {
    const command = `npx dts-bundle-generator -o "${filePath}" "${filePath}" --no-check`

    execSync(command, { stdio: 'inherit', cwd: process.cwd() })
    console.log(`  → Bundled: ${relative(process.cwd(), filePath)}`)
  } catch (error) {
    console.error(`  → Bundle failed for ${relative(process.cwd(), filePath)}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

async function processFile(filePath: string, aliases: Alias[], projectRoot: string): Promise<number> {
  let content = await fs.readFile(filePath, 'utf8')
  let changes = 0

  for (const { from, to } of aliases) {
    const regex = createRegex(from)
    const fromDir = dirname(filePath)

    const matches = content.match(regex)

    if (matches != null) {
      changes += matches.length
    }

    content = content.replace(regex, (match, quote, subpath = '') => {
      const targetPath = `${to}${subpath}`
      const targetDir = resolve(projectRoot, targetPath)
      let relPath = relative(fromDir, targetDir)

      if (!relPath.startsWith('.')) {
        relPath = `./${relPath}`
      }

      return `${quote}${relPath.replace(/\\/g, '/')}${quote}`
    })
  }

  if (changes > 0) {
    await fs.writeFile(filePath, content, 'utf8')
  }

  return changes
}

async function main() {
  const { pattern, aliases, dryRun, bundleGenerate } = parseArgs()
  const cwd = process.cwd()

  const allFiles = globSync(pattern, { cwd, absolute: true })
  const files = allFiles.filter((file) => !file.includes('.json'))

  console.log(`Processing ${files.length} files with aliases:`)
  aliases.forEach(({ from, to }) => console.log(`  ${from} → ${to}`))
  console.log(`Bundle generation: ${bundleGenerate ? 'enabled' : 'disabled'}`)

  let totalChanges = 0
  let modifiedFiles = 0

  for (const file of files) {
    const relativePath = relative(cwd, file)

    if (dryRun) {
      // For dry run, read and check but don't write
      const content = await fs.readFile(file, 'utf8')
      let changes = 0

      for (const { from } of aliases) {
        const regex = createRegex(from)
        const matches = content.match(regex)

        if (matches != null) {
          changes += matches.length
        }
      }

      if (changes > 0) {
        console.log(`Would modify: ${relativePath} (${changes} changes)`)

        if (bundleGenerate) {
          console.log(`  → Would bundle: ${relativePath}`)
        }

        totalChanges += changes
        modifiedFiles++
      }
    } else {
      const changes = await processFile(file, aliases, cwd)

      if (changes > 0) {
        console.log(`Modified: ${relativePath} (${changes} changes)`)
        totalChanges += changes
        modifiedFiles++

        // Run dts-bundle-generator on the modified file
        if (bundleGenerate) {
          runDtsBundleGenerator(file)
        }
      }
    }
  }

  console.log(`\nSummary: ${modifiedFiles} files, ${totalChanges} changes${dryRun ? ' (dry run)' : ''}`)
}

main().catch(console.error)
