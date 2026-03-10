import { Dialog as BaseDialog } from '@base-ui-components/react/dialog'
import type {
  DialogRootProps,
  DialogTriggerProps,
  DialogPopupProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
} from './Dialog.types'
import styles from './Dialog.module.css'

function Root({ open, defaultOpen, onOpenChange, children }: DialogRootProps) {
  return (
    <BaseDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </BaseDialog.Root>
  )
}

function Trigger({ children, className, style }: DialogTriggerProps) {
  return (
    <BaseDialog.Trigger className={className} style={style}>
      {children}
    </BaseDialog.Trigger>
  )
}

function Popup({ children, className, style }: DialogPopupProps) {
  const classes = [styles.popup, className].filter(Boolean).join(' ')
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className={styles.backdrop} />
      <BaseDialog.Popup className={classes} style={style}>
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}

function Title({ children, className, style }: DialogTitleProps) {
  const classes = [styles.title, className].filter(Boolean).join(' ')
  return (
    <BaseDialog.Title className={classes} style={style}>
      {children}
    </BaseDialog.Title>
  )
}

function Description({ children, className, style }: DialogDescriptionProps) {
  const classes = [styles.description, className].filter(Boolean).join(' ')
  return (
    <BaseDialog.Description className={classes} style={style}>
      {children}
    </BaseDialog.Description>
  )
}

function Close({ children, className, style }: DialogCloseProps) {
  return (
    <BaseDialog.Close className={className} style={style}>
      {children}
    </BaseDialog.Close>
  )
}

export const Dialog = {
  Root,
  Trigger,
  Popup,
  Title,
  Description,
  Close,
}
