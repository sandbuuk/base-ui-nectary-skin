export const getChipColorBg = (id: string): string => {
  return `var(--sinch-comp-chip-color-${id}-default-background-initial)`
}

export const getChipColorFg = (id: string): string => {
  return `var(--sinch-comp-chip-color-${id}-default-foreground-initial)`
}

export const assertChipColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-comp-chip-color-${id}-default-background-initial`).length === 0) {
    throw new Error(`Invalid sinch-chip color name: ${id}`)
  }
}
