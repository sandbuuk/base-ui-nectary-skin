import type { PersistentOverlayProps } from './PersistentOverlay.types'
import styles from './PersistentOverlay.module.css'

export function PersistentOverlay({
  open = true,
  onClose,
  position = 'bottom',
  children,
  className,
  style,
}: PersistentOverlayProps) {
  const classes = [
    styles.root,
    styles[position],
    !open ? styles.hidden : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style} role="banner" aria-hidden={!open}>
      <div className={styles.content}>{children}</div>
      {onClose && (
        <button className={styles.close} onClick={onClose} aria-label="Close" type="button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
