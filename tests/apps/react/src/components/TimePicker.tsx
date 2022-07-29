import { useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/time-picker'

type TTimePicker = {
  search: URLSearchParams,
}

export const TimePicker: FC<TTimePicker> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: SyntheticEvent<Element, CustomEvent>) => {
    const value = e.nativeEvent.detail

    window.dispatchEvent(new CustomEvent('sinch-time-picker-change', { detail: value }))
    setValue(value)

    console.log(value)
  }

  const isAmpm = search.get('ampm') !== null

  return (
    <sinch-time-picker
      aria-label="time input"
      submit-aria-label="submit time"
      ampm={isAmpm}
      value={value}
      onChange={onChange}
    />
  )
}
