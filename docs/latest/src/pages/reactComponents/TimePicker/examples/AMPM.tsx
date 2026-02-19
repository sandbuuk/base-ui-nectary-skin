import { TimePicker } from '@nectary/react'
import { type FC, useState } from 'react'

export const AMPMExample: FC = () => {
  const [value, setValue] = useState('10:30:00')

  return (
    <TimePicker
      ampm
      aria-label="Time Picker"
      submitAriaLabel="Submit time"
      value={value}
      onChange={setValue}
    />
  )
}
