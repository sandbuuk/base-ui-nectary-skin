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
  return name.replace(/'/g, '').replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

const findReactTypeBody = (fileContent: string) => {
  const reactTypeRegexp = new RegExp(/(?<=export type TSinch(?:\w*)React(?:.*){)(\n(.*))*(?=})/)

  return reactTypeRegexp.exec(fileContent)?.[0]
}

const jsCommentRegex = new RegExp(/^.*(\/\*[\s\S]*?\*\/)|(\/\/)/gm)
const typeBodyLineRegex = new RegExp(/([\d|\w|'|-]*)(\??:)\s(.*),/)

async function readTypes(componentName: string): Promise<string> {
  const fileContent = (await fs.readFile(path.join(componentsDir, componentName, 'types.ts'))).toString()

  const reactTypeBody = findReactTypeBody(fileContent)

  if (!reactTypeBody) {
    // TODO: Do something
    return ''
  }

  const reactTypeBodyTypesOnly = reactTypeBody.replace(jsCommentRegex, '').trim().replace(/\n+/g, '\n')

  const fileLines = reactTypeBodyTypesOnly.split('\n').filter((line) => Boolean(line))

  const formattedLines = fileLines?.map((line) => {
    const [_ignore, key, separator, typeDef] = typeBodyLineRegex.exec(line) || []

    return `${camelCase(key)}${separator} ${typeDef}`
  })

  const result = `export interface TSinch${capitalizeFirstLetter(camelCase(componentName))}Wrapper {
  ${formattedLines?.map((line) => `${line},`).join('\n  ')}
}`

  return result
}

const components = await getComponents()

const lines = await Promise.all(components.map((x) => readTypes(x)))

// const importCodes = items.map((item) => item?.importCode).join('\n')
// const codes = items.map((item) => item?.code).join('\n')

// const code = `import { createReactWrapper } from './utils'\nimport type { NamedSlots } from './slots'\n\n${importCodes}\n\n${codes}\n`

await fs.writeFile(
  path.join(dirname, '..', 'wrappers', 'react', 'src', 'types.ts'),
  lines.join('\n')
)

/**
 * TODO: add imports of types
 * TODO: add Comments back
 * TODO: make sure the react props get translated to attributes
 */
