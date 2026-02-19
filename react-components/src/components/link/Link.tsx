import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'

/**
 * Link component variants:
 * - Default (inline): Displays as inline text with underline
 * - Standalone: Displays as block with arrow icon
 */

const linkVariants = cva(
  // Base styles for the anchor element
  [
    'font-[var(--sinch-comp-link-default-font-initial)]',
    'rounded-[0.5em]',
    'whitespace-nowrap',
    'transition-colors',
    'outline-none',
    'focus-visible:outline-2',
    'focus-visible:outline-[var(--sinch-comp-link-color-default-outline-focus)]',
    'focus-visible:outline-offset-2',
  ],
  {
    variants: {
      standalone: {
        true: [
          'block',
          'w-fit',
          'font-[var(--sinch-comp-link-standalone-font-initial)]',
          'no-underline',
        ],
        false: [
          'inline',
          '[text-decoration:var(--sinch-comp-link-default-text-decoration-initial)]',
          'text-[var(--sinch-comp-link-color-default-text-initial)]',
          'hover:[text-decoration:var(--sinch-comp-link-default-text-decoration-hover)]',
          'hover:text-[var(--sinch-comp-link-color-default-text-hover)]',
        ],
      },
      disabled: {
        true: [
          'text-[var(--sinch-comp-link-color-disabled-text-initial)]',
          'pointer-events-none',
          'cursor-default',
          '[text-decoration:var(--sinch-comp-link-default-text-decoration-disabled)]',
        ],
        false: [],
      },
    },
    compoundVariants: [
      // Standalone + not disabled: apply text colors
      {
        standalone: true,
        disabled: false,
        className: [
          'text-[var(--sinch-comp-link-color-default-text-initial)]',
          'hover:text-[var(--sinch-comp-link-color-default-text-hover)]',
        ],
      },
    ],
    defaultVariants: {
      standalone: false,
      disabled: false,
    },
  }
)

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
  Omit<VariantProps<typeof linkVariants>, 'disabled'> {
  /**
   * Text content of the link
   */
  text?: string,

  /**
   * URL that the link points to
   */
  href: string,

  /**
   * When true, uses history.pushState instead of navigating (for SPA routing)
   */
  useHistory?: boolean,

  /**
   * Whether the link is disabled
   */
  disabled?: boolean,

  /**
   * When true, opens link in new tab and shows external icon
   */
  external?: boolean,

  /**
   * Standalone mode displays as block with an arrow icon
   */
  standalone?: boolean,

  /**
   * Prevents default anchor behavior on click
   */
  preventDefault?: boolean,
}

/**
 * Link component for navigation within the application or to external URLs.
 *
 * Supports inline and standalone display modes, external link indicators,
 * and SPA-friendly history navigation.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      text,
      href,
      useHistory = false,
      disabled = false,
      external = false,
      standalone = false,
      preventDefault: preventDefaultProp,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    // Determine if we should prevent default behavior
    const shouldPreventDefault = preventDefaultProp ?? useHistory

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault()

        return
      }

      if (shouldPreventDefault) {
        e.preventDefault()

        if (useHistory) {
          history.pushState({}, '', href)
        }
      }

      onClick?.(e)
    }

    // Icon color class for non-disabled state
    const iconColorClass = disabled
      ? '[--sinch-global-color-icon:var(--sinch-comp-link-color-disabled-icon-initial)]'
      : '[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-initial)] hover:[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-hover)]'

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        referrerPolicy="no-referrer"
        aria-disabled={disabled || undefined}
        onClick={handleClick}
        className={cn(
          linkVariants({ standalone, disabled }),
          iconColorClass,
          className
        )}
        {...props}
      >
        <span className="whitespace-[var(--sinch-global-text-white-space,normal)]">
          {text ?? children}
        </span>

        {/* Standalone and external: show prefix space and external icon */}
        {standalone && external && (
          <>
            <span>&nbsp;</span>
            <Icon
              name="fa-arrow-up-right"
              className="inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"
            />
          </>
        )}

        {/* Standalone but not external: show arrow-right icon */}
        {standalone && !external && (
          <>
            <span>&nbsp;</span>
            <Icon
              name="fa-arrow-right"
              className="inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"
            />
          </>
        )}

        {/* Inline external: show external icon after text */}
        {!standalone && external && (
          <Icon
            name="fa-arrow-up-right"
            className="inline-block ml-1 align-[-0.2em] h-[1em] [--sinch-global-size-icon:1em]"
          />
        )}
      </a>
    )
  }
)
Link.displayName = 'Link'
