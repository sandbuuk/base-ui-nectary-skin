import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react/alert-dialog'
import type {
  AlertDialogRootProps,
  AlertDialogTriggerProps,
  AlertDialogPopupProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogCloseProps,
} from './AlertDialog.types'
import styles from './AlertDialog.module.css'

function Root({ open, defaultOpen, onOpenChange, children }: AlertDialogRootProps) {
  return (
    <BaseAlertDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </BaseAlertDialog.Root>
  )
}

function Trigger({ children, className, style }: AlertDialogTriggerProps) {
  return (
    <BaseAlertDialog.Trigger className={className} style={style}>
      {children}
    </BaseAlertDialog.Trigger>
  )
}

function Popup({ children, className, style }: AlertDialogPopupProps) {
  const classes = [styles.popup, className].filter(Boolean).join(' ')
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className={styles.backdrop} />
      <BaseAlertDialog.Popup className={classes} style={style}>
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  )
}

function Title({ children, className, style }: AlertDialogTitleProps) {
  const classes = [styles.title, className].filter(Boolean).join(' ')
  return (
    <BaseAlertDialog.Title className={classes} style={style}>
      {children}
    </BaseAlertDialog.Title>
  )
}

function Description({ children, className, style }: AlertDialogDescriptionProps) {
  const classes = [styles.description, className].filter(Boolean).join(' ')
  return (
    <BaseAlertDialog.Description className={classes} style={style}>
      {children}
    </BaseAlertDialog.Description>
  )
}

function Close({ children, className, style }: AlertDialogCloseProps) {
  return (
    <BaseAlertDialog.Close className={className} style={style}>
      {children}
    </BaseAlertDialog.Close>
  )
}

export const AlertDialog = {
  Root,
  Trigger,
  Popup,
  Title,
  Description,
  Close,
}
