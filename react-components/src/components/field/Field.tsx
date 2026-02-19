import { forwardRef, useCallback, useId, useRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const fieldVariants = cva(
  // Base styles
  'block w-full',
  {
    variants: {
      disabled: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

const labelVariants = cva(
  // Label text styles
  [
    'font-[var(--sinch-comp-field-font-label)]',
    'overflow-hidden text-ellipsis whitespace-nowrap',
  ],
  {
    variants: {
      disabled: {
        true: 'text-[var(--sinch-comp-field-color-disabled-label-initial)]',
        false: 'text-[var(--sinch-comp-field-color-default-label-initial)]',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

const optionalVariants = cva(
  // Optional text styles
  [
    'font-[var(--sinch-comp-field-font-optional)]',
    'overflow-hidden text-ellipsis whitespace-nowrap',
    'flex-1 text-right',
  ],
  {
    variants: {
      disabled: {
        true: 'text-[var(--sinch-comp-field-color-disabled-optional-initial)]',
        false: 'text-[var(--sinch-comp-field-color-default-optional-initial)]',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

const additionalVariants = cva(
  // Additional text styles
  [
    'font-[var(--sinch-comp-field-font-additional)]',
    'overflow-hidden text-ellipsis whitespace-nowrap',
    'flex-1 text-right leading-5 mt-0.5',
  ],
  {
    variants: {
      disabled: {
        true: 'text-[var(--sinch-comp-field-color-disabled-additional-initial)]',
        false: 'text-[var(--sinch-comp-field-color-default-additional-initial)]',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

const invalidTextStyles = [
  'font-[var(--sinch-comp-field-font-invalid)]',
  'text-[var(--sinch-comp-field-color-invalid-text-initial)]',
  'overflow-hidden text-ellipsis whitespace-nowrap',
  'leading-5 mt-0.5',
]

export interface FieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    Omit<VariantProps<typeof fieldVariants>, 'disabled'> {
  /**
   * Label text displayed above the input
   */
  label?: string
  /**
   * Optional text displayed in the top row (right-aligned)
   */
  optionalText?: string
  /**
   * Additional helper text displayed below the input (right-aligned)
   */
  additionalText?: string
  /**
   * Error/validation message displayed below the input
   * When set, indicates an invalid state
   */
  invalidText?: string
  /**
   * Disabled state for the field
   * @default false
   */
  disabled?: boolean
  /**
   * Tooltip element to display next to the label
   */
  tooltip?: React.ReactNode
  /**
   * The form input element to wrap (Input, Textarea, Select, etc.)
   */
  children?: React.ReactNode
  /**
   * Custom ID for the label's htmlFor attribute
   * If not provided, an auto-generated ID will be used
   */
  htmlFor?: string
}

/**
 * Field component that provides a consistent wrapper for form inputs.
 *
 * Includes label, optional text, tooltip slot, additional helper text,
 * and error message display.
 *
 * @example
 * ```tsx
 * <Field label="Email" optionalText="Optional" additionalText="We'll never share your email.">
 *   <Input placeholder="Enter your email" />
 * </Field>
 *
 * <Field label="Password" invalidText="Password is required">
 *   <Input type="password" invalid />
 * </Field>
 * ```
 */
export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      className,
      label,
      optionalText,
      additionalText,
      invalidText,
      disabled = false,
      tooltip,
      children,
      htmlFor,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const labelId = htmlFor ?? generatedId
    const inputContainerRef = useRef<HTMLDivElement>(null)

    // Check if top section should be shown
    const showTopSection = label !== undefined || optionalText !== undefined

    // Handle label click to focus the input
    const handleLabelClick = useCallback(() => {
      // Find the first focusable element within the input container
      const container = inputContainerRef.current
      if (container !== null) {
        const focusable = container.querySelector<HTMLElement>(
          'input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        focusable?.focus()
      }
    }, [])

    return (
      <div
        ref={ref}
        className={cn(fieldVariants({ disabled }), className)}
        {...props}
      >
        {/* Wrapper */}
        <div className="flex flex-col w-full">
          {/* Top section: label, tooltip, optional text */}
          {showTopSection && (
            <div className="flex items-baseline h-6 mb-0.5">
              {label !== undefined && (
                <label
                  htmlFor={labelId}
                  className={cn(labelVariants({ disabled }), 'cursor-pointer')}
                  onClick={handleLabelClick}
                >
                  {label}
                </label>
              )}
              {tooltip !== undefined && (
                <div className="self-center mx-2 flex">
                  {tooltip}
                </div>
              )}
              {optionalText !== undefined && (
                <span className={cn(optionalVariants({ disabled }))}>
                  {optionalText}
                </span>
              )}
            </div>
          )}

          {/* Input slot */}
          <div ref={inputContainerRef}>
            {children}
          </div>

          {/* Bottom section: invalid text and additional text */}
          {(invalidText !== undefined || additionalText !== undefined) && (
            <div className="flex items-baseline">
              {invalidText !== undefined && (
                <div className={cn(invalidTextStyles)}>
                  {invalidText}
                </div>
              )}
              {additionalText !== undefined && (
                <div className={cn(additionalVariants({ disabled }))}>
                  {additionalText}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Field.displayName = 'Field'
