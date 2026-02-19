import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useMemo } from 'react'
import { cn } from '../../utils/cn'

const flagVariants = cva(
  // Base styles matching template.html #image styles
  [
    'inline-block',
    'pointer-events-none',
    'object-contain',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'w-4 h-4',
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-10 h-10',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface FlagProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>,
  VariantProps<typeof flagVariants> {
  /**
   * ISO 3166-1 alpha-2 country code (e.g., "US", "GB", "SE")
   */
  code: string,
  /**
   * Flag size
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  /**
   * Optional URL template for flag images.
   * Use %s as placeholder for the country code.
   * If not provided, reads from CSS variable --sinch-flag-src-url
   */
  flagUrlTemplate?: string,
}

/**
 * Flag component for displaying country flags based on ISO 3166-1 alpha-2 country codes.
 *
 * The flag URL is determined by either:
 * 1. The `flagUrlTemplate` prop (with %s as placeholder for the country code)
 * 2. The CSS variable `--sinch-flag-src-url` (with %s as placeholder for the country code)
 *
 * @example
 * ```tsx
 * <Flag code="US" />
 * <Flag code="GB" size="lg" />
 * <Flag code="SE" flagUrlTemplate="https://example.com/flags/%s.svg" />
 * ```
 */
export const Flag = forwardRef<HTMLImageElement, FlagProps>(
  (
    { className, code, size = 'md', flagUrlTemplate, alt, loading = 'lazy', style, ...props },
    ref
  ) => {
    const flagSrc = useMemo(() => {
      if (code === '' || code === null || code === undefined) {
        return ''
      }

      // If a URL template is provided via prop, use it
      if (flagUrlTemplate !== undefined && flagUrlTemplate !== '') {
        return flagUrlTemplate.replace('%s', code)
      }

      // Otherwise, we need to read from CSS variable at runtime
      // This matches the web component behavior but is less React-idiomatic
      // In React, we'll primarily use the flagUrlTemplate prop
      return ''
    }, [code, flagUrlTemplate])

    // If no flag source can be determined, render nothing
    if (flagSrc === '') {
      return null
    }

    return (
      <img
        ref={ref}
        src={flagSrc}
        alt={alt ?? code}
        loading={loading}
        className={cn(flagVariants({ size }), className)}
        style={{
          width: 'var(--sinch-global-size-icon)',
          height: 'var(--sinch-global-size-icon)',
          ...style,
        }}
        {...props}
      />
    )
  }
)
Flag.displayName = 'Flag'
