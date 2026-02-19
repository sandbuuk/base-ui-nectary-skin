import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback } from 'react'
import { cn } from '../../utils/cn'
import type { TagColor } from './RichText'

const chipVariants = cva(
  // Base styles
  [
    'inline-flex items-center',
    'h-[var(--sinch-comp-chip-size-container-m)]',
    'px-[5px] pl-[9px] gap-1',
    'rounded-[var(--sinch-comp-chip-shape-radius)]',
    'bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]',
    'text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]',
    '[font:var(--sinch-comp-chip-font-size-m-label)]',
    'select-none',
    'outline-none',
    'align-middle',
  ],
  {
    variants: {
      readonly: {
        true: 'pr-[9px]',
        false: 'pr-[5px]',
      },
    },
    defaultVariants: {
      readonly: false,
    },
  }
)

/**
 * Close icon SVG
 */
const CloseIcon = () => (
  <svg
    width="16"
    height="16"
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

export interface RichTextareaChipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
  VariantProps<typeof chipVariants> {
  /**
   * Text content for the chip
   */
  text: string,
  /**
   * Whether the chip is readonly (hides the close button)
   * @default false
   */
  readonly?: boolean,
  /**
   * Color using the tag color system
   */
  color?: TagColor,
  /**
   * Icon name (displayed before text)
   */
  icon?: React.ReactNode,
  /**
   * Called when the chip is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void,
  /**
   * Called when the close button is clicked
   */
  onRemove?: (e: React.MouseEvent<HTMLSpanElement>) => void,
}

/**
 * RichTextareaChip component for displaying chips within rich text editors.
 *
 * Used internally by RichTextarea but can also be used standalone.
 * Supports custom colors, icons, and a remove button.
 *
 * @example
 * ```tsx
 * <RichTextareaChip text="username" />
 * <RichTextareaChip text="status" color="success" readonly />
 * <RichTextareaChip text="tag" onRemove={handleRemove} />
 * ```
 */
export const RichTextareaChip = forwardRef<HTMLSpanElement, RichTextareaChipProps>(
  (
    {
      className,
      text,
      readonly = false,
      color,
      icon,
      onClick,
      onRemove,
      style,
      ...props
    },
    ref
  ) => {
    // Build color styles
    const colorStyles: Record<string, string> = {}

    if (color !== undefined && color !== 'default') {
      colorStyles.backgroundColor = `var(--sinch-comp-tag-color-${color}-background)`
      colorStyles.color = `var(--sinch-comp-tag-color-${color}-foreground)`
      colorStyles['--sinch-global-color-icon'] = `var(--sinch-comp-tag-color-${color}-foreground)`
    }

    // Handle close button click
    const handleCloseClick = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()
      onRemove?.(e)
    }, [onRemove])

    // Handle chip click
    const handleClick = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
      // Don't fire chip click if the close icon was clicked
      const target = e.target as HTMLElement

      if (target.closest('[data-close-icon]') !== null) {
        return
      }

      onClick?.(e)
    }, [onClick])

    return (
      <span
        ref={ref}
        role="button"
        aria-label={text}
        contentEditable={false}
        className={cn(
          chipVariants({ readonly }),
          className
        )}
        style={{ ...colorStyles, ...style }}
        onClick={handleClick}
        {...props}
      >
        {icon !== undefined && (
          <span
            className="w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)] flex items-center justify-center"
          >
            {icon}
          </span>
        )}
        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {text}
        </span>
        {readonly !== true && (
          <span
            data-close-icon
            className="cursor-pointer flex items-center justify-center"
            onClick={handleCloseClick}
            role="button"
            aria-label={`Remove ${text}`}
          >
            <CloseIcon />
          </span>
        )}
      </span>
    )
  }
)
RichTextareaChip.displayName = 'RichTextareaChip'
