import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/input'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const NumberExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-field label="Number" style={fieldStyles}>
      <sinch-input
        slot="input"
        type="number"
        aria-label="Number Input"
        placeholder="Only numbers allowed here"
        value={state}
        on-change={(e) => setState(e.detail)}
      />
    </sinch-field>
  )
}
