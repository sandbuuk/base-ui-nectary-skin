import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * CodeTag component displays inline code snippets with monospace font styling.
 * Uses component-specific design tokens for consistent styling.
 */

const codeTagVariants = cva(
  // Base styles - inline code styling with monospace font
  [
    'inline',
    'font-mono',
    'px-[0.25em]',
    'border',
    'rounded-[var(--sinch-comp-code-tag-shape-radius)]',
    'text-[var(--sinch-comp-code-tag-color-default-text-initial)]',
    'border-[var(--sinch-comp-code-tag-color-default-border-initial)]',
    'bg-[var(--sinch-comp-code-tag-color-default-background-initial)]',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface CodeTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof codeTagVariants> {
  /** Text content to display as code */
  text?: string
}

/**
 * CodeTag displays inline code with monospace font styling.
 *
 * @example
 * ```tsx
 * <CodeTag text="const x = 1" />
 * <CodeTag>npm install</CodeTag>
 * ```
 */
export const CodeTag = forwardRef<HTMLSpanElement, CodeTagProps>(
  ({ className, text, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(codeTagVariants(), className)}
        {...props}
      >
        {text ?? children}
      </code>
    )
  }
)
CodeTag.displayName = 'CodeTag'
