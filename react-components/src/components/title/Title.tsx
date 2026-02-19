import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

/**
 * Title size/type variants
 */
export type TitleType = 'xl' | 'l' | 'm' | 's' | 'xs'

/**
 * Semantic heading level (1-6)
 */
export type TitleLevel = '1' | '2' | '3' | '4' | '5' | '6'

/**
 * HTML heading elements
 */
export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div'

const titleVariants = cva(
  // Base styles - uses design system font and color tokens
  [
    'block',
    'text-foreground',
    '[font:var(--sinch-sys-font-desktop-title-m)]',
    '[letter-spacing:-0.02em]',
  ],
  {
    variants: {
      /**
       * Title size type
       */
      type: {
        xl: '[font:var(--sinch-sys-font-desktop-title-xl)]',
        l: '[font:var(--sinch-sys-font-desktop-title-l)]',
        m: '[font:var(--sinch-sys-font-desktop-title-m)]',
        s: '[font:var(--sinch-sys-font-desktop-title-s)]',
        xs: '[font:var(--sinch-sys-font-desktop-title-xs)]',
      },
      /**
       * Truncate text with ellipsis
       */
      ellipsis: {
        true: 'overflow-hidden text-ellipsis whitespace-nowrap',
        false: '',
      },
    },
    defaultVariants: {
      type: 'm',
      ellipsis: false,
    },
  }
)

/**
 * Maps title type to default heading level
 */
const typeToLevel: Record<TitleType, TitleLevel> = {
  xl: '1',
  l: '2',
  m: '3',
  s: '4',
  xs: '5',
}

/**
 * Maps level to heading element
 */
const levelToElement: Record<TitleLevel, TitleElement> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'>,
  VariantProps<typeof titleVariants> {
  /**
   * The content to display
   */
  children?: React.ReactNode,
  /**
   * Title size type
   * @default 'm'
   */
  type?: TitleType,
  /**
   * Semantic heading level (1-6). Determines the HTML heading element (h1-h6).
   * If not provided, defaults based on type: xl=1, l=2, m=3, s=4, xs=5
   */
  level?: TitleLevel,
  /**
   * Truncate overflowing text with ellipsis
   * @default false
   */
  ellipsis?: boolean,
  /**
   * Override the HTML element to render as
   * By default, renders as the heading element corresponding to the level
   */
  as?: TitleElement,
}

/**
 * Title component for displaying heading text with various sizes and levels.
 *
 * Supports five sizes (xl, l, m, s, xs) and six semantic heading levels (1-6).
 * The visual size (type) and semantic level can be set independently,
 * allowing for flexible typography while maintaining proper document structure.
 *
 * @example
 * ```tsx
 * // Default h3 heading with medium size
 * <Title>Page Section</Title>
 *
 * // Large heading (h2 by default)
 * <Title type="l">Main Heading</Title>
 *
 * // Small visual size but h1 semantic level
 * <Title type="s" level="1">Document Title</Title>
 *
 * // With ellipsis truncation
 * <Title ellipsis>Very long title that will be truncated...</Title>
 *
 * // Render as span (no semantic heading)
 * <Title as="span" type="m">Styled text</Title>
 * ```
 */
export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      className,
      children,
      type = 'm',
      level,
      ellipsis = false,
      as,
      ...props
    },
    ref
  ) => {
    // Determine the semantic level - default based on type if not provided
    const resolvedLevel = level ?? typeToLevel[type]

    // Determine the element to render
    const Element = as ?? levelToElement[resolvedLevel]

    return (
      <Element
        ref={ref as React.Ref<HTMLHeadingElement>}
        role="heading"
        aria-level={parseInt(resolvedLevel, 10)}
        className={cn(titleVariants({ type, ellipsis }), className)}
        {...props}
      >
        {children}
      </Element>
    )
  }
)
Title.displayName = 'Title'
