import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { Spinner } from '../spinner'

/**
 * Button variant types from the web component.
 * Note: 'tertiary' is deprecated and maps to 'subtle-primary'
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'cta-primary'
  | 'cta-secondary'
  | 'destructive'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'

const buttonVariants = cva(
  // Base styles
  [
    'relative inline-flex items-center justify-center',
    'font-sans select-none cursor-pointer',
    'transition-all duration-150',
    'outline-none',
    'border border-solid',
    // Focus ring
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--sinch-comp-button-color-primary-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-primary-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-primary-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-primary-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-primary-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-primary-hover)]',
          'active:bg-[var(--sinch-comp-button-color-primary-default-background-active)]',
          'active:shadow-[var(--sinch-comp-button-shadow-primary-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-primary-focus)]',
          'focus-visible:ring-[var(--sinch-comp-button-color-primary-default-outline-focus)]',
        ],
        secondary: [
          'bg-[var(--sinch-comp-button-color-secondary-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-secondary-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-secondary-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-secondary-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-secondary-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-secondary-hover)]',
          'active:bg-[var(--sinch-comp-button-color-secondary-default-background-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-secondary-focus)]',
          'focus-visible:ring-[var(--sinch-comp-button-color-secondary-default-outline-focus)]',
        ],
        'subtle-primary': [
          'bg-[var(--sinch-comp-button-color-subtle-primary-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-subtle-primary-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-subtle-primary-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-subtle-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-subtle-primary-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-subtle-hover)]',
          'active:bg-[var(--sinch-comp-button-color-subtle-primary-default-background-active)]',
          'active:shadow-[var(--sinch-comp-button-shadow-subtle-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-subtle-focus)]',
          'focus-visible:ring-[var(--sinch-comp-button-color-subtle-primary-default-outline-focus)]',
        ],
        'subtle-secondary': [
          'bg-[var(--sinch-comp-button-color-subtle-secondary-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-subtle-secondary-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-subtle-secondary-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-subtle-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-subtle-secondary-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-subtle-hover)]',
          'active:bg-[var(--sinch-comp-button-color-subtle-secondary-default-background-active)]',
          'active:shadow-[var(--sinch-comp-button-shadow-subtle-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-subtle-focus)]',
          'focus-visible:ring-[var(--sinch-comp-button-color-subtle-secondary-default-outline-focus)]',
        ],
        'cta-primary': [
          'bg-[var(--sinch-comp-button-color-cta-primary-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-cta-primary-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-cta-primary-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-cta-primary-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-cta-primary-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-cta-primary-hover)]',
          'active:bg-[var(--sinch-comp-button-color-cta-primary-default-background-active)]',
          'active:shadow-[var(--sinch-comp-button-shadow-cta-primary-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-cta-primary-focus)]',
          'focus-visible:ring-[var(--sinch-comp-button-color-cta-primary-default-outline-focus)]',
        ],
        'cta-secondary': [
          'bg-[var(--sinch-comp-button-color-cta-secondary-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-cta-secondary-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-cta-secondary-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-cta-secondary-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-cta-secondary-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-cta-secondary-hover)]',
          'active:bg-[var(--sinch-comp-button-color-cta-secondary-default-background-active)]',
          'active:shadow-[var(--sinch-comp-button-shadow-cta-secondary-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-cta-secondary-focus)]',
          'focus-visible:ring-[var(--sinch-comp-button-color-cta-secondary-default-outline-focus)]',
        ],
        destructive: [
          'bg-[var(--sinch-comp-button-color-danger-default-background-initial)]',
          'border-[var(--sinch-comp-button-color-danger-default-border-initial)]',
          'text-[var(--sinch-comp-button-color-danger-default-text-initial)]',
          'shadow-[var(--sinch-comp-button-shadow-danger-initial)]',
          'hover:bg-[var(--sinch-comp-button-color-danger-default-background-hover)]',
          'hover:shadow-[var(--sinch-comp-button-shadow-danger-hover)]',
          'active:bg-[var(--sinch-comp-button-color-danger-default-background-active)]',
          'active:shadow-[var(--sinch-comp-button-shadow-danger-active)]',
          'focus-visible:shadow-[var(--sinch-comp-button-shadow-danger-focus)]',
        ],
      },
      size: {
        xs: [
          'h-[var(--sinch-comp-button-size-container-xs)]',
          'px-2',
          'text-[length:var(--sinch-comp-button-font-size-s-text)]',
          'gap-2',
          'rounded-[var(--sinch-comp-button-shape-radius-size-xs)]',
        ],
        s: [
          'h-[var(--sinch-comp-button-size-container-s)]',
          'px-3',
          'text-[length:var(--sinch-comp-button-font-size-s-text)]',
          'gap-2',
          'rounded-[var(--sinch-comp-button-shape-radius-size-s)]',
        ],
        m: [
          'h-[var(--sinch-comp-button-size-container-m)]',
          'px-4',
          'text-[length:var(--sinch-comp-button-font-size-m-text)]',
          'gap-3',
          'rounded-[var(--sinch-comp-button-shape-radius-size-m)]',
        ],
        l: [
          'h-[var(--sinch-comp-button-size-container-l)]',
          'px-4',
          'text-[length:var(--sinch-comp-button-font-size-l-text)]',
          'gap-3',
          'rounded-[var(--sinch-comp-button-shape-radius-size-l)]',
        ],
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Icon-only button padding adjustments
      { iconOnly: true, size: 'xs', className: 'px-1' },
      { iconOnly: true, size: 's', className: 'px-1' },
      { iconOnly: true, size: 'm', className: 'px-2' },
      { iconOnly: true, size: 'l', className: 'px-2' },
    ],
    defaultVariants: {
      variant: 'secondary',
      size: 'm',
      iconOnly: false,
    },
  }
)

// Disabled styles per variant
const disabledVariantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[var(--sinch-comp-button-color-primary-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-primary-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-primary-disabled-text-initial)]',
    'shadow-[var(--sinch-comp-button-shadow-primary-disabled)]',
  ].join(' '),
  secondary: [
    'bg-[var(--sinch-comp-button-color-secondary-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-secondary-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-secondary-disabled-text-initial)]',
    'shadow-[var(--sinch-comp-button-shadow-secondary-disabled)]',
  ].join(' '),
  'subtle-primary': [
    'bg-[var(--sinch-comp-button-color-subtle-primary-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-subtle-primary-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-subtle-primary-disabled-text-initial)]',
    'shadow-[var(--sinch-comp-button-shadow-subtle-disabled)]',
  ].join(' '),
  'subtle-secondary': [
    'bg-[var(--sinch-comp-button-color-subtle-secondary-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-subtle-secondary-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-subtle-secondary-disabled-text-initial)]',
    'shadow-[var(--sinch-comp-button-shadow-subtle-disabled)]',
  ].join(' '),
  'cta-primary': [
    'bg-[var(--sinch-comp-button-color-cta-primary-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-cta-primary-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-cta-primary-disabled-text-initial)]',
    'shadow-[var(--sinch-comp-button-shadow-cta-primary-disabled)]',
  ].join(' '),
  'cta-secondary': [
    'bg-[var(--sinch-comp-button-color-cta-secondary-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-cta-secondary-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-cta-secondary-disabled-text-initial)]',
    'shadow-[var(--sinch-comp-button-shadow-cta-secondary-disabled)]',
  ].join(' '),
  destructive: [
    'bg-[var(--sinch-comp-button-color-danger-disabled-background-initial)]',
    'border-[var(--sinch-comp-button-color-danger-disabled-border-initial)]',
    'text-[var(--sinch-comp-button-color-danger-disabled-text-initial)]',
  ].join(' '),
}

// Toggled styles for subtle variants
const toggledVariantStyles: Record<string, string> = {
  'subtle-primary': 'bg-[var(--sinch-comp-button-color-subtle-primary-toggled-background-initial)]',
  'subtle-secondary': 'bg-[var(--sinch-comp-button-color-subtle-secondary-toggled-background-initial)]',
}

export type ButtonFormType = 'submit' | 'reset' | 'button'

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
  Omit<VariantProps<typeof buttonVariants>, 'iconOnly'> {
  /**
   * Button variant/style
   * @default 'secondary'
   */
  variant?: ButtonVariant,

  /**
   * Button size
   * @default 'm'
   */
  size?: ButtonSize,

  /**
   * Text content for the button
   */
  text?: string,

  /**
   * Icon to display (for icon-only buttons)
   */
  icon?: React.ReactNode,

  /**
   * Icon to display on the left side of the text
   */
  leftIcon?: React.ReactNode,

  /**
   * Icon to display on the right side of the text
   */
  rightIcon?: React.ReactNode,

  /**
   * Whether the button is in a loading state
   */
  loading?: boolean,

  /**
   * Whether the button is in a toggled/pressed state
   * Only applicable for subtle variants
   */
  toggled?: boolean,

  /**
   * Form behavior type
   * @default 'button'
   */
  formType?: ButtonFormType,
}

/**
 * Button component for user interactions.
 *
 * Supports multiple variants (primary, secondary, subtle, cta, destructive),
 * sizes (xs, s, m, l), icons, loading state, and toggled state.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'secondary',
      size = 'm',
      text,
      icon,
      leftIcon,
      rightIcon,
      loading = false,
      toggled = false,
      disabled = false,
      formType = 'button',
      children,
      ...props
    },
    ref
  ) => {
    // Determine if this is an icon-only button
    const hasText = text !== undefined || children !== undefined
    const isIconOnly = !hasText && icon !== undefined

    // Determine the effective disabled state (disabled or loading)
    const isDisabled = disabled || loading

    // For icon-only buttons without explicit variant, default to subtle-secondary
    const effectiveVariant = isIconOnly && variant === 'secondary' ? 'subtle-secondary' : variant

    // Build the className
    const buttonClasses = cn(
      buttonVariants({ variant: effectiveVariant, size, iconOnly: isIconOnly }),
      // Disabled styles
      isDisabled && [
        'cursor-not-allowed',
        'pointer-events-none',
        disabledVariantStyles[effectiveVariant],
      ],
      // Toggled state (only for subtle variants when not disabled)
      !isDisabled && toggled && toggledVariantStyles[effectiveVariant],
      className
    )

    // Spinner size mapping
    const spinnerSize = size === 'l' ? 'm' : 's'

    return (
      <button
        ref={ref}
        type={formType}
        disabled={isDisabled}
        aria-pressed={toggled ? 'true' : undefined}
        aria-busy={loading ? 'true' : undefined}
        className={buttonClasses}
        {...props}
      >
        {/* Loading spinner replaces left icon when loading */}
        {loading ? (
          <Spinner size={spinnerSize} className="shrink-0"/>
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        {/* Icon for icon-only buttons */}
        {isIconOnly && !loading && <span className="shrink-0">{icon}</span>}

        {/* Text content */}
        {hasText && (
          <span className="truncate">
            {text ?? children}
          </span>
        )}

        {/* Right icon */}
        {rightIcon && !loading && <span className="shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)
Button.displayName = 'Button'
