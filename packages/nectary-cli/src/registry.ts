import fs from 'fs'
import path from 'path'

export interface RegistryFile {
  path: string,
  content: string,
}

export interface RegistryItem {
  name: string,
  description: string,
  dependencies: string[],
  files: RegistryFile[],
}

function isUrl(name: string): boolean {
  return name.startsWith('http://') || name.startsWith('https://')
}

async function loadFromUrl(url: string): Promise<RegistryItem | null> {
  const res = await fetch(url)

  if (!res.ok) {
    return null
  }

  return (await res.json()) as RegistryItem
}

function loadFromBundle(name: string, cliDir: string): RegistryItem | null {
  const registryDir = path.join(cliDir, 'registry')
  const filePath = path.join(registryDir, `${name}.json`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, 'utf8')

  return JSON.parse(raw) as RegistryItem
}

export async function loadRegistryItem(
  name: string,
  cliDir: string
): Promise<RegistryItem | null> {
  if (isUrl(name)) {
    return await loadFromUrl(name)
  }

  return loadFromBundle(name, cliDir)
}
