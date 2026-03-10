export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface ToastProviderProps {
  /** Default timeout (ms). 0 to prevent auto-dismiss. */
  timeout?: number
  /** Max toasts visible at once */
  limit?: number
  /** Children */
  children?: React.ReactNode
}

export interface ToastData {
  variant?: ToastVariant
}
