import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'

export const SimpleExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
