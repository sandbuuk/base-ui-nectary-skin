import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import path from 'path'
import { optimize } from 'svgo'

const iconTemplate = `
import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-{{name}}', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-{{name}}': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-{{name}}': TSinchIconElement,
  }
}
`.trimStart()

const dirPath = process.argv[2]
const svgAttributes = 'viewBox="0 0 24 24" aria-hidden="true" focusable="false"'
const overwriteNames: string[] = []

const processIcon = async (filepath: string) => {
  // Filename without the extension
  const filename = path.basename(filepath, path.extname(filepath)).replaceAll('_', '-')
  const svgString = await readFile(path.join(dirPath, filepath), 'utf-8')

  const svgoResult = optimize(svgString, {
    multipass: true,
    js2svg: {
      pretty: true,
      indent: 2,
      finalNewline: true,
    },
  })

  if (svgoResult.error != null) {
    throw new Error(svgoResult.error)
  }

  let { data: dataHtml } = svgoResult

  const dataTs = iconTemplate.replaceAll('{{name}}', filename)

  dataHtml = dataHtml
    .replace('width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"', svgAttributes)
    .replaceAll(/ fill=".*?"/, '')

  const outDir = path.join('./components/icons', filename)
  const outPathTs = path.join(outDir, 'index.ts')
  const outPathHtml = path.join(outDir, 'template.html')

  try {
    await mkdir(outDir)
  } catch {
    overwriteNames.push(filename)
  }

  await writeFile(outPathTs, dataTs)
  await writeFile(outPathHtml, dataHtml)

  /* Storybook */
  const storyPath = './stories/Icons.ts'
  let storyData = await readFile(storyPath, 'utf-8')

  storyData = storyData
    .replace('// {{icon import}}', `$&\nimport '@sinch-engage/nectary/icons/${filename}'`)
    .replace('// {{icon name}}', `$&\n  'sinch-icon-${filename}',`)

  await writeFile(storyPath, storyData)
}

const files = await readdir(dirPath)

for (const filename of files) {
  if (path.extname(filename) !== '.svg') {
    continue
  }

  await processIcon(filename)

  console.log(filename)
}

if (overwriteNames.length > 0) {
  console.log('-----overwritten files-----')
  console.log(overwriteNames.join('\n'))
}
