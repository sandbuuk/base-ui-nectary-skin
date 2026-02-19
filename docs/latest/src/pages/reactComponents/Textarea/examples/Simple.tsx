import { Textarea } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      value={value}
      onChange={setValue}
    />
  )
}
