import type { AvatarProps } from './Avatar.types'
import styles from './Avatar.module.css'

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

const statusClassMap: Record<string, string> = {
  online: styles.statusOnline,
  busy: styles.statusBusy,
  away: styles.statusAway,
  offline: styles.statusOffline,
}

export function Avatar({
  src,
  alt,
  name,
  size = 'm',
  status,
  color,
  className,
  style,
}: AvatarProps) {
  const classes = [styles.root, styles[size], className]
    .filter(Boolean)
    .join(' ')

  const initials = name ? getInitials(name) : undefined

  return (
    <span
      className={classes}
      style={{ ...style, background: color || style?.background }}
      role="img"
      aria-label={alt || name}
    >
      {src ? (
        <img className={styles.image} src={src} alt={alt || name || ''} />
      ) : initials ? (
        <span className={styles.initials}>{initials}</span>
      ) : (
        <svg className={styles.fallback} width="60%" height="60%" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
      {status && (
        <span className={[styles.status, statusClassMap[status]].join(' ')} />
      )}
    </span>
  )
}
