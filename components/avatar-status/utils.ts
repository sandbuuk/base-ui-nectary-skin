import type { TSinchAvatarStatusColor } from './types'

export const colorValues: readonly TSinchAvatarStatusColor[] = ['red', 'yellow', 'green', 'grey']

type TAssertColor = (value: string | null) => asserts value is TSinchAvatarStatusColor

export const assertColor: TAssertColor = (value) => {
  if (value === null || !colorValues.includes(value as any)) {
    throw new Error(`sinch-avatar-status: invalid color attribute: ${value}`)
  }
}
