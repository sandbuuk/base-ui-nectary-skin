import { type VariantProps, cva } from 'class-variance-authority'
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'

// ============================================================================
// Types
// ============================================================================

export type AccordionStatusType = 'info' | 'success' | 'warn' | 'error'

// ============================================================================
// Context
// ============================================================================

interface AccordionContextValue {
  expandedItems: Set<string>
  multiple: boolean
  toggleItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

const useAccordionContext = () => {
  const context = useContext(AccordionContext)

  if (context === null) {
    throw new Error('AccordionItem must be used within an Accordion component')
  }

  return context
}

// ============================================================================
// Accordion Container Component
// ============================================================================

const accordionVariants = cva(
  // Base styles
  'flex flex-col box-border w-full h-full',
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof accordionVariants> {
  /**
   * The currently expanded item value(s). For single mode, a string.
   * For multiple mode, comma-separated values (e.g., "item1,item2").
   */
  value?: string
  /**
   * Default expanded value(s) for uncontrolled usage.
   */
  defaultValue?: string
  /**
   * Allow multiple items to be expanded at once.
   * @default false
   */
  multiple?: boolean
  /**
   * Change handler - receives the new value (comma-separated for multiple).
   */
  onChange?: (value: string) => void
}

/**
 * Parse CSV string to Set
 */
function parseValueToSet(value: string): Set<string> {
  if (value.length === 0) {
    return new Set()
  }

  return new Set(value.split(',').map((v) => v.trim()).filter((v) => v.length > 0))
}

/**
 * Convert Set to CSV string
 */
function setToValue(set: Set<string>): string {
  return Array.from(set).join(',')
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = '',
      multiple = false,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue)

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    // Parse current value to Set for easy lookup
    const expandedItems = parseValueToSet(currentValue)

    const toggleItem = useCallback(
      (itemValue: string) => {
        let newExpandedItems: Set<string>

        if (multiple) {
          // Toggle the item in/out of the set
          newExpandedItems = new Set(expandedItems)

          if (newExpandedItems.has(itemValue)) {
            newExpandedItems.delete(itemValue)
          } else {
            newExpandedItems.add(itemValue)
          }
        } else {
          // Single mode: toggle or clear
          if (expandedItems.has(itemValue)) {
            newExpandedItems = new Set()
          } else {
            newExpandedItems = new Set([itemValue])
          }
        }

        const newValue = setToValue(newExpandedItems)

        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [expandedItems, isControlled, multiple, onChange]
    )

    return (
      <AccordionContext.Provider
        value={{
          expandedItems,
          multiple,
          toggleItem,
        }}
      >
        <div
          ref={ref}
          className={cn(accordionVariants(), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = 'Accordion'

// ============================================================================
// Accordion Item Component
// ============================================================================

const accordionItemVariants = cva(
  // Base styles
  'block outline-none min-h-[48px]',
  {
    variants: {},
    defaultVariants: {},
  }
)

const accordionItemWrapperVariants = cva(
  // Wrapper styles
  [
    'flex flex-col relative w-full h-full box-border overflow-hidden',
    'border-b border-[var(--sinch-comp-accordion-color-default-border-initial)]',
    'last:border-b-0',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const accordionButtonVariants = cva(
  // Button styles
  [
    'flex relative items-center gap-2 box-border w-full h-[48px]',
    'px-2 pl-2 pr-1',
    'cursor-pointer',
    'outline-none',
    'bg-transparent border-none',
    'text-left',
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

const statusVariants = cva(
  // Status indicator styles
  'w-2 h-2 rounded-full',
  {
    variants: {
      status: {
        success: 'bg-[var(--sinch-comp-accordion-color-default-status-success)]',
        warn: 'bg-[var(--sinch-comp-accordion-color-default-status-warning)]',
        error: 'bg-[var(--sinch-comp-accordion-color-default-status-error)]',
        info: 'bg-[var(--sinch-comp-accordion-color-default-status-info)]',
      },
    },
    defaultVariants: {},
  }
)

const focusRingVariants = cva(
  // Focus ring styles
  [
    'absolute inset-0 pointer-events-none',
    'border-2 border-[var(--sinch-comp-accordion-color-default-outline-focus)]',
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

export interface AccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Unique value identifier for this item.
   */
  value: string
  /**
   * Label text displayed in the header.
   */
  label: string
  /**
   * Optional text displayed on the right side of the header.
   */
  optionalText?: string
  /**
   * Status indicator.
   */
  status?: AccordionStatusType
  /**
   * Disabled state.
   * @default false
   */
  disabled?: boolean
  /**
   * Icon slot - rendered before the label.
   */
  icon?: React.ReactNode
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      className,
      value,
      label,
      optionalText,
      status,
      disabled = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const context = useAccordionContext()
    const [isFocused, setIsFocused] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const uniqueId = useId()
    const contentId = `accordion-content-${uniqueId}`
    const buttonId = `accordion-button-${uniqueId}`

    const isExpanded = context.expandedItems.has(value)

    const handleClick = useCallback(() => {
      if (disabled) {
        return
      }

      context.toggleItem(value)
    }, [context, disabled, value])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()

          if (!disabled) {
            context.toggleItem(value)
          }
        }
      },
      [context, disabled, value]
    )

    const handleFocus = useCallback(() => {
      setIsFocused(true)
    }, [])

    const handleBlur = useCallback(() => {
      setIsFocused(false)
    }, [])

    // Get icon color based on state
    const getIconColorClass = () => {
      if (disabled) {
        return 'text-[var(--sinch-comp-accordion-color-disabled-icon-initial)]'
      }

      return 'text-[var(--sinch-comp-accordion-color-default-icon-initial)]'
    }

    // Get title color based on state
    const getTitleColorClass = () => {
      if (disabled) {
        return 'text-[var(--sinch-comp-accordion-color-disabled-title-initial)]'
      }

      return 'text-[var(--sinch-comp-accordion-color-default-title-initial)]'
    }

    // Get optional text color based on state
    const getOptionalTextColorClass = () => {
      if (disabled) {
        return 'text-[var(--sinch-comp-accordion-color-disabled-optional-text-initial)]'
      }

      return 'text-[var(--sinch-comp-accordion-color-default-optional-text-initial)]'
    }

    return (
      <div
        ref={ref}
        className={cn(accordionItemVariants(), className)}
        {...props}
      >
        <div className={cn(accordionItemWrapperVariants())}>
          {/* Header button */}
          <button
            ref={buttonRef}
            id={buttonId}
            type="button"
            aria-controls={contentId}
            aria-expanded={isExpanded}
            disabled={disabled}
            className={cn(accordionButtonVariants({ isDisabled: disabled }))}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {/* Focus ring */}
            <div className={cn(focusRingVariants({ isFocused }))} />

            {/* Status indicator */}
            {status !== undefined && (
              <div className="w-[18px] h-6 py-2 pl-0.5 pr-2 box-border">
                <div className={cn(statusVariants({ status }))} />
              </div>
            )}

            {/* Icon slot */}
            {icon !== undefined && (
              <span className={cn('pointer-events-none', getIconColorClass())}>
                {icon}
              </span>
            )}

            {/* Title */}
            <span
              className={cn(
                'flex-1 min-w-0 truncate pointer-events-none',
                'font-[var(--sinch-comp-accordion-font-title)]',
                getTitleColorClass()
              )}
            >
              {label}
            </span>

            {/* Optional text */}
            {optionalText !== undefined && optionalText.length > 0 && (
              <span
                className={cn(
                  'pointer-events-none',
                  'font-[var(--sinch-comp-accordion-font-optional-text)]',
                  getOptionalTextColorClass()
                )}
              >
                {optionalText}
              </span>
            )}

            {/* Chevron icon */}
            <span
              className={cn(
                'pointer-events-none transition-transform duration-[250ms] ease-in-out',
                getIconColorClass(),
                isExpanded && 'rotate-180'
              )}
            >
              <Icon name="fa-chevron-down" iconsVersion="2" />
            </span>
          </button>

          {/* Content */}
          <div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            className={cn(
              'overflow-hidden',
              'transition-[max-height,opacity] duration-[250ms] ease-in-out',
              isExpanded
                ? 'max-h-[2000px] opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            )}
          >
            <div className="px-2 pb-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
AccordionItem.displayName = 'AccordionItem'

// ============================================================================
// Compound Component Export
// ============================================================================

export const AccordionGroup = Object.assign(Accordion, {
  Item: AccordionItem,
})
