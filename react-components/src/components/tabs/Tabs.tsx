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
import { Tooltip } from '../tooltip/Tooltip'

// ============================================================================
// Context
// ============================================================================

interface TabsContextValue {
  value: string
  onChange: (value: string) => void
  registerOption: (value: string, ref: HTMLButtonElement) => void
  unregisterOption: (value: string) => void
  focusNextOption: () => void
  focusPrevOption: () => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

const useTabsContext = () => {
  const context = useContext(TabsContext)

  if (context === null) {
    throw new Error('TabsOption must be used within a Tabs component')
  }

  return context
}

// ============================================================================
// Tabs Container Component
// ============================================================================

const tabsVariants = cva(
  // Base styles
  'block',
  {
    variants: {},
    defaultVariants: {},
  }
)

const tabsWrapperVariants = cva(
  // Wrapper styles
  [
    'flex',
    'w-full',
    'h-[40px]',
    'border-b',
    'border-[var(--sinch-comp-tab-color-default-border-initial)]',
    'box-border',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof tabsVariants> {
  /**
   * Controlled selected value
   */
  value?: string
  /**
   * Default selected value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Accessible label for the tab list
   */
  'aria-label': string
  /**
   * Change handler - receives the selected value
   */
  onChange?: (value: string) => void
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
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
    const optionsRef = useRef<Map<string, HTMLButtonElement>>(new Map())
    const optionOrderRef = useRef<string[]>([])

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
      (optionValue: string, optionRef: HTMLButtonElement) => {
        if (!optionsRef.current.has(optionValue)) {
          optionOrderRef.current.push(optionValue)
        }

        optionsRef.current.set(optionValue, optionRef)
      },
      []
    )

    const unregisterOption = useCallback((optionValue: string) => {
      optionsRef.current.delete(optionValue)
      optionOrderRef.current = optionOrderRef.current.filter((v) => v !== optionValue)
    }, [])

    const getEnabledOptions = useCallback(() => {
      return optionOrderRef.current
        .map((val) => ({ value: val, element: optionsRef.current.get(val) }))
        .filter(
          (opt): opt is { value: string; element: HTMLButtonElement } =>
            opt.element !== undefined && !opt.element.disabled
        )
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
      <TabsContext.Provider
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
          data-value={currentValue}
          className={cn(tabsVariants(), className)}
          {...props}
        >
          <div className={cn(tabsWrapperVariants())}>
            {children}
          </div>
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = 'Tabs'

// ============================================================================
// Tabs Option Component
// ============================================================================

const tabsOptionButtonVariants = cva(
  // Base styles for the button
  [
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'w-full',
    'px-4',
    'py-3',
    'box-border',
    'cursor-pointer',
    'rounded-tl-[var(--sinch-comp-tab-shape-radius)]',
    'rounded-tr-[var(--sinch-comp-tab-shape-radius)]',
    'h-[39px]',
    'border-0',
    'outline-none',
    'transition-colors',
    'duration-100',
    // Reset button styles
    'appearance-none',
    'font-inherit',
    'bg-[var(--sinch-comp-tab-color-default-background-initial)]',
    'text-[var(--sinch-comp-tab-color-default-text-initial)]',
  ],
  {
    variants: {
      isChecked: {
        true: 'text-[var(--sinch-comp-tab-color-checked-text-initial)]',
        false: '',
      },
      isDisabled: {
        true: [
          'cursor-default',
          'pointer-events-none',
          'text-[var(--sinch-comp-tab-color-disabled-text-initial)]',
        ],
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      isChecked: false,
      isDisabled: false,
    },
  }
)

export interface TabsOptionProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> {
  /**
   * Value of this tab option
   */
  value: string
  /**
   * Text displayed in the tab
   */
  text: string
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode
}

export const TabsOption = forwardRef<HTMLButtonElement, TabsOptionProps>(
  (
    {
      className,
      value,
      text,
      disabled = false,
      icon,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useTabsContext()
    const internalRef = useRef<HTMLButtonElement | null>(null)

    const isChecked = context.value === value

    // Register/unregister option for keyboard navigation
    const setRef = useCallback(
      (el: HTMLButtonElement | null) => {
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
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el
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
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        switch (e.code) {
          case 'ArrowLeft':
            e.preventDefault()
            context.focusPrevOption()
            break
          case 'ArrowRight':
            e.preventDefault()
            context.focusNextOption()
            break
          case 'Home':
            e.preventDefault()
            // Focus first enabled option
            context.focusPrevOption()
            break
          case 'End':
            e.preventDefault()
            // Focus last enabled option
            context.focusNextOption()
            break
        }

        onKeyDown?.(e)
      },
      [context, onKeyDown]
    )

    // Icon color classes
    const getIconColorClass = () => {
      if (disabled) {
        return '[--sinch-global-color-icon:var(--sinch-comp-tab-color-disabled-icon-initial)]'
      }

      if (isChecked) {
        return '[--sinch-global-color-icon:var(--sinch-comp-tab-color-checked-icon-initial)]'
      }

      return '[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]'
    }

    // Hover classes
    const getHoverClasses = () => {
      if (disabled) {
        return ''
      }

      return 'hover:bg-[var(--sinch-comp-tab-color-default-background-hover)]'
    }

    return (
      <button
        ref={setRef}
        type="button"
        role="tab"
        aria-selected={isChecked}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          tabsOptionButtonVariants({ isChecked, isDisabled: disabled }),
          getHoverClasses(),
          getIconColorClass(),
          // Focus outline - positioned with pseudo-element
          'focus-visible:after:content-[""]',
          'focus-visible:after:absolute',
          'focus-visible:after:inset-0',
          'focus-visible:after:-bottom-[3px]',
          'focus-visible:after:border-2',
          'focus-visible:after:border-[var(--sinch-comp-tab-color-default-outline-focus)]',
          'focus-visible:after:rounded-tl-[var(--sinch-comp-tab-shape-radius)]',
          'focus-visible:after:rounded-tr-[var(--sinch-comp-tab-shape-radius)]',
          'focus-visible:after:pointer-events-none',
          // Checked underline - positioned with pseudo-element
          isChecked && [
            'before:content-[""]',
            'before:absolute',
            'before:left-0',
            'before:right-0',
            'before:-bottom-px',
            'before:pointer-events-none',
            'before:border-t-2',
            'before:border-[var(--sinch-comp-tab-color-checked-border-initial)]',
          ],
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {icon !== undefined && <span className="flex-shrink-0">{icon}</span>}
        <span
          className={cn(
            'flex-shrink-1',
            'flex-basis-auto',
            'min-w-0',
            'font-[var(--sinch-comp-tab-font-label)]',
            'truncate'
          )}
        >
          {text}
        </span>
      </button>
    )
  }
)
TabsOption.displayName = 'TabsOption'

// ============================================================================
// Tabs Icon Option Component (icon only with tooltip)
// ============================================================================

const tabsIconOptionButtonVariants = cva(
  // Base styles for the icon-only button
  [
    'relative',
    'flex',
    'flex-col',
    'px-4',
    'pt-3',
    'pb-0',
    'box-border',
    'cursor-pointer',
    'rounded-tl-[var(--sinch-comp-tab-shape-radius)]',
    'rounded-tr-[var(--sinch-comp-tab-shape-radius)]',
    'h-[39px]',
    'border-0',
    'outline-none',
    'transition-colors',
    'duration-100',
    // Reset button styles
    'appearance-none',
    'font-inherit',
    'bg-[var(--sinch-comp-tab-color-default-background-initial)]',
  ],
  {
    variants: {
      isChecked: {
        true: '',
        false: '',
      },
      isDisabled: {
        true: [
          'cursor-default',
          'pointer-events-none',
        ],
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      isChecked: false,
      isDisabled: false,
    },
  }
)

export interface TabsIconOptionProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> {
  /**
   * Value of this tab option
   */
  value: string
  /**
   * Accessible label (shown in tooltip)
   */
  'aria-label': string
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * Icon to display
   */
  icon: React.ReactNode
}

export const TabsIconOption = forwardRef<HTMLButtonElement, TabsIconOptionProps>(
  (
    {
      className,
      value,
      'aria-label': ariaLabel,
      disabled = false,
      icon,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useTabsContext()
    const internalRef = useRef<HTMLButtonElement | null>(null)

    const isChecked = context.value === value

    // Register/unregister option for keyboard navigation
    const setRef = useCallback(
      (el: HTMLButtonElement | null) => {
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
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el
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
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        switch (e.code) {
          case 'ArrowLeft':
            e.preventDefault()
            context.focusPrevOption()
            break
          case 'ArrowRight':
            e.preventDefault()
            context.focusNextOption()
            break
          case 'Home':
            e.preventDefault()
            context.focusPrevOption()
            break
          case 'End':
            e.preventDefault()
            context.focusNextOption()
            break
        }

        onKeyDown?.(e)
      },
      [context, onKeyDown]
    )

    // Icon color classes
    const getIconColorClass = () => {
      if (disabled) {
        return '[--sinch-global-color-icon:var(--sinch-comp-tab-color-disabled-icon-initial)]'
      }

      if (isChecked) {
        return '[--sinch-global-color-icon:var(--sinch-comp-tab-color-checked-icon-initial)]'
      }

      return '[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]'
    }

    // Hover classes
    const getHoverClasses = () => {
      if (disabled) {
        return ''
      }

      return 'hover:bg-[var(--sinch-comp-tab-color-default-background-hover)]'
    }

    const button = (
      <button
        ref={setRef}
        type="button"
        role="tab"
        aria-selected={isChecked}
        aria-label={ariaLabel}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          tabsIconOptionButtonVariants({ isChecked, isDisabled: disabled }),
          getHoverClasses(),
          getIconColorClass(),
          // Icon size
          '[--sinch-global-size-icon:var(--sinch-comp-tab-size-icon)]',
          // Focus outline - positioned with pseudo-element
          'focus-visible:after:content-[""]',
          'focus-visible:after:absolute',
          'focus-visible:after:inset-0',
          'focus-visible:after:-bottom-[3px]',
          'focus-visible:after:border-2',
          'focus-visible:after:border-[var(--sinch-comp-tab-color-default-outline-focus)]',
          'focus-visible:after:rounded-tl-[var(--sinch-comp-tab-shape-radius)]',
          'focus-visible:after:rounded-tr-[var(--sinch-comp-tab-shape-radius)]',
          'focus-visible:after:pointer-events-none',
          // Checked underline - positioned with pseudo-element
          isChecked && [
            'before:content-[""]',
            'before:absolute',
            'before:left-0',
            'before:right-0',
            'before:-bottom-px',
            'before:pointer-events-none',
            'before:border-t-2',
            'before:border-[var(--sinch-comp-tab-color-checked-border-initial)]',
          ],
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {icon}
      </button>
    )

    // Wrap in tooltip
    return (
      <Tooltip text={ariaLabel} orientation="top" type="fast">
        {button}
      </Tooltip>
    )
  }
)
TabsIconOption.displayName = 'TabsIconOption'

// Compound component export
export const TabsGroup = Object.assign(Tabs, {
  Option: TabsOption,
  IconOption: TabsIconOption,
})
