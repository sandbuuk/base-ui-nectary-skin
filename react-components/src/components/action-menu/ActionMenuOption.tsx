import { forwardRef, useEffect, useCallback, useRef, useImperativeHandle } from 'react'
import { cn } from '../../utils/cn'
import { useActionMenuContext } from './ActionMenu'

export interface ActionMenuOptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role' | 'onClick'> {
  /** Display text */
  text: string
  /** Disabled state */
  disabled?: boolean
  /** Label that is used for a11y (defaults to text) */
  'aria-label'?: string
  /** Icon slot - displayed before the text */
  icon?: React.ReactNode
  /** Right icon slot - displayed after the text */
  rightIcon?: React.ReactNode
  /** Click event handler */
  onClick?: () => void
  /** Internal index (set by ActionMenu) */
  index?: number
}

/**
 * ActionMenuOption is an individual option within an ActionMenu.
 * It supports disabled state, icons, and click handlers.
 *
 * @example
 * ```tsx
 * <ActionMenu aria-label="Actions">
 *   <ActionMenuOption text="Edit" onClick={() => console.log('Edit')} />
 *   <ActionMenuOption
 *     text="Settings"
 *     icon={<Icon name="settings" />}
 *     onClick={() => console.log('Settings')}
 *   />
 *   <ActionMenuOption text="Disabled" disabled />
 * </ActionMenu>
 * ```
 */
export const ActionMenuOption = forwardRef<HTMLDivElement, ActionMenuOptionProps>(
  ({
    className,
    text,
    disabled = false,
    'aria-label': ariaLabel,
    icon,
    rightIcon,
    onClick,
    index = 0,
    onMouseDown,
    onMouseOver,
    onKeyDown,
    ...props
  }, ref) => {
    const ctx = useActionMenuContext()
    const optionRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => optionRef.current!)

    const isSelected = ctx.selectedIndex === index

    // Register this option with the parent
    useEffect(() => {
      ctx.registerOption(index, disabled, onClick)
    }, [ctx, index, disabled, onClick])

    // Scroll into view when selected
    useEffect(() => {
      if (isSelected && optionRef.current && optionRef.current.scrollIntoView) {
        optionRef.current.scrollIntoView({ block: 'nearest' })
      }
    }, [isSelected])

    const handleClick = useCallback(() => {
      if (disabled) return
      onClick?.()
    }, [disabled, onClick])

    const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      onMouseDown?.(e)
      if (e.defaultPrevented || disabled) return
      handleClick()
    }, [onMouseDown, disabled, handleClick])

    const handleMouseOver = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      onMouseOver?.(e)
      if (e.defaultPrevented) return
      // Clear selection on mouse over to support mixed mouse/keyboard navigation
      if (isSelected) {
        ctx.setSelectedIndex(null)
      }
    }, [onMouseOver, isSelected, ctx])

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e)
      if (e.defaultPrevented || disabled) return

      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault()
        handleClick()
      }
    }, [onKeyDown, disabled, handleClick])

    return (
      <div
        ref={optionRef}
        role="option"
        aria-selected={isSelected && !disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel ?? text}
        tabIndex={-1}
        className={cn(
          // Base styles
          'block cursor-pointer outline-none',
          // Disabled state
          disabled && 'cursor-default',
          className
        )}
        onMouseDown={handleMouseDown}
        onMouseOver={handleMouseOver}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div
          className={cn(
            // Base wrapper styles
            'box-border flex h-10 w-full items-center gap-2.5 px-4 py-2',
            'select-none',
            // Background colors
            'bg-[var(--sinch-comp-action-menu-color-default-background-initial)]',
            // Selected state
            isSelected && !disabled && 'bg-[var(--sinch-comp-action-menu-color-default-background-selected)]',
            // Hover state (only when not disabled)
            !disabled && 'hover:bg-[var(--sinch-comp-action-menu-color-default-background-hover)]',
            // Disabled state
            disabled && [
              'pointer-events-none',
              'bg-[var(--sinch-comp-action-menu-color-disabled-background-initial)]',
            ]
          )}
          style={{
            // Set CSS custom properties for text/icon colors
            '--sinch-global-color-text': disabled
              ? 'var(--sinch-comp-action-menu-color-disabled-text-initial)'
              : 'var(--sinch-comp-action-menu-color-default-text-initial)',
            '--sinch-global-color-icon': disabled
              ? 'var(--sinch-comp-action-menu-color-disabled-icon-initial)'
              : 'var(--sinch-comp-action-menu-color-default-icon-initial)',
            '--sinch-global-size-icon': 'var(--sinch-comp-action-menu-size-icon)',
          } as React.CSSProperties}
        >
          {icon && (
            <span className="-ml-1.5">
              {icon}
            </span>
          )}
          <span
            className={cn(
              'min-w-0 flex-1 truncate',
              'text-[color:var(--sinch-global-color-text)]',
              'font-[var(--sinch-comp-action-menu-font-option)]'
            )}
          >
            {text}
          </span>
          {rightIcon && (
            <span className="-mr-1.5">
              {rightIcon}
            </span>
          )}
        </div>
      </div>
    )
  }
)
ActionMenuOption.displayName = 'ActionMenuOption'
