import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/date-picker'

type TDatePicker = {
  search: URLSearchParams,
}

export const DatePicker: FC<TDatePicker> = ({ search }) => {
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

  return (
    <sinch-date-picker
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
