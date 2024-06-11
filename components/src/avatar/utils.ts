import type { TSinchAvatarStatus } from './types'

export const statusValues: readonly TSinchAvatarStatus[] = ['online', 'busy', 'away', 'offline']

export const getAvatarColorBg = (id: string): string => {
  return `var(--sinch-comp-avatar-container-color-${id}-background)`
}

export const getAvatarColorFg = (id: string): string => {
  return `var(--sinch-comp-avatar-container-color-${id}-foreground)`
}
