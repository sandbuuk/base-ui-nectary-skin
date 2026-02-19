import { type VariantProps, cva } from 'class-variance-authority'
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'
import { Input } from '../input'

// ============================================================================
// Context
// ============================================================================

interface SelectMenuContextValue {
  value: string
  multiple: boolean
  onChange: (optionValue: string) => void
  registerOption: (
    optionValue: string,
    ref: HTMLDivElement,
    text: string,
    disabled: boolean
  ) => void
  unregisterOption: (optionValue: string) => void
  selectedOptionValue: string | null
  setSelectedOptionValue: (value: string | null) => void
  isValueSelected: (optionValue: string) => boolean
}

const SelectMenuContext = createContext<SelectMenuContextValue | null>(null)

const useSelectMenuContext = () => {
  const context = useContext(SelectMenuContext)

  if (context === null) {
    throw new Error(
      'SelectMenuOption must be used within a SelectMenu component'
    )
  }

  return context
}

// ============================================================================
// SelectMenu Component
// ============================================================================

const ITEM_HEIGHT = 40
const NUM_ITEMS_SEARCH = 7

const selectMenuVariants = cva(
  // Base styles
  ['block outline-none'],
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface SelectMenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Name for form submissions
   */
  name?: string
  /**
   * Selected value (CSV for multiple)
   */
  value?: string
  /**
   * Default value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Number of visible rows before scrolling
   */
  rows?: number
  /**
   * Allow multiple selection
   * @default false
   */
  multiple?: boolean
  /**
   * Show search bar (null = auto based on option count)
   * @default null
   */
  searchable?: boolean | null
  /**
   * Current search value
   */
  searchValue?: string
  /**
   * Default search value for uncontrolled usage
   */
  defaultSearchValue?: string
  /**
   * Search placeholder text
   * @default 'Search'
   */
  searchPlaceholder?: string
  /**
   * Autocomplete attribute for search input
   */
  searchAutocomplete?: string
  /**
   * Accessible label
   */
  'aria-label': string
  /**
   * Change handler - receives the selected value(s)
   */
  onChange?: (value: string) => void
  /**
   * Search change handler
   */
  onSearchChange?: (searchValue: string) => void
}

export const SelectMenu = forwardRef<HTMLDivElement, SelectMenuProps>(
  (
    {
      className,
      name,
      value: controlledValue,
      defaultValue = '',
      rows,
      multiple = false,
      searchable = null,
      searchValue: controlledSearchValue,
      defaultSearchValue = '',
      searchPlaceholder = 'Search',
      searchAutocomplete,
      'aria-label': ariaLabel,
      onChange,
      onSearchChange,
      children,
      ...props
    },
    ref
  ) => {
    // Internal state
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [internalSearchValue, setInternalSearchValue] =
      useState(defaultSearchValue)
    const [selectedOptionValue, setSelectedOptionValue] = useState<
      string | null
    >(null)
    const [optionCount, setOptionCount] = useState(0)

    // Options registry for keyboard navigation
    const optionsRef = useRef<
      Map<
        string,
        { element: HTMLDivElement; text: string; disabled: boolean }
      >
    >(new Map())

    // Controlled vs uncontrolled
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue

    const isSearchControlled = controlledSearchValue !== undefined
    const currentSearchValue = isSearchControlled
      ? controlledSearchValue
      : internalSearchValue

    // Parse CSV values for multiple selection
    const selectedValues = useMemo(() => {
      if (currentValue === '') {
        return new Set<string>()
      }

      return new Set(currentValue.split(',').map((v) => v.trim()))
    }, [currentValue])

    const isValueSelected = useCallback(
      (optionValue: string) => selectedValues.has(optionValue),
      [selectedValues]
    )

    // Show search based on searchable prop and option count
    const showSearch = useMemo(() => {
      if (searchable === true) {
        return true
      }

      if (searchable === false) {
        return false
      }

      return optionCount >= NUM_ITEMS_SEARCH
    }, [searchable, optionCount])

    // Calculate max height for scrolling
    const maxHeight = useMemo(() => {
      if (rows === undefined) {
        return undefined
      }

      const height = rows * ITEM_HEIGHT

      // Add extra space if there are more items
      if (optionCount > rows) {
        return height + ITEM_HEIGHT / 2
      }

      return height
    }, [rows, optionCount])

    // Handle value change
    const handleChange = useCallback(
      (optionValue: string) => {
        let newValue: string

        if (multiple) {
          const values = new Set(selectedValues)

          if (values.has(optionValue)) {
            values.delete(optionValue)
          } else {
            values.add(optionValue)
          }

          newValue = Array.from(values).join(',')
        } else {
          newValue = optionValue
        }

        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [isControlled, multiple, onChange, selectedValues]
    )

    // Handle search change
    const handleSearchChange = useCallback(
      (value: string) => {
        if (!isSearchControlled) {
          setInternalSearchValue(value)
        }

        onSearchChange?.(value)
      },
      [isSearchControlled, onSearchChange]
    )

    // Register option
    const registerOption = useCallback(
      (
        optionValue: string,
        optionRef: HTMLDivElement,
        text: string,
        disabled: boolean
      ) => {
        optionsRef.current.set(optionValue, {
          element: optionRef,
          text,
          disabled,
        })
        setOptionCount((c) => c + 1)
      },
      []
    )

    // Unregister option
    const unregisterOption = useCallback((optionValue: string) => {
      optionsRef.current.delete(optionValue)
      setOptionCount((c) => Math.max(0, c - 1))
    }, [])

    // Get enabled, visible options
    const getEnabledOptions = useCallback(() => {
      return Array.from(optionsRef.current.entries())
        .filter(([, data]) => {
          if (data.disabled) {
            return false
          }

          // Check if hidden by search
          if (
            currentSearchValue !== '' &&
            !data.text.toLowerCase().includes(currentSearchValue.toLowerCase())
          ) {
            return false
          }

          return true
        })
        .map(([val, data]) => ({ value: val, element: data.element }))
    }, [currentSearchValue])

    // Keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        const options = getEnabledOptions()

        if (options.length === 0) {
          return
        }

        switch (e.code) {
          case 'ArrowDown': {
            e.preventDefault()
            const currentIndex = options.findIndex(
              (opt) => opt.value === selectedOptionValue
            )
            const nextIndex =
              currentIndex < 0 ? 0 : (currentIndex + 1) % options.length
            const nextOption = options[nextIndex]

            setSelectedOptionValue(nextOption.value)
            nextOption.element.scrollIntoView?.({ block: 'nearest' })
            break
          }
          case 'ArrowUp': {
            e.preventDefault()
            const currentIndex = options.findIndex(
              (opt) => opt.value === selectedOptionValue
            )
            const prevIndex =
              currentIndex < 0
                ? options.length - 1
                : (currentIndex - 1 + options.length) % options.length
            const prevOption = options[prevIndex]

            setSelectedOptionValue(prevOption.value)
            prevOption.element.scrollIntoView?.({ block: 'nearest' })
            break
          }
          case 'Enter':
          case 'Space': {
            if (selectedOptionValue !== null) {
              e.preventDefault()
              handleChange(selectedOptionValue)
            }

            break
          }
        }
      },
      [getEnabledOptions, handleChange, selectedOptionValue]
    )

    // Handle blur - reset selection
    const handleBlur = useCallback(
      (e: React.FocusEvent) => {
        // Only reset if focus is leaving the entire component
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setSelectedOptionValue(null)
        }
      },
      []
    )

    // Filter options based on search
    const filteredChildren = useMemo(() => {
      if (currentSearchValue === '') {
        return children
      }

      // Count visible options to show "no results"
      let visibleCount = 0

      const filterChildren = (
        childNodes: React.ReactNode
      ): React.ReactNode[] => {
        const result: React.ReactNode[] = []

        React.Children.forEach(childNodes, (child) => {
          if (!React.isValidElement(child)) {
            result.push(child)

            return
          }

          // Check if it's a SelectMenuOption
          if (
            child.type === SelectMenuOption ||
            (child.type as { displayName?: string }).displayName ===
              'SelectMenuOption'
          ) {
            const text = (child.props as SelectMenuOptionProps).text ?? ''

            if (
              text.toLowerCase().includes(currentSearchValue.toLowerCase())
            ) {
              visibleCount++
              result.push(child)
            }
          } else {
            result.push(child)
          }
        })

        return result
      }

      const filtered = filterChildren(children)

      // Show "no results" if nothing matches
      if (visibleCount === 0) {
        return (
          <div
            className={cn(
              'flex items-center justify-center w-full h-[30px] mb-[10px]',
              'pointer-events-none select-none',
              'text-[var(--sinch-comp-select-menu-color-default-not-found-text-initial,var(--sinch-sys-color-text-muted))]',
              'font-[var(--sinch-comp-select-menu-font-not-found-text)]'
            )}
          >
            No results
          </div>
        )
      }

      return filtered
    }, [children, currentSearchValue])

    return (
      <SelectMenuContext.Provider
        value={{
          value: currentValue,
          multiple,
          onChange: handleChange,
          registerOption,
          unregisterOption,
          selectedOptionValue,
          setSelectedOptionValue,
          isValueSelected,
        }}
      >
        <div
          ref={ref}
          role="listbox"
          tabIndex={0}
          aria-label={ariaLabel}
          aria-multiselectable={multiple || undefined}
          data-name={name}
          data-value={currentValue}
          className={cn(selectMenuVariants(), className)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          {...props}
        >
          {/* Search input */}
          {showSearch && (
            <div className="mx-[10px] my-[10px]">
              <Input
                size="s"
                value={currentSearchValue}
                placeholder={searchPlaceholder}
                autoComplete={searchAutocomplete}
                aria-label="Search options"
                icon={<Icon name="magnifying-glass" iconsVersion="2" />}
                onChange={handleSearchChange}
                rightAddon={
                  currentSearchValue !== '' ? (
                    <button
                      type="button"
                      className="flex items-center justify-center p-1 hover:bg-surface-secondary-hover rounded-sm"
                      onClick={() => handleSearchChange('')}
                      aria-label="Clear search"
                    >
                      <Icon name="fa-xmark" iconsVersion="2" size="xs" />
                    </button>
                  ) : undefined
                }
              />
            </div>
          )}

          {/* Options listbox */}
          <div
            role="presentation"
            className="overflow-y-auto"
            style={{
              maxHeight:
                maxHeight !== undefined ? `${maxHeight}px` : undefined,
            }}
          >
            {filteredChildren}
          </div>
        </div>
      </SelectMenuContext.Provider>
    )
  }
)
SelectMenu.displayName = 'SelectMenu'

// ============================================================================
// SelectMenuOption Component
// ============================================================================

const selectMenuOptionVariants = cva(
  // Base styles - wrapper
  [
    'flex relative box-border min-h-[40px] px-4 py-2',
    'items-center gap-[10px]',
    'select-none cursor-pointer',
    'bg-[var(--sinch-comp-select-menu-color-default-background-initial,transparent)]',
    'text-[var(--sinch-comp-select-menu-color-default-option-initial,var(--sinch-sys-color-text-default))]',
  ],
  {
    variants: {
      isSelected: {
        true: 'bg-[var(--sinch-comp-select-menu-color-default-background-selected,var(--sinch-sys-color-surface-secondary-default))]',
        false: '',
      },
      isDisabled: {
        true: [
          'cursor-default pointer-events-none',
          'bg-[var(--sinch-comp-select-menu-color-disabled-background-initial,transparent)]',
          'text-[var(--sinch-comp-select-menu-color-disabled-option-initial,var(--sinch-sys-color-text-disabled))]',
        ],
        false:
          'hover:bg-[var(--sinch-comp-select-menu-color-default-background-hover,var(--sinch-sys-color-surface-secondary-hover))]',
      },
    },
    defaultVariants: {
      isSelected: false,
      isDisabled: false,
    },
  }
)

export interface SelectMenuOptionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'content'> {
  /**
   * Option value
   */
  value: string
  /**
   * Display text
   */
  text?: string
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * Accessible label
   */
  'aria-label'?: string
  /**
   * Icon element to display on the left
   */
  icon?: React.ReactNode
  /**
   * Custom content to replace text
   */
  customContent?: React.ReactNode
}

export const SelectMenuOption = forwardRef<
  HTMLDivElement,
  SelectMenuOptionProps
>(
  (
    {
      className,
      value,
      text = '',
      disabled = false,
      'aria-label': ariaLabel,
      icon,
      customContent,
      children,
      ...props
    },
    ref
  ) => {
    const {
      registerOption,
      unregisterOption,
      onChange,
      setSelectedOptionValue,
      selectedOptionValue,
      isValueSelected,
    } = useSelectMenuContext()

    const internalRef = useRef<HTMLDivElement | null>(null)

    const isChecked = isValueSelected(value)
    const isKeyboardSelected = selectedOptionValue === value

    // Register/unregister option
    const setRef = useCallback(
      (el: HTMLDivElement | null) => {
        internalRef.current = el

        if (el !== null) {
          registerOption(value, el, text, disabled)
        } else {
          unregisterOption(value)
        }

        if (ref !== null) {
          if (typeof ref === 'function') {
            ref(el)
          } else {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = el
          }
        }
      },
      [disabled, ref, registerOption, text, unregisterOption, value]
    )

    // Update registration when props change
    useEffect(() => {
      if (internalRef.current !== null) {
        registerOption(value, internalRef.current, text, disabled)
      }
    }, [disabled, registerOption, text, value])

    const handleClick = useCallback(() => {
      if (disabled) {
        return
      }

      onChange(value)
    }, [disabled, onChange, value])

    const handleMouseEnter = useCallback(() => {
      if (!disabled) {
        setSelectedOptionValue(value)
      }
    }, [disabled, setSelectedOptionValue, value])

    return (
      <div
        ref={setRef}
        role="option"
        aria-selected={isChecked}
        aria-disabled={disabled}
        aria-label={ariaLabel ?? text}
        className={cn(
          selectMenuOptionVariants({
            isSelected: isKeyboardSelected,
            isDisabled: disabled,
          }),
          className
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {/* Icon slot */}
        {icon !== undefined && (
          <div
            className={cn(
              '-ml-[6px]',
              disabled
                ? '[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]'
                : '[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]'
            )}
          >
            {icon}
          </div>
        )}

        {/* Content slot or text */}
        {customContent !== undefined ? (
          <div className="flex-1 min-w-0 pointer-events-none">{customContent}</div>
        ) : (
          <span
            className={cn(
              'flex-1 min-w-0',
              'font-[var(--sinch-comp-select-menu-font-option)]',
              'truncate'
            )}
          >
            {text}
            {children}
          </span>
        )}

        {/* Check icon - visible when checked */}
        {isChecked && (
          <div
            className={cn(
              '-mr-[6px]',
              disabled
                ? '[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]'
                : '[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]'
            )}
          >
            <Icon name="fa-check" iconsVersion="2" />
          </div>
        )}
      </div>
    )
  }
)
SelectMenuOption.displayName = 'SelectMenuOption'

// ============================================================================
// SelectButton Component
// ============================================================================

const selectButtonVariants = cva(
  // Base styles
  [
    'relative inline-flex items-center gap-2 box-border w-full',
    'outline-none cursor-pointer align-middle',
    'bg-[var(--sinch-comp-select-button-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]',
  ],
  {
    variants: {
      size: {
        s: [
          'h-[var(--sinch-comp-select-button-size-container-s,32px)]',
          'rounded-[var(--sinch-comp-select-button-shape-radius-size-s,var(--sinch-sys-shape-radius-s))]',
          'px-3 pr-1',
        ],
        m: [
          'h-[var(--sinch-comp-select-button-size-container-m,40px)]',
          'rounded-[var(--sinch-comp-select-button-shape-radius-size-m,var(--sinch-sys-shape-radius-m))]',
          'px-3 pr-2',
        ],
        l: [
          'h-[var(--sinch-comp-select-button-size-container-l,48px)]',
          'rounded-[var(--sinch-comp-select-button-shape-radius-size-l,var(--sinch-sys-shape-radius-l))]',
          'px-3',
        ],
      },
      isDisabled: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: {
      size: 'm',
      isDisabled: false,
    },
  }
)

const selectButtonBorderVariants = cva(
  // Base border styles
  [
    'absolute inset-0 pointer-events-none',
    'border border-[var(--sinch-comp-select-button-color-default-border-initial,var(--sinch-sys-color-border-default))]',
  ],
  {
    variants: {
      size: {
        s: 'rounded-[var(--sinch-comp-select-button-shape-radius-size-s,var(--sinch-sys-shape-radius-s))]',
        m: 'rounded-[var(--sinch-comp-select-button-shape-radius-size-m,var(--sinch-sys-shape-radius-m))]',
        l: 'rounded-[var(--sinch-comp-select-button-shape-radius-size-l,var(--sinch-sys-shape-radius-l))]',
      },
      isFocused: {
        true: 'border-[var(--sinch-comp-select-button-color-default-border-focus,var(--sinch-sys-color-focus))] border-2',
        false: '',
      },
      isInvalid: {
        true: 'border-[var(--sinch-comp-select-button-color-invalid-border-initial,var(--sinch-sys-color-feedback-danger-default))]',
        false: '',
      },
      isDisabled: {
        true: 'border-[var(--sinch-comp-select-button-color-disabled-border-initial,var(--sinch-sys-color-border-disabled))]',
        false: '',
      },
    },
    compoundVariants: [
      // Disabled overrides everything
      {
        isDisabled: true,
        className:
          'border-[var(--sinch-comp-select-button-color-disabled-border-initial,var(--sinch-sys-color-border-disabled))]',
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

export type SelectButtonSize = 's' | 'm' | 'l'

export interface SelectButtonProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onClick' | 'onFocus' | 'onBlur'
  >,
  VariantProps<typeof selectButtonVariants> {
  /**
   * Display text (selected value label)
   */
  text?: string
  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string
  /**
   * Size variant
   * @default 'm'
   */
  size?: SelectButtonSize
  /**
   * Invalid/error state
   * @default false
   */
  invalid?: boolean
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * Accessible label
   */
  'aria-label': string
  /**
   * Click handler
   */
  onClick?: () => void
  /**
   * Focus handler
   */
  onFocus?: () => void
  /**
   * Blur handler
   */
  onBlur?: () => void
  /**
   * Icon element to display on the left
   */
  icon?: React.ReactNode
  /**
   * Content to display on the left (before the text)
   */
  leftAddon?: React.ReactNode
}

export const SelectButton = forwardRef<HTMLDivElement, SelectButtonProps>(
  (
    {
      className,
      text,
      placeholder,
      size = 'm',
      invalid = false,
      disabled = false,
      'aria-label': ariaLabel,
      onClick,
      onFocus,
      onBlur,
      icon,
      leftAddon,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleClick = useCallback(() => {
      if (disabled) {
        return
      }

      onClick?.()
    }, [disabled, onClick])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault()
          handleClick()
        }
      },
      [handleClick]
    )

    const handleFocus = useCallback(() => {
      setIsFocused(true)
      onFocus?.()
    }, [onFocus])

    const handleBlur = useCallback(() => {
      setIsFocused(false)
      onBlur?.()
    }, [onBlur])

    const hasText = text !== undefined && text !== ''

    // Icon size based on button size
    const getIconSize = () => {
      switch (size) {
        case 's':
          return 'var(--sinch-comp-select-button-size-icon-s,16px)'
        case 'l':
          return 'var(--sinch-comp-select-button-size-icon-l,24px)'
        default:
          return 'var(--sinch-comp-select-button-size-icon-m,20px)'
      }
    }

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={ariaLabel}
        aria-invalid={invalid || undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          selectButtonVariants({ size, isDisabled: disabled }),
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={
          {
            '--sinch-global-size-icon': getIconSize(),
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Border overlay */}
        <div
          className={cn(
            selectButtonBorderVariants({
              size,
              isFocused,
              isInvalid: invalid && !isFocused,
              isDisabled: disabled,
            })
          )}
        />

        {/* Left addon */}
        {leftAddon !== undefined && (
          <div className="flex flex-row items-center self-stretch gap-1 -ml-1">
            {leftAddon}
          </div>
        )}

        {/* Icon */}
        {icon !== undefined && (
          <div
            className={cn(
              disabled
                ? '[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]'
                : '[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]'
            )}
          >
            {icon}
          </div>
        )}

        {/* Text or placeholder */}
        {hasText ? (
          <span
            className={cn(
              'flex-1 min-w-0 truncate',
              'font-[var(--sinch-comp-select-button-font-input)]',
              disabled
                ? 'text-[var(--sinch-comp-select-button-color-disabled-text-initial,var(--sinch-sys-color-text-disabled))]'
                : 'text-[var(--sinch-comp-select-button-color-default-text-initial,var(--sinch-sys-color-text-default))]'
            )}
          >
            {text}
          </span>
        ) : (
          <span
            className={cn(
              'flex-1 min-w-0 truncate',
              'font-[var(--sinch-comp-select-button-font-placeholder)]',
              disabled
                ? 'text-[var(--sinch-comp-select-button-color-disabled-placeholder-initial,var(--sinch-sys-color-text-disabled))]'
                : 'text-[var(--sinch-comp-select-button-color-default-placeholder-initial,var(--sinch-sys-color-text-muted))]'
            )}
          >
            {placeholder}
          </span>
        )}

        {/* Dropdown icon */}
        <div
          className={cn(
            '-ml-1',
            disabled
              ? '[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]'
              : '[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]'
          )}
        >
          <Icon name="fa-chevron-down" iconsVersion="2" />
        </div>
      </div>
    )
  }
)
SelectButton.displayName = 'SelectButton'

// ============================================================================
// Compound Export
// ============================================================================

export const Select = Object.assign(SelectMenu, {
  Option: SelectMenuOption,
  Button: SelectButton,
})
