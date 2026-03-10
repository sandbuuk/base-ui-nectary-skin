import { Toast as BaseToast } from '@base-ui-components/react/toast'
import type { ToastProviderProps, ToastData } from './Toast.types'
import styles from './Toast.module.css'

export function ToastProvider({ timeout = 5000, limit = 3, children }: ToastProviderProps) {
  return (
    <BaseToast.Provider timeout={timeout} limit={limit}>
      {children}
      <ToastViewport />
    </BaseToast.Provider>
  )
}

function ToastViewport() {
  const { toasts } = BaseToast.useToastManager()

  return (
    <BaseToast.Viewport className={styles.viewport}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </BaseToast.Viewport>
  )
}

function ToastItem({ toast }: { toast: any }) {
  const variant = (toast.data as ToastData | undefined)?.variant ?? 'info'
  const classes = [styles.root, styles[variant]].filter(Boolean).join(' ')

  return (
    <BaseToast.Root toast={toast} className={classes}>
      <BaseToast.Content className={styles.content}>
        {toast.title && <BaseToast.Title className={styles.title}>{toast.title}</BaseToast.Title>}
        {toast.description && (
          <BaseToast.Description className={styles.description}>
            {toast.description}
          </BaseToast.Description>
        )}
      </BaseToast.Content>
      <BaseToast.Close className={styles.close} aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </BaseToast.Close>
    </BaseToast.Root>
  )
}

export { BaseToast as Toast }
export const useToast = BaseToast.useToastManager
