import { detect } from '@antfu/ni'
import { execa } from 'execa'

export type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

function normalizePackageManager(
  detected: string | undefined
): PackageManager {
  if (detected === 'yarn@berry' || detected === 'yarn') {
    return 'yarn'
  }

  if (detected === 'pnpm@6' || detected === 'pnpm@7' || detected === 'pnpm@8' || detected === 'pnpm@9' || detected === 'pnpm') {
    return 'pnpm'
  }

  if (detected === 'bun') {
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
