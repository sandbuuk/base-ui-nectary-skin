import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * Tag color options from the web component.
 * These map to CSS variables: --sinch-comp-tag-color-{color}-background/foreground
 */
export type TagColor =
  | 'default'
  | 'gray'
  | 'light-gray'
  | 'dark-gray'
  | 'blue'
  | 'light-blue'
  | 'dark-blue'
  | 'green'
  | 'light-green'
  | 'dark-green'
  | 'yellow'
  | 'light-yellow'
  | 'dark-yellow'
  | 'orange'
  | 'light-orange'
  | 'dark-orange'
  | 'red'
  | 'light-red'
  | 'dark-red'
  | 'pink'
  | 'light-pink'
  | 'dark-pink'
  | 'violet'
  | 'light-violet'
  | 'dark-violet'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'

/**
 * Tag size variants
 */
export type TagSize = 's' | 'm'

const tagVariants = cva(
  // Base styles
  [
    'inline-flex items-center',
    'gap-1',
    'select-none',
    'box-border',
    'bg-[var(--sinch-comp-tag-color-default-background)]',
    'text-[color:var(--sinch-comp-tag-color-default-foreground)]',
    'rounded-[var(--sinch-comp-tag-shape-radius)]',
  ],
  {
    variants: {
      size: {
        m: [
          'h-[var(--sinch-comp-tag-size-container-m)]',
          'px-[9px]',
          '[font:var(--sinch-comp-tag-font-size-m-label)]',
        ],
        s: [
          'h-[var(--sinch-comp-tag-size-container-s)]',
          'px-2',
          '[font:var(--sinch-comp-tag-font-size-s-label)]',
        ],
      },
      ellipsis: {
        true: 'inline',
        false: 'inline-flex',
      },
    },
    defaultVariants: {
      size: 'm',
      ellipsis: false,
    },
  }
)

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  VariantProps<typeof tagVariants> {
  /**
   * Text content for the tag
   */
  text?: string,
  /**
   * Color variant for the tag
   * @default 'default'
   */
  color?: TagColor,
  /**
   * Use small size variant
   * @default false
   */
  small?: boolean,
  /**
   * Tag size ('s' or 'm')
   * @default 'm'
   */
  size?: TagSize,
  /**
   * Enable text truncation with ellipsis
   * @default false
   */
  ellipsis?: boolean,
  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode,
}

/**
 * Tag component for displaying labels, categories, or status indicators.
 *
 * Supports multiple color variants, two sizes (s, m), optional icon,
 * and text truncation with ellipsis.
 *
 * @example
 * ```tsx
 * // Default tag
 * <Tag text="Label" />
 *
 * // Colored tag
 * <Tag text="Success" color="success" />
 *
 * // Small tag with icon
 * <Tag text="Status" small icon={<Icon name="check" />} />
 *
 * // Tag with ellipsis
 * <Tag text="Very long label text" ellipsis />
 * ```
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      text,
      color,
      small = false,
      size: sizeProp,
      ellipsis = false,
      icon,
      children,
      style,
      ...props
    },
    ref
  ) => {
    // Determine size - 'small' prop takes precedence over 'size' prop
    const size: TagSize = small ? 's' : (sizeProp ?? 'm')

    // Build custom styles for color
    const colorStyles: Record<string, string> = {}

    if (color !== undefined && color !== 'default') {
      colorStyles.backgroundColor = `var(--sinch-comp-tag-color-${color}-background)`
      colorStyles.color = `var(--sinch-comp-tag-color-${color}-foreground)`
      // Also set the global icon color to match
      colorStyles['--sinch-global-color-icon'] = `var(--sinch-comp-tag-color-${color}-foreground)`
    }

    // Set icon size based on tag size
    const iconSizeVar = size === 's'
      ? 'var(--sinch-comp-tag-size-icon-s)'
      : 'var(--sinch-comp-tag-size-icon-m)'

    colorStyles['--sinch-global-size-icon'] = iconSizeVar

    return (
      <div
        ref={ref}
        className={cn(
          tagVariants({ size, ellipsis }),
          className
        )}
        style={{ ...colorStyles, ...style }}
        {...props}
      >
        {icon && (
          <span className="-ml-1">
            {icon}
          </span>
        )}
        <span
          className={cn(
            'flex-1',
            ellipsis && 'overflow-hidden text-ellipsis whitespace-nowrap'
          )}
        >
          {text ?? children}
        </span>
      </div>
    )
  }
)
Tag.displayName = 'Tag'
