import { Textarea } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const ResizableExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      resizable
      minRows={1}
      value={value}
      onChange={setValue}
    />
  )
}
