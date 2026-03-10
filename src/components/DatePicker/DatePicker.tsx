import { useState } from 'react'
import { Popover as BasePopover } from '@base-ui-components/react/popover'
import type { DatePickerProps } from './DatePicker.types'
import styles from './DatePicker.module.css'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month, 1)
  const startDay = first.getDay()
  const days: { date: Date; current: boolean }[] = []

  // Previous month padding
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), current: false })
  }
  // Current month
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), current: true })
  }
  // Next month padding
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({ date: new Date(year, month + 1, i), current: false })
  }
  return days
}

function formatDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function DatePicker({
  value: controlledValue,
  defaultValue,
  onValueChange,
  min,
  max,
  placeholder = 'Select date',
  disabled,
  className,
  style,
}: DatePickerProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue ?? null)
  const isControlled = controlledValue !== undefined
  const selected = isControlled ? controlledValue : internal
  const today = new Date()

  const [viewYear, setViewYear] = useState(selected?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth())

  const days = getCalendarDays(viewYear, viewMonth)

  const handleSelect = (date: Date) => {
    if (!isControlled) setInternal(date)
    onValueChange?.(date)
  }

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1) }
    else setViewMonth(viewMonth - 1)
  }

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1) }
    else setViewMonth(viewMonth + 1)
  }

  const isDisabled = (d: Date) => {
    if (min && d < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true
    if (max && d > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true
    return false
  }

  return (
    <BasePopover.Root>
      <BasePopover.Trigger
        className={[styles.trigger, className].filter(Boolean).join(' ')}
        style={style}
        disabled={disabled}
      >
        <span className={[styles.triggerText, !selected ? styles.placeholder : ''].join(' ')}>
          {selected ? formatDate(selected) : placeholder}
        </span>
        <svg className={styles.triggerIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M5 1v2M11 1v2M2 6h12M3 3h10a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={4}>
          <BasePopover.Popup className={styles.calendar}>
            <div className={styles.header}>
              <button className={styles.navBtn} onClick={prevMonth} aria-label="Previous month" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className={styles.monthYear}>{MONTHS[viewMonth]} {viewYear}</span>
              <button className={styles.navBtn} onClick={nextMonth} aria-label="Next month" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className={styles.weekdays}>
              {WEEKDAYS.map((d) => (
                <span key={d} className={styles.weekday}>{d}</span>
              ))}
            </div>

            <div className={styles.days}>
              {days.map(({ date, current }, i) => {
                const isSelected = selected && isSameDay(date, selected)
                const isToday = isSameDay(date, today)
                const dayDisabled = isDisabled(date)
                return (
                  <button
                    key={i}
                    className={[
                      styles.day,
                      !current ? styles.otherMonth : '',
                      isToday && !isSelected ? styles.today : '',
                      isSelected ? styles.selected : '',
                    ].join(' ')}
                    disabled={dayDisabled}
                    onClick={() => handleSelect(date)}
                    type="button"
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}
