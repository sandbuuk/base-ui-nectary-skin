export const getSwatchColorBg = (id: string): string => {
  return `var(--sinch-comp-color-swatch-color-${id}-background)`
}

export const getSwatchColorFg = (id: string): string => {
  return `var(--sinch-comp-color-swatch-color-${id}-foreground)`
}
