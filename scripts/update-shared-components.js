/* eslint-disable node/no-sync */
const fs = require('fs')

const indexContent = fs.readFileSync('components/index.ts', 'utf8').split('\n')
const result = {}

for (const line of indexContent) {
  const match = line.match(/^import '\.\/(.+)'$/)

  if (match === null) {
    continue
  }

  result[`@nectary/components/${match[1]}`] = {
    requiredVersion: '*',
  }
}

fs.writeFileSync('components/shared.json', `${JSON.stringify(result, null, 2)}\n`)
