import fs from 'node:fs/promises'
import path from 'node:path'
// @ts-ignore - no typedefs for that package
import SVGFixer from 'oslllo-svg-fixer'
import svgtofont from 'svgtofont'

const svgIconDir = path.join('svg-icons')
const fontsDir = path.join('fonts')
const componentsDir = path.join('components')
const docsDir = path.join('docs', 'latest', 'src', 'pages', 'components')
const bucketDir = 'iconBuckets'
const tmpDir = 'iconTmp'

const allowReject = async (promise: Promise<any>) => {
  try {
    return await promise
  } catch (e) {
    if (e instanceof Error) {
      console.warn(e.message)
    }
  }
}

async function getIconsFiles(): Promise<string[]> {
  const components: string[] = []

  await import('./clean-icons-name')

  for (const file of await fs.readdir(svgIconDir)) {
    if (file.endsWith('.svg')) {
      components.push(file)
    }
  }

  return components
}

const processIconsToFont = (name: string, iconNames: string[]) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<void>(async (res, rej) => {
    // Copy icon files to bucket
    console.log(name, 'Copying Icons to bucket...')

    const currentBucketDir = path.join(bucketDir, name)

    await allowReject(fs.mkdir(currentBucketDir))

    await Promise.all(iconNames.map((iconName) =>
      fs.copyFile(path.join(svgIconDir, iconName), path.join(currentBucketDir, iconName)))).catch(rej)
    console.log(name, 'Done copying Icons to bucket')

    // Fix SVGs
    console.log(name, 'Fixing SVGs...')

    const currentTmpPath = path.join(tmpDir, name)

    await allowReject(fs.mkdir(currentTmpPath))

    // Fonts can't support some modern SVG attributes like fill-rule="evenodd", this library makes it more compatible.
    await SVGFixer(currentBucketDir, currentTmpPath, { showProgressBar: true }).fix().then(() => {
      console.log(name, 'Done Fixing SVGs')
    }).catch(rej)

    const finalIconSrc = path.resolve(process.cwd(), currentTmpPath)
    const finalFontsDir = path.resolve(process.cwd(), fontsDir)
    const fontName = `sinch-icon-${name}`

    console.log(name, 'Creating fonts...')

    await svgtofont({
      src: finalIconSrc, // svg path
      dist: finalFontsDir, // output path
      fontName, // font name
      svgicons2svgfont: {
        normalize: true,
        // It needs to be this high for the icons not to look broken
        // see: https://github.com/jaywcjlove/svgtofont/issues/209
        fontHeight: 1000,
      },
      // if we want to generate css classes for the font, not needed with "useNameAsUnicode" imo
      css: false,
      useNameAsUnicode: true,
      // Generate a website to test the font
      // website: {
      //   title: 'svgtofont',
      //   version: '0',
      //   links: [
      //     {
      //       title: 'Font Class',
      //       url: 'index.html',
      //     },
      //     {
      //       title: 'Unicode',
      //       url: 'unicode.html',
      //     },
      //   ],
      // },
    }).catch(rej)

    console.log(name, 'Done Creating Fonts')
    console.log(name, 'Cleanup extra font files, keeping only woff and woff2...')
    await allowReject(fs.rm(path.join(finalFontsDir, `${fontName}.eot`)))
    await allowReject(fs.rm(path.join(finalFontsDir, `${fontName}.svg`)))
    await allowReject(fs.rm(path.join(finalFontsDir, `${fontName}.symbol.svg`)))
    await allowReject(fs.rm(path.join(finalFontsDir, `${fontName}.ttf`)))
    console.log(name, 'Done cleaning up extra font files')
    res()
  })
}

const generateTypeFile = async (iconFiles: string[]) => {
  console.log('Generate type file...')

  const typeTemplate = `
export type TSinchIcons = ${iconFiles.map((file) => `"${file.replace('.svg', '')}"`).join('\n | ')}
  `

  await fs.writeFile(path.join(componentsDir, 'icon', 'generated-icon-type.ts'), typeTemplate)
  console.log('Done generating type file')
}

const generateDocUtils = async (iconFiles: string[]) => {
  console.log('Generate Doc icon list...')

  const template = `
import type { TSinchIcons } from '@nectary/components/icon/generated-icon-type'
export const sinchIconNames: TSinchIcons[] = [${iconFiles.map((file) => `"${file.replace('.svg', '')}"`).join(',\n')}]
  `

  await fs.writeFile(path.join(docsDir, 'Icon', 'examples', 'icons-list.ts'), template)
  console.log('Done generating Doc icon list')
}

try {
  const iconFiles = await getIconsFiles()

  const [zeroToD, eToO, pToZ] = iconFiles.reduce<[string[], string[], string[]]>(
    (acc, fileName) => {
    // ignore "fa-" part of file since 90% of files has it.
      if (/^(fa-|(?!fa-))[0-9a-d]/.test(fileName)) {
        return [[...acc[0], fileName], acc[1], acc[2]] as [string[], string[], string[]]
      }

      if (/^(fa-|(?!fa-))[e-o]/.test(fileName)) {
        return [acc[0], [...acc[1], fileName], acc[2]] as [string[], string[], string[]]
      }

      if (/^(fa-|(?!fa-))[p-z]/.test(fileName)) {
        return [acc[0], acc[1], [...acc[2], fileName]] as [string[], string[], string[]]
      }
      throw `${fileName} didn't fit in any bucket`
    }, [[], [], []]
  )

  console.log('Icons in zeroToD:', zeroToD.length)
  console.log('Icons in fToO:', eToO.length)
  console.log('Icons in pToZ:', pToZ.length)

  await allowReject(fs.mkdir(bucketDir))
  await allowReject(fs.mkdir(tmpDir))

  await processIconsToFont('zeroToD', zeroToD)
  await processIconsToFont('eToO', eToO)
  await processIconsToFont('pToZ', pToZ)

  await generateTypeFile(iconFiles)
  await generateDocUtils(iconFiles)
} catch (error) {
  console.warn(error)
}

console.log('cleanup!')
await allowReject(fs.rm(tmpDir, { recursive: true, force: true }))
await allowReject(fs.rm(bucketDir, { recursive: true, force: true }))
console.log('done!')

