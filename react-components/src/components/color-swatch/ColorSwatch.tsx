import { forwardRef, useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * Predefined swatch colors that map to CSS variables.
 */
export const SKINTONE_SWATCH_COLORS = [
  'skintone-dark',
  'skintone-default',
  'skintone-light',
  'skintone-light-medium',
  'skintone-medium',
  'skintone-medium-dark',
] as const

export const SWATCH_COLORS = [
  'blue',
  'dark-blue',
  'dark-gray',
  'dark-green',
  'dark-orange',
  'dark-pink',
  'dark-red',
  'dark-violet',
  'dark-yellow',
  'default',
  'gray',
  'green',
  'light-blue',
  'light-gray',
  'light-green',
  'light-orange',
  'light-pink',
  'light-red',
  'light-violet',
  'light-yellow',
  'orange',
  'pink',
  'red',
  'violet',
  'yellow',
  ...SKINTONE_SWATCH_COLORS,
] as const

export type SkinToneColor = typeof SKINTONE_SWATCH_COLORS[number]
export type SwatchColor = typeof SWATCH_COLORS[number]

/**
 * Checks if a given color name is a predefined swatch color.
 */
export const isSwatchColor = (value: string = ''): value is SwatchColor => {
  return SWATCH_COLORS.includes(value as SwatchColor)
}

/**
 * Gets the CSS variable for a swatch color's background.
 */
export const getSwatchColorBg = (id: SwatchColor) => {
  return `var(--sinch-comp-color-swatch-color-${id}-background)` as const
}

/**
 * Gets the CSS variable for a swatch color's foreground.
 */
export const getSwatchColorFg = (id: SwatchColor) => {
  return `var(--sinch-comp-color-swatch-color-${id}-foreground)` as const
}

const colorSwatchVariants = cva(
  // Base styles - the outer container
  'inline-block align-middle',
  {
    variants: {},
    defaultVariants: {},
  }
)

const colorSwatchInnerVariants = cva(
  // Inner wrapper styles - the colored circle
  [
    'w-[var(--sinch-global-size-icon,32px)]',
    'h-[var(--sinch-global-size-icon,32px)]',
    'rounded-full',
  ],
  {
    variants: {
      noColor: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      noColor: false,
    },
  }
)

export interface ColorSwatchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof colorSwatchVariants> {
  /**
   * The color name. Can be a predefined swatch color (e.g., 'blue', 'red')
   * or any valid CSS color value (e.g., '#ff0000', 'rgb(255, 0, 0)').
   */
  name?: string | null
}

export const ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>(
  ({ className, name, 'aria-label': ariaLabel, ...props }, ref) => {
    const { backgroundColor, hasColor, computedAriaLabel } = useMemo(() => {
      const hasColor = name !== null && name !== undefined && name.length > 0

      if (!hasColor) {
        return { backgroundColor: undefined, hasColor: false, computedAriaLabel: ariaLabel }
      }

      if (isSwatchColor(name)) {
        // For predefined swatch colors, use the CSS variable
        // Set aria-label to the color name if not provided or if it's also a swatch color
        const label = (ariaLabel === null || ariaLabel === undefined || isSwatchColor(ariaLabel))
          ? name
          : ariaLabel

        return {
          backgroundColor: getSwatchColorBg(name),
          hasColor: true,
          computedAriaLabel: label,
        }
      }

      // For custom colors (hex, rgb, etc.), use the value directly
      return { backgroundColor: name, hasColor: true, computedAriaLabel: ariaLabel }
    }, [name, ariaLabel])

    return (
      <div
        ref={ref}
        className={cn(colorSwatchVariants(), className)}
        aria-label={computedAriaLabel}
        role="img"
        {...props}
      >
        <div
          className={cn(colorSwatchInnerVariants({ noColor: !hasColor }))}
          style={hasColor ? { backgroundColor } : undefined}
          {...(!hasColor && {
            style: {
              background: `linear-gradient(
                45deg,
                var(--sinch-ref-color-violet-200),
                var(--sinch-ref-color-honey-200),
                var(--sinch-ref-color-grass-200),
                var(--sinch-ref-color-ocean-200),
                var(--sinch-ref-color-violet-200)
              )`,
            },
          })}
        />
      </div>
    )
  }
)
ColorSwatch.displayName = 'ColorSwatch'
