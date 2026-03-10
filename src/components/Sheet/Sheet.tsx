import { Dialog as BaseDialog } from '@base-ui-components/react/dialog'
import type {
  SheetRootProps,
  SheetTriggerProps,
  SheetContentProps,
  SheetCloseProps,
} from './Sheet.types'
import styles from './Sheet.module.css'

function Root({ open, defaultOpen, onOpenChange, children }: SheetRootProps) {
  return (
    <BaseDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </BaseDialog.Root>
  )
}

function Trigger({ children, className, style }: SheetTriggerProps) {
  return (
    <BaseDialog.Trigger className={className} style={style}>
      {children}
    </BaseDialog.Trigger>
  )
}

function Content({ side = 'right', children, className, style }: SheetContentProps) {
  const classes = [styles.content, styles[side], className]
    .filter(Boolean)
    .join(' ')

  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className={styles.backdrop} />
      <BaseDialog.Popup className={classes} style={style}>
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}

function Close({ children, className, style }: SheetCloseProps) {
  return (
    <BaseDialog.Close className={className} style={style}>
      {children}
    </BaseDialog.Close>
  )
}

export const Sheet = { Root, Trigger, Content, Close }
