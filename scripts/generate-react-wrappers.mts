import fs from 'node:fs/promises'
import path from 'node:path'

const dirname = (import.meta as any).dirname as string

const componentsDir = path.join(dirname, '..', 'components')

async function getComponents(): Promise<string[]> {
  const components = []

  for (const file of await fs.readdir(componentsDir)) {
    const stat = await fs.stat(path.join(componentsDir, file))
    const isDir = stat.isDirectory()
    const isIgnored = [
      'node_modules',
      'utils',
      'stop-events',
      'pagination',
    ].includes(file)

    if (!isDir || isIgnored) {
      continue
    }

    components.push(file)
  }

  return components
}

// Folders that are not node_modules, get the basenames

function capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function camelCase(name: string): string {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

const reactWrapperTypeFileContent = (await fs.readFile(path.join(dirname, '..', 'wrappers', 'react', 'src', 'types.ts'))).toString()

function findCorrespondingType(componentPascalCase: string) {
  const typeName = `TSinch${componentPascalCase}Wrapper`

  return reactWrapperTypeFileContent.includes(typeName) ? typeName : null
}

function createWrapper(componentName: string): {
  code: string;
  importCode: string;
} {
  const elementName = `sinch-${componentName}`
  const componentPascalCase = capitalizeFirstLetter(camelCase(componentName))

  const interfaceName = findCorrespondingType(componentPascalCase)

  const importCode = `import type {} from '@nectary/components/${componentName}'${interfaceName ? `\nimport type { ${interfaceName} } from './types'` : ''}`

  const code = `export const ${componentPascalCase} = createReactWrapper<${interfaceName ? ` ${interfaceName}` : `JSX.IntrinsicElements['${elementName}']`}, NamedSlots['${elementName}']>('${elementName}')`

  return {
    importCode,
    code,
  }
}

const components = await getComponents()

const items = components.map((x) => createWrapper(x))

const importCodes = items.map((item) => item?.importCode).join('\n')
const codes = items.map((item) => item?.code).join('\n')

const code = `import { createReactWrapper } from './utils'\nimport type { NamedSlots } from './slots'\n\n${importCodes}\n\n${codes}\n`

await fs.writeFile(
  path.join(dirname, '..', 'wrappers', 'react', 'src', 'index.ts'),
  code
)
