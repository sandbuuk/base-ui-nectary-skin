import type { TSinchAvatarSize, TSinchAvatarStatus } from './types'

export const sizeValues: readonly TSinchAvatarSize[] = ['l', 'm', 's']
export const statusValues: readonly TSinchAvatarStatus[] = ['online', 'busy', 'away', 'offline']

type TAssertSize = (value: string | null) => asserts value is TSinchAvatarSize

export const assertSize: TAssertSize = (value) => {
  if (value === null || !sizeValues.includes(value as any)) {
    throw new Error(`sinch-avatar: invalid size attribute: ${value}`)
  }
}

type TAssertStatus = (value: string | null) => asserts value is TSinchAvatarStatus

export const assertStatus: TAssertStatus = (value) => {
  if (value === null || !statusValues.includes(value as any)) {
    throw new Error(`sinch-avatar: invalid status attribute: ${value}`)
  }
}

export const getAvatarColorBg = (id: string): string => {
  return `var(--sinch-avatar-color-${id}-bg)`
}

export const getAvatarColorFg = (id: string): string => {
  return `var(--sinch-avatar-color-${id}-fg)`
}

export const assertAvatarColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-avatar-color-${id}-bg`).length === 0) {
    throw new Error(`Invalid sinch-avatar color name: ${id}`)
  }
}
