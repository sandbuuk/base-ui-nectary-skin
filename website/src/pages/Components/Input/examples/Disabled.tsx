import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'

export const DisabledExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      label="Input"
      aria-label="Input"
      placeholder="Placeholder"
      disabled
      value={state}
      onChange={(e) => setState(e.nativeEvent.detail)}
    />
  )
}
