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

await Promise.allSettled(iconDirs.map(async (iconName) => {
  const pathToHtml = path.join(iconsDir, iconName, 'template.html')

  const iconHtml = await fs.readFile(pathToHtml)

  await fs.writeFile(path.join(componentsDir, `${iconName}.html`), iconHtml)
}))

const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
const formatNameToJSVar = (name: string) => name.replace(/-/g, '').replace(/[0-9]/g, (a) => ones[parseInt(a)])

const switchFileContent = `
${iconDirs.map((iconName) => `import ${formatNameToJSVar(iconName)}Html from "./icon-templates/${iconName}.html"`).join(';\n')}

export const iconList = [${iconDirs.map((iconName) => `"${iconName}"`).join(',')}] as const;
export type IconNames = typeof iconList[number];

export const iconNameToHtml = (name: string) => {
  switch (name) {
    ${iconDirs.map((iconName) => `
      case "${iconName}":
        return ${formatNameToJSVar(iconName)}Html
      `).join('\n')}
  }
}
`

await fs.writeFile(path.join(componentsDir, `..`, `switchFile.ts`), switchFileContent)
