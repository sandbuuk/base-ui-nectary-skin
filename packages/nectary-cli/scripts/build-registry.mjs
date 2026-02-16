/**
 * Builds registry JSON files from the registry manifest.
 * Source paths in registry.json are relative to the CLI package root (packages/nectary-cli).
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const CLI_PACKAGE_ROOT = path.resolve(__dirname, '..')
const REGISTRY_MANIFEST_PATH = path.join(CLI_PACKAGE_ROOT, 'registry.json')
const OUTPUT_DIR = path.join(CLI_PACKAGE_ROOT, 'dist', 'registry')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function readFile(absolutePath) {
  const raw = fs.readFileSync(absolutePath, 'utf8')

  return raw.replace(/\r\n/g, '\n').trimEnd()
}

const manifest = JSON.parse(fs.readFileSync(REGISTRY_MANIFEST_PATH, 'utf8'))

ensureDir(OUTPUT_DIR)

for (const item of manifest.items) {
  const built = {
    name: item.name,
    description: item.description,
    dependencies: item.dependencies ?? [],
    files: [],
  }

  for (const file of item.files) {
    const sourcePath = path.isAbsolute(file.source)
      ? file.source
      : path.join(CLI_PACKAGE_ROOT, file.source)
    const content = readFile(sourcePath)

    built.files.push({ path: file.path, content })
  }

  const outPath = path.join(OUTPUT_DIR, `${item.name}.json`)

  fs.writeFileSync(outPath, JSON.stringify(built, null, 2), 'utf8')
  console.log(`Wrote ${outPath}`)
}

console.log(`Built ${manifest.items.length} registry item(s).`)
