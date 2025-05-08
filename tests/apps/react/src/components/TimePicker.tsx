import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/time-picker'

export const TimePicker: FC = () => {
  const [search] = useComponentSearchParams('time-picker')
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-time-picker-change', { detail: value }))
    setValue(value)
  }

  const isAmpm = search.get('ampm') !== null

  return (
    <sinch-time-picker
      aria-label="Time input"
      submit-aria-label="Submit time"
      ampm={isAmpm}
      value={value}
      on-change={onChange}
    />
  )
}
