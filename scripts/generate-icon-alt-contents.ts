import fs from 'node:fs/promises'
import path from 'node:path'

const dirname = (import.meta as any).dirname as string

const iconsDir = path.join(dirname, '..', 'ICONS-FIXED')
const componentsDir = path.join(dirname, '..', 'assets', 'icons')

async function getIconsFiles(): Promise<string[]> {
  const components: string[] = []

  for (const file of await fs.readdir(iconsDir)) {
    components.push(file)
  }

  return components
}

const iconFiles = await getIconsFiles()

try {
  await fs.mkdir(componentsDir)
} catch {}

for (const iconFileName of iconFiles) {
  console.log(iconFileName)

  const iconName = iconFileName.replace('.svg', '').replace('⚠️ ', '').replace('⚠️ ', '')
  const iconDir = path.join(componentsDir, iconName)

  await fs.mkdir(iconDir)

  const svgContent = await fs.readFile(path.join(iconsDir, iconFileName))
  const utf8Decoder = new TextDecoder('UTF-8')

  await fs.writeFile(path.join(iconDir, 'template.html'), utf8Decoder.decode(svgContent).replaceAll(/fill="[A-Za-z0-1#]*"/g, '').replaceAll(/(width|height)="[0-9]*"/g, ''))

  const iconIndexContent = `
  import { defineCustomElement } from '../../utils/element'
  import { createIconClass } from '../create-icon-class'
  import templateHTML from './template.html'
  import type { TSinchIconElement, TSinchIconReact } from '../types'

  defineCustomElement('sinch-icon-${iconName}', createIconClass(templateHTML))

  declare global {
    namespace JSX {
      interface IntrinsicElements {
        'sinch-icon-${iconName}': TSinchIconReact,
      }
    }

    interface HTMLElementTagNameMap {
      'sinch-icon-${iconName}': TSinchIconElement,
    }
  }
  `

  await fs.writeFile(path.join(iconDir, 'index.ts'), iconIndexContent)
}
