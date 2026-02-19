import {
  forwardRef,
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useImperativeHandle,
  Children,
  isValidElement,
  cloneElement,
} from 'react'
import { cn } from '../../utils/cn'

const ITEM_HEIGHT = 40

// Context for menu state
interface ActionMenuContextValue {
  selectedIndex: number | null
  setSelectedIndex: (index: number | null) => void
  registerOption: (index: number, disabled: boolean, onClick?: () => void) => void
  getEnabledIndices: () => number[]
  triggerSelectedOption: () => void
}

const ActionMenuContext = createContext<ActionMenuContextValue | null>(null)

export const useActionMenuContext = () => {
  const ctx = useContext(ActionMenuContext)
  if (!ctx) {
    throw new Error('ActionMenuOption must be used within an ActionMenu')
  }
  return ctx
}

export interface ActionMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
  /** How many rows to show and scroll the rest */
  rows?: number
  /** Label that is used for a11y */
  'aria-label': string
  /** Children elements (typically ActionMenuOption components) */
  children?: React.ReactNode
}

/**
 * ActionMenu is a dropdown menu component that displays a list of action options.
 * It supports keyboard navigation (Arrow Up/Down, Enter, Space) and accessible roles.
 *
 * @example
 * ```tsx
 * <ActionMenu aria-label="Actions">
 *   <ActionMenuOption text="Edit" onClick={() => console.log('Edit')} />
 *   <ActionMenuOption text="Delete" onClick={() => console.log('Delete')} />
 *   <ActionMenuOption text="Disabled" disabled />
 * </ActionMenu>
 * ```
 */
export const ActionMenu = forwardRef<HTMLDivElement, ActionMenuProps>(
  ({ className, rows, children, 'aria-label': ariaLabel, onKeyDown, onBlur, ...props }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const optionStates = useRef<Map<number, { disabled: boolean; onClick?: () => void }>>(new Map())
    const menuRef = useRef<HTMLDivElement>(null)
    const listboxRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => menuRef.current!)

    const registerOption = useCallback((index: number, disabled: boolean, onClick?: () => void) => {
      optionStates.current.set(index, { disabled, onClick })
    }, [])

    const getEnabledIndices = useCallback(() => {
      const indices: number[] = []
      optionStates.current.forEach((state, index) => {
        if (!state.disabled) {
          indices.push(index)
        }
      })
      return indices.sort((a, b) => a - b)
    }, [])

    const triggerSelectedOption = useCallback(() => {
      if (selectedIndex !== null) {
        const state = optionStates.current.get(selectedIndex)
        if (state && !state.disabled && state.onClick) {
          state.onClick()
        }
      }
    }, [selectedIndex])

    const getNextIndex = useCallback((direction: 'up' | 'down'): number | null => {
      const enabledIndices = getEnabledIndices()
      if (enabledIndices.length === 0) return null

      if (selectedIndex === null) {
        return direction === 'down' ? enabledIndices[0] : enabledIndices[enabledIndices.length - 1]
      }

      const currentPos = enabledIndices.indexOf(selectedIndex)
      if (currentPos === -1) {
        return enabledIndices[0]
      }

      if (direction === 'down') {
        return enabledIndices[(currentPos + 1) % enabledIndices.length]
      } else {
        return enabledIndices[(currentPos - 1 + enabledIndices.length) % enabledIndices.length]
      }
    }, [selectedIndex, getEnabledIndices])

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e)
      if (e.defaultPrevented) return

      switch (e.code) {
        case 'ArrowDown': {
          e.preventDefault()
          const nextIndex = getNextIndex('down')
          setSelectedIndex(nextIndex)
          break
        }
        case 'ArrowUp': {
          e.preventDefault()
          const prevIndex = getNextIndex('up')
          setSelectedIndex(prevIndex)
          break
        }
        case 'Enter':
        case 'Space': {
          if (selectedIndex !== null) {
            e.preventDefault()
            triggerSelectedOption()
          }
          break
        }
      }
    }, [onKeyDown, getNextIndex, selectedIndex, triggerSelectedOption])

    const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
      onBlur?.(e)
      // Only clear selection if focus is leaving the menu entirely
      if (!menuRef.current?.contains(e.relatedTarget as Node)) {
        setSelectedIndex(null)
      }
    }, [onBlur])

    // Calculate max height based on rows
    const maxHeight = rows !== undefined && rows !== null ? rows * ITEM_HEIGHT : undefined

    // Render children with index prop
    const childrenWithIndex = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child as React.ReactElement<{ index?: number }>, { index })
      }
      return child
    })

    const contextValue: ActionMenuContextValue = {
      selectedIndex,
      setSelectedIndex,
      registerOption,
      getEnabledIndices,
      triggerSelectedOption,
    }

    return (
      <ActionMenuContext.Provider value={contextValue}>
        <div
          ref={menuRef}
          role="listbox"
          tabIndex={0}
          aria-label={ariaLabel}
          className={cn(
            // Base styles
            'block outline-none',
            className
          )}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          {...props}
        >
          <div
            ref={listboxRef}
            role="presentation"
            className="overflow-y-auto"
            style={{ maxHeight }}
          >
            {childrenWithIndex}
          </div>
        </div>
      </ActionMenuContext.Provider>
    )
  }
)
ActionMenu.displayName = 'ActionMenu'
