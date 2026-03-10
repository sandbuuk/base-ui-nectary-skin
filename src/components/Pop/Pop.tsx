import { Popover } from '@base-ui-components/react/popover'
import type { PopProps } from './Pop.types'
import styles from './Pop.module.css'

export function Pop({
  open,
  onOpenChange,
  side = 'bottom',
  align = 'center',
  sideOffset = 8,
  children,
  content,
  className,
  style,
}: PopProps) {
  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Trigger render={<span />}>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side={side} align={align} sideOffset={sideOffset}>
          <Popover.Popup
            className={[styles.popup, className].filter(Boolean).join(' ')}
            style={style}
          >
            {content}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
