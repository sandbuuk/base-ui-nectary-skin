import { readdir, mkdir, rename } from 'fs/promises'
import path from 'path'
import pkg from '@sinch-engage/nectary/package.json' assert { type: 'json' }
import { rimraf } from 'rimraf'

const VERSIONS_DIR = './public/versions'

await mkdir(VERSIONS_DIR, { recursive: true })

const versionArr = pkg.version.split('.')
const entries = await readdir(VERSIONS_DIR)

for (const dirVersion of entries) {
  const dirVersionArr = dirVersion.split('.')

  if (dirVersionArr[0] === versionArr[0] && dirVersionArr[1] === versionArr[1]) {
    await rimraf(path.join(VERSIONS_DIR, dirVersion))
  }
}

await rename('./docs/latest/build', path.join(VERSIONS_DIR, pkg.version))
