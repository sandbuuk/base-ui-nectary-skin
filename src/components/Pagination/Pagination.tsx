import type { PaginationProps } from './Pagination.types'
import styles from './Pagination.module.css'

function getPageNumbers(current: number, max: number): (number | 'ellipsis')[] {
  if (max <= 7) {
    return Array.from({ length: max }, (_, i) => i + 1)
  }
  const pages: (number | 'ellipsis')[] = [1]
  if (current > 3) pages.push('ellipsis')
  const start = Math.max(2, current - 1)
  const end = Math.min(max - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (current < max - 2) pages.push('ellipsis')
  pages.push(max)
  return pages
}

export function Pagination({
  value,
  max,
  onValueChange,
  className,
  style,
}: PaginationProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  const pages = getPageNumbers(value, max)

  return (
    <nav className={classes} style={style} aria-label="Pagination">
      <button
        className={styles.button}
        disabled={value <= 1}
        onClick={() => onValueChange?.(value - 1)}
        aria-label="Previous page"
        type="button"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pages.map((page, i) =>
        page === 'ellipsis' ? (
          <span key={`e${i}`} className={styles.ellipsis}>...</span>
        ) : (
          <button
            key={page}
            className={[styles.button, page === value ? styles.active : ''].join(' ')}
            onClick={() => onValueChange?.(page)}
            aria-current={page === value ? 'page' : undefined}
            type="button"
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.button}
        disabled={value >= max}
        onClick={() => onValueChange?.(value + 1)}
        aria-label="Next page"
        type="button"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  )
}
