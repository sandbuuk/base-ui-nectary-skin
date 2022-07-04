import '@sinch-engage/nectary/input'
import { useState } from 'react'

export const Input = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      label="Input"
      value={state}
      onChange={(e) => setState(e.nativeEvent.detail)}
    />
  )
}
