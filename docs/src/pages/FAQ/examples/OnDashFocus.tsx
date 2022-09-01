import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

export const OnDashFocusExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
      on-focus={() => console.log('INPUT FOCUS')}
    >
      <sinch-icon-button
        slot="right"
        aria-label="Test"
        small
        on-focus={() => console.log('BUTTON FOCUS')}
      >
        <sinch-icon-calendar-today slot="icon"/>
      </sinch-icon-button>
    </sinch-input>
  )
}
