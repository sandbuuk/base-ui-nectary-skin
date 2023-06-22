import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/input'

const inputStyles: CSSProperties = {
  width: 300,
}

export const SimpleExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      style={inputStyles}
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
