import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Tooltip } from '../tooltip'
import {
  ColorSwatch,
  isSwatchColor,
  getSwatchColorFg,
  type SwatchColor,
} from '../color-swatch'

/**
 * ColorMenu - A menu for selecting colors.
 *
 * Renders a grid of color options (ColorMenuOption) that users can navigate
 * with keyboard arrows and select via click or Enter/Space.
 */

const NUM_COLS_DEFAULT = 5
const ITEM_WIDTH = 44
const ITEM_HEIGHT = 56

// ============================================================================
// Context
// ============================================================================

interface ColorMenuContextValue {
  value: string
  selectedIndex: number | null
  onOptionClick: (value: string) => void
  onOptionSelect: (index: number) => void
  registerOption: (index: number, value: string) => void
}

const ColorMenuContext = createContext<ColorMenuContextValue | null>(null)

const useColorMenuContext = () => {
  const ctx = useContext(ColorMenuContext)

  if (ctx === null) {
    throw new Error('ColorMenuOption must be used within a ColorMenu')
  }

  return ctx
}

// ============================================================================
// ColorMenu Variants
// ============================================================================

const colorMenuVariants = cva(
  // Base styles - the container
  [
    'block',
    'outline-none',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const colorMenuListboxVariants = cva(
  // The inner listbox wrapper
  [
    'flex',
    'flex-row',
    'flex-wrap',
    'px-2.5',
    'py-1',
    'overflow-y-auto',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

// ============================================================================
// ColorMenu Props
// ============================================================================

export interface ColorMenuProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof colorMenuVariants> {
  /** The currently selected color value */
  value?: string
  /** Default value for uncontrolled mode */
  defaultValue?: string
  /** Number of rows to show before scrolling */
  rows?: number
  /** Number of columns to display */
  cols?: number
  /** Callback when a color is selected */
  onChange?: (value: string) => void
}

export const ColorMenu = forwardRef<HTMLDivElement, ColorMenuProps>(
  (
    {
      className,
      children,
      value: controlledValue,
      defaultValue = '',
      rows,
      cols,
      onChange,
      onKeyDown,
      onBlur,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Track internal value for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue)
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    // Track selected (focused) option index for keyboard nav
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    // Store option values for keyboard navigation
    const optionValuesRef = useRef<Map<number, string>>(new Map())

    // Compute dimensions
    const numOptions = useMemo(() => {
      // Count children
      let count = 0

      const countChildren = (c: React.ReactNode) => {
        if (Array.isArray(c)) {
          c.forEach(countChildren)
        } else if (c !== null && c !== undefined) {
          count++
        }
      }

      countChildren(children)

      return count
    }, [children])

    const numCols = cols ?? Math.min(numOptions, NUM_COLS_DEFAULT)

    const listboxStyle = useMemo(() => {
      const style: React.CSSProperties = {}

      // Width based on columns
      if (numOptions > 0) {
        const effectiveCols = Math.min(numCols, numOptions)

        style.width = `${effectiveCols * ITEM_WIDTH}px`
      }

      // Max height based on rows
      if (rows !== undefined && rows >= 2) {
        style.maxHeight = `${rows * ITEM_HEIGHT}px`
      }

      return style
    }, [numCols, numOptions, rows])

    // Handle option click
    const handleOptionClick = useCallback(
      (optionValue: string) => {
        if (!isControlled) {
          setInternalValue(optionValue)
        }

        onChange?.(optionValue)
      },
      [isControlled, onChange]
    )

    // Handle option keyboard selection (focus)
    const handleOptionSelect = useCallback((index: number) => {
      setSelectedIndex(index)
    }, [])

    // Register option values
    const registerOption = useCallback((index: number, optionValue: string) => {
      optionValuesRef.current.set(index, optionValue)
    }, [])

    // Get option count from registered options
    const getOptionCount = useCallback(() => {
      return optionValuesRef.current.size
    }, [])

    // Keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const optionCount = getOptionCount()

        if (optionCount === 0) {
          onKeyDown?.(e)

          return
        }

        const currentIndex = selectedIndex ?? -1

        switch (e.key) {
          case 'ArrowLeft': {
            e.preventDefault()

            const newIndex =
              currentIndex <= 0 ? optionCount - 1 : currentIndex - 1

            setSelectedIndex(newIndex)

            break
          }

          case 'ArrowRight': {
            e.preventDefault()

            const newIndex =
              currentIndex < 0 || currentIndex >= optionCount - 1
                ? 0
                : currentIndex + 1

            setSelectedIndex(newIndex)

            break
          }

          case 'ArrowUp': {
            e.preventDefault()

            if (currentIndex < 0) {
              setSelectedIndex(0)
            } else {
              const newIndex = currentIndex - numCols

              if (newIndex >= 0) {
                setSelectedIndex(newIndex)
              } else {
                // Wrap to last row
                const numRows = Math.ceil(optionCount / numCols)
                const colPosition = currentIndex % numCols
                const lastRowIndex = (numRows - 1) * numCols + colPosition

                setSelectedIndex(
                  lastRowIndex < optionCount ? lastRowIndex : optionCount - 1
                )
              }
            }

            break
          }

          case 'ArrowDown': {
            e.preventDefault()

            if (currentIndex < 0) {
              setSelectedIndex(0)
            } else {
              const newIndex = currentIndex + numCols

              if (newIndex < optionCount) {
                setSelectedIndex(newIndex)
              } else {
                // Wrap to first row
                const colPosition = currentIndex % numCols

                setSelectedIndex(
                  colPosition < optionCount ? colPosition : 0
                )
              }
            }

            break
          }

          case 'Enter':
          case ' ': {
            e.preventDefault()

            if (selectedIndex !== null) {
              const selectedValue = optionValuesRef.current.get(selectedIndex)

              if (selectedValue !== undefined) {
                handleOptionClick(selectedValue)
              }
            }

            break
          }

          default:
            // Allow event to propagate for other keys
            break
        }

        onKeyDown?.(e)
      },
      [
        selectedIndex,
        numCols,
        getOptionCount,
        handleOptionClick,
        onKeyDown,
      ]
    )

    // Clear selection on blur
    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        setSelectedIndex(null)
        onBlur?.(e)
      },
      [onBlur]
    )

    // Create context value
    const contextValue = useMemo<ColorMenuContextValue>(
      () => ({
        value,
        selectedIndex,
        onOptionClick: handleOptionClick,
        onOptionSelect: handleOptionSelect,
        registerOption,
      }),
      [value, selectedIndex, handleOptionClick, handleOptionSelect, registerOption]
    )

    // Index children to pass index prop
    let optionIndex = 0

    const indexedChildren = useMemo(() => {
      const processChildren = (c: React.ReactNode): React.ReactNode => {
        if (Array.isArray(c)) {
          return c.map(processChildren)
        }

        if (
          c !== null &&
          c !== undefined &&
          typeof c === 'object' &&
          'type' in c
        ) {
          // Clone element with index
          const element = c as React.ReactElement<{ index?: number }>
          // eslint-disable-next-line react-hooks/exhaustive-deps
          const index = optionIndex++

          return { ...element, props: { ...element.props, index } }
        }

        return c
      }

      return processChildren(children)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children])

    return (
      <ColorMenuContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="listbox"
          tabIndex={0}
          aria-label={ariaLabel}
          className={cn(colorMenuVariants(), className)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          {...props}
        >
          <div
            role="presentation"
            className={cn(colorMenuListboxVariants())}
            style={listboxStyle}
          >
            {indexedChildren}
          </div>
        </div>
      </ColorMenuContext.Provider>
    )
  }
)
ColorMenu.displayName = 'ColorMenu'

// ============================================================================
// ColorMenuOption Variants
// ============================================================================

const colorMenuOptionVariants = cva(
  // Base styles - the option container
  ['block', 'outline-none'],
  {
    variants: {},
    defaultVariants: {},
  }
)

const colorMenuOptionWrapperVariants = cva(
  // The inner wrapper
  ['w-[44px]', 'h-[56px]', 'p-3', 'box-border'],
  {
    variants: {},
    defaultVariants: {},
  }
)

const colorMenuOptionSwatchWrapperVariants = cva(
  // Swatch wrapper with border ring
  [
    'relative',
    'cursor-pointer',
    'w-8',
    'h-8',
    // Pseudo-element for border ring (handled via additional div)
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

// ============================================================================
// ColorMenuOption Props
// ============================================================================

export interface ColorMenuOptionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value'> {
  /** The color value. Can be a predefined swatch color or any CSS color. */
  value: string
  /** Internal index - set automatically by ColorMenu */
  index?: number
}

export const ColorMenuOption = forwardRef<HTMLDivElement, ColorMenuOptionProps>(
  ({ className, value, index = 0, 'aria-label': ariaLabel, ...props }, ref) => {
    const ctx = useColorMenuContext()

    const isChecked = ctx.value === value
    const isSelected = ctx.selectedIndex === index

    // Register this option with the parent
    useMemo(() => {
      ctx.registerOption(index, value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, value])

    // Handle click
    const handleClick = useCallback(() => {
      ctx.onOptionClick(value)
      ctx.onOptionSelect(index)
    }, [ctx, value, index])

    // Determine icon color for custom colors
    const iconColorStyle = useMemo(() => {
      if (isSwatchColor(value)) {
        return { '--sinch-global-color-icon': getSwatchColorFg(value as SwatchColor) }
      }

      return { '--sinch-global-color-icon': value }
    }, [value])

    // Determine tooltip text
    const tooltipText = isSwatchColor(value) ? value : ''

    // Border color states
    const borderColorClass = useMemo(() => {
      if (isSelected) {
        return 'border-[var(--sinch-comp-color-menu-option-color-default-border-focus)]'
      }

      if (isChecked) {
        return 'border-[var(--sinch-comp-color-menu-option-color-default-border-selected)]'
      }

      return 'border-[var(--sinch-comp-color-menu-option-color-default-border-initial)]'
    }, [isSelected, isChecked])

    // Content to render (with or without tooltip)
    const swatchContent = (
      <div
        className={cn(colorMenuOptionSwatchWrapperVariants())}
        style={iconColorStyle as React.CSSProperties}
      >
        <ColorSwatch name={value} aria-label={ariaLabel} />
        {/* Border ring overlay */}
        <div
          className={cn(
            'absolute',
            'w-[34px]',
            'h-[34px]',
            '-inset-[3px]',
            'border-2',
            'rounded-full',
            'pointer-events-none',
            'transition-colors',
            borderColorClass,
            'hover:border-[var(--sinch-comp-color-menu-option-color-default-border-hover)]',
            'active:border-[var(--sinch-comp-color-menu-option-color-default-border-active)]'
          )}
        />
      </div>
    )

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isChecked}
        data-checked={isChecked || undefined}
        data-selected={isSelected || undefined}
        data-value={value}
        className={cn(colorMenuOptionVariants(), className)}
        onClick={handleClick}
        {...props}
      >
        <div className={cn(colorMenuOptionWrapperVariants())}>
          {tooltipText.length > 0 ? (
            <Tooltip text={tooltipText}>
              {swatchContent}
            </Tooltip>
          ) : (
            swatchContent
          )}
        </div>
      </div>
    )
  }
)
ColorMenuOption.displayName = 'ColorMenuOption'

// ============================================================================
// Compound Component Export
// ============================================================================

export const ColorMenuCompound = Object.assign(ColorMenu, {
  Option: ColorMenuOption,
})
