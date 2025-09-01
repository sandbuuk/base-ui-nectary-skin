import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
// @ts-ignore
import { minify } from '../libs/html-minifier-terser/src/htmlminifier.js'

const minifyOptions = {
  removeComments: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
}

const minifyHtmlFile = async (filePath: string): Promise<void> => {
  try {
    const originalContent = readFileSync(filePath, 'utf-8')

    const minifiedContent = await minify(originalContent, minifyOptions)

    writeFileSync(filePath, minifiedContent, 'utf-8')
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error instanceof Error ? error.message : error)
  }
}

const traverseDirectory = (dir: string): void => {
  const items = readdirSync(dir)

  for (const item of items) {
    const fullPath = join(dir, item)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        traverseDirectory(fullPath)
      }
    } else if (item.endsWith('.html')) {
      minifyHtmlFile(fullPath)
    }
  }
}

const main = (): void => {
  const startDir = process.cwd()

  console.log(`Starting HTML minification from: ${startDir}\n`)

  try {
    traverseDirectory(startDir)
    console.log('✓ HTML minification completed!')
  } catch (error) {
    console.error('✗ Error during minification:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

main()
