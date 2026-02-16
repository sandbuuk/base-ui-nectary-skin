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

export interface RegistryListItem {
  name: string,
  description: string,
}

export function listRegistryItems(cliDir: string): RegistryListItem[] {
  const registryDir = path.join(cliDir, 'registry')

  if (!fs.existsSync(registryDir)) {
    return []
  }

  const files = fs.readdirSync(registryDir)
  const items: RegistryListItem[] = []

  for (const file of files) {
    if (!file.endsWith('.json')) {
      continue
    }

    const filePath = path.join(registryDir, file)

    try {
      const raw = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(raw) as { name?: string, description?: string }

      if (data.name != null) {
        items.push({
          name: data.name,
          description: data.description ?? '',
        })
      }
    } catch {
      // skip invalid or unreadable files
    }
  }

  return items.sort((a, b) => a.name.localeCompare(b.name))
}
