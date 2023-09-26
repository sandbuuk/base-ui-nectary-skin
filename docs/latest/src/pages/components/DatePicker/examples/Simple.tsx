import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/date-picker'

export const SimpleExample: FC = () => {
  const [pickerValue, setPickerValue] = useState('2022-07-19')

  const onPickerChange = (e: CustomEvent<string>) => {
    setPickerValue(e.detail)
  }

  return (
    <sinch-date-picker
      slot="content"
      min="2021-12-25"
      max="2025-07-19"
      locale="en-US"
      aria-label="Date Picker"
      next-month-aria-label="Next Month"
      prev-month-aria-label="Next Month"
      next-year-aria-label="Next Year"
      prev-year-aria-label="Prev Year"
      value={pickerValue}
      on-change={onPickerChange}
    />
  )
}
