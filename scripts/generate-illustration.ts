import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import path from 'path'
import { optimize } from 'svgo'

const iconTemplate = `
import { defineCustomElement } from '../../utils'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-{{name}}', createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-illustration-{{name}}': TSinchIllustrationElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-{{name}}': TSinchIllustrationReact,
    }
  }
}
`.trimStart()

const dirPath = process.argv[2]
const overwriteNames: string[] = []

const processIllustration = async (filepath: string) => {
  // Filename without the extension
  const filename = path.basename(filepath, path.extname(filepath))
    .replace(/[_\s]/g, '-')
    .replace(/-2$/, '')
    .replace(/-01$/, '')
    .toLowerCase()
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
    .replace(/width="(\w*)" height="(\w*)"/, 'viewBox="0 0 $1 $2" aria-hidden="true" focusable="false"')
    .replace('fill="none" xmlns="http://www.w3.org/2000/svg"', '')

  const outDir = path.join('./components/illustrations', filename)
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
  const storyPath = './stories/Illustrations.ts'
  let storyData = await readFile(storyPath, 'utf-8')

  storyData = storyData
    .replace('// {{illustration import}}', `$&\nimport '@nectary/assets/illustrations/${filename}'`)
    .replace('// {{illustration name}}', `$&\n  'sinch-illustration-${filename}',`)

  await writeFile(storyPath, storyData)
}

const files = await readdir(dirPath)

for (const filename of files) {
  if (path.extname(filename) !== '.svg') {
    continue
  }

  await processIllustration(filename)

  console.log(filename)
}

if (overwriteNames.length > 0) {
  console.log('-----overwritten files-----')
  console.log(overwriteNames.join('\n'))
}
