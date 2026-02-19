import { Textarea } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const MinRowsExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      resizable
      minRows={3}
      rows={5}
      value={value}
      onChange={setValue}
    />
  )
}
