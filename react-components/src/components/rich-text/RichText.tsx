import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useMemo, useCallback } from 'react'
import { cn } from '../../utils/cn'
import { parseRichText, type RichTextNode } from './utils'

/**
 * Tag color options for chips
 */
export type TagColor =
  | 'default'
  | 'blue'
  | 'danger'
  | 'dark-blue'
  | 'dark-gray'
  | 'dark-green'
  | 'dark-orange'
  | 'dark-pink'
  | 'dark-red'
  | 'dark-violet'
  | 'dark-yellow'
  | 'gray'
  | 'green'
  | 'info'
  | 'light-blue'
  | 'light-gray'
  | 'light-green'
  | 'light-orange'
  | 'light-pink'
  | 'light-red'
  | 'light-violet'
  | 'light-yellow'
  | 'orange'
  | 'pink'
  | 'red'
  | 'success'
  | 'violet'
  | 'warning'
  | 'yellow'

/**
 * Text size options
 */
export type RichTextSize = 'm' | 's' | 'xs' | 'xxs'

/**
 * Chip resolver callback type
 */
export type ChipResolver = (tagName: string) => { icon?: string, color?: string } | undefined

const richTextVariants = cva(
  // Base styles
  [
    'block',
  ],
  {
    variants: {
      size: {
        m: '[font:var(--sinch-sys-font-body-m)]',
        s: '[font:var(--sinch-sys-font-body-s)]',
        xs: '[font:var(--sinch-sys-font-body-xs)]',
        xxs: '[font:var(--sinch-sys-font-body-xxs)]',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

export interface RichTextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
  VariantProps<typeof richTextVariants> {
  /**
   * Markdown-like text content to render
   */
  text: string,
  /**
   * Text size variant
   * @default 'm'
   */
  size?: RichTextSize,
  /**
   * Default color for chips
   */
  chipColor?: TagColor,
  /**
   * Default icon for chips
   */
  chipIcon?: string,
  /**
   * Resolver callback for chip properties based on tag name
   */
  chipResolver?: ChipResolver,
  /**
   * Callback when an element (link, chip, etc.) is clicked
   */
  onElementClick?: (e: React.MouseEvent, element: HTMLElement) => void,
}

/**
 * RichText component for rendering markdown-like formatted text.
 *
 * Supports:
 * - Bold (**text**)
 * - Italic (*text*)
 * - Strikethrough (~~text~~)
 * - Links [text](url)
 * - Code (`code`)
 * - Emoji (unicode)
 * - Chips/Tags ({{tagname}})
 * - Lists (- item or 1. item)
 *
 * @example
 * ```tsx
 * <RichText text="Hello **world**!" />
 * <RichText text="Visit [our site](https://example.com)" size="s" />
 * <RichText text="Status: {{pending}}" chipColor="warning" />
 * ```
 */
export const RichText = forwardRef<HTMLDivElement, RichTextProps>(
  (
    {
      className,
      text,
      size = 'm',
      chipColor,
      chipIcon,
      chipResolver,
      onElementClick,
      ...props
    },
    ref
  ) => {
    // Parse the text into structured nodes
    const nodes = useMemo(() => parseRichText(text), [text])

    // Handle click on interactive elements
    const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement

      // Check if click was on an interactive element
      if (
        target.tagName === 'A' ||
        target.closest('[data-chip]') !== null ||
        target.closest('a') !== null
      ) {
        onElementClick?.(e, target)
      }
    }, [onElementClick])

    // Render a single node recursively
    const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
      switch (node.type) {
        case 'text':
          return node.content

        case 'bold':
          return (
            <span key={index} className="[font-weight:var(--sinch-ref-typography-font-weight-700)]">
              {node.children?.map((child, i) => renderNode(child, i))}
            </span>
          )

        case 'italic':
          return (
            <span key={index} className="italic">
              {node.children?.map((child, i) => renderNode(child, i))}
            </span>
          )

        case 'strikethrough':
          return (
            <span key={index} className="line-through">
              {node.children?.map((child, i) => renderNode(child, i))}
            </span>
          )

        case 'code':
          return (
            <code
              key={index}
              className={cn(
                '[font:var(--sinch-comp-code-tag-font-text)]',
                'leading-inherit text-[length:inherit]',
                'border border-[var(--sinch-comp-code-tag-color-default-border-initial)]',
                'bg-[var(--sinch-comp-code-tag-color-default-background-initial)]',
                'px-[0.25em] rounded-[var(--sinch-comp-code-tag-shape-radius)]'
              )}
            >
              {node.content}
            </code>
          )

        case 'link':
          return (
            <a
              key={index}
              href={node.href}
              className={cn(
                '[font:var(--sinch-comp-link-default-font-initial)]',
                'text-[var(--sinch-comp-link-color-default-text-initial)]',
                'underline',
                'hover:text-[var(--sinch-comp-link-color-default-text-hover)]',
                'hover:no-underline'
              )}
              target={node.external === true ? '_blank' : undefined}
              rel={node.external === true ? 'noopener noreferrer' : undefined}
            >
              {node.content}
            </a>
          )

        case 'chip': {
          const resolved = chipResolver?.(node.content ?? '')
          const color = resolved?.color ?? chipColor
          const icon = resolved?.icon ?? chipIcon

          const bgColor = color !== undefined ? `var(--sinch-comp-tag-color-${color}-background)` : undefined
          const fgColor = color !== undefined ? `var(--sinch-comp-tag-color-${color}-foreground)` : undefined

          return (
            <span
              key={index}
              data-chip
              className={cn(
                'inline-flex items-center align-middle',
                'h-[var(--sinch-comp-chip-size-container-m)]',
                'px-[9px] gap-1',
                'rounded-[var(--sinch-comp-chip-shape-radius)]',
                'bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]',
                'text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]',
                '[font:var(--sinch-comp-chip-font-size-m-label)]',
                'select-none'
              )}
              style={{
                backgroundColor: bgColor,
                color: fgColor,
              }}
            >
              {icon !== undefined && (
                <span
                  className="w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)]"
                  style={{ color: fgColor }}
                >
                  {/* Icon placeholder - would use Icon component */}
                </span>
              )}
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {node.content}
              </span>
            </span>
          )
        }

        case 'emoji':
          return (
            <span
              key={index}
              className="inline w-[1em] h-[1em] align-[-0.2em]"
              role="img"
              aria-label={node.content}
            >
              {node.content}
            </span>
          )

        case 'linebreak':
          return <br key={index} />

        case 'paragraph':
          return (
            <p key={index} className="m-0 [&+p]:mt-[0.5em] [&+ul]:mt-[0.5em] [&+ol]:mt-[0.5em]">
              {node.children?.map((child, i) => renderNode(child, i))}
            </p>
          )

        case 'list':
          if (node.ordered === true) {
            return (
              <ol key={index} className="m-0 pl-[1.5em] [p+&]:mt-[0.5em]">
                {node.children?.map((child, i) => renderNode(child, i))}
              </ol>
            )
          }
          return (
            <ul key={index} className="m-0 pl-[1.5em] [p+&]:mt-[0.5em]">
              {node.children?.map((child, i) => renderNode(child, i))}
            </ul>
          )

        case 'listItem':
          return (
            <li key={index}>
              {node.children?.map((child, i) => renderNode(child, i))}
            </li>
          )

        default:
          return null
      }
    }

    return (
      <div
        ref={ref}
        role="paragraph"
        className={cn(
          richTextVariants({ size }),
          'text-[var(--sinch-global-color-text,var(--sinch-sys-color-text-default))]',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {nodes.map((node, index) => renderNode(node, index))}
      </div>
    )
  }
)
RichText.displayName = 'RichText'
