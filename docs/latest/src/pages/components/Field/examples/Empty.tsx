import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/input'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const EmptyExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-field
      additionalText="Additional text"
      invalidText="Invalid text"
      style={fieldStyles}
    >
      <sinch-input
        slot="input"
        aria-label="Input"
        placeholder="Placeholder"
        value={state}
        on-change={(e) => setState(e.detail)}
      />
    </sinch-field>
  )
}
