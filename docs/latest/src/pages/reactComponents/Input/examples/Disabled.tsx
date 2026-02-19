import { Input } from '@nectary/react'
import { type FC, useState } from 'react'

export const DisabledExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      value={value}
      onChange={setValue}
      placeholder="Placeholder"
      disabled
      aria-label="Input"
    />
  )
}
