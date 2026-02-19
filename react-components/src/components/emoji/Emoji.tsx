import { forwardRef, useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

// Emoji URL processing utilities
const vs16RegExp = /\uFE0F/g
const zeroWidthJoiner = String.fromCharCode(0x200d)

const removeVS16s = (rawEmoji: string) =>
  (rawEmoji.indexOf(zeroWidthJoiner) < 0
    ? rawEmoji.replace(vs16RegExp, '')
    : rawEmoji)

function toCodePoints(unicodeSurrogates: string): string[] {
  const points = []
  let char = 0
  let previous = 0
  let i = 0

  while (i < unicodeSurrogates.length) {
    char = unicodeSurrogates.charCodeAt(i++)

    if (previous !== 0) {
      points.push((0x10000 + ((previous - 0xd800) << 10) + (char - 0xdc00)).toString(16))
      previous = 0
    } else if (char > 0xd800 && char <= 0xdbff) {
      previous = char
    } else {
      points.push(char.toString(16))
    }
  }

  return points
}

const getEmojiUrl = (baseUrl: string | null | undefined, char: string | null | undefined): string => {
  if (char === null || char === undefined || char.length === 0 || baseUrl === null || baseUrl === undefined) {
    return ''
  }

  let codepoints = toCodePoints(removeVS16s(char)).join('-')

  // Fix for "Eye in Speech Bubble" emoji
  if (codepoints === '1f441-fe0f-200d-1f5e8-fe0f') {
    codepoints = '1f441-200d-1f5e8'
  }

  return baseUrl.replace('%s', codepoints)
}

const emojiVariants = cva(
  // Base styles - display:contents to not affect layout
  'contents',
  {
    variants: {
      size: {
        xs: '[--emoji-size:16px]',
        sm: '[--emoji-size:20px]',
        md: '[--emoji-size:24px]',
        lg: '[--emoji-size:32px]',
        xl: '[--emoji-size:48px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface EmojiProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>,
    VariantProps<typeof emojiVariants> {
  /** Emoji character to display */
  char: string
  /** Base URL for emoji images. Use %s as placeholder for the codepoint */
  baseUrl?: string
  /** Vertical alignment of the emoji image */
  verticalAlign?: React.CSSProperties['verticalAlign']
  /** Custom size in pixels (overrides size variant) */
  customSize?: number
}

export const Emoji = forwardRef<HTMLSpanElement, EmojiProps>(
  ({ className, char, baseUrl, size, verticalAlign, customSize, style, ...props }, ref) => {
    const src = useMemo(() => getEmojiUrl(baseUrl, char), [baseUrl, char])

    const imageSize = customSize ?? 'var(--emoji-size, 24px)'

    return (
      <span
        ref={ref}
        className={cn(emojiVariants({ size }), className)}
        style={style}
        {...props}
      >
        {src !== '' && (
          <img
            src={src}
            alt={char}
            loading="lazy"
            style={{
              width: imageSize,
              height: imageSize,
              verticalAlign: verticalAlign ?? 'initial',
              pointerEvents: 'none',
            }}
          />
        )}
      </span>
    )
  }
)
Emoji.displayName = 'Emoji'
