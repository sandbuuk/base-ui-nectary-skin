import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'

export const MaskedDateExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      mask="00-00-0000@@dd/mm/yyyy"
      value={state}
      on-change={(e) => setState(e.detail)}
    />
  )
}
