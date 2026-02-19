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

interface SegmentedControlContextValue {
  value: string
  onChange: (value: string) => void
  registerOption: (value: string, ref: HTMLDivElement) => void
  unregisterOption: (value: string) => void
  focusNextOption: () => void
  focusPrevOption: () => void
}

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

const useSegmentedControlContext = () => {
  const context = useContext(SegmentedControlContext)

  if (context === null) {
    throw new Error('SegmentedControlOption must be used within a SegmentedControl component')
  }

  return context
}

// ============================================================================
// SegmentedControl (Root Component)
// ============================================================================

const segmentedControlVariants = cva(
  // Base styles
  'flex flex-row w-full box-border relative z-0 outline-none',
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof segmentedControlVariants> {
  /**
   * Controlled selected value
   */
  value?: string
  /**
   * Default selected value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Accessible label for the segmented control
   */
  'aria-label': string
  /**
   * Change handler - receives the selected value
   */
  onChange?: (value: string) => void
}

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = '',
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
    }, [currentValue, getEnabledOptions])

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
    }, [currentValue, getEnabledOptions])

    return (
      <SegmentedControlContext.Provider
        value={{
          value: currentValue,
          onChange: handleChange,
          registerOption,
          unregisterOption,
          focusNextOption,
          focusPrevOption,
        }}
      >
        <div
          ref={ref}
          role="tablist"
          aria-label={ariaLabel}
          aria-orientation="horizontal"
          data-value={currentValue}
          className={cn(segmentedControlVariants(), className)}
          {...props}
        >
          {children}
        </div>
      </SegmentedControlContext.Provider>
    )
  }
)
SegmentedControl.displayName = 'SegmentedControl'

// ============================================================================
// SegmentedControlOption Component
// ============================================================================

const segmentedControlOptionWrapperVariants = cva(
  // Base styles
  [
    'relative flex flex-row items-center gap-3',
    'w-full h-8 px-4 box-border',
    'outline-none cursor-pointer select-none',
    'transition-colors duration-100',
  ],
  {
    variants: {
      isChecked: {
        true: [
          'text-[var(--sinch-comp-segmented-control-color-checked-text-initial)]',
          'bg-[var(--sinch-comp-segmented-control-color-checked-background-initial)]',
        ],
        false: [
          'text-[var(--sinch-comp-segmented-control-color-default-text-initial)]',
          'bg-[var(--sinch-comp-segmented-control-color-default-background-initial)]',
        ],
      },
      isDisabled: {
        true: [
          'text-[var(--sinch-comp-segmented-control-color-disabled-text-initial)]',
          'bg-[var(--sinch-comp-segmented-control-color-disabled-background-initial)]',
          'cursor-default',
        ],
        false: '',
      },
      isFirst: {
        true: 'rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]',
        false: '',
      },
      isLast: {
        true: 'rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]',
        false: '',
      },
    },
    compoundVariants: [
      // Hover state (only when not disabled and not checked)
      {
        isChecked: false,
        isDisabled: false,
        className: 'hover:bg-[var(--sinch-comp-segmented-control-color-default-background-hover)]',
      },
    ],
    defaultVariants: {
      isChecked: false,
      isDisabled: false,
      isFirst: false,
      isLast: false,
    },
  }
)

const borderVariants = cva(
  // Base border styles
  [
    'absolute inset-0 pointer-events-none box-border',
    'border border-solid',
    'transition-all duration-100',
  ],
  {
    variants: {
      isChecked: {
        true: [
          'border-2',
          'border-[var(--sinch-comp-segmented-control-color-checked-border-initial)]',
        ],
        false: 'border-[var(--sinch-comp-segmented-control-color-default-border-initial)]',
      },
      isDisabled: {
        true: 'border-[var(--sinch-comp-segmented-control-color-disabled-border-initial)]',
        false: '',
      },
      isFirst: {
        true: 'rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]',
        false: 'border-l-0',
      },
      isLast: {
        true: 'rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]',
        false: '',
      },
    },
    compoundVariants: [
      // Checked and not first - offset left by 1px
      {
        isChecked: true,
        isFirst: false,
        className: '-left-px',
      },
    ],
    defaultVariants: {
      isChecked: false,
      isDisabled: false,
      isFirst: false,
      isLast: false,
    },
  }
)

const focusRingVariants = cva(
  // Focus ring styles
  [
    'absolute pointer-events-none box-border',
    'border-2 border-[var(--sinch-comp-segmented-control-color-default-outline-focus)]',
    'transition-opacity duration-100 opacity-0',
    'z-[1]',
    // Positioned with inset -3px
    'inset-[-3px]',
  ],
  {
    variants: {
      isFocused: {
        true: 'opacity-100',
        false: '',
      },
      isFirst: {
        true: 'rounded-l-[calc(var(--sinch-comp-segmented-control-shape-radius)+3px)]',
        false: '-left-[4px]',
      },
      isLast: {
        true: 'rounded-r-[calc(var(--sinch-comp-segmented-control-shape-radius)+3px)]',
        false: '',
      },
    },
    defaultVariants: {
      isFocused: false,
      isFirst: false,
      isLast: false,
    },
  }
)

export interface SegmentedControlOptionProps
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
   * Label text displayed in the option
   */
  text?: string
  /**
   * Accessible label (required if text is not provided)
   */
  'aria-label'?: string
  /**
   * Icon element to display before the text
   */
  icon?: React.ReactNode
  /**
   * Whether this is the first option (for border radius)
   * Auto-detected if not provided via context
   */
  isFirst?: boolean
  /**
   * Whether this is the last option (for border radius)
   * Auto-detected if not provided via context
   */
  isLast?: boolean
}

export const SegmentedControlOption = forwardRef<HTMLDivElement, SegmentedControlOptionProps>(
  (
    {
      className,
      value,
      disabled = false,
      text,
      'aria-label': ariaLabel,
      icon,
      isFirst = false,
      isLast = false,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useSegmentedControlContext()
    const [isFocused, setIsFocused] = useState(false)
    const internalRef = useRef<HTMLDivElement | null>(null)

    const isChecked = context.value === value

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
          case 'Enter':
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

    return (
      <div
        ref={setRef}
        role="tab"
        aria-selected={isChecked}
        aria-disabled={disabled}
        aria-label={ariaLabel ?? text}
        tabIndex={disabled ? -1 : 0}
        data-checked={isChecked || undefined}
        className={cn(
          segmentedControlOptionWrapperVariants({
            isChecked,
            isDisabled: disabled,
            isFirst,
            isLast,
          }),
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {/* Icon slot */}
        {icon !== undefined && (
          <span
            className="block pointer-events-none"
            style={{
              color: disabled
                ? 'var(--sinch-comp-segmented-control-color-disabled-icon-initial)'
                : isChecked
                  ? 'var(--sinch-comp-segmented-control-color-checked-icon-initial)'
                  : 'var(--sinch-comp-segmented-control-color-default-icon-initial)',
            }}
          >
            {icon}
          </span>
        )}

        {/* Label text */}
        {text !== undefined && text.length > 0 && (
          <span
            className={cn(
              'flex-shrink overflow-hidden whitespace-nowrap text-ellipsis pointer-events-none',
              'font-[var(--sinch-comp-segmented-control-font-label)]'
            )}
          >
            {text}
          </span>
        )}

        {/* Border */}
        <div
          className={cn(
            borderVariants({
              isChecked,
              isDisabled: disabled,
              isFirst,
              isLast,
            })
          )}
        />

        {/* Focus ring */}
        <div
          className={cn(
            focusRingVariants({
              isFocused,
              isFirst,
              isLast,
            })
          )}
        />
      </div>
    )
  }
)
SegmentedControlOption.displayName = 'SegmentedControlOption'

// Attach subcomponent
export const SegmentedControlGroup = Object.assign(SegmentedControl, {
  Option: SegmentedControlOption,
})
