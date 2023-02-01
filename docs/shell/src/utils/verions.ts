import { versions } from '../../versions'

export * from '../../versions'

export const versionKeys = Object.keys(versions)

export const latestVersion = versionKeys[versionKeys.length - 1]
