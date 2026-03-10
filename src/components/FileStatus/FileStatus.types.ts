export type FileStatusType = 'pending' | 'loading' | 'progress' | 'success' | 'error'

export interface FileStatusProps {
  /** Status type */
  type: FileStatusType
  /** File name */
  filename: string
  /** Progress percentage (0-100, for 'progress' type) */
  progress?: number
  /** Action slot (buttons/controls) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}
