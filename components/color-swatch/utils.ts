export const getSwatchColorBg = (id: string): string => {
  return `var(--sinch-comp-color-swatch-color-${id}-background)`
}

export const getSwatchColorFg = (id: string): string => {
  return `var(--sinch-comp-color-swatch-color-${id}-foreground)`
}

export const assertSwatchColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-comp-color-swatch-color-${id}-background`).length === 0) {
    throw new Error(`Invalid sinch-color-swatch color name: ${id}`)
  }
}
