import { DatePicker } from '@nectary/react'
import { type FC, useState } from 'react'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('2022-07-19')

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
      value={value}
      onChange={setValue}
    />
  )
}
