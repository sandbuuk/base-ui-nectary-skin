import fs from 'node:fs/promises'
import path from 'node:path'

/** VARS */
const dirname = (import.meta as any).dirname as string
const componentsDir = path.join(dirname, '..', 'components')

const jsCommentRegex = new RegExp(/^.*(\/\*[\s\S]*?\*\/)|(\/\/)/gm)
const objectTypeBodyLineRegex = new RegExp(/(([\d|\w|'|-]*)(\??:)\s(.*){)|}/)
const typeBodyLineRegex = new RegExp(/([\d|\w|'|-]*)(\??:)\s(.*),/)
const reactTypeRegexp = new RegExp(/(?<=export type TSinch(?:\w*)React(?:.*){)(\n(.*))*(?=})/)
const customSubType = new RegExp(/TSinch\w*/g)

/** Some types are to be imported from outside of where it is used, so they are prepopulated */
const customTypesImportLines: string[] = [
  'import type { TSinchSize, TSinchSizeEx } from \'@nectary/components/utils/size\'',
  'import type { TSinchTextType } from \'@nectary/components/text/types\'',
  'import type { TSinchTableAlignType } from \'@nectary/components/table-cell/types\'',
]
const alreadySeenType: string[] = ['TSinchSize', 'TSinchSizeEx', 'TSinchTextType', 'TSinchTableAlignType']

/** HELPERS */
function capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function camelCase(name: string): string {
  return name.replace(/'/g, '').replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

const findReactTypeBody = (fileContent: string) => reactTypeRegexp.exec(fileContent)?.[0]

const mapRegexMatches = (regex: RegExp, str: string, cb: ((_m: RegExpExecArray) => void)) => {
  let match

  while ((match = regex.exec(str)) !== null) {
    cb(match)
  }
}

const removeJsComments = (tsContent: string) => tsContent.replace(jsCommentRegex, '').trim().replace(/\n+/g, '\n')

const formatTypeLine = (line: string) => {
  if (objectTypeBodyLineRegex.test(line)) {
    return line
  }

  const [_ignore, key, separator, typeDef] = typeBodyLineRegex.exec(line) || []

  // exclude CSS var and preformatted keys.
  if (key.match(/[a-z]+([A-Z]+[a-z]+)/) || key.includes('sinch-global')) {
    return `// @preserve-case
    ${key}${separator} ${typeDef}`
  }
  // indicate that key is camelCase in components library and should be preserved

  return `${camelCase(key)}${separator} ${typeDef}`
}

const addRequiredImportLines = (componentName: string, lines: string[]) => {
  lines.forEach((line) => {
    mapRegexMatches(customSubType, line, (match) => {
      const type = match[0]

      if (type && !alreadySeenType.includes(type)) {
        customTypesImportLines.push(`import type { ${type} } from '@nectary/components/${componentName}/types'`)
        alreadySeenType.push(type)
      }
    })
  })
}

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

async function createWrapperInterface(componentName: string): Promise<string> {
  const fileContent = (await fs.readFile(path.join(componentsDir, componentName, 'types.ts'))).toString()
  const reactTypeBody = findReactTypeBody(fileContent)

  if (!reactTypeBody) {
    return ''
  }

  const cleanedReactTypeBody = removeJsComments(reactTypeBody)
  const typeLines = cleanedReactTypeBody.split('\n').filter((line) => Boolean(line))
  const formattedLines = typeLines.map(formatTypeLine)

  addRequiredImportLines(componentName, formattedLines)

  return `export interface TSinch${capitalizeFirstLetter(camelCase(componentName))}Wrapper {
  ${formattedLines?.map((line) => `${line}`).join('\n  ')}
}`
}

const components = await getComponents()

const lines = await Promise.all(components.map((x) => createWrapperInterface(x)))

await fs.writeFile(
  path.join(dirname, '..', 'wrappers', 'react', 'src', 'types.ts'),
  [customTypesImportLines.join('\n'), lines.join('\n')].join('\n\n')
)

/**
 * TODO: make sure the react props get translated to attributes
 */
