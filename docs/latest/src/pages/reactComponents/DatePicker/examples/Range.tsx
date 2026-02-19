import { DatePicker } from '@nectary/react'
import { type FC, useState } from 'react'

export const RangeExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <DatePicker
      min="2021-12-25"
      max="2025-07-19"
      locale="en-US"
      aria-label="Date Picker"
      nextMonthAriaLabel="Next Month"
      prevMonthAriaLabel="Prev Month"
      nextYearAriaLabel="Next Year"
      prevYearAriaLabel="Prev Year"
      range
      value={value}
      onChange={setValue}
    />
  )
}
