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
  const firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const firstWeekdayOfMonth = firstDateOfMonth.getDay()
  const lastWeekdayOfMonth = lastDateOfMonth.getDay()
  const daysInMonth = lastDateOfMonth.getDate()
  const daysToPrepend = (firstWeekdayOfMonth - firstDayOfWeek + DAYS_IN_WEEK) % DAYS_IN_WEEK
  const daysToAppend = (DAYS_IN_WEEK - 1 - lastWeekdayOfMonth + firstDayOfWeek) % DAYS_IN_WEEK
  const month: TMaybeDate[][] = []
  let week: TMaybeDate[] = []

  for (let i = 1 - daysToPrepend; i <= daysInMonth + daysToAppend + 1; i++) {
    if (i <= 0 || i > daysInMonth) {
      week.push(null)
    } else {
      const result = new Date(date)

      result.setDate(i)
      week.push(result)
    }

    if (week.length === 7) {
      month.push(week)
      week = []
    }
  }

  return month
}

export const today = (): Date => {
  return new Date()
}

export const dateToIso = (date: Date): string => {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const isoToDate = (value: string): Date => {
  return new Date(`${value.substring(0, 10)}T00:00:00`)
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

type TAssertMinMax = (value: string | null, attrName: string) => asserts value is string

export const assertMinMax: TAssertMinMax = (value, attrName) => {
  if (value == null || value === '') {
    throw new Error(`sinch-date-picker: missing or empty "${attrName}" attribute`)
  }
}

type TAssertValue = (value: string | null) => asserts value is string

export const assertValue: TAssertValue = (value) => {
  if (value == null) {
    throw new Error(`sinch-date-picker: missing "value" attribute`)
  }
}

type TAssertLocale = (value: string | null) => asserts value is string

export const assertLocale: TAssertLocale = (value) => {
  if (value === null || value.length === 0) {
    throw new Error(`sinch-date-picker: invalid locale attribute: ${value}`)
  }
}

type TAssertDate = (value: any, attrName: string, attrValue: string) => asserts value is Date

export const isValidDate = (value: any): value is Date => {
  return value instanceof Date && !isNaN(value as any)
}

export const assertDate: TAssertDate = (value, attrName, attrValue) => {
  if (!isValidDate(value)) {
    throw new Error(`sinch-date-picker: invalid "${attrName}" attribute: ${attrValue}`)
  }
}

const compareDates = (a: Date, b: Date): number => {
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
  date.setMonth(date.getMonth() + 1)

  clampMaxDate(date, max)
}
export const decMonth = (date: Date, min: Date): void => {
  date.setMonth(date.getMonth() - 1)

  clampMinDate(date, min)
}
export const incYear = (date: Date, max: Date): void => {
  date.setFullYear(date.getFullYear() + 1)

  clampMaxDate(date, max)
}

export const decYear = (date: Date, min: Date): void => {
  date.setFullYear(date.getFullYear() - 1)

  clampMinDate(date, min)
}

export const canGoPrevMonth = (date: Date, min: Date): boolean => {
  const prevMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 0))

  return compareDates(prevMonth, min) >= 0
}

export const canGoNextMonth = (date: Date, max: Date): boolean => {
  const nextMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 1))

  return compareDates(max, nextMonth) >= 0
}

export const canGoNextYear = (date: Date, max: Date): boolean => {
  const nextYear = new Date(Date.UTC(date.getFullYear() + 1, 0, 1))

  return compareDates(max, nextYear) >= 0
}

export const canGoPrevYear = (date: Date, min: Date): boolean => {
  const prevYear = new Date(Date.UTC(date.getFullYear(), 0, 0))

  return compareDates(prevYear, min) >= 0
}

export const isDateBetween = (date: Date, min: Date, max: Date): boolean => {
  return compareDates(date, min) >= 0 && compareDates(max, date) >= 0
}

export const areDatesEqual = (a: Date, b: Date): boolean => {
  return compareDates(a, b) === 0
}
