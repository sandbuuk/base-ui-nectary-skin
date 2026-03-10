import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip'
import type { TooltipProps } from './Tooltip.types'
import styles from './Tooltip.module.css'

export function Tooltip({
  label,
  children,
  side = 'top',
  delay = 600,
  className,
  style,
}: TooltipProps) {
  const classes = [styles.popup, className].filter(Boolean).join(' ')

  return (
    <BaseTooltip.Provider delay={delay}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner side={side} sideOffset={6}>
            <BaseTooltip.Popup className={classes} style={style}>
              <BaseTooltip.Arrow className={styles.arrow} />
              {label}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  )
}
