import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback, useEffect, useState } from 'react'
import { cn } from '../../utils/cn'

const inputWrapperVariants = cva(
  // Base styles
  [
    'relative flex flex-row items-center box-border w-full',
    'bg-[var(--sinch-comp-input-color-default-background-initial)]',
  ],
  {
    variants: {
      size: {
        s: [
          'h-[var(--sinch-comp-input-size-container-s)]',
          'rounded-[var(--sinch-comp-input-shape-radius-size-s)]',
        ],
        m: [
          'h-[var(--sinch-comp-input-size-container-m)]',
          'rounded-[var(--sinch-comp-input-shape-radius-size-m)]',
        ],
        l: [
          'h-[var(--sinch-comp-input-size-container-l)]',
          'rounded-[var(--sinch-comp-input-shape-radius-size-l)]',
        ],
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

const inputVariants = cva(
  // Base styles for the input element
  [
    'w-full h-full px-3 box-border',
    'bg-transparent outline-none border-none',
    '[font:var(--sinch-comp-input-font-input)]',
    'text-[var(--sinch-comp-input-color-default-text-initial)]',
    'placeholder:[font:var(--sinch-comp-input-font-placeholder)]',
    'placeholder:text-[var(--sinch-comp-input-color-default-text-placeholder)]',
    'placeholder:opacity-100',
    'disabled:text-[var(--sinch-comp-input-color-disabled-text-initial)]',
  ],
  {
    variants: {
      hasIcon: {
        true: 'pl-[calc(var(--sinch-local-icon-size)+20px)]',
        false: 'pl-3',
      },
    },
    defaultVariants: {
      hasIcon: false,
    },
  }
)

const borderVariants = cva(
  // Base styles for the border overlay
  [
    'absolute inset-0 pointer-events-none',
    'border border-[var(--sinch-comp-input-color-default-border-initial)]',
    'transition-colors',
  ],
  {
    variants: {
      size: {
        s: 'rounded-[var(--sinch-comp-input-shape-radius-size-s)]',
        m: 'rounded-[var(--sinch-comp-input-shape-radius-size-m)]',
        l: 'rounded-[var(--sinch-comp-input-shape-radius-size-l)]',
      },
      isFocused: {
        true: 'border-[var(--sinch-comp-input-color-default-border-focus)] border-2',
        false: '',
      },
      isInvalid: {
        true: 'border-[var(--sinch-comp-input-color-invalid-border-initial)]',
        false: '',
      },
      isDisabled: {
        true: 'border-[var(--sinch-comp-input-color-disabled-border-initial)]',
        false: '',
      },
    },
    compoundVariants: [
      // Focus takes precedence over invalid
      {
        isFocused: true,
        isInvalid: true,
        className: 'border-[var(--sinch-comp-input-color-default-border-focus)]',
      },
      // Disabled takes precedence over everything
      {
        isDisabled: true,
        className: 'border-[var(--sinch-comp-input-color-disabled-border-initial)]',
      },
    ],
    defaultVariants: {
      size: 'm',
      isFocused: false,
      isInvalid: false,
      isDisabled: false,
    },
  }
)

export type InputType = 'text' | 'password' | 'number'
export type InputSize = 's' | 'm' | 'l'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'type'>,
  Omit<VariantProps<typeof inputWrapperVariants>, 'size'> {
  /**
   * Input type
   * @default 'text'
   */
  type?: InputType,
  /**
   * Controlled value
   */
  value?: string,
  /**
   * Default value for uncontrolled usage
   */
  defaultValue?: string,
  /**
   * Placeholder text
   */
  placeholder?: string,
  /**
   * Input size
   * @default 'm'
   */
  size?: InputSize,
  /**
   * Invalid/error state
   * @default false
   */
  invalid?: boolean,
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean,
  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean,
  /**
   * Required field
   * @default false
   */
  required?: boolean,
  /**
   * Autocomplete attribute
   */
  autoComplete?: string,
  /**
   * Maximum length
   */
  maxLength?: number,
  /**
   * Minimum value (for type="number")
   */
  min?: number,
  /**
   * Maximum value (for type="number")
   */
  max?: number,
  /**
   * Step value (for type="number")
   */
  step?: number,
  /**
   * Accessible label
   */
  'aria-label'?: string,
  /**
   * Icon element displayed on the left
   */
  icon?: React.ReactNode,
  /**
   * Content displayed on the left side (before the input)
   */
  leftAddon?: React.ReactNode,
  /**
   * Content displayed on the right side (after the input)
   */
  rightAddon?: React.ReactNode,
  /**
   * Change handler - receives the new value string
   */
  onChange?: (value: string) => void,
  /**
   * Focus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  /**
   * Blur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  /**
   * Key down handler
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

/**
 * Input component for text entry.
 *
 * Supports controlled and uncontrolled patterns, multiple input types,
 * error states, and icon/addon slots.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      value: controlledValue,
      defaultValue,
      placeholder,
      size = 'm',
      invalid = false,
      disabled = false,
      readOnly = false,
      required = false,
      autoComplete,
      maxLength,
      min,
      max,
      step,
      'aria-label': ariaLabel,
      icon,
      leftAddon,
      rightAddon,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue ?? '')
    const [isFocused, setIsFocused] = useState(false)

    // Warn in development if input has no accessible label
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production' && !ariaLabel && !props['aria-labelledby'] && !props.id) {
        console.warn(
          'Input: Must have an `aria-label`, `aria-labelledby`, or an associated `<label>` (via matching `id`) for accessibility.'
        )
      }
    }, [ariaLabel, props['aria-labelledby'], props.id])

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const hasIcon = icon !== undefined

    // Icon size CSS variable based on size prop
    const iconSizeVar = {
      s: 'var(--sinch-comp-input-size-icon-s)',
      m: 'var(--sinch-comp-input-size-icon-m)',
      l: 'var(--sinch-comp-input-size-icon-l)',
    }[size]

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value

        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [isControlled, onChange]
    )

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true)
        onFocus?.(e)
      },
      [onFocus]
    )

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)
        onBlur?.(e)
      },
      [onBlur]
    )

    return (
      <div
        className={cn(inputWrapperVariants({ size }), className)}
        style={
          {
            '--sinch-local-icon-size': iconSizeVar,
          } as React.CSSProperties
        }
      >
        {/* Left addon */}
        {leftAddon && (
          <div className="flex flex-row items-center self-stretch gap-1 pl-1">
            {leftAddon}
          </div>
        )}

        {/* Icon */}
        {hasIcon && (
          <div className="relative h-full">
            <div
              className={cn(
                'absolute flex items-center left-3 top-0 bottom-0 pointer-events-none',
                disabled
                  ? '[--sinch-global-color-icon:var(--sinch-comp-input-color-disabled-icon-initial)]'
                  : '[--sinch-global-color-icon:var(--sinch-comp-input-color-default-icon-initial)]'
              )}
              style={{
                width: iconSizeVar,
              }}
            >
              {icon}
            </div>
          </div>
        )}

        {/* Input wrapper */}
        <div className="relative flex-1 min-w-0 self-stretch">
          <input
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete={autoComplete}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}
            aria-label={ariaLabel}
            aria-invalid={invalid}
            className={cn(inputVariants({ hasIcon }))}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
            {...props}
          />
        </div>

        {/* Border overlay */}
        <div
          className={cn(
            borderVariants({
              size,
              isFocused,
              isInvalid: invalid && !isFocused,
              isDisabled: disabled,
            })
          )}
        />

        {/* Right addon */}
        {rightAddon && (
          <div className="flex flex-row items-center self-stretch gap-1 pr-1">
            {rightAddon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
