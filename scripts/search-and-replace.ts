import * as fs from 'fs/promises'
// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk'
// eslint-disable-next-line import/no-extraneous-dependencies
import { glob } from 'glob'
import ts from 'typescript'

// Configure your search/replace options here
const config = {
  // The regex pattern to search for
  // search: /export type TSinch\w*Element = [\s\S]*?\n}/g,
  search: /TSinchCardElement/g,

  // What to replace matches with
  replace: 'HTMLElementTagNameMap["sinch-card"]',

  // Glob pattern for files to process (e.g. "**/*.ts" for all TypeScript files)
  pattern: 'docs/**/*.tsx',

  // Set to true to see what would change without making actual changes
  dryRun: false,

  // Set to true to also remove any imports that become unused after the replacement
  removeUnusedImports: true,
}

async function findFiles(pattern: string): Promise<string[]> {
  // Read .gitignore if it exists
  let ignorePatterns: string[] = ['**/node_modules/**']

  try {
    const gitignore = await fs.readFile('.gitignore', 'utf-8')

    ignorePatterns = [
      ...ignorePatterns,
      ...gitignore
        .split('\n')
        .filter((line: string) => line.length > 0 && !line.startsWith('#'))
        .map((line: string) => line.trim()),
    ]
  } catch (err) {
    console.warn('No .gitignore found, proceeding with default ignore patterns')
  }

  return glob(pattern, {
    ignore: ignorePatterns,
    dot: true,
  })
}

function removeUnusedImports(sourceFile: ts.SourceFile, searchRegex: RegExp): string {
  const importDeclarations: ts.ImportDeclaration[] = []
  let content = sourceFile.text

  // First pass: collect all import declarations
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isImportDeclaration(node)) {
      importDeclarations.push(node)
    }
  })

  // Apply search/replace to get modified content
  content = content.replace(searchRegex, '')

  // Second pass: check each import for usage
  for (const importDecl of importDeclarations) {
    if (importDecl.importClause == null) {
      continue
    }

    const importText = importDecl.getText(sourceFile)
    const importStart = importDecl.getStart(sourceFile)
    const importEnd = importDecl.getEnd()

    // Check named imports
    if ((importDecl.importClause.namedBindings != null) &&
        ts.isNamedImports(importDecl.importClause.namedBindings)) {
      const elements = importDecl.importClause.namedBindings.elements

      // Create a copy of content for checking usage
      const contentForCheck = content

      const unusedElements = elements.filter((el) => {
        const name = el.name.text
        const regex = new RegExp(`\\b${name}\\b`, 'g')

        return !regex.test(contentForCheck.slice(importEnd))
      })

      if (unusedElements.length === elements.length) {
        // All imports unused - remove entire declaration
        content = content.slice(0, importStart) + content.slice(importEnd)
      } else if (unusedElements.length > 0) {
        // Some imports unused - remove only unused ones
        const newImport = elements
          .filter((el) => !unusedElements.includes(el))
          .map((el) => el.getText(sourceFile))
          .join(', ')

        content = content.slice(0, importStart) +
                 importText.replace(/\{[^}]+\}/, `{ ${newImport} }`) +
                 content.slice(importEnd)
      }
    }
  }

  return content
}

function createUnifiedDiff(oldContent: string, newContent: string): string[] {
  const diff: string[] = []

  // If we're removing unused imports, find and show them
  if (config.removeUnusedImports && oldContent !== newContent) {
    const oldImports = oldContent.match(/import.*from.*;?/g) ?? []
    const newImports = newContent.match(/import.*from.*;?/g) ?? []

    const removedImports = (oldImports as string[]).filter((imp: string) =>
      !(newImports as string[]).includes(imp))

    if (removedImports.length > 0) {
      diff.push(chalk.gray('@ Removed unused imports @'))
      removedImports.forEach((imp: string) => {
        diff.push(chalk.red(`- ${imp.trimEnd()}`))
      })
    }
  }

  // Find all regex matches in the old content
  const matches = [...oldContent.matchAll(config.search)]

  if (matches.length > 0) {
    matches.forEach((match) => {
      if (typeof match.index !== 'number') {
        return
      }

      const lineStart = oldContent.slice(0, match.index).split('\n').length

      diff.push(chalk.gray(`\n@ Found match at line ${lineStart} @`))
      diff.push(chalk.red(`- ${match[0].trimEnd()}`))

      if (config.replace !== undefined) {
        diff.push(chalk.green(`+ ${config.replace}`))
      }
    })
  }

  if (diff.length === 0) {
    diff.push(chalk.yellow('No changes detected'))
  }

  return diff
}

async function processFile(filePath: string): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    const searchRegex = config.search

    let newContent = content

    if (config.removeUnusedImports && filePath.endsWith('.ts')) {
      const sourceFile = ts.createSourceFile(
        filePath,
        content,
        ts.ScriptTarget.Latest,
        true
      )

      newContent = removeUnusedImports(sourceFile, searchRegex)
    } else {
      newContent = content.replace(searchRegex, config.replace)
    }

    if (content !== newContent) {
      if (config.dryRun) {
        console.log(chalk.cyan(`Would modify: ${filePath}`))
        console.log('Diff:')

        const diff = createUnifiedDiff(content, newContent)

        console.log(diff.join('\n'))
      } else {
        await fs.writeFile(filePath, newContent, 'utf-8')
        console.log(chalk.green(`Modified: ${filePath}`))
      }
    }
  } catch (error) {
    console.error(chalk.red(`Error processing ${filePath}:`), error)
  }
}

async function main() {
  console.log('Running with config:', config)

  const files = await findFiles(config.pattern)

  console.log(`Found ${files.length} files matching pattern ${config.pattern}`)

  for (const file of files) {
    await processFile(file)
  }
}

// Run the script
main().catch(console.error)
