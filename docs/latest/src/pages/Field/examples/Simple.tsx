import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/input'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const SimpleExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-field
      label="Input"
      additionalText="Additional text"
      optionalText="Optional text"
      invalidText="Invalid text"
      style={fieldStyles}
    >
      <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
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
