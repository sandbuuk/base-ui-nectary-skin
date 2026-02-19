import { Textarea } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const DisabledExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      disabled
      value={value}
      onChange={setValue}
    />
  )
}
