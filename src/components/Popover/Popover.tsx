import { Popover as BasePopover } from '@base-ui-components/react/popover'
import type {
  PopoverRootProps,
  PopoverTriggerProps,
  PopoverPopupProps,
  PopoverTitleProps,
  PopoverDescriptionProps,
  PopoverCloseProps,
} from './Popover.types'
import styles from './Popover.module.css'

function Root({ open, defaultOpen, onOpenChange, children }: PopoverRootProps) {
  return (
    <BasePopover.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </BasePopover.Root>
  )
}

function Trigger({ children, className, style }: PopoverTriggerProps) {
  return (
    <BasePopover.Trigger className={className} style={style}>
      {children}
    </BasePopover.Trigger>
  )
}

function Popup({
  side = 'bottom',
  align = 'center',
  sideOffset = 8,
  showArrow = false,
  children,
  className,
  style,
}: PopoverPopupProps) {
  const classes = [styles.popup, className].filter(Boolean).join(' ')
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BasePopover.Popup className={classes} style={style}>
          {showArrow && <BasePopover.Arrow className={styles.arrow} />}
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
}

function Title({ children, className, style }: PopoverTitleProps) {
  const classes = [styles.title, className].filter(Boolean).join(' ')
  return (
    <BasePopover.Title className={classes} style={style}>
      {children}
    </BasePopover.Title>
  )
}

function Description({ children, className, style }: PopoverDescriptionProps) {
  const classes = [styles.description, className].filter(Boolean).join(' ')
  return (
    <BasePopover.Description className={classes} style={style}>
      {children}
    </BasePopover.Description>
  )
}

function Close({ children, className, style }: PopoverCloseProps) {
  return (
    <BasePopover.Close className={className} style={style}>
      {children}
    </BasePopover.Close>
  )
}

export const Popover = {
  Root,
  Trigger,
  Popup,
  Title,
  Description,
  Close,
}
