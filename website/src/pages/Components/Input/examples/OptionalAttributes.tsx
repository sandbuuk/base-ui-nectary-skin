import '@sinch-engage/nectary/input'
import { useState } from 'react'
import type { FC } from 'react'

export const OptionalAttributesExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      label="Input"
      aria-label="Input"
      placeholder="Placeholder"
      additionalText="Additional text"
      optionalText="Optional text"
      invalidText="Invalid text"
      value={state}
      onChange={(e) => setState(e.nativeEvent.detail)}
    />
  )
}
