import { useRef } from 'react'
import type { FilePickerProps } from './FilePicker.types'
import styles from './FilePicker.module.css'

export function FilePicker({
  accept,
  multiple,
  maxSize,
  disabled,
  onChange,
  onInvalid,
  children,
  className,
  style,
}: FilePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (!disabled) inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (!fileList) return
    const files = Array.from(fileList)

    if (maxSize) {
      const oversized = files.some((f) => f.size > maxSize)
      if (oversized) {
        onInvalid?.('size')
        return
      }
    }

    onChange?.(files)
    // Reset so same file can be re-selected
    e.target.value = ''
  }

  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style}>
      <input
        ref={inputRef}
        className={styles.hiddenInput}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        tabIndex={-1}
      />
      {children ? (
        <div onClick={handleClick} role="button" tabIndex={disabled ? -1 : 0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick() } }}>
          {children}
        </div>
      ) : (
        <button className={styles.defaultTrigger} onClick={handleClick} disabled={disabled} type="button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 2v8M4 6l4-4 4 4M2 12h12v2H2z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Choose file
        </button>
      )}
    </div>
  )
}
