import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/time-picker'

export const SimpleExample: FC = () => {
  const [isoValue, setIsoValue] = useState('10:30')

  const onIsoChange = (e: CustomEvent<string>) => {
    setIsoValue(e.detail)
  }

  return (
    <sinch-time-picker
      slot="content"
      aria-label="Time Picker"
      submit-aria-label="Submit time"
      value={isoValue}
      on-change={onIsoChange}
    />
  )
}
