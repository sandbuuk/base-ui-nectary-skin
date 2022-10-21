export const getChipColorBg = (id: string): string => {
  return `var(--sinch-chip-color-${id}-bg)`
}

export const getChipColorFg = (id: string): string => {
  return `var(--sinch-chip-color-${id}-fg)`
}

export const assertChipColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-chip-color-${id}-bg`).length === 0) {
    throw new Error(`Invalid sinch-chip color name: ${id}`)
  }
}
