import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useMemo } from 'react'
import { cn } from '../../utils/cn'

const iconVariants = cva(
  // Base styles matching template.html #icon styles
  [
    'inline-block',
    'leading-none',
    'whitespace-nowrap',
    'select-none',
    'antialiased',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'w-4 h-4 text-[16px]',
        sm: 'w-5 h-5 text-[20px]',
        md: 'w-6 h-6 text-[24px]',
        lg: 'w-8 h-8 text-[32px]',
        xl: 'w-10 h-10 text-[40px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

// Get font family CSS variable based on icon name prefix (for icons-version 2)
const getFontFamilyVar = (name: string, iconsVersion: '1' | '2'): string => {
  if (iconsVersion === '1') {
    return 'var(--sinch-comp-icon-font-family)'
  }

  // Check the icon name pattern (ignoring "fa-" prefix)
  if (/^(fa-|(?!fa-))[0-9a-d]/i.test(name)) {
    return 'var(--sinch-comp-icon-font-family-zero-to-d)'
  }

  if (/^(fa-|(?!fa-))[e-o]/i.test(name)) {
    return 'var(--sinch-comp-icon-font-family-e-to-o)'
  }

  if (/^(fa-|(?!fa-))[p-z]/i.test(name)) {
    return 'var(--sinch-comp-icon-font-family-p-to-z)'
  }

  return 'var(--sinch-comp-icon-font-family)'
}

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>,
  VariantProps<typeof iconVariants> {
  /**
   * Icon name to display
   */
  name: string,
  /**
   * Icon font version
   * @default '1'
   */
  iconsVersion?: '1' | '2',
  /**
   * Icon size
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

/**
 * Icon component for displaying icon font glyphs.
 *
 * Uses the icon name as text content with icon font families.
 * Supports size variants and custom styling through CSS variables.
 *
 * @example
 * ```tsx
 * <Icon name="circle-check" />
 * <Icon name="bell" size="lg" />
 * <Icon name="fa-star" iconsVersion="2" className="text-warning" />
 * ```
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    { className, name, iconsVersion = '1', size = 'md', style, ...props },
    ref
  ) => {
    const fontFamily = useMemo(
      () => getFontFamilyVar(name, iconsVersion),
      [name, iconsVersion]
    )

    return (
      <span
        ref={ref}
        role="img"
        aria-label={name}
        className={cn(iconVariants({ size }), className)}
        style={{
          fontFamily,
          fontWeight: 'var(--sinch-comp-icon-font-weight)' as any,
          fontFeatureSettings: 'var(--sinch-comp-icon-font-feature-settings)',
          color: 'var(--sinch-global-color-icon, var(--sinch-sys-color-text-default))',
          ...style,
        }}
        {...props}
      >
        {name}
      </span>
    )
  }
)
Icon.displayName = 'Icon'
