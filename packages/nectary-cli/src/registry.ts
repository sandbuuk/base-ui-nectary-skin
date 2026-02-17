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

function isRegistryFile(value: unknown): value is RegistryFile {
  return (
    typeof value === 'object' &&
    value !== null &&
    'path' in value &&
    'content' in value &&
    typeof (value as RegistryFile).path === 'string' &&
    typeof (value as RegistryFile).content === 'string'
  )
}

function parseRegistryItem(data: unknown): RegistryItem | null {
  if (data === null || typeof data !== 'object' || !('name' in data) || !('files' in data)) {
    return null
  }

  const obj = data as Record<string, unknown>
  const name = obj.name
  const description = obj.description
  const dependencies = obj.dependencies
  const files = obj.files

  if (typeof name !== 'string' || name === '') {
    return null
  }

  if (description !== undefined && typeof description !== 'string') {
    return null
  }

  if (!Array.isArray(dependencies)) {
    return null
  }

  if (!dependencies.every((d): d is string => typeof d === 'string')) {
    return null
  }

  if (!Array.isArray(files)) {
    return null
  }

  if (!files.every(isRegistryFile)) {
    return null
  }

  return {
    name,
    description: typeof description === 'string' ? description : '',
    dependencies,
    files,
  }
}

function isUrl(name: string): boolean {
  return name.startsWith('http://') || name.startsWith('https://')
}

async function loadFromUrl(url: string): Promise<RegistryItem | null> {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      return null
    }

    const data: unknown = await res.json()

    return parseRegistryItem(data)
  } catch {
    return null
  }
}

function loadFromBundle(name: string, cliDir: string): RegistryItem | null {
  const registryDir = path.join(cliDir, 'registry')
  const filePath = path.join(registryDir, `${name}.json`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const data: unknown = JSON.parse(raw)

  return parseRegistryItem(data)
}

export function loadRegistryItem(
  name: string,
  cliDir: string
): Promise<RegistryItem | null> {
  if (isUrl(name)) {
    return loadFromUrl(name)
  }

  return Promise.resolve(loadFromBundle(name, cliDir))
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
