import { type VariantProps, cva } from 'class-variance-authority'
import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon/Icon'

// ============================================================================
// Types
// ============================================================================

export type ProgressStepperStatus = 'inactive' | 'incomplete' | 'complete'

// ============================================================================
// Context
// ============================================================================

interface ProgressStepperContextValue {
  value: string
  progressValue: string
  itemValues: string[]
  onChange: (value: string) => void
  registerItem: (value: string, ref: HTMLDivElement) => void
  unregisterItem: (value: string) => void
  focusNextItem: () => void
  focusPrevItem: () => void
}

const ProgressStepperContext = createContext<ProgressStepperContextValue | null>(null)

const useProgressStepperContext = () => {
  const context = useContext(ProgressStepperContext)

  if (context === null) {
    throw new Error('ProgressStepperItem must be used within a ProgressStepper component')
  }

  return context
}

// ============================================================================
// ProgressStepper Component
// ============================================================================

const progressStepperVariants = cva(
  // Base styles
  'block',
  {
    variants: {},
    defaultVariants: {},
  }
)

const wrapperVariants = cva(
  'flex w-full',
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface ProgressStepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof progressStepperVariants> {
  /**
   * Controlled selected item value
   */
  value?: string
  /**
   * Default selected value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Current progress value - determines which steps are complete/incomplete/inactive
   */
  progressValue?: string
  /**
   * Accessible label for the progress stepper
   */
  'aria-label'?: string
  /**
   * Change handler - receives the selected step value
   */
  onChange?: (value: string) => void
}

export const ProgressStepper = forwardRef<HTMLDivElement, ProgressStepperProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = '',
      progressValue = '',
      'aria-label': ariaLabel,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue)

    // Track registered items for keyboard navigation
    const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map())

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    // Extract item values from children in render order
    const itemValues = useMemo(() => {
      const values: string[] = []
      Children.forEach(children, (child) => {
        if (isValidElement(child) && typeof child.props === 'object' && child.props !== null) {
          const props = child.props as { value?: string }

          if (typeof props.value === 'string') {
            values.push(props.value)
          }
        }
      })

      return values
    }, [children])

    const handleChange = useCallback(
      (newValue: string) => {
        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [isControlled, onChange]
    )

    const registerItem = useCallback(
      (itemValue: string, itemRef: HTMLDivElement) => {
        itemsRef.current.set(itemValue, itemRef)
      },
      []
    )

    const unregisterItem = useCallback((itemValue: string) => {
      itemsRef.current.delete(itemValue)
    }, [])

    const getItemStatus = useCallback((itemValue: string): ProgressStepperStatus => {
      const progressIndex = itemValues.indexOf(progressValue)
      const itemIndex = itemValues.indexOf(itemValue)

      if (progressIndex < 0 || progressIndex < itemIndex) {
        return 'inactive'
      } else if (progressIndex > itemIndex) {
        return 'complete'
      } else {
        return 'incomplete'
      }
    }, [itemValues, progressValue])

    const isItemActive = useCallback((itemValue: string): boolean => {
      const status = getItemStatus(itemValue)

      return status !== 'inactive'
    }, [getItemStatus])

    const getActiveItems = useCallback(() => {
      return itemValues
        .filter(itemValue => isItemActive(itemValue))
        .map(itemValue => ({
          value: itemValue,
          element: itemsRef.current.get(itemValue),
        }))
        .filter(item => item.element !== undefined) as Array<{ value: string, element: HTMLDivElement }>
    }, [itemValues, isItemActive])

    const focusNextItem = useCallback(() => {
      const activeItems = getActiveItems()

      if (activeItems.length === 0) {
        return
      }

      const currentIndex = activeItems.findIndex(item => item.value === currentValue)
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % activeItems.length
      const nextItem = activeItems[nextIndex]

      nextItem.element.focus()
    }, [currentValue, getActiveItems])

    const focusPrevItem = useCallback(() => {
      const activeItems = getActiveItems()

      if (activeItems.length === 0) {
        return
      }

      const currentIndex = activeItems.findIndex(item => item.value === currentValue)
      const prevIndex = currentIndex < 0 ? activeItems.length - 1 : (currentIndex - 1 + activeItems.length) % activeItems.length
      const prevItem = activeItems[prevIndex]

      prevItem.element.focus()
    }, [currentValue, getActiveItems])

    return (
      <ProgressStepperContext.Provider
        value={{
          value: currentValue,
          progressValue,
          itemValues,
          onChange: handleChange,
          registerItem,
          unregisterItem,
          focusNextItem,
          focusPrevItem,
        }}
      >
        <div
          ref={ref}
          role="tablist"
          aria-label={ariaLabel}
          data-value={currentValue}
          data-progress-value={progressValue}
          className={cn(progressStepperVariants(), className)}
          {...props}
        >
          <div className={wrapperVariants()}>
            {children}
          </div>
        </div>
      </ProgressStepperContext.Provider>
    )
  }
)
ProgressStepper.displayName = 'ProgressStepper'

// ============================================================================
// ProgressStepperItem Component
// ============================================================================

const progressStepperItemVariants = cva(
  // Base styles
  'flex-1 min-w-0 outline-none',
  {
    variants: {},
    defaultVariants: {},
  }
)

const buttonVariants = cva(
  // Base styles
  [
    'relative flex flex-col gap-1 w-full h-full',
    'p-[8px_4px_4px] box-border',
    'rounded-[var(--sinch-comp-progress-stepper-step-shape-radius)]',
    'transition-colors',
  ],
  {
    variants: {
      status: {
        inactive: 'cursor-not-allowed',
        incomplete: 'cursor-pointer hover:bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-background-hover)]',
        complete: 'cursor-pointer hover:bg-[var(--sinch-comp-progress-stepper-step-color-complete-background-hover)]',
      },
      invalid: {
        true: 'hover:bg-[var(--sinch-comp-progress-stepper-step-color-invalid-background-hover)]',
        false: '',
      },
    },
    defaultVariants: {
      status: 'inactive',
      invalid: false,
    },
  }
)

const outlineVariants = cva(
  [
    'absolute inset-[-2px] pointer-events-none',
    'border-2 border-[var(--sinch-comp-progress-stepper-step-color-outline-focus)]',
    'rounded-[calc(var(--sinch-comp-progress-stepper-step-shape-radius)+2px)]',
    'transition-opacity opacity-0',
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

const progressTrackVariants = cva(
  'h-2 rounded transition-colors',
  {
    variants: {
      status: {
        inactive: 'bg-[var(--sinch-comp-progress-stepper-step-color-inactive-progress-background)]',
        incomplete: 'bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-progress-background)]',
        complete: 'bg-[var(--sinch-comp-progress-stepper-step-color-complete-progress-background)]',
      },
      invalid: {
        true: 'bg-[var(--sinch-comp-progress-stepper-step-color-invalid-progress-background)]',
        false: '',
      },
    },
    defaultVariants: {
      status: 'inactive',
      invalid: false,
    },
  }
)

const progressBarVariants = cva(
  'w-2 h-2 rounded transition-[width,opacity]',
  {
    variants: {
      status: {
        inactive: 'opacity-0',
        incomplete: 'bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-progress-bar)] opacity-100',
        complete: 'bg-[var(--sinch-comp-progress-stepper-step-color-complete-progress-bar)] w-full opacity-100',
      },
      invalid: {
        true: 'opacity-0',
        false: '',
      },
    },
    defaultVariants: {
      status: 'inactive',
      invalid: false,
    },
  }
)

const getLabelColorClass = (status: ProgressStepperStatus, isChecked: boolean, invalid: boolean): string => {
  if (invalid) {
    return '[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-invalid-label-default)]'
  }

  if (status === 'incomplete' && isChecked) {
    return '[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-current-label-default)]'
  }

  if (status === 'complete' && isChecked) {
    return '[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-current-label-default)]'
  }

  if (status === 'incomplete') {
    return '[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-label-default)]'
  }

  if (status === 'complete') {
    return '[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-label-default)]'
  }

  return '[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-inactive-label-default)]'
}

const getLabelFontClass = (status: ProgressStepperStatus, isChecked: boolean, invalid: boolean): string => {
  if (invalid && isChecked) {
    return '[font:var(--sinch-comp-progress-stepper-step-font-invalid-current-label)]'
  }

  if (invalid) {
    return '[font:var(--sinch-comp-progress-stepper-step-font-invalid-label)]'
  }

  if (status === 'incomplete' && isChecked) {
    return '[font:var(--sinch-comp-progress-stepper-step-font-incomplete-current-label)]'
  }

  if (status === 'complete' && isChecked) {
    return '[font:var(--sinch-comp-progress-stepper-step-font-complete-current-label)]'
  }

  if (status === 'incomplete') {
    return '[font:var(--sinch-comp-progress-stepper-step-font-incomplete-label)]'
  }

  if (status === 'complete') {
    return '[font:var(--sinch-comp-progress-stepper-step-font-complete-label)]'
  }

  return '[font:var(--sinch-comp-progress-stepper-step-font-inactive-label)]'
}

// Helper to get item status
const getItemStatus = (itemValue: string, progressValue: string, itemValues: string[]): ProgressStepperStatus => {
  const progressIndex = itemValues.indexOf(progressValue)
  const itemIndex = itemValues.indexOf(itemValue)

  if (progressIndex < 0 || progressIndex < itemIndex) {
    return 'inactive'
  } else if (progressIndex > itemIndex) {
    return 'complete'
  } else {
    return 'incomplete'
  }
}

export interface ProgressStepperItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Value of this step item
   */
  value: string
  /**
   * Text label for this step
   */
  text?: string
  /**
   * Invalid/error state for this step
   * @default false
   */
  invalid?: boolean
}

export const ProgressStepperItem = forwardRef<HTMLDivElement, ProgressStepperItemProps>(
  (
    {
      className,
      value,
      text,
      invalid = false,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useProgressStepperContext()
    const [isFocused, setIsFocused] = useState(false)
    const internalRef = useRef<HTMLDivElement | null>(null)

    const isChecked = context.value === value
    const status = getItemStatus(value, context.progressValue, context.itemValues)
    const isActive = status !== 'inactive'

    // Register/unregister item for keyboard navigation
    const setRef = useCallback(
      (el: HTMLDivElement | null) => {
        internalRef.current = el

        if (el !== null) {
          context.registerItem(value, el)
        } else {
          context.unregisterItem(value)
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
      if (!isActive) {
        return
      }

      context.onChange(value)
    }, [context, isActive, value])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.code) {
          case 'Enter':
          case 'Space':
            e.preventDefault()

            if (isActive) {
              context.onChange(value)
            }

            break
          case 'ArrowRight':
            e.preventDefault()
            context.focusNextItem()
            break
          case 'ArrowLeft':
            e.preventDefault()
            context.focusPrevItem()
            break
        }

        onKeyDown?.(e)
      },
      [context, isActive, onKeyDown, value]
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
        aria-invalid={invalid || undefined}
        tabIndex={isActive ? 0 : -1}
        data-status={status}
        data-checked={isChecked || undefined}
        data-value={value}
        className={cn(progressStepperItemVariants(), className)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        <div className={cn(buttonVariants({ status, invalid }))}>
          {/* Progress track */}
          <div className={cn(progressTrackVariants({ status, invalid }))}>
            <div className={cn(progressBarVariants({ status, invalid }))} />
          </div>

          {/* Label bar */}
          <div className="relative">
            {/* Error icon */}
            <Icon
              name="triangle-exclamation"
              iconsVersion="2"
              size="xs"
              aria-hidden
              className={cn(
                'absolute left-0 top-0 pointer-events-none transition-opacity',
                '[--sinch-global-color-icon:var(--sinch-comp-progress-stepper-step-color-invalid-icon-default)]',
                invalid ? 'opacity-100' : 'opacity-0'
              )}
            />

            {/* Text label */}
            <span
              className={cn(
                'flex-shrink min-w-0 transition-transform pr-6',
                'text-[color:var(--sinch-global-color-text)]',
                getLabelColorClass(status, isChecked, invalid),
                getLabelFontClass(status, isChecked, invalid),
                invalid ? 'translate-x-6' : 'translate-x-0'
              )}
            >
              {text}
            </span>
          </div>

          {/* Focus outline */}
          <div className={cn(outlineVariants({ isFocused }))} />
        </div>
      </div>
    )
  }
)
ProgressStepperItem.displayName = 'ProgressStepperItem'

// Attach subcomponent
export const ProgressStepperGroup = Object.assign(ProgressStepper, {
  Item: ProgressStepperItem,
})
