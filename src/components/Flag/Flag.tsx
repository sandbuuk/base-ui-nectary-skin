import type { FlagProps } from './Flag.types'
import styles from './Flag.module.css'

function countryCodeToEmoji(code: string): string {
  const upper = code.toUpperCase()
  const offset = 0x1F1E6 - 65 // 'A'.charCodeAt(0) = 65
  return String.fromCodePoint(
    upper.charCodeAt(0) + offset,
    upper.charCodeAt(1) + offset,
  )
}

export function Flag({
  code,
  size = 'm',
  className,
  style,
}: FlagProps) {
  const classes = [styles.root, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={classes}
      style={style}
      role="img"
      aria-label={`Flag: ${code.toUpperCase()}`}
    >
      {countryCodeToEmoji(code)}
    </span>
  )
}
