import fs from 'node:fs/promises'
import path from 'node:path'

const dirname = (import.meta as any).dirname as string

const iconsDir = path.join(dirname, '..', 'assets', 'icons')
const componentsDir = path.join(dirname, '..', 'components', 'icon-alt-one', 'icon-templates')

async function getIcons(): Promise<string[]> {
  const components: string[] = []

  for (const file of await fs.readdir(iconsDir)) {
    const stat = await fs.stat(path.join(iconsDir, file))
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

const iconDirs = await getIcons()

const iconMap: Record<string, string> = {}

for (const iconName of iconDirs) {
  const pathToHtml = path.join(iconsDir, iconName, 'template.html')

  const iconHtml = await fs.readFile(pathToHtml)

  iconMap[iconName] = iconHtml.toString()
}

const iconNamesFileName = 'iconNames'

const iconNameToHtmlFileContent = `
/* Generated file, use generate-icon-alt-contents script to update it!!  */
import type { IconNames } from "./${iconNamesFileName}"

export const iconNameToHtml = (name: IconNames) => {
  switch (name) {
    ${Object.entries(iconMap).map(([name, content]) => `
      case '${name}':
        return \`${content}\`
      `).join('\n')}
  }
}
`

await fs.writeFile(path.join(componentsDir, `..`, `iconNameToHtml.ts`), iconNameToHtmlFileContent)

const iconNamesFileContent = `
/* Generated file use generate-icon-alt-contents script to update it!!  */
export const iconList = [${Object.keys(iconMap).map((iconName) => `'${iconName}'`).join(',\n')}] as const;

export type IconNames = typeof iconList[number];
`

await fs.writeFile(path.join(componentsDir, `..`, `${iconNamesFileName}.ts`), iconNamesFileContent)
