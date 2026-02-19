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

interface SegmentedIconControlContextValue {
  value: string[]
  multiple: boolean
  onChange: (value: string) => void
  registerOption: (value: string, ref: HTMLDivElement) => void
  unregisterOption: (value: string) => void
  focusNextOption: () => void
  focusPrevOption: () => void
}

const SegmentedIconControlContext = createContext<SegmentedIconControlContextValue | null>(null)

const useSegmentedIconControlContext = () => {
  const context = useContext(SegmentedIconControlContext)

  if (context === null) {
    throw new Error('SegmentedIconControlOption must be used within a SegmentedIconControl component')
  }

  return context
}

// ============================================================================
// Helper functions for CSV value handling
// ============================================================================

/**
 * Parse a comma-separated value string into an array
 */
const unpackCsv = (csv: string): string[] => {
  if (csv === '') {
    return []
  }

  return csv.split(',').filter(Boolean)
}

/**
 * Update a CSV value by adding or removing a value
 */
const updateCsv = (csv: string, value: string, add: boolean): string => {
  const values = unpackCsv(csv)

  if (add) {
    if (!values.includes(value)) {
      values.push(value)
    }
  } else {
    const index = values.indexOf(value)

    if (index !== -1) {
      values.splice(index, 1)
    }
  }

  return values.join(',')
}

/**
 * Get the first value from a CSV string
 */
const getFirstCsvValue = (csv: string): string => {
  const values = unpackCsv(csv)

  return values[0] ?? ''
}

// ============================================================================
// SegmentedIconControl (Root Component)
// ============================================================================

const segmentedIconControlVariants = cva(
  // Base styles
  'flex flex-row w-full box-border relative z-0 outline-none',
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface SegmentedIconControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof segmentedIconControlVariants> {
  /**
   * Controlled selected value (comma-separated for multiple selection)
   */
  value?: string
  /**
   * Default selected value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Enable multiple selection mode
   * @default false
   */
  multiple?: boolean
  /**
   * Accessible label for the segmented icon control
   */
  'aria-label': string
  /**
   * Change handler - receives the selected value(s) as comma-separated string
   */
  onChange?: (value: string) => void
}

export const SegmentedIconControl = forwardRef<HTMLDivElement, SegmentedIconControlProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = '',
      multiple = false,
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

    // Parse the current value into an array for context
    const valueArray = multiple ? unpackCsv(currentValue) : [getFirstCsvValue(currentValue)]

    const handleChange = useCallback(
      (optionValue: string) => {
        let newValue: string

        if (multiple) {
          // Toggle the value in multiple mode
          const isCurrentlyChecked = unpackCsv(currentValue).includes(optionValue)

          newValue = updateCsv(currentValue, optionValue, !isCurrentlyChecked)
        } else {
          // Single selection mode
          newValue = optionValue
        }

        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [currentValue, isControlled, multiple, onChange]
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

      const focusedElement = document.activeElement
      const currentIndex = options.findIndex((opt) => opt.element === focusedElement)
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % options.length
      const nextOption = options[nextIndex]

      nextOption.element.focus()
    }, [getEnabledOptions])

    const focusPrevOption = useCallback(() => {
      const options = getEnabledOptions()

      if (options.length === 0) {
        return
      }

      const focusedElement = document.activeElement
      const currentIndex = options.findIndex((opt) => opt.element === focusedElement)
      const prevIndex =
        currentIndex < 0
          ? options.length - 1
          : (currentIndex - 1 + options.length) % options.length
      const prevOption = options[prevIndex]

      prevOption.element.focus()
    }, [getEnabledOptions])

    return (
      <SegmentedIconControlContext.Provider
        value={{
          value: valueArray,
          multiple,
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
          data-multiple={multiple || undefined}
          className={cn(segmentedIconControlVariants(), className)}
          {...props}
        >
          {children}
        </div>
      </SegmentedIconControlContext.Provider>
    )
  }
)
SegmentedIconControl.displayName = 'SegmentedIconControl'

// ============================================================================
// SegmentedIconControlOption Component
// ============================================================================

const segmentedIconControlOptionWrapperVariants = cva(
  // Base styles - 56x32px icon-only option
  [
    'relative flex items-center justify-center',
    'w-14 h-8 px-4 box-border',
    'outline-none cursor-pointer select-none',
    'transition-colors duration-100',
  ],
  {
    variants: {
      isChecked: {
        true: 'bg-[var(--sinch-comp-segmented-control-color-checked-background-initial)]',
        false: 'bg-[var(--sinch-comp-segmented-control-color-default-background-initial)]',
      },
      isDisabled: {
        true: [
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

const iconBorderVariants = cva(
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

const iconFocusRingVariants = cva(
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

export interface SegmentedIconControlOptionProps
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
   * Accessible label (required for icon-only options)
   */
  'aria-label': string
  /**
   * Icon element to display
   */
  icon: React.ReactNode
  /**
   * Whether this is the first option (for border radius)
   */
  isFirst?: boolean
  /**
   * Whether this is the last option (for border radius)
   */
  isLast?: boolean
}

export const SegmentedIconControlOption = forwardRef<HTMLDivElement, SegmentedIconControlOptionProps>(
  (
    {
      className,
      value,
      disabled = false,
      'aria-label': ariaLabel,
      icon,
      isFirst = false,
      isLast = false,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useSegmentedIconControlContext()
    const [isFocused, setIsFocused] = useState(false)
    const internalRef = useRef<HTMLDivElement | null>(null)

    const isChecked = context.value.includes(value)

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

    // Determine icon color based on state
    const iconColor = disabled
      ? 'var(--sinch-comp-segmented-control-color-disabled-icon-initial)'
      : isChecked
        ? 'var(--sinch-comp-segmented-control-color-checked-icon-initial)'
        : 'var(--sinch-comp-segmented-control-color-default-icon-initial)'

    return (
      <div
        ref={setRef}
        role="tab"
        aria-selected={isChecked}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
        data-checked={isChecked || undefined}
        className={cn(
          segmentedIconControlOptionWrapperVariants({
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
        {/* Icon */}
        <span
          className="block pointer-events-none"
          style={{
            color: iconColor,
            // Icon size from component tokens
            fontSize: 'var(--sinch-comp-segmented-control-size-icon, 24px)',
          }}
        >
          {icon}
        </span>

        {/* Border */}
        <div
          className={cn(
            iconBorderVariants({
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
            iconFocusRingVariants({
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
SegmentedIconControlOption.displayName = 'SegmentedIconControlOption'

// Attach subcomponent
export const SegmentedIconControlGroup = Object.assign(SegmentedIconControl, {
  Option: SegmentedIconControlOption,
})
