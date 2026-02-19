import { Textarea } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const RowsExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      rows={5}
      value={value}
      onChange={setValue}
    />
  )
}
