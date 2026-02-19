import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback, useState } from 'react'
import { cn } from '../../utils/cn'

const toggleVariants = cva(
  // Base styles for the toggle wrapper
  [
    'inline-flex items-center gap-2 outline-none',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      small: {
        true: '[--sinch-local-size:16px] [--sinch-local-width:32px] [--sinch-local-knob-size:12px] [--sinch-local-translate:16px]',
        false: '[--sinch-local-size:20px] [--sinch-local-width:40px] [--sinch-local-knob-size:16px] [--sinch-local-translate:20px]',
      },
      disabled: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: {
      small: false,
      disabled: false,
    },
  }
)

const knobContainerVariants = cva(
  // Base styles for the knob container (the track)
  [
    'relative',
    'w-[var(--sinch-local-width)] h-[var(--sinch-local-size)]',
    'rounded-[calc(var(--sinch-local-size)*0.5)]',
    'transition-colors duration-150 ease-in-out',
    'pointer-events-none',
  ],
  {
    variants: {
      checked: {
        true: 'bg-[var(--sinch-comp-toggle-color-checked-background-initial)]',
        false: 'bg-[var(--sinch-comp-toggle-color-default-background-initial)]',
      },
      disabled: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        checked: false,
        disabled: true,
        className: 'bg-[var(--sinch-comp-toggle-color-disabled-background-initial)]',
      },
      {
        checked: true,
        disabled: true,
        className: 'bg-[var(--sinch-comp-toggle-color-checked-disabled-background-initial)]',
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)

const knobVariants = cva(
  // Base styles for the knob (the circle)
  [
    'relative',
    'w-[var(--sinch-local-knob-size)] h-[var(--sinch-local-knob-size)]',
    'left-[2px] top-[2px]',
    'rounded-full',
    'bg-[var(--sinch-comp-toggle-color-default-knob-background-initial)]',
    'transition-transform duration-150 ease-in-out',
    'will-change-transform',
  ],
  {
    variants: {
      checked: {
        true: 'translate-x-[var(--sinch-local-translate)]',
        false: 'translate-x-0',
      },
      disabled: {
        true: 'shadow-[var(--sinch-comp-toggle-shadow-knob-disabled)]',
        false: 'shadow-[var(--sinch-comp-toggle-shadow-knob-default)]',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
)

const labelVariants = cva(
  // Base styles for the label
  [
    'flex-1 min-w-0',
    'self-center',
    'overflow-hidden whitespace-nowrap text-ellipsis',
  ],
  {
    variants: {
      small: {
        true: 'font-[var(--sinch-comp-toggle-font-size-s-label)]',
        false: 'font-[var(--sinch-comp-toggle-font-size-m-label)]',
      },
      disabled: {
        true: 'text-[var(--sinch-comp-toggle-color-disabled-label-initial)]',
        false: 'text-[var(--sinch-comp-toggle-color-default-label-initial)]',
      },
    },
    defaultVariants: {
      small: false,
      disabled: false,
    },
  }
)

export interface ToggleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
  Omit<VariantProps<typeof toggleVariants>, 'disabled'> {
  /**
   * Controlled checked state
   */
  checked?: boolean,
  /**
   * Default checked state for uncontrolled usage
   */
  defaultChecked?: boolean,
  /**
   * Small size variant
   * @default false
   */
  small?: boolean,
  /**
   * Show on/off labels inside the toggle
   * @default false
   */
  labeled?: boolean,
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean,
  /**
   * Label text displayed next to the toggle
   */
  text?: string,
  /**
   * Accessible label (required if no text)
   */
  'aria-label'?: string,
  /**
   * Change handler - receives the new checked value
   */
  onChange?: (checked: boolean) => void,
  /**
   * Focus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void,
  /**
   * Blur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void,
}

/**
 * Toggle component for boolean on/off states.
 *
 * Supports controlled and uncontrolled patterns, small size variant,
 * optional on/off labels, and accessible keyboard navigation.
 */
export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  (
    {
      className,
      checked: controlledChecked,
      defaultChecked = false,
      small = false,
      labeled = false,
      disabled = false,
      text,
      'aria-label': ariaLabel,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onClick,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const [isFocused, setIsFocused] = useState(false)

    // Determine if controlled
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) {
          return
        }

        const newChecked = !checked

        if (!isControlled) {
          setInternalChecked(newChecked)
        }

        onChange?.(newChecked)
        onClick?.(e)
      },
      [disabled, checked, isControlled, onChange, onClick]
    )

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault()

          if (!disabled) {
            const newChecked = !checked

            if (!isControlled) {
              setInternalChecked(newChecked)
            }

            onChange?.(newChecked)
          }
        }

        onKeyDown?.(e)
      },
      [disabled, checked, isControlled, onChange, onKeyDown]
    )

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(true)
        onFocus?.(e)
      },
      [onFocus]
    )

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        setIsFocused(false)
        onBlur?.(e)
      },
      [onBlur]
    )

    return (
      <div
        ref={ref}
        role="checkbox"
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
        className={cn(toggleVariants({ small, disabled }), className)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {/* Knob container (track) */}
        <div className={cn(knobContainerVariants({ checked, disabled }))}>
          {/* Focus outline */}
          <div
            className={cn(
              'absolute -inset-[3px] pointer-events-none',
              'border-2 border-[var(--sinch-comp-toggle-color-default-outline-focus)]',
              'rounded-[17px]',
              isFocused ? 'block' : 'hidden'
            )}
          />
          {/* Knob */}
          <div className={cn(knobVariants({ checked, disabled }))}>
            {/* On/Off labels */}
            {labeled && !small && (
              <>
                {/* "on" label - visible when checked */}
                <span
                  className={cn(
                    'absolute top-0 right-full px-[1px]',
                    'font-[var(--sinch-comp-toggle-font-size-m-inside-text)]',
                    'text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]',
                    'uppercase select-none',
                    'transition-opacity duration-150 ease-in-out',
                    checked ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  on
                </span>
                {/* "off" label - visible when unchecked */}
                <span
                  className={cn(
                    'absolute top-0 left-full px-[1px]',
                    'font-[var(--sinch-comp-toggle-font-size-m-inside-text)]',
                    'text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]',
                    'uppercase select-none',
                    'transition-opacity duration-150 ease-in-out',
                    checked ? 'opacity-0' : 'opacity-100'
                  )}
                >
                  off
                </span>
              </>
            )}
          </div>
        </div>

        {/* Label text */}
        {text && (
          <span className={cn(labelVariants({ small, disabled }))}>
            {text}
          </span>
        )}
      </div>
    )
  }
)
Toggle.displayName = 'Toggle'
