import fs from 'node:fs/promises'
import path from 'node:path'

/** Types */
interface TypeGeneratorConfig {
  componentsDir: string
  outputDir: string
  ignoredComponents: string[]
}

interface TypeProcessingResult {
  mainProps: string[]
  styleProps: string[]
  isUnionType: boolean
}

/** Constants */
const dirname = (import.meta as any).dirname as string

const CONFIG: TypeGeneratorConfig = {
  componentsDir: path.join(dirname, '..', 'components'),
  outputDir: path.join(dirname, '..', 'wrappers', 'react', 'src'),
  ignoredComponents: ['node_modules', 'utils', 'stop-events', 'pagination'],
}

const PATTERNS = {
  jsComment: /^.*(\/\*[\s\S]*?\*\/)|(\/\/)/gm,
  objectTypeBody: /(([\d|\w|'|-]*)(\??:)\s(.*){)|}/,
  reactType: /(?<=export type TSinch(?:\w*)React(?:.*){)(\n(.*))*(?=})/,
  customSubType: /TSinch\w*/g,
} as const

/** Import management */
class ImportManager {
  private readonly customTypesImportLines: Set<string>
  private readonly alreadySeenTypes: Set<string>

  constructor() {
    this.customTypesImportLines = new Set([
      'import type { TSinchSize, TSinchSizeEx } from \'@nectary/components/utils/size\'',
      'import type { TSinchTextType } from \'@nectary/components/text/types\'',
      'import type { TSinchTableAlignType } from \'@nectary/components/table-cell/types\'',
      'import type { ElementClickedEvent } from \'@nectary/components/rich-text/types\'',
    ])
    this.alreadySeenTypes = new Set(['TSinchSize', 'TSinchSizeEx', 'TSinchTextType', 'TSinchTableAlignType', 'ElementClickedEvent'])
  }

  addRequiredImports(componentName: string, lines: string[]): void {
    lines.forEach((line) => {
      let match

      while ((match = PATTERNS.customSubType.exec(line)) !== null) {
        const type = match[0]

        if (type && !this.alreadySeenTypes.has(type)) {
          this.customTypesImportLines.add(`import type { ${type} } from '@nectary/components/${componentName}/types'`)
          this.alreadySeenTypes.add(type)
        }
      }
    })
  }

  getImportLines(): string[] {
    return Array.from(this.customTypesImportLines)
  }
}

/** Utility functions */
class StringUtils {
  static capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  static camelCase(name: string): string {
    return name.replace(/'/g, '').replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  }

  static removeJsComments(tsContent: string): string {
    const withoutCommentLines = tsContent
      .split('\n')
      .filter((line) => !line.trim().startsWith('//') || line.includes(':'))

    return withoutCommentLines
      .join('\n')
      .replace(PATTERNS.jsComment, '')
      .trim()
      .replace(/\n+/g, '\n')
  }
}

/** Type processing */
class TypeProcessor {
  static formatTypeLine(line: string): string {
    if (PATTERNS.objectTypeBody.test(line)) {
      return line
    }

    const colonIndex = line.indexOf(':')

    if (colonIndex === -1) {
      return line
    }

    const key = line.substring(0, colonIndex).trim().replace('?', '')
    const separator = line.includes('?:') ? '?:' : ':'
    const typeDef = line.substring(colonIndex + 1, line.lastIndexOf(',')).trim()

    if (key.match(/[a-z]+([A-Z]+[a-z]+)/) || key.includes('sinch')) {
      return `// @preserve-case
      ${key}${separator} ${typeDef},`
    }

    return `${StringUtils.camelCase(key)}${separator} ${typeDef},`
  }

  static processTypeBody(reactTypeBody: string): TypeProcessingResult {
    const cleanedBody = StringUtils.removeJsComments(reactTypeBody)
    const typeLines = cleanedBody.split('\n').filter(Boolean)

    const result: TypeProcessingResult = {
      mainProps: [],
      styleProps: [],
      isUnionType: false,
    }

    let inStyleObject = false

    for (const line of typeLines) {
      if (line.includes('}) & {')) {
        result.isUnionType = true
      }

      if (line.includes('style?: {')) {
        inStyleObject = true
        result.styleProps.push('style?: {')
      } else if (inStyleObject && line.includes('},')) {
        inStyleObject = false
        result.styleProps.push('},')
      } else if (inStyleObject) {
        result.styleProps.push(this.formatTypeLine(line))
      } else {
        result.mainProps.push(this.formatTypeLine(line))
      }
    }

    return result
  }
}

/** Main class */
class TypeGenerator {
  private readonly importManager: ImportManager

  constructor() {
    this.importManager = new ImportManager()
  }

  async getComponents(): Promise<string[]> {
    try {
      const files = await fs.readdir(CONFIG.componentsDir)
      const components: string[] = []

      for (const file of files) {
        const stat = await fs.stat(path.join(CONFIG.componentsDir, file))

        if (stat.isDirectory() && !CONFIG.ignoredComponents.includes(file)) {
          components.push(file)
        }
      }

      return components
    } catch (error) {
      console.error('Failed to read components directory:', error)
      throw error
    }
  }

  async createWrapperType(componentName: string): Promise<string> {
    try {
      const typesPath = path.join(CONFIG.componentsDir, componentName, 'types.ts')
      const fileContent = (await fs.readFile(typesPath)).toString()

      const reactTypeBody = PATTERNS.reactType.exec(fileContent)?.[0]

      if (!reactTypeBody) {
        return ''
      }

      const { mainProps, styleProps, isUnionType } = TypeProcessor.processTypeBody(reactTypeBody)

      this.importManager.addRequiredImports(componentName, [...mainProps, ...styleProps])

      const componentTypeName = StringUtils.capitalizeFirstLetter(StringUtils.camelCase(componentName))

      return `export type TSinch${componentTypeName}Wrapper = ${isUnionType ? '(' : ''}{
  ${mainProps.join('\n  ')}
  ${styleProps.length > 0 ? styleProps.join('\n  ') : ''}
}`
    } catch (error) {
      console.error(`Failed to create wrapper type for ${componentName}:`, error)

      return ''
    }
  }

  async generate(): Promise<void> {
    try {
      const components = await this.getComponents()
      const typeDefinitions = await Promise.all(
        components.map((component) => this.createWrapperType(component))
      )

      const outputContent = [
        this.importManager.getImportLines().join('\n'),
        typeDefinitions.filter(Boolean).join('\n'),
      ].join('\n\n')

      const outputPath = path.join(CONFIG.outputDir, 'types.ts')

      await fs.writeFile(outputPath, outputContent)

      console.log('Successfully generated wrapper types!')
    } catch (error) {
      console.error('Failed to generate types:', error)
      process.exit(1)
    }
  }
}

// Run the generator
const generator = new TypeGenerator()

await generator.generate()

/**
 * TODO: make sure the react props get translated to attributes
 */

