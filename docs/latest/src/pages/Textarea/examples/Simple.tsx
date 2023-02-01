import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'

export const SimpleExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
