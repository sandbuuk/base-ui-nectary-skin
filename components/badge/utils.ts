import type { TSinchBadgeMode } from './types'

export const modeValues: readonly TSinchBadgeMode[] = ['square', 'circle']

type TAssertMode = (value: string | null) => asserts value is TSinchBadgeMode

export const assertMode: TAssertMode = (value) => {
  if (value === null || !modeValues.includes(value as any)) {
    throw new Error(`sinch-badge: invalid mode attribute: ${value}`)
  }
}

export const getBadgeColorBg = (id: string): string => {
  return `var(--sinch-badge-color-${id}-bg)`
}

export const getBadgeColorFg = (id: string): string => {
  return `var(--sinch-badge-color-${id}-fg)`
}

export const assertBadgeColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-badge-color-${id}-bg`).length === 0) {
    throw new Error(`Invalid sinch-badge color name: ${id}`)
  }
}
