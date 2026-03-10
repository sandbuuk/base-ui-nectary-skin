export interface FilePickerProps {
  /** Accepted file types (e.g. "image/*,.pdf") */
  accept?: string
  /** Allow multiple file selection */
  multiple?: boolean
  /** Max file size in bytes */
  maxSize?: number
  /** Disabled state */
  disabled?: boolean
  /** File selection handler */
  onChange?: (files: File[]) => void
  /** Invalid file handler */
  onInvalid?: (reason: 'size') => void
  /** Custom trigger (renders default button if omitted) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}
