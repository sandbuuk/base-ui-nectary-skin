import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'

export const TooltipExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      label="Input"
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      onChange={(e) => setState(e.nativeEvent.detail)}
    >
      <sinch-help-tooltip slot="tooltip" text="Tooltip text"/>
    </sinch-input>
  )
}
