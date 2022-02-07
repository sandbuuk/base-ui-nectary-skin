const { readFile, writeFile } = require('fs/promises')

const path = process.argv[2]

readFile(path, 'utf-8')
  .then((data) => JSON.parse(data))
  .then((json) => {
    json.main = 'lib/index.js'

    return json
  })
  .then((json) => JSON.stringify(json, null, 2))
  .then((data) => writeFile(path, data))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
