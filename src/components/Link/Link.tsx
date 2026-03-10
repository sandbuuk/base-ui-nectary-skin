import type { LinkProps } from './Link.types'
import styles from './Link.module.css'

export function Link({
  href,
  external,
  disabled,
  standalone,
  'aria-label': ariaLabel,
  children,
  onClick,
  className,
  style,
}: LinkProps) {
  const classes = [
    styles.root,
    standalone ? styles.standalone : undefined,
    disabled ? styles.disabled : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      className={classes}
      style={style}
      href={disabled ? undefined : href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={onClick}
    >
      {children}
      {external && (
        <svg className={styles.externalIcon} width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M6 3h7v7M13 3L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {standalone && !external && (
        <svg className={styles.externalIcon} width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  )
}
