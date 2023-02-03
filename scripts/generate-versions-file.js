const fs = require('fs/promises')

fs.readdir('./public/docs/versions/')
  .then((versions) => {
    const versionsImports = versions.map((ver) => {
      const key = ver.replaceAll('.', '')

      return `'${ver}': { bootstrap: () => import('components${key}/bootstrap')}`
    })

    return `export const versions = {${versionsImports.join(',\n')}}`
  })
  .then((fileContent) => fs.writeFile('./docs/shell/versions.ts', fileContent))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
