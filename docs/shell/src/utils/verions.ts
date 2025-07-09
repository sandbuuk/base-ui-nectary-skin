import { versions } from '../../versions'

export * from '../../versions'

export const versionKeys = Object.keys(versions).sort((a, b) => {
  const aParts = a.split('.').map(Number)
  const bParts = b.split('.').map(Number)

  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] !== undefined && !Number.isNaN(aParts[i]) ? aParts[i] : 0
    const bPart = bParts[i] !== undefined && !Number.isNaN(bParts[i]) ? bParts[i] : 0

    if (aPart !== bPart) {
      return aPart - bPart
    }
  }

  return 0
})

export const latestVersion = versionKeys[versionKeys.length - 1]
