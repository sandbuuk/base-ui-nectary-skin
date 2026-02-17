import fs from 'fs'
import path from 'path'

const DEFAULT_COMPONENTS_PATH = 'src/components/nectary'
const CONFIG_FILENAME = 'nectary.json'

export interface NectaryConfig {
  componentsPath?: string,
}

export function loadNectaryConfig(cwd: string): NectaryConfig | null {
  const configPath = path.join(cwd, CONFIG_FILENAME)

  if (!fs.existsSync(configPath)) {
    return null
  }

  try {
    const raw = fs.readFileSync(configPath, 'utf8')

    return JSON.parse(raw) as NectaryConfig
  } catch {
    return null
  }
}

export function getComponentsPath(config: NectaryConfig | null): string {
  return config?.componentsPath ?? DEFAULT_COMPONENTS_PATH
}
