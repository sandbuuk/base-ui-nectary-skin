import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/textarea'

export const ResizableExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      resizable
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
