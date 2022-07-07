import type { TSinchAvatarStatusColor } from './types'

export const colorValues = ['red', 'yellow', 'green', 'grey'] as const

type TAssertColor = (value: string | null) => asserts value is TSinchAvatarStatusColor

export const assertColor: TAssertColor = (value) => {
  if (value === null || !colorValues.includes(value as any)) {
    throw new Error(`sinch-avatar-status: invalid color attribute: ${value}`)
  }
}
