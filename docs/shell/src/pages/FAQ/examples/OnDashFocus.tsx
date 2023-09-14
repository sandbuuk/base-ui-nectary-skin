import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/calendar-today'

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
        size="s"
        on-focus={() => console.log('BUTTON FOCUS')}
      >
        <sinch-icon-calendar-today slot="icon"/>
      </sinch-icon-button>
    </sinch-input>
  )
}
