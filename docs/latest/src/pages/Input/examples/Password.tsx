import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/help-tooltip'
import '@nectary/components/input'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const PasswordExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-field
      label="Password"
      style={fieldStyles}
    >
      <sinch-help-tooltip slot="tooltip" text="Use lowercase and uppercase letters"/>
      <sinch-input
        slot="input"
        type="password"
        aria-label="Password Input"
        placeholder="Enter your password"
        value={state}
        on-change={(e) => setState(e.detail)}
      />
    </sinch-field>
  )
}
