import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

const checkboxWrapperVariants = cva(
  // Base styles
  [
    'inline-flex flex-row items-start box-border w-auto min-h-[24px]',
    'outline-none cursor-pointer select-none',
  ],
  {
    variants: {
      isDisabled: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: {
      isDisabled: false,
    },
  }
)

const checkboxBoxVariants = cva(
  // Base styles for the checkbox box
  [
    'relative w-[18px] h-[18px] mt-[3px] flex-shrink-0',
    'rounded-[var(--sinch-comp-checkbox-shape-radius)]',
    'border border-solid transition-colors duration-100',
    'box-border',
  ],
  {
    variants: {
      isChecked: {
        true: [
          'bg-[var(--sinch-comp-checkbox-color-checked-background-initial)]',
          'border-[var(--sinch-comp-checkbox-color-checked-border-initial)]',
        ],
        false: [
          'bg-[var(--sinch-comp-checkbox-color-default-background-initial)]',
          'border-[var(--sinch-comp-checkbox-color-default-border-initial)]',
        ],
      },
      isInvalid: {
        true: [
          'bg-[var(--sinch-comp-checkbox-color-invalid-background-initial)]',
          'border-[var(--sinch-comp-checkbox-color-invalid-border-initial)]',
        ],
        false: '',
      },
      isDisabled: {
        true: [
          'bg-[var(--sinch-comp-checkbox-color-disabled-background-initial)]',
          'border-[var(--sinch-comp-checkbox-color-disabled-border-initial)]',
        ],
        false: '',
      },
    },
    compoundVariants: [
      // Checked + Disabled
      {
        isChecked: true,
        isDisabled: true,
        className: [
          'bg-[var(--sinch-comp-checkbox-color-checked-disabled-background-initial)]',
          'border-[var(--sinch-comp-checkbox-color-checked-disabled-border-initial)]',
        ],
      },
    ],
    defaultVariants: {
      isChecked: false,
      isInvalid: false,
      isDisabled: false,
    },
  }
)

const focusRingVariants = cva(
  // Focus ring styles
  [
    'absolute inset-[-3px] pointer-events-none',
    'border-2 border-[var(--sinch-comp-checkbox-color-default-outline-focus)]',
    'rounded-[calc(var(--sinch-comp-checkbox-shape-radius)+3px)]',
    'transition-opacity duration-100 opacity-0',
  ],
  {
    variants: {
      isFocused: {
        true: 'opacity-100',
        false: '',
      },
    },
    defaultVariants: {
      isFocused: false,
    },
  }
)

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
  VariantProps<typeof checkboxWrapperVariants> {
  /**
   * Name for form submissions
   */
  name?: string,
  /**
   * Value for form submissions (defaults to 'on' if checked)
   */
  value?: string,
  /**
   * Controlled checked state
   */
  checked?: boolean,
  /**
   * Default checked state for uncontrolled usage
   */
  defaultChecked?: boolean,
  /**
   * Indeterminate state - shows a dash instead of checkmark when checked
   */
  indeterminate?: boolean,
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean,
  /**
   * Invalid/error state
   * @default false
   */
  invalid?: boolean,
  /**
   * Label text displayed next to the checkbox
   */
  text?: string,
  /**
   * Accessible label
   */
  'aria-label'?: string,
  /**
   * Change handler - receives the new checked state
   */
  onChange?: (checked: boolean) => void,
  /**
   * Focus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void,
  /**
   * Blur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void,
}

// Checkmark icon SVG path
const CheckmarkIcon = () => (
  <svg
    className="absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17Z"/>
  </svg>
)

// Indeterminate icon SVG path
const IndeterminateIcon = () => (
  <svg
    className="absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z"/>
  </svg>
)

/**
 * Checkbox component for binary or tri-state selections.
 *
 * Supports controlled and uncontrolled patterns, indeterminate state,
 * form integration, and keyboard navigation.
 */
export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      className,
      name,
      value = '',
      checked: controlledChecked,
      defaultChecked = false,
      indeterminate = false,
      disabled = false,
      invalid = false,
      text,
      'aria-label': ariaLabel,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const [isFocused, setIsFocused] = useState(false)
    const internalRef = useRef<HTMLDivElement>(null)

    // Determine if controlled
    const isControlled = controlledChecked !== undefined
    const isChecked = isControlled ? controlledChecked : internalChecked

    // Sync internal ref with forwarded ref
    useEffect(() => {
      if (ref != null) {
        if (typeof ref === 'function') {
          ref(internalRef.current)
        } else {
          ref.current = internalRef.current
        }
      }
    }, [ref])

    const handleClick = useCallback(() => {
      if (disabled) {
        return
      }

      const newChecked = !isChecked

      if (!isControlled) {
        setInternalChecked(newChecked)
      }

      onChange?.(newChecked)
    }, [disabled, isChecked, isControlled, onChange])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Space') {
          e.preventDefault()
          handleClick()
        }

        onKeyDown?.(e)
      },
      [handleClick, onKeyDown]
    )

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(true)
        onFocus?.(e)
      },
      [onFocus]
    )

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(false)
        onBlur?.(e)
      },
      [onBlur]
    )

    // Get hover/active classes based on state
    const getHoverActiveClasses = () => {
      if (disabled) {
        return ''
      }

      if (isChecked && !invalid) {
        return [
          'hover:bg-[var(--sinch-comp-checkbox-color-checked-background-hover)]',
          'hover:border-[var(--sinch-comp-checkbox-color-checked-border-hover)]',
          'active:bg-[var(--sinch-comp-checkbox-color-checked-background-active)]',
          'active:border-[var(--sinch-comp-checkbox-color-checked-border-active)]',
        ].join(' ')
      }

      if (invalid) {
        return [
          'hover:bg-[var(--sinch-comp-checkbox-color-invalid-background-hover)]',
          'hover:border-[var(--sinch-comp-checkbox-color-invalid-border-hover)]',
          'active:bg-[var(--sinch-comp-checkbox-color-invalid-background-active)]',
          'active:border-[var(--sinch-comp-checkbox-color-invalid-border-active)]',
        ].join(' ')
      }

      return [
        'hover:bg-[var(--sinch-comp-checkbox-color-default-background-hover)]',
        'hover:border-[var(--sinch-comp-checkbox-color-default-border-hover)]',
        'active:bg-[var(--sinch-comp-checkbox-color-default-background-active)]',
        'active:border-[var(--sinch-comp-checkbox-color-default-border-active)]',
      ].join(' ')
    }

    // Determine label text color
    const getLabelColorClass = () => {
      if (disabled) {
        return 'text-[var(--sinch-comp-checkbox-color-disabled-text-initial)]'
      }

      if (invalid) {
        return 'text-[var(--sinch-comp-checkbox-color-invalid-text-initial)]'
      }

      return 'text-[var(--sinch-comp-checkbox-color-default-text-initial)]'
    }

    return (
      <div
        ref={internalRef}
        role="checkbox"
        aria-checked={isChecked && indeterminate ? 'mixed' : isChecked}
        aria-disabled={disabled}
        aria-invalid={invalid}
        aria-label={ariaLabel ?? text}
        tabIndex={disabled ? -1 : 0}
        data-name={name}
        data-value={isChecked ? (value.length > 0 ? value : 'on') : ''}
        className={cn(
          checkboxWrapperVariants({ isDisabled: disabled }),
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {/* Checkbox box */}
        <div className="relative w-[18px] h-[18px] mt-[3px] flex-shrink-0">
          {/* Focus ring */}
          <div className={cn(focusRingVariants({ isFocused }))}/>

          {/* Checkbox background/border */}
          <div
            className={cn(
              checkboxBoxVariants({
                isChecked,
                isInvalid: invalid && !isChecked,
                isDisabled: disabled,
              }),
              getHoverActiveClasses()
            )}
          />

          {/* Checkmark icon - visible when checked and not indeterminate */}
          <div
            className={cn(
              'transition-opacity duration-100',
              isChecked && !indeterminate ? 'opacity-100' : 'opacity-0'
            )}
          >
            <CheckmarkIcon/>
          </div>

          {/* Indeterminate icon - visible when checked and indeterminate */}
          <div
            className={cn(
              'transition-opacity duration-100',
              isChecked && indeterminate ? 'opacity-100' : 'opacity-0'
            )}
          >
            <IndeterminateIcon/>
          </div>
        </div>

        {/* Label */}
        {text && (
          <span
            className={cn(
              'flex-1 self-center pl-2',
              'font-[var(--sinch-comp-checkbox-font-label)]',
              getLabelColorClass(),
              disabled ? 'cursor-default' : 'cursor-pointer'
            )}
          >
            {text}
          </span>
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
