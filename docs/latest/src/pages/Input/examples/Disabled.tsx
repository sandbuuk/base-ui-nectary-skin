import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/input'

export const DisabledExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      disabled
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
