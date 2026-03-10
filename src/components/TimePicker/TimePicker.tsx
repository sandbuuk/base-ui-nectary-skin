import { useState, useMemo } from 'react'
import { Popover as BasePopover } from '@base-ui-components/react/popover'
import type { TimePickerProps } from './TimePicker.types'
import styles from './TimePicker.module.css'

function generateTimeOptions(step: number): string[] {
  const options: string[] = []
  for (let m = 0; m < 1440; m += step) {
    const h = Math.floor(m / 60)
    const min = m % 60
    options.push(`${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`)
  }
  return options
}

export function TimePicker({
  value: controlledValue,
  defaultValue,
  onValueChange,
  step = 30,
  disabled,
  placeholder = 'Select time',
  className,
  style,
}: TimePickerProps) {
  const [internal, setInternal] = useState(defaultValue ?? '')
  const isControlled = controlledValue !== undefined
  const current = isControlled ? (controlledValue ?? '') : internal

  const options = useMemo(() => generateTimeOptions(step), [step])

  const handleSelect = (time: string) => {
    if (!isControlled) setInternal(time)
    onValueChange?.(time)
  }

  return (
    <BasePopover.Root>
      <BasePopover.Trigger
        className={[styles.trigger, className].filter(Boolean).join(' ')}
        style={style}
        disabled={disabled}
      >
        <span className={[styles.triggerText, !current ? styles.placeholder : ''].join(' ')}>
          {current || placeholder}
        </span>
        <svg className={styles.triggerIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25" />
          <path d="M8 4v4l2.5 1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={4}>
          <BasePopover.Popup className={styles.dropdown}>
            {options.map((time) => (
              <button
                key={time}
                className={[styles.option, time === current ? styles.optionSelected : ''].join(' ')}
                onClick={() => handleSelect(time)}
                type="button"
              >
                {time}
              </button>
            ))}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}
