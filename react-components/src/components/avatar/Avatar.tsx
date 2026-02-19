import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback, useMemo, useState } from 'react'
import { cn } from '../../utils/cn'

/**
 * Avatar size options
 */
export type AvatarSize = 's' | 'm' | 'l'

/**
 * Avatar status options for presence indication
 */
export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline'

/**
 * Avatar color presets
 */
export type AvatarColor =
  | 'blue' | 'dark-blue' | 'dark-gray' | 'dark-green' | 'dark-orange'
  | 'dark-pink' | 'dark-red' | 'dark-violet' | 'dark-yellow' | 'default'
  | 'gray' | 'green' | 'light-blue' | 'light-gray' | 'light-green'
  | 'light-orange' | 'light-pink' | 'light-red' | 'light-violet' | 'light-yellow'
  | 'orange' | 'pink' | 'red' | 'violet' | 'yellow'

const avatarVariants = cva(
  // Base styles
  [
    'inline-block',
    'align-middle',
    'outline-none',
  ],
  {
    variants: {
      size: {
        s: '',
        m: '',
        l: '',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

const wrapperVariants = cva(
  // Base wrapper styles
  [
    'relative',
    'rounded-[var(--sinch-comp-avatar-shape-radius)]',
  ],
  {
    variants: {
      size: {
        s: 'w-[var(--sinch-comp-avatar-size-s)] h-[var(--sinch-comp-avatar-size-s)]',
        m: 'w-[var(--sinch-comp-avatar-size-m)] h-[var(--sinch-comp-avatar-size-m)]',
        l: 'w-[var(--sinch-comp-avatar-size-l)] h-[var(--sinch-comp-avatar-size-l)]',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

const textVariants = cva(
  // Base text styles
  [
    'block',
    'w-full',
    'h-full',
    'uppercase',
    'text-center',
  ],
  {
    variants: {
      size: {
        s: 'font-[var(--sinch-comp-avatar-container-font-size-s-text)] leading-[calc(var(--sinch-comp-avatar-size-s)-2px)]',
        m: 'font-[var(--sinch-comp-avatar-container-font-size-m-text)] leading-[calc(var(--sinch-comp-avatar-size-m)-2px)]',
        l: 'font-[var(--sinch-comp-avatar-container-font-size-l-text)] leading-[calc(var(--sinch-comp-avatar-size-l)-2px)]',
      },
    },
    defaultVariants: {
      size: 'm',
    },
  }
)

const statusVariants = cva(
  // Base status styles
  [
    'w-2',
    'h-2',
    'rounded-full',
  ],
  {
    variants: {
      status: {
        online: 'bg-[var(--sinch-comp-avatar-status-color-online-default-background)]',
        away: 'bg-[var(--sinch-comp-avatar-status-color-away-default-background)]',
        busy: 'bg-[var(--sinch-comp-avatar-status-color-busy-default-background)]',
        offline: 'bg-[var(--sinch-comp-avatar-status-color-offline-default-background)]',
      },
    },
  }
)

/**
 * Default person icon SVG path
 */
const PersonIcon = () => (
  <svg
    className="absolute left-0 top-0 w-full h-full fill-[var(--sinch-comp-avatar-container-color-default-foreground)]"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path d="M29.451 15.785a9.451 9.451 0 1 1-18.902 0 9.452 9.452 0 0 1 18.902 0ZM4.734 40.5c.119-7.085 5.899-12.792 13.012-12.792h4.508c7.113 0 12.893 5.707 13.012 12.792H4.734Z"/>
  </svg>
)

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  VariantProps<typeof avatarVariants> {
  /**
   * Image source URL
   */
  src?: string,

  /**
   * Alt text for the image, also used as fallback initials
   */
  alt?: string,

  /**
   * Background color preset for the avatar
   */
  color?: AvatarColor,

  /**
   * Avatar size
   * @default 'm'
   */
  size?: AvatarSize,

  /**
   * Online presence status indicator
   */
  status?: AvatarStatus,

  /**
   * Callback fired when the image fails to load
   */
  onImageError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void,
}

/**
 * Avatar component for displaying user profile images with fallback to initials.
 *
 * Features:
 * - Image with automatic fallback to initials or person icon
 * - Multiple sizes (s, m, l)
 * - Color presets for background
 * - Online presence status indicator (online, busy, away, offline)
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt = '',
      color,
      size = 'm',
      status,
      onImageError,
      style,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false)

    // Reset error state when src changes
    const handleImageError = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setImageError(true)
        onImageError?.(event)
      },
      [onImageError]
    )

    // Determine what to show: image, initials, or person icon
    const hasImage = src !== undefined && src !== '' && !imageError
    const hasAlt = alt !== undefined && alt !== ''

    // Compute dynamic styles for color
    const colorStyle = useMemo(() => {
      if (color === undefined) {
        return {}
      }

      return {
        backgroundColor: `var(--sinch-comp-avatar-container-color-${color}-background)`,
        color: `var(--sinch-comp-avatar-container-color-${color}-foreground)`,
      }
    }, [color])

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        style={style}
        {...props}
      >
        <div className={cn(wrapperVariants({ size }))}>
          {/* Circle container */}
          <div
            className={cn(
              'relative',
              'w-[calc(100%-2px)]',
              'h-[calc(100%-2px)]',
              'left-[1px]',
              'top-[1px]',
              'rounded-full',
              'bg-[var(--sinch-comp-avatar-container-color-default-background)]',
              'text-[var(--sinch-comp-avatar-container-color-default-foreground)]',
              // Mask for smooth edges
              '[mask:linear-gradient(#fff,#000)]'
            )}
            style={colorStyle}
          >
            {/* Initials text */}
            {!hasImage && hasAlt && (
              <span className={cn(textVariants({ size }))}>
                {alt}
              </span>
            )}

            {/* Image */}
            {hasImage && (
              <img
                src={src}
                alt={alt}
                onError={handleImageError}
                className="absolute left-0 top-0 w-full h-full object-contain"
              />
            )}

            {/* Default person icon when no src and no alt */}
            {!hasImage && !hasAlt && <PersonIcon/>}
          </div>

          {/* Status indicator */}
          {status !== undefined && (
            <div
              className={cn(
                'absolute',
                'left-[calc(85%-5px)]',
                'top-[calc(85%-5px)]',
                'w-[10px]',
                'h-[10px]',
                'p-[1px]',
                'box-border',
                'rounded-full',
                'bg-[var(--sinch-comp-avatar-status-color-border)]',
                'pointer-events-none'
              )}
            >
              <div className={cn(statusVariants({ status }))}/>
            </div>
          )}
        </div>
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'
