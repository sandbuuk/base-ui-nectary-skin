import { Progress as BaseProgress } from '@base-ui-components/react/progress'
import type { ProgressProps } from './Progress.types'
import styles from './Progress.module.css'

export function Progress({
  value,
  'aria-label': ariaLabel,
  label,
  className,
  style,
}: ProgressProps) {
  const classes = [
    styles.root,
    value == null ? styles.indeterminate : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <BaseProgress.Root
      className={classes}
      style={style}
      value={value ?? null}
      aria-label={ariaLabel}
    >
      {(label || value != null) && (
        <div className={styles.labelRow}>
          {label && <span>{label}</span>}
          {value != null && <span>{Math.round(value)}%</span>}
        </div>
      )}
      <BaseProgress.Track className={styles.track}>
        <BaseProgress.Indicator className={styles.indicator} />
      </BaseProgress.Track>
    </BaseProgress.Root>
  )
}
