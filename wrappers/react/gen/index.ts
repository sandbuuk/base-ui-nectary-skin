import fs from 'node:fs'
import path from 'node:path'

const componentsDir = path.join(__dirname, '..', '..', '..', 'components')

// Folders that are not node_modules, get the basenames
const components = fs
  .readdirSync(componentsDir)
  .filter((file) => fs.statSync(path.join(componentsDir, file)).isDirectory())
  .filter(
    (file) =>
      file !== 'node_modules' && file !== 'utils' && file !== 'stop-events'
  )

const items = components.map((x) => createWrapper(x))

const importCodes = items.map((item) => item?.importCode).join('\n')
const codes = items.map((item) => item?.code).join('\n')

const code = `import React from 'react'\nimport { renderSlotsOrChildren, Slotify } from './slots';\n${importCodes}\n\n${codes}\n`

fs.writeFileSync(path.join(__dirname, '..', 'src', 'index.ts'), code)

function camelCase(name: string): string {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

function capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function createWrapper(componentName: string): {
  code: string,
  importCode: string,
} {
  const elementName = `sinch-${componentName}`
  const componentCamelCase = capitalizeFirstLetter(camelCase(componentName))

  const importCode = `import '@nectary/components/${componentName}'`

  const code = `export const ${componentCamelCase}: React.FC<JSX.IntrinsicElements['${elementName}'] & Slotify<Nectary.Slots['${elementName}']>> = (props) => React.createElement('${elementName}', props, renderSlotsOrChildren(props))`

  return {
    importCode,
    code,
  }
}
