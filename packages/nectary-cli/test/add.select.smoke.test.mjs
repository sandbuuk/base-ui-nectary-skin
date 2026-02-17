import assert from 'node:assert'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'

const CLI_PATH = path.join(process.cwd(), 'dist/index.js')

test('add select writes Select/Search.tsx and content includes SelectSearch and @nectary/components', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nectary-add-'))

  try {
    const pkg = {
      name: 'test-app',
      private: true,
      dependencies: {
        react: '^18.0.0',
        '@nectary/components': 'workspace:*',
      },
    }

    fs.writeFileSync(
      path.join(tempDir, 'package.json'),
      JSON.stringify(pkg, null, 2),
      'utf8'
    )

    const result = spawnSync(
      'node',
      [CLI_PATH, 'add', 'select', '--path', 'src/components/nectary'],
      { cwd: tempDir, encoding: 'utf8' }
    )

    assert.strictEqual(result.status, 0, `CLI exited with ${result.status}. stderr: ${result.stderr}`)

    const searchPath = path.join(tempDir, 'src/components/nectary/Select/Search.tsx')

    assert.ok(fs.existsSync(searchPath), `Expected file at ${searchPath}`)

    const content = fs.readFileSync(searchPath, 'utf8')

    assert.ok(content.includes('SelectSearch'), 'Expected SelectSearch in file')
    assert.ok(content.includes('@nectary/components'), 'Expected @nectary/components in file')
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true })
  }
})
