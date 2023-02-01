import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/textarea'

export const FieldExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-field
      label="Textarea"
      additionalText="Additional text"
      optionalText="Optional text"
      invalidText="Invalid text"
    >
      <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
      <sinch-textarea
        slot="input"
        aria-label="Textarea"
        placeholder="Placeholder"
        value={state}
        on-change={(e) => setState(e.detail)}
      />
    </sinch-field>
  )
}
