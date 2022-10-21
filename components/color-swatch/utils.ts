export const getSwatchColorBg = (id: string): string => {
  return `var(--sinch-color-swatch-color-${id}-bg)`
}

export const getSwatchColorFg = (id: string): string => {
  return `var(--sinch-color-swatch-color-${id}-fg)`
}

export const assertSwatchColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-color-swatch-color-${id}-bg`).length === 0) {
    throw new Error(`Invalid sinch-color-swatch color name: ${id}`)
  }
}
