import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/calendar-today'

export const OnFocusStopPropagationExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
      onFocus={() => console.log('INPUT FOCUS')}
    >
      <sinch-icon-button
        slot="right"
        aria-label="Test"
        size="s"
        onFocus={(e) => {
          e.stopPropagation()
          console.log('BUTTON FOCUS')
        }}
      >
        <sinch-icon-calendar-today slot="icon"/>
      </sinch-icon-button>
    </sinch-input>
  )
}
