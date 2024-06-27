import { readdir, mkdir, rename } from 'fs/promises'
import path from 'path'
import { rimraf } from 'rimraf'

const VERSION = process.argv[process.argv.length - 1]

if (!/[0-9]\.[0-9]\.[0-9]/.test(VERSION)) {
  throw new Error(`Wrong format for version: ${VERSION}`)
}

const VERSIONS_DIR = './public/versions'

await mkdir(VERSIONS_DIR, { recursive: true })

const versionArr = VERSION.split('.')
const entries = await readdir(VERSIONS_DIR)

for (const dirVersion of entries) {
  const dirVersionArr = dirVersion.split('.')

  if (dirVersionArr[0] === versionArr[0] && dirVersionArr[1] === versionArr[1]) {
    await rimraf(path.join(VERSIONS_DIR, dirVersion))
  }
}

await rename('./docs/latest/build', path.join(VERSIONS_DIR, VERSION))
