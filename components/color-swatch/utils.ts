import { SWATCH_COLORS } from './types'
import type { SwatchColors } from './types'

export const isSwatchColor = (value: string = ''): value is SwatchColors => {
  return SWATCH_COLORS.includes(value as SwatchColors)
}

export const getSwatchColorBg = (id: SwatchColors) => {
  return `var(--sinch-comp-color-swatch-color-${id}-background)` as const
}

export const getSwatchColorFg = (id: SwatchColors) => {
  return `var(--sinch-comp-color-swatch-color-${id}-foreground)` as const
}
