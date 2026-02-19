import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * Text size/type variants
 */
export type TextType = 'm' | 's' | 'xs' | 'xxs'

/**
 * Elements that Text can render as
 */
export type TextElement = 'p' | 'span' | 'div' | 'label'

const textVariants = cva(
  // Base styles - uses design system font and color tokens
  'text-foreground [font:var(--sinch-sys-font-body-m)]',
  {
    variants: {
      /**
       * Text size type
       */
      type: {
        m: '[font:var(--sinch-sys-font-body-m)]',
        s: '[font:var(--sinch-sys-font-body-s)]',
        xs: '[font:var(--sinch-sys-font-body-xs)]',
        xxs: '[font:var(--sinch-sys-font-body-xxs)]',
      },
      /**
       * Display mode - block (default) or inline
       */
      inline: {
        true: 'inline',
        false: 'block',
      },
      /**
       * Emphasized text (bolder weight) - only available for 'm' and 's' sizes
       */
      emphasized: {
        true: '',
        false: '',
      },
      /**
       * Truncate text with ellipsis
       */
      ellipsis: {
        true: 'overflow-hidden text-ellipsis whitespace-nowrap',
        false: '',
      },
    },
    compoundVariants: [
      // Emphasized variants - only apply emphasized font for m and s sizes
      {
        type: 'm',
        emphasized: true,
        className: '[font:var(--sinch-sys-font-body-emphasize)]',
      },
      {
        type: 's',
        emphasized: true,
        className: '[font:var(--sinch-sys-font-body-emphasize-s)]',
      },
    ],
    defaultVariants: {
      type: 'm',
      inline: false,
      emphasized: false,
      ellipsis: false,
    },
  }
)

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'>,
  VariantProps<typeof textVariants> {
  /**
   * The content to display
   */
  children?: React.ReactNode,
  /**
   * Text size type
   * @default 'm'
   */
  type?: TextType,
  /**
   * Display as inline element (span-like) instead of block (paragraph-like)
   * @default false
   */
  inline?: boolean,
  /**
   * Apply emphasized (bolder) styling. Only works with 'm' and 's' sizes.
   * @default false
   */
  emphasized?: boolean,
  /**
   * Truncate overflowing text with ellipsis
   * @default false
   */
  ellipsis?: boolean,
  /**
   * The HTML element to render as
   * @default 'p' when not inline, 'span' when inline
   */
  as?: TextElement,
}

/**
 * Text component for displaying body text with various sizes and styles.
 *
 * Supports four sizes (m, s, xs, xxs), emphasized styling for m and s sizes,
 * inline/block display modes, and text truncation with ellipsis.
 *
 * @example
 * ```tsx
 * // Default paragraph text
 * <Text>Hello World</Text>
 *
 * // Small emphasized text
 * <Text type="s" emphasized>Important note</Text>
 *
 * // Inline text with ellipsis
 * <Text inline ellipsis>Long text that will truncate...</Text>
 *
 * // Render as a label
 * <Text as="label" type="s">Form field label</Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      children,
      type = 'm',
      inline = false,
      emphasized = false,
      ellipsis = false,
      as,
      ...props
    },
    ref
  ) => {
    // Default element: 'span' when inline, 'p' when block
    const Element = as ?? (inline ? 'span' : 'p')

    return (
      <Element
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(
          textVariants({ type, inline, emphasized, ellipsis }),
          className
        )}
        {...props}
      >
        {children}
      </Element>
    )
  }
)
Text.displayName = 'Text'
