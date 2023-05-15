import { readdir, writeFile } from 'fs/promises'

const entries = await readdir('./public/docs/versions/', { withFileTypes: true })

const versionToKey = (version: string) => {
  return version.replaceAll('.', '_')
}
const sanitizeVersion = (version: string) => {
  return version.split('.').slice(0, -1).concat('x').join('.')
}

const versionsImports = entries
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const ver = entry.name
    const key = versionToKey(ver)

    return `'${sanitizeVersion(ver)}': { bootstrap: () => import('components${key}/bootstrap')}`
  })

const fileContent = `export const versions = {${versionsImports.join(',\n')}}`

await writeFile('./docs/shell/versions.ts', fileContent)
