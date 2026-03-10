import type { FileStatusProps } from './FileStatus.types'
import styles from './FileStatus.module.css'

const statusIcons: Record<string, React.ReactNode> = {
  pending: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13zM9 13h6v2H9v-2zm0 4h6v2H9v-2z" />
    </svg>
  ),
  loading: (
    <svg className={styles.spinner} width="20" height="20" viewBox="0 0 50 50" aria-hidden>
      <circle fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="60 200" cx="25" cy="25" r="20" />
    </svg>
  ),
  progress: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
    </svg>
  ),
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
}

export function FileStatus({
  type,
  filename,
  progress = 0,
  children,
  className,
  style,
}: FileStatusProps) {
  const classes = [
    styles.root,
    type === 'error' ? styles.error : undefined,
    type === 'success' ? styles.success : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style}>
      <span className={styles.icon}>{statusIcons[type]}</span>
      <div className={styles.content}>
        <div className={styles.filename}>{filename}</div>
        {type === 'progress' && (
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
          </div>
        )}
      </div>
      {children && <div className={styles.actions}>{children}</div>}
    </div>
  )
}
