import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import { cn } from '../../utils/cn'
import { Button } from '../button'
import { Icon } from '../icon'

// ============================================================================
// Date Utility Functions (adapted from components/date-picker/utils.ts)
// ============================================================================

const DAYS_IN_WEEK = 7

type TMaybeDate = Date | null

const pad = (value: number): string => {
  return value.toString().padStart(2, '0')
}

const getCalendarMonth = (date: Date): TMaybeDate[][] => {
  const firstDayOfWeek = 1 // Monday
  const firstDateOfMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1))
  const lastDateOfMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0))
  const firstWeekdayOfMonth = firstDateOfMonth.getUTCDay()
  const lastWeekdayOfMonth = lastDateOfMonth.getUTCDay()
  const daysInMonth = lastDateOfMonth.getUTCDate()
  const daysToPrepend = (firstWeekdayOfMonth - firstDayOfWeek + DAYS_IN_WEEK) % DAYS_IN_WEEK
  const daysToAppend = (DAYS_IN_WEEK - 1 - lastWeekdayOfMonth + firstDayOfWeek) % DAYS_IN_WEEK
  const month: TMaybeDate[][] = []
  let week: TMaybeDate[] = []

  for (let i = 1 - daysToPrepend; i <= daysInMonth + daysToAppend + 1; i++) {
    if (i <= 0 || i > daysInMonth) {
      week.push(null)
    } else {
      const result = new Date(date)
      result.setUTCDate(i)
      week.push(result)
    }

    if (week.length === 7) {
      month.push(week)
      week = []
    }
  }

  return month
}

const dateToIso = (date: Date): string => {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
}

const isoToDate = (value: string): Date | null => {
  if (value === '' || value === null || value === undefined) return null
  const date = new Date(`${value.substring(0, 10)}T00:00:00Z`)
  return isNaN(date.getTime()) ? null : date
}

const getToday = (): Date => {
  const today = new Date()
  return new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
}

const getDayNames = (locale: string): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'narrow', timeZone: 'UTC' })
  return [1, 2, 3, 4, 5, 6, 7].map((dd) => {
    const date = new Date(Date.UTC(2018, 0, dd))
    return formatter.format(date)
  })
}

const getMonthNames = (locale: string): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' })
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((mm) => {
    const date = new Date(Date.UTC(2018, mm, 1))
    return formatter.format(date)
  })
}

const compareDates = (a: Date, b: Date): number => {
  return a.getTime() - b.getTime()
}

const areDatesEqual = (a: Date, b: Date | null): boolean => {
  if (b === null) return false
  return compareDates(a, b) === 0
}

const isDateBetween = (date: Date, min: Date | null, max: Date | null): boolean => {
  if (min === null || max === null) return false
  return compareDates(date, min) >= 0 && compareDates(max, date) >= 0
}

const sortDates = (dateTuple: [Date, Date]): [Date, Date] => {
  if (compareDates(dateTuple[0], dateTuple[1]) > 0) {
    return [dateTuple[1], dateTuple[0]]
  }
  return dateTuple
}

const canGoPrevMonth = (date: Date, min: Date): boolean => {
  const prevMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 0))
  return compareDates(prevMonth, min) >= 0
}

const canGoNextMonth = (date: Date, max: Date): boolean => {
  const nextMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1))
  return compareDates(max, nextMonth) >= 0
}

const canGoNextYear = (date: Date, max: Date): boolean => {
  const nextYear = new Date(Date.UTC(date.getUTCFullYear() + 1, 0, 1))
  return compareDates(max, nextYear) >= 0
}

const canGoPrevYear = (date: Date, min: Date): boolean => {
  const prevYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 0))
  return compareDates(prevYear, min) >= 0
}

const clampToRange = (date: Date, min: Date, max: Date): Date => {
  const result = new Date(date.getTime())
  if (compareDates(result, min) < 0) {
    result.setTime(min.getTime())
  }
  if (compareDates(result, max) > 0) {
    result.setTime(max.getTime())
  }
  return result
}

const incMonth = (date: Date, max: Date): Date => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()

  let nextMonth = currentMonth + 1
  let nextYear = currentYear

  if (nextMonth > 11) {
    nextMonth = 0
    nextYear++
  }

  const nextMonthLastDay = new Date(Date.UTC(nextYear, nextMonth + 1, 0))
  const maxDayInNextMonth = nextMonthLastDay.getUTCDate()
  const targetDay = Math.min(currentDay, maxDayInNextMonth)

  const result = new Date(Date.UTC(nextYear, nextMonth, targetDay))
  return clampToRange(result, date, max)
}

const decMonth = (date: Date, min: Date): Date => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()

  let prevMonth = currentMonth - 1
  let prevYear = currentYear

  if (prevMonth < 0) {
    prevMonth = 11
    prevYear--
  }

  const prevMonthLastDay = new Date(Date.UTC(prevYear, prevMonth + 1, 0))
  const maxDayInPrevMonth = prevMonthLastDay.getUTCDate()
  const targetDay = Math.min(currentDay, maxDayInPrevMonth)

  const result = new Date(Date.UTC(prevYear, prevMonth, targetDay))
  return clampToRange(result, min, date)
}

const incYear = (date: Date, max: Date): Date => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()
  const nextYear = currentYear + 1

  let targetDay = currentDay
  if (currentMonth === 1 && currentDay === 29) {
    const isNextYearLeap = new Date(Date.UTC(nextYear, 1, 29)).getUTCDate() === 29
    if (!isNextYearLeap) {
      targetDay = 28
    }
  }

  const result = new Date(Date.UTC(nextYear, currentMonth, targetDay))
  return clampToRange(result, date, max)
}

const decYear = (date: Date, min: Date): Date => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()
  const prevYear = currentYear - 1

  let targetDay = currentDay
  if (currentMonth === 1 && currentDay === 29) {
    const isPrevYearLeap = new Date(Date.UTC(prevYear, 1, 29)).getUTCDate() === 29
    if (!isPrevYearLeap) {
      targetDay = 28
    }
  }

  const result = new Date(Date.UTC(prevYear, currentMonth, targetDay))
  return clampToRange(result, min, date)
}

const packCsv = (values: string[]): string => values.join(',')
const unpackCsv = (value: string): string[] => value.split(',').filter(Boolean)

// ============================================================================
// Component
// ============================================================================

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Date value in ISO 8601 format (YYYY-MM-DD)
   * For range mode, use comma-separated values (YYYY-MM-DD,YYYY-MM-DD)
   */
  value?: string,
  /**
   * Default value for uncontrolled mode
   */
  defaultValue?: string,
  /**
   * Minimum date in ISO 8601 format
   */
  min?: string,
  /**
   * Maximum date in ISO 8601 format
   */
  max?: string,
  /**
   * BCP 47 language tag (e.g. en-US) for localized day and month names
   * @default 'en-US'
   */
  locale?: string,
  /**
   * Enable date range selection mode
   * @default false
   */
  range?: boolean,
  /**
   * Callback when date value changes
   */
  onChange?: (value: string) => void,
  /**
   * Allow clearing the selected date
   * @default false
   */
  clearable?: boolean,
  /**
   * Callback when the date value is cleared
   */
  onClear?: () => void,
  /**
   * Aria label for the previous year button
   */
  prevYearAriaLabel?: string,
  /**
   * Aria label for the next year button
   */
  nextYearAriaLabel?: string,
  /**
   * Aria label for the previous month button
   */
  prevMonthAriaLabel?: string,
  /**
   * Aria label for the next month button
   */
  nextMonthAriaLabel?: string,
}

/**
 * DatePicker component for selecting dates.
 *
 * Supports single date selection and date range selection modes.
 * Uses locale-aware month and day names.
 *
 * @example
 * ```tsx
 * // Single date
 * <DatePicker value="2024-01-15" onChange={(date) => console.log(date)} />
 *
 * // Date range
 * <DatePicker range value="2024-01-15,2024-01-20" onChange={(range) => console.log(range)} />
 *
 * // With min/max constraints
 * <DatePicker min="2024-01-01" max="2024-12-31" />
 * ```
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = '',
      min = '1900-01-01',
      max = '2100-12-31',
      locale = 'en-US',
      range = false,
      clearable = false,
      onClear,
      onChange,
      prevYearAriaLabel = 'Previous year',
      nextYearAriaLabel = 'Next year',
      prevMonthAriaLabel = 'Previous month',
      nextMonthAriaLabel = 'Next month',
      ...props
    },
    ref
  ) => {
    // Controlled/uncontrolled pattern
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = useState(defaultValue)
    const value = isControlled ? controlledValue : internalValue

    // Parse min/max dates
    const minDate = useMemo(() => isoToDate(min) ?? new Date(Date.UTC(1900, 0, 1)), [min])
    const maxDate = useMemo(() => isoToDate(max) ?? new Date(Date.UTC(2100, 11, 31)), [max])

    // Parse selected dates from value
    const { date1, date2 } = useMemo(() => {
      if (range) {
        const isoDates = unpackCsv(value)
        if (isoDates.length === 2) {
          const d1 = isoToDate(isoDates[0])
          const d2 = isoToDate(isoDates[1])
          if (d1 !== null && d2 !== null) {
            const sorted = sortDates([d1, d2])
            return { date1: sorted[0], date2: sorted[1] }
          }
        }
        if (isoDates.length === 1) {
          const d1 = isoToDate(isoDates[0])
          return { date1: d1, date2: null }
        }
        return { date1: null, date2: null }
      }
      // Single select mode
      const d = isoToDate(value)
      return { date1: d, date2: null }
    }, [value, range])

    // UI state: which month/year is displayed
    const [uiDate, setUiDate] = useState<Date>(() => {
      // Initialize to selected date, first date of range, or today
      const initialDate = date1 ?? getToday()
      return clampToRange(initialDate, minDate, maxDate)
    })

    // Range selection in-progress state
    const [rangeStart, setRangeStart] = useState<Date | null>(null)
    const [hoverDate, setHoverDate] = useState<Date | null>(null)

    // Update UI date when value changes externally
    useEffect(() => {
      if (date1 !== null) {
        setUiDate((prev) => {
          // Only update if the selected date is not visible on current screen
          const isOnScreen =
            date1.getUTCMonth() === prev.getUTCMonth() &&
            date1.getUTCFullYear() === prev.getUTCFullYear()
          if (!isOnScreen) {
            return clampToRange(date1, minDate, maxDate)
          }
          return prev
        })
      }
    }, [date1, minDate, maxDate])

    // Localized names
    const dayNames = useMemo(() => getDayNames(locale), [locale])
    const monthNames = useMemo(() => getMonthNames(locale), [locale])

    // Calendar grid for current UI month
    const calendarMonth = useMemo(() => getCalendarMonth(uiDate), [uiDate])

    // Today's date for highlighting
    const todayDate = useMemo(() => getToday(), [])

    // Navigation handlers
    const handlePrevMonth = useCallback(() => {
      setUiDate((prev) => decMonth(prev, minDate))
    }, [minDate])

    const handleNextMonth = useCallback(() => {
      setUiDate((prev) => incMonth(prev, maxDate))
    }, [maxDate])

    const handlePrevYear = useCallback(() => {
      setUiDate((prev) => decYear(prev, minDate))
    }, [minDate])

    const handleNextYear = useCallback(() => {
      setUiDate((prev) => incYear(prev, maxDate))
    }, [maxDate])

    // Date click handler
    const handleDateClick = useCallback(
      (date: Date) => {
        const dateIso = dateToIso(date)

        if (range) {
          if (rangeStart !== null) {
            // Complete range selection
            const sorted = sortDates([rangeStart, date])
            const newValue = packCsv(sorted.map(dateToIso))
            if (!isControlled) {
              setInternalValue(newValue)
            }
            onChange?.(newValue)
            setRangeStart(null)
            setHoverDate(null)
          } else {
            // Start range selection
            setRangeStart(date)
          }
        } else {
          // Single date mode
          if (!isControlled) {
            setInternalValue(dateIso)
          }
          onChange?.(dateIso)
        }
      },
      [range, rangeStart, isControlled, onChange]
    )

    // Hover handler for range preview
    const handleDateMouseEnter = useCallback(
      (date: Date) => {
        if (range && rangeStart !== null) {
          setHoverDate(date)
        }
      },
      [range, rangeStart]
    )

    const handleMouseLeave = useCallback(() => {
      setHoverDate(null)
    }, [])

    // Determine if a date should show range highlight
    const isInRange = useCallback(
      (date: Date): boolean => {
        // Completed range
        if (date1 !== null && date2 !== null) {
          return (
            isDateBetween(date, date1, date2) &&
            !areDatesEqual(date, date1) &&
            !areDatesEqual(date, date2)
          )
        }
        // In-progress range with hover
        if (rangeStart !== null && hoverDate !== null) {
          const sorted = sortDates([rangeStart, hoverDate])
          return (
            isDateBetween(date, sorted[0], sorted[1]) &&
            !areDatesEqual(date, sorted[0]) &&
            !areDatesEqual(date, sorted[1])
          )
        }
        return false
      },
      [date1, date2, rangeStart, hoverDate]
    )

    // Check if a date is selected
    const isSelected = useCallback(
      (date: Date): boolean => {
        return areDatesEqual(date, date1) || areDatesEqual(date, date2) || areDatesEqual(date, rangeStart)
      },
      [date1, date2, rangeStart]
    )

    // Check if a date is within min/max bounds
    const isDateEnabled = useCallback(
      (date: Date): boolean => {
        return isDateBetween(date, minDate, maxDate)
      },
      [minDate, maxDate]
    )

    // Navigation button disabled states
    const prevMonthDisabled = !canGoPrevMonth(uiDate, minDate)
    const nextMonthDisabled = !canGoNextMonth(uiDate, maxDate)
    const prevYearDisabled = !canGoPrevYear(uiDate, minDate)
    const nextYearDisabled = !canGoNextYear(uiDate, maxDate)

    // Header text
    const headerText = `${monthNames[uiDate.getUTCMonth()]} ${uiDate.getUTCFullYear()}`

    return (
      <div
        ref={ref}
        className={cn('inline-block outline-none', className)}
        onMouseLeave={handleMouseLeave}
        data-value={value ?? undefined}
        {...props}
      >
        <div className="box-border w-fit p-4 flex flex-col gap-2">
          {/* Header with navigation */}
          <div className="flex flex-row h-8 items-center">
            <Button
              size="s"
              variant="subtle-secondary"
              icon={<Icon name="fa-angles-left" iconsVersion="2" size="sm" />}
              disabled={prevYearDisabled}
              onClick={handlePrevYear}
              aria-label={prevYearAriaLabel}
              className="-ml-1"
            />
            <Button
              size="s"
              variant="subtle-secondary"
              icon={<Icon name="fa-angle-left" iconsVersion="2" size="sm" />}
              disabled={prevMonthDisabled}
              onClick={handlePrevMonth}
              aria-label={prevMonthAriaLabel}
            />
            <span
              role="status"
              className={cn(
                'flex-1 text-center capitalize',
                'font-[var(--sinch-comp-date-picker-font-header)]',
                'text-[var(--sinch-comp-date-picker-header-color-default-text-initial)]'
              )}
              aria-live="polite"
            >
              {headerText}
            </span>
            <Button
              size="s"
              variant="subtle-secondary"
              icon={<Icon name="fa-angle-right" iconsVersion="2" size="sm" />}
              disabled={nextMonthDisabled}
              onClick={handleNextMonth}
              aria-label={nextMonthAriaLabel}
            />
            <Button
              size="s"
              variant="subtle-secondary"
              icon={<Icon name="fa-angles-right" iconsVersion="2" size="sm" />}
              disabled={nextYearDisabled}
              onClick={handleNextYear}
              aria-label={nextYearAriaLabel}
              className="-mr-1"
            />
          </div>

          {/* Weekday names */}
          <div className="flex flex-row gap-2 h-6">
            {dayNames.map((name, index) => (
              <div
                key={index}
                className={cn(
                  'w-6 h-6 leading-6 text-center uppercase select-none',
                  'font-[var(--sinch-comp-date-picker-font-weekday)]',
                  'text-[var(--sinch-comp-date-picker-weekday-color-default-text-initial)]'
                )}
              >
                {name}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="flex flex-col gap-2">
            {calendarMonth.map((week, weekIndex) => {
              // Check if week is empty (all null days)
              const isEmptyWeek = week.every((day) => day === null)
              if (isEmptyWeek) return null

              return (
                <div key={weekIndex} className="flex flex-row gap-2">
                  {week.map((day, dayIndex) => {
                    if (day === null) {
                      return (
                        <button
                          key={dayIndex}
                          type="button"
                          disabled
                          aria-hidden="true"
                          className={cn(
                            'w-6 h-6 leading-[22px] text-center box-border',
                            'rounded-[var(--sinch-comp-date-picker-day-shape-radius)]',
                            'font-[var(--sinch-comp-date-picker-font-day)]',
                            'bg-transparent border border-transparent select-none',
                            'cursor-default'
                          )}
                        />
                      )
                    }

                    const isToday = areDatesEqual(day, todayDate)
                    const selected = isSelected(day)
                    const inRange = isInRange(day)
                    const enabled = isDateEnabled(day)

                    return (
                      <button
                        key={dayIndex}
                        type="button"
                        disabled={!enabled}
                        onClick={() => handleDateClick(day)}
                        onMouseEnter={() => handleDateMouseEnter(day)}
                        data-date={dateToIso(day)}
                        className={cn(
                          'w-6 h-6 leading-[22px] text-center box-border select-none',
                          'rounded-[var(--sinch-comp-date-picker-day-shape-radius)]',
                          'border border-solid',
                          'transition-colors cursor-pointer',
                          'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1',
                          'focus-visible:outline-[var(--sinch-comp-date-picker-day-color-default-outline-focus)]',
                          // Default day styles
                          !isToday && !selected && [
                            'font-[var(--sinch-comp-date-picker-font-day)]',
                            'text-[var(--sinch-comp-date-picker-day-color-default-text-initial)]',
                            'bg-[var(--sinch-comp-date-picker-day-color-default-background-initial)]',
                            'border-[var(--sinch-comp-date-picker-day-color-default-border-initial)]',
                            enabled && 'hover:bg-[var(--sinch-comp-date-picker-day-color-default-background-hover)]',
                          ],
                          // Range highlight
                          inRange && !isToday && !selected && [
                            'bg-[var(--sinch-comp-date-picker-day-color-default-range-background)]',
                          ],
                          // Selected styles
                          selected && !isToday && [
                            'text-[var(--sinch-comp-date-picker-day-color-checked-text-initial)]',
                            'bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]',
                            'border-[var(--sinch-comp-date-picker-day-color-checked-border-initial)]',
                          ],
                          // Today styles (not selected)
                          isToday && !selected && [
                            'font-[var(--sinch-comp-date-picker-font-today)]',
                            'text-[var(--sinch-comp-date-picker-today-color-default-text-initial)]',
                            'bg-[var(--sinch-comp-date-picker-today-color-default-background-initial)]',
                            'border-[var(--sinch-comp-date-picker-today-color-default-border-initial)]',
                            enabled && 'hover:bg-[var(--sinch-comp-date-picker-today-color-default-background-hover)]',
                          ],
                          // Today selected styles
                          isToday && selected && [
                            'font-[var(--sinch-comp-date-picker-font-today)]',
                            'text-[var(--sinch-comp-date-picker-today-color-checked-text-initial)]',
                            'bg-[var(--sinch-comp-date-picker-today-color-checked-background-initial)]',
                            'border-[var(--sinch-comp-date-picker-today-color-checked-border-initial)]',
                          ],
                          // Disabled styles
                          !enabled && [
                            'cursor-default',
                            !isToday
                              ? 'text-[var(--sinch-comp-date-picker-day-color-disabled-text-initial)]'
                              : [
                                'text-[var(--sinch-comp-date-picker-today-color-disabled-text-initial)]',
                                'border-[var(--sinch-comp-date-picker-today-color-disabled-border-initial)]',
                              ],
                          ]
                        )}
                      >
                        {day.getUTCDate()}
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* Clear button */}
          {clearable && value && value.length > 0 && (
            <div className="flex justify-end">
              <Button
                size="s"
                variant="subtle-secondary"
                text="Clear"
                aria-label="Clear selected date"
                onClick={() => {
                  if (!isControlled) {
                    setInternalValue('')
                  }
                  onClear?.()
                  onChange?.('')
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
)
DatePicker.displayName = 'DatePicker'
