import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'

export const DisabledExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      disabled
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
