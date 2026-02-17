import { detect } from '@antfu/ni'
import { execa } from 'execa'

export type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

function normalizePackageManager(
  detected: string | undefined
): PackageManager {
  if (detected === undefined || detected === null || typeof detected !== 'string') {
    return 'npm'
  }

  const id = detected.toLowerCase()

  if (id.startsWith('yarn')) {
    return 'yarn'
  }

  if (id.startsWith('pnpm')) {
    return 'pnpm'
  }

  if (id.startsWith('bun')) {
    return 'bun'
  }

  return 'npm'
}

export async function getPackageManager(cwd: string): Promise<PackageManager> {
  const detected = await detect({ programmatic: true, cwd })

  return normalizePackageManager(detected ?? undefined)
}

export async function installDependencies(
  cwd: string,
  specs: string[]
): Promise<void> {
  if (specs.length === 0) {
    return
  }

  const pm = await getPackageManager(cwd)
  const args =
    pm === 'npm'
      ? ['install', '--save', ...specs]
      : ['add', ...specs]

  console.log(`Running ${pm} ${args.join(' ')}...`)
  await execa(pm, args, { cwd, stdio: 'inherit' })
}
