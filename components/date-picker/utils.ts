const DAYS_IN_WEEK = 7

type TCalendarOptions = {
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6,
}

type TMaybeDate = Date | null

const pad = (value: number): string => {
  return value.toString().padStart(2, '0')
}

export const getCalendarMonth = (date: Date, options?: TCalendarOptions): TMaybeDate[][] => {
  const { firstDayOfWeek } = {
    firstDayOfWeek: 1,
    ...options,
  }
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

export const dateToIso = (date: Date): string => {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
}

export const isoToDate = (value: string): Date => {
  return new Date(`${value.substring(0, 10)}T00:00:00Z`)
}

export const today = (): Date => {
  const today = new Date()

  return new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
}

export const getDayNames = (locale: string): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'narrow', timeZone: 'UTC' })

  return [1, 2, 3, 4, 5, 6, 7].map((dd) => {
    const date = new Date(Date.UTC(2018, 0, dd))

    return formatter.format(date)
  })
}

export const getMonthNames = (locale: string): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' })

  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((mm) => {
    const date = new Date(Date.UTC(2018, mm, 1))

    return formatter.format(date)
  })
}

export const isValidDate = (value: any): value is Date => {
  return value instanceof Date && !isNaN(value as any)
}

export const compareDates = (a: Date, b: Date): number => {
  return a.getTime() - b.getTime()
}

export const clampMinDate = (date: Date, min: Date): void => {
  if (compareDates(min, date) > 0) {
    date.setTime(min.getTime())
  }
}

export const clampMaxDate = (date: Date, max: Date): void => {
  if (compareDates(date, max) > 0) {
    date.setTime(max.getTime())
  }
}

export const incMonth = (date: Date, max: Date): void => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()

  // Calculate the next month and year
  let nextMonth = currentMonth + 1
  let nextYear = currentYear

  if (nextMonth > 11) {
    nextMonth = 0
    nextYear++
  }

  // Get the last day of next month
  const nextMonthLastDay = new Date(Date.UTC(nextYear, nextMonth + 1, 0))
  const maxDayInNextMonth = nextMonthLastDay.getUTCDate()

  // Use the minimum of current day and max day in next month
  const targetDay = Math.min(currentDay, maxDayInNextMonth)

  // Set the date to the target day of next month
  date.setUTCFullYear(nextYear, nextMonth, targetDay)

  clampMaxDate(date, max)
}
export const decMonth = (date: Date, min: Date): void => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()

  // Calculate the previous month and year
  let prevMonth = currentMonth - 1
  let prevYear = currentYear

  if (prevMonth < 0) {
    prevMonth = 11
    prevYear--
  }

  // Get the last day of previous month
  const prevMonthLastDay = new Date(Date.UTC(prevYear, prevMonth + 1, 0))
  const maxDayInPrevMonth = prevMonthLastDay.getUTCDate()

  // Use the minimum of current day and max day in previous month
  const targetDay = Math.min(currentDay, maxDayInPrevMonth)

  // Set the date to the target day of previous month
  date.setUTCFullYear(prevYear, prevMonth, targetDay)

  clampMinDate(date, min)
}
export const incYear = (date: Date, max: Date): void => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()
  const nextYear = currentYear + 1

  // Check if current date is Feb 29th and next year is not a leap year
  if (currentMonth === 1 && currentDay === 29) {
    // Check if next year is a leap year
    const isNextYearLeap = new Date(Date.UTC(nextYear, 1, 29)).getUTCDate() === 29

    if (!isNextYearLeap) {
      // If next year is not a leap year, use Feb 28th
      date.setUTCFullYear(nextYear, currentMonth, 28)
    } else {
      // If next year is a leap year, keep Feb 29th
      date.setUTCFullYear(nextYear, currentMonth, currentDay)
    }
  } else {
    // For all other dates, just increment the year
    date.setUTCFullYear(nextYear, currentMonth, currentDay)
  }

  clampMaxDate(date, max)
}

export const decYear = (date: Date, min: Date): void => {
  const currentDay = date.getUTCDate()
  const currentMonth = date.getUTCMonth()
  const currentYear = date.getUTCFullYear()
  const prevYear = currentYear - 1

  // Check if current date is Feb 29th and previous year is not a leap year
  if (currentMonth === 1 && currentDay === 29) {
    // Check if previous year is a leap year
    const isPrevYearLeap = new Date(Date.UTC(prevYear, 1, 29)).getUTCDate() === 29

    if (!isPrevYearLeap) {
      // If previous year is not a leap year, use Feb 28th
      date.setUTCFullYear(prevYear, currentMonth, 28)
    } else {
      // If previous year is a leap year, keep Feb 29th
      date.setUTCFullYear(prevYear, currentMonth, currentDay)
    }
  } else {
    // For all other dates, just decrement the year
    date.setUTCFullYear(prevYear, currentMonth, currentDay)
  }

  clampMinDate(date, min)
}

export const canGoPrevMonth = (date: Date, min: Date): boolean => {
  const prevMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 0))

  return compareDates(prevMonth, min) >= 0
}

export const canGoNextMonth = (date: Date, max: Date): boolean => {
  const nextMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1))

  return compareDates(max, nextMonth) >= 0
}

export const canGoNextYear = (date: Date, max: Date): boolean => {
  const nextYear = new Date(Date.UTC(date.getUTCFullYear() + 1, 0, 1))

  return compareDates(max, nextYear) >= 0
}

export const canGoPrevYear = (date: Date, min: Date): boolean => {
  const prevYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 0))

  return compareDates(prevYear, min) >= 0
}

export const isDateBetween = (date: Date, min: Date | null, max: Date | null): boolean => {
  if (min === null || max === null) {
    return false
  }

  return compareDates(date, min) >= 0 && compareDates(max, date) >= 0
}

export const areDatesEqual = (a: Date, b: Date | null): boolean => {
  if (b === null) {
    return false
  }

  return compareDates(a, b) === 0
}

export const cloneDate = (date: Date): Date => {
  return new Date(date.getTime())
}

export const sortDates = (dateTuple: [Date, Date]): [Date, Date] => {
  if (compareDates(dateTuple[0], dateTuple[1]) > 0) {
    return [dateTuple[1], dateTuple[0]]
  }

  return dateTuple
}

export const isDateOnScreen = (uiDate: Date | null, date: Date | null) => {
  if (uiDate === null || date === null) {
    return false
  }

  const firstDateOfMonth = new Date(Date.UTC(uiDate.getUTCFullYear(), uiDate.getUTCMonth(), 1))
  const lastDateOfMonth = new Date(Date.UTC(uiDate.getUTCFullYear(), uiDate.getUTCMonth() + 1, 0))

  return isDateBetween(date, firstDateOfMonth, lastDateOfMonth)
}
