import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback } from 'react'
import { cn } from '../../utils/cn'

/**
 * Chip color options from the web component.
 * These map to CSS variables: --sinch-comp-chip-color-{color}-default-background/foreground-initial
 */
export type ChipColor =
  | 'neutral'
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
 * Chip size variants
 */
export type ChipSize = 's' | 'm'

const chipVariants = cva(
  // Base styles
  [
    'inline-flex items-center',
    'gap-1',
    'select-none',
    'box-border',
    'cursor-pointer',
    'outline-none',
    'bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]',
    'text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]',
    'rounded-[var(--sinch-comp-chip-shape-radius)]',
    // Focus ring
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--sinch-comp-chip-color-outiline-focus)]',
    'focus-visible:ring-offset-2',
  ],
  {
    variants: {
      size: {
        m: [
          'h-[var(--sinch-comp-chip-size-container-m)]',
          'pl-[9px] pr-[5px]',
          '[font:var(--sinch-comp-chip-font-size-m-label)]',
        ],
        s: [
          'h-[var(--sinch-comp-chip-size-container-s)]',
          'pl-[7px] pr-[3px]',
          '[font:var(--sinch-comp-chip-font-size-s-label)]',
        ],
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  VariantProps<typeof chipVariants> {
  /**
   * Text content for the chip
   */
  text: string,
  /**
   * Color variant for the chip
   * @default 'neutral'
   */
  color?: ChipColor,
  /**
   * Use small size variant
   * @default false
   */
  small?: boolean,
  /**
   * Chip size ('s' or 'm')
   * @default 'm'
   */
  size?: ChipSize,
  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode,
  /**
   * Custom right icon (replaces the default close icon)
   */
  rightIcon?: React.ReactNode,
  /**
   * Called when the chip is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  /**
   * Called when the chip receives focus
   */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void,
  /**
   * Called when the chip loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void,
}

/**
 * Default close icon (circle-cross)
 */
const CloseIcon = ({ size }: { size: ChipSize }) => (
  <svg
    width={size === 's' ? 12 : 16}
    height={size === 's' ? 12 : 16}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.354-9.354a.5.5 0 0 1 0 .708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8 5.646 6.354a.5.5 0 1 1 .708-.708L8 7.293l1.646-1.647a.5.5 0 0 1 .708 0Z"
    />
  </svg>
)

/**
 * Chip component for displaying removable tags or labels.
 *
 * Supports multiple color variants, two sizes (s, m), optional icon,
 * and click interactions for removal.
 *
 * @example
 * ```tsx
 * // Default chip
 * <Chip text="Label" onClick={handleRemove} />
 *
 * // Colored chip
 * <Chip text="Success" color="success" onClick={handleRemove} />
 *
 * // Small chip with icon
 * <Chip text="Status" small icon={<Icon name="check" />} onClick={handleRemove} />
 * ```
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      text,
      color,
      small = false,
      size: sizeProp,
      icon,
      rightIcon,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      style,
      ...props
    },
    ref
  ) => {
    // Determine size - 'small' prop takes precedence over 'size' prop
    const size: ChipSize = small ? 's' : (sizeProp ?? 'm')

    // Build custom styles for color
    const colorStyles: Record<string, string> = {}

    if (color !== undefined && color !== 'neutral') {
      colorStyles.backgroundColor = `var(--sinch-comp-chip-color-${color}-default-background-initial)`
      colorStyles.color = `var(--sinch-comp-chip-color-${color}-default-foreground-initial)`
      // Also set the global icon color to match
      colorStyles['--sinch-global-color-icon'] = `var(--sinch-comp-chip-color-${color}-default-foreground-initial)`
    }

    // Set icon size based on chip size
    const iconSizeVar = size === 's'
      ? 'var(--sinch-comp-chip-size-icon-s)'
      : 'var(--sinch-comp-chip-size-icon-m)'

    colorStyles['--sinch-global-size-icon'] = iconSizeVar

    // Handle keyboard interaction (Space key triggers click)
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Space') {
        e.preventDefault()
        e.currentTarget.click()
      }

      onKeyDown?.(e)
    }, [onKeyDown])

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={text}
        className={cn(
          chipVariants({ size }),
          className
        )}
        style={{ ...colorStyles, ...style }}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {icon && (
          <span className="-ml-1">
            {icon}
          </span>
        )}
        <span
          className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {text}
        </span>
        <span aria-label={`Delete ${text}`}>
          {rightIcon ?? <CloseIcon size={size}/>}
        </span>
      </div>
    )
  }
)
Chip.displayName = 'Chip'
