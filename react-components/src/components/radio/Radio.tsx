import { type VariantProps, cva } from 'class-variance-authority'
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'

// ============================================================================
// Context
// ============================================================================

interface RadioContextValue {
  name?: string
  value: string
  invalid: boolean
  onChange: (value: string) => void
  registerOption: (value: string, ref: HTMLDivElement) => void
  unregisterOption: (value: string) => void
  focusNextOption: () => void
  focusPrevOption: () => void
}

const RadioContext = createContext<RadioContextValue | null>(null)

const useRadioContext = () => {
  const context = useContext(RadioContext)

  if (context === null) {
    throw new Error('RadioOption must be used within a Radio component')
  }

  return context
}

// ============================================================================
// Radio Group Component
// ============================================================================

const radioGroupVariants = cva(
  // Base styles
  'flex box-border w-full',
  {
    variants: {
      direction: {
        column: 'flex-col gap-[var(--sinch-comp-radio-gap,8px)]',
        row: 'flex-row gap-[var(--sinch-comp-radio-gap,8px)]',
      },
    },
    defaultVariants: {
      direction: 'column',
    },
  }
)

export interface RadioProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof radioGroupVariants> {
  /**
   * Name for form submissions
   */
  name?: string
  /**
   * Controlled selected value
   */
  value?: string
  /**
   * Default selected value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Invalid/error state
   * @default false
   */
  invalid?: boolean
  /**
   * Accessible label for the radio group
   */
  'aria-label': string
  /**
   * Change handler - receives the selected value
   */
  onChange?: (value: string) => void
}

export const Radio = forwardRef<HTMLDivElement, RadioProps>(
  (
    {
      className,
      direction = 'column',
      name,
      value: controlledValue,
      defaultValue = '',
      invalid = false,
      'aria-label': ariaLabel,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue)

    // Track registered options for keyboard navigation
    const optionsRef = useRef<Map<string, HTMLDivElement>>(new Map())

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    const handleChange = useCallback(
      (newValue: string) => {
        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [isControlled, onChange]
    )

    const registerOption = useCallback(
      (optionValue: string, optionRef: HTMLDivElement) => {
        optionsRef.current.set(optionValue, optionRef)
      },
      []
    )

    const unregisterOption = useCallback((optionValue: string) => {
      optionsRef.current.delete(optionValue)
    }, [])

    const getEnabledOptions = useCallback(() => {
      return Array.from(optionsRef.current.entries())
        .filter(([, el]) => el.getAttribute('aria-disabled') !== 'true')
        .map(([val, el]) => ({ value: val, element: el }))
    }, [])

    const focusNextOption = useCallback(() => {
      const options = getEnabledOptions()

      if (options.length === 0) {
        return
      }

      const currentIndex = options.findIndex((opt) => opt.value === currentValue)
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % options.length
      const nextOption = options[nextIndex]

      nextOption.element.focus()
      handleChange(nextOption.value)
    }, [currentValue, getEnabledOptions, handleChange])

    const focusPrevOption = useCallback(() => {
      const options = getEnabledOptions()

      if (options.length === 0) {
        return
      }

      const currentIndex = options.findIndex((opt) => opt.value === currentValue)
      const prevIndex =
        currentIndex < 0
          ? options.length - 1
          : (currentIndex - 1 + options.length) % options.length
      const prevOption = options[prevIndex]

      prevOption.element.focus()
      handleChange(prevOption.value)
    }, [currentValue, getEnabledOptions, handleChange])

    return (
      <RadioContext.Provider
        value={{
          name,
          value: currentValue,
          invalid,
          onChange: handleChange,
          registerOption,
          unregisterOption,
          focusNextOption,
          focusPrevOption,
        }}
      >
        <div
          ref={ref}
          role="radiogroup"
          aria-label={ariaLabel}
          aria-invalid={invalid || undefined}
          data-name={name}
          data-value={currentValue}
          className={cn(radioGroupVariants({ direction }), className)}
          {...props}
        >
          {children}
        </div>
      </RadioContext.Provider>
    )
  }
)
Radio.displayName = 'Radio'

// ============================================================================
// Radio Option Component
// ============================================================================

const radioOptionWrapperVariants = cva(
  // Base styles
  [
    'flex flex-row box-border w-full min-h-[24px]',
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

const radioCircleVariants = cva(
  // Base styles for the radio circle
  [
    'relative w-[18px] h-[18px]',
    'rounded-full',
    'border border-solid transition-colors duration-100',
    'box-border',
  ],
  {
    variants: {
      isChecked: {
        true: [
          'bg-[var(--sinch-comp-radio-color-default-background-initial)]',
          'border-[var(--sinch-comp-radio-color-checked-border-initial)]',
        ],
        false: [
          'bg-[var(--sinch-comp-radio-color-default-background-initial)]',
          'border-[var(--sinch-comp-radio-color-default-border-initial)]',
        ],
      },
      isInvalid: {
        true: 'border-[var(--sinch-comp-radio-color-invalid-border-initial)]',
        false: '',
      },
      isDisabled: {
        true: [
          'bg-[var(--sinch-comp-radio-color-disabled-background-initial)]',
          'border-[var(--sinch-comp-radio-color-disabled-border-initial)]',
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
          'border-[var(--sinch-comp-radio-color-checked-disabled-border-initial)]',
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
    'border-2 border-[var(--sinch-comp-radio-color-default-outline-focus)]',
    'rounded-full',
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

const knobVariants = cva(
  // Knob (inner circle) styles
  [
    'absolute w-[10px] h-[10px]',
    'inset-0 m-auto',
    'rounded-full',
    'transition-opacity duration-100',
    'pointer-events-none',
    'bg-[var(--sinch-comp-radio-color-checked-knob-initial)]',
  ],
  {
    variants: {
      isVisible: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
      isDisabled: {
        true: 'bg-[var(--sinch-comp-radio-color-checked-disabled-knob-initial)]',
        false: '',
      },
    },
    defaultVariants: {
      isVisible: false,
      isDisabled: false,
    },
  }
)

export interface RadioOptionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Value of this option
   */
  value: string
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * Label text displayed next to the radio
   */
  text?: string
  /**
   * Accessible label (required if text is not provided)
   */
  'aria-label'?: string
  /**
   * ID of element that labels this option
   */
  'aria-labelledby'?: string
}

export const RadioOption = forwardRef<HTMLDivElement, RadioOptionProps>(
  (
    {
      className,
      value,
      disabled = false,
      text,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useRadioContext()
    const [isFocused, setIsFocused] = useState(false)
    const internalRef = useRef<HTMLDivElement | null>(null)

    const isChecked = context.value === value
    const isInvalid = context.invalid

    // Register/unregister option for keyboard navigation
    const setRef = useCallback(
      (el: HTMLDivElement | null) => {
        internalRef.current = el

        if (el !== null) {
          context.registerOption(value, el)
        } else {
          context.unregisterOption(value)
        }

        if (ref !== null) {
          if (typeof ref === 'function') {
            ref(el)
          } else {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = el
          }
        }
      },
      [context, ref, value]
    )

    const handleClick = useCallback(() => {
      if (disabled) {
        return
      }

      context.onChange(value)
    }, [context, disabled, value])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.code) {
          case 'ArrowUp':
          case 'ArrowLeft':
            e.preventDefault()
            context.focusPrevOption()
            break
          case 'ArrowDown':
          case 'ArrowRight':
            e.preventDefault()
            context.focusNextOption()
            break
          case 'Space':
            e.preventDefault()

            if (!disabled) {
              context.onChange(value)
            }

            break
        }

        onKeyDown?.(e)
      },
      [context, disabled, onKeyDown, value]
    )

    const handleFocus = useCallback(() => {
      setIsFocused(true)
    }, [])

    const handleBlur = useCallback(() => {
      setIsFocused(false)
    }, [])

    // Get hover/active classes based on state
    const getHoverActiveClasses = () => {
      if (disabled) {
        return ''
      }

      if (isChecked && !isInvalid) {
        return [
          'hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]',
          'hover:border-[var(--sinch-comp-radio-color-checked-border-hover)]',
          'active:bg-[var(--sinch-comp-radio-color-default-background-active)]',
          'active:border-[var(--sinch-comp-radio-color-checked-border-active)]',
        ].join(' ')
      }

      if (isInvalid) {
        return [
          'hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]',
          'hover:border-[var(--sinch-comp-radio-color-invalid-border-hover)]',
          'active:bg-[var(--sinch-comp-radio-color-default-background-active)]',
          'active:border-[var(--sinch-comp-radio-color-invalid-border-active)]',
        ].join(' ')
      }

      return [
        'hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]',
        'hover:border-[var(--sinch-comp-radio-color-default-border-hover)]',
        'active:bg-[var(--sinch-comp-radio-color-default-background-active)]',
        'active:border-[var(--sinch-comp-radio-color-default-border-active)]',
      ].join(' ')
    }

    // Get knob hover/active classes
    const getKnobHoverActiveClasses = () => {
      if (disabled || !isChecked) {
        return ''
      }

      return [
        'group-hover:bg-[var(--sinch-comp-radio-color-checked-knob-hover)]',
        'group-active:bg-[var(--sinch-comp-radio-color-checked-knob-active)]',
      ].join(' ')
    }

    // Determine label text color
    const getLabelColorClass = () => {
      if (disabled && isChecked) {
        return 'text-[var(--sinch-comp-radio-color-checked-disabled-label-initial)]'
      }

      if (disabled) {
        return 'text-[var(--sinch-comp-radio-color-disabled-label-initial)]'
      }

      if (isInvalid) {
        return 'text-[var(--sinch-comp-radio-color-invalid-label-initial)]'
      }

      return 'text-[var(--sinch-comp-radio-color-default-label-initial)]'
    }

    return (
      <div
        ref={setRef}
        role="radio"
        aria-checked={isChecked}
        aria-disabled={disabled}
        aria-label={ariaLabel ?? text}
        aria-labelledby={ariaLabelledBy}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          radioOptionWrapperVariants({ isDisabled: disabled }),
          'group',
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {/* Radio circle */}
        <div className="relative w-[18px] h-[18px] mt-[3px] flex-shrink-0 self-start">
          {/* Focus ring */}
          <div className={cn(focusRingVariants({ isFocused }))} />

          {/* Radio background/border */}
          <div
            className={cn(
              radioCircleVariants({
                isChecked,
                isInvalid: isInvalid && !isChecked,
                isDisabled: disabled,
              }),
              getHoverActiveClasses()
            )}
          />

          {/* Knob (inner circle) - visible when checked */}
          <div
            className={cn(
              knobVariants({
                isVisible: isChecked,
                isDisabled: disabled,
              }),
              getKnobHoverActiveClasses()
            )}
          />
        </div>

        {/* Label */}
        {text !== undefined && text.length > 0 && (
          <span
            className={cn(
              'flex-1 self-center pl-2',
              'font-[var(--sinch-comp-radio-font-label)]',
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
RadioOption.displayName = 'RadioOption'

// Attach subcomponent
export const RadioGroup = Object.assign(Radio, {
  Option: RadioOption,
})
