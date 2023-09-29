import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/help-tooltip'
import '@nectary/components/input'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const FieldExample: FC = () => {
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
