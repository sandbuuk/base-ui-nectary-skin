import type { InlineAlertProps } from './InlineAlert.types'
import styles from './InlineAlert.module.css'

const iconPaths: Record<string, string> = {
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  error: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
  success: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
}

export function InlineAlert({
  variant = 'info',
  caption,
  children,
  className,
  style,
}: InlineAlertProps) {
  const classes = [styles.root, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style} role="status">
      <span className={styles.icon}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d={iconPaths[variant]} />
        </svg>
      </span>
      <div className={styles.body}>
        {caption && <div className={styles.caption}>{caption}</div>}
        {children && <div className={styles.text}>{children}</div>}
      </div>
    </div>
  )
}
