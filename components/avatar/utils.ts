import type { TSinchAvatarStatus } from './types'

export const statusValues: readonly TSinchAvatarStatus[] = ['online', 'busy', 'away', 'offline']

type TAssertStatus = (value: string | null) => asserts value is TSinchAvatarStatus

export const assertStatus: TAssertStatus = (value) => {
  if (value === null || value.length === 0) {
    // Allow default value
    return
  }

  if (!statusValues.includes(value as any)) {
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
