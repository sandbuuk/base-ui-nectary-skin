import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/input'

export const MaskedSyntaxExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      mask="+46-\000"
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
