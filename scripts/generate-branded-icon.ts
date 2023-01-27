import { readFile, writeFile, mkdir, readdir } from 'fs/promises'
import path from 'path'
import { optimize } from 'svgo'

const iconTemplate = `
import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-{{name}}', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-{{name}}': TSinchIconBrandedReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-{{name}}': TSinchIconBrandedElement,
  }
}
`.trimStart()

const dirPath = process.argv[2]
const svgAttributes = 'viewBox="0 0 48 48" aria-hidden="true"'
const overwriteNames: string[] = []

const processIcon = async (filepath: string) => {
  const filename = /\[(.+)\]/.exec(filepath)?.[1]?.replaceAll(/[\s_]/g, '-').toLowerCase()

  if (filename == null) {
    throw new Error(`Could not process icon: ${filepath}`)
  }

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
    .replace('width="48" height="48"', '')
    .replace(' xmlns="http://www.w3.org/2000/svg"', svgAttributes)
    .replaceAll('fill="#007171"', 'class="accent"')
    .replaceAll(/ fill=".*?"/g, '')

  const outDir = path.join('./components/icons-branded', filename)
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
  const storyPath = './stories/components/IconsBranded.ts'
  let storyData = await readFile(storyPath, 'utf-8')

  storyData = storyData
    .replace('// {{icon import}}', `$&\nimport '@sinch-engage/nectary-assets/icons-branded/${filename}'`)
    .replace('// {{icon name}}', `$&\n  'sinch-icon-branded-${filename}',`)

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
