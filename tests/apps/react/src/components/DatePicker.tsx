import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/date-picker'

interface DatePickerProps {
  searchPrefix?: string,
  slot?: string,
}

export const DatePicker: FC<DatePickerProps> = ({ searchPrefix = 'date-picker', slot }) => {
  const [search] = useComponentSearchParams(searchPrefix)
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-date-picker-change', { detail: value }))
    setValue(value)
  }
  const min = search.get('min') ?? ''
  const max = search.get('max') ?? ''
  const locale = search.get('locale') ?? ''
  const isRange = search.get('range') != null
  const name = search.get('name') ?? ''

  return (
    <sinch-date-picker
      slot={slot}
      name={name}
      min={min}
      max={max}
      locale={locale}
      range={isRange}
      aria-label="Date picker"
      prev-month-aria-label="Previous month"
      next-month-aria-label="Next month"
      prev-year-aria-label="Previous year"
      next-year-aria-label="Next year"
      value={value}
      on-change={onChange}
    />
  )
}
